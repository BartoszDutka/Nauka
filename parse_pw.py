# -*- coding: utf-8 -*-
"""
Parser pliku PW-egzamin... .pdf
Poprawne odpowiedzi sa oznaczone zielonym podswietleniem (prostokat fill=(0,1,0)).
Pytania zamkniete -> wielokrotny wybor (poprawne = podswietlone opcje).
Pytania 'do wpisania' (bez opcji) -> typ open, odpowiedz = podswietlony tekst.
"""
import json
import re
import unicodedata
import pdfplumber

SRC = "PW-egzamin-opracowanie-pytan-2 (1) (1).pdf"


def norm(t):
    return unicodedata.normalize("NFKC", t)


def rect_color(rect):
    """Zwraca 'green', 'yellow' lub None dla danego prostokata."""
    c = rect.get("non_stroking_color")
    if not c:
        return None
    try:
        r, g, b = c
    except Exception:
        return None
    if g > 0.6 and r < 0.4 and b < 0.4:
        return "green"
    if r > 0.6 and g > 0.6 and b < 0.4:
        return "yellow"
    return None


def char_color(ch, rects):
    """Zwraca kolor zaznaczenia pod znakiem ('green'/'yellow') lub None."""
    cx = (ch["x0"] + ch["x1"]) / 2
    cy = (ch["top"] + ch["bottom"]) / 2
    for col, r in rects:
        if r["x0"] - 0.5 <= cx <= r["x1"] + 0.5 and r["top"] - 0.5 <= cy <= r["bottom"] + 0.5:
            return col
    return None


def get_lines(pdf):
    """Zwraca liste (text, status) gdzie status in {None,'green','yellow'}."""
    all_lines = []
    for page in pdf.pages:
        rects = [(rect_color(r), r) for r in page.rects]
        rects = [(c, r) for c, r in rects if c]
        chars = sorted(page.chars, key=lambda c: (round(c["top"]), c["x0"]))
        lines = []
        cur, cur_top = [], None
        for ch in chars:
            t = round(ch["top"])
            if cur_top is None or abs(t - cur_top) <= 3:
                cur.append(ch)
                if cur_top is None:
                    cur_top = t
            else:
                lines.append(cur)
                cur, cur_top = [ch], t
        if cur:
            lines.append(cur)
        for ln in lines:
            text = "".join(c["text"] for c in ln).strip()
            if not text:
                continue
            visible = [c for c in ln if c["text"].strip()]
            g = sum(1 for c in visible if char_color(c, rects) == "green")
            y = sum(1 for c in visible if char_color(c, rects) == "yellow")
            n = max(1, len(visible))
            status = None
            if g / n > 0.5:
                status = "green"
            elif y / n > 0.5:
                status = "yellow"
            elif (g + y) / n > 0.5:
                status = "green" if g >= y else "yellow"
            all_lines.append((norm(text), status))
    return all_lines


RE_Q = re.compile(r"^(\d+)\.\s+(.*)$")
RE_OPT = re.compile(r"^([a-z])[\)\.]\s+(.*)$")
RE_PAGEFOOT = re.compile(r"^--\s*\d+\s*of\s*\d+\s*--$")


def clean(x):
    return re.sub(r"\s+", " ", x).strip()


def parse():
    with pdfplumber.open(SRC) as pdf:
        lines = get_lines(pdf)

    # podziel na bloki pytan
    blocks = []
    cur = None
    section_extra = False  # "Zadania nadobowiazkowe"
    for text, st in lines:
        if RE_PAGEFOOT.match(text):
            continue
        if text.lower().startswith("zadania nadobow"):
            section_extra = True
            continue
        mq = RE_Q.match(text)
        if mq and (len(mq.group(1)) <= 3):
            cur = {"num": int(mq.group(1)), "stem_lines": [(mq.group(2), st)],
                   "options": [], "extra": section_extra}
            blocks.append(cur)
        else:
            if cur is None:
                continue
            mo = RE_OPT.match(text)
            if mo:
                cur["options"].append({"letter": mo.group(1), "text_lines": [(mo.group(2), st)]})
            else:
                if cur["options"]:
                    cur["options"][-1]["text_lines"].append((text, st))
                else:
                    cur["stem_lines"].append((text, st))
        if cur is not None and section_extra:
            cur["extra"] = True

    questions = []
    skipped = []
    for b in blocks:
        # status opcji: 'green' jesli ktorakolwiek linia zielona, inaczej 'yellow' jesli zolta
        opts = []
        for o in b["options"]:
            txt = clean(" ".join(t for t, _ in o["text_lines"]))
            statuses = [s for _, s in o["text_lines"] if s]
            if "green" in statuses:
                col = "green"
            elif "yellow" in statuses:
                col = "yellow"
            else:
                col = None
            if txt in ("??", "?", ""):
                continue
            opts.append((txt, col))

        if opts:
            green = [t for t, c in opts if c == "green"]
            yellow = [t for t, c in opts if c == "yellow"]
            wrong = [t for t, c in opts if c is None]
            if not green and not yellow:
                skipped.append(b["num"])  # brak klucza
                continue
            stem = clean(" ".join(t for t, _ in b["stem_lines"]))
            questions.append({
                "source": "PW",
                "source_num": b["num"],
                "extra": b["extra"],
                "type": "mc",
                "question": stem,
                "correct": green + yellow,   # niepewne tez liczymy jako poprawne
                "uncertain": yellow,         # ale oznaczamy je jako niepewne
                "wrong": wrong,
                "explanation": "",
            })
        else:
            # pytanie do wpisania: odpowiedz = podswietlone linie stem
            ans_green = [t for t, s in b["stem_lines"] if s == "green"]
            ans_yellow = [t for t, s in b["stem_lines"] if s == "yellow"]
            stem = clean(" ".join(t for t, s in b["stem_lines"] if not s))
            answer = clean(" ".join(ans_green + ans_yellow))
            if not answer:
                skipped.append(b["num"])
                continue
            uncertain_open = bool(ans_yellow) and not ans_green
            questions.append({
                "source": "PW",
                "source_num": b["num"],
                "extra": b["extra"],
                "type": "open",
                "question": stem,
                "correct": [],
                "uncertain": [],
                "uncertain_open": uncertain_open,
                "explanation": "Odpowiedź: " + answer,
            })

    print(f"PW: bloki={len(blocks)} pytania={len(questions)} pominiete(bez klucza)={skipped}")
    mc = [q for q in questions if q["type"] == "mc"]
    op = [q for q in questions if q["type"] == "open"]
    unc = [q for q in questions if q.get("uncertain") or q.get("uncertain_open")]
    print(f"  MC={len(mc)} open={len(op)} | z niepewnymi (zolte)={len(unc)}")
    with open("questions_pw.json", "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    return questions


if __name__ == "__main__":
    parse()
