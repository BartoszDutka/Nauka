# -*- coding: utf-8 -*-
"""
Parser pliku Nauka-PRO-MAX.pdf (wyekstrahowanego do nauka_promax.txt).
Tworzy strukturalna baze pytan i zapisuje ja jako questions.js (osadzona
tablica JS) oraz questions.json.
"""
import json
import re
import unicodedata

SRC = "nauka_promax.txt"


def norm(text):
    # Normalizuj matematyczne litery unicode (np. 𝑇 -> T, 𝑝 -> p) i ligatury.
    return unicodedata.normalize("NFKC", text)

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

raw = re.sub(r"\n?===== PAGE \d+ =====\n?", "\n", raw)
lines = [l.rstrip() for l in raw.split("\n")]

RE_PYT = re.compile(r"^Pytanie\s+(\d+)\s*:\s*(.*)$")
RE_TEST = re.compile(r"^TEST\s+(\d+)\s*$")
# poprawne: "Poprawne odpowiedzi:", "Poprawna odpowiedz:", "Najbardziej poprawne...", "Z obrazu widac odpowiedzi:"
RE_CORRECT = re.compile(r"^((Najbardziej\s+)?Poprawn[ae]\s+odpowied|Z\s+obrazu\s+wida\u0107\s+odpowied)", re.IGNORECASE)
# niepoprawne / raczej
RE_WRONG = re.compile(r"^(Niepoprawn|Raczej|B\u0142\u0119dn|Dlaczego|Pozosta\u0142e odpowiedzi)", re.IGNORECASE)
# marker opcji literowanej: "a." / "a)" / "A."
RE_OPT_MARK = re.compile(r"^([a-zA-Z])[\)\.]\s+(.*)$")
RE_NOTE = re.compile(r"^Poj\u0119ci[ae] do notatki", re.IGNORECASE)
RE_INTU = re.compile(r"^Najwa\u017cniejsza intuicja", re.IGNORECASE)
# linie konczace liste odpowiedzi (dodatkowe, poboczne sekcje)
RE_OTHER = re.compile(r"^(W szerszym sensie|Mniej|Cz\u0119\u015bciowo|Dodatkowo|Uwaga)", re.IGNORECASE)
BULLET = "\u2022"


def is_bullet(line):
    return line.lstrip().startswith(BULLET)


def bullet_text(line):
    return line.lstrip()[len(BULLET):].strip()


def clean(x):
    return re.sub(r"\s+", " ", x).strip()


def strip_letter(x):
    return re.sub(r"^[a-zA-Z][\)\.]\s+", "", x).strip()


markers = []
current_test = None
for i, l in enumerate(lines):
    mt = RE_TEST.match(l.strip())
    if mt:
        current_test = int(mt.group(1))
        continue
    mp = RE_PYT.match(l.strip())
    if mp:
        markers.append((i, int(mp.group(1)), mp.group(2).strip(), current_test))

questions = []
for idx, (start, qnum, qhead, test_no) in enumerate(markers):
    end = markers[idx + 1][0] if idx + 1 < len(markers) else len(lines)
    block = lines[start:end]

    section = "question"
    q_lines = [qhead] if qhead else []
    correct_bullets = []
    wrong_bullets = []
    note_lines = []
    intu_lines = []

    for j, l in enumerate(block):
        if j == 0:
            continue
        s = l.strip()
        if not s:
            continue
        if RE_CORRECT.match(s):
            section = "correct"
            continue
        if RE_WRONG.match(s):
            section = "wrong"
            continue
        if RE_NOTE.match(s):
            section = "note"
            continue
        if RE_INTU.match(s):
            section = "intu"
            intu_lines.append("Najwazniejsza intuicja:")
            continue
        if section in ("correct", "wrong") and RE_OTHER.match(s):
            section = "other"
            continue
        # nie-bulletowa linia zakonczona ':' w trakcie listy = poczatek pobocznej sekcji
        if section in ("correct", "wrong") and (not is_bullet(l)) and s.endswith(":"):
            section = "other"
            continue

        if section == "question":
            q_lines.append(s)
        elif section == "correct":
            if is_bullet(l):
                correct_bullets.append(strip_letter(bullet_text(l)))
            elif RE_OPT_MARK.match(s):
                correct_bullets.append(RE_OPT_MARK.match(s).group(2).strip())
            elif correct_bullets:
                correct_bullets[-1] += " " + s
            else:
                correct_bullets.append(s)
        elif section == "wrong":
            if is_bullet(l):
                wrong_bullets.append(strip_letter(bullet_text(l)))
            elif RE_OPT_MARK.match(s):
                wrong_bullets.append(RE_OPT_MARK.match(s).group(2).strip())
            elif wrong_bullets:
                wrong_bullets[-1] += " " + s
        elif section == "note":
            note_lines.append(s)
        elif section == "intu":
            intu_lines.append(s)
        elif section == "other":
            # poboczne tresci traktujemy jako czesc wyjasnienia
            note_lines.append(s)

    question_text = clean(" ".join(q_lines))

    # odetnij od pytania ewentualny doklejony naglowek "Najbardziej poprawne..." (gdy byl w jednej linii)
    correct = [clean(c) for c in correct_bullets if clean(c)]
    wrong = [clean(w) for w in wrong_bullets if clean(w)]

    # deduplikacja zachowujaca kolejnosc
    def dedup(seq):
        seen = set()
        out = []
        for x in seq:
            k = x.lower()
            if k not in seen:
                seen.add(k)
                out.append(x)
        return out

    correct = dedup(correct)
    wrong = dedup(wrong)
    # odpowiedz nie moze byc jednoczesnie poprawna i bledna
    cl = {c.lower() for c in correct}
    wrong = [w for w in wrong if w.lower() not in cl]

    explanation_parts = []
    note_text = "\n".join(note_lines).strip()
    if note_text:
        explanation_parts.append(note_text)
    intu_text = "\n".join(intu_lines).strip()
    if intu_text:
        explanation_parts.append(intu_text)
    explanation = "\n\n".join(explanation_parts).strip()

    qtype = "mc" if correct else "open"

    # Dla pytan otwartych: oddziel polecenie od odpowiedzi/rozwiazania.
    open_answer = ""
    if qtype == "open":
        m = re.search(r"(Zale\u017cno\u015bci w kodzie|Odpowied\u017a|Z obrazu wida\u0107)", question_text)
        if m:
            open_answer = question_text[m.start():].strip()
            question_text = question_text[:m.start()].strip()
        if open_answer:
            explanation = (open_answer + "\n\n" + explanation).strip()

    questions.append({
        "id": len(questions) + 1,
        "test": test_no,
        "source_num": qnum,
        "type": qtype,
        "question": norm(question_text),
        "correct": [norm(c) for c in correct],
        "wrong": [norm(w) for w in wrong],
        "explanation": norm(explanation),
    })

mc = [q for q in questions if q["type"] == "mc"]
op = [q for q in questions if q["type"] == "open"]
print(f"Razem pytan: {len(questions)} | MC: {len(mc)} | otwarte: {len(op)} -> {[q['id'] for q in op]}")
print(f"MC bez blednych opcji (uzyja puli dystraktorow): {len([q for q in mc if not q['wrong']])}")
multi = [q for q in mc if len(q['correct']) > 1]
print(f"MC z wieloma poprawnymi: {len(multi)}")

with open("questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

with open("questions.js", "w", encoding="utf-8") as f:
    f.write("// Auto-generowana baza pytan z Nauka-PRO-MAX.pdf\n")
    f.write("const QUESTIONS = ")
    json.dump(questions, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Zapisano questions.json i questions.js")
