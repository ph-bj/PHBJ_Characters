# Classical Chinese → English translation audit

Audit of `src/chapterTranslations/chapterTranslations{1..60}.ts` against the parallel
Chinese source in `src/chapterTranslations/chinese/chapterChinese{1..60}.ts`.

## Method

- The Chinese and English arrays are index-aligned, one entry per paragraph. Every fix
  preserved that alignment (verified after each edit by re-parsing all 120 files and
  comparing paragraph counts).
- Chapters were read paragraph by paragraph, Chinese against English.
- Mechanical sweeps were run across all 60 chapters for: paragraph-count mismatches,
  female pronouns in English where the Chinese paragraph has no female referent,
  leftover Chinese characters in the English, duplicated/garbled glossary substitutions,
  and inconsistent name romanisations.

## Coverage

| Chapters | What was done |
| --- | --- |
| 1–46 | Read paragraph by paragraph against the Chinese; errors corrected. Chapter 21's remaining compressed passages and three especially compressed Chapter 46 passages were subsequently restored as full literary translations. |
| 47–51, 55 | Read through in full at the paragraph level; errors corrected. |
| 52–54, 56–60 | Mechanical sweeps only (alignment, pronouns, stray Chinese, name/title consistency), plus spot checks. Not yet read line by line. |

## Recurring error classes found and corrected

1. **Omitted or invented passages.** Whole clauses and, in a few cases, several
   sentences of the Chinese were dropped and replaced with invented English
   (ch. 8, 24, 25:0/13/26/27, 26:18, 27, 31).
2. **Wrong pronouns for male characters.** The *dan* performers and pages are male;
   several were given female pronouns — Sulan (ch. 28), Baozhu and Sulan (ch. 43),
   Lin Shanzhi (ch. 44), Chunlan (ch. 40), Baozhu (ch. 10/11), Meixiang (ch. 24),
   Su Huifang (ch. 19), Baozhu (ch. 45, 60).
3. **Reversed or wrong kinship / relationships.** 世叔 uncle read as nephew (ch. 36);
   妻舅 brother-in-law read as wife's uncle (ch. 30); 太夫人 mother read as grandmother
   (ch. 38); "Qinyan and Young Master Hua had been father and daughter" where the
   Chinese says Daosheng himself (ch. 49); 娇客 son-in-law read as daughter-in-law (ch. 6).
4. **Official titles.** 大宗伯 Minister of Rites rendered "Grand Secretary"; 阁学
   Academician of the Grand Secretariat; 通政 Commissioner of the Transmission Office;
   学院 Education Commissioner; 给事 Supervising Secretary; 提台 Provincial Military
   Commander; 直隶州 independent-department magistracy (not "Zhili prefecture");
   翰林院检讨 Examining Editor.
5. **Units and measures.** 时辰 is a double-hour, not an hour (ch. 16, 25, 29, 44);
   吊 is a *string* of cash, not a single cash — ch. 42 understated sums by ~1000×;
   酉戌二时 is two double-hours, not "five to seven".
6. **Name romanisations.** 庾香 Yuxiang (was "Gengxiang"/"Yuanxiang"); 玉侬 Yunong
   (was "Yuyi"/"Yu'nong"); 奚十一 Xi Eleven (was "Qi Shiyi"/"Xi the Eleventh");
   花蕊夫人 Lady Huarui; 画珠 Yazhu (distinct from 花珠 Huazhu); 乌大傻 Wu Dasha;
   帝乙 Di Yi (was "King Wen"); 崔鸳鸯/郑鹧鸪; 马四娘.
7. **Stray glossary substitutions.** 田老爷 rendered "Master Tian's *Title Register*"
   (ch. 32, 4×); 《牡丹亭》 rendered "The Peony Pavilion from Hundred Yuan Plays" (ch. 41);
   duplicated work titles (ch. 35, 38).
8. **Misread allusions and puns.** 独活/防己/当归/牵牛 herb puns (ch. 28–29);
   势僧/牝贼 (ch. 37); 无感我帨兮，无使尨也吠 (ch. 39); 唐花 forced hothouse blooms,
   not "Tang flowers" (ch. 33); 碧桃 flowering peach, not "blue peach" (ch. 41).
9. **Structural.** Chapter 31 had two English paragraphs merged into one, throwing the
   whole chapter out of alignment with the Chinese from paragraph 11 onward. Split and
   realigned; all 60 chapters now match paragraph for paragraph.

## Known outstanding issues (not fixed)

- **Compressed chapters.** Some chapters are rendered as condensed paraphrase rather
  than full translation. Measured as English characters per Chinese character (a full
  translation in this corpus runs ~4.5–5.5), the outliers are:
  ch. 46 (now 3.25 after restoring paragraphs 19, 25, and 37), ch. 27 (3.11),
  ch. 58 (3.21), ch. 24 (3.70), and ch. 26 (3.81). Fixing these means
  re-translating, not editing. Chapter 21 is no longer on this list: its three compressed
  passages were restored in full, raising its ratio from 2.93 to 3.79.
- Chapters 52–54 and 56–60 have not yet been read paragraph by paragraph.
