#!/usr/bin/env python3
"""Build src/englishWorkTitles.ts from markup, worksData, and zh/en chapter pairs."""

from __future__ import annotations

import json
import re
from glob import glob
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TRANSLATIONS = ROOT / "src/chapterTranslations"
CHINESE = TRANSLATIONS / "chinese"
WORKS_DATA = ROOT / "src/worksData.json"
DATA_TS = ROOT / "src/data.ts"
OUTPUT = ROOT / "src/englishWorkTitles.ts"

FIXED_TITLES = [
    "Pinhua Baojian",
    "Yiqing Yishi",
    "Flower Register",
    "Catalogue of Flowers",
    "Classic of Poetry",
    "Book of Songs",
    "Guofeng",
]

# Common English words / dialogue fragments that must never be work titles.
BLOCKED_TITLES = frozenset(
    {
        "/",
        "They do",
        "Exactly",
        "I won",
        "I don",
        "Didn",
        "That doesn",
        "A crow",
        "and",
        "that",
        "cou",
        "qin",
        "mei",
        "zu",
        "que",
        "cun",
        "Bah",
        "pearl",
        "jade",
        "diao",
        "cove",
        "jinshi",
        "Pearl",
        "Jewel",
        "Xi Fugong",
        "Yang Fei",
    }
)

# Single-word titles allowed without being in worksData (classics, collections).
SINGLE_WORD_ALLOWLIST = frozenset(
    {
        "Guofeng",
        "Liji",
        "Hanshu",
        "Nishang",
        "Mao Shi",
        "Yutai",
        "Naozhuang",
        "Sang-fu",
        "Chibi Fu",
        "Pipa Xing",
        "Mudan Ting",
        "Xixiang Ji",
        "Soushen Ji",
        "Changhen Ge",
        "Jinlü Qu",
        "Xiaoshao",
        "Yanggao",
        "Yuchi Cup",
        "Ma Tou Diao",
        "Yan Ge Xing",
        "Taohua Shan",
        "Wen Sanbian",
        "Yanzi Jian",
        "Yu Bao Du",
        "Xi Fugong",
        "Red Whisk",
        "Oil Gourd",
        "Xiyou Ji",
        "Wangsi ji",
        "Xingshui ji",
        "earth-lamb",
    }
)


def load_character_name_tokens() -> frozenset[str]:
    text = DATA_TS.read_text()
    tokens: set[str] = set()
    for line in text.splitlines():
        if not line.startswith("char-"):
            continue
        parts = line.split("\t")
        if len(parts) < 2:
            continue
        name_field = parts[1]
        for match in re.finditer(r"[A-Z][a-z]+", name_field):
            tokens.add(match.group(0))
        if len(parts) >= 3:
            for token in re.split(r"\s*/\s*", parts[2]):
                token = token.strip()
                if re.match(r"^[A-Za-z]", token):
                    tokens.add(token)
    return frozenset(tokens)


CHARACTER_NAME_TOKENS = load_character_name_tokens()


def english_from_works_entry(entry: dict) -> str | None:
    desc = entry.get("descEn", "").strip()
    match = re.match(r"^[^(]+\(([^)]+)\)\s+is\b", desc)
    if match and re.match(r"^[A-Za-z]", match.group(1)) and len(match.group(1)) < 60:
        return match.group(1).strip()
    match = re.match(r"^(The [^(]+)\s*\(", desc)
    if match:
        return match.group(1).strip()
    match = re.match(r"^[A-Za-z]+\s+\(([^)]+)\)\s+is\b", desc)
    if match and re.match(r"^The ", match.group(1)):
        return match.group(1).strip()
    return None


PERFORMANCE_LIST_RE = re.compile(
    r"(?:"
    r"performances?\s+in|"
    r"Often\s+performs?|"
    r"In\s+performing|"
    r"performs\s+include|"
    r"other\s+performances,\s+such\s+as|"
    r"especially\s+celebrated\s+is"
    r")\s+(.+?)"
    r"(?:"
    r"\s+and\s+similar|\s+and\s+others|,\s+and\s+others|,\s+carry|\s+truly\s+show|,\s+he\s+wears|,\s+with\s+color|"
    r"\.(?:\s|$)|\s*$"
    r")",
    re.IGNORECASE,
)

# Trailing list when a paragraph breaks mid-enumeration (e.g. "His Slaying the Tiger, ...").
PERFORMANCE_TAIL_RE = re.compile(
    r"\bHis\s+((?:[A-Z][^,]+,\s*)+)$",
)


def split_performance_titles(chunk: str) -> list[str]:
    chunk = re.sub(r"\s+and\s+similar\s+(?:pieces?|scenes?).*$", "", chunk, flags=re.I)
    chunk = re.sub(r"\s+and\s+others.*$", "", chunk, flags=re.I)
    parts = re.split(r",\s*|\s+and\s+", chunk)
    out: list[str] = []
    for part in parts:
        title = part.strip().rstrip(".,;:!?")
        if title.lower().startswith("and "):
            title = title[4:].strip()
        if title:
            out.append(title)
    return out


CHAPTER_STRING_RE = re.compile(
    r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"",
)


def read_chapter_paragraphs(path: Path) -> list[str]:
    text = path.read_text()
    block_match = re.search(r":\s*string\[\]\s*=\s*\[([\s\S]*?)\n\s*\]", text)
    if not block_match:
        return []
    block = block_match.group(1)
    paras: list[str] = []
    for match in CHAPTER_STRING_RE.finditer(block):
        raw = match.group(1) or match.group(2)
        para = (
            raw.replace("\\n", "\n")
            .replace('\\"', '"')
            .replace("\\'", "'")
            .replace("\\\\", "\\")
        )
        paras.append(para)
    return paras


