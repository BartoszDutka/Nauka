# -*- coding: utf-8 -*-
"""
Parser Nauka-PRO-MAX z pliku NaukaFix.docx.
Format: zmienne_odpowiedzi, poprawne/niepoprawne, odpowiedz_koncowa,
omowienie_pojec_i_duze_wyjasnienia (osobno od odpowiedzi).
"""
import json
import re
import unicodedata
import zipfile
import xml.etree.ElementTree as ET

DOCX = "NaukaFix.docx"
W_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

RE_TEST = re.compile(r"^Test\s+(\d+)\s*$", re.I)
RE_PYT = re.compile(r"^Pytanie\s+(\d+)\s*:\s*(.*)$")
RE_OPT_MARK = re.compile(r"^([a-zA-Z])[\)\.]\s+(.*)$")
RE_OPEN_ANSWER = re.compile(r"^\d+\s*→|^zależności wyjścia|^[a-z]\s*=", re.I)
RE_CODE_HDR = re.compile(r"^treść\s*/\s*kod", re.I)

SECTION_MARKERS = frozenset({
    "zmienne_odpowiedzi",
    "poprawne_odpowiedzi",
    "niepoprawne_odpowiedzi",
    "odpowiedz_koncowa",
    "omowienie_pojec_i_duze_wyjasnienia",
    "odpowiedz",
    "poprawna",
    "wyjasnienie",
})

OPEN_PATTERNS = (
    "wypisz zależności",
    "jakie będą wartości zmiennych",
    "zanalizuj zależności przenoszone",
    "wartości zmiennych po zakończeniu pętli",
)


def norm(text):
    return unicodedata.normalize("NFKC", text)


def clean(x):
    return re.sub(r"\s+", " ", x).strip()


def strip_letter(x):
    m = RE_OPT_MARK.match(x.strip())
    return m.group(2).strip() if m else x.strip()


def is_section_marker(line):
    return line.lower() in SECTION_MARKERS


def is_bool_line(line):
    return line.lower() in ("true", "false")


def is_new_option(line):
    s = line.strip()
    if not s or is_section_marker(s) or is_bool_line(s):
        return False
    if RE_OPT_MARK.match(s):
        return True
    if RE_OPEN_ANSWER.match(s):
        return True
    return False


def is_open_question(text):
    q = text.lower()
    return any(p in q for p in OPEN_PATTERNS)


def split_assignments(text):
    found = re.findall(r"[a-z]\s*=\s*[^a-z=;]+", text)
    if len(found) > 1:
        return [x.strip() for x in found]
    parts = re.split(r"(?<=\d)(?=[a-z]\s*=)", text)
    out = [p.strip() for p in parts if p.strip()]
    return out if len(out) > 1 else [text.strip()]


def parse_answer_list(lines):
    out = []
    for line in lines:
        s = line.strip()
        if not s or s == "—":
            continue
        text = strip_letter(s)
        if text:
            out.append(text)
    return out


def dedup(seq):
    seen = set()
    out = []
    for x in seq:
        k = x.lower()
        if k not in seen:
            seen.add(k)
            out.append(x)
    return out


def extract_docx_paragraphs(path):
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read("word/document.xml"))
    paras = []
    for p in root.iter(f"{W_NS}p"):
        texts = []
        for t in p.iter(f"{W_NS}t"):
            if t.text:
                texts.append(t.text)
            if t.tail:
                texts.append(t.tail)
        line = "".join(texts).strip()
        if line:
            paras.append(line)
    return paras


