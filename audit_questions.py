# -*- coding: utf-8 -*-
"""Audyt bazy pytań — wykrywa podejrzane dopasowania i formaty."""
import json
import re

with open("questions_all.json", encoding="utf-8") as f:
    all_q = json.load(f)

with open("questions.json", encoding="utf-8") as f:
    promax = json.load(f)

issues = []

# --- PRO-MAX: numeracja i brakujące numery ---
by_test = {}
for q in promax:
    t = q.get("test") or 0
    by_test.setdefault(t, []).append(q["source_num"])

for t, nums in sorted(by_test.items()):
    nums_sorted = sorted(set(nums))
    label = f"TEST {t}" if t else "bez TEST"
    gaps = []
    if nums_sorted:
        for n in range(nums_sorted[0], nums_sorted[-1] + 1):
            if n not in nums_sorted:
                gaps.append(n)
    if gaps:
        issues.append(f"PRO-MAX {label}: brakuje numerów pytań: {gaps} (mamy: {nums_sorted})")

# --- PRO-MAX: za dużo poprawnych / błędnych ---
for q in promax:
    if q["type"] != "mc":
        continue
    c, w = len(q["correct"]), len(q["wrong"])
    if c > 5:
        issues.append(f"PRO-MAX #{q['source_num']} id={q['id']}: {c} poprawnych (za dużo?) — {q['question'][:70]}")
    if c + w > 12:
        issues.append(f"PRO-MAX #{q['source_num']}: {c}+{w} opcji łącznie")
    if c == 0:
        issues.append(f"PRO-MAX #{q['source_num']}: brak poprawnych odpowiedzi")

# --- PRO-MAX: odpowiedzi z innego tematu (heurystyka) ---
TOPIC_MARKERS = [
    ("private(id)", ["private", "id", "wątek", "omp"]),
    ("MPI_", ["mpi", "proces"]),
    ("pthread", ["pthread", "mutex", "wątek"]),
    ("Amdahl", ["amdahl", "sekwencyjn", "przyspieszen"]),
    ("roofline", ["roofline", "wydajno", "pamięci"]),
    ("SIMD", ["simd", "wektor"]),
    ("blockchain", ["blockchain", "proof"]),
    ("Grid Computing", ["grid"]),
]

for q in promax:
    if q["type"] != "mc":
        continue
    qlow = q["question"].lower()
    for marker, keywords in TOPIC_MARKERS:
        for ans in q["correct"] + q["wrong"]:
            if marker.lower() in ans.lower() or marker in ans:
                if not any(k in qlow for k in keywords):
                    issues.append(
                        f"PRO-MAX #{q['source_num']} id={q['id']}: odpowiedź o '{marker}' "
                        f"w pytaniu bez tego tematu — {q['question'][:60]}"
                    )

# --- PRO-MAX: puste / bardzo krótkie odpowiedzi ---
for q in promax:
    for a in q.get("correct", []) + q.get("wrong", []):
        if len(a.strip()) < 5:
            issues.append(f"PRO-MAX #{q['source_num']}: bardzo krótka odpowiedź: {a!r}")

# --- PRO-MAX: wyjaśnienie puste dla MC z PRO-MAX (powinno być) ---
no_expl = [q for q in promax if q["type"] == "mc" and not (q.get("explanation") or "").strip()]
if no_expl:
    issues.append(f"PRO-MAX: {len(no_expl)} MC bez wyjaśnienia: {[q['source_num'] for q in no_expl]}")

# --- PW: porównanie z liczbą bloków ---
with open("questions_pw.json", encoding="utf-8") as f:
    pw = json.load(f)

pw_nums = sorted(set(q["source_num"] for q in pw))
issues.append(f"PW: sparsowano {len(pw)} pytań, numery: {min(pw_nums)}-{max(pw_nums)}")

pw_no_correct = [q for q in pw if q["type"] == "mc" and not q["correct"]]
if pw_no_correct:
    issues.append(f"PW: MC bez poprawnych: {[q['source_num'] for q in pw_no_correct]}")

# --- Cała baza: duplikaty treści pytania ---
seen = {}
for q in all_q:
    key = re.sub(r"\s+", " ", q["question"].lower()[:80])
    if key in seen:
        issues.append(f"Duplikat treści: id {seen[key]} i {q['id']} ({q['source']} #{q.get('source_num')})")
    else:
        seen[key] = q["id"]

print("=== RAPORT AUDYTU ===")
print(f"PRO-MAX: {len(promax)} pytań | PW: {len(pw)} | łącznie: {len(all_q)}")
print(f"Znaleziono {len(issues)} uwag:\n")
for i in issues:
    print(f"  • {i}")

with open("audit_report.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(issues))
print("\nZapisano audit_report.txt")
