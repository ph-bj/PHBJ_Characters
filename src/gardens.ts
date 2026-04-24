export interface Garden {
  id: string;
  name: string;          // Chinese name
  pinyin: string;        // Romanisation
  nameEn: string;        // English name
  type: 'major' | 'sublocation' | 'other';
  parentId?: string;     // if this is a sub-location, the parent garden id
  owner: string;         // Chinese owner / associated character
  ownerEn: string;
  location: string;      // Chinese location note
  locationEn: string;
  description: string;   // English description
  descriptionZh: string; // Chinese description
  searchTokens: string[]; // exact strings to count in chapter text
  subLocationIds?: string[]; // ids of child sub-locations
  accentColor: string;   // Tailwind hex for accent
}

export const gardens: Garden[] = [
  {
    id: 'garden-yiyuan',
    name: '怡园',
    pinyin: 'Yí Yuán',
    nameEn: 'Garden of Contentment',
    type: 'major',
    owner: '徐子云（度香）',
    ownerEn: 'Xu Ziyun (Duxiang)',
    location: '北京城外',
    locationEn: 'Outside Beijing',
    description:
      'The social and cultural heart of the novel. Xu Ziyun, a fabulously wealthy Zhejiang magnate, ' +
      'bought a derelict five-or-six-li plot outside Beijing and spent years transforming it into a compound ' +
      'of over four hundred rooms. Ancient trees, winding streams, lotus ponds, layered towers and pavilions ' +
      'make it a world unto itself. Throughout the novel it serves as the gathering place for scholars, ' +
      'officials, and celebrated performers — the one neutral ground where talent and wealth meet on equal terms.',
    descriptionZh:
      '《品花宝鉴》的文化中心与精神归宿。徐子云以浙江世家之财力，将北京城外一片废弃的五六里荒地买下，' +
      '历数年心血，辟建成拥有四百余间房屋的大园。古木参天，曲水蜿蜒，层楼叠阁，荷池芬芳。' +
      '怡园是全书名士聚会、诗酒唱和、名旦相会的核心场域——才情与富贵在此相遇，情与义在此生发。',
    searchTokens: ['怡园'],
    subLocationIds: [
      'garden-meian', 'garden-hanwanlou', 'garden-liuxianyuan',
      'garden-haitang', 'garden-hongcha', 'garden-qingliang', 'garden-mudan'
    ],
    accentColor: '#4d6a3a',
  },
  {
    id: 'garden-jinchun',
    name: '锦春园',
    pinyin: 'Jǐnchūn Yuán',
    nameEn: 'Garden of Brocade Spring',
    type: 'major',
    owner: '华光宿（华公子）',
    ownerEn: 'Hua Guangsu (Hua Gongzi)',
    location: '北京城内，华府邸宅',
    locationEn: 'Beijing, Hua family mansion',
    description:
      'The imposing Beijing mansion of Hua Guangsu, the novel\'s most feared aristocratic patron. ' +
      'Known city-wide by its popular nickname 锦春园, the compound is enormous, divided into separate ' +
      'east and west gardens, formal reception halls, and private quarters. Its opulence eclipses even ' +
      'Yiyuan in sheer scale, though its spirit is one of power rather than refinement.',
    descriptionZh:
      '全书最令人敬畏的贵族公子华光宿的府邸。世称"锦春园"，宅院宏阔，分东园、西园、正厅、内室诸区，' +
      '气派远超寻常园林。其豪奢不让怡园，然所弥漫者是权势而非风雅。' +
      '杜琴言曾被送入此处，在留青精舍中度过了一段幽禁般的岁月。',
    searchTokens: ['锦春园', '华公府', '华府'],
    subLocationIds: ['garden-xiyuan', 'garden-liuqing'],
    accentColor: '#8a6a2f',
  },

  // ── Sub-locations of 怡园 ────────────────────────────────────────────────
  {
    id: 'garden-meian',
    name: '梅崦',
    pinyin: 'Méi Ān',
    nameEn: 'Plum Ravine',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '徐子云',
    ownerEn: 'Xu Ziyun',
    location: '怡园内，园之名胜',
    locationEn: 'Within Yiyuan — the garden\'s most celebrated spot',
    description:
      'Five interlocking chambers set among plum trees and rocky hills, where corridors and ' +
      'latticed balustrades wind through a forest of blossoms. When the plums are open, the ' +
      'buildings and trees merge into a single snowscape of white petals. The Plum Ravine hosts ' +
      'the novel\'s most important literary gatherings — the ten-day plum-blossom assembly, ' +
      'Qu Daosheng\'s first visit, and countless poetic exchanges between Ziyu and his friends.',
    descriptionZh:
      '五处相连的庭舍，依山而筑，梅树环抱，长廊曲槛钩连，绿萼红香围绕。' +
      '花开时节，林屋难分，宛若一片香雪。梅崦是怡园最重要的雅集之所：' +
      '十日梅花大会在此举行，屈道生首访于此，子玉与众名士的诗酒唱和也多在此间。',
    searchTokens: ['梅崦'],
    accentColor: '#6b4a7d',
  },
  {
    id: 'garden-hanwanlou',
    name: '含万楼',
    pinyin: 'Hánwàn Lóu',
    nameEn: 'Tower of Ten Thousand',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '徐子云',
    ownerEn: 'Xu Ziyun',
    location: '怡园中央，园之主楼',
    locationEn: 'Centre of Yiyuan — the garden\'s main tower',
    description:
      'The grand central tower of Yiyuan, four sides thrown open to views of every quarter of ' +
      'the garden. Its name — "containing ten thousand things and transforming them into light" — ' +
      'reflects Xu Ziyun\'s philosophy of generous hospitality. Elder scholar Qu Daoweng later ' +
      'renamed it 赐书楼 (Tower of Gifted Books) in recognition of the literary culture nurtured here.',
    descriptionZh:
      '怡园的主楼，四面开窗，气宇宏敞，可览园中各处胜景。' +
      '楼名取"含万物而化光"之意，寓徐子云广纳天下英才之志。' +
      '屈道翁来访后，将此楼更名为"赐书楼"，以志其文墨渊薮之盛。',
    searchTokens: ['含万楼', '赐书楼'],
    accentColor: '#355070',
  },
  {
    id: 'garden-liuxianyuan',
    name: '留仙院',
    pinyin: 'Liúxiān Yuàn',
    nameEn: 'Fairy-Detaining Courtyard',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '徐子云',
    ownerEn: 'Xu Ziyun',
    location: '怡园内，苏堤深处',
    locationEn: 'Within Yiyuan, beyond the Su Causeway',
    description:
      'Reached by boat along willow-lined waterways and across a small bridge, ' +
      'the Fairy-Detaining Courtyard opens onto a grove of pink and white peach ' +
      'blossoms. Hua Guangsu brings his wife here for a spring outing; later, ' +
      'Hua\'s maidservant Shanzhi discovers the garden\'s maidservants in a private ' +
      'poetic game.',
    descriptionZh:
      '自苏堤乘船，过小桥，穿柳岸，方至留仙院。院中修竹掩映，碧桃千树，' +
      '红白相间，宛若仙境。华公子携夫人泛舟游春，至此登岸赏花；' +
      '珊枝后来也偷窥到蕊珠等人在此吟诗嬉戏的情景。',
    searchTokens: ['留仙院'],
    accentColor: '#8c3b3b',
  },
  {
    id: 'garden-haitang',
    name: '海棠春圃',
    pinyin: 'Hǎitáng Chūn Pǔ',
    nameEn: 'Crabapple Spring Garden',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '徐子云、萧次贤',
    ownerEn: 'Xu Ziyun & Xiao Cixian',
    location: '怡园内',
    locationEn: 'Within Yiyuan',
    description:
      'A suite of over twenty interconnected rooms — pavilions, inner chambers and ' +
      'side halls — where Xu Ziyun and Xiao Cixian most often receive intimate guests. ' +
      'Du Qinyan is moved here after his release from the Hua mansion, and it becomes ' +
      'the site of his reunion with Mei Ziyu and his quiet convalescence under Qu Daoweng\'s tutelage.',
    descriptionZh:
      '平台曲榭，密室洞房，接接连连共有二十余间，是徐子云与萧次贤日常接待密友之所。' +
      '琴言出师后移居此处，与子玉在此重续情缘；' +
      '屈道翁入住后，也在此圃开始对琴仙的悉心教导。',
    searchTokens: ['海棠春圃', '海棠圃'],
    accentColor: '#8c3b3b',
  },
  {
    id: 'garden-hongcha',
    name: '红茶仙馆',
    pinyin: 'Hóngchá Xiān Guǎn',
    nameEn: 'Red Tea Immortal Pavilion',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '萧次贤',
    ownerEn: 'Xiao Cixian',
    location: '怡园内，梅崦之前，梨院海棠春圃之后',
    locationEn: 'Within Yiyuan, between Plum Ravine and Crabapple Garden',
    description:
      'A recently built pavilion set between the Plum Ravine and Crabapple Garden, ' +
      'with two magnificent Yingzhou spirit-rocks flanking its entrance and a grand ' +
      'magnolia tree in bloom. Originally plain, it houses a flower-deity shrine; ' +
      'Qu Daoweng renames it 蕊珠仙府 (Palace of the Petal Immortal) and commissions ' +
      'Tian Chunhang to compose a couplet for its gates.',
    descriptionZh:
      '去年新辟，位于梅崦之前、梨院海棠春圃之后，原是空地，仅有一亭。' +
      '亭外两块英州灵石巍然屹立，一株大玉兰临石而开，格调清雅。' +
      '内设花神牌位；屈道翁将其更名为"蕊珠仙府"，并命田春航补题楹联，' +
      '令此处更添仙家气象。',
    searchTokens: ['红茶仙馆', '蕊珠仙府'],
    accentColor: '#3f6b63',
  },
  {
    id: 'garden-qingliang',
    name: '清凉诗境',
    pinyin: 'Qīngliáng Shī Jìng',
    nameEn: 'Cool Poetic Realm',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '史南湘（后居）',
    ownerEn: 'Shi Nanxiang (later resident)',
    location: '怡园内，原名积翠轩',
    locationEn: 'Within Yiyuan, originally called Accumulated-Green Pavilion',
    description:
      'Originally named 积翠轩 (Accumulated-Green Pavilion), Qu Daoweng renames it ' +
      '"Cool Poetic Realm" on his tour of the garden, declaring the name perfectly captures ' +
      'the spirit of the space. After passing the Hanlin examination, Shi Nanxiang moves in ' +
      'and makes it his permanent residence, hosting Gao Pin here and receiving Tian Chunhang ' +
      'when Hua Guangsu arrives at Yiyuan.',
    descriptionZh:
      '原名积翠轩，屈道翁游园时将其更名为"清凉诗境"，众名士皆称妙绝。' +
      '史南湘馆选后搬入此处长住，与屈道翁、萧次贤、徐子云诗酒相处，' +
      '高品来京后亦同寓于此。',
    searchTokens: ['清凉诗境', '积翠轩'],
    accentColor: '#355070',
  },
  {
    id: 'garden-mudan',
    name: '牡丹香国',
    pinyin: 'Mǔdān Xiāng Guó',
    nameEn: 'Kingdom of Peony Fragrance',
    type: 'sublocation',
    parentId: 'garden-yiyuan',
    owner: '徐子云',
    ownerEn: 'Xu Ziyun',
    location: '怡园内，含万楼以北',
    locationEn: 'Within Yiyuan, north of Hanwan Tower',
    description:
      'A two-to-three-acre enclosure surrounded by low flower walls, filled with meticulously ' +
      'placed rocks, pavilions and peony beds so artfully arranged that it feels like a ' +
      'complete garden in its own right. Qu Daoweng pauses here on his grand tour, praising ' +
      'the layout as "truly extraordinary."',
    descriptionZh:
      '四围矮矮花墙，围地两三亩，内中花石亭台位置无一不佳，' +
      '俨然独成一个园林景象，以小径白石蜿蜒其间。' +
      '屈道翁游园至此，驻足称赏，连叹"果然不凡"。',
    searchTokens: ['牡丹香国', '牡丹台', '芍药圃'],
    accentColor: '#6b4a7d',
  },

  // ── Sub-locations of 锦春园 ───────────────────────────────────────────────
  {
    id: 'garden-xiyuan',
    name: '西园',
    pinyin: 'Xī Yuán',
    nameEn: 'West Garden',
    type: 'sublocation',
    parentId: 'garden-jinchun',
    owner: '华光宿',
    ownerEn: 'Hua Guangsu',
    location: '锦春园内，华府西部',
    locationEn: 'Within Jinchun Garden, western wing of Hua mansion',
    description:
      'The western pleasure-garden of the Hua mansion, praised by Xu Ziyun as ' +
      '"superbly laid out." It hosts the Mid-Autumn eve banquet where five troupes ' +
      'perform simultaneously on different stages, with lanterns and acrobatic displays. ' +
      'Hua Guangsu also uses it for intimate evening gatherings with his closest guests.',
    descriptionZh:
      '华府西部园林，徐子云称其"布置极佳"。' +
      '中秋前夕在此设宴，五班戏子分台竞演，灯光烂漫，杂技表演热闹非凡。' +
      '华公子亦在此接待最亲近的宾客，是华府中难得雅致的一处所在。',
    searchTokens: ['西园'],
    accentColor: '#8a6a2f',
  },
  {
    id: 'garden-liuqing',
    name: '留青精舍',
    pinyin: 'Liúqīng Jīng Shè',
    nameEn: 'Stay-Green Studio',
    type: 'sublocation',
    parentId: 'garden-jinchun',
    owner: '华光宿',
    ownerEn: 'Hua Guangsu',
    location: '锦春园内，东园深处',
    locationEn: 'Within Jinchun Garden, deep in the East Garden',
    description:
      'Du Qinyan\'s secluded quarters within the Hua mansion — three rooms by a rockery ' +
      'of Taihu stones and winter plum trees, reached only through locked gates at nightfall. ' +
      'Serving as a gilded cage, it is here that Qinyan spends his captive months: tending ' +
      'plum blossoms, mourning his separation from Ziyu, and receiving the secret visits ' +
      'of Wei Pincai.',
    descriptionZh:
      '华公子为琴言安排的幽居——紧邻太湖石山，两棵绿萼梅、一棵红梅盛开在侧，' +
      '院深门锁，入夜后须穿越重重门禁方可至此。' +
      '此处是琴言在华府的金丝笼：他在此思念子玉、对梅伤情，' +
      '也在此接受了聘才的悄然造访。',
    searchTokens: ['留青精舍'],
    accentColor: '#5b5f67',
  },

  // ── Other named spaces ────────────────────────────────────────────────────
  {
    id: 'garden-sanleyuan',
    name: '三乐园',
    pinyin: 'Sānlè Yuán',
    nameEn: 'Three Joys Theater',
    type: 'other',
    owner: '联珠班',
    ownerEn: 'Lianzhu Troupe',
    location: '北京城内，戏园',
    locationEn: 'Beijing, theater district',
    description:
      'A busy Beijing theater that houses the Lianzhu Troupe. Wei Pincai stumbles ' +
      'upon it in Chapter 3 when his first-choice theater has no performance — ' +
      'the house is packed from pit to gallery — and is thus drawn into his first ' +
      'serious encounter with the performing world.',
    descriptionZh:
      '北京城内一座热闹的戏园，联珠班在此驻演。' +
      '第三回魏聘才本欲看联锦班，遇传差无戏，信步走来，' +
      '见三乐园锣鼓喧天，楼上楼下座无虚席，就此踏入梨园世界。',
    searchTokens: ['三乐园'],
    accentColor: '#3f6b63',
  },
  {
    id: 'garden-hongyuan',
    name: '虹园',
    pinyin: 'Hóng Yuán',
    nameEn: 'Rainbow Garden',
    type: 'other',
    owner: '（已荒废）',
    ownerEn: '(abandoned)',
    location: '扬州，大运河畔',
    locationEn: 'Yangzhou, beside the Grand Canal',
    description:
      'A pair of once-magnificent gardens — Little Rainbow Garden (小虹园) and ' +
      'Great Rainbow Garden (大虹园) — that Qu Daoweng and Du Qinyan pass on their ' +
      'southward journey in Chapter 55. Daoweng recalls hosting scholarly banquets ' +
      'here in his prime; now the walls have half-collapsed, ancient trees loom over ' +
      'rubble, and spirit-stones lie scattered on the ground. The ruins serve as a ' +
      'meditation on the transience of cultivation and refined pleasure.',
    descriptionZh:
      '大运河畔昔日胜景，分大虹园与小虹园两处，现俱已荒废。' +
      '第55回屈道翁与琴仙南下途中路过此处，道翁忆及当年在此与名士虹桥修禊的盛况，' +
      '今见围墙半倒、古木鸦啼、灵石遍地，不胜感慨。' +
      '虹园之废是全书末尾盛衰无常主题的重要象征。',
    searchTokens: ['虹园', '大虹园', '小虹园'],
    accentColor: '#7a5c43',
  },
];

/** Look up a garden by id. */
export function getGardenById(id: string): Garden | undefined {
  return gardens.find(g => g.id === id);
}
