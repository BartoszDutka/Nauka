# -*- coding: utf-8 -*-
"""Laczy bazy z Nauka-PRO-MAX i PW w jeden plik questions.js."""
import json
import re

with open("questions.json", encoding="utf-8") as f:
    nauka_raw = json.load(f)
with open("questions_pw.json", encoding="utf-8") as f:
    pw = json.load(f)


def norm_key(text):
    return re.sub(r"\s+", " ", text).strip().lower()[:120]


def richness(q):
    return (
        len(q["correct"]) * 10
        + len(q.get("wrong", []))
        + len(q.get("explanation", "")) / 500
    )


# PRO-MAX: ten sam tekst pytania w roznych TESTach (np. MPI-IO w TEST 1 i 3)
deduped = {}
for q in nauka_raw:
    key = norm_key(q["question"])
    if key not in deduped or richness(q) > richness(deduped[key]):
        deduped[key] = q
nauka = list(deduped.values())
# zachowaj kolejnosc id z oryginalnego pliku
nauka.sort(key=lambda x: x["id"])

merged = []
for q in nauka:
    merged.append({
        "id": len(merged) + 1,
        "source": "PRO-MAX",
        "source_num": q.get("source_num"),
        "extra": False,
        "type": q["type"],
        "question": q["question"],
        "correct": q["correct"],
        "wrong": q["wrong"],
        "uncertain": [],
        "uncertainOpen": False,
        "explanation": q["explanation"],
    })
for q in pw:
    merged.append({
        "id": len(merged) + 1,
        "source": "PW",
        "source_num": q.get("source_num"),
        "extra": q.get("extra", False),
        "type": q["type"],
        "question": q["question"],
        "correct": q["correct"],
        "wrong": q.get("wrong", []),
        "uncertain": q.get("uncertain", []),
        "uncertainOpen": q.get("uncertain_open", False),
        "explanation": q["explanation"],
    })

unc = [q for q in merged if q["uncertain"] or q["uncertainOpen"]]
print(f"  Pytan z odpowiedziami niepewnymi (zolte): {len(unc)}")
if len(nauka) < len(nauka_raw):
    print(f"  PRO-MAX: pominietych duplikatow tresci: {len(nauka_raw) - len(nauka)}")

mc = [q for q in merged if q["type"] == "mc"]
op = [q for q in merged if q["type"] == "open"]
print(f"RAZEM: {len(merged)} pytan | MC={len(mc)} | otwarte={len(op)}")
print(f"  PRO-MAX={len([q for q in merged if q['source']=='PRO-MAX'])}  PW={len([q for q in merged if q['source']=='PW'])}")

with open("questions_all.json", "w", encoding="utf-8") as f:
    json.dump(merged, f, ensure_ascii=False, indent=2)
with open("questions.js", "w", encoding="utf-8") as f:
    f.write("// Auto-generowana baza pytan: Nauka-PRO-MAX.pdf + PW-egzamin.pdf\n")
    f.write("// Nie edytuj recznie - generowane przez build_db.py\n")
    f.write("const QUESTIONS = ")
    json.dump(merged, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Zapisano questions.js")
