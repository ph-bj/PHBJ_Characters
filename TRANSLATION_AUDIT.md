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
| 1–46 | Read paragraph by paragraph against the Chinese; errors corrected. Chapters 24, 26, and 46 also received a complete literary retranslation pass where compact wording could be expanded or sharpened without disturbing paragraph alignment. |
| 47–51, 55 | Read through in full at the paragraph level; errors corrected. |
| 52–54, 56–60 | Read paragraph by paragraph against the Chinese; confirmed omissions, title/name errors, and imagery issues corrected. |

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

## Follow-up audit — 2026-08-07

- Rechecked all 2,023 Chinese/English paragraph pairs across chapters 1–60; paragraph
  alignment remains exact.
- Rechecked all 704 Chinese work citations: every cited work has its canonical English
  title inline in the prose and remains highlightable by the production renderer. The
  legacy `[Chinese-source works: ...]` fallback arrays have been removed, and the audit
  now ignores any such fallback if one is introduced accidentally in the future.
- Rechecked the production name-chip map: all 207 roster entries now have at least one
  Chinese token and one English token. English fallback aliases are now included in
  the renderer, with contextual disambiguation for the two characters romanized as
  Baozhu.
- Corrected targeted late-chapter issues: 红霙 is consistently Hongying; Wang Lanbao's
  name is restored in chapter 58; Lady Shi is used consistently in the chapter 58
  marriage sequence; the chapter 57 Wei-lot and 顶针续麻令 passages are repaired; and
  詹事府正詹事 is translated as Chief Administrator of the Office of the Heir Apparent.
- Completed the paragraph-level pass through chapters 52–54 and 56–60: restored an omitted verse in chapter 52, restored Wang Wei's quoted poem and corrected an over-expanded poet list in chapter 54, and tightened names, appointments, erotic imagery, injury imagery, and the flower-god inscription in chapters 56–60.
- Completed the literary retranslation pass for chapters 24, 26, 27, 46, and 58,
  restoring or sharpening narrative transitions, character motivation, sensory
  detail, source metaphors, allusions, and cadence while preserving paragraph
  alignment.
- The full paragraph-level literary pass is complete for the previously identified
  condensed passages. Further stylistic polishing remains optional editorial work,
  not an identified accuracy or completeness defect.

## Known outstanding issues (not fixed)

- **Style ratios.** English-to-Chinese character ratios remain useful diagnostics, not
  completeness certificates. The previously low-ratio chapters 24, 26, 27, 46, and 58
  have all received a paragraph-level literary retranslation pass; Chapter 21's three
  compressed passages were also restored in full, raising its ratio from 2.93 to 3.79.
- No known paragraph-level omissions remain. The remaining low ratios reflect dense
  classical phrasing and translation style, not a known paragraph-level omission.
