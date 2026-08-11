# Knowledge Audit

An audit of the app's **editorial knowledge layer** — the annotations, glosses,
essays and reference answers the app asserts *about* the novel and about Chinese
literary history — as distinct from the translation layer (covered by
`TRANSLATION_AUDIT.md` / `TRANSLATION_EVALUATION.md`) and the character roster
(covered by `CHARACTER_AUDIT.md`).

Audited: `src/worksData.json` (469 entries), `src/questions/data/` (42 answers,
bilingual), `src/lacunae.ts` (112 entries), `src/summaries_*.ts` +
`src/summaryGists.ts` (61 chapters, bilingual), `src/appreciationData/`
(60 chapters), `src/characterEvidence.ts` (180 entries), `src/gardens.ts`,
`src/locations.ts` (277 entries), `src/data.ts`, `src/chapterMeta.json`,
`src/utils.tsx` chapter-title translations, and the site copy in `src/App.tsx`.

Every claim below is anchored to a file and, where the novel is the arbiter, to
a chapter in `src/chapterTranslations/chinese/`. Reproduction commands are in
the appendix.

---

## Status — all findings resolved except where noted

Every section below has been repaired on this branch. Three things were
deliberately **not** done, and each is flagged in place:

- **54 of the 62 placeholder entries in `worksData.json` remain placeholders.**
  Eight were answerable from the novel itself or from material already in the
  repo and have been written; the rest are opera scenes I could not source, and
  the network egress here blocks the text repositories that would settle them.
  Writing plausible-sounding entries for them is precisely the failure this
  audit documents in §2 and §3, so they are left empty and honest.
- **One chapter-38 corruption is left standing.** 「崭崭韵谱」 is certainly wrong —
  韵谱 has been pulled in from two clauses earlier — but I could not establish
  the true reading, so the text is untouched rather than guessed at.
- **§4 was resolved by deleting the feature**, not by reconciling the records.

### Found by re-checking the repairs

A second verification pass turned up four more defects, three of them of the same
classes the audit describes and one introduced by the repair itself. All are fixed:

- **A fifth misquotation.** `negative-attitude-homosexuality.ts` and
  `contemporary-homosexual-relationships.ts` both cut chapter 32's
  「此等污秽东西算个**孝廉**，真辱抹杀多少人」 down to 「此等污秽东西算个人！」,
  turning "how can such a filthy creature count as a **licentiate**" into "count
  as a **person**" — a different and much cruder insult. The English gloss
  carried the same error.
- **A mangled game rule.** The chapter-11 drinking game quoted in
  `main-drinking-game-scenes.ts` spliced together the *two different* rule-sets
  the novel gives in that passage, producing a rule with 骨牌名 in two positions
  that appears nowhere in the text. Fixed in both languages.
- **A wrong direction of address in a repair.** The rewritten `扫花` entry had
  He Xiangu dispatching the petal-sweeper. It is the other way round: Lü Dongbin
  holds the office, has converted He Xiangu to sweep daily, and is recruiting one
  more — the errand that takes him to the Handan road.
- **Nine locations whose English never matched.** `nameEn` is not only a display
  label; it is a matching token against the translated text. Nine entries carried
  a disambiguating parenthetical (`Mochou Lake (Nanjing)`, `Lake Tai (Taihu)`…)
  and so highlighted nothing. The bare form is now an alias on each. **This was
  also the flaw in the first pass's §7 repair**, which renamed 怡园 from `Yiyuan`
  — the form the translation uses 127 times — to `Garden of Contentment`, and
  silently killed highlighting for the novel's central location. Reverted, with
  the poetic name kept as an alias; the same for 留青精舍, 三乐园, 牡丹台 and
  牡丹香国.

### 怡园 unified to "Garden of Contentment"

Subsequently, at the author's direction, the rename was made in the other
direction — properly this time, by changing the translation rather than
detaching the gazetteer from it. Counting all variants, 怡园 was appearing in
English as **Yiyuan (362), Yi Garden (51), Garden of Ease (28) and Garden of
Contentment (3)** — 444 occurrences of four different names for the same place,
across the chapter translations, summaries, gists, appreciation data, character
appearances, FAQ answers, relationship labels and work titles. All are now
*Garden of Contentment*.

