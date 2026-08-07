# 品花宝鉴 — evaluation of the English translation
## Accuracy and 意境

An assessment of `src/chapterTranslations/chapterTranslations{1..60}.ts` against the parallel
Chinese in `src/chapterTranslations/chinese/chapterChinese{1..60}.ts`.

---

## 1. Method and coverage

Two passes were run, and they cover different things. Both are reported honestly below.

**Paragraph-by-paragraph close reading.** Chinese and English were extracted from the
TypeScript modules, paired by index, and read against each other one paragraph at a time —
checking sense, allusion, register, kinship terms, offices, units, and names. Every finding
below cites its paragraph as `chapter:index`, so each can be checked directly. Chapters
covered by close reading so far are listed in §7; the close reading is still in progress and
this document is updated as it advances.

**Whole-corpus mechanical screens.** Fourteen screens were run over all 2,023 paragraph pairs
in all 60 chapters. These have complete coverage and their counts are exact — they are the
S1–S13 findings in §3 (S9 has two parts) — and they are what allow this report to make claims
about chapters the close reading has not yet reached.

The alignment itself is sound: all 60 chapters match paragraph-for-paragraph, 2,023 pairs,
no empty cells on either side. Nothing in this report is an alignment problem.

---

## 2. The short version

This is a serious translation. Someone who knows the language and the period made it, and in
places it is very good indeed: the sixteen snow poems of chapter 4, Tian Chunhang's apologia
at 12:13, the drinking-game chains of chapter 11, the whole architecture of chapter 7's
character-matching game. Ordinary narrative prose is reliable. A reader with no Chinese can
follow the plot, the social world, and most of the argument of the book.

Three things hold it back, in descending order of how fixable they are.

**First, the text is contaminated with production artifacts.** 299 stray character-name tags
sit inside the English prose, in 56 of the 60 chapters, and they render on screen. 209
asterisk-italic spans and 29 bold-markdown spans render with their asterisks visible. This is
not a translation problem at all, but it is the first thing a reader sees.

**Second, consistency has not been enforced.** The male lead's name is spelled two ways, 113
times one way and 759 the other. One secondary character has six English names, and one of
them collides with a different character in the same chapter; the boys' troupe 八龄班 also has
six, and its last form collides with a surname. Official titles vary from chapter to chapter —
员外郎 has four English renderings, three of them inside a single paragraph. 半个时辰 has five,
two of them wrong by a factor of two. Dialogue is in single quotes in 16 chapters and double in
32. These are not judgement calls; they are the same decision made differently on different days.

Related, and worth separating out: an earlier repair pass ran paragraph by paragraph, so
several chapters now read at two visibly different densities — chapter 54 has one paragraph
at 1.43 words per hanzi and another at 0.44 in the same conversation. Two of the compressed
paragraphs are outright omissions of quoted Tang poetry (54:11, 54:33), which the previous
audit reports as no longer existing.

**Third — and this is the 意境 problem — the translation has one register where the novel has
several.** *Pinhua Baojian* alternates between ornate parallel prose for its connoisseur
set-pieces and brisk, coarse, often obscene vernacular for its street scenes. The English is
uniformly elevated. It adds ornament where the Chinese is plain, and it softens obscenity
where the Chinese is filthy. Since the book's comedy and much of its moral argument live in
the gap between those two voices, closing the gap costs more than any individual mistranslation.

The prior `TRANSLATION_AUDIT.md` states that name romanisation, official titles, and
paragraph-level omissions were fixed. Those fixes were real but partial: they reached some
chapters and not others, and in several cases the paragraph that *introduces* a name or title
is the one the fix missed.

---

## 3. Whole-corpus findings (complete coverage, exact counts)

### S1 — 299 stray character tags inside the English text
253 English paragraphs end in a bare bracketed name, e.g. `… A native of Suzhou.
[Madam Lu (Wang household)]`. 56 of 60 chapters are affected. Nothing in the Chinese
corresponds to any of them. Most frequent: `[Hua Guangsu]` ×25, `[Page Boy]` ×21,
`[Dark Baozhu]` ×19, `[Attendant (Fu household)]` ×15, `[Lady Sun]` ×11.

Some are wrong for their own paragraph. 1:17 is Lu Sulan's roster entry — Sulan is male —
and it is tagged `[Madam Lu (Wang household)]`. 2:0 tags Governor Yuan Hailou as `[Yuan Hao]`.
5:4 is about Xiao Cixian and is tagged `[Shi Nanxiang]`. 6:25 turns on the two characters
called 保珠/宝珠 and is tagged `[Baohuan]`. Some are malformed: `[Xu Shun qi]` at 3:0 is
许顺妻, "Xu Shun's wife", with 妻 left as a loose romanised syllable; `[Zhanggui de]` is
掌柜的, "the proprietor", a common noun treated as a name.

At **41:27 a tag has displaced source text**. The Chinese paragraph ends
「画珠接唱，明珠合着唱道：」 — Yazhu takes up the song, Mingzhu joins in. The English ends
`[Section by Section Higher] [Yazhu]`, with that clause untranslated.

These display literally. `stripForSpeech` (`ChapterReader.tsx:619`) removes 《》, `*…*` and
▉□ for text-to-speech only; nothing strips `[...]` on the render path.

### S2 — 209 asterisk spans that render as literal asterisks
There are 583 `*…*` spans across 212 paragraphs. The reader treats `*…*` as a work-title
annotation (`utils.tsx:102`, `isWorkAnnotationToken`), strips the asterisks and renders a
clickable chip — **but only when the enclosed string is a registered English work title**.
209 occurrences (155 distinct strings) are not: `*dan*` ×19, `*kang*` ×10, `*yi-fan*` ×6,
`*sheng*`, `*qin*`, `*wu*`, `*liu*`, `*gong*`, `*Kunqu*`, `*Erhuang*`, and at 3:39 two entire
clauses of interior monologue. All of these show the reader raw asterisks.

### S3 — name romanisation is not stabilised
117 orthographic variant clusters. The significant ones:

| Chinese | forms in use |
| --- | --- |
| 琴言 | `Qinyan` 759 / `Qin Yan` 113 — the male lead |
| 玉侬 | `Yunong` 127 / `Yu Nong` 43 / `Yu'nong` 5 |
| 琴官 | `Qin Guan` 69 / `Qinguan` 22 |
| 琪官 | `Qiguan` 165 / `Qi Guan` 13 |
| 菊花 | `Juhua` 73 / `Ju Hua` 17 |
| 玉天仙 | `Yutianxian` 16 / `Yu Tianxian` 16 |
| 荣官 | `Rongguan` 75 / `Rong Guan` 18 / `Rong-guan` 5 |
| 石翁 | `Shiweng` 42 / `Shi Weng` 16 / `Shiyan` 1 (2:19 — 翁 is *weng*) |
| 次贤 | `Cixian` 384 / `Ci Xian` 5 |
| 庾香 | `Yuxiang` 203 / `Yu Xiang` 7 |
| 南湘 | `Nanxiang` 391 / `Nan Xiang` 4 |
| 度香 | `Duxiang` 126 / `Duchang` 1 (2:34 — 香 is *xiang*) |

