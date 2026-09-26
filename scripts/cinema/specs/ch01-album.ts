/** Chapter 1, paragraphs 13–34: the eight actors of Nanxiang’s 《花选》, staged with the album beats. Build with `npm run build-cinemas -- 1`. */
import type { Spec, Shot, Cue } from '../write';

/** Subtitles for an eight-line poem written across a poem beat's shot. */
const poemCues = (start: number, end: number, lines: [string, string][]): Cue[] => {
  const step = (end - start - 2) / lines.length;
  return lines.map(([zh, en], i) => [+(start + 0.4 + i * step).toFixed(1), +(start + 0.4 + (i + 1) * step).toFixed(1), zh, en]);
};
const poemLines = (lines: [string, string][]) => `[${lines.map(([zh]) => `'${zh.replace(/[，。；《》、]/g, '')}'`).join(', ')}]`;

const BAOZHU_POEM: [string, string][] = [
  ['舞袖轻盈弱不胜，', 'Your dancing sleeves drift light and frail, too delicate to bear;'],
  ['难将水月比清澄。', 'It is hard to liken such clarity even to the moon upon the water.'],
  ['自从珠字名卿后，', 'Since the character for “Pearl” became the name that graces you,'],
  ['能使珠光百倍增。', 'It has multiplied the luster of pearls a hundredfold.'],
  ['瘦沈腰肢绝可怜，', 'Your waist, slender as Shen Yue’s, is utterly lovely;'],
  ['一生爱好自天然。', 'Your lifelong love of elegance springs from nature alone.'],
  ['风流别有消魂处，', 'Your romantic grace holds a separate, soul-melting charm;'],
  ['始信人间有谪仙。', 'Only now do I believe an exiled immortal walks the mortal realm.'],
];
const HUIFANG_POEM: [string, string][] = [
  ['风流林下久传扬，', 'His unstudied grace, the elegance of the groves, has long been sung abroad;'],
  ['苏小生来独擅长。', 'Young Su, by nature, monopolizes this singular art.'],
  ['一曲清歌绕梁韵，', 'A single melody of pure song leaves its resonance winding round the rafters;'],
  ['天花乱落舞衣香。', 'Heavenly blossoms tumble wildly, scenting your dancing robes.'],
  ['箫管当场犹自羞，', 'The flutes and pipes upon the stage seem almost to blush with shame,'],
  ['暂将仙骨换娇柔。', 'As you exchange your immortal bones for tender grace.'],
  ['一团绛雪随风散，', 'A swirling mass of crimson snow scatters upon the wind,'],
  ['散作千秋儿女愁。', 'Scattering to become the sorrow of lovers for a thousand autumns.'],
];
const SULAN_POEM: [string, string][] = [
  ['芙蓉出水露红颜，', 'A lotus rises from the water, revealing a rosy face;'],
  ['肥瘦相宜合燕环。', 'Both plump and slender suit him well, blending Feiyan and Yuhuan.'],
  ['若使今人行往事，', 'If only the men of today had enacted the deeds of the past,'],
  ['断无胡马入撞关。', 'Surely no barbarian steeds would have breached the mountain pass.'],
  ['此曲只应天上有，', 'This melody should exist only in the heavens above;'],
  ['不知何处落凡尘。', 'I know not where it fell to grace the mortal dust.'],
  ['当年我作唐天宝，', 'If I were the Emperor of Tang in the days of Tianbao,'],
  ['愿把江山换美人。', 'I would gladly trade my rivers and mountains for such a beauty.'],
];
const SHUFANG_POEM: [string, string][] = [
  ['纤纤一片彩云飞，', 'A slender, fragile slip of iridescent cloud takes flight;'],
  ['流雪回风何处依。', 'Flowing snow and swirling wind—where will they find their rest?'],
  ['金缕香多舞衣重，', 'With fragrant golden threads, your dancing robes are heavy;'],
  ['只应常着六铢衣。', 'You ought always to wear the weightless garments of the gods.'],
  ['芙蓉输面柳输腰，', 'The lotus yields to your face, the willow to your waist;'],
  ['恰称花梁金步摇。', 'You perfectly suit the golden hairpin on your floral crown.'],
  ['就使无情更无语，', 'Even if you had no feeling and offered not a word,'],
  ['当场窄步已魂消。', 'Your narrow steps upon the stage would melt the soul.'],
];
const YULIN_POEM: [string, string][] = [
  ['舞袖长拖艳若霞，', 'Your long, trailing dancing sleeves are as breathtaking as the dawn clouds;'],
  ['妆成𩭏鬌髻云斜。', 'Your makeup complete, your clouded hair coiled in sweeping curves.'],
  ['侍儿扶上临春阁，', 'Attendants help you up into the Pavilion of Approaching Spring;'],
  ['要斗南朝张丽华。', 'You mean to rival Zhang Lihua of the Southern Dynasties.'],
  ['慧绝香心酒半酣，', 'Brilliant and fragrant-hearted, when the wine is half drunk,'],
  ['妙疑才过月初三。', 'Your charm is the slender moon just past its third night.'],
  ['动人最是《阳关》曲，', 'Most moving of all is the melody of “Yang Pass”;'],
  ['听得征夫恨不堪。', 'It leaves the departing traveler unable to bear his grief.'],
];
const LANBAO_POEM: [string, string][] = [
  ['侠骨柔情世所难，', 'Chivalrous bones and a tender heart are rare in this world,'],
  ['肯随红袖倚阑干。', 'Yet he is willing to lean against the balustrade with red sleeves.'],
  ['平生知己无须嘱，', 'A lifelong confidant requires no explicit instructions;'],
  ['请把龙纹仔细看。', 'Just examine the dragon patterns on his blade.'],
  ['纷披五色起朝霞，', 'A riot of five colors rises like the morning clouds;'],
  ['鼙鼓声声气倍加。', 'The beating of the war drums redoubles his spirit.'],
  ['戏罢卸妆垂手立，', 'The play done, his makeup removed, he stands with hands at his sides,'],
  ['亭亭一树碧桃花。', 'Tall and graceful—a single tree of verdant peach blossoms.'],
];
const GUIBAO_POEM: [string, string][] = [
  ['盈盈十五已风流，', 'At a graceful fifteen, he is already a master of romance;'],
  ['巧笑横波未解羞。', 'With a clever smile and sidelong glances, he knows not how to be shy.'],
  ['最爱娇憨太无赖，', 'I love most his coy naivety, utterly without pretense;'],
  ['到无人处学春愁。', 'Alone, he mimics the melancholy of spring.'],
  ['我欲当筵乞紫云，', 'I wish to stand before the feast and beg for the Purple Cloud;'],
  ['一时声价遍传闻。', 'For a time, his price and fame are broadcast far and wide.'],
  ['红牙拍到消魂处，', 'When the red ivory clappers strike the soul-melting note,'],
  ['檀口清歌白练裙。', 'Sandalwood lips sing a clear song above a white silk skirt.'],
];
const CHUNXI_POEM: [string, string][] = [
  ['别有人间傅粉郎，', 'There exists a different kind of powdered youth in the mortal realm;'],
  ['销金为饰玉为妆。', 'Melted gold forms his ornaments, and jade his adornment.'],
  ['石麟天上原无价，', 'The stone qilin from the heavens is intrinsically priceless;'],
  ['应捧炉香待玉皇。', 'He should be holding the incense burner, waiting upon the Jade Emperor.'],
  ['才啭歌喉赞不休，', 'He has barely trilled a note, yet praise flows without end;'],
  ['黄金争掷作缠头。', 'Gold is flung in showers for his singer’s fee.'],
  ['王郎偶驾羊车出，', 'When young lord Wang rides out in his goat-drawn cart,'],
  ['十里珠帘尽上钩。', 'Ten miles of pearl curtains are rolled up all at once.'],
];

