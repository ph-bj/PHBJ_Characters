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
  // 红梅 is a maid of the Xu household (ch.52) but also the plum blossom that
  // Xiao Cixian paints (ch.21) and the tree in the temple yard (ch.36).
  "红梅",
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
  "皂隶",
  "屈才",
  "屈老",
  // Short forms that collide with ordinary words: 许老大's 老大 (also "eldest
  // brother" and 老大的一跳), 王胡子's 胡子 ("beard", 51 occurrences), and
  // 杜仙女's 仙女 ("fairy", used of painted and dreamt figures throughout).
  "老大",
  "胡子",
  "仙女",
  // 华老公爷 shortens to 华公/老公, which swallow 华公子 (399), 华公府 (34) and
  // 一个老公 "a eunuch". The 华公爷/老公爷 forms still chip.
  "华公",
  "老公",
  // 王卿云's given name collides with the set phrase 景星卿云 (ch.10).
  "卿云",
  // A rank, not a person: 梅侍郎, 刘侍郎 and the fathers of 富三/王恂/颜仲清 are
  // all called 侍郎. The surname-prefixed forms (刘侍郎, 梅侍郎) still chip.
  "侍郎",
]);


// English tokens that must never chip: they collide with historical figures
// mentioned in the text (the Tang poet Du Mu vs 杜母 "Du's mother") or are
// ambiguous between characters ("Laosan" alone may be Pan San or Xu Laosan,
// mirroring the blocked Chinese 老三).
// "Jinling" is overwhelmingly the city 金陵 (Nanjing), not the Hua page 金龄;
// "Laoda" alone may be 许老大 or 孙老大, mirroring the blocked "Laosan".
export const NON_CHIP_EN_TOKENS = new Set([
  "Du Mu",
  "Laosan",
  "Laoda",
  "Jinling",
  "Zhengchang",
  "Zhanggui",
  "Shupu",
]);

// Bare English surnames the translation uses as a character's running name
// ("Pan said…", "Xi smiled…"). They are safe only outside the listed contexts,
// which are historical figures or other characters sharing the surname.
export const EN_TOKEN_CONTEXT_BLOCKS: Record<
  string,
  { before?: string[]; after?: string[] }
> = {
  // 潘其观. Blocked: 潘金莲, 潘安, 潘庚, 潘岳 and 陈后主's 潘妃.
  Pan: { before: ["Consort "], after: [" Jinlian", " An", " Geng", " Yue"] },
  // 奚十一. Blocked: 西施, 奚负羁, 百里奚, 嬖奚, 徐熙, 息夫人, 奚戎, and 二喜
  // where the translation writes it as two words.
  Xi: {
    before: ["Er ", "Lady ", "Brother ", "Baili ", "Bi ", "Xu "],
    after: [" Shi", " Fugong", " Rong"],
  },
  // 云儿. Blocked: the Han official 杨恽.
  Yun: { before: ["Yang "] },
};

