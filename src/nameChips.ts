import { Character } from "./types";

// Pure name-chip logic shared by the app (ChapterReader, CharacterDetail) and
// by Node-side audit scripts. This module must stay free of Vite-only imports
// (import.meta.glob) and React so it can run under plain tsx/node.

export function extractChineseTokens(text: string): string[] {
  const matches = text.match(/[\u4e00-\u9fff]+/g);
  return matches ? matches.filter(Boolean) : [];
}

export function stripDiacritics(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export type Segment = string | { token: string; char: Character; chipLabel: string };

// Tokens that are also common Chinese nouns — require context confirmation before
// being rendered as a name chip. Add any token here that causes false positives.
export const CONTEXT_SENSITIVE_TOKENS = new Set([
  "菊花",
  "珍珠",
  "红莲",
  "明珠",
  "掌珠",
  "仆妇",
  "家人媳妇",
  "小丫鬟",
  "伴送婆",
  "乳母",
  "奶妈",
  "跟班",
  "跟班的",
  "掌柜的",
  "掌柜",
  "缝穷婆",
  "缝穷的",
  "老三",
  "鼎",
  "其母",
]);

// Chinese tokens that must never chip on their own: they collide with numbers,
// ordinary nouns, or refer to different people depending on the surname
// (奚十一 vs 十一月; 玉天仙 vs 天仙 "fairy"; 潘老三/许老三/富老三; 张老二/孙老二;
// any restaurant's 掌柜的). The full-name forms still chip normally.
export const NON_CHIP_ZH_TOKENS = new Set([
  "十一",
  "天仙",
  "老二",
  "和尚",
  "妈妈",
  "大夫",
  "穷婆",
]);

// English tokens that must never chip: they collide with historical figures
// mentioned in the text (the Tang poet Du Mu vs 杜母 "Du's mother") or are
// ambiguous between characters ("Laosan" alone may be Pan San or Xu Laosan,
// mirroring the blocked Chinese 老三).
export const NON_CHIP_EN_TOKENS = new Set(["Du Mu", "Laosan"]);

export const ENGLISH_ALIAS_TOKENS: Record<string, string[]> = {
  庾香: ["Yuxiang", "Yu Xiang"],
  琴官: ["Qinguan", "Qin Guan", "Master Du Qin", "Qin Yan"],
  玉侬: ["Yunong", "Yu Nong"],
  琴仙: ["Qinxian", "Qin Xian", "Qin Immortal"],
  剑潭: ["Jiantan", "Jian Tan"],
  竹君: ["Zhujun", "Zhu Jun", "Nan Xiang"],
  庸庵: ["Yongan", "Yong An"],
  度香: ["Duxiang", "Du Xiang"],
  静宜: ["Jingyi", "Jing Yi"],
  前舟: ["Qianzhou", "Qian Zhou"],
  卓然: ["Zhuoran", "Zhuo Ran"],
  湘帆: ["Xiangfan", "Xiang Fan"],
  金栗: ["Jinli", "Jin Li", "Jin Su"],
  虫蛀千字文: ["Worm-eaten Primer"],
  迭韵双声谱: ["Iterated Rhymes and Double Sounds"],
  瑶卿: ["Yaoqing", "Yao Qing"],
  媚香: ["Meixiang", "Mei Xiang"],
  香畹: ["Xiangwan", "Xiang Wan"],
  瘦香: ["Shouxiang", "Shou Xiang", "Shoufang", "Shou Fang"],
  佩仙: ["Peixian", "Pei Xian"],
  静芳: ["Jingfang", "Jing Fang"],
  蕊香: ["Ruixiang", "Rui Xiang"],
  小梅: ["Xiaomei", "Xiao Mei", "Little Mei"],
  琪官: ["Qiguan", "Qi Guan"],
  铁庵: ["Tiean", "Tie'an", "Tie An"],
  富三爷: ["Fu Third", "Third Master Fu"],
  贵大爷: ["Gui First", "Eldest Master Gui"],
  华公子: ["Young Master Hua", "Lord Hua"],
  星北: ["Xingbei", "Xing Bei"],
  奚正绅: ["Xi Zhengshen", "Xi Zheng Shen"],
  道生: ["Daosheng", "Dao Sheng"],
  石翁: ["Shiweng", "Shi Weng"],
  英官: ["Yingguan", "Ying Guan"],
  道翁: ["Daoweng", "Dao Weng"],
  佩秋: ["Peiqiu", "Pei Qiu"],
  金粟: ["Jin Su", "Jinsu"],
  珊枝: ["Shanzhi", "Shan Zhi"],
  屈少君: ["Qu Shaojun"],
};

export function getEnglishAliasTokens(character: Character): string[] {
  if (character.alias === "—") return [];
  const parts = character.alias.split("/").map((p) => p.trim());
  const chineseAliases = parts.flatMap((part) => extractChineseTokens(part));
  const englishAliases = parts.filter((part) => /[A-Za-z]/.test(part));
  return [
    ...new Set([
      ...chineseAliases.flatMap((alias) => ENGLISH_ALIAS_TOKENS[alias] ?? []),
      ...englishAliases,
    ]),
  ];
}

/**
 * Returns true if the token at [start, end) in `text` looks like a person name
 * rather than a common noun, based on surrounding characters.
 */
export function isPersonNameContext(
  text: string,
  start: number,
  end: number,
  char?: Character,
): boolean {
  const token = text.slice(start, end);
  const beforeFull = text.slice(Math.max(0, start - 15), start);
  const afterFull = text.slice(end, end + 20);

  if (token === "仆妇" && char?.id === "char-109") {
    return afterFull.includes("将帖呈上") || (beforeFull.includes("一个") && afterFull.includes("手里拿着"));
  }
  if (token === "家人媳妇" && char?.id === "char-110") {
    return beforeFull.includes("便叫") || afterFull.includes("取出");
  }
  if (token === "小丫鬟" && char?.id === "char-111") {
    return beforeFull.includes("即问") || afterFull.includes("前日太太");
  }
  if (token === "伴送婆" && char?.id === "char-116") {
    return afterFull.includes("家人媳妇") || afterFull.includes("掩了") || beforeFull.includes("被");
  }
  if ((token === "乳母" || token === "奶妈") && char?.id === "char-117") {
    return beforeFull.includes("巴姑娘") || afterFull.includes("大义");
  }
  if ((token === "跟班" || token === "跟班的") && char?.id === "char-118") {
    return beforeFull.includes("一个") || beforeFull.includes("就叫") || beforeFull.includes("交与他") || afterFull.includes("给四百") || afterFull.includes("给看座");
  }
  if ((token === "跟班" || token === "跟班的") && char?.id === "char-120") {
    return beforeFull.includes("二三十匹") || afterFull.includes("把这小顺儿");
  }
  if ((token === "掌柜" || token === "掌柜的") && char?.id === "char-124") {
    return (
      beforeFull.includes("进了") ||
      beforeFull.includes("和馆") ||
      beforeFull.includes("黄") ||
      beforeFull.includes("老年") ||
      beforeFull.includes("走进") ||
      afterFull.includes("都站") ||
      afterFull.includes("把算") ||
      afterFull.includes("闹了一") ||
      afterFull.includes("因不") ||
      afterFull.includes("不晓") ||
      afterFull.includes("招呼") ||
      afterFull.includes("走堂") ||
      afterFull.includes("忙出") ||
      afterFull.includes("与掌柜")
    );
  }
  if ((token === "缝穷婆" || token === "缝穷的") && char?.id === "char-189") {
    return (
      beforeFull.includes("一个") ||
      beforeFull.includes("那个") ||
      afterFull.includes("正伸") ||
      afterFull.includes("抖着") ||
      afterFull.includes("出来") ||
      afterFull.includes("扭着") ||
      afterFull.includes("实在") ||
      afterFull.includes("把眼")
    );
  }
  if (token === "老三" && char?.id === "char-123") {
    return beforeFull.includes("走堂的道") || beforeFull.includes("老三，你不会伺候");
  }
  if (token === "鼎" && char?.id === "char-125") {
    return beforeFull.includes("其祖名") || afterFull.includes("曾任吏部尚书");
  }
  if (token === "其母" && char?.id === "char-131") {
    return beforeFull.includes("碎琴而卒") || afterFull.includes("一年之后") || afterFull.includes("亦悲痛");
  }

  const before = beforeFull.slice(-6);
  const after = afterFull.slice(0, 8);

  // Strong noun indicators first: similes ("丽若天仙", "比他为菊花") and
  // numeral + object classifier ("一盆菊花", "两枝红莲")
  if (/[如像似若为比]$/.test(before)) return false;
  if (/[一二三四五六七八九十百千万两\d][层盆朵束枝株棵瓶碗堆串挂]$/.test(before))
    return false;
  // Noun verb: insert/arrange/pile/plant immediately before
  if (/[插摆堆种赏采送买折剪].$/.test(before)) return false;
  if (/[插摆堆种赏采送买折剪]$/.test(before)) return false;
  // Object nouns directly after ("珍珠皮衣服", "珍珠伞", "红莲寺")
  if (/^[皮伞寺灯汤衣裙钗簪]/.test(after)) return false;

  // Person indicators: name-list enumeration ("红雪、红莲、红香"). The
  // enumeration comma 、 is a strong signal on either side; the ordinary
  // comma ， only counts when it encloses the token on both sides
  // ("...，明珠，赠珠先上..."), since prose like "好花含萼，明珠出胎"
  // also ends with ，before the token.
  if (/、$/.test(before)) return true;
  if (/^、/.test(after)) return true;
  if (/，$/.test(before) && /^，/.test(after)) return true;
  // Followed by a dialogue/action verb
  if (/^[道说答问笑叹嗔骂哭喊叫唱接递掷拿捧应盘]/.test(after)) return true;
  if (/^[便也都只就却又忙先][道说]?/.test(after)) return true; // 便道/也说/就上前
  if (/^一面/.test(after)) return true; // 掌珠一面打扇
  // Followed by a preposition/locative typical of persons ("菊花在净桶上",
  // "菊花房里", "把菊花...")
  if (/^[在把将向对同与和房]/.test(after)) return true;

  // Default: not confident it's a person name — skip the chip
  return false;
}

export const GENERIC_HONORIFICS = new Set([
  "夫人",
  "公子",
  "先生",
  "老爷",
  "太太",
  "小姐",
  "姑娘",
  "奶奶",
  "大人",
  "将军",
  "夫君",
  "大爷",
  "二爷",
  "三爷",
  "少爷",
]);

function sortMentionTokensByLength(tokens: string[]): string[] {
  return [...tokens].sort((a, b) => b.length - a.length);
}

export function getCharacterMentionTokens(character: Character): string[] {
  const chineseName = character.name.split(" ")[0];
  const givenName = chineseName.length > 2 ? chineseName.slice(-2) : "";
  const aliases =
    character.alias !== "—"
      ? character.alias.split(/[/\s，、]+/).filter(Boolean)
      : [];
  const baseTokens = [...new Set([chineseName, givenName, ...aliases])].filter(Boolean);
  const shortenedYeTokens: string[] = [];
  for (const t of baseTokens) {
    if (t.endsWith("爷") && t.length > 2) {
      shortenedYeTokens.push(t.slice(0, -1));
    }
  }
  return sortMentionTokensByLength(
    [...new Set([...baseTokens, ...shortenedYeTokens])].filter(
      (t) =>
        (t.length >= 2 || CONTEXT_SENSITIVE_TOKENS.has(t)) &&
        !GENERIC_HONORIFICS.has(t) &&
        !NON_CHIP_ZH_TOKENS.has(t),
    ),
  );
}

/** Scan left-to-right, matching the longest token at each position. */
export function countMentionsInText(text: string, tokens: string[]): number {
  const sorted = sortMentionTokensByLength(tokens);
  let count = 0;
  let pos = 0;
  while (pos < text.length) {
    let matched = false;
    for (const token of sorted) {
      if (text.startsWith(token, pos)) {
        count++;
        pos += token.length;
        matched = true;
        break;
      }
    }
    if (!matched) pos++;
  }
  return count;
}

export function findMentionPositionsInText(
  text: string,
  tokens: string[],
): number[] {
  const sorted = sortMentionTokensByLength(tokens);
  const positions: number[] = [];
  let pos = 0;
  while (pos < text.length) {
    let matched = false;
    for (const token of sorted) {
      if (text.startsWith(token, pos)) {
        positions.push(pos);
        pos += token.length;
        matched = true;
        break;
      }
    }
    if (!matched) pos++;
  }
  return positions;
}

export function getChineseShortFormTokens(char: Character): string[] {
  const chineseName = char.name.split(" ")[0];
  const givenName = chineseName.length === 3 ? chineseName.slice(1) : null;
  const aliasTokens =
    char.alias !== "—"
      ? char.alias
          .split("/")
          .flatMap((part) => extractChineseTokens(part.trim()))
      : [];
  const baseTokens = [...new Set([...(givenName ? [givenName] : []), ...aliasTokens])];
  const shortenedYeTokens: string[] = [];
  for (const t of baseTokens) {
    if (t.endsWith("爷") && t.length > 2) {
      shortenedYeTokens.push(t.slice(0, -1));
    }
  }
  if (chineseName.endsWith("爷") && chineseName.length > 2) {
    shortenedYeTokens.push(chineseName.slice(0, -1));
  }
  return [...new Set([...baseTokens, ...shortenedYeTokens])].filter(
    (t) =>
      (t.length >= 2 || CONTEXT_SENSITIVE_TOKENS.has(t)) &&
      t !== chineseName &&
      !GENERIC_HONORIFICS.has(t) &&
      !NON_CHIP_ZH_TOKENS.has(t),
  );
}

export function removeTrailingSurname(
  text: string,
  char: Character,
  token: string,
): { text: string; chipLabel?: string } {
  const chineseName = char.name.split(" ")[0];
  const surname = chineseName[0];

  if (/[\u4e00-\u9fff]/.test(token)) {
    const shortForms = getChineseShortFormTokens(char);
    if (shortForms.includes(token) && text.endsWith(surname)) {
      return {
        text: text.slice(0, -surname.length),
        chipLabel: surname + token,
      };
    }
    return { text };
  }

  const pinyinPart = char.name.slice(chineseName.length).trim();
  if (!pinyinPart) return { text };

  const plainParts = stripDiacritics(pinyinPart).split(/\s+/).filter(Boolean);
  const pinyinSurname = plainParts[0];
  const remainingNameParts = plainParts.slice(1);
  const englishAliases = getEnglishAliasTokens(char);
  if (
    !pinyinSurname ||
    (!remainingNameParts.includes(token) && !englishAliases.includes(token))
  ) {
    return { text };
  }

  const match = text.match(new RegExp(`\\b(${pinyinSurname})\\s+$`, "i"));
  if (match) {
    const matchedSurname = match[1];
    return {
      text: text.slice(0, -match[0].length),
      chipLabel: matchedSurname + " " + token,
    };
  }

  return { text };
}

export function segmentText(text: string, tokenMap: [string, Character][]): Segment[] {
  const segments: Segment[] = [];
  let cursor = 0;
  while (cursor < text.length) {
    let matched = false;
    for (const [token, char] of tokenMap) {
      if (text.startsWith(token, cursor)) {
        const afterPos = cursor + token.length;
        // ASCII tokens require a word-boundary after the match
        const isAscii = /[a-zA-Z]/.test(token);
        if (
          isAscii &&
          afterPos < text.length &&
          /[a-zA-Z]/.test(text[afterPos])
        )
          continue;
        // Context-sensitive tokens: only chip if context confirms a person name
        if (
          CONTEXT_SENSITIVE_TOKENS.has(token) &&
          !isPersonNameContext(text, cursor, afterPos, char)
        )
          continue;
        const previous = segments[segments.length - 1];
        let chipLabel = token;
        if (typeof previous === "string") {
          const trimmed = removeTrailingSurname(previous, char, token);
          segments[segments.length - 1] = trimmed.text;
          if (trimmed.chipLabel) chipLabel = trimmed.chipLabel;
        }
        segments.push({ token, char, chipLabel });
        cursor += token.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const last = segments[segments.length - 1];
      if (typeof last === "string") {
        segments[segments.length - 1] = last + text[cursor];
      } else {
        segments.push(text[cursor]);
      }
      cursor++;
    }
  }
  return segments;
}

export function getSegmentChipLabel(
  seg: { token: string; char: Character; chipLabel: string },
  showBilingual: boolean,
): string {
  if (showBilingual) return seg.char.name;
  return seg.chipLabel;
}

export const ENGLISH_CHARACTER_NAME_FALLBACKS: Record<string, string> = {
  "char-87": "Madam Lu (Wang household)",
  "char-96": "Madam Lu (Sun household)",
  "char-99": "Eldest Miss Sun",
  "char-108": "Page Boy",
  "char-109": "Maidservant (Gatekeeper)",
  "char-110": "Household Maid (Clothing)",
  "char-111": "Young Maid (Ziyu Study)",
  "char-116": "Escort Matron (Ba household)",
  "char-117": "Nursemaid (Ba Laifeng)",
  "char-118": "Attendant (Fu household)",
  "char-120": "Retinue (Hua household, ~20-30 people)",
};

export function getCharacterNameForLanguage(
  character: Character,
  lang: "en" | "zh",
): string {
  const chineseName = character.name.split(" ")[0];
  if (lang === "zh") return chineseName;

  const pinyinOrEnglishName = character.name.slice(chineseName.length).trim();
  if (pinyinOrEnglishName) return pinyinOrEnglishName;

  return ENGLISH_CHARACTER_NAME_FALLBACKS[character.id] || character.name;
}

/**
 * Build the token → character map used to render inline name chips.
 * Chinese tokens: full name + given-name shortform + surname-composite forms.
 * English tokens: full de-accented pinyin name, distinctive given-name parts,
 * and explicit English aliases. Bare surnames are deliberately NOT emitted:
 * they collide with dynasty names, place names, and historical figures
 * (e.g. "Zhang Lihua", "Yang Pass", the Tang dynasty).
 */
/**
 * True when a de-accented pinyin string spans two or more syllables (counted
 * as vowel groups, with y/w as consonants): "Ziyu", "Baozhu", "Shun'er" pass;
 * bare single-syllable surnames like "Wang", "Zhen", "Zhang" do not.
 */
export function isMultiSyllablePinyin(part: string): boolean {
  const groups = part.toLowerCase().match(/[aeiou]+/g);
  return (groups?.length ?? 0) >= 2;
}

export function buildCharacterTokenMap(
  chars: Character[],
): [string, Character][] {
  const entries: [string, Character][] = [];
  for (const char of chars) {
    const chineseName = char.name.split(" ")[0];
    const shortForms = getChineseShortFormTokens(char);
    const surname = chineseName[0];
    const compositeTokens = shortForms
      .filter((sf) => !sf.startsWith(surname) && /[一-鿿]/.test(sf))
      .map((sf) => surname + sf);
    const candidates = [chineseName, ...shortForms, ...compositeTokens];
    const zhTokens = [...new Set(candidates)].filter(
      (t) =>
        t.length >= 2 &&
        /[一-鿿]/.test(t) &&
        !GENERIC_HONORIFICS.has(t) &&
        !NON_CHIP_ZH_TOKENS.has(t),
    );
    for (const t of zhTokens) entries.push([t, char]);

    const pinyinPart = char.name.slice(chineseName.length).trim();
    if (pinyinPart) {
      const plain = stripDiacritics(pinyinPart);
      const allParts = plain
        .split(/\s+/)
        .filter((p) => /^[a-z'’]+$/i.test(p));
      const enTokens = new Set<string>();
      if (allParts.length >= 2) {
        enTokens.add(allParts.join(" "));
        // Given-name components only (skip the surname at index 0). A bare
        // component must span two syllables: single-syllable parts such as
        // "Wang" (老王) or "Zhen" (徐震) collide with other surnames, dynasty
        // names, and place names throughout the translation.
        for (const p of allParts.slice(1)) {
          if (p.length >= 4 && isMultiSyllablePinyin(p)) enTokens.add(p);
        }
      } else if (
        allParts.length === 1 &&
        allParts[0].length >= 4 &&
        chineseName.length === 2 &&
        isMultiSyllablePinyin(allParts[0])
      ) {
        // A single distinctive two-syllable given name (e.g. 宝珠 Bǎozhū) —
        // but never a bare surname romanization (e.g. 国子监司业张 Zhāng).
        enTokens.add(allParts[0]);
      }
      for (const alias of getEnglishAliasTokens(char)) enTokens.add(alias);
      for (const t of enTokens) {
        if (!NON_CHIP_EN_TOKENS.has(t)) entries.push([t, char]);
      }
    }
  }
  entries.sort((a, b) => b[0].length - a[0].length);
  return entries;
}
