# -*- coding: utf-8 -*-
"""
Parser Nauka-PRO-MAX z pliku DOCX (ujednolicony format pytan i odpowiedzi).
Wyjasnienia (Pojecia do notatki / intuicja) uzupelnia z nauka_promax.txt.
"""
import json
import re
import unicodedata
import zipfile
import xml.etree.ElementTree as ET

DOCX = "Nauka-PRO-MAX_ujednolicone_pytania_odpowiedzi.docx"
PDF_TXT = "nauka_promax.txt"
W_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

RE_TEST = re.compile(r"^Test\s+(\d+)\s*$", re.I)
RE_PYT = re.compile(r"^Pytanie\s+(\d+)\s*:\s*(.*)$")
RE_PYT_BARE = re.compile(r"^Pytanie\s*:\s*(.*)$")
RE_PYT_ALT = re.compile(r"^(\d{1,2})\.([A-ZĄĆĘŁŃÓŚŹŻ].*)$")
RE_CORRECT = re.compile(r"^Poprawne odpowiedzi:", re.I)
RE_WRONG = re.compile(r"^Niepoprawne odpowiedzi:", re.I)
RE_FINAL = re.compile(r"^Odpowiedź końcowa", re.I)
RE_CODE_HDR = re.compile(r"^Treść / kod / warianty:", re.I)
RE_OPT_MARK = re.compile(r"^([a-zA-Z])[\)\.]\s+(.*)$")
RE_SKIP_WRONG = re.compile(r"^Nie podano wprost", re.I)
RE_NOTE = re.compile(r"^Poj\u0119ci[ae] do notatki", re.I)
RE_INTU = re.compile(r"^Najwa\u017cniejsza intuicja", re.I)
RE_OTHER = re.compile(r"^(W szerszym sensie|Mniej|Cz\u0119\u015bciowo|Dodatkowo|Uwaga)", re.I)
RE_PDF_CORRECT = re.compile(
    r"^((Najbardziej\s+)?Poprawn[ae]\s+odpowied|Z\s+obrazu\s+wida\u0107\s+odpowied)",
    re.IGNORECASE,
)
RE_PDF_WRONG = re.compile(
    r"^(Niepoprawn|Raczej|B\u0142\u0119dn|Dlaczego|Pozosta\u0142e odpowiedzi)",
    re.IGNORECASE,
)
BULLET = "\u2022"
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
    return re.sub(r"^[a-zA-Z][\)\.]\s+", "", x).strip()


def is_bullet(line):
    return line.lstrip().startswith(BULLET)


def bullet_text(line):
    return line.lstrip()[len(BULLET):].strip()


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


def parse_option_line(line):
    s = line.strip()
    if not s or RE_SKIP_WRONG.match(s):
        return []
    m = RE_OPT_MARK.match(s)
    if m:
        return [m.group(2).strip()]
    if is_bullet(line):
        return [strip_letter(bullet_text(line))]
    return split_assignments(s)


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
    last_num = 0
    section = None
    q = None
    raw = []

    for line in paras:
        if line.startswith("Nauka-PRO-MAX") or "Format każdego pytania" in line:
            continue

        mt = RE_TEST.match(line)
        if mt:
            current_test = int(mt.group(1))
            last_num = 0
            continue

        mp = RE_PYT.match(line)
        if mp:
            if q:
                raw.append(q)
            last_num = int(mp.group(1))
            q = {
                "test": current_test,
                "source_num": last_num,
                "question_parts": [mp.group(2).strip()],
                "correct": [],
                "wrong": [],
            }
            section = "question"
            continue

        mb = RE_PYT_BARE.match(line)
        if mb:
            if q:
                raw.append(q)
            last_num += 1
            q = {
                "test": current_test,
                "source_num": last_num,
                "question_parts": [mb.group(1).strip()],
                "correct": [],
                "wrong": [],
            }
            section = "question"
            continue

        if q is None:
            continue

        if RE_CORRECT.match(line):
            section = "correct"
            continue
        if RE_WRONG.match(line):
            section = "wrong"
            continue
        if RE_FINAL.match(line):
            section = "final"
            continue

        if section == "question":
            if RE_CODE_HDR.match(line):
                q["question_parts"].append("\n" + line)
            else:
                q["question_parts"].append(line)
        elif section == "correct":
            q["correct"].extend(parse_option_line(line))
        elif section == "wrong":
            q["wrong"].extend(parse_option_line(line))

    if q:
        raw.append(q)

    questions = []
    for item in raw:
        question_text = clean(" ".join(item["question_parts"]))
        question_text = re.sub(r"\s*\n\s*", "\n", question_text)

        correct = dedup([clean(c) for c in item["correct"] if clean(c)])
        wrong = dedup([clean(w) for w in item["wrong"] if clean(w)])
        cl = {c.lower() for c in correct}
        wrong = [w for w in wrong if w.lower() not in cl]

        qtype = "open" if is_open_question(question_text) else "mc"

        explanation = ""
        if qtype == "open" and correct:
            explanation = "Odpowiedź:\n" + "\n".join(correct)

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