export const ENGLISH_ALIAS_TOKENS: Record<string, string[]> = {
  庾香: ["Yuxiang", "Yu Xiang", "Mei Yuxiang"],
  琴官: ["Qinguan", "Qin Guan", "Master Du Qin", "Qin Yan"],
  玉侬: ["Yunong", "Yu Nong", "Yu'nong", "Yu’nong"],
  保珠: ["Bao Zhu", "that Baozhu", "the other Baozhu", "dark-class performer"],
  琴仙: ["Qinxian", "Qin Xian", "Qin Immortal"],
  剑潭: ["Jiantan", "Jian Tan"],
  竹君: ["Zhujun", "Zhu Jun", "Nan Xiang"],
  庸庵: ["Yongan", "Yong An", "Yong'an", "Yong’an"],
  度香: ["Duxiang", "Du Xiang"],
  静宜: ["Jingyi", "Jing Yi", "Ci Xian"],
  前舟: ["Qianzhou", "Qian Zhou"],
  卓然: ["Zhuoran", "Zhuo Ran"],
  湘帆: ["Xiangfan", "Xiang Fan"],
  金栗: ["Jinli", "Jin Li", "Jin Su", "Young Master Jin"],
  虫蛀千字文: [
    "Worm-eaten Primer",
    "Worm-eaten Thousand Character Classic",
    "worm-eaten Thousand Character Classic",
    "Thousand Character Classic",
  ],
  迭韵双声谱: [
    "Iterated Rhymes and Double Sounds",
    "Unapproved Three-Character Classic",
    "Three-Character Classic",
  ],
  瑶卿: ["Yaoqing", "Yao Qing", "Bao Zhu"],
  媚香: ["Meixiang", "Mei Xiang"],
  香畹: ["Xiangwan", "Xiang Wan"],
  瘦香: ["Shouxiang", "Shou Xiang", "Shoufang", "Shou Fang"],
  佩仙: ["Peixian", "Pei Xian"],
  静芳: ["Jingfang", "Jing Fang"],
  蕊香: ["Ruixiang", "Rui Xiang"],
  小梅: ["Xiaomei", "Xiao Mei", "Little Mei"],
  琪官: ["Qiguan", "Qi Guan"],
  铁庵: [
    "Tiean",
    "Tie'an",
    "Tie An",
    "Scholar Mei",
    "Vice Minister Mei",
    "Vice-Minister Mei",
    "Minister Mei",
  ],
  富三爷: ["Fu Third", "Third Master Fu"],
  贵大爷: ["Gui First", "Eldest Master Gui", "Lord Gui"],
  华公子: [
    "Young Master Hua",
    "Lord Hua",
    "Master Hua",
    "Huagongzi",
    "The Young Master",
  ],
  星北: ["Xingbei", "Xing Bei"],
  奚正绅: ["Xi Zhengshen", "Xi Zheng Shen"],
  奚十一: ["Xi Shiyi", "Xi Eleven", "Xi"],
  潘三: [
    "Pan Third",
    "Pan San",
    "Third Master Pan",
    "Third Brother Pan",
    "Master Pan",
    "Pan",
  ],
  乌大傻: ["Wu the Big Fool", "Big Fool", "Wu Dashan", "Wu Dasha", "Dashan", "Dasha"],
  二喜: ["Er Xi"],
  四喜: ["Si Xi"],
  玉美: ["Yu Mei"],
  蓉官: ["Rong-guan"],
  爱珠: ["Ai Zhu"],
  小翠: ["Xiao Cui"],
  俊儿: ["Junner"],
  四儿: ["Sier", "Si’er", "Fourth Boy"],
  云儿: ["Yuner", "Yun"],
  孙氏: ["Lady Sun"],
  许三姐: ["third sister"],
  田太夫人: ["Lady Tian"],
  郑氏: ["Lady Zheng"],
  小顺儿: ["Xiaoshun'er", "Xiaoshun’er"],
  画珠: ["Yazhu"],
  青姨奶奶: ["Concubine Qing", "Green Concubine"],
  白姨奶奶: ["Concubine Bai", "White Concubine"],
  陆夫人: ["Lady Lu"],
  唐和尚: ["Tang the Monk", "Tang the monk", "Master Tang"],
  玉天仙: ["Yutianxian"],
  白菊花: ["Ju Hua"],
  葛贴写: ["Scrivener Ge"],
  杨八: ["Yang Eight"],
  金二: ["Master Jin the Second", "Master Jin"],
  道生: ["Daosheng", "Dao Sheng"],
  石翁: ["Shiweng", "Shi Weng", "Lord Hou", "Hou", "Hou Shi Weng", "Hou Shiweng"],
  侯石翁: ["Hou Shi Weng", "Hou Shiweng", "Lord Hou", "Hou"],
  英官: ["Yingguan", "Ying Guan", "Baying"],
  道翁: ["Daoweng", "Dao Weng"],
  佩秋: ["Peiqiu", "Pei Qiu"],
  金粟: ["Jin Su", "Jinsu"],
  珊枝: ["Shanzhi", "Shan Zhi"],
  屈本立: ["Qu Benli", "Qu Ben Li"],
  屈才爷: ["Qu"],
  屈老爷: ["Qu"],
  屈少君: ["Qu Shaojun"],
  季十矮子: [
    "Ji Shi the Dwarf",
    "Ji Shi Aizi",
    "Ji the Little Dwarf",
    "Ji the Tenth Dwarf",
    "Ji the Tenth",
  ],
  季矮子: ["Ji the Dwarf", "Ji Aizi", "Ji the Little Dwarf"],
  季十: ["Ji Shi"],
  屈琴仙: ["Qu Qinxian", "Qu Qin Xian"],
  屈勤先: ["Qu Qinxian", "Qu Qin Xian"],
  杜仙女: ["Du Xiannv", "Fairy Du"],
  王髯: ["Bearded Wang", "Wang Ran", "Wang the Bearded"],
  王胡子: ["Old Wang Beard", "Bearded Wang", "Wang Huzi", "Wang the Bearded"],
  华公爷: ["Duke Hua"],
  老公爷: ["Duke Hua", "the old Duke"],
  华老公爷: ["Duke Hua", "the old Duke Hua"],
  老阎: ["Old Yan", "old Yan"],
  阎简安: ["Yan Jian'an", "Yan Jian’an", "Yan Jianan"],
  顾月卿: ["Gu Yueqing", "Gu Yue Qing"],
  王卿云: ["Wang Qingyun", "Wang Qing Yun"],
  玉龄: ["Yuling", "Yu Ling"],
  金龄: ["Jinling", "Jin Ling"],
  兰龄: ["Lanling", "Lan Ling"],
  桂龄: ["Guiling", "Gui Ling"],
  凤林: ["Fenglin", "Feng Lin"],
  春林: ["Chunlin", "Chun Lin"],
  翠官: ["Cuiguan", "Cui Guan"],
  红霙: ["Hongying", "Hong Ying"],
  石氏: ["Lady Shi"],
  胡八: ["Hu Ba", "Hu the Eighth"],
  张桐孙: ["Zhang Tongsun", "Zhang Tong Sun"],
  笠山: ["Lishan", "Li Shan"],
  杠花: ["Gang Hua", "Ganghua"],
  玉艳: ["Yuyan", "Yu Yan"],
  香儿: ["Xianger", "Xiang'er", "Xiang’er"],
  保环: ["Baohuan", "Bao Huan"],
  王吉庆: ["Wang Jiqing", "Wang Ji Qing"],
  李春芳: ["Li Chunfang", "Li Chun Fang"],
  李三叔: ["Third Uncle Li", "Li Sanshu"],
  质夫: ["Zhifu", "Zhi Fu"],
  李大夫: ["Doctor Li"],
  王大夫: ["Doctor Wang"],
  老年掌柜: ["elderly shopkeeper", "Elderly shopkeeper"],
  华正昌掌柜: ["Hua Zhengchang Manager", "Hua Zhengchang shopkeeper"],
  华正昌书铺掌柜: ["Hua Zhengchang Bookshop Manager", "Hua Zhengchang Manager"],
  长庆师娘: [
    "Changqing's widow",
    "Changqing’s widow",
    "master's widow",
    "master’s widow",
    "teacher's wife",
    "teacher’s wife",
    "Changqing's wife",
    "Changqing’s wife",
    "wife of Changqing",
  ],
  师娘: [
    "teacher's wife",
    "teacher’s wife",
    "master's wife",
    "master’s wife",
    "master's widow",
    "master’s widow",
  ],
  长庆媳妇: [
    "Changqing's widow",
    "Changqing’s widow",
    "Changqing's wife",
    "Changqing’s wife",
    "wife of Changqing",
  ],
};