def is_valid_english_work_title(title: str) -> bool:
    title = title.strip().rstrip(".,;:!?")
    if len(title) < 3 or len(title) > 65:
        return False
    if title in BLOCKED_TITLES:
        return False
    if title in CHARACTER_NAME_TOKENS:
        return False

    words = title.split()
    lower = title.lower()

    # Truncated contractions from bad quote splits (e.g. "That doesn", "I don").
    if re.search(r"\b(don|didn|won|t)$", lower) and "'" not in title:
        return False

    if len(words) == 1:
        if title in SINGLE_WORD_ALLOWLIST:
            return True
        if title[0].isupper() and title[1:].islower():
            return False
        if title.islower():
            return False
        if not re.match(r"^[A-Z]", title):
            return False
        return len(title) >= 4

    if len(words) > 12:
        return False

    # Reject short dialogue-like phrases.
    if words[0] in {"They", "I", "That", "Exactly", "Didn", "A", "We", "You", "He", "She"}:
        if len(words) <= 3:
            return False

    small_words = {"of", "the", "and", "a", "an", "in", "on", "to", "for", "from", "with"}
    significant = [w for w in words if w.lower() not in small_words]
    if not significant:
        return False
    if not all(w[0].isupper() for w in significant):
        return False

    if any(phrase in lower for phrase in (" said", " asked", " i ", " you ", " we ", "wait —")):
        return False

    return True


def collect_from_zh_en_pairs() -> set[str]:
    """Only keep multi-word title-case phrases from paragraphs that cite Chinese works."""
    titles: set[str] = set()
    for en_path in sorted(TRANSLATIONS.glob("chapterTranslations*.ts")):
        ch = re.search(r"chapterTranslations(\d+)\.ts$", en_path.name)
        if not ch:
            continue
        num = ch.group(1)
        zh_path = CHINESE / f"chapterChinese{num}.ts"
        if not zh_path.exists():
            continue
        zh_paras = read_chapter_paragraphs(zh_path)
        en_paras = read_chapter_paragraphs(en_path)
        for zh_para, en_para in zip(zh_paras, en_paras):
            if "《" not in zh_para:
                continue
            for pattern in (
                r'\\"([A-Z][^\\"]{2,60})\\"',
                r"'([A-Z][^']{2,60})'",
                r"\*([^*\n]{2,60})\*",
            ):
                for match in re.finditer(pattern, en_para):
                    candidate = match.group(1).strip().rstrip(".,;:!?")
                    # Skip possessives such as Yang Fei's flute → Yang Fei
                    end = match.end()
                    if end + 1 < len(en_para) and en_para[end] == "'" and en_para[end + 1].lower() == "s":
                        continue
                    if is_valid_english_work_title(candidate):
                        titles.add(candidate)
    return titles


def collect_from_performance_lists() -> set[str]:
    """Comma-separated opera titles in English (e.g. ch.1 'Magpie Bridge, ...')."""
    titles: set[str] = set()
    for en_path in sorted(TRANSLATIONS.glob("chapterTranslations*.ts")):
        ch = re.search(r"chapterTranslations(\d+)\.ts$", en_path.name)
        if not ch:
            continue
        num = ch.group(1)
        zh_path = CHINESE / f"chapterChinese{num}.ts"
        if not zh_path.exists():
            continue
        zh_paras = read_chapter_paragraphs(zh_path)
        en_paras = read_chapter_paragraphs(en_path)
        for zh_para, en_para in zip(zh_paras, en_paras):
            if "《" not in zh_para:
                continue
            for match in PERFORMANCE_LIST_RE.finditer(en_para):
                for title in split_performance_titles(match.group(1)):
                    if is_valid_english_work_title(title):
                        titles.add(title)
            tail = PERFORMANCE_TAIL_RE.search(en_para)
            if tail:
                for title in split_performance_titles(tail.group(1)):
                    if is_valid_english_work_title(title):
                        titles.add(title)
    return titles


def collect_titles() -> list[str]:
    titles: set[str] = set(FIXED_TITLES)

    for path in TRANSLATIONS.glob("chapterTranslations*.ts"):
        for match in re.finditer(r"\*([^*\n]{2,80})\*", path.read_text()):
            title = match.group(1).strip()
            if is_valid_english_work_title(title):
                titles.add(title)

    data = json.loads(WORKS_DATA.read_text())
    for key, entry in data.items():
        english = english_from_works_entry(entry)
        if english and is_valid_english_work_title(english):
            titles.add(english)

    for path in CHINESE.glob("chapterChinese*.ts"):
        for match in re.finditer(r"《([^》\n]{1,40})》", path.read_text()):
            key = match.group(1)
            if key in data:
                english = english_from_works_entry(data[key])
                if english and is_valid_english_work_title(english):
                    titles.add(english)

    titles |= collect_from_zh_en_pairs()
    titles |= collect_from_performance_lists()
    return sorted(titles, key=len, reverse=True)


def write_ts(titles: list[str]) -> None:
    lines = [
        "/** English work/opera titles for chapter glow + italic annotation. */",
        "/** Generated by scripts/generate-english-work-titles.py */",
        "export const ENGLISH_WORK_TITLES = [",
    ]
    for title in titles:
        lines.append(f"  {json.dumps(title)},")
    lines.extend(
        [
            "] as const;",
            "",
            "export const ENGLISH_WORK_TITLE_SET = new Set<string>(ENGLISH_WORK_TITLES);",
            "",
        ]
    )
    OUTPUT.write_text("\n".join(lines))


def main() -> None:
    titles = collect_titles()
    write_ts(titles)
    print(f"Wrote {len(titles)} titles to {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