def extract_pdf_explanations(path):
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    raw = re.sub(r"\n?===== PAGE \d+ =====\n?", "\n", raw)
    lines = [l.rstrip() for l in raw.split("\n")]

    markers = []
    current_test = None
    last_qnum = 0
    for i, l in enumerate(lines):
        mt = RE_TEST.match(l.strip())
        if mt:
            current_test = int(mt.group(1))
            last_qnum = 0
            continue
        mp = RE_PYT.match(l.strip())
        if mp:
            last_qnum = int(mp.group(1))
            markers.append((i, last_qnum, current_test))
            continue
        mb = RE_PYT_BARE.match(l.strip())
        if mb:
            last_qnum += 1
            markers.append((i, last_qnum, current_test))
            continue
        ma = RE_PYT_ALT.match(l.strip())
        if ma and current_test is not None:
            num = int(ma.group(1))
            if num == last_qnum + 1:
                last_qnum = num
                markers.append((i, num, current_test))

    explanations = {}
    for idx, (start, qnum, test_no) in enumerate(markers):
        end = markers[idx + 1][0] if idx + 1 < len(markers) else len(lines)
        block = lines[start:end]

        section = "question"
        note_lines = []
        intu_lines = []

        for j, l in enumerate(block):
            if j == 0:
                continue
            s = l.strip()
            if not s:
                continue
            if RE_PDF_CORRECT.match(s):
                if section in ("note", "intu"):
                    note_lines.append(s)
                section = "correct"
                continue
            if RE_PDF_WRONG.match(s):
                if section in ("note", "intu"):
                    note_lines.append(s)
                section = "wrong"
                continue
            if RE_NOTE.match(s):
                section = "note"
                continue
            if RE_INTU.match(s):
                section = "intu"
                intu_lines.append("Najważniejsza intuicja:")
                continue
            if section in ("correct", "wrong") and RE_OTHER.match(s):
                section = "other"
                continue
            if section in ("correct", "wrong") and (not is_bullet(l)) and s.endswith(":"):
                section = "other"
                continue

            if section == "note":
                note_lines.append(s)
            elif section == "intu":
                intu_lines.append(s)
            elif section == "other":
                note_lines.append(s)

        parts = []
        note_text = "\n".join(note_lines).strip()
        if note_text:
            parts.append(note_text)
        intu_text = "\n".join(intu_lines).strip()
        if intu_text:
            parts.append(intu_text)
        if parts:
            explanations[(test_no, qnum)] = "\n\n".join(parts).strip()

    return explanations


def merge_explanations(questions, pdf_expl):
    for q in questions:
        key = (q.get("test"), q.get("source_num"))
        extra = pdf_expl.get(key, "").strip()
        if not extra:
            continue
        if q["type"] == "open":
            base = q.get("explanation", "").strip()
            q["explanation"] = norm((base + "\n\n" + extra).strip())
        else:
            q["explanation"] = norm(extra)


def main():
    questions = parse_docx(DOCX)
    pdf_expl = extract_pdf_explanations(PDF_TXT)
    merge_explanations(questions, pdf_expl)

    for i, q in enumerate(questions, 1):
        q["id"] = i

    mc = [q for q in questions if q["type"] == "mc"]
    op = [q for q in questions if q["type"] == "open"]
    with_expl = [q for q in questions if q.get("explanation", "").strip()]

    print(f"Zrodlo: {DOCX}")
    print(f"Razem pytan: {len(questions)} | MC: {len(mc)} | otwarte: {len(op)} -> {[q['id'] for q in op]}")
    print(f"Z wyjasnieniem z PDF: {len(with_expl)}")
    print(f"MC bez blednych opcji: {len([q for q in mc if not q['wrong']])}")
    print(f"MC z wieloma poprawnymi: {len([q for q in mc if len(q['correct']) > 1])}")

    with open("questions.json", "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    with open("questions.js", "w", encoding="utf-8") as f:
        f.write("// Auto-generowana baza pytan z Nauka-PRO-MAX (DOCX + wyjasnienia PDF)\n")
        f.write("const QUESTIONS = ")
        json.dump(questions, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print("Zapisano questions.json i questions.js")


if __name__ == "__main__":
    main()
