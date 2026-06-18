import pdfplumber
import sys

files = {
    "Nauka-PRO-MAX.pdf": "nauka_promax.txt",
    "PW-egzamin-opracowanie-pytan-2 (1) (1).pdf": "pw_egzamin.txt",
}

for src, dst in files.items():
    try:
        with pdfplumber.open(src) as pdf:
            out = []
            for i, page in enumerate(pdf.pages):
                txt = page.extract_text() or ""
                out.append(f"\n===== PAGE {i+1} =====\n")
                out.append(txt)
            with open(dst, "w", encoding="utf-8") as f:
                f.write("\n".join(out))
        print(f"OK {src} -> {dst}")
    except Exception as e:
        print(f"FAIL {src}: {e}")
