# Character Roster Audit

A pass over all 60 chapters of the bundled Chinese text, checking every entry in
`src/data.ts` against the source and sweeping the text for named people the
database was missing. Every claim below is anchored to a chapter and paragraph
in `src/chapterTranslations/chinese/`.

Roster: **180 → 207** characters (218 raw rows, 11 merged away at runtime).

---

## 1. Duplicates

Eight identity merges already existed in `data.ts` (`田状元`/`田春航`,
`孙氏`/`佩秋`, `珊枝`/`林珊枝`, `金粟`/`金吉甫`, `华夫人`/`苏浣香`,
`袁夫人`/`袁绮香`, `屈少君`/`杜琴言`, `潘老三`/`潘其观`). Three more were found
and added to `mergeGroups`; following the repo's convention, the raw rows are
kept and the duplicate is folded into the canonical record at runtime.

| Duplicate | Canonical | Evidence |
|---|---|---|
| `char-67` 侯太史 | `char-135` 侯石翁 | ch.55 ¶0 calls him 江宁**侯石翁太史**; ch.12 ¶5 ranks 侯太史 beside 屈大令 exactly as ch.37 ¶13 ranks 石翁 beside 道翁. The ch.56 title 「侯太史假义恤孤」 is the same man's false charity toward Qinxian. |
| `char-71` 掌山西道陆 | `char-52` 陆宗沅 | ch.2 ¶34 gives 陆宗沅 as 监察御史; 掌山西道 is that censorate's Shanxi circuit. Every other slot on the ch.6 ¶0 roll of twelve fellow-provincials (梅/王/史/杨/孙/周/刘/吴) is a named character already in the database. |
| `char-182` 杨八 | `char-146` 杨梅窗 | ch.16 ¶4 introduces him as 「精于地理…号梅窗，行八」; ch.47 ¶8 says it outright — 「一个杨八爷，叫梅窗」. |