The 2026-08-07 audit lists 玉侬 specifically as fixed. `Yu Nong` still appears 43 times and
`Yu'nong` 5.

Worse than the counts: the paragraph that *establishes* a name is often the one with the odd
form. 5:19 is where Cixian invents the name 琴言 — and it uses `Qin Yan`, the minority form.
11:3 is where the Ten Pearls are listed — and it renders 画珠 as "Huazhu the painter", a form
used nowhere else in the book (elsewhere: `Yazhu`), distinguished from 花珠 by an epithet not
present in the Chinese.

### S4 — typographic convention changes between chapters
Dialogue is set in single quotes in 16 chapters, double quotes in 32, and mixed within the
same chapter in 12. Apostrophes are straight in 9,757 places and curly in 370 (106
paragraphs). Reading straight through, the book changes typographic convention repeatedly.

### S5 — 字 and 号 are both "courtesy name"
These are different institutions: 字 is conferred at capping, 号 is chosen by oneself. The
novel uses the choice between them constantly to mark intimacy and self-presentation —
Ziyu/Yuxiang, Ziyun/Duxiang, Nanxiang/Zhujun, Guangsu/Xingbei. Collapsing both into one
English term erases that signal everywhere it occurs, and at 13:6 it makes 仇十洲 (Qiu Ying,
under his 号) into an unidentifiable "Qiu Shizhou".

### S6 — official titles are not standardised

| Chinese | renderings found |
| --- | --- |
| 员外郎 | "Departmental Secretary", "Assistant Department Director", "Secretary" (all at 6:0); "Vice Director" (2:34) |
| 郎中 | "Director", "Department Director", "Assistant Department Director", "Secretary" |
| 给事中 | "Supervising Secretary" (1:5), "Supervising Censor" (6:0), "Censor" (6:0) |
| 通政 | "Commissioner of the Transmission Office" (1:5, 27:3), "Tongzheng Commissioner" (6:0) |
| 光禄寺少卿 | "Vice Minister of the Court of Imperial Entertainments" (2:34) / "Deputy Director of…" (6:0) |
| 詹事 | "Chief Administrator of the Office of the Heir Apparent" (59:8) / "Director of the Eastern Palace" (6:0) |
| 通判 | "Assistant Prefect" (59:9–10) / "Second-Class Subprefect" (3:27) |
| 侍郎 | "Vice Minister" ×16 / "Vice-Minister" ×4 |
| 尚书 | "Minister of" ×5 / "President of" ×1 |
| 兵部 · 户部 · 吏部 | "Ministry of …" and "Board of …" both in use |

6:0 is the worst case: a twelve-name guest list whose entire content is rank, in which 员外郎
and 郎中 receive four English titles between them, 给事中 becomes "Censor", and 通政 is left
half-romanised. The audit records 詹事府正詹事 as fixed — the fix reached ch. 57–59, not ch. 6.

### S7 — textual lacunae are marked in Chinese and silently filled in English
The Chinese carries 25 lacuna glyphs (□/▉) in 22 paragraphs: 3:20, 10:26, 12:14, 23:10,
23:14, 27:30, 30:7, 36:6, 36:19, 37:11, 38:32, 40:37 (×2), 40:41, 42:33, 45:13, 46:31, 51:16,
51:21 (×2), 57:35, 57:36 (×2), 57:40, 57:52. The English carries **none**.

The project treats these as significant — the glyphs render as clickable buttons opening a
lacunae archive (`src/lacunae.ts`). A Chinese reader is told the source is defective and can
consult the note. An English reader gets a confident conjecture with no indication anything
is missing. The English resolves the gaps four different ways and never says which it used:

- **Silent, correct reconstruction.** 3:20 便命家人□他出去 → "ordering his servants to throw
  the old man out"; 10:26 其实焉能□我？ → "how could it ever move me?"; 23:14 □东家墙 → "scale
  the host's wall"; 12:14 竞无▉国夫人 → "no Li Wa … ennobled as your Lady of Qian" (汧国夫人,
  with the identification of Li Wa supplied as well); 37:11 水字，加一点是□字 → 'add a dot to
  make it "ice" (冰)'. This is good editorial work presented as though no editing occurred.
- **Silent guess.** 46:31 ▉字阑杆丁字帘 → "cross-shaped balustrades, T-shaped blinds". The
  couplet's conceit is that *both* halves name a character-shape; the English invents one for
  the half the source has lost.
- **Silent deletion.** 51:16 声声中▉ is simply absent from the English sentence; 57:36's
  咮咮□□ — the onomatopoeia itself — becomes "a shrill imitation of a rooster's crowing".
- **Absorbed into summary.** 42:33 这些个不要脸的狗鸡巴□的，真他妈的可恶 falls inside the
  stretch where Changqing's widow's tirade is converted from direct speech to reported speech
  ("Changqing's widow cried out that they were all blind fools…"), so the gap vanishes along
  with her voice. It is an S8 case and an S7 case at once.

Meanwhile 15:10 leaves an emendation *visible* — "**[radiant]** as peach and plum" — inside
the running prose, as do 32:4 and 32:22. So emendations are marked in three places and hidden
in twenty-two, and the visible ones share a namespace with the 299 junk tags from S1, so a
reader cannot tell a scholarly insertion from a data error.

### S8 — direct speech converted to reported speech
Of the 898 paragraphs carrying three or more Chinese speech-openings 「/『, 34 have fewer than
half as many quotation marks in English — the dialogue has been narrated rather than quoted.
They cluster in exactly the chapters that carry the long first-person set-pieces:

ch. 13 ×14 · ch. 48 ×8 · ch. 42 ×7 · ch. 46 ×2 · ch. 54 ×2 · ch. 35 ×1.
Worst: 48:22 (15 openings → 5 quote marks), 48:20 (14 → 1), 42:15 (15 → 3), 42:16 (13 → 1),
54:39 (15 → 5), 13:29 (12 → 4).

See §5 for why this is the most damaging of the 意境 findings.