export function getEnglishAliasTokens(character: Character): string[] {
  const chineseName = character.name.split(" ")[0];
  const parts =
    character.alias !== "—"
      ? character.alias.split("/").map((p) => p.trim())
      : [];
  const chineseAliases = [
    chineseName,
    ...parts.flatMap((part) => extractChineseTokens(part)),
  ];
  const englishAliases = parts.filter((part) => /[A-Za-z]/.test(part));
  return sortMentionTokensByLength([
    ...new Set([
      ...chineseAliases.flatMap((alias) => ENGLISH_ALIAS_TOKENS[alias] ?? []),
      ...englishAliases,
    ]),
  ]);
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
      beforeFull.includes("交代掌柜") ||
      afterFull.includes("一齐进来劝解") ||
      afterFull.includes("又去安慰") ||
      afterFull.includes("代这相公") ||
      afterFull.includes("说那走堂") ||
      afterFull.includes("为什么巴结")
    );
  }
  if ((token === "掌柜" || token === "掌柜的" || token === "黄掌柜") && char?.id === "char-194") {
    return (
      beforeFull.includes("黄") ||
      beforeFull.includes("春阳") ||
      beforeFull.includes("进了馆子") ||
      afterFull.includes("都站") ||
      afterFull.includes("把算") ||
      afterFull.includes("闹了一") ||
      afterFull.includes("因不") ||
      afterFull.includes("不晓") ||
      afterFull.includes("忙出") ||
      afterFull.includes("与掌柜")
    );
  }
  if ((token === "掌柜" || token === "掌柜的") && char?.id === "char-195") {
    return (
      beforeFull.includes("银号") ||
      afterFull.includes("招呼到里面") ||
      afterFull.includes("只得应了") ||
      beforeFull.includes("别了掌柜")
    );
  }
  if ((token === "掌柜" || token === "掌柜的") && char?.id === "char-196") {
    return beforeFull.includes("老年") || beforeFull.includes("华正昌");
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
  return sortMentionTokensByLength(
    [...new Set([...baseTokens, ...shortenedYeTokens])].filter(
      (t) =>
        (t.length >= 2 || CONTEXT_SENSITIVE_TOKENS.has(t)) &&
        t !== chineseName &&
        !GENERIC_HONORIFICS.has(t) &&
        !NON_CHIP_ZH_TOKENS.has(t),
    ),
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

const segmentCache = new Map<string, Segment[]>();

function getFirstCharMap(tokenMap: [string, Character][]): Map<string, [string, Character][]> {
  if (tokenMap === cachedTokenMap && cachedTokenMapByFirstChar) {
    return cachedTokenMapByFirstChar;
  }
  const map = new Map<string, [string, Character][]>();
  for (const entry of tokenMap) {
    const firstChar = entry[0][0];
    let list = map.get(firstChar);
    if (!list) {
      list = [];
      map.set(firstChar, list);
    }
    list.push(entry);
  }
  return map;
}

export function segmentText(text: string, tokenMap: [string, Character][]): Segment[] {
  const cached = segmentCache.get(text);
  if (cached) return cached;

  const firstCharMap = getFirstCharMap(tokenMap);

  const segments: Segment[] = [];
  let cursor = 0;
  while (cursor < text.length) {
    let matched = false;
    const candidates = firstCharMap.get(text[cursor]);
    if (candidates) {
      for (const [token, initialChar] of candidates) {
        if (text.startsWith(token, cursor)) {
          let char = initialChar;
          const afterPos = cursor + token.length;
          // ASCII tokens require a word-boundary before and after the match
          const isAscii = /[a-zA-Z]/.test(token);
          if (isAscii) {
            if (
              cursor > 0 &&
              /[a-zA-Z\u00C0-\u024F]/.test(text[cursor - 1])
            )
              continue;
            if (
              afterPos < text.length &&
              /[a-zA-Z]/.test(text[afterPos])
            )
              continue;
            const blocks = EN_TOKEN_CONTEXT_BLOCKS[token];
            if (blocks) {
              const before = text.slice(Math.max(0, cursor - 12), cursor);
              const after = text.slice(afterPos, afterPos + 12);
              if (blocks.before?.some((b) => before.endsWith(b))) continue;
              if (blocks.after?.some((a) => after.startsWith(a))) continue;
            }
            if (token === "Qu") {
              const rest = text.slice(cursor);
              const before = text.slice(Math.max(0, cursor - 15), cursor);
              if (
                rest.startsWith("Qu Yuan") ||
                rest.startsWith("Qu Shrine") ||
                before.includes("Jinlü")
              )
                continue;
            }
            if (token === "Hou") {
              const rest = text.slice(cursor);
              const before = text.slice(Math.max(0, cursor - 15), cursor);
              if (
                rest.startsWith("Hou Yi") ||
                rest.startsWith("Hou Sheng") ||
                rest.startsWith("Hou' (") ||
                before.endsWith("matched '") ||
                before.toLowerCase().endsWith("su ")
              )
                continue;
            }
            // 保珠 is distinct from 袁宝珠 in the source. Both are romanized
            // as Baozhu, so nearby context resolves the duplicate token for
            // the performer who lives beside Guibao.
            if (token === "Baozhu" && char.id !== "char-38") {
              const context = text.slice(Math.max(0, cursor - 80), afterPos + 80);
              if (
                !/Yuan Baozhu/i.test(context) &&
                /Guibao|dark-complexioned|another Baozhu|different Baozhu|other Baozhu/i.test(
                  context,
                )
              ) {
                const alternate = tokenMap.find(
                  ([candidate, candidateChar]) =>
                    candidate === token && candidateChar.id === "char-38",
                )?.[1];
                if (alternate) char = alternate;
              }
            }
          }
          if (token === "珊枝") {
            const before = text.slice(Math.max(0, cursor - 15), cursor);
            if (before.endsWith("碧海")) continue;
          }
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
  segmentCache.set(text, segments);
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
  "char-85": "Doctor Wang",
  "char-87": "Madam Lu (Wang household)",

  "char-96": "Madam Lu (Sun household)",
  "char-99": "Eldest Miss Sun",
  "char-68": "Director of the Eastern Palace Zhuang",
  "char-69": "Left Senior Secretary Zheng",
  "char-70": "Imperial College Director Zhang",
  "char-101": "Lady Shi",
  "char-108": "Page Boy",
  "char-109": "Maidservant (Gatekeeper)",
  "char-110": "Household Maid (Clothing)",
  "char-111": "Young Maid (Ziyu Study)",
  "char-116": "Escort Matron (Ba household)",
  "char-117": "Nursemaid (Ba Laifeng)",
  "char-118": "Attendant (Fu household)",
  "char-120": "Retinue (Hua household, ~20-30 people)",
  "char-152": "Changqing's widow",
  "char-190": "Doctor Li",
  "char-191": "Zhang Gui",
  "char-192": "Wang Sheng",
  "char-193": "Qian De",
  "char-194": "Huang Zhanggui",
  "char-195": "Silver Bank Manager",
  "char-196": "Hua Zhengchang Manager",
  "char-197": "Ji Shi the Dwarf",
  "char-131": "Qinyan's mother",
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

/**
 * Returns English/Pinyin search tokens for a character, suitable for
 * searching within English translation text. Mirrors the logic used in
 * buildCharacterTokenMap for the English side, plus fallback names.
 */
export function getEnglishMentionTokens(character: Character): string[] {
  const chineseName = character.name.split(" ")[0];
  const pinyinPart = character.name.slice(chineseName.length).trim();
  const enTokens = new Set<string>();

  if (pinyinPart) {
    const plain = stripDiacritics(pinyinPart);
    const allParts = plain
      .split(/\s+/)
      .filter((p) => /^[a-z'']+$/i.test(p));
    if (allParts.length >= 2) {
      enTokens.add(allParts.join(" "));
      for (const p of allParts.slice(1)) {
        if (p.length >= 4 && isMultiSyllablePinyin(p)) enTokens.add(p);
      }
    } else if (
      allParts.length === 1 &&
      allParts[0].length >= 4 &&
      chineseName.length === 2 &&
      isMultiSyllablePinyin(allParts[0])
    ) {
      enTokens.add(allParts[0]);
    }
  }

  for (const alias of getEnglishAliasTokens(character)) enTokens.add(alias);

  if (ENGLISH_CHARACTER_NAME_FALLBACKS[character.id]) {
    enTokens.add(ENGLISH_CHARACTER_NAME_FALLBACKS[character.id]);
  }

  return [...enTokens]
    .filter((t) => !NON_CHIP_EN_TOKENS.has(t))
    .sort((a, b) => b.length - a.length);
}

let cachedTokenMapCharsRef: Character[] | null = null;
let cachedTokenMap: [string, Character][] | null = null;
let cachedTokenMapByFirstChar: Map<string, [string, Character][]> | null = null;

export function buildCharacterTokenMap(
  chars: Character[],
): [string, Character][] {
  if (cachedTokenMapCharsRef === chars && cachedTokenMap) {
    return cachedTokenMap;
  }

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
    const fallback = ENGLISH_CHARACTER_NAME_FALLBACKS[char.id];
    if (fallback) entries.push([fallback, char]);
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

  cachedTokenMapCharsRef = chars;
  cachedTokenMap = entries;

  const firstCharMap = new Map<string, [string, Character][]>();
  for (const entry of entries) {
    const firstChar = entry[0][0];
    let list = firstCharMap.get(firstChar);
    if (!list) {
      list = [];
      firstCharMap.set(firstChar, list);
    }
    list.push(entry);
  }
  cachedTokenMapByFirstChar = firstCharMap;

  return entries;
}
