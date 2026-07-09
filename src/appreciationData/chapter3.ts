import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter3Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 95 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 90 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 85 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 80 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 88 },
  ],
  timelineData: [
    {
      stageZh: "1. 孤身闲逛", stageEn: "1. Wandering", sentiment: 40,
      descriptionZh: "初入戏园无人理睬，百无聊赖地看戏",
      descriptionEn: "Enters the theater alone, ignored, watching boredly",
    },
    {
      stageZh: "2. 遭遇讹诈", stageEn: "2. Extorted", sentiment: 10,
      descriptionZh: "被卖玉老头碰瓷讹诈，极度憋屈、愤怒且无助",
      descriptionEn: "Extorted by the jade seller over a broken bottle; feels angry and helpless",
    },
    {
      stageZh: "3. 权贵解围", stageEn: "3. Rescued", sentiment: 80,
      descriptionZh: "傅三爷仗义执言并慷慨解囊，聘才如释重负",
      descriptionEn: "Saved by Third Master Fu, who pays the extortion; immense relief",
    },
    {
      stageZh: "4. 酒楼攀附", stageEn: "4. Flattery", sentiment: 95,
      descriptionZh: "通过高超的话术奉承傅三爷，成功结交权贵",
      descriptionEn: "Successfully flatters Fu Lun, securing a powerful patron",
    },
    {
      stageZh: "5. 归家高论", stageEn: "5. Boasting", sentiment: 90,
      descriptionZh: "回家向梅子玉夸耀见闻，并极力渲染琴言的孤高",
      descriptionEn: "Returns home victorious; spins his story to heighten Ziyu's romantic obsession",
    },
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "这一章将舞台从封闭的书房彻底搬到了喧闹的戏园和酒楼，借魏聘才的游历，正式拉开了京城欢场生态的帷幕，同时在结尾借聘才之口，彻底点燃了子玉对琴言的痴迷。", textEn: "Transitions the stage from the closed study to the bustling theater and restaurant. Through Pincai's eyes, the capital's vanity fair is unveiled, setting up Ziyu's obsession at the chapter's close." },
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "以“偶然相遇”为核心驱动。逛戏园、遇讹诈、得解围、结新欢，一气呵成，情节紧凑且极具古典世俗小说的写实感。", textEn: "Driven by accidental encounters. From wandering the theater to extortion, rescue, and networking, the pacing is tight and highly realistic." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "戏院里的描写拥挤喧闹，酒楼里的描写暴躁激烈（奚十一砸碗），最后切回梅府书房的静谧，形成强烈的动静对比，张弛有度。", textEn: "Contrasts the chaotic theater and violent restaurant (Xi smashing bowls) with the quiet, reflective study at the end, providing excellent dynamic pacing." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 95,
      subsections: [
        { labelZh: "性格展现", labelEn: "Personality", textZh: "魏聘才的“圆滑市侩”与“见风使舵”被刻画得淋漓尽致；奚十一的“暴发户狂态”与傅三爷的“世家真性情”形成绝佳对照。", textEn: "Pincai's slick social climbing is brilliantly drawn, contrasting sharply with Xi the Eleventh's nouveau-riche tyranny and Fu Lun's aristocratic generosity." },
        { labelZh: "心理深度", labelEn: "Psychological Depth", textZh: "结尾处梅子玉听闻琴言“冷酷无情”时，并未退缩，反而自动将其脑补为“孤高傲世的佳人”，生动展现了子玉深度“理想化”的恋爱脑。", textEn: "When Ziyu hears that Qinyan is 'cold and heartless', he romantically rationalizes it as 'noble purity', showcasing the depth of his idealistic infatuation." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "魏聘才通过极高情商的攀谈，迅速抹平了与傅三爷的阶级差距，展现了晚清社会中“帮闲”与“权贵”之间寄生与互利的经典关系。", textEn: "Pincai uses high EQ to bridge the class gap with Fu Lun, illustrating the classic parasitic yet symbiotic relationship between sycophants and elites." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Philosophical Core", score: 90,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "探讨了金钱、权力与人情的世俗交易。戏园不仅是看戏的地方，更是阶级展示、财富挥霍和社交钻营的名利场。", textEn: "Explores the transactional nature of money, power, and favors. The theater is depicted not just for art, but as a vanity fair for class display and social climbing." },
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "“碎玉瓶”象征着京城险恶的社交陷阱；“砸酒碗”则隐喻了暴发户试图用金钱暴力砸碎文化阶层壁垒的狂妄与无能。", textEn: "The 'broken jade bottle' symbolizes the capital's treacherous social traps; 'smashing bowls' represents the parvenu's futile attempt to break cultural barriers with brute wealth." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "作者以写实的笔调撕开了京城风月场的面纱——充斥着欺软怕硬、挥金如土和阿谀奉承，以此反衬梅子玉追求纯情的珍贵。", textEn: "The author realistically exposes the capital's red-light district—full of bullying, waste, and flattery—to highlight the rarity of Ziyu's pure pursuit of love." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "POV & Voice", score: 85,
      subsections: [
        { labelZh: "叙事视角", labelEn: "POV", textZh: "全章主要采用魏聘才的“游历视角”。读者跟随着他这个“京城新客”的眼睛，像看西洋镜一样，一层层拨开京城戏园的繁华与肮脏。", textEn: "Primarily uses Wei Pincai's 'traveler POV'. Readers follow this newcomer to peel back the layers of the capital's glamorous yet dirty theater scene." },
        { labelZh: "语调与语体", labelEn: "Tone", textZh: "语调世故、写实、甚至带着市井的诙谐。尤其是描写卖玉老汉讹人、奚十一砸桌子时，语言极具市井小说的生动与讽刺意味。", textEn: "The tone is worldly, realistic, and comically urban. The descriptions of the extortion and the tantrum are dripping with satire and lively vernacular." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 80,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetics", textZh: "相对前两回的典雅，本章大量使用了极具生活气息的北方方言和市井黑话，极大地增强了小说的世俗画卷感和烟火气。", textEn: "Compared to the elegance of earlier chapters, this one uses rich Northern vernacular and street slang, massively enhancing the novel's earthy realism." },
        { labelZh: "经典句式", labelEn: "Classic Quotes", textZh: "“这人脾气太大，若是一直戳死了，还要吃官司呢。”等市井对话，活灵活现地描绘了看客们看热闹不嫌事大的心理。", textEn: "Lines like 'If he jabbed him to death, he'd have a lawsuit' perfectly capture the cynical, rubbernecking psychology of the bystander crowd." },
        { labelZh: "感官描写", labelEn: "Sensory Details", textZh: "听觉描写尤为出彩。从戏园里震耳欲聋的“好”声导致打碎鼻烟壶，到隔壁酒楼奚十一“叮叮当当”砸瓷器的声音，声效极具画面感。", textEn: "Auditory descriptions shine. The deafening 'Bravo!' that shatters the bottle, and the 'ding ding dang dang' of smashing porcelain, create highly cinematic scenes." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 88,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "卖玉老头碰瓷一段让人深感魏聘才的憋屈，而傅三爷的解围则带来“爽文”般的释然；奚十一的撒泼则让人感到滑稽与荒诞。", textEn: "The extortion scene makes the reader feel Pincai's stifled anger, while Fu's rescue provides a satisfying release; Xi's tantrum is purely comedic and absurd." },
        { labelZh: "时代反思", labelEn: "Modern Reflection", textZh: "无论是戏园里的“隐形消费陷阱”（碰瓷），还是酒楼老板对“土豪”的跪舔与杀熟（多报账单），在今天的消费社会中依然能找到完美的对应。", textEn: "Hidden consumer traps (extortion) and restaurants inflating bills for rich 'whales' perfectly mirror the absurdities of today's hyper-consumerist society." }
      ]
    }
  ],
  visualizer: {
    type: "archetypes",
    archetypes: [
      {
        id: 1, titleZh: "讹诈者：市井流氓", titleEn: "The Extortionist",
        roleZh: "卖玉老叟 (Jade Seller)", roleEn: "The opportunistic local scammer",
        descZh: "代表了京城底层的市井陷阱与“欺生”潜规则。利用戏园的拥挤和新客的脸皮薄进行强买强卖，最终被更高阶级的权力（傅三爷）所镇压。",
        descEn: "Represents urban traps and the bullying of newcomers. He uses the crowded theater and the victim's social awkwardness to extort, only to be crushed by a higher power (Fu Lun)."
      },
      {
        id: 2, titleZh: "庇护者：世家子弟", titleEn: "The Patron",
        roleZh: "傅三爷 (Third Master Fu)", roleEn: "The Old Money Gentry",
        descZh: "老派权贵子弟，极重面子与江湖道义。性格慷慨直爽，保护弱小（帮魏解围），但耳根子软，极易被他人的阿谀奉承和对自己祖辈的吹捧所打动。",
        descEn: "Old money elite who values face and chivalry. Generous and protective (saves Wei), but highly susceptible to flattery, especially regarding his father's legacy."
      },
      {
        id: 3, titleZh: "暴发户：粗鄙财阀", titleEn: "The Parvenu",
        roleZh: "奚十一 (Xi the Eleventh)", roleEn: "The Tyrannical Nouveau Riche",
        descZh: "身怀巨款来京买官的广东富商。试图用粗暴的金钱开路，动辄砸碗掀桌。表面上被所有人谄媚（酒楼老板），背地里却被当作笑柄和“冤大头”宰割。",
        descEn: "A wealthy southern merchant buying office in the capital. Uses money violently (smashing tables). Openly flattered by the restaurant owner, but secretly mocked and overcharged."
      },
      {
        id: 4, titleZh: "钻营者：八面帮闲", titleEn: "The Social Climber",
        roleZh: "魏聘才 (Wei Pincai)", roleEn: "The Slick Sycophant",
        descZh: "无权无势的南方食客。凭借极高的情商、敏锐的观察力和教科书般的奉承话术，在戏园中化险为夷，成功攀附上京城权贵，是晚清社会典型的“帮闲”人物。",
        descEn: "A powerless southern guest. Uses high EQ, sharp observation, and textbook flattery to escape trouble and attach himself to elites. A classic late Qing 'hanger-on'."
      }
    ]
  }
};