### S9b — 潘三: six English names for one man, one of them a collision
| form | count |  | form | count |
| --- | --- | --- | --- | --- |
| "Pan Third" | 48 | | "Third Master Pan" | 11 |
| "Pan San" | 25 | | "Pan the Third" | 5 |
| "Pan Qiguan" | 17 | | "Third Brother Pan" | 1 |
| "Pan Laosan" (25:6) | 1 |

His registered name is 潘其观, so "Pan Qiguan" is defensible in itself — but the Chinese says
潘三 in all these paragraphs, and the form collides head-on with 琪官 **Qiguan**, one of the
young dan actors. Chapter 19 is the acute case: 19:9–19:13 describe **Qiguan the actor**
having his hands mangled in Xi Eleven's barrel trap, and 19:16–19:21, a few paragraphs later,
call the banker **"Pan Qiguan"**. Nothing tells the reader these are two different people.

### S10 — the repair pass ran paragraph by paragraph and left the neighbours
Words-per-hanzi, measured for every paragraph over 80 hanzi, shows several chapters now
reading at two densities at once:

| chapter | paragraphs under 0.62 | paragraphs over 0.85 |
| --- | --- | --- |
| 46 | 27 (46:29 at 0.38, 46:52 at 0.39, 46:44 at 0.41) | 3 (to 1.10) |
| 54 | 7 (54:33 at 0.36, 54:39 at 0.40, 54:11 at 0.44) | 14 (to 1.43) |
| 27 | 9 (to 0.54) | 4 (to 1.14) |
| 21 | 1 | 4 |