The substitution was not mechanical: bare occurrences take the article
("at the Garden of Contentment"), already-articled ones do not double it,
possessives resolve to "Xu Ziyun's Garden of Contentment", redundant compounds
collapse ("the Yiyuan garden" → "the Garden of Contentment"), attributive uses
keep no article ("Garden of Contentment Salon Scholar Peers"), and display
labels — `nameEn`, relationship types, work titles — carry no article at all.
Merging the variants also revealed a duplicate in `ENGLISH_WORK_TITLES` (怡园序
had been listed twice, as "Preface to Yiyuan" and "Preface to the Garden of
Ease") and a map value that pointed at no array entry, so that scene's
annotation had never rendered.


## Summary

| # | Class | Severity | Count |
|---|---|---|---|
| 1 | Quotations attributed to the novel that the novel does not contain | **High** | 5 |
| 2 | Opera/work attributions that are wrong | **High** | 9 |
| 3 | Reference entries whose subject is the wrong word entirely | **High** | 2 |
| 4 | Lacunae archive contradicted by the app's own chapter text | Medium | 18 confirmed (of 112) |
| 5 | Transcription corruption in the bundled Chinese text | Medium | 6 confirmed |
| 6 | Enumeration / gloss errors in the summaries and glosses | Medium | 5 |
| 7 | Cross-file contradictions (same fact, two answers) | Low–Medium | 9 |
| 8 | Coverage gaps (placeholder text shipped to users) | Low | 62 |

Two things are worth saying up front. First, the *researched* half of
`worksData.json` is genuinely good — dates, authorships, stele years, rhyme-book
character counts and Tang-poem attributions checked out repeatedly and precisely
(see §9). The errors cluster almost entirely in entries written in a hedging,
"this is probably from…" register. Second, `src/characterEvidence.ts` verified
**clean at 180/180** — every excerpt sits at the chapter and paragraph index it
claims.

---

## 1. Fabricated and misattributed quotations — **fixed**

These were the most damaging findings, because they are presented as primary-text
evidence, in both languages, inside comparative essays.

### 1.1 A wholly invented description of Du Qinyan

`src/questions/data/pinhua-vs-hongloumeng.ts` sets a Lin Daiyu portrait beside
what it labels:

> **Pinhua Baojian (Chapter 3) — Describing Du Qinyan:**
> 「原来这小旦生得十分瘦弱…眉含新月，愁黛依然；眼凝秋水，泪光先满。有一种幽娴贞静之态，不但见之使人魂销，即他自视亦若不胜幽怨。」

**No part of this passage exists in the novel.** Searching all sixty chapters,
none of `原来这小旦生得十分瘦弱`, `眉含新月`, `眼凝秋水`, `泪光先满` or
`幽娴贞静` occurs even once. The longest fragment that matches anything is three
characters. The whole comparison — the app's central argument that Qinyan is
modelled on Daiyu — rests on invented evidence.

### 1.2 A real phrase, wrong chapter, wrong character, invented continuation

The same quotation appears twice, in traditional characters in
`pinhua-vs-bian-er-chai.ts` and in simplified in `pinhua-vs-yichun-xiangzhi.ts`,
labelled **"Chapter 1, describing Mei Ziyu"**:

> 「只見那人生得面如冠玉，唇若塗朱。眉不畫而翠，眼不點而黑。洵是翩翩佳公子，不似凡塵俗骨。」

Only `面如冠玉，唇若涂朱` is real. It is in **chapter 4**, not chapter 1, and it
describes the young man glimpsed across the wine-house gallery — **Tian
Chunhang**, not Mei Ziyu. The text there runs
「身穿肃鸟霜裘，头戴紫貂冠，面如冠玉，唇若涂朱，目光眉彩觉有凌云之气」, and the
narration immediately marks him as a stranger who "could match Yuxiang" —
i.e. explicitly *not* Mei Ziyu. Everything after `唇若涂朱` is invented.

### 1.3 A drinking-game couplet replaced with fabricated lines

`src/questions/data/ziyu-drinking-games.ts` (both `answerEn` and `answerZh`)
quotes chapter 35 as:

> 子玉得了，即道：「我用冷朝阳《送红线》诗，是：洛阳神童正待看，神期一向在云端。」

The chapter actually reads:

> 「我用冷朝阳《送红线》诗一句，孟浩然《登襄城楼》一句，合着是：**还似洛妃乘雾去，更凝神女弄珠游。**」

Both lines of the couplet are fabricated, and the Meng Haoran half of the
attribution is dropped. This also breaks the app's own explanation of the game
two lines above ("embedding the first and last characters of the name" — the
real couplet embeds 洛…神 for 洛神; the invented one does not), and it contradicts
the app's own `送红线` entry in `worksData.json`, which quotes
`还似洛妃乘雾去` correctly.

### 1.4 A rare character silently replaced by a lacuna box

`src/questions/data/main-scholars.ts` quotes chapter 60 as
`唯有日▉清香一炷`. The bundled text reads `唯有日爇清香一炷` — 爇 (to burn) is
present and legible. A quotation should not manufacture a gap.

---

## 2. Opera and work attributions that are wrong — **fixed**

All in `src/worksData.json`. Each was asserted, not hedged, in both languages.
All nine entries have been rewritten in both languages.

| Entry | Cited in ch. | App says | Correct |
|---|---|---|---|
| `题曲` | 1, 6, 8, 9, 37 | "a folded scene from Tang Xianzu's *Peony Pavilion*" | 吴炳《疗妒羹·题曲》. Qiao Xiaoqing reads *The Peony Pavilion* by lamplight — the play she reads has been mistaken for the play she is in. This is the app's second-most-cited scene. |
| `山门` | 6, 37 | "出自《水浒记》" | 《虎囊弹·山门》 (丘园; some attribute to 朱佐朝). 《水浒记》 is Xu Zichang's Song Jiang / Yan Xijiao play — as the app's own `活捉` and `杀惜` entries correctly state. |
| `扫花` | 6, 37 | "出自《西厢记》等，丫鬟或女尼在花园扫花" | 汤显祖《邯郸记·扫花》. The app's own `三醉` entry says so ("常与《扫花》连演"), and ch. 6's playbill lists 《扫花》、《三醉》 adjacently. |
| `相约` | 1, 42 | "《红梅记》（或《西厢记》等才子佳人剧）" | 《钗钏记》. The app's own `讨钗` and `相骂` entries both say so; ch. 1 lists 《相约》、《讨钗》、《拷艳》 and ch. 42 pairs 《相约》、《相骂》. |
| `南浦` | 3, 50 | "《牡丹亭·南浦》（又名《折柳阳关》）" | 《琵琶记·南浦嘱别》. Ch. 50 quotes the sung line 「无限别离情，两月夫妻，一旦孤另」 — Zhao Wuniang's. 《折柳阳关》 is 《紫钗记》, as the app's own separate entry correctly states. |
| `阳告` | 27, 50 | "如《窦娥冤》或《琵琶记》中的情节" | 《焚香记·阳告》 (敫桂英 at the sea-god's temple). The app's own `滚绣球`, `叨叨令` and `脱布衫` entries all name 敫桂英《阳告》. |
| `折柳` | 30, 37 | "《牡丹亭》或《剑阁闻铃》等剧" | 《紫钗记·折柳阳关》 — contradicted by the app's own `折柳阳关` entry. |
| `制谱` | 1, 37 | "唐明皇梦游月宫，听得仙乐，醒后命人制成《霓裳羽衣曲》" | In 《长生殿·闻乐·制谱》 it is **Yang Guifei** whose dream-soul is summoned to the moon palace and who notates the score on waking; the Emperor only receives the finished tablature. |
| `占花魁` | 4 | "卖油郎**秦钟**" / "Qin Zhong" | The oil peddler is **秦重**. 秦钟 is a character in *Honglou meng*. |

Twelve further entries are written in the same guessing register
(`赏荷 瑶台 盗令 杀舟 回猎 拾金 南山 无题 讨钗 挑帘 飞熊梦 刘唐`); of these,
`讨钗`, `挑帘`, `刘唐` and `飞熊梦` are right, and the rest are unverifiable
as written. The pattern is diagnostic: entries containing 可能指 / 多出自 /
常见于 / 或指 are the ones that fail.

---

## 3. Two entries about the wrong word entirely — **fixed**

Both have substantive Chinese text scraped from a general encyclopedia and an
untouched English placeholder, which is how they escaped review.

**`独占`** (cited in chapters 4, 12, 25, 30) is glossed as an **economics
article on monopoly**:

> 獨占，或称独占，舊譯辜榷，一般指唯一的卖者在一个或多个市场…与买方垄断相反。

Chapter 4 names the referent outright: 「用《占花魁》上《独占》这一出戏」. It is
the kunqu scene *The Oil Peddler Wins the Flower Queen* — which the app already
documents under `占花魁`.

**`孟子`** is glossed with a **biography of Mencius the man**, in mixed
traditional/simplified script, rather than the book cited in the novel; the
English field is still the placeholder.

---

## 4. The lacunae archive contradicts the app's own chapter text — **removed**

> **Resolved by removal.** The lacunae archive was deleted after this audit
> (`src/lacunae.ts`, `src/components/LacunaeModal.tsx`, the `#/lacunae/<n>`
> deep link, and the modal's wiring). The □/▉ glyphs still render in the
> chapter text as marked gaps, but the app no longer offers a conjecture about
> what stood in them. The section below is kept as the record of why.
>
> Note that this does **not** fix §5: six of the readings the archive proposed
> were *better* than the text beside them, and those corrections now survive
> only in this document.

`src/lacunae.ts` shipped 112 lacuna records, each rendered in `LacunaeModal` as a
snippet with a highlighted gap, an inferred character and a confidence badge
(确证 / 可能 / 推测). `App.tsx:208` builds these straight from the file — nothing
checks them against the chapter being read.

The bundled Chinese text contains **25 gap markers in total**. So roughly
four-fifths of the archive describes gaps a reader will not find.

Anchoring each record to its chapter (both sides ≥ 5 characters, gap width
exact) resolves 33 of them:

- 8 — gap still open in the text ✅
- 7 — gap filled, and the text agrees with the inference ✅
- **18 — gap filled, and the text says something else** ❌

The 18 conflicts, worst first:

| ch. | badge | app infers | text reads | context |
|---|---|---|---|---|
| 15 | 确证 | 艳 | 秀 | 秀若芝兰，▉如桃李 |
| 53 | 确证 | 黹 | 们 | 香料、针□、顾绣 |
| 13 | 可能 | 钗 | 佩 | 珠钿刻翠，金▉飞霞 |
| 25 | 可能 | 环 | 璫 | 翠羽瑶▉，天女六铢之佩 |
| 60 | 可能 | 绝 | 秾 | 瑶卿之▉艳韶华 |
| 46 | 可能 | 更 | 领 | 蛾眉螓首，▉夸桃李之颜 |
| 45 | 可能 | 折 | 碎 | 豪华怒□琴 |
| 41 | 可能 | 佩叮当 | 佩琤琤 | 听得环□▉▉ |
| 42 | 可能 | 仓仓 | 一直 | 背后□□促促 |
| 53 | 可能 | 嫣然 | 嗤嗤 | □□的笑道 |
| 11 | 可能 | 绡 | 霙 | 红□、红香、红玉 |
| 12 | 可能 | 既 | 半 | □被出门 |
| 51, 58 ×2 | 可能 | 日 / 操 | 肏 | the obscenities |
| 38 | 可能 | 峭峭 | 韵谱 | 崭崭□□ |
| 38 | 推测 | 龄 | 为 | 劳余神□ |
| 37 | 推测 | 仙 | 字 | 算个薄水□ |

Two sub-cases, both user-visible as a contradiction:

- **The text is right and the inference is wrong.** 秾艳芬芳, 翠羽瑶璫,
  白纻丝衫子, 雕轮绣幰, 有妍有妙 are all sound readings; 娇艳, 瑶环, 白绡,
  绣毂 are plausible-sounding guesses at gaps that are not there. Note that
  the archive infers 毂 for 雕轮绣□ in ch. 52 while inferring 幰 for
  绣□香车 in the *same chapter* — the same collocation, two answers.
- **The text is corrupt and the inference is right.** 针**们** should be 针黹
  and 崭崭**韵谱** should be a reduplicative binome; here the archive is the
  better witness and the reading pane is the one at fault (see §5).

Three records go further and invent a gap where the text is intact *and*
misread it:

- ch. 6 — archive: 「性爱▉华」 → 铅. Text: 「性爱**秾**华」, no gap.
- ch. 51 — archive: 「我□你的娘」 → 操. Text: 「我**肏**你的娘」, no gap.
- ch. 54 — archive: 「七律如崔颢之「□荛太华俯咸京」」 → 采, with the note
  「采荛（割草薪），在华山采薪而俯瞰咸阳，描写隐逸之志…待确认崔颢具体诗句」.
  The text reads 「**岧峣**太华俯咸京」 — the opening of Cui Hao's 《行经华阴》,
  "towering Mount Hua looks down on the capital." There is no gap, the inferred
  character is wrong, and the gloss invents a hermit-gathering-firewood reading
  for a line about a mountain's height. The record is badged 推测 and carries
  its own "to be confirmed", but it still ships.

---

## 5. Transcription corruption in the bundled Chinese text — **5 of 6 emended**

Found while resolving §4 — mostly in chapter 38, the erudition chapter, where a
single wrong graph turns a real scholar into a non-person. These read as OCR
damage, not as period variants:

| ch. | text reads | should read | note |
|---|---|---|---|
| 38 | 孙**五**又为《唐韵》 | 孙**愐** | The app's own `唐韵` entry correctly credits Sun Mian. |
| 38 | 齐周**如**作《四声切韵》 | 齐周**颙** | The app's own `四声切韵` entry correctly credits Zhou Yong. |
| 38 | 硕人其颀，衣锦**其**衣 | 衣锦**褧**衣 | *Shijing*, 卫风·硕人 — dittography of 其. |
| 38 | 尽见满纸黝黑，崭崭**韵谱** | a reduplicative binome | 韵谱 has been pulled in from two clauses earlier. |
| 53 | 香料、针**们**、顾绣 | 针**黹** | needlework. |
| 15 | 秀若芝兰，**秀**如桃李 | **艳**如桃李 | dittography; the sentence's point is 极清中恰生出极艳来. |

Two positives worth recording from the same passage: the chapter's rhyme-book
figures — 《广韵》二万六千一百九十四字, 《集韵》五万三千五百二十五字,
《礼部韵》九千五百九十字 — are all exactly right, and the app's annotations
match them.

---

## 6. Enumeration and gloss errors — **fixed**

**6.1 — The English chapter-1 summary drops one of the ten grades.**
`src/summaries_0to10.ts` says gentry patrons are "graded into ten degrees of
'feeling'" and then lists nine: *upright, lofty, untrammelled, splendid,
gallant, wild, playful, harmonious, joyous*. 情中**上** (Sublime) is missing.
The Chinese summary has all ten, the novel has all ten (ch. 1 ¶1–2), and the
app's own taxonomy visualiser in `appreciationData/chapter1.ts` has all
ten + ten. This is the book's organising scheme, stated in its first paragraph.

**6.2 — `惊梦` glossed as "Waking from a Dream"** (and again inside
`游园惊梦`, and in `ENGLISH_WORK_TITLES`). 惊 is *startled / interrupted*, not
*waking*: Du Liniang's dream is broken off, which is the whole point of the
scene and of 《寻梦》 following it. Standard English is "The Interrupted Dream".

**6.3 — `絮阁` glossed as "The Pavilion of Gossamer."** 絮 here is 絮聒, to nag
— the scene is Yang Guifei's jealous tirade after the Emperor's night with the
Plum Consort, which the entry's own Chinese text describes correctly. "Gossamer"
takes 絮 as willow-floss.

**6.4 — `琴挑` calls Chen Miaochang a Buddhist nun** (女尼 / "the nun"). She is a
Daoist nun (道姑) at the 女贞观 — as the app's own `秋江` entry says.

**6.5 — `北征` is described as 七百字 with 一百五十韵.** Those two figures cannot
both hold: 700 characters of pentasyllabic verse is 140 lines, i.e. about 70
rhymes. The 102-rhyme figure the entry gives for Han Yu's 《南山诗》 is correct;
the Du Fu figure is not.

Also minor: `九宫谱` gives the title as 《九宫大成南词腔谱》 (actual:
《新定九宫大成南北词宫谱》); `一痕沙` is circular and self-cancelling
("又作《一斛珠》别体相混者非；此调即《一痕沙》小令") where it could simply say
it is an alternate name of the 昭君怨 tune, which the app already documents;
`图书集成` (EN) prints "Chen Mengléi" with a stray acute accent.

---

## 7. Cross-file contradictions — **fixed**

| Fact | One file says | Another says |
|---|---|---|
| Cast size | `metadata.json`: "207 characters"; `data.ts` resolves to **207** at runtime | four FAQ answers: "over 150 characters" |
| 三乐园 | `locations.ts`: type `garden`, "Three Joys **Garden**" | `gardens.ts`: "Three Joys **Theater**" — and ch. 3 says 「见一个戏园写着三乐园」, a commercial playhouse. It should not be under "Gardens & Garden Sites". |
| 留青精舍 | `locations.ts`: "Quiet-Green Lodge" | `gardens.ts`: "Stay-Green Studio" |
| 怡园 | `locations.ts`: "Yiyuan" | `gardens.ts`: "Garden of Contentment" — and the English text also carried "Yi Garden" (51×) and "Garden of Ease" (28×). **Four renderings of one place.** Unified to *Garden of Contentment* throughout at the author's direction; see the note below. |
| 潘金莲雪天戏叔 | `worksData.json` (EN): "her **brother-in-law** Wu Song" ✅ | `englishWorkTitles.ts`: "Her **Uncle-in-Law**" |
| 芍药圃 / 牡丹台 | both rendered "Peony …" in `locations.ts` | 芍药 is the herbaceous peony, 牡丹 the tree peony — the distinction is the point of having two garden plots |
| 州 vs 府 | `locations.ts` renders 济宁州, 通州, 嘉应州, 无为州 all as "Prefecture" | `TRANSLATION_AUDIT.md` §4 sets the house rule that 州 ≠ 府 ("independent-department magistracy, not 'Zhili prefecture'") |
| 坊里 / 兵马司 | both glossed "Ward Office" in `locations.ts` | they are different institutions |
| 梅崦 pinyin | `gardens.ts`: "Méi Ān" | 崦 is *yān* |

`梁园` (a poem's allusion to Prince Xiao of Liang's park, ch. 4) and `狮子林`
(a simile comparing a rockery to the Suzhou garden, ch. 16) are both typed as
`garden` rather than `allusion`, which puts two places that do not exist in the
novel's geography into its gazetteer.

---

## 8. Coverage gaps — **7 filled, 55 left open deliberately**

- **62 of 469 `worksData.json` entries carry placeholder text.** 60 are
  placeholders in both languages; 2 (`孟子`, `独占`) have Chinese prose and an
  English placeholder — the mismatch is exactly what let §3 through.
- **Seven have been written** from evidence internal to the novel: `势利`/`势僧`
  and `女盗`/`牝贼` (chapter 37 identifies each pair as two names for one scene,
  and turns the 势/牝 pun on them), `登襄城楼` (chapter 35 attributes it to Meng
  Haoran), `番儿` (a standard excerpt of the *Handan Dream*), plus the rewritten
  `独占` and `孟子`. **54 remain placeholders** —
  see the status note at the top of this document for why.
- Several of those remaining are answerable from material already in the repo:
  `势僧` and `牝贼` are glossed in `TRANSLATION_AUDIT.md` §8; `登襄城楼` is
  attributed to Meng Haoran by the novel itself at ch. 35; `断机` is the
  Mencius's-mother scene.
- The corpus is **428,731 CJK characters** across the sixty chapters. Four FAQ
  answers round this to "roughly 500,000" — about 17% high. (Their companion
  figure for *Honglou meng*, "800,000 to 1,000,000", is also above the usual
  ~730,000–800,000 for the 120-chapter text.)

---

## 9. Checked and found clean

Worth recording, both to bound the audit and because it locates where the risk is.

- **`src/characterEvidence.ts` — 180/180.** Every excerpt matches the text at
  the stated chapter *and* paragraph index. The six apparent misses are
  deliberate "no direct description" placeholders.
- **`worksData.json` chapter cross-references — 469/469.** No entry claims a
  chapter in which its term does not occur.
- **The researched half of `worksData.json`.** Spot-checking roughly 120 entries
  against external fact turned up no errors in: stele datings (礼器碑 156,
  曹全碑 185, 受禅/上尊号/孔羡 220, 张猛龙 522, 李仲璇 541, 峄山刻石 219 BC with
  the 993 Chang'an recutting); rhyme-book history (切韵 601/193 rhymes,
  广韵 1008/206 rhymes/~26,000 graphs, 礼部韵略 1037, 平水 1252/107 classes,
  韵会 1297); compilations (古文观止 1695, 222 pieces, 吴楚材/吴调侯;
  缀白裘 1763–74; 唐诗三百首 1763; 元曲选 1615–16; 古今图书集成 1726, 10,000 juan;
  无双谱 c. 1690, 40 figures); Tang poem attributions and dates (哀江头 757,
  哀王孙 756, 燕歌行 738, 公孙大娘 767, 滕王阁序 c. 676, 兰亭 353); and play
  attributions in the researched register (浣纱记, 钗钏记, 红梨记, 渔家乐,
  西楼记, 千忠戮, 铁冠图, 燕子笺, 空谷香, 十五贯, 绣襦记, 狮吼记, 八义记,
  连环记, 明珠记, 雷峰塔, 白兔记).
- **The FAQ's scholarly apparatus.** The ten citations in `academic-papers.ts`
  spot-check as real, correctly attributed publications (verified: Ge, *Late
  Imperial China* 29.1 (2008): 41–72; Mao Wenfang, *中正漢學研究* 37 (2021) —
  the app gives pp. 1–43 where the journal gives 1–44, the only discrepancy
  found). `《品花箋》` in citation 9 is the correct title, not a typo.
- **The historically careful FAQ answers.** `banned-history-social-context.ts`,
  `editions-publication-history.ts`, `historical-era.ts`, `peking-opera-genre.ts`
  and `homosexuality-terms.ts` are well-hedged and, where checkable, right —
  including the distinction between the Tongzhi 7 (1868) Ding Richang listing
  and the earlier campaigns that predate the novel's printing, and the refusal
  to date the setting to a specific reign. These are models for how the rest of
  the knowledge layer could read.
- **Garden data.** 怡园's 「二十四处楼台四百余间屋宇」 matches ch. 5 exactly;
  「二十四处庭院」 matches ch. 25; 红茶仙馆 as "Red Camellia" is confirmed by
  ch. 35's 「红茶花…名为宝珠山茶」.
- **`src/appreciationData/`** (60 chapters, ~590 KB) makes very few claims about
  the world outside the novel, so it presents almost no factual surface; its
  chapter-1 ten-and-ten taxonomy is exactly right.

---

## Recommended order of repair

All done on this branch, in this order:

1. ~~§1 — the three fabricated quotations.~~ **Done.** The Qinyan portrait is
   replaced by the chapter-5 passage where he is asked about his origins
   (「面泛桃花，眼含珠泪……如微风振箫，幽鸣欲泣」), which serves the Daiyu comparison
   better than the invention did; the Mei Ziyu portrait by the real chapter-1
   description; the drinking-game couplet by the real one.
2. ~~§2 and §3 — the nine wrong attributions and two wrong-word entries.~~ **Done.**
3. ~~§4 — gate or reconcile the lacunae archive.~~ **Done** — removed outright.
4. ~~§5 — the transcription errors.~~ **Five of six done**; 崭崭韵谱 left standing.
5. ~~§6.1 — restore 情中上 to the English chapter-1 summary.~~ **Done**, and the
   performers' ten grades are now named there too.
6. ~~§7 — one English name per place, one rule for 州.~~ **Done.**

Remaining: the 54 unsourced `worksData.json` placeholders, and 崭崭韵谱. Both
need a printed edition to settle, which the network here cannot reach.

## Appendix — reproduction

```bash
# §1  verify every quotation marked as coming from the novel
python3 - <<'PY'
import re,glob
full=''.join(re.sub(r'[^一-鿿]','',
      open(f'src/chapterTranslations/chinese/chapterChinese{i}.ts').read())
      for i in range(1,61))
for f in sorted(glob.glob('src/questions/data/*.ts')):
    for p in (r'>\s*"([^"\n]{10,400})"', r'「([^」\n]{10,400})」'):
        for m in re.finditer(p, open(f).read()):
            n=re.sub(r'[^一-鿿]','',m.group(1))
            if len(n)>=10 and n not in full: print(f.split('/')[-1], n[:40])
PY

# §4  resolve every lacuna against its chapter
#     (see the script inline in the commit that added this file)

# §8  corpus size
python3 -c "import re;print(sum(len(re.findall(r'[一-鿿]',
  open(f'src/chapterTranslations/chinese/chapterChinese{i}.ts').read()))
  for i in range(1,61)))"

# §7  runtime cast size
npx tsx -e "import {characters} from './src/data'; console.log(characters.length)"
```

---

*Audit run 2026-08-10 against `claude/app-knowledge-audit-trcv0g`.*