const ALBUM = 'Painted in ink as leaves of Shi Nanxiang’s 《花选》, the album that ranks the leading dan actors of the capital.';
const ALBUM_ZH = '以水墨绘作史南湘《花选》册页，品评京师名旦。';
const turnPage = (n: string, en: string): [Shot, Cue] => [
  [30, 36, `The ${en} entry`, `再看第${n}题`, `再看第${n}题的是：`, `Ziyu turns to the ${en} entry.`, `子玉翻到第${n}题。`],
  [30.4, 35.6, `再看第${n}题的是：`, `He then looked at the ${en} entry:`],
];
const poemParagraph = (n: number, actor: string, nameEn: string, nameZh: string, poem: [string, string][], next: [string, string]): Spec => {
  const [shot, cue] = turnPage(next[0], next[1]);
  return {
    n, title: [`A poem for ${nameEn}`, `赠${nameZh}诗`], description: [`${ALBUM} Nanxiang’s two quatrains for ${nameEn} are brushed onto a scroll, then Ziyu turns the page.`, `${ALBUM_ZH}南湘赠${nameZh}的两首绝句写上画轴，子玉随即翻页。`],
    staging: `the two quatrains for ${nameEn} on a scroll, then the readers turn the page`,
    shots: [[0, 30, `A poem for ${nameEn}`, `赠${nameZh}诗`, `${poem[0][0]}……${poem[7][0]}`, `Nanxiang’s two quatrains for ${nameEn} are brushed onto a scroll, line by line.`, `南湘赠${nameZh}的两首绝句，一行行写上画轴。`], shot],
    beats: [`poemBeat(${poemLines(poem)}, A.${actor})`, `readersBeat([{ at: 0.2, who: 1, gesture: 'reading' }])`],
    subtitles: [...poemCues(0, 30, poem), cue],
  };
};

