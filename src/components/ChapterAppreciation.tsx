import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  GitBranch,
  Heart,
  Eye,
  PenTool,
  MessageSquare,
  Sparkles,
  User,
  Wine,
} from "lucide-react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Dimensions Info interface
interface DimensionSubSection {
  labelZh: string;
  labelEn: string;
  textZh: string;
  textEn: string;
}

interface DimensionInfo {
  icon: React.ReactNode;
  titleZh: string;
  titleEn: string;
  score: number;
  textZh?: string;
  textEn?: string;
  subsections?: DimensionSubSection[];
}

// Taxonomy Feeling interface
interface FeelingItem {
  char: string;
  pinyin: string;
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
}

// Chapter 2 Drinking Game Cup interface
interface DrinkingCupItem {
  id: number;
  titleZh: string;
  titleEn: string;
  ruleZh: string;
  ruleEn: string;
  actionZh: string;
  actionEn: string;
  poetryZh?: string;
  poetryEn?: string;
  critiqueZh: string;
  critiqueEn: string;
}

export function ChapterAppreciation({
  chapterId = 1,
  lang,
}: {
  chapterId?: number;
  lang: "en" | "zh";
}) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTaxonomy, setActiveTaxonomy] = useState<"lords" | "performers">("lords");
  const [selectedFeeling, setSelectedFeeling] = useState<FeelingItem | null>(null);
  const [selectedCup, setSelectedCup] = useState<number | null>(null);

  // ==========================================
  // CHAPTER 1 DATA
  // ==========================================
  const radarData1 = [
    { subject: lang === "zh" ? "文本结构" : "Structure", score: 85 },
    { subject: lang === "zh" ? "人物塑造" : "Character", score: 90 },
    { subject: lang === "zh" ? "主题思想" : "Themes", score: 95 },
    { subject: lang === "zh" ? "叙事视角" : "POV & Voice", score: 80 },
    { subject: lang === "zh" ? "语言修辞" : "Style", score: 88 },
    { subject: lang === "zh" ? "体验共鸣" : "Resonance", score: 85 },
  ];

  const timelineData1 = [
    {
      stage: lang === "zh" ? "1. 书房论友" : "1. Study Chat",
      sentiment: 70,
      description:
        lang === "zh"
          ? "处于道学理学防线下，认为优伶不过是谄媚逢迎、浊臭不堪之人"
          : "Protected by Confucian decorum; dismisses actors as sycophantic and impure",
    },
    {
      stage: lang === "zh" ? "2. 初入戏院" : "2. Entering Theater",
      sentiment: 40,
      description:
        lang === "zh"
          ? "厌恶震天的锣鼓、嘈杂的环境，以及到处拉客的暗弱小旦"
          : "Deafened by gongs, irritated by chaotic crowds and shady actor boys",
    },
    {
      stage: lang === "zh" ? "3. 强触白珠" : "3. Accosted by 'Baozhu'",
      sentiment: 20,
      description:
        lang === "zh"
          ? "被粗俗主动的手艺人强拉手、问姓名，心中厌恶不快到极点"
          : "Felt intense disgust when accosted by the pushy, dark-handed 'Baozhu'",
    },
    {
      stage: lang === "zh" ? "4. 狭路幽香" : "4. Passing Perfume",
      sentiment: 85,
      description:
        lang === "zh"
          ? "车流阻塞中闻到异香，掀帘一瞥见绝色美少年，灵魂受到极大震撼"
          : "Smells divine fragrance in traffic; catches a glance of the peerless boy",
    },
    {
      stage: lang === "zh" ? "5. 归途沉思" : "5. Fated Enchantment",
      sentiment: 100,
      description:
        lang === "zh"
          ? "心灵防线彻底瓦解，沉醉流连，叹服世间真有此等如玉人物"
          : "Intellectual barriers collapse; fully enchanted, recognizing fated beauty",
    },
  ];

  const dimensions1: DimensionInfo[] = [
    {
      icon: <GitBranch size={18} className="text-[var(--accent)]" />,
      titleZh: "文本结构与布局",
      titleEn: "Structure & Layout",
      score: 85,
      subsections: [
        {
          labelZh: "承上启下",
          labelEn: "Connection",
          textZh: "这一章是由“序言”中关于“情”的宏大理论引出，通过大户人家书房的闲谈（理性），过渡到戏院的喧闹（世俗），最后定格在车厢的一瞥（超脱），为后续梅子玉与杜琴言的宿命纠缠埋下了最关键的情感伏笔。",
          textEn: "Transitions from the prologue's theory on 'Qing' to the study's rationality, the theater's vulgarity, and ends with the fateful glance, foreshadowing Ziyu and Qinyan's romance."
        },
        {
          labelZh: "情节逻辑",
          labelEn: "Plot Logic",
          textZh: "它是推动情节发展的“推进器”。主角从抗拒优伶，到被迫接触，再到灵魂震颤，完成了一次心理的断崖式跌落与重生。",
          textEn: "An engine driving the plot. Ziyu falls from rejecting actors to experiencing an aesthetic epiphany."
        },
        {
          labelZh: "节奏掌控",
          labelEn: "Pacing",
          textZh: "作者先是“详写”书房的高谈阔论与戏院的嘈杂，显得有些冗长压抑；然后在结尾处突然“留白”，两人在车流中仅仅是对视，一语未发，将高潮的情感张力拉至顶点。",
          textEn: "Detailed, slow build-up in the study and theater, followed by a sudden, breathtaking 'blank space' at the climax where no words are spoken during the glance."
        }
      ]
    },
    {
      icon: <User size={18} className="text-[var(--accent)]" />,
      titleZh: "人物塑造与心理",
      titleEn: "Characterization & Psychology",
      score: 90,
      subsections: [
        {
          labelZh: "性格展现",
          labelEn: "Personality",
          textZh: "通过梅子玉对戏院环境的极度厌恶（如捂鼻、闭眼），以及面对“假宝珠”拉扯时的发怒神态，揭示了他有着精神洁癖和高傲的一面。",
          textEn: "Ziyu's disgust in the theater and anger towards the fake Baozhu reveal his moral fastidiousness and pride."
        },
        {
          labelZh: "心理深度",
          labelEn: "Psychological Depth",
          textZh: "在这一章中，梅子玉的内心世界经历了“坚冰融化”的剧变。他性格弧光的关键点就在闻到异香、掀开帘子的那一刻，理教防线瞬间崩溃。",
          textEn: "Ziyu's inner world experiences a melting of ice. The turning point of his arc is when he smells the fragrance and lifts the curtain, collapsing his Confucian defenses."
        },
        {
          labelZh: "人物关系",
          labelEn: "Relationships",
          textZh: "史南湘的世故与梅子玉的纯真形成对比。两人在探讨名伶时的对话，体现了南湘作为“引导者”和子玉作为“被动接受者”的权力动态，但最终子玉的情感体验超越了南湘的世俗认知。",
          textEn: "Nanxiang's worldly experience contrasts with Ziyu's purity. Nanxiang acts as a guide, but Ziyu's ultimate emotional epiphany transcends Nanxiang's vulgar appreciation."
        }
      ]
    },
    {
      icon: <Heart size={18} className="text-[var(--accent)]" />,
      titleZh: "主题与思想内核",
      titleEn: "Themes & Philosophical Core",
      score: 95,
      subsections: [
        {
          labelZh: "核心议题",
          labelEn: "Core Issues",
          textZh: "本章探讨了“纯粹的美与世俗的污浊”、“理教禁欲与天性觉醒”之间的冲突，试图论证“好色而不淫”的哲学可能性。",
          textEn: "Explores the conflict between pure beauty and worldly filth, asceticism and awakening, arguing for the philosophical possibility of 'loving beauty without lust'."
        },
        {
          labelZh: "象征与隐喻",
          labelEn: "Symbolism",
          textZh: "“幽香”象征着超越世俗的纯净灵魂；戏院中嘈杂的锣鼓和泥泞的街道，隐喻了晚清京城浑浊不堪的社会现实与肉欲横流的优伶交易。",
          textEn: "The 'fragrance' symbolizes a pure soul transcending the mundane; the muddy streets and noisy theater symbolize the corrupt, lustful reality of late Qing society."
        },
        {
          labelZh: "作者意图",
          labelEn: "Author's Intent",
          textZh: "作者试图借梅子玉的“顿悟”，批判当时将优伶仅仅视为玩物和泄欲工具的庸俗价值观，呼唤一种基于灵魂共鸣的古典理想主义。",
          textEn: "Critiques the vulgar treatment of actors as mere playthings, advocating for a classical idealism based on spiritual resonance."
        }
      ]
    },
    {
      icon: <Eye size={18} className="text-[var(--accent)]" />,
      titleZh: "叙事视角与声音",
      titleEn: "POV & Voice",
      score: 80,
      subsections: [
        {
          labelZh: "叙事视角",
          labelEn: "POV",
          textZh: "采用的是带有说书人遗风的全知视角，但中后段大幅度转向梅子玉的限制性视角。这让读者能够感同身受地体验戏院的恶劣以及对视时的震撼。",
          textEn: "Uses an omniscient narrator with a storyteller's flavor, but shifts heavily to Ziyu's limited perspective, making the reader feel his disgust and sudden awe."
        },
        {
          labelZh: "语调与语体",
          labelEn: "Tone",
          textZh: "文字在开篇是说理的客观冷峻，在戏院描写时转为辛辣讽刺，而在结尾描写琴言容貌时则变为了极度抒情优美的诗化语言，营造了先抑后扬的氛围。",
          textEn: "The tone shifts from cold and theoretical, to biting and satirical in the theater, to highly lyrical and poetic at the end, creating a 'suppress then elevate' atmosphere."
        }
      ]
    },
    {
      icon: <PenTool size={18} className="text-[var(--accent)]" />,
      titleZh: "语言特色与修辞",
      titleEn: "Stylistic Devices",
      score: 88,
      subsections: [
        {
          labelZh: "辞章美感",
          labelEn: "Aesthetics",
          textZh: "大量使用排比、对偶以及典故。如“秋水为神，玉雪为骨”，精妙的白描手法将极具肉体美的名伶升华为抽象的精神符号。",
          textEn: "Heavy use of parallelisms and allusions. Phrases like 'autumn waters for spirit, jade and snow for bones' sublimate physical beauty into a spiritual symbol."
        },
        {
          labelZh: "经典句式",
          labelEn: "Classic Quotes",
          textZh: "“那人面庞庞的，黑漆漆的，一双油手……”与“惊鸿一瞥，异香扑鼻”形成惨烈的对照。前者极尽丑恶，后者极尽唯美。",
          textEn: "The contrast between the ugly 'dark-faced, greasy-handed' fake Baozhu and the beautiful 'fateful glance, exotic fragrance' highlights the author's stylistic range."
        },
        {
          labelZh: "感官描写",
          labelEn: "Sensory Details",
          textZh: "作者极致调动了感官——听觉上的震耳欲聋（戏院），视觉上的泥泞不堪，以及最为关键的嗅觉上的“一阵幽香”，这股香气成为了打破主角心理防御的利器。",
          textEn: "Masterful use of sensory details: deafening noise, muddy sights, and most crucially, the 'exotic fragrance' that acts as the weapon breaking Ziyu's psychological defenses."
        }
      ]
    },
    {
      icon: <MessageSquare size={18} className="text-[var(--accent)]" />,
      titleZh: "阅读体验与共鸣",
      titleEn: "Reader Response",
      score: 85,
      subsections: [
        {
          labelZh: "情感冲击",
          labelEn: "Emotional Impact",
          textZh: "阅读时情绪由极度的烦躁（戏院部分）瞬间转化为极度的惊叹与屏息。那无声的对视不仅击中了梅子玉，也击中了读者的心弦，产生强烈的共鸣。",
          textEn: "The reader's emotion shifts from extreme irritation to sudden awe. The silent glance strikes a chord with both Ziyu and the reader."
        },
        {
          labelZh: "时代反思",
          labelEn: "Modern Reflection",
          textZh: "在2026年高度物质化、娱乐化的今天，戏院里的“假宝珠”拉客与如今的“流量狂欢”何其相似。而梅子玉所追求的那种不掺杂利益、直击灵魂的纯粹爱慕，反倒成为现代人内心深处最稀缺的奢侈品。",
          textEn: "In today's highly materialized 2026, the theater's chaotic hustling mirrors modern 'traffic-driven' entertainment. Ziyu's pursuit of pure, non-transactional love remains a scarce luxury in modern times."
        }
      ]
    },
  ];

  const lordsFeelings: FeelingItem[] = [
    { char: "义", pinyin: "yì", nameZh: "义情", nameEn: "Righteous Feeling", descZh: "见义勇为，重情重义，在道义中融入真情", descEn: "Combines justice with romantic devotion; valuing loyalty and honor." },
    { char: "贵", pinyin: "guì", nameZh: "贵情", nameEn: "Eminent Feeling", descZh: "身份高贵而情意深厚，以贵气温润人情", descEn: "Noble status with rich, deep sentiment; gentle and dignified." },
    { char: "高", pinyin: "gāo", nameZh: "高情", nameEn: "Lofty Feeling", descZh: "高洁脱俗，不染尘俗，寄托于高尚的情操", descEn: "Pure, elevated, above worldly desires; holding high ideals." },
    { char: "闲", pinyin: "xián", nameZh: "闲情", nameEn: "Easy Feeling", descZh: "闲适自在，寄情山水与文艺，不为名利羁绊", descEn: "Leisurely ease; investing feeling in nature, poetry, and art." },
    { char: "雅", pinyin: "yǎ", nameZh: "雅情", nameEn: "Refined Feeling", descZh: "雅致风流，通晓琴棋书画，格调高雅", descEn: "Refined elegance; highly versed in classical arts and literature." },
    { char: "侠", pinyin: "xiá", nameZh: "侠情", nameEn: "Bold Feeling", descZh: "豪侠侠骨，肝胆相照，为知己甘冒万险", descEn: "Chivalrous spirit; heroic devotion that faces danger for loved ones." },
    { char: "狂", pinyin: "kuáng", nameZh: "狂情", nameEn: "Wild Feeling", descZh: "狂放不羁，超脱世俗礼法，至真至纯", descEn: "Wild abandon; defying conventional social rites in search of truth." },
    { char: "黠", pinyin: "xiá", nameZh: "黠情", nameEn: "Witty Feeling", descZh: "聪明机智，诙谐有趣，在智巧中含情", descEn: "Sparkling wit; clever, playful, and quick-minded in romance." },
    { char: "和", pinyin: "hé", nameZh: "和情", nameEn: "Harmonious Feeling", descZh: "温和宽厚，情感协调中庸，平淡而持久", descEn: "Gentle harmony; balanced, peaceful affection that lasts long." },
    { char: "欢", pinyin: "huān", nameZh: "欢情", nameEn: "Joyful Feeling", descZh: "欢乐开朗，乐在其中，给身边人带来愉悦", descEn: "Steeped in joy; radiating cheerfulness and celebrating pleasure." },
  ];

  const performersFeelings: FeelingItem[] = [
    { char: "深", pinyin: "shēn", nameZh: "深情", nameEn: "Profound Feeling", descZh: "情感至深，专一执着，至死不渝", descEn: "Most profound emotion; dedicated, single-minded, and unbreakable." },
    { char: "慧", pinyin: "huì", nameZh: "慧情", nameEn: "Wise Feeling", descZh: "聪明智慧，慧眼识人，能看透风尘世相", descEn: "Intellectual wisdom; a discerning mind that recognizes true worth." },
    { char: "婉", pinyin: "wǎn", nameZh: "婉情", nameEn: "Graceful Feeling", descZh: "温婉可人，柔情似水，言行举止极尽娇美", descEn: "Soft grace; tender and gentle as water, full of subtle beauty." },
    { char: "洁", pinyin: "jié", nameZh: "洁情", nameEn: "Pure Feeling", descZh: "冰清玉洁，坚贞自守，出淤泥而不染", descEn: "Purity; keeping body and soul unblemished amid dirty circles." },
    { char: "贤", pinyin: "xián", nameZh: "贤情", nameEn: "Virtuous Feeling", descZh: "贤良德行，通达大体，克己待人", descEn: "Virtuous conduct; possessing high moral characters and wisdom." },
    { char: "烈", pinyin: "liè", nameZh: "烈情", nameEn: "Ardent Feeling", descZh: "热情如火，刚烈决绝，不受任何欺侮", descEn: "Ardent and fierce; passionate, unyielding under oppression." },
    { char: "贞", pinyin: "zhēn", nameZh: "贞情", nameEn: "Chaste Feeling", descZh: "坚贞不屈，操守严明，一生守护所爱之人", descEn: "Strict integrity; chaste devotion to a single chosen partner." },
    { char: "逸", pinyin: "yì", nameZh: "逸情", nameEn: "Flowing Feeling", descZh: "超逸洒脱，超脱戏班流俗，追求心灵自由", descEn: "Flowing abandon; transcending standard troupe lifestyles for freedom." },
    { char: "华", pinyin: "huá", nameZh: "华情", nameEn: "Radiant Feeling", descZh: "光彩照人，华贵大方，舞台上倾国倾城", descEn: "Radiant beauty and elegance; stunning everyone on the stage." },
    { char: "媚", pinyin: "mèi", nameZh: "媚情", nameEn: "Charming Feeling", descZh: "妩媚动人，柔情百转，令人魂牵梦绕", descEn: "Soft charm and alluring grace; deeply attractive and moving." },
  ];

  // ==========================================
  // CHAPTER 2 DATA
  // ==========================================
  const radarData2 = [
    { subject: lang === "zh" ? "文本结构" : "Structure", score: 80 },
    { subject: lang === "zh" ? "人物塑造" : "Character", score: 88 },
    { subject: lang === "zh" ? "主题思想" : "Themes", score: 85 },
    { subject: lang === "zh" ? "叙事视角" : "POV & Voice", score: 90 },
    { subject: lang === "zh" ? "语言修辞" : "Style", score: 85 },
    { subject: lang === "zh" ? "体验共鸣" : "Resonance", score: 92 },
  ];

  const timelineData2 = [
    {
      stage: lang === "zh" ? "1. 入席筹谋" : "1. Seat Strategy",
      sentiment: 95,
      description:
        lang === "zh"
          ? "作为宴席亲家首座，衣冠楚楚，气度雍容，正襟危坐"
          : "Sits at the head of the table; dignified, well-dressed, and composed",
    },
    {
      stage: lang === "zh" ? "2. 猜拳连罚" : "2. Losing Bets",
      sentiment: 75,
      description:
        lang === "zh"
          ? "猜拳连输三局给杨芳有，被迫认罚喝酒，尊严受到轻微挑战"
          : "Loses three consecutive finger-guessing rounds, forced to drink",
    },
    {
      stage: lang === "zh" ? "3. 装旦进酒" : "3. Drag Toast",
      sentiment: 30,
      description:
        lang === "zh"
          ? "以袖掩须模仿名伶Tan Ba姿态，娇嗔敬酒，滑稽百出，尊严解构"
          : "Forced to mimic Tan Ba; a highly comical drag show that deconstructs authority",
    },
    {
      stage: lang === "zh" ? "4. 喷酒粘花" : "4. Flower Sneeze",
      sentiment: 10,
      description:
        lang === "zh"
          ? "大笑喷酒在御史脸上，又被桂保巧计吹花粘了一脸，狂打喷嚏，仪态扫地"
          : "Sprays wine on the Censor's face, gets covered in plum petals, sneezes uncontrollably",
    },
    {
      stage: lang === "zh" ? "5. 惧内惊退" : "5. Fleeing Wife",
      sentiment: 5,
      description:
        lang === "zh"
          ? "忽报悍妻传唤，脸色惨白，顾不得体统，慌忙扒饭告退，落荒而逃"
          : "Wife sends a messenger; turns pale, scrambles his rice, and flees in panic",
    },
  ];

  const dimensions2: DimensionInfo[] = [
    {
      icon: <GitBranch size={18} className="text-[var(--accent)]" />,
      titleZh: "文本结构与布局",
      titleEn: "Structure & Layout",
      score: 80,
      textZh:
        "第二回采用了精妙的“双线复调，雅俗对照”结构。第一条是“雅线/悬念线”，在梅府书房中，魏聘才绘声绘色地向梅子玉描述“琴官”与“琪官”的绝美姿色，正好与第一回子玉的“车厢惊艳”相吻合，完成了情节悬念的逻辑闭环与升华。第二条是“俗线/讽刺线”，描写王温如府邸的酒宴，通过孙氏丑兄弟的酸态百出与老父孙良功在酒席上被优伶捉弄的喜剧，生动展现了晚清官僚阶层的无聊与虚伪。两条线索在篇尾收拢，做足了名伶正式出场的铺垫。",
      textEn:
        "Chapter 2 employs a dual-thread polyphonic structure. The 'elegant' thread follows Ziyu and Wei Pingcai discussing the breathtaking beauty of Qi Guan and Qin Guan, confirming Ziyu's carriage encounter. The 'vulgar' thread details the chaotic feast at Wang's mansion, introducing the comical Sun brothers and showcasing the vanity of the gentry. The threads merge at the end to herald the actors' official debut.",
    },
    {
      icon: <User size={18} className="text-[var(--accent)]" />,
      titleZh: "人物塑造与心理",
      titleEn: "Characterization & Psychology",
      score: 88,
      textZh:
        "本回是极为精彩的群像刻画。魏聘才的“长袖善舞、八面玲珑”与李元茂的“畏缩寡言”形成鲜明对照。孙氏兄弟（嗣徽、思源）则是古典小说中罕见的讽刺戏剧丑角，一个满口错字、装腔作势（“狗无恒心”），一个生理结巴、专门揭短，极为传神。而名伶王桂保的“聪颖伶俐、掌控全局”与三品官孙良功“惧内、好色、酒后失仪”的尴尬反差，将封建士大夫的伪善嘴脸刻画得入木三分。",
      textEn:
        "The chapter excels in ensemble characterization. Wei Pingcai's verbal tricks contrast with Li Yuanmao's silence. The Sun brothers are classic caricatures of mediocre, pedantic scholars. The actor Wang Guibao's quick-witted playfulness stands in sharp contrast to the senior official Sun Lianggong's drunken loss of decorum and hilarious dread of his jealous wife.",
    },
    {
      icon: <Heart size={18} className="text-[var(--accent)]" />,
      titleZh: "主题与思想内核",
      titleEn: "Themes & Philosophical Core",
      score: 85,
      textZh:
        "本回深化了关于“社会表演与权力倒错”的探讨。在王府大宴上，自诩高尚、满口礼法的士大夫们，在酒令惩罚中被迫“装旦角敬酒”，放下尊严模仿戏子；而卑贱的优伶王桂保却凭借超凡的机智与才华掌控了酒局的节奏，并设计作弄权贵。这种“台下作戏，真假倒错”的戏剧化场景，辛辣地解构了封建统治阶层的道德虚无与精神腐朽，折射出传统礼教在世俗欲望前的无力。",
      textEn:
        "This chapter deepens the theme of social performativity and status inversion. Gentry officials, who hold high social status, are forced to cross-dress and mimic female actors (Sun Lianggong's drag performance) during drinking games, while the actor Wang Guibao controls the feast's rhythm. This performativity exposes the vanity and moral hollow of the late Qing bureaucracy.",
    },
    {
      icon: <Eye size={18} className="text-[var(--accent)]" />,
      titleZh: "叙事视角与声音",
      titleEn: "POV & Voice",
      score: 90,
      textZh:
        "叙事视角从首回聚焦于梅子玉个人的心理，扩展到了对晚清官场宴会群像的“全景式俯瞰”。叙事者的声音充满了干练的讽刺与近乎写实画作的客观笔调。通过对孙良功“喷酒泼脸”、“粘花打喷嚏”以及最后“听闻悍妻传唤面色惨白”等一系列滑稽动作的近距离白描，叙事者如同一位冷眼旁观的剧场看客，不加主观说教，却把讽刺效果拉到最大。",
      textEn:
        "The perspective broadens from Ziyu's limited consciousness to a panoramic view of the gentry banquet. The narrator's voice becomes distinctly satirical and observant. By using graphic vernacular realism to describe the stuttering debates, sprayed wine, and sneezes, the narrative achieves a comic distance that lays bare the social realities.",
    },
    {
      icon: <PenTool size={18} className="text-[var(--accent)]" />,
      titleZh: "语言特色与修辞",
      titleEn: "Stylistic Devices",
      score: 85,
      textZh:
        "本回展示了高超的“语言复调”。魏聘才对秦官、琪官的赞美，运用了仙界典故与唯美排比，辞藻极为华丽。而孙氏兄弟的对话则充斥着生吞活剥的古典字词，拼凑出滑稽的 pedantic 效果。最精彩的则是席间的“飞花令”交锋，将高雅的古典名句（如“桃李春风一杯酒，江湖夜雨十年灯”的化用）与低俗的调笑、甚至粗鄙的俏皮话无缝编织在一起，雅俗互文，妙趣横生。",
      textEn:
        "The prose exhibits a rich heteroglossia. It ranges from Pingcai's romantic parallel prose describing the actors to the pedantic, error-ridden classical jargon of Sun Sihui, and finally to the drinking games where elegant classical poetry (e.g., 'Peach blossoms drift lazily...') clashes with colloquial banter and crude threats.",
    },
    {
      icon: <MessageSquare size={18} className="text-[var(--accent)]" />,
      titleZh: "阅读体验与共鸣",
      titleEn: "Reader Response & Relevance",
      score: 92,
      textZh:
        "读者的阅读体验在这一章里被密集的“喜剧包袱”所填充。孙氏兄弟的错字辩论让人捧腹，而孙良功从雍容华贵到狼狈逃窜的“酒席历险记”，更提供了极高的娱乐价值。在2026年的当下，酒桌上的阿谀奉承、官员的失态无礼以及令人会心一笑的“惧内”八卦，依然具有极其现代的荒诞感和普世共鸣，令现代读者在笑声中反思阶层话语与权力表演的荒谬。",
      textEn:
        "The reader shifts from the romantic suspense of Ziyu's fated love to roaring laughter at the banquet's antics. The depiction of the stuttering scholar, the flower-petal sneeze, and the husband terrified of his wife remains highly relatable in 2026, offering timeless humor regarding status, social performances, and domestic dynamics.",
    },
  ];

  // Chapter 2 Custom Visualizer Data (The 6 Cups of Wang's Feast)
  const drinkingCups: DrinkingCupItem[] = [
    {
      id: 1,
      titleZh: "第一杯：猜拳斗酒",
      titleEn: "Cup 1: Finger Guessing",
      ruleZh: "一化为三，对手指拳",
      ruleEn: "One cup becomes three; guessing fingers with a partner",
      actionZh: "杨芳有与孙良功划拳对决，孙良功连输三局",
      actionEn: "Yang Fangyou vs. Sun Lianggong; Sun loses 3 rounds in a row",
      critiqueZh: "宴席的开局对决，奠定了酒会热闹世俗的欢快基调，同时将孙良功拉入连败的漩涡中。",
      critiqueEn: "The opening duel sets up a noisy, playful tension, pulling Sun Lianggong into a losing streak."
    },
    {
      id: 2,
      titleZh: "第二、三杯：戏装进酒",
      titleEn: "Cup 2 & 3: Performer Impersonation",
      ruleZh: "装旦进酒，模仿名伶Tan Ba神态",
      ruleEn: "Mimic a female performer's posture and toast in drag style",
      actionZh: "孙良功以手掩须，扭捏作态，向杨芳有和陆宗元进大杯",
      actionEn: "Sun Lianggong hides his beard, curtsies, and toasts with large cups",
      critiqueZh: "士大夫高官主动解构自身政治形象，模仿卑微女伶，讽刺了清代官员伪善面具下的庸俗狂欢。",
      critiqueEn: "Gentry officials voluntarily deconstruct their political image, revealing the absurdity beneath decorum."
    },
    {
      id: 4,
      titleZh: "第四杯：数籽定罚",
      titleEn: "Cup 4: Seed Counting Gamble",
      ruleZh: "手抓瓜子，奇偶数子，数到谁谁喝",
      ruleEn: "Grab a handful of melon seeds; count determines the target",
      actionZh: "孙良功手抓瓜子数出二十五粒，再度落到自身受罚",
      actionEn: "Sun Lianggong grabs and counts 25 seeds, landing on himself again",
      critiqueZh: "概率博弈的游戏，展现了席间纯粹的偶然娱乐，也印证了孙良功今晚“衰运缠身”的戏剧定位。",
      critiqueEn: "A pure game of chance that highlights Sun's comedic misfortune throughout the night."
    },
    {
      id: 5,
      titleZh: "第五、六杯：飞花令词",
      titleEn: "Cup 5 & 6: Flying Flower Poetry",
      ruleZh: "二化为六，诗词中须含“花”字，按数字行罚",
      ruleEn: "Two cups become six; quote poetry containing 'flower', count determines target",
      actionZh: "良功、文hui等对诗，良功被王桂保巧计连灌数杯",
      actionEn: "Lianggong, Wenhui, and others trade quotes; Guibao traps Lianggong",
      poetryZh: "“何人更问后庭花” / “桃花细逐杨花落” / “无可奈何花落去”",
      poetryEn: "'Who asks of rear courtyard flowers?' / 'Peach blossoms follow willow flowers' / 'Flowers fall helplessly'",
      critiqueZh: "高雅的诗词成为席间斗智、灌酒的工具，甚至被优伶作为调戏官僚的武器，雅俗在此时达成一体。",
      critiqueEn: "Elegant classical poetry is used as a tactical tool to tease and force drinks on the bureaucracy."
    }
  ];

  // Dynamic selection based on chapterId
  const radarData = chapterId === 2 ? radarData2 : radarData1;
  const timelineData = chapterId === 2 ? timelineData2 : timelineData1;
  const dimensions = chapterId === 2 ? dimensions2 : dimensions1;

  const currentTaxonomyItems = activeTaxonomy === "lords" ? lordsFeelings : performersFeelings;

  return (
    <div className="mt-12 border border-[var(--paper-border)] bg-black/5 rounded-sm p-4 sm:p-6 space-y-8 font-sans">
      {/* Title */}
      <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/50 pb-3">
        <Compass className="text-[var(--accent)] shrink-0" size={22} />
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--ink-title)] font-hans">
            {lang === "zh"
              ? `第${chapterId}回 · 全章点评赏析`
              : `Ch. ${chapterId} · Chapter Appreciation & Analysis`}
          </h3>
          <p className="text-[10px] sm:text-xs text-[var(--ink-dim-text)]">
            {lang === "zh"
              ? "深度挖掘艺术价值、思想内核与表达技巧"
              : "In-depth exploration of artistic value, themes, and techniques"}
          </p>
        </div>
      </div>

      {/* Visualizations Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="border border-[var(--paper-border)]/40 bg-[var(--paper-bg)]/40 p-4 rounded-sm flex flex-col items-center">
          <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] mb-4 text-center font-hans">
            {lang === "zh" ? "文学艺术维度评估 (雷达图)" : "Literary Art Dimension Radar"}
          </h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="var(--paper-border)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "var(--ink-dim-text)", fontSize: 10, fontWeight: 500 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "var(--ink-dim-text)" }} />
                <Radar
                  name={lang === "zh" ? "评估值" : "Score"}
                  dataKey="score"
                  stroke="var(--accent)"
                  fill="var(--accent)"
                  fillOpacity={0.25}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trajectory Chart */}
        <div className="border border-[var(--paper-border)]/40 bg-[var(--paper-bg)]/40 p-4 rounded-sm flex flex-col items-center">
          <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] mb-4 text-center font-hans">
            {chapterId === 2
              ? lang === "zh"
                ? "孙良功酒后失态/尊严崩塌轨迹"
                : "Sun Lianggong's Decorum Collapse Trajectory"
              : lang === "zh"
              ? "梅子玉心理/情感起伏轨迹"
              : "Mei Ziyu's Psychological Trajectory"}
          </h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={timelineData}
                margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="stage"
                  tick={{ fill: "var(--ink-dim-text)", fontSize: 9 }}
                  interval={0}
                />
                <YAxis domain={[0, 100]} tick={{ fill: "var(--ink-dim-text)", fontSize: 9 }} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[var(--paper-bg)] border border-[var(--paper-border)] p-2.5 rounded-sm shadow-md text-left max-w-[200px] text-[10px] sm:text-xs">
                          <p className="font-bold text-[var(--accent)]">{data.stage}</p>
                          <p className="text-[var(--ink-title)] font-bold mt-1">
                            {chapterId === 2
                              ? lang === "zh"
                                ? `体统/尊严指数: ${data.sentiment}`
                                : `Decorum Index: ${data.sentiment}`
                              : lang === "zh"
                              ? `情绪倾向指数: ${data.sentiment}`
                              : `Sentiment Intensity: ${data.sentiment}`}
                          </p>
                          <p className="text-[var(--ink-dim-text)] text-[9px] sm:text-[10px] mt-1 leading-relaxed">
                            {data.description}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="sentiment"
                  stroke="var(--accent)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSentiment)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Six Dimensions Narrative Tabs */}
      <div className="space-y-4">
        <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] border-b border-[var(--paper-border)]/30 pb-1.5 font-hans">
          {lang === "zh" ? "六大赏析维度解读" : "Interpretation of Six Critique Dimensions"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {dimensions.map((dim, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-sm border transition-all cursor-pointer ${
                activeTab === idx
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] font-bold"
                  : "border-[var(--paper-border)] bg-[var(--paper-bg)]/40 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
              }`}
            >
              {dim.icon}
              <span className="font-hans">
                {lang === "zh" ? dim.titleZh : dim.titleEn}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="relative overflow-hidden min-h-[140px] border border-[var(--paper-border)]/30 bg-[var(--paper-bg)]/50 p-4 rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-xs sm:text-sm leading-relaxed"
            >
              <div className="flex items-center justify-between border-b border-[var(--paper-border)]/20 pb-1">
                <span className="font-bold text-[var(--accent)] flex items-center gap-1.5">
                  {dimensions[activeTab].icon}
                  {lang === "zh" ? dimensions[activeTab].titleZh : dimensions[activeTab].titleEn}
                </span>
                <span className="text-[10px] font-bold text-[var(--ink-dim-text)] opacity-75">
                  {lang === "zh"
                    ? `本章侧重度: ${dimensions[activeTab].score}%`
                    : `Emphasis: ${dimensions[activeTab].score}%`}
                </span>
              </div>
              <div className="text-[var(--ink-main)] font-serif space-y-3">
                {dimensions[activeTab].textZh && (
                  <p className="indent-6">
                    {lang === "zh" ? dimensions[activeTab].textZh : dimensions[activeTab].textEn}
                  </p>
                )}
                {dimensions[activeTab].subsections && (
                  <div className="space-y-2.5 mt-2">
                    {dimensions[activeTab].subsections.map((sub, idx) => (
                      <div key={idx} className="bg-[var(--accent)]/5 p-2 rounded-sm border-l-[3px] border-[var(--accent)]/50">
                        <span className="font-bold text-[var(--ink-title)] mr-1.5 font-hans">
                          {lang === "zh" ? sub.labelZh : sub.labelEn}:
                        </span>
                        <span className="leading-relaxed">
                          {lang === "zh" ? sub.textZh : sub.textEn}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Feature - Grid for Ch.1, Flying Flower for Ch.2 */}
      {chapterId === 1 ? (
        /* CHAPTER 1 INTERACTIVE: Taxonomy Grid */
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--paper-border)]/30 pb-2">
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] flex items-center gap-1.5 font-hans">
              <Sparkles size={16} className="text-[var(--accent)]" />
              {lang === "zh" ? "首章“情学”谱系大观 (交互探密)" : "The Chapter 1 'Qing-ology' Taxonomy"}
            </h4>
            <div className="flex rounded-sm border border-[var(--paper-border)] overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActiveTaxonomy("lords");
                  setSelectedFeeling(null);
                }}
                className={`px-3 py-1 text-[10px] sm:text-xs font-bold font-hans transition-colors cursor-pointer ${
                  activeTaxonomy === "lords"
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--paper-bg)] text-[var(--ink-dim-text)] hover:bg-black/5"
                }`}
              >
                {lang === "zh" ? "名士十情 (Lords)" : "Ten Scholar Feelings"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTaxonomy("performers");
                  setSelectedFeeling(null);
                }}
                className={`px-3 py-1 text-[10px] sm:text-xs font-bold font-hans transition-colors cursor-pointer ${
                  activeTaxonomy === "performers"
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--paper-bg)] text-[var(--ink-dim-text)] hover:bg-black/5"
                }`}
              >
                {lang === "zh" ? "优伶十情 (Dan)" : "Ten Actor Feelings"}
              </button>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 点击任意字格，解锁书中十种特定“情”之维度的双语定义与文学意义"
              : "* Click any glyph card to unlock the bilingual definition and critique of that specific taxonomy"}
          </p>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {currentTaxonomyItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedFeeling(item)}
                className={`flex flex-col items-center justify-center p-2 rounded-sm border transition-all cursor-pointer ${
                  selectedFeeling?.char === item.char
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white scale-105 shadow-md"
                    : "border-[var(--paper-border)] bg-[var(--paper-bg)] text-[var(--ink-title)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 hover:scale-102"
                }`}
              >
                <span className="text-xl sm:text-2xl font-bold font-hans">{item.char}</span>
                <span className="text-[8px] opacity-75 font-sans mt-0.5">{item.pinyin}</span>
              </button>
            ))}
          </div>

          <div className="border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)]/30 p-3 sm:p-4 rounded-sm min-h-[90px] flex items-center justify-center">
            {selectedFeeling ? (
              <div className="w-full text-left space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[var(--accent)] font-hans">
                    {selectedFeeling.char}
                  </span>
                  <div className="leading-tight">
                    <h5 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
                      {lang === "zh" ? selectedFeeling.nameZh : selectedFeeling.nameEn}
                    </h5>
                    <p className="text-[9px] sm:text-[10px] text-[var(--ink-dim-text)] opacity-75 font-sans">
                      {selectedFeeling.pinyin.toUpperCase()} ·{" "}
                      {lang === "zh" ? selectedFeeling.nameEn : selectedFeeling.nameZh}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--ink-main)] font-serif">
                  {lang === "zh" ? selectedFeeling.descZh : selectedFeeling.descEn}
                </p>
              </div>
            ) : (
              <div className="text-center py-2 text-xs text-[var(--ink-dim-text)] italic">
                {lang === "zh"
                  ? "💡 请点击上方十个字格之一以浏览点评内容"
                  : "💡 Click one of the ten glyph blocks above to explore detail"}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* CHAPTER 2 INTERACTIVE: Flying Flower Game Explorer */
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--paper-border)]/30 pb-2">
            <Wine className="text-[var(--accent)]" size={18} />
            <h4 className="text-xs sm:text-sm font-bold text-[var(--ink-title)] font-hans">
              {lang === "zh" ? "温如府宴“挑战令”六杯解析 (互动探源)" : "Wang's Feast: 6-Cup Drinking Game Explorer"}
            </h4>
          </div>

          <p className="text-[11px] sm:text-xs text-[var(--ink-dim-text)] leading-relaxed italic">
            {lang === "zh"
              ? "* 点击以下酒杯，了解当晚行令规则、诗词吟诵及背后的士大夫文化解构"
              : "* Click any cup below to inspect the game rules, poetry lines, and sociological deconstruction"}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {drinkingCups.map((cup) => (
              <button
                key={cup.id}
                type="button"
                onClick={() => setSelectedCup(cup.id)}
                className={`p-3 rounded-sm border transition-all text-left flex flex-col justify-between cursor-pointer ${
                  selectedCup === cup.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md scale-102"
                    : "border-[var(--paper-border)] bg-[var(--paper-bg)]/40 hover:border-[var(--accent)]/55 hover:bg-[var(--accent)]/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <Wine
                    size={16}
                    className={selectedCup === cup.id ? "text-[var(--accent)]" : "text-[var(--ink-dim-text)]/60"}
                  />
                  <span className="text-[9px] font-bold text-[var(--ink-dim-text)]">
                    CUP {cup.id}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-[var(--ink-title)] mt-3 font-hans">
                  {lang === "zh" ? cup.titleZh : cup.titleEn}
                </h5>
              </button>
            ))}
          </div>

          {/* Display selected cup info */}
          <div className="border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)]/30 p-4 rounded-sm min-h-[140px] flex items-center justify-center">
            {selectedCup !== null ? (
              (() => {
                const cup = drinkingCups.find((c) => c.id === selectedCup);
                if (!cup) return null;
                return (
                  <div className="w-full text-left space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--paper-border)]/20 pb-1.5">
                      <h5 className="text-sm font-bold text-[var(--accent)] font-hans">
                        {lang === "zh" ? cup.titleZh : cup.titleEn}
                      </h5>
                      <span className="text-[10px] bg-[var(--paper-border)]/30 px-2 py-0.5 rounded-sm text-[var(--ink-dim-text)] font-sans">
                        {lang === "zh" ? `行令规则: ${cup.ruleZh}` : `Rule: ${cup.ruleEn}`}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <p className="font-bold text-[var(--ink-title)]">
                          {lang === "zh" ? "现场交锋实况：" : "Feast Action:"}
                        </p>
                        <p className="text-[var(--ink-dim-text)] leading-relaxed font-sans">
                          {lang === "zh" ? cup.actionZh : cup.actionEn}
                        </p>
                        {cup.poetryZh && (
                          <div className="mt-2 bg-[var(--accent)]/5 border-l-2 border-[var(--accent)] p-2 font-serif italic text-[11px] sm:text-xs">
                            <p className="font-hans font-semibold not-italic text-[var(--accent)]">
                              {lang === "zh" ? "行令吟诵诗句：" : "Recited Poetry Lines:"}
                            </p>
                            <p className="mt-0.5 text-[var(--ink-title)]">{cup.poetryZh}</p>
                            <p className="text-[var(--ink-dim-text)] text-[10px] mt-0.5 font-sans">
                              {cup.poetryEn}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[var(--paper-border)]/20 pt-2 sm:pt-0 sm:pl-4">
                        <p className="font-bold text-[var(--accent)]">
                          {lang === "zh" ? "深层社会学赏析：" : "Sociological Analysis:"}
                        </p>
                        <p className="text-[var(--ink-main)] leading-relaxed font-serif">
                          {lang === "zh" ? cup.critiqueZh : cup.critiqueEn}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="text-center py-4 text-xs text-[var(--ink-dim-text)] italic">
                {lang === "zh"
                  ? "💡 请点击上方四个行酒令卡片之一，解锁深层飞花令与游戏细节解析"
                  : "💡 Click one of the four drinking cup cards above to unlock details"}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