Chapter 54 is the clearest: 54:15 runs at 1.43 words per hanzi and 54:11 at 0.44, in the same
conversation on the same subject. Chapter 21 shows the seam directly — 21:0–21:5 are
telegraphic, with em-dashes doing the work of connectives ("They drank tea; Ziyun sent for a
boat"), while 21:6 is fully expanded with the dialogue broken out into separate speeches.

**Two paragraph-level omissions that the audit says do not exist.** `TRANSLATION_AUDIT.md`
records "No known paragraph-level omissions remain," and attributes the low ratios to "dense
classical phrasing and translation style." Both counter-examples are in chapter 54, whose
entire content is three women discussing Tang poetry:

- **54:11** quotes eight lines of Cen Shen's 《白雪歌送武判官归京》. The English gives the first
  couplet, an ellipsis, and a prose summary — dropping six lines including
  忽如一夜春风来，千树万树梨花开, the most famous line in the poem and the one the commentary
  that follows is explicitly *about* ("interwove 'pear blossoms,' bead curtains…").
- **54:33** carries six quoted lines — four from Du Fu's 《北征》, one from Liu Yuxi, one from
  Bai Juyi. Every one is deleted, replaced by "citing favorite lines" and "surpassed later
  poets' treatments." Qionghua's technical argument about the 阙/阙 and 卒/卒 rhyme categories
  is reduced to paraphrase, so the reader cannot see what is being argued.

Chapters 45–46 carry the same compression in prose: 46:29's 137 hanzi become 52 words of
note-form ("They drank tea; Ziyun sent for a boat. Broad water opened…"), and 46:24 renders
reported dialogue as dash-joined fragments.

### S12 — 时辰 (the double-hour) is still wrong in four places
The audit lists 时辰 as corrected in ch. 16, 25, 29 and 44, and those four are right. Checking
all 18 paragraphs that use the unit:

| where | Chinese | English | correct |
| --- | --- | --- | --- |
| 33:19 | 半个时辰 | "About half an hour later" | one hour |
| 56:21 | 半个时辰 | "over half an hour" | one hour |
| 39:22 | 一个时辰 | "the better part of an hour" | two hours |
| 52:10 | 两三个时辰 | "two or three hours" | four to six hours |

半个时辰 alone receives five English values across the book — "a full hour" (16:13, 22:10),
"half an hour" (33:19), "over half an hour" (56:21), "nearly one double-hour" (58:4) and "half
a **shichen**" (31:8) — two of them off by a factor of two and one left untranslated.

### S13 — female pronouns for male characters: the audit's own fix is incomplete
`TRANSLATION_AUDIT.md` records this class as corrected, naming "Sulan (ch. 28)" among the
repairs. Screening every paragraph whose English uses *she/her/herself* against the Chinese for
a female referent, then reading all 132 candidates, two survive as genuine errors — and both
are in the chapters the audit says it fixed:

- **28:5** — "Realizing **his** words had made it sound as though Yunong were dead, **she**
  hurried out to Ziyu." Lu Sulan is a man; the same sentence gets it right the first time.
- **29:9** — 想既能如此欢笑 → "**She** reasoned to **herself**…". The reasoner is Ziyu.

The screen also shows the fix largely did work: the other 130 candidates are legitimate — women
the Chinese names directly rather than by a gendered noun, quoted verse with a female speaker,
and the chapter 54 poetry discussion, where the run of "She explained… She called… She
observed…" is correct as to gender but is itself the reported-speech problem of S8.

### S11 — bold markdown in the translated text
29 `**…**` spans in 20 paragraphs, all in chapters 45 and 46, marking place names
(`**Lychee Lane**`, `**Autumn-Chant Waterside Pavilion**`). The renderer has no handling for
double asterisks, so these reach the screen with asterisks attached, like the S2 spans.

A related single-paragraph defect: **30:4** carries the literal two-character sequences `\n`
and `\t` in mid-sentence — "…taken a carriage straight to the Hua mansion.`\n\t`Meanwhile,
Young Master Hua had personally decorated various spots." An escape was written into a source
string where it never became a real line break, so the backslashes reach the reader. It is the
only paragraph in the corpus with this defect.

### S9 — names are romanised, translated, and roster-mismatched simultaneously
Checking every paragraph against the project's own 204-character roster in `data.ts`, 256
cases have a character named in Chinese with no corresponding name in the aligned English.
Nearly all are the same pattern: descriptive and numeric names are rendered as English
epithets in the prose while the roster and the appearance tags romanise them.

- 奚十一 — the roster's `Xi Shiyi` appears **zero** times in the translation. The prose uses
  "Xi Eleven" ×116, "Lord Xi" ×14, "Xi the Eleventh" ×3.
- 屈道翁 — "Daosheng" ×214, "Master Qu" ×23, "Qu Daoweng" ×13. 道翁 and 道生 are two different
  names for the man and one is silently substituted for the other.
- 乌大傻 — "Wu Dasha" ×7, "Big Fool" ×13.
- 胡八, 李大夫, 许三姐, 杜仙女 and 缝穷婆 are split the same way. 缝穷婆 is not a name at all —
  it means a woman who mends clothes for the poor — but the roster and tags treat it as one.

This matters more in this product than in a printed book, because the reader clicks name
chips and the chip layer is keyed to the roster string.

---

## 4. Accuracy — paragraph-level findings

Errors found in close reading, grouped by kind. Each is checkable at the cited paragraph.

### 4.1 Errors that invert or destroy the sense

| Where | Chinese | English | What is wrong |
| --- | --- | --- | --- |
| 26:0 | 换上盘珠登云履 | "and **Panzhu** changed them for cloud-stepping slippers" | 盘珠 describes the shoes — *coiled-pearl* cloud-climbing slippers. There is no maid called 盘珠; the roster is 宝珠 明珠 爱珠 花珠 荷珠 蕊珠 掌珠 珍珠 画珠 赠珠. "Panzhu" occurs exactly once in the book: a character invented out of footwear, who also takes over half of Zhenzhu's action. |
| 26:0 | 画珠 … 花珠 | both rendered "Huazhu", five times, in one paragraph | Two of the Ten Pearls collapse into one name inside a single paragraph. The stray tag at the end of that same paragraph reads `[Yazhu]` — the correct form for 画珠 — so the disambiguation exists in the artifact layer and not in the prose. |
| 12:14 | 窃恐为郑元和所笑耳 | "you may end up like Zheng Yuanhe, mocked by history" | "laughed at **by** Zheng Yuanhe". The sting is that Chunhang will sink below even the archetypal ruined profligate — who at least got Li Wa. Reversing the agent severs it from the Li Wa clause immediately before. |
| 4:23, 4:26 | 元徽 | "Yuan and Wei" — and Ziyu "could not make out what the allusion meant" | Not an allusion: 嗣元 + 嗣徽, the two Sun brothers. The comment is an insult. 徽 is *hui*, and the brothers are "Sihui"/"Siyuan" elsewhere, so a misromanisation both invents a name and hides the joke Ziyu laughs at one paragraph later. |
| 3:27 | 不是同知，就是通判 | "a Subprefect or, **at best**, a Second-Class Subprefect" | 通判 ranks below 同知; "at best" inverts the ladder Gui Fen is resigning himself to. |
| 2:40 | 楼上花枝笑独眠 | "the flower branch smiles, sleeping alone" | The branch *laughs at* the one who sleeps alone. It is a penalty-verse aimed at Sun Lianggong and the direction is the joke. |
| 5:9 | 明珠投暗…按剑徒遭 | "drawing his sword might only bring suspicion" | Subject reversed. In Zou Yang it is the *recipient* of an unsolicited pearl who grips his sword; Qinyan fears others will react that way to him. |
| 6:34 | 庾香叫相公，是要瞒着人的 | "when speaking of a performer, one usually tries to keep it a secret" | 叫相公 is to *engage* one for the evening. Wenze is accusing Ziyu of secretly hiring the boy. 15:1 gets the same phrase right ("hired young protégés"). |
| 4:8 | 因风只合吼河东 / 若使龙丘居士见 | "roars along the eastern river" / "If the Recluse of Longqiu were but to see it" | 河东狮吼 is the henpecked-husband idiom and 龙丘居士 is the husband. The couplet is one two-line joke; read as geography plus a hermit it is nonsense — and Ziyu then praises this very poem for "weaving allusions with effortless grace". |
| 7:14 | 歌馆小么 | "The singing-hall's tiny note" | 小么 (小幺儿) is a boy servant, in a 歌馆 a boy prostitute. The oral-sex exchange that follows becomes unreadable. |
| 4:33 | 如怨如慕，如泣如诉 | "like weeping, like complaining, like sobbing, like beseeching" | 慕 is longing, not complaining; the four terms are the best-known line of the 前赤壁赋 and the sequence is scrambled. |
| 10:25 | 声色之奉，本非正人 | *dropped* | The premise of Ziyu's central moral speech — that indulgence is *not* the conduct of an upright man — is deleted, leaving a concession with nothing to concede from. |
| 7:9 | 雅字竟当他实字 | "took an elegant word and gave it a crude, literal twist" | 虚字/实字 are the grammatical terms function-word and content-word. The plaque says 虚白; the joke is that Gao Pin has read the 虚 as an 实. It is a grammarian's pun on the room's name. |
| 7:25 | 红毛国 | "the Red Feather Nation" | 红毛 is the standard Qing term for the Dutch ("red hair"). The mock-allusion works because 朱毛 / 红毛 / 一毛不拔 are all 毛 = hair; the English uses "feather" for two of the three and "hair" for the Mencius quotation, so the chain breaks mid-joke. |
| 11:3 | 只愿一见侯门大小苏 | "the Marquis's twin jades" | 大小苏 names the two Su sisters and puns on the two Song Su brothers. Removing the surname removes both. |
| 32:4 | 倒叫我太山太水空喜欢了半夜 | "leaving me to realize I had rejoiced over nothing for half the night" | 太山太水 (泰山/泰水) are the father- and mother-in-law — *they* celebrated all night on a false report. Both are deleted and the disappointment transferred to Zhongqing. The same idiom is flattened to "my in-laws" at 24:0, so it is lost in both of its two appearances. |
| 30:2 | 如花之落圂飘茵 | "like a fallen flower swept into the privy or the mud" | The allusion is a *contrast*: petals from one branch, some landing on a silk cushion (茵), some in a cesspit (圂) — fortune's caprice. Turning 茵 into "mud" collapses the two destinations into one and removes the governing metaphor of Qinyan's whole meditation in 30:0–30:2. |
| 31:8 | 遣风吹送上华堂 | "sent the wind to waft **her** down into this splendid hall" | Two losses. "Her" makes Chang'e descend; what the wind carries is the moonlight. And 华堂 puns on 华 — the *Hua* hall — so Huifang has hidden a compliment to his host in the poem's last two characters. That is why Young Master Hua "slapped the table" in the next sentence; in English he is applauding a generic phrase for a nice room. |
| 35:3 | 好红相公 | "What a fine famous gentleman!" | 红相公 is a *sought-after* boy-actor, which is exactly how 3:12 has it ("you sought-after darling"). "Famous gentleman" also collides with 名士, the book's word for the scholars, so Fu the Third appears to be calling Rongguan a literatus. |
| 35:11 | 坐月到黄昏 | "sitting in the moonlight until dusk" | Impossible in that order. The line is the flower-lover sitting on into the evening *waiting for* the moon. |
| 33:4 | 小琅嬛室 | "Little **Langgan** Studio" | 琅嬛 is *Langhuan*, the legendary celestial library — and the translation itself uses "the heavenly Langhuan library" at 1:21. 琅玕 (*langgan*) is a different word, a jade-like stone. The misromanisation also severs Baozhu's studio name from the compliment paid to Jin Shufang in chapter 1. |
| 36:23 | 你还当我相公看待 | "you still treat me like a gigolo" | 相公 is the book's own word for its boy-actors, elsewhere "Master", "gentleman", "darling". "Gigolo" imports a modern kept-man-of-women sense that is precisely the wrong transaction. |

### 4.2 Allusions dissolved into paraphrase
The translation is capable of glossing — 10:27 explains 柳下惠 inline, 6:14 spells out the
琼/华 rhyme trick, 7:20 stops to explain that Wenze is from Zhengyang County, 14:17 carries
the whole ox/rabbit zodiac chain. Where it does not, the reader is left watching characters
react to nothing.

- **4:10** 玉茗风流 → "graceful and free as jade camellias". 玉茗堂 is Tang Xianzu's studio;
  the phrase means "in Tang Xianzu's manner". Rendered as a flower it drops the one
  comparison being made.
- **4:5** 美人装罢，玉戏猫儿；罗汉堆来，球抛狮子 → "arhats gathered in heaps to toss balls at
  lions". These are the *snow sculptures* the eight poems are about; the letter is a table of
  contents. Read literally the sentence is baffling.
- **4:5** 白战 → "a white war of verse". The 白战体 is Ouyang Xiu and Su Shi's rule: write on
  snow using none of the conventional snow-words. The poems that follow observe it; the
  calque leaves the constraint invisible.
- **4:4** 党家锦帐 → "the brocade-tented banquets of warlords". This is the Tao Gu anecdote,
  and it sets up 煮雪煎茶 in the very next clause. Generalising severs the two halves.
- **2:13** 识宝回回 (the Persian gem-appraiser, proverbial for an unerring eye) → "I am not
  one to dispense praise lightly". The image is deleted rather than translated.
- **7:27** 《史氏外编》 → "The Shi Clan Supplement". The laugh is that Nanxiang, surnamed Shi,
  has just cited his own family as the source of a book he invented seconds earlier. Unmarked,
  so "Wang Xun and Wenze finally understood, breaking into fresh peals of laughter" has no cause.
- **7:19** Gao Pin matches 龟 and Wenze instantly says 失敬，失敬. 龟 is 龟公 — cuckold, pimp.
  The English has a room erupting over the word "tortoise".
- **14:14** 田获一兔 → "The field yields one hare". 田 is Tian Chunhang's surname; the fake
  divination is a punning account of what has just happened to him — 田 gets a 兔 (Yulin, born
  in the rabbit year, summoned three paragraphs later), meets rain and mud, meets his patron
  at a 庙 (they all live in Hongji Temple). As agriculture, it has no target.
- **5:23** 城里一个星，城外一朵云 → "In the city, one star; beyond the walls, one cloud". The
  jingle names the book's two great patrons — 星 is Hua Xingbei, 云 is Xu Ziyun. Unsignalled,
  it reads as weather.
- **1:34, 1:46** 没字碑 → "a wordless stele"; 万选青钱 → "the flawless bronze coins of ten
  thousand selections". Transposed word for word with no bridge: the shape of an allusion
  without its sense.
- **18:2** the four-stage satire of a troupe master's life. 凿开混沌，两阳相交，人说是兔 →
  "When the undifferentiated was breached and the two positives met, people called them
  'rabbits.'" 凿开混沌 is a Zhuangzi phrase doing duty as a sodomy euphemism, 两阳相交 is male
  with male, and 兔/兔子 is the standard slang for a catamite — the same word behind 兔儿爷 at
  7:10. Rendered term by term, the first rung of the rabbit → fox → tiger → dog ladder cannot
  be decoded, and it is the rung that explains the other three.
- **6:27** 恶用是鶃鶃者为哉 → "Why resort to such reproachable language?" Sihui is misquoting
  Mencius at a joke about a red nose. The one thing that characterises him — reflexive,
  incompetent classical quotation — disappears from his line.

### 4.3 The largest single loss: 7:13
Gao Pin's deliberately nonsensical line 八鸡露后靠舟前 is revealed as an insult when read
backwards: 前舟靠后露鸡八 — "Qianzhou bends over behind and shows his cock." 前舟 is Liu
Wenze's own 字, established at 6:22. The English says only "Read my matching line backward —
how does it sound?" and then three men laugh until they cry, across two paragraphs. Reversing
"Eight chickens behind the dew lean on the boat's front" yields nothing, and nothing is
glossed. A three-paragraph build-up lands on a blank page.

### 4.4 Units, kinship, offices, objects
- **8:1** 三两几钱 → "three or four mace of silver" — it is three-odd *taels*, ten times more,
  and 8:2 then has Yuanmao steal "eight or nine taels" for the same evening. The two figures
  no longer agree in a scene entirely about how much money he needs.
- **9:26** 三明两暗 → "three rooms wide and two rooms deep" — a standard house plan: three lit
  outer bays, two shuttered inner ones.
- **10:0** 时交子末 → "the hour approached midnight" — 子末 is about 1 a.m.
- **2:17** 粉底皂靴 → "thick-soled black boots" — 粉底 is the *white* sole, a rank marker.
- **5:29** 八角鼓 → "eight-beat drum performers" — 八角 is eight-*cornered*, the octagonal
  frame-drum that names the genre. Also 元宝 → "gold ingots" (sycee are silver), and 标劲儿 →
  "such standards" (标 is showing off, correctly "spectacle" at 3:35).
- **4:9** 漫赌围棋枕两奁 → "pillowed on two dressing-cases" — 奁 here are the go-stone bowls
  named in the same line.
- **4:30** 《冰床》 → "Ice Bed" — a 冰床 is an ice-sledge, and the winning poem is about gliding
  over frozen water in place of a boat.
- **5:21, 6:7** 绕指柔 → "pliant gold thread" both times — it is the same steel, soft enough to
  wind round a finger.
- **5:19** 齿如编贝 → "teeth like strung pearls" — 贝 are cowrie shells.
- **13:10** 妙住菩萨现莲花宝座内 → "the wondrous dwelling Bodhisattva" — not a being; the phrase
  has been transliterated word by word into an English noun-phrase that means nothing.
- **15:6** 初出茅庐 → "his first foray out of the proverbial thicket" — 茅庐 is Zhuge Liang's
  thatched cottage.
- **27:3** 直隶州 → "a Zhili department magistrate", reading 直隶 as the province name. It is
  an *independent department* — a 州 answering directly to the province — which is precisely
  how 33:21 and 33:22 have it. This is the error the audit lists as corrected.
- **27:3** 十一两字是个土字 → "'eleven' sounds like 'earth'." It is a graphic joke: 十 written
  over 一 makes 土, which is why the nickname 奚老土 follows in the same breath.
- **16:2** 为诸花物色 → "seeking out rare flowers" — 诸花 throughout this book means the
  boy-actors; Duxiang is procuring fragrances and silks *for them*.
- **24:0** 若论女貌郎才倒是一对 → "A handsome face hiding a dull wit." 女貌郎才 is the standard
  phrase for a well-matched couple, used ironically; the English replaces the joke with an
  unrelated observation.
- **24:0** 皮杯 → "his lecherous 'leather-cup' toast" — 皮杯 is the mouth-to-mouth passing of
  wine, glossed correctly as "a 'skin cup' (a kiss)" at 2:39.
- **24:0** 萍水相逢 → "like dew on the grass" — duckweed on water; the image matters, because
  the sentence goes on to contrast it with clinging "like a shadow to a body".
- **1:16** 风流林下 → "romantic grace amidst the woods" — 林下风致 is the unaffected elegance of
  a well-bred recluse, and 1:20 renders the same idiom correctly.
- **1:18** 《絮阁》 → "The Pavilion of Gossamer" — 絮 here is 絮聒, to nag; the Changsheng dian
  scene is Yang Guifei's jealous tirade, so reading 絮 as willow-floss inverts the scene.
- **1:29** 紫云回雪 → "the 'Purple Cloud Return'", set as a single dance title — it is two
  images (Du Mu's singer Ziyun; the whirling snow of the Luoshen fu), and the Yuan/Su-vs-Guibao
  contrast collapses.
- **18:2** 开口要三千五千吊 → "demand three or five thousand cash" — 吊 is a *string* of cash,
  so the price of an apprentice's freedom, the climactic figure of the passage, is understated
  a thousandfold. The corpus is otherwise good here (94 of 97 paragraphs with 吊 sums say
  "strings"); the other two, 30:23 and 30:25, leave it as untranslated "diao of cash".
- **26:0** 一时二刻 → "For an hour and two quarter-hours" — 一时 is a 时辰, two hours; with two
  刻 that makes two and a half, not one and a half. (S12's screen misses this one because the
  text writes 一时 rather than 一个时辰.)
- **20:9** 我度香先生当以玉佩要之 → "Duxiang-**xiong** would receive them with his jade pendant
  offering" — an honorific suffix found nowhere else and not in the source, on an allusion
  that runs the other way (Zheng Jiaofu *asks the river goddesses for* their pendants).
- **1:33** 黄金争掷作缠头 → "Gold is eagerly thrown to form his silken headband" — 缠头 is the
  gratuity flung to a performer, which 1:34 gets right one screen later. It becomes "the
  embroidered silk wrapping" at 9:27: three renderings.
- **30:10** 酉戌二时 → "Through the hours of you and xu", romanised with no gloss. The audit
  records fixing this from "five to seven"; the arithmetic is now right, but an English reader
  still cannot tell it means roughly 5 p.m. to 9 p.m. **36:9** 辰刻 goes the other way and is
  generalised to "tomorrow morning".

### 4.5 Internal contradictions (the same thing, two ways)
- 海棠 — "begonia" at 1:21 and in the garden name 海棠春圃 (5:13, recurring throughout);
  "crabapple" at 1:24 and 1:52.
- 《曲台花选》 — "The Opera Stage Flower Manual" (1:8), "Qutai Huaxuan" (1:11 and 3:2),
  "Selection of Flowers" (1:38, 3:2 — same paragraph as the romanisation), "Catalogue of
  Flowers" (3:4). Four English names for one short book.
- 乱弹 and 梆子腔 both become "clapper operas" (3:13, 4:33, 12:6) — in a conversation whose
  entire subject is telling the musical systems apart, and in the mouth of the character who
  at 4:32–33 delivers the speech distinguishing them.
- 虫蛀千字文 / 迭韵双声谱 — the Sun brothers' nicknames are translated twice, differently:
  "Moth-Eaten Thousand-Character Classic" / "The Stuttering Dictionary" (2:25) versus
  "Worm-Eaten Thousand Character Classic" / "the Rhyme-and-Alliteration Compendium" (6:25).
  The ch. 6 versions are the better ones, which makes the ch. 2 versions the errors.
- 八龄班 — **six** English names for one troupe, and the last of them is a collision:
  "Eight-Ages Troupe" (11:4), "Eight-Age" (11:4, 30:11, 30:26), "eight young pages" (18:10,
  19:0), "Eight-Year Troupe" (19:2), "Eight Ling" (21:2, 24:3, 25:24, 26:5, 26:6) and
  "**Baling**" (36:0, 36:6, 41:36). "Baling" is indistinguishable from the surname 巴 — 巴英官
  is "Ba Yingguan" in chapter 36 itself and 巴霖 is "Ba Lin" — so a reader meeting "the Baling
  boys" has no way to know it is not a person. "eight young pages" is not a name at all; it
  reads as a headcount.
- 姑苏会馆 — "the Gusu Guildhall" (2:0) / "the Suzhou Guild Hall" (3:6).
- 梅崦 — "the Plum Blossom Retreat" (2:34) / "the Meiyan" (10:11).
- 金牌楼 — "Jinpai Tower Lane" (3:35) / "the Gold Pailou" (5:26).
- 香火 — "lighting materials" (1:46) / "a glowing incense coil" (3:7).
- 四目相窥，两心相照 — a calque at 6:34 ("four-eyes-meeting, two-hearts-illuminating"),
  idiomatic at 15:6.
- 拔贡 → "an imperial student" (2:25) but 优贡 → "distinguished tribute student" (5:4).

### 4.6 Content across a paragraph boundary
**16:0 / 16:1** — 所来往者刘文泽、颜仲清等为最密 is in the Chinese of 16:1, but "—most often
Liu Wenze and Yan Zhongqing—" appears in the English of 16:0, leaving 16:1's English with the
vestige "enjoying the closest of bonds." In the side-by-side reader this shows as two names
present in one language and absent in the other, in two consecutive rows.

**27:0 / 27:1** — worse: the same Chinese sentence is translated twice. 27:1 opens
欲想个法子收拾他，叫他总不安神，自然就进府来. The English of 27:0 ends "Pincai began turning
over ways to deal with him, determined to leave him so uneasy that he would eventually come
into the mansion of his own accord," and the English of 27:1 opens "He meant to harry him
until the boy could find no peace and had no choice but to enter the mansion." One sentence,
two paragraphs, both in English, only one in Chinese.

Both cases are paraphrases rather than verbatim repeats, so a word-matching sweep does not
find them: screening every adjacent pair for a shared six-word content n-gram returns ten
hits, all of them legitimate (a line quoted in one paragraph and discussed in the next).
Enumerating this class properly needs a paragraph-by-paragraph comparison, not a script.

---

## 5. 意境 — the atmospheric and tonal reading

Accuracy is the easier half. What follows is the harder question: does the English carry the
book's 意境 — its register, its texture, the distance between its voices?

### 5.1 The register is flattened to a single elevated tone
This is the central finding. *Pinhua Baojian* runs two voices. One is the ornate parallel
prose of the 花谱 set-pieces — the roster entries of chapter 1, the letters of chapter 4, the
descriptions of the Yiyuan. The other is brisk, dry, often crude vernacular for everything
that happens on the street or at a table. The book's comedy, and a great deal of its moral
argument, lives in the collision between them.

The English elevates both. Worse, it *adds* ornament where the Chinese has none:

| Chinese | English |
| --- | --- |
| 3:29 掌柜的…嘻嘻的笑说道 (said with a giggling laugh) | "his voice dripping with syrupy reassurance" |
| 3:30 掌柜的又说那走堂的道 (said to the head waiter) | "In the hallway, he furiously berated his head waiter" — the passage is deadpan comedy about grades of porcelain, not fury |
| 3:35 此时天气尚短 (the days were still short) | "As evening draped its shadows over the city" |
| 3:27 又将贵大爷恭惟一番 | "turned his silvery tongue toward Master Gui" |
| 10:6 子云、次贤走将出来 | "walked in together, their faces lit with smiles" |

Each is defensible alone. Cumulatively the two voices become one, and the 花谱 passages lose
their heightening because everything around them is already heightened.

The reverse also happens at the book's most charged moment. 1:52, Ziyu's first sight of
Qinyan — the pivot of the whole novel, framed by 以玉为骨，以月为魂 — has 子玉惊得呆了 rendered
"Ziyu was stunned silly." Broad comedy, in a paragraph pitched at the sublime.

### 5.2 The obscenity is systematically softened
The novel is frank. The translation is often not, and the choice is inconsistent, which shows
it is a choice rather than a limit.

- **3:28** 鸡巴攘的 (an obscenity) → "You put on airs again!" — the translation has moved the
  *next* clause's content into the curse's slot. The actor's comeback then throws 鸡巴 back at
  him; with the word gone, "Cheap filth … served up as a dish" refers to nothing.
- **3:28** 我倒不打死你，我想攘死你 → "I will squeeze the very life from your bones." It is
  "I'll fuck you to death." Xi Shiyi's sexual violence is a structural theme of the book and
  this is its first statement.
- **7:9** 三对鸡巴 → "three pairs of chicken… parts", with an ellipsis. The arithmetic — six
  men in the room, therefore three pairs — is also not conveyed.
- **14:17** 倒没有说我的像鸡巴 → "it didn't even come out to mean what I feared it might."
  The monk is saying, plainly, that at least Huifang did not compare his bald head to a cock —
  which is exactly what 顶圆而光 points at. The couplet's whole joke is that the demure-sounding
  match is filthy; with the obscenity gone, he is thanking someone for a compliment.
- **6:5** 试用过他那件器物，倒是个好材料 → "found her an exceptionally accommodating partner."
- **2:28, 2:40** 屁话 → "Nonsense, sheer nonsense"; 屁滚尿流 → "thoroughly flustered and
  anxious." The Sun brothers' scenes are built on the gap between their pretension and the
  narrator's crudity; softening the crudity closes the gap.
- **2:27** 如出花灌了浆一样 (smallpox pustules filling with pus) → "engorge like ripening
  berries." The simile is meant to disgust.

Chapter 8 shows this is not a capacity problem. There, 天上有三光，人间倒有四光 keeps its 光 pun
intact through a four-part gloss (shaved bare / worn bare / spent bare / eats bare), and
磨镜子 is kept as "grinding mirrors" without flinching. The same translator, handling the same
material, elsewhere declines.

Chapter 36 makes the point again, and at length. Monk Tang's 鸡巴脑袋 is rendered "a
dick-head" and his follow-up boast lands; his blessing 前门增百福，后户纳千祥 keeps the
front-door/back-door anatomy, so it stays filthy; the sea-cucumber innuendo at 36:17 ("slides
down smooth and easy, and won't make your stomach swell") survives whole; Juhua on the chamber
pot and Xi Eleven's drain joke at 36:15 are unsoftened. 27:30's 打烂你这娘卖□的 becomes "I will
smash this whore-womb den". Whatever governs the softening catalogued above, it is not a policy
the translation applies to itself consistently — which means §5.2 is a list of local decisions
that can be revisited one by one, not a ceiling.

### 5.3 Voice: first-person confession turned into third-person summary
S8 quantifies this; chapter 13 shows what it costs. Su Huifang's autobiography — orphaning in
Yunnan, his father's impeachment and death, the year begging on the road to Suzhou, the old
servant's death, being pressed into the troupe — is continuous first-person speech in the
Chinese, inside quotation marks. In English it is reported: "He explained that as a child he
had followed his father to his official post in Yunnan… He asked Chunhang if he did not think
this was a wretched fate."

「你说这命运低不低？」 is a wounded question put directly to the man in front of him. The
paragraph then closes 说到此，便硬咽起来 → "Speaking to this point, he choked back tears" —
but nothing has been spoken on the page. The emotional centre of Huifang's characterisation
is narrated instead of performed. The same happens to Cao Changqing's widow (ch. 42) and the
Tian household (ch. 48).

### 5.4 Verse: two standards, and only one of them is good
The snow poems of **chapter 4** are the best work in the book: line-for-line, restrained,
evenly pitched, no forced address. 飞来峰, 谢道韫's 柳絮, 孟浩然骑驴寻梅, 天女散花, 凿壁偷光,
尖叉韵, 沾泥絮 and 杜甫's 《佳人》 all survive intact.

The **chapter 1 roster poems** (1:13, 1:16, 1:19, 1:22, 1:25, 1:28, 1:30, 1:33) do not meet
that standard. All eight are third-person appraisals in a connoisseur's register — the whole
point of a 花谱 — and all eight are turned into second-person direct address: "Your dancing
sleeves drift light and frail…". Fluent, and wrong for the genre: a catalogue of judgements
becomes a sequence of love-notes, and the appraising distance the form depends on is gone.

**Verse layout is not a settled convention.** Chapters 4, 11 and 31 set their poems out as
lines; **35:11** runs its quatrain into the surrounding prose as a sentence, so the reader is
given no signal that a poem has started. This is the same class of inconsistency as S4, but it
falls on the material where it costs most.

**Chapter 11** states a rule and then breaks it three times. Mrs. Yuan explains that the five
phrases "must weave into a single rhyme, ringing out with a pleasing, poetic cadence when
spoken." None of the three English chains rhymes, nothing acknowledges the loss, and the
characters go on praising each other's execution of a constraint the reader cannot see. In
the same game the fourth element must be an aria title: 夜行船 and 得胜令 are set as titles,
but the first demonstration renders 五更转 as running prose, so the pattern breaks on its
first outing.

### 5.5 Where the 意境 does come through
It would be unfair to leave this out. The book's atmosphere survives in several sustained
places, and they show what the rest could be:

- **12:13**, Tian Chunhang's defence of loving boy-actors, is translated at full length as an
  argument a reader can follow. 性即理，理即天 is kept as reasoning, not paraphrase, and the
  thesis — 好女而不好男，终是好淫，而非好色 → "To love women but not men means ultimately one
  loves lechery, not beauty" — lands.
- **Chapter 4's** snow poems and the two parallel-prose letters that frame them.
- **9:21–9:25**, the Yiyuan fireworks and dragon-lantern display, keeps its scale and its
  sequence — the gong, the clay-cylinders, the five dragons, the hundred beasts on wheels —
  without either shrinking or inflating it.
- **10:27–10:28**, the two-stage reveal of the false Qinyan behind the pivoting mirror screen,
  works as suspense in English.
- **14:17's** ox-and-rabbit zodiac chain is carried whole, from insult to summons, precisely
  because the translation stopped to make the zodiac years explicit. It is the model the
  obscene jokes are not given.
- **Chapter 22 throughout.** The two hired thugs shouting Qinyan out of his sickbed keep every
  obscenity the Chinese gives them, and Qinyan's answer — his suicide speech at 22:8, asking
  to be buried under the plum trees of Meiyan or burned and scattered "where the mountains are
  high and the waters deep… and spare the world one wretched relic of an ill-fated life" — is
  the best sustained emotional writing encountered anywhere in this reading. Coarse and
  lyrical registers sit side by side in one chapter and both are right.
- **19:11–19:13**, Erxi's account of Xi Eleven's barrel trap — the novel's darkest sequence, a
  mechanical rape device and two assaults — is rendered plainly and completely, at the
  euphemistic register the Chinese itself uses, with the ward-office collusion and the ransom
  intact. It is the strongest evidence that the softening catalogued in §5.2 is a local
  choice rather than a limit.
- **23:1–23:6**, Yuanmao's disastrous visit to the East Garden brothel, is translated without
  euphemism — the basin behind the kang, the woman's contempt, the shakedown at the door, the
  straw mat he has to wrap himself in — at exactly the flat, unsparing register the Chinese
  uses.
- **20:6–20:10**, the ride through the Yiyuan, is the descriptive prose at its most
  comfortable, and the four painters invoked in the appraisal (Wang Lutai, Xiao Chizhu, Ni
  Yunlin, Xu Qingteng) are all correctly identified.
- **30:0–30:2**, Qinyan's balsam-flower soliloquy — the plucked flower, the potted flower, the
  flower trained on wire, and the man who may not laugh or cry — is carried whole and at full
  length. It is one of the passages where the translation's elevated register is the right one.
- **32:0** is the model of how the wordplay *should* be handled. The Tai-hexagram divination is
  given in full, 帝乙归妹，以祉元吉 correctly attributed to Di Yi, and the year-pun is spelled
  out for the reader: "the 'Yi' of Di Yi, and the character 'Mei' (sister) without the woman
  radical, doesn't that make the characters 'Yiwei'?" This is exactly the treatment 7:13 and
  7:34 do not get.
- **33:4–33:5** handle the connoisseur vocabulary precisely — 唐花 as "forced hothouse blooms",
  粉定 as "Ding-kiln porcelain", 此君 kept as "this gentleman" with the context carrying Wang
  Huizhi's joke — and quote Bai Juyi's 同是天涯沦落人 accurately at the moment it makes Baozhu weep.
- **36:23**, the bracelet scene, is the best-rendered sequence in chapters 28–36: 脸上先闻了一闻
  as "buried his face in Qinyan's cheek, deeply inhaling his scent", the bracelet smashed into
  three pieces in the courtyard, and Ba Yingguan's closing joke about having the fragments
  mounted, all at the right pitch.
- **37:11** deserves separate credit as the hardest thing in the book. The graph-building
  drinking game — 水/冰/永, 十/士/干, 杳/查/香, 丁/于/亍, 卜/上/下, 白/自/百 and the bawdy
  曰/田/由/甲/申 finish, where one man wants the stroke pushed up and the other pulled down —
  is translated complete, every character printed beside its gloss, and it works.

---

## 6. What to fix first

1. **Strip the 299 stray tags** (S1) and restore the displaced clause at 41:27. Mechanical,
   and it removes the most visible defect in the product.
2. **Reconcile the asterisk markup with the renderer** (S2) — either register the 155 missing
   strings as annotatable terms or drop the asterisks from the 209 non-title spans.
3. **Normalise names and titles** (S3, S6, S9), starting with the paragraphs that *introduce*
   each name — 5:19 for 琴言, 11:3 for the Ten Pearls, 6:0 for the office list — and reconcile
   the prose forms with the `data.ts` roster so the name chips resolve.
4. **Mark the lacunae** (S7). Twenty-two paragraphs currently present conjecture as text while
   the Chinese beside them flags a gap.
5. **Restore direct speech** in the 34 paragraphs of S8, beginning with chapter 13.
6. **Fix the two surviving female pronouns** at 28:5 and 29:9 (S13), and the stray `\n\t` at
   30:4. Two minutes of work, and both currently misgender or garble on screen.
7. **Fix the errors in §4.1** — they are few, they are checkable, and each one currently
   breaks a scene rather than blurring it.
8. **Then, if there is appetite for it, the register work in §5.1–5.2**, which is real
   editorial labour rather than correction, and which is where the remaining 意境 is.

---

## 7. Coverage log

**Whole-corpus screens (S1–S13): all 60 chapters, all 2,023 paragraph pairs.** Counts are exact.

**Close reading, paragraph by paragraph:** ch. 1–36 complete, plus targeted close reading of
the paragraphs the screens flagged in ch. 37, 38, 39, 40, 41, 42, 45, 46, 51, 52, 53, 54, 56,
57 and 58.

The remaining chapters are covered by the mechanical screens only. Findings from them that
appear above (41:27, 48:20/22, 42:15/16, 54:11/33/39, 59:8–10, 57:35–52, 51:16–21, the
ch. 45–46 compression and bold markup, and all the name, title and unit counts) come from the
screens plus verification of the individual paragraphs cited — which is why they are stated
as counts and specific locations rather than as continuous readings.