export const specs: Spec[] = [
  {
    n: 13, title: ['Yuan Baozhu, a pearl tree', '琼楼珠树袁宝珠'], description: [`${ALBUM} The first entry: Yuan Baozhu.`, `${ALBUM_ZH}第一题：袁宝珠。`],
    staging: 'Yuan Baozhu’s emblem page, portrait, famous scenes, and a closing portrait of his purity',
    shots: [
      [0, 10, 'A pearl tree in the jade tower', '琼楼珠树', '琼楼珠树袁宝珠……姑苏人。隶联锦部。', 'The first entry: Yuan Baozhu, “A Pearl Tree of the Jade Pavilion,” sixteen, of Suzhou, in the Lianjin troupe.', '第一题：琼楼珠树袁宝珠，年十六，姑苏人，隶联锦部。'],
      [10, 19, 'Painter and poet', '善丹青，娴吟咏', '善丹青，娴吟咏……纤音遏云，柔情如水。', 'Skilled in painting and fluent in poetry, he poses in the robes of the 《霓裳》 dance beside a peony.', '善画能诗，着霓裳舞衣，立于牡丹之侧。'],
      [19, 29, 'His famous scenes', '《鹊桥》《密誓》', '其演《鹊桥》、《密誓》、《惊梦》、《寻梦》等出，艳夺明霞', 'Placards name his famous scenes as he dances: The Magpie Bridge, The Secret Vow, The Interrupted Dream, Pursuing the Dream.', '水牌一一垂下：《鹊桥》《密誓》《惊梦》《寻梦》，宝珠当场起舞。'],
      [29, 36, 'Pure as ice and jade', '励志冰清，守身玉洁', '励志冰清，守身玉洁。', 'In daily life he keeps a spirit clear as ice and guards himself pure as jade.', '平时励志冰清，守身玉洁。'],
    ],
    beats: ['emblemBeat(A.baozhu)', "portraitBeat(A.baozhu, ['善丹青', '娴吟咏', '纤音遏云', '柔情如水'])", "repertoireBeat(A.baozhu, ['鹊桥', '密誓', '惊梦', '寻梦'])", "portraitBeat(A.baozhu, ['励志冰清', '守身玉洁'], { flower: 'lotus', pose: DAN_POSES[7] })"],
    subtitles: [
      [0.4, 5, '琼楼珠树袁宝珠', 'Yuan Baozhu: A Pearl Tree of the Jade Pavilion.'],
      [5, 9.6, '宝珠姓袁氏，宇瑶卿，年十六岁。姑苏人。隶联锦部。', 'Style name Yaoqing, sixteen years old, a native of Suzhou, of the Lianjin troupe.'],
      [10.4, 14.4, '善丹青，娴吟咏。', 'He is highly skilled in painting and fluent in poetry.'],
      [14.4, 18.6, '纤音遏云，柔情如水。', 'His slender voice holds back the clouds; his tender feeling flows like water.'],
      [19.4, 24.2, '其演《鹊桥》、《密誓》、《惊梦》、《寻梦》等出，', 'When he performs The Magpie Bridge, The Secret Vow, The Interrupted Dream and Pursuing the Dream,'],
      [24.2, 28.6, '艳夺明霞，朗涵仙露。正使玉环失宠，杜女无华。', 'his beauty eclipses the dawn clouds; Yang Yuhuan would lose her favor, and Du Liniang pale beside him.'],
      [29.4, 33, '平时则清光奕奕，软语喁喁，励志冰清，守身玉洁。', 'In daily life he shines with a pure light, speaks softly, and keeps himself clear as ice, pure as jade.'],
      [33, 35.6, '因赠以诗：', 'Thus, I present him with this poem:'],
    ],
  },
  {
    n: 14, title: ['A poem for Baozhu, and a doubter', '赠宝珠诗，子玉不信'], description: [`${ALBUM} Baozhu’s poem, Ziyu’s disbelief in the study, and the second entry: Su Huifang.`, `${ALBUM_ZH}宝珠之诗，子玉书房中不信，继而第二题苏蕙芳。`],
    staging: 'Baozhu’s poem on a scroll, the three friends arguing over the album, then Su Huifang’s emblem',
    shots: [
      [0, 13, 'A poem for Baozhu', '赠宝珠诗', '舞袖轻盈弱不胜……始信人间有谪仙。', 'Nanxiang’s two quatrains for Baozhu are brushed onto a scroll, line by line.', '南湘赠宝珠的两首绝句，一行行写上画轴。'],
      [13, 27, '“I don’t believe it”', '子玉不信', '子玉笑道：「这不是说戏班里的小旦么？……」', 'In the study, Ziyu laughs at the praise: he has watched the actors and never seen such a one. Zhongqing and Nanxiang insist.', '书房中子玉笑说不信，仲清、南湘各执一词。'],
      [27, 36, 'A jade moon over the jasper terrace', '瑶台璧月', '子玉再看第二题的是：瑶台璧月苏惠芳', 'The second entry: Su Huifang, “A Jade Moon over the Jasper Terrace,” seventeen, of Suzhou.', '第二题：瑶台璧月苏惠芳，年十七，姑苏人。'],
    ],
    beats: [`poemBeat(${poemLines(BAOZHU_POEM)}, A.baozhu)`, "readersBeat([{ at: 0.4, who: 1, gesture: 'laughing' }, { at: 3.8, who: 0, gesture: 'speaking' }, { at: 6.4, who: 1, gesture: 'speaking' }, { at: 10.2, who: 2, gesture: 'pointing' }])", 'emblemBeat(A.huifang)'],
    subtitles: [
      ...poemCues(0, 13, BAOZHU_POEM),
      [13.4, 16.8, '子玉笑道：「这不是说戏班里的小旦么？这是那里的小旦，你赞得这样好？」', 'Ziyu smiled: “Aren’t these young dan actors of the troupes? Which one could you praise so highly?”'],
      [16.8, 19.4, '仲清道：「现在这里的，你不见说在联锦班么？」', 'Zhongqing: “He is right here in the capital—didn’t you read he is in the Lianjin troupe?”'],
      [19.4, 23.2, '子玉道：「我不信，这是竹君撒谎。我今年也看过一天的戏，几曾见小旦中有这样好人？」', 'Ziyu: “I don’t believe it; Zhujun is making it up. I watched plays this year and never saw such a one.”'],
      [23.2, 26.6, '南湘道：「你那天看的不知是什么班子，自然没有好的了。」', 'Nanxiang: “Who knows what miserable troupe you saw that day; naturally there was no one worthwhile.”'],
      [27.4, 31, '子玉再看第二题的是：', 'Ziyu then looked at the second entry:'],
      [31, 35.6, '瑶台璧月苏惠芳。惠芳姓苏氏，字媚香，年十七岁。姑苏人。', 'Su Huifang: A Jade Moon over the Jasper Terrace. Courtesy name Meixiang, seventeen, of Suzhou.'],
    ],
  },
  {
    n: 15, title: ['Su Huifang, spirit and bones', '秋水为神，琼花作骨'], description: [`${ALBUM} Su Huifang: an official’s son who fell into the theatre and kept his integrity.`, `${ALBUM_ZH}苏蕙芳：官家子弟，飘泊入梨园而尚气节。`],
    staging: 'two portrait pages of Su Huifang, with phrases from his entry',
    shots: [
      [0, 18, 'An official’s son', '本官家子', '本官家子，因飘泊入梨园，隶联锦部。秋水为神，琼花作骨。', 'Born to an official family, he drifted into the theatre. Autumn waters form his spirit, jade blossoms his bones.', '本是官家之子，飘泊而入梨园；秋水为神，琼花作骨。'],
      [18, 36, 'Integrity and art', '尚气节，善权变', '工吟咏，尚气节，善权变……色艺冠一时。', 'A poet who reveres integrity and adapts with tact; his beauty and art are the first of his day.', '工诗而重气节，善于权变，色艺冠绝一时。'],
    ],
    beats: ["portraitBeat(A.huifang, ['本官家子', '秋水为神', '琼花作骨'])", "portraitBeat(A.huifang, ['工吟咏', '尚气节', '善权变', '色艺冠一时'], { flower: 'orchid', pose: DAN_POSES[1] })"],
    subtitles: [
      [0.4, 6.4, '本官家子，因飘泊入梨园，隶联锦部。', 'Originally the son of an official family, he drifted into the pear orchard, and belongs to the Lianjin troupe.'],
      [6.4, 12, '秋水为神，琼花作骨。', 'Autumn waters form his spirit; jade blossoms form his bones.'],
      [18.4, 24.4, '工吟咏，尚气节，善权变。', 'He is accomplished in poetry, reveres moral integrity, and excels in tactful adaptability.'],
      [24.4, 32, '慧心独造，巧夺天工，色艺冠一时。', 'With a uniquely inventive mind, his art rivals heaven’s work; his beauty and skill reign supreme in his generation.'],
    ],
  },
  {
    n: 16, title: ['Keeping pure in the pear orchard', '守贞抱洁'], description: [`${ALBUM} Su Huifang’s plays, and his own words on keeping his purity.`, `${ALBUM_ZH}苏蕙芳所演诸戏，及其守贞抱洁之言。`],
    staging: 'Su Huifang on stage under placards of his plays, then a portrait with his words',
    shots: [
      [0, 16, 'His plays', '《瑶台》《盘秋》《亭会》', '其演《瑶台》、《盘秋》、《亭会》诸戏，真见香心如诉，娇韵欲流。', 'On stage in The Jade Terrace, Autumn at the Tray and The Pavilion Meeting, a fragrant heart seems to pour out its grief.', '《瑶台》《盘秋》《亭会》诸戏，香心如诉，娇韵欲流。'],
      [16, 36, 'In his own words', '守贞抱洁', '余不幸坠落梨园……谁谓此中不可守贞抱洁', 'His own words: fallen into the theatre by misfortune, he will find peace in it, and keep his purity.', '其自言：不幸坠落梨园，既为此业，当安之；此中亦可守贞抱洁。'],
    ],
    beats: ["repertoireBeat(A.huifang, ['瑶台', '盘秋', '亭会'])", "portraitBeat(A.huifang, ['既为此业', '则当安之', '守贞抱洁'], { flower: 'plum', pose: DAN_POSES[7] })"],
    subtitles: [
      [0.4, 6, '其演《瑶台》、《盘秋》、《亭会》诸戏，', 'In his performances of The Jade Terrace, Autumn at the Tray and The Pavilion Meeting,'],
      [6, 11, '真见香心如诉，娇韵欲流。', 'one truly sees a fragrant heart pouring out its grievances, a delicate grace about to overflow.'],
      [11, 15.6, '吴绛仙秀色可餐，赵合德寒泉浸玉，苏郎兼而有之。', 'The loveliness of Wu Jiangxian and the cool grace of Zhao Hede—young Su possesses both.'],
      [16.4, 21, '尝语人曰：「余不幸坠落梨园，但既为此业，则当安之。', 'He once said: “It was my misfortune to fall into the pear orchard, but since this is my profession, I must find peace in it.'],
      [21, 27, '谁谓此中不可守贞抱洁，而必随波逐流以自苦者。」', 'Who says one cannot guard one’s purity here, but must drift with the current and torment oneself?”'],
      [27, 31.4, '其志如此。而遥情胜概，罕见其匹焉。', 'Such is his resolve; his sweeping spirit finds scarcely an equal.'],
      [31.4, 35.6, '为之诗曰：', 'Thus, I composed for him this poem:'],
    ],
  },
  poemParagraph(17, 'huifang', 'Huifang', '蕙芳', HUIFANG_POEM, ['三', 'third']),
  {
    n: 18, title: ['Lu Sulan, a coral branch', '碧海珊枝陆素兰'], description: [`${ALBUM} The third entry: Lu Sulan.`, `${ALBUM_ZH}第三题：陆素兰。`],
    staging: 'Lu Sulan’s emblem page, then a portrait with his particulars',
    shots: [
      [0, 20, 'A coral branch in the azure sea', '碧海珊枝', '碧海珊枝陆素兰', 'The third entry: Lu Sulan, “A Coral Branch in the Azure Sea.”', '第三题：碧海珊枝陆素兰。'],
      [20, 36, 'Sixteen, of Suzhou', '年十六岁，姑苏人', '素兰姓陆氏，宇香畹，年十六岁。姑苏人。', 'Style name Xiangwan, sixteen years old, a native of Suzhou.', '字香畹，年十六岁，姑苏人。'],
    ],
    beats: ['emblemBeat(A.sulan)', "portraitBeat(A.sulan, ['字香畹', '年十六岁', '姑苏人'])"],
    subtitles: [
      [0.4, 10, '碧海珊枝陆素兰', 'Lu Sulan: A Coral Branch in the Azure Sea.'],
      [20.4, 30, '素兰姓陆氏，宇香畹，年十六岁。姑苏人。', 'Sulan’s surname is Lu, his style name Xiangwan; he is sixteen, a native of Suzhou.'],
    ],
  },
  {
    n: 19, title: ['Lu Sulan, another Yang Guifei', '俨然又一杨太真'], description: [`${ALBUM} Lu Sulan: his calligraphy, his Yang Guifei, and his purity.`, `${ALBUM_ZH}陆素兰：书法、所演杨太真诸戏，及其洁行。`],
    staging: 'Lu Sulan’s portrait, his Yang Guifei scenes on stage, and a closing portrait',
    shots: [
      [0, 12, 'Jade bones, a brocaded heart', '玉骨冰肌', '隶联锦部。玉骨冰肌，锦心绣口。工书法……', 'Of the Lianjin troupe: jade bones and ice-pure skin; his calligraphy is treasured by scholar-officials.', '隶联锦部，玉骨冰肌，锦心绣口；工书法，士大夫争宝之。'],
      [12, 26, 'Another Yang Guifei', '俨然又一杨太真', '常演《制谱》、《舞盘》、《小宴》、《絮阁》诸戏，俨然又一杨太真也。', 'He plays Composing the Score, Dancing on the Tray, The Small Banquet and The Nagging in the Pavilion: Yang Guifei reborn.', '《制谱》《舞盘》《小宴》《絮阁》，俨然又一杨太真。'],
      [26, 36, 'Pure as white jade', '守白圭之洁', '好义若渴，避恶如仇。真守白圭之洁', 'He thirsts for righteousness and shuns evil, keeping the purity of a white jade scepter.', '好义若渴，避恶如仇，守白圭之洁。'],
    ],
    beats: ["portraitBeat(A.sulan, ['玉骨冰肌', '锦心绣口', '工书法'])", "repertoireBeat(A.sulan, ['制谱', '舞盘', '小宴', '絮阁'])", "portraitBeat(A.sulan, ['好义若渴', '避恶如仇', '守白圭之洁'], { flower: 'chrysanthemum', pose: DAN_POSES[5] })"],
    subtitles: [
      [0.4, 4, '隶联锦部。玉骨冰肌，锦心绣口。', 'Of the Lianjin troupe: jade bones and ice-pure skin, an embroidered heart and a brocaded mouth.'],
      [4, 8, '工书法，虽片纸尺绢，士大夫争宝之如拱壁。', 'He excels at calligraphy; scholar-officials fight over even a scrap of his writing.'],
      [8, 11.6, '善心为窈，骨逾沉水之香；令德是娴，色夺瑶林之月。', 'His heart is deep, his essence more fragrant than aloeswood; his beauty eclipses the moon over a jade forest.'],
      [12.4, 18, '常演《制谱》、《舞盘》、《小宴》、《絮阁》诸戏，', 'He often performs Composing the Score, Dancing on the Tray, The Small Banquet and The Nagging in the Pavilion,'],
      [18, 21.6, '俨然又一杨太真也。', 'appearing for all the world as another Yang Guifei.'],
      [21.6, 25.6, '就使陈鸿立传，未能绘其声容；香山作歌，岂足形其彷佛。', 'Chen Hong’s biography could not depict his voice, nor Bai Juyi’s song capture his likeness.'],
      [26.4, 30.4, '好义若渴，避恶如仇。', 'He thirsts for righteousness and shuns evil as his mortal enemy.'],
      [30.4, 35.6, '真守白圭之洁，而凛素丝之贞者。为之诗曰：', 'He keeps the purity of white jade and the chastity of undyed silk. Thus, I composed for him this poem:'],
    ],
  },
  poemParagraph(20, 'sulan', 'Sulan', '素兰', SULAN_POEM, ['四', 'fourth']),
  {
    n: 21, title: ['Jin Shufang, snow on Mount Qian', '嵰山艳雪金漱芳'], description: [`${ALBUM} The fourth entry: Jin Shufang.`, `${ALBUM_ZH}第四题：金漱芳。`],
    staging: 'Jin Shufang’s emblem page, his portrait with the flute, and his most famous scene',
    shots: [
      [0, 12, 'Luminous snow on Mount Qian', '嵰山艳雪', '嵰山艳雪金漱芳……隶联珠部。', 'The fourth entry: Jin Shufang, “Luminous Snow on Mount Qian,” fifteen, of the Lianzhu troupe.', '第四题：嵰山艳雪金漱芳，年十五，隶联珠部。'],
      [12, 26, 'Flute and chess', '工吟咏吹箫，善弈棋', '秀骨珊珊，柔情脉脉。工吟咏吹箫，善弈棋', 'Delicate bones and tender feelings; a poet, a flute player, a chess player with a recluse’s air.', '秀骨珊珊，柔情脉脉；工诗吹箫，善弈棋，有林下风致。'],
      [26, 36, '“Inscribing the Song”', '《题曲》', '而尤擅名者，为《题曲》一出。', 'His most celebrated scene is “Inscribing the Song.”', '尤以《题曲》一出擅名。'],
    ],
    beats: ['emblemBeat(A.shufang)', "portraitBeat(A.shufang, ['秀骨珊珊', '柔情脉脉', '工吟咏吹箫', '善弈棋'])", "repertoireBeat(A.shufang, ['题曲'])"],
    subtitles: [
      [0.4, 5, '嵰山艳雪金漱芳', 'Jin Shufang: Luminous Snow on Mount Qian.'],
      [5, 11.6, '漱芳姓金氏，字瘦香，年十五岁。姑苏人。隶联珠部。', 'Courtesy name Shouxiang, fifteen, a native of Suzhou, of the Lianzhu troupe.'],
      [12.4, 16.6, '秀骨珊珊，柔情脉脉。', 'His elegant bones are delicate and translucent; his tender feelings flow in continuous pulses.'],
      [16.6, 21, '工吟咏吹箫，善弈棋，', 'He is accomplished in poetry and the flute, and skilled at chess,'],
      [21, 25.6, '楚楚有林下风致。', 'with the refined air of a scholar in seclusion.'],
      [26.4, 31, '其演戏最多，而尤擅名者，', 'He performs the most plays, but the one for which he is most celebrated'],
      [31, 35.6, '为《题曲》一出。', 'is “Inscribing the Song.”'],
    ],
  },
  {
    n: 22, title: ['Jin Shufang, keeper of the heavenly library', '嫏嬛掌书仙'], description: [`${ALBUM} Jin Shufang’s beauty, his plays, and his learning.`, `${ALBUM_ZH}金漱芳之色艺、所演诸戏及其学养。`],
    staging: 'a portrait of Jin Shufang like a crabapple newly opened, his plays on stage, and a closing portrait',
    shots: [
      [0, 16, 'Like a crabapple newly opened', '海棠初开', '真檀口生香，素腰如柳。比之海棠初开，素馨将放', 'Sandalwood lips and a willow waist, like a crabapple newly opened or jasmine about to bloom.', '檀口生香，素腰如柳，如海棠初开，素馨将放。'],
      [16, 28, 'Flirting with a Zither', '《琴挑》《秋江》', '其余《琴挑》、《秋江》诸戏，情韵如生', 'In Flirting with a Zither and The Autumn River, feeling comes vividly to life.', '《琴挑》《秋江》诸戏，情韵如生。'],
      [28, 36, 'An immortal of the heavenly library', '嫏嬛掌书仙', '是真嫏嬛掌书仙，岂菊部中所能觏耶？', 'Beautiful without and wise within: an immortal keeper of the heavenly library.', '秀外慧中，真嫏嬛掌书仙。'],
    ],
    beats: ["portraitBeat(A.shufang, ['檀口生香', '素腰如柳'], { flower: 'begonia' })", "repertoireBeat(A.shufang, ['琴挑', '秋江'], { pose: DAN_POSES[2] })", "portraitBeat(A.shufang, ['秀外慧中', '嫏嬛掌书仙'], { flower: 'orchid', pose: DAN_POSES[3] })"],
    subtitles: [
      [0.4, 4.4, '真檀口生香，素腰如柳。', 'Truly, his sandalwood lips exude fragrance, and his waist sways like a willow.'],
      [4.4, 9.4, '比之海棠初开，素馨将放，', 'Like a newly opened crabapple, or jasmine just about to bloom,'],
      [9.4, 15.6, '其色香一界，几欲使神仙堕刼矣。', 'his color and fragrance could almost make an immortal fall into worldly tribulation.'],
      [16.4, 22, '其余《琴挑》、《秋江》诸戏，情韵如生，', 'In other plays, such as Flirting with a Zither and The Autumn River, feeling comes vividly to life,'],
      [22, 27.6, '亦非他人所能。而香心婉婉，秀外慧中。', 'beyond the reach of others. His fragrant heart is gentle; he is beautiful without and wise within.'],
      [28.4, 33, '是真嫏嬛掌书仙，岂菊部中所能觏耶？', 'Truly an immortal keeper of books in the heavenly library—how could one meet him in the theatre?'],
      [33, 35.6, '为之诗曰：', 'Thus, I composed for him this poem:'],
    ],
  },
  poemParagraph(23, 'shufang', 'Shufang', '漱芳', SHUFANG_POEM, ['五', 'fifth']),
  {
    n: 24, title: ['Li Yulin, a jade tree in the wind', '玉树临风李玉林'], description: [`${ALBUM} The fifth entry: Li Yulin.`, `${ALBUM_ZH}第五题：李玉林。`],
    staging: 'Li Yulin’s emblem page, then a portrait with his particulars',
    shots: [
      [0, 20, 'A jade tree facing the wind', '玉树临风', '玉树临风李玉林', 'The fifth entry: Li Yulin, “A Jade Tree Facing the Wind.”', '第五题：玉树临风李玉林。'],
      [20, 36, 'Fifteen, of Yangzhou', '年十五岁，扬州人', '玉林姓李氏，字佩仙，年十五岁。扬州人。', 'Courtesy name Peixian, fifteen years old, a native of Yangzhou.', '字佩仙，年十五岁，扬州人。'],
    ],
    beats: ['emblemBeat(A.yulin)', "portraitBeat(A.yulin, ['字佩仙', '年十五岁', '扬州人'])"],
    subtitles: [
      [0.4, 10, '玉树临风李玉林', 'Li Yulin: A Jade Tree Facing the Wind.'],
      [20.4, 30, '玉林姓李氏，字佩仙，年十五岁。扬州人。', 'Yulin’s surname is Li, his courtesy name Peixian; he is fifteen, a native of Yangzhou.'],
    ],
  },
  {
    n: 25, title: ['Li Yulin, willow at Yang Pass', '折柳阳关'], description: [`${ALBUM} Li Yulin: his accomplishments and his celebrated scenes.`, `${ALBUM_ZH}李玉林：才艺及其名剧。`],
    staging: 'a portrait of Li Yulin, then his willow-farewell scene and his other plays on stage',
    shots: [
      [0, 12, 'A lotus at sunrise', '初日芙蕖，晓风杨柳', '隶联珠部。初日芙蕖，晓风杨柳。娴吟咏，工丝竹', 'Of the Lianzhu troupe: a lotus greeting the sun, a willow in the dawn breeze; poet, musician, master of Go.', '隶联珠部；初日芙蕖，晓风杨柳；娴吟咏，工丝竹，精于围棋马吊。'],
      [12, 24, '“Willow at Yang Pass”', '《折柳阳关》', '其演《折柳阳关》一出，名噪京师。', 'His “Willow at Yang Pass,” a willow branch in hand, made him famous throughout the capital.', '《折柳阳关》一出，名噪京师。'],
      [24, 36, 'Hiding the Boat, Sending the Fan', '《藏舟》《寄扇》', '再演《藏舟》、《草地》、《寄扇》等戏，情思皆足动人。', 'In Hiding the Boat, Grass Ground and Sending the Fan, his feeling moves everyone who watches.', '《藏舟》《草地》《寄扇》诸戏，情思皆足动人。'],
    ],
    beats: ["portraitBeat(A.yulin, ['初日芙蕖', '晓风杨柳', '娴吟咏', '工丝竹'])", "repertoireBeat(A.yulin, ['折柳阳关'])", "repertoireBeat(A.yulin, ['藏舟', '草地', '寄扇'], { pose: DAN_POSES[6] })"],
    subtitles: [
      [0.4, 4.2, '隶联珠部。初日芙蕖，晓风杨柳。', 'Of the Lianzhu troupe: like a lotus greeting the sun, or a willow in the dawn breeze.'],
      [4.2, 8, '娴吟咏，工丝竹，围碁、马吊，皆精绝一时。', 'Fluent in poetry, skilled in strings and woodwinds, unrivalled at Go and at cards.'],
      [8, 11.6, '温柔旖旎中，自具不可夺之志，真殊艳也。', 'Within his gentle charm lies an unyielding resolve: truly an exceptional beauty.'],
      [12.4, 16.6, '其演《折柳阳关》一出，名噪京师。', 'His “Willow at Yang Pass” brought him fame throughout the capital.'],
      [16.6, 23.6, '见其婉转娇柔，哀情艳思，如睹霍小玉生平，', 'His grace and sorrowful yearning are like witnessing the very life of Huo Xiaoyu.'],
      [24.4, 29.4, '再演《藏舟》、《草地》、《寄扇》等戏，情思皆足动人。', 'In Hiding the Boat, Grass Ground and Sending the Fan, his deep emotions are utterly moving.'],
      [29.4, 35.6, '真琼树朝朝，金莲步步，有临春、结绮之遗韵矣。为之诗曰：', 'A jade tree every morning, golden lotus steps at every turn. Thus, I composed for him this poem:'],
    ],
  },
  poemParagraph(26, 'yulin', 'Yulin', '玉林', YULIN_POEM, ['六', 'sixth']),
  {
    n: 27, title: ['Wang Lanbao, silver flowers on a fiery tree', '火树银花王兰保'], description: [`${ALBUM} The sixth entry: Wang Lanbao, the martial one.`, `${ALBUM_ZH}第六题：王兰保，善武技。`],
    staging: 'Wang Lanbao’s emblem page of fireworks, then his portrait with sword',
    shots: [
      [0, 16, 'Silver flowers on a fiery tree', '火树银花', '火树银花王兰保……隶联锦部。', 'The sixth entry: Wang Lanbao, “Silver Flowers on a Fiery Tree,” seventeen, of Yangzhou, in the Lianjin troupe.', '第六题：火树银花王兰保，年十七，扬州人，隶联锦部。'],
      [16, 36, 'A startled swan, a swimming dragon', '翩若惊鸿，婉若游龙', '翩若惊鸿，婉若游龙。通词翰，善武技，性尤烈，不屈豪贵', 'Lithe as a startled swan, skilled in letters and martial arts, fierce by nature: he bows to no one rich or powerful.', '翩若惊鸿，婉若游龙；通词翰，善武技，性烈，不屈豪贵。'],
    ],
    beats: ['emblemBeat(A.lanbao)', "portraitBeat(A.lanbao, ['翩若惊鸿', '婉若游龙', '善武技', '不屈豪贵'])"],
    subtitles: [
      [0.4, 6, '火树银花王兰保', 'Wang Lanbao: Silver Flowers on a Fiery Tree.'],
      [6, 15.6, '兰保姓王氏，字静芳，年十七岁。扬州人。隶联锦部。', 'Courtesy name Jingfang, seventeen, a native of Yangzhou, of the Lianjin troupe.'],
      [16.4, 21.4, '翩若惊鸿，婉若游龙。', 'He glides like a startled swan and curves like a swimming dragon.'],
      [21.4, 27.4, '通词翰，善武技，性尤烈，不屈豪贵，', 'Well-versed in letters and skilled in martial arts, fierce by nature, he refuses to bow to the powerful—'],
      [27.4, 35.6, '真玉中之有声者。', 'truly a resonant voice among jade.'],
    ],
  },
  {
    n: 28, title: ['Wang Lanbao, Hongxian reborn', '真红线后身'], description: [`${ALBUM} Wang Lanbao in his martial roles.`, `${ALBUM_ZH}王兰保所演武戏。`],
    staging: 'Wang Lanbao on stage in his martial roles, sword on his back, then sword in hand',
    shots: [
      [0, 18, 'The reincarnation of Hongxian', '真红线后身', '其演《双红记》、《盗令》、《青门》诸出……背负双龙纹剑', 'In Double Red Record, Stealing the Token and The Green Gate: golden hairpin, purple robe, and a twin-dragon sword on his back.', '《双红记》《盗令》《青门》：金雀钗，紫衣红襦，背负双龙纹剑，真红线后身。'],
      [18, 36, 'Slaying the Tiger', '《刺虎》《杀舟》', '其《刺虎》、《盗令》、《杀舟》诸戏，侠情一往', 'In Slaying the Tiger and Killing in the Boat, his chivalry surges like drums that make ten thousand flowers bloom.', '《刺虎》《盗令》《杀舟》，侠情一往，如闻羯鼓，万花齐放。'],
    ],
    beats: ["repertoireBeat(A.lanbao, ['双红记', '盗令', '青门'])", "repertoireBeat(A.lanbao, ['刺虎', '杀舟'], { pose: { lift: [2.4, 2.8], swing: 0.5, sleeve: 0.6, turn: 1.2, crouch: 0.2, prop: 'sword', swordOnBack: true } })"],
    subtitles: [
      [0.4, 5, '其演《双红记》、《盗令》、《青门》诸出，', 'When he performs Double Red Record, Stealing the Token and The Green Gate,'],
      [5, 10, '梳乌蛮髻，贯金雀钗，衣销金紫衣，系红绣襦，着小蛮锦靴。', 'he wears a dark topknot and golden hairpin, a gold-trimmed purple robe, a red sash and brocade boots.'],
      [10, 17.6, '背负双龙纹剑，如荼如火，如锦如云，真红线后身也。', 'With a twin-dragon sword on his back, he blazes like fire and brocade—truly Hongxian reborn.'],
      [18.4, 23.4, '其《刺虎》、《盗令》、《杀舟》诸戏，侠情一往，', 'In Slaying the Tiger, Stealing the Token and Killing in the Boat, his chivalry surges forth,'],
      [23.4, 28.4, '如见巾帼身肩天下事。', 'like a heroine shouldering the fate of the world.'],
      [28.4, 35.6, '如听李三郎击羯鼓，作《渔阳三挝》，渊渊乎顷刻间见万花齐放也。为之诗曰：', 'Like Minghuang beating the Jie drum—in an instant ten thousand flowers burst into bloom. Thus, this poem:'],
    ],
  },
  poemParagraph(29, 'lanbao', 'Lanbao', '兰保', LANBAO_POEM, ['七', 'seventh']),
  {
    n: 30, title: ['Wang Guibao, lotus in autumn waters', '秋水芙蓉王桂保'], description: [`${ALBUM} The seventh entry: Wang Guibao, Lanbao’s playful younger brother.`, `${ALBUM_ZH}第七题：王桂保，兰保之弟，娇憨可喜。`],
    staging: 'Wang Guibao’s emblem page, his portrait with ivory clappers, and his plays on stage',
    shots: [
      [0, 10, 'Lotus in the autumn waters', '秋水芙蓉', '秋水芙蓉王桂保……与兄同部。', 'The seventh entry: Wang Guibao, “Lotus in the Autumn Waters,” Lanbao’s younger brother, fifteen.', '第七题：秋水芙蓉王桂保，兰保之弟，年十五。'],
      [10, 22, 'A flower that understands speech', '如花解语', '似兰馨，如花解语……能翰墨，工牙拍', 'Fragrant as an orchid, a flower that understands speech; playful, innocent, deft with brush and ivory clappers.', '似兰馨，如花解语；嬉戏天真，能翰墨，工牙拍。'],
      [22, 36, '“Feigning Jealousy”', '《乔醋》', '其演《乔醋》一出……观者堵立数重', 'In Feigning Jealousy and The Rendezvous he is a bird teasing the clear sky; crowds stand several deep to watch.', '《乔醋》《相约》《讨钗》《拷艳》，如娇鸟弄晴，观者堵立数重。'],
    ],
    beats: ['emblemBeat(A.guibao)', "portraitBeat(A.guibao, ['似兰馨', '如花解语', '能翰墨', '工牙拍'])", "repertoireBeat(A.guibao, ['乔醋', '相约', '讨钗', '拷艳'])"],
    subtitles: [
      [0.4, 4.8, '秋水芙蓉王桂保', 'Wang Guibao: Lotus in the Autumn Waters.'],
      [4.8, 9.6, '桂保即兰保之弟，字蕊香，年十五岁，与兄同部。', 'Lanbao’s younger brother, courtesy name Ruixiang, fifteen, in the same troupe.'],
      [10.4, 14, '似兰馨，如花解语。明眸善睐，皓齿流芳。', 'Fragrant as an orchid, like a flower that understands speech; bright eyes and gleaming teeth.'],
      [14, 18, '嬉戏自出天真，娇憨皆生风趣。能翰墨，工牙拍，', 'Playful and innocent, full of coy charm; skilled with brush and ink and the ivory clappers,'],
      [18, 21.6, '善解人意，虽寂寥寡欢者，见之亦为畅满。', 'so understanding that even the lonely are cheered at the sight of him.'],
      [22.4, 27, '其演《乔醋》一出，香亸红酣，真令潘骑省心醉欲死矣。', 'In “Feigning Jealousy,” his flushed charm would make Pan An die of infatuation.'],
      [27, 31.6, '又演《相约》、《讨钗》、《拷艳》诸小出，如娇鸟弄晴，', 'In The Rendezvous, Demanding the Hairpin and Interrogating the Beauty, he is a bird teasing the clear sky;'],
      [31.6, 35.6, '观者堵立数重，使层楼无坐地。', 'spectators stand several deep, leaving no seat in the galleries.'],
    ],
  },
  poemParagraph(31, 'guibao', 'Guibao', '桂保', GUIBAO_POEM, ['八', 'eighth']),
  {
    n: 32, title: ['Lin Chunxi, a jade qilin', '天上玉麟林春喜'], description: [`${ALBUM} The eighth entry: Lin Chunxi, the youngest.`, `${ALBUM_ZH}第八题：林春喜，年最幼。`],
    staging: 'Lin Chunxi’s emblem page of a qilin among clouds, then a portrait with his particulars',
    shots: [
      [0, 20, 'A jade qilin from the heavens', '天上玉麟', '天上玉麟林春喜', 'The eighth entry: Lin Chunxi, “A Jade Qilin from the Heavens.”', '第八题：天上玉麟林春喜。'],
      [20, 36, 'Fourteen, of Suzhou', '年十四岁，姑苏人', '春喜姓林氏，字小梅，年十四岁。姑苏人。', 'Courtesy name Xiaomei, fourteen years old, a native of Suzhou.', '字小梅，年十四岁，姑苏人。'],
    ],
    beats: ['emblemBeat(A.chunxi)', "portraitBeat(A.chunxi, ['字小梅', '年十四岁', '姑苏人'])"],
    subtitles: [
      [0.4, 10, '天上玉麟林春喜', 'Lin Chunxi: A Jade Qilin from the Heavens.'],
      [20.4, 30, '春喜姓林氏，字小梅，年十四岁。姑苏人。', 'Chunxi’s surname is Lin, his courtesy name Xiaomei; he is fourteen, a native of Suzhou.'],
    ],
  },
  {
    n: 33, title: ['Lin Chunxi, a pearl just born', '好花含萼，明珠出胎'], description: [`${ALBUM} Lin Chunxi: a prodigy of two years on the stage.`, `${ALBUM_ZH}林春喜：入班二年，已精声律。`],
    staging: 'Lin Chunxi’s portrait, his plays on stage, and a closing portrait of his promise',
    shots: [
      [0, 12, 'A flower still in its calyx', '好花含萼', '隶联锦部。好花含萼，明珠出胎。', 'A flower still in its calyx, a pearl just born: two years in the troupe, he already plays both sheng and dan.', '好花含萼，明珠出胎；入班二年，已生旦并作。'],
      [12, 28, 'His plays', '《寄子》《断机》', '所演《寄子》、《储谏》、《回猎》、《断机》……等戏', 'Entrusting the Son, Returning from the Hunt, Breaking the Loom, Underworld Inquest: a young noble of the Wuyi Lane.', '《寄子》《储谏》《回猎》《断机》诸戏，如见乌衣子弟。'],
      [28, 36, 'Worth many cities', '价重连城', '数年后更当独出头地，价重连城也。', 'In a few years he will rise above all others, his worth equal to many cities.', '数年后当独出头地，价重连城。'],
    ],
    beats: ["portraitBeat(A.chunxi, ['好花含萼', '明珠出胎', '生旦并作'])", "repertoireBeat(A.chunxi, ['寄子', '回猎', '断机', '冥勘'])", "portraitBeat(A.chunxi, ['独出头地', '价重连城'], { flower: 'plum', pose: DAN_POSES[9] })"],
    subtitles: [
      [0.4, 4.6, '隶联锦部。好花含萼，明珠出胎。', 'Of the Lianjin troupe: a fine flower still in its calyx, a luminous pearl just born.'],
      [4.6, 11.6, '十二岁入班，迄今才二年，已精于声律，兼通文墨，生旦并作。', 'He joined at twelve; in two years he has mastered music, learned letters, and plays both sheng and dan.'],
      [12.4, 18, '所演《寄子》、《储谏》、《回猎》、《断机》、《番儿》、《冥勘》、《女弹》等戏，', 'In Entrusting the Son, Stored Admonitions, Returning from the Hunt, Breaking the Loom and more,'],
      [18, 23, '长眉秀颊，如见乌衣子弟，佩紫罗香囊，', 'his long brows and fine cheeks recall a young noble of the Wuyi Lane with a purple silk pouch,'],
      [23, 27.6, '真香粉孩儿，令人有宁馨之羡，其哺啜皆可观。', 'a true child of powder and fragrance; even his eating and drinking are a sight to behold.'],
      [28.4, 33, '数年后更当独出头地，价重连城也。', 'In a few years he will rise above all others, his worth equal to many cities.'],
      [33, 35.6, '为之诗曰：', 'Thus, I composed for him this poem:'],
    ],
  },
  {
    n: 34, title: ['A poem for Chunxi, and Ziyu’s verdict', '赠春喜诗，子玉之评'], description: [`${ALBUM} The last poem, for Chunxi, and Ziyu’s verdict on the whole album.`, `${ALBUM_ZH}末首赠春喜之诗，及子玉对《花选》的评语。`],
    staging: 'Chunxi’s poem on a scroll, then Ziyu smiling and dismissing the album in the study',
    shots: [
      [0, 18, 'A poem for Chunxi', '赠春喜诗', '别有人间傅粉郎……十里珠帘尽上钩。', 'The last two quatrains, for Chunxi, are brushed onto a scroll.', '赠春喜的两首绝句，写上画轴。'],
      [18, 36, '“A waste of brush and ink”', '可惜了这副笔墨', '子玉看了只是笑，不置一词……真可惜了这副笔墨。', 'Ziyu only smiles. When Nanxiang presses him, he says such praise strays from the truth: a waste of brush and ink.', '子玉只是笑而不语；南湘追问，子玉说此等品评过于失实，可惜了这副笔墨。'],
    ],
    beats: [`poemBeat(${poemLines(CHUNXI_POEM)}, A.chunxi)`, "readersBeat([{ at: 0.4, who: 1, gesture: 'laughing' }, { at: 4.4, who: 2, gesture: 'pointing' }, { at: 8, who: 1, gesture: 'speaking' }])"],
    subtitles: [
      ...poemCues(0, 18, CHUNXI_POEM),
      [18.4, 22.4, '子玉看了只是笑，不置一词。', 'Ziyu read it and merely smiled, offering not a single word.'],
      [22.4, 26, '南湘问道：「你何以不加可否？」', 'Nanxiang asked, “Why do you withhold your judgment?”'],
      [26, 31, '子玉道：「大凡论人，虽难免粉饰，也不可过于失实。', 'Ziyu replied, “When judging people, some embellishment is unavoidable, but one should not stray too far from the truth.'],
      [31, 35.6, '若论此辈，真可惜了这副笔墨。', 'As for this lot, it is truly a waste of your brush and ink.”'],
    ],
  },
];