def parse_docx(path):
    paras = extract_docx_paragraphs(path)
    current_test = None
    section = None
    q = None
    raw = []

    def flush():
        nonlocal q
        if q:
            raw.append(q)
            q = None

    i = 0
    while i < len(paras):
        line = paras[i]

        if line.startswith("Nauka-PRO-MAX") or "Każda opcja z testu" in line:
            i += 1
            continue

        mt = RE_TEST.match(line)
        if mt:
            flush()
            current_test = int(mt.group(1))
            section = None
            i += 1
            continue

        mp = RE_PYT.match(line)
        if mp:
            flush()
            q = {
                "test": current_test,
                "source_num": int(mp.group(1)),
                "question_parts": [mp.group(2).strip()],
                "correct_lines": [],
                "wrong_lines": [],
                "explanation_lines": [],
            }
            section = "question"
            i += 1
            continue

        if q is None:
            i += 1
            continue

        low = line.lower()

        if low == "zmienne_odpowiedzi":
            section = "options_skip"
            i += 1
            # pomin naglowki kolumn
            while i < len(paras) and paras[i].lower() in ("odpowiedz", "poprawna", "wyjasnienie"):
                i += 1
            section = "options"
            continue

        if low == "poprawne_odpowiedzi":
            section = "correct"
            i += 1
            continue

        if low == "niepoprawne_odpowiedzi":
            section = "wrong"
            i += 1
            continue

        if low == "odpowiedz_koncowa":
            section = "final"
            i += 1
            continue

        if low == "omowienie_pojec_i_duze_wyjasnienia":
            section = "explanation"
            i += 1
            continue

        if section == "question":
            if RE_CODE_HDR.match(line):
                q["question_parts"].append("\n" + line)
            elif not is_section_marker(line):
                q["question_parts"].append(line)
            i += 1
            continue

        if section == "options":
            if not is_new_option(line):
                i += 1
                continue
            # odpowiedz
            i += 1
            if i >= len(paras) or not is_bool_line(paras[i]):
                continue
            is_correct = paras[i].lower() == "true"
            i += 1
            if not is_correct and i < len(paras):
                nxt = paras[i]
                if not is_bool_line(nxt) and not is_section_marker(nxt) and not is_new_option(nxt):
                    i += 1  # krotkie wyjasnienie opcji — juz w niepoprawne_odpowiedzi
            continue

        if section == "correct":
            if is_section_marker(line):
                continue
            q["correct_lines"].append(line)
            i += 1
            continue

        if section == "wrong":
            if is_section_marker(line):
                continue
            if line.strip() != "—":
                q["wrong_lines"].append(line)
            i += 1
            continue

        if section == "final":
            i += 1
            continue

        if section == "explanation":
            if RE_PYT.match(line) or RE_TEST.match(line):
                flush()
                continue
            q["explanation_lines"].append(line)
            i += 1
            continue

        i += 1

    flush()

    questions = []
    for item in raw:
        question_text = clean(" ".join(item["question_parts"]))
        question_text = re.sub(r"\s*\n\s*", "\n", question_text)

        correct = parse_answer_list(item["correct_lines"])
        wrong = parse_answer_list(item["wrong_lines"])

        if len(correct) == 1 and is_open_question(question_text):
            correct = split_assignments(correct[0])

        correct = dedup([clean(c) for c in correct if clean(c)])
        wrong = dedup([clean(w) for w in wrong if clean(w)])
        cl = {c.lower() for c in correct}
        wrong = [w for w in wrong if w.lower() not in cl]

        explanation = "\n".join(item["explanation_lines"]).strip()
        qtype = "open" if is_open_question(question_text) else "mc"

        if qtype == "open" and correct and not explanation.startswith("Odpowiedź:"):
            explanation = ("Odpowiedź:\n" + "\n".join(correct) + ("\n\n" + explanation if explanation else "")).strip()

        questions.append({
            "test": item["test"],
            "source_num": item["source_num"],
            "type": qtype,
            "question": norm(question_text),
            "correct": [norm(c) for c in correct],
            "wrong": [norm(w) for w in wrong],
            "explanation": norm(explanation),
        })

    return questions


def main():
    questions = parse_docx(DOCX)

    for i, q in enumerate(questions, 1):
        q["id"] = i

    mc = [q for q in questions if q["type"] == "mc"]
    op = [q for q in questions if q["type"] == "open"]
    with_expl = [q for q in questions if q.get("explanation", "").strip()]

    print(f"Zrodlo: {DOCX}")
    print(f"Razem pytan: {len(questions)} | MC: {len(mc)} | otwarte: {len(op)} -> {[q['id'] for q in op]}")
    print(f"Z wyjasnieniem: {len(with_expl)}")
    print(f"MC bez blednych opcji: {len([q for q in mc if not q['wrong']])}")
    print(f"MC z wieloma poprawnymi: {len([q for q in mc if len(q['correct']) > 1])}")

    with open("questions.json", "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    with open("questions.js", "w", encoding="utf-8") as f:
        f.write("// Auto-generowana baza pytan z NaukaFix.docx\n")
        f.write("const QUESTIONS = ")
        json.dump(questions, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print("Zapisano questions.json i questions.js")


if __name__ == "__main__":
    main()