**Not merged, but noted:** the ch.6 ¶0 roll lists 国子监司业**张**, while ch.6
¶4/¶22 make the 国子监司业 沈恭 (Shen Bocai's father). One office, two surnames,
in one chapter — an inconsistency in the source text, so both records stand.

## 2. Fabricated or misattributed records

No entry turned out to be a wholly invented person. Several carried invented
attributes, and one record existed only because of a false keyword match.

| Record | Was | Actually |
|---|---|---|
| `char-39` 珊枝 | "Scandalous; rebuked by the whole group in ch.36" | Not an event in the text. The ch.1 hit is the couplet epithet 「碧海珊枝陆素兰」 heading Lu Sulan's Flower Register entry. 珊枝 is simply the short form of 林珊枝 (ch.19 ¶0). |
| `char-146` 杨梅窗 | "Performer in Wei Pincai's orbit" | A geomancer (ch.16 ¶4), Fu Third's sworn brother — and the same man as 杨八. Role corrected `performer` → `minor`. |
| `char-145` 张笑梅 | "Performer connected to Wei Pincai's social circle" | Painter of fine-line figures retained by the Hua mansion, from Hangzhou, about twenty (ch.16 ¶17); ch.47 ¶8 calls him 「一个张师爷，叫笑梅」. Role `performer` → `minor`. |
| `char-139` 卓天香 | "Performer associated with Wei Pincai's circle", ch.40 | A barber's apprentice of the 整容班, introduced ch.34 ¶20 alongside 张翠官. |
| `char-136` 巴英官 | "Youth attached to Xi Shiyi's household", ch.40 | Ji Liangxuan's page, born 巴老英 of Huizhou, bought for ten strings of cash and renamed in ch.23 ¶12–13; only later lent to Xi Shiyi. |
| `char-94` 许三姐 | "recognizes her lost brother Zhou Xiaosan (ch.49)" | Zhou Xiaosan is her **husband** — ch.40 ¶18 makes him 许老三's 姐夫. Her age (19) is stated at ch.40 ¶22. |

**Checked and cleared** (names that look invented but are split across the
sentence in the source): 贵芬 (ch.3 ¶17 「姓贵、名字叫芬」), 徐震 (ch.5 ¶0
「其父名震」), 徐子容 (「其兄名子容」), 沈芸姑 (ch.6 ¶4 「沈氏…名字叫做芸姑」),
巴来风 (ch.6 ¶6 「巴氏，名字叫做来风」), 蔡某 (ch.35 ¶4 「严缉贼匪蔡某」 —
a real hired hand surnamed Cai, ¶4 「有个伙计姓蔡」).

## 3. Names the text supplies that the database did not

| Record | Old name | Source |
|---|---|---|
| `char-142` | 苏侯 | **苏臣泰** — ch.48 ¶1 「姓苏，名臣泰，现任兵部大堂」 |
| `char-61` | 刘侍郎 | **刘守正** — ch.30 ¶3 「文泽之父大宗伯刘守正」 |
| `char-63` | 沈司业 | **沈恭** — ch.6 ¶4 「国子监司业沈恭之女」 |
| `char-183` | 陆皂隶 | **陆升** — ch.32 ¶11 「有个皂隶叫作陆升」 |

Style names attested in the text and added as aliases: 秦琪官 → 玉艳 (ch.17 ¶4),
王文辉 → 质夫 (ch.49 ¶12), 史曾望 → 史鉴湖, 袁浩 → 袁海楼, 颜庄 → 颜穆堂 (all
ch.49 ¶12).

First-appearance chapters corrected: `char-134` 刘喜 ch.55 → ch.38, `char-135`
侯石翁 ch.55 → ch.2, `char-136` ch.40 → ch.23, `char-139` ch.40 → ch.34,
`char-145`/`char-146` ch.19 → ch.16.

## 4. Missing characters (30 added)

**Hua mansion — the 八龄班 boys** (ch.11 ¶4 「这八龄名字都有一个龄字，无非金龄、玉龄、兰龄、桂龄之类」)

- `char-198` 玉龄 — the "false Qinyan" Xu Ziyun uses to test Ziyu in ch.10 ¶41; also chs.11, 19, 21, 41, 52
- `char-199` 金龄 · `char-200` 兰龄 · `char-201` 桂龄 — chs.11, 41, 52

**Hua mansion — household staff**

- `char-211` 阎简安 — the mansion's sour old secretary, chs.16, 18 (11 mentions)
- `char-212` 王卿云 — 书启先生, an old friend of the late duke, chs.16, 18
- `char-213` 顾月卿 — painter, always paired with 张笑梅 (who *was* in the database), chs.16, 18, 21, 33, 50
- `char-205` 华府宝珠 — the tenth of the 十珠 maids; the roll at ch.11 ¶3 names 宝珠、明珠、爱珠、花珠、荷珠、蕊珠、掌珠、珍珠、画珠、赠珠 and only nine were present. Named 华府宝珠 to keep her distinct from the performer 袁宝珠, following the existing 王家陆夫人/孙家陆夫人 pattern.
- `char-223` 香儿 — little maid of the garden quarters, chs.41, 44, 52, 53 (12 mentions, with dialogue)
- `char-220` 华老公爷 — Hua Guangsu's father, hereditary Duke of the First Rank and serving 镇西将军 (ch.5 ¶27), off-stage throughout
- `char-219` 谢笠山 — the painter who spent twelve years laying out Jinchun Garden (ch.30 ¶4)

**Xu household — the 十二红 maids** (ch.52 ¶26 lists 红雪、红莲、红香、红玉、红梅、红月、红露、红霙)

- `char-206` 红霙 — **31 mentions** across chs.11, 52, 57, with a named part in the ch.11 and ch.57 drinking games
- `char-207` 红梅 · `char-208` 红月 · `char-209` 红露 — ch.52

**Performers**

- `char-202` 凤林 · `char-203` 春林 — of the 凤台班, chs.22, 23, 24, 27
- `char-204` 张翠官 — barber-boy of the 整容班, ch.34 ¶20 onward
- `char-224` 保环 — the 相公 who kept Wang Xun too busy to correct Ziyu's 保珠/宝珠 mix-up (ch.6 ¶25)
- `char-225` 王吉庆 · `char-226` 李春芳 — dan of an earlier generation (ch.27 ¶8)

**Others**

- `char-210` 王胡子 (王髯) — the bearded antiquary who presides over the Yiyuan planchette séance whose verdicts disclose everyone's former lives; **25 mentions** in chs.45–46
- `char-216` 杜仙女 — the Fairy Du of Mochou Lake, Qinyan's former incarnation (chs.45, 55, 56, 59, 60). `nameChips.ts` already carried English aliases for her with no character to attach them to.
- `char-214` 胡八 — Xi Shiyi's household man, 39, Yao Xian's cousin (chs.44, 58). Both other men in that paragraph, 孟七 and 姚贤, were already in the database.
- `char-215` 许老大 — eldest of the Xu brothers; 许老二 and 许老三 were both present (ch.40)
- `char-217` 张桐孙 — Tian Chunhang's maternal uncle, former prefect of Tianjin (chs.12, 48, 52, 55)
- `char-218` 田浩 — Tian Chunhang's father (ch.12 ¶3)
- `char-221` 花中桂 (杠花) · `char-222` 花三胡子 — Pan Qiguan's son-in-law and his father (ch.32 ¶7)
- `char-227` 李三叔 — the go-between who placed 许老三 in Pan San's shop (ch.40 ¶21)

## 5. Name-chip guards added

New tokens that would otherwise collide with ordinary words:

- `NON_CHIP_ZH_TOKENS`: 老大 (許老大's short form vs "eldest brother"), 胡子
  (王胡子 vs "beard", 51 occurrences), 仙女 (杜仙女 vs "fairy", 30), 华公 /
  老公 (华老公爷 vs 华公子 ×399 and 华公府 ×34), 卿云 (王卿云 vs 景星卿云)
- `NON_CHIP_EN_TOKENS`: `Jinling` (金龄 vs the city 金陵), `Laoda` (许老大 vs
  孙老大, mirroring the already-blocked `Laosan`)
- `CONTEXT_SENSITIVE_TOKENS`: 红梅 (the maid vs the painted and planted plum
  blossoms of chs.21 and 36)

Verified: after these guards, every chip produced by the 30 new records refers
to the right person.
