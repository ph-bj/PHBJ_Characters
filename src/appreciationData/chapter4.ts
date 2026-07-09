import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter4Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 75 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 85 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 90 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 80 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 95 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 80 },
  ],
  timelineData: [
    { stageZh: "独坐读赋", stageEn: "Reading Alone", sentiment: 60, descriptionZh: "雪中闲读《雪赋》，心境平和", descriptionEn: "Reading 'Rhapsody on Snow', feeling peaceful." },
    { stageZh: "论及琴官", stageEn: "Hearing of Qinguan", sentiment: 85, descriptionZh: "听聘才极力渲染琴官才貌，心向往之", descriptionEn: "Hears Pincai praise Qinguan, longing deepens." },
    { stageZh: "读雪窗诗", stageEn: "Reading Poems", sentiment: 95, descriptionZh: "收到《雪窗八咏》，才情被彻底激发", descriptionEn: "Receives 'Eight Views' poems, poetic talent ignited." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 75,
      textZh: "本章在整部小说中起到了关键的转折与铺垫作用。前三章主要展现市井与戏园的喧闹，而本章将镜头切入书房，节奏从“动”转“静”。",
      textEn: "This chapter serves as a crucial turning point and setup. The previous chapters showed the noise of the streets and theaters, while this chapter shifts the lens to the study, changing the rhythm from 'dynamic' to 'static'.",
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "由前一回聘才逛戏园引出，本章聘才造访梅子玉，将“戏子”的话题带入这片纯洁的雪景中，为后续子玉与琴官的宿命相遇埋下深刻伏笔。", textEn: "Following Pincai's theater visit, he visits Mei Ziyu, bringing the topic of 'actors' into this pure snowscape, laying a profound foreshadowing for Ziyu and Qinguan's fated encounter." },
        { labelZh: "情节逻辑与节奏", labelEn: "Pacing", textZh: "它是情节发展的“缓冲带”兼“推进器”。表面上只有二人闲坐清谈，节奏舒缓（留白多）；但内里却通过对《雪窗八咏》的品鉴，将子玉的倾慕推向高潮。", textEn: "It is both a 'buffer' and a 'propeller'. On the surface, the pacing is slow with two people chatting (much blank space); but internally, through the appreciation of the 'Eight Views', it pushes Ziyu's admiration to a climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization", score: 85,
      textZh: "通过两人的对话互动，鲜明地勾勒出梅子玉的清高脱俗与颜聘才的世俗油滑，形成了强烈的性格对照。",
      textEn: "Through their dialogue, Mei Ziyu's lofty purity and Yan Pincai's worldly slickness are vividly outlined, forming a strong character contrast.",
      subsections: [
        { labelZh: "性格展现", labelEn: "Personality", textZh: "子玉只凭琴官的诗句便认定其为知音，展现了他理想化、重情重才的浪漫主义性格；聘才则三句不离俗务，凸显其市井掮客的面目。", textEn: "Ziyu considers Qinguan a soulmate solely based on his poetry, showing his idealized, romantic nature; Pincai constantly mentions mundane affairs, highlighting his role as a worldly broker." },
        { labelZh: "心理深度与关系", labelEn: "Psychology", textZh: "子玉的内心经历了从平静到波澜的转变。这是他性格弧光中情感觉醒的关键点。在权力关系上，聘才看似迎合子玉，实则在用言语引导子玉的情感走向。", textEn: "Ziyu's mind shifts from calm to turbulent. This is the key emotional awakening in his character arc. In power dynamics, Pincai seemingly caters to Ziyu, but is actually verbally guiding Ziyu's emotional direction." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes", score: 90,
      textZh: "本章不仅是写景，更是写“心”。在晚清的名利场中，探讨了纯真情感与世俗环境的冲突。",
      textEn: "This chapter writes not just of scenery, but of 'heart'. In the late Qing vanity fair, it explores the conflict between pure emotion and secular environments.",
      subsections: [
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "“雪”是本章最大的隐喻。白雪象征了纯洁无瑕的理想境界，而子玉在雪中寻觅知音，隐喻了他在污浊社会中对“至情”的坚守。", textEn: "'Snow' is the biggest metaphor here. White snow symbolizes a flawless ideal realm, and Ziyu seeking a soulmate in the snow metaphors his persistence in 'supreme feeling' amidst a corrupt society." },
        { labelZh: "核心议题与意图", labelEn: "Author's Intent", textZh: "作者通过子玉对琴官诗才的极度推崇，批判了当时仅仅将优伶视为玩物的社会风气，提出了一种超越阶级与身份的“情学”价值观。", textEn: "Through Ziyu's extreme admiration for Qinguan's talent, the author critiques the social norm of treating actors merely as playthings, proposing a 'Qing-ology' values that transcends class." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "POV & Voice", score: 80,
      textZh: "采用了全知全能的叙事视角，但在描写子玉心理时，又紧密贴合了他的主观感受。",
      textEn: "An omniscient narrative perspective is used, but when describing Ziyu's psychology, it closely aligns with his subjective feelings.",
      subsections: [
        { labelZh: "叙事视角", labelEn: "Perspective", textZh: "虽然是第三人称，但大量信息是通过梅子玉的感官（听聘才说、看诗稿）获取的。这种限制性信息的流入，让读者与子玉同频共振。", textEn: "Though third-person, much information is gathered through Ziyu's senses (hearing Pincai, reading poems). This restricted flow aligns the reader with Ziyu." },
        { labelZh: "语调与语体", labelEn: "Tone & Style", textZh: "整体语调抒情优美、冷峻高雅。字里行间透出一种古典的静谧感，营造出“红炉夜雪”的极佳阅读氛围。", textEn: "The overall tone is lyrical, beautiful, and elegantly aloof. It exudes a classical tranquility, creating an excellent 'red stove, night snow' reading atmosphere." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 95,
      textZh: "《品花宝鉴》的文笔在这一章达到了极高的美学成就，诗词与散文交相辉映。",
      textEn: "The writing of 'A Guide to the Flower Vanity Fair' reaches a high aesthetic achievement in this chapter, with poetry and prose shining together.",
      subsections: [
        { labelZh: "辞章美感与感官", labelEn: "Aesthetics", textZh: "巧妙运用借景抒情，调动了视觉（白雪、红梅）与听觉（炉水沸腾声）。《雪窗八咏》更是展现了作者极高的古典诗词造诣。", textEn: "Clever use of scenery to express emotion, invoking sight (white snow, red plum) and sound (boiling stove water). 'Eight Views' shows the author's high mastery of classical poetry." },
        { labelZh: "经典句式拆解", labelEn: "Classic Quotes", textZh: "“不知此老有何福泽，生出这样一个儿子。”看似艳羡，实则暗含了对封建门第不公的幽微叹息。", textEn: "'I know not what blessings this old man has, to produce such a son.' Seemingly envious, it subtly contains a faint sigh at the unfairness of feudal lineage." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 80,
      textZh: "这段文字在浮躁的社会中，提供了一种难得的“精神避难所”。",
      textEn: "In a restless society, this text provides a rare 'spiritual sanctuary'.",
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "阅读时情绪从开篇的宁静平和，随着诗句的展现逐渐升温为惊叹与共鸣，完全被主角的痴情所打动。", textEn: "Reading emotions shift from initial tranquility to growing amazement and resonance as the poems unfold, fully moved by the protagonist's infatuation." },
        { labelZh: "时代反思 (2026)", labelEn: "Modern Reflection", textZh: "在快节奏的今天，这种“雪夜闭门读禁书”或“围炉夜话”的古典慢生活，成为了一种极具稀缺性的奢侈体验，引发强烈的现实反思。", textEn: "In today's fast-paced world, this classical slow living of 'reading behind closed doors on a snowy night' becomes a highly scarce luxury experience, provoking strong modern reflection." }
      ]
    }
  ],
  visualizer: {
    type: "archetypes",
    archetypes: [
      {
        id: 1, titleZh: "纯情理想家", titleEn: "The Pure Idealist", roleZh: "梅子玉 (Mei Ziyu)", roleEn: "The Romantic",
        descZh: "书斋中的贵公子。他未受世俗污染，将一切情感寄托于诗词与美的想象中。大雪是他内心纯洁无瑕的绝佳投射。",
        descEn: "The noble young master in his study. Unpolluted by the world, he projects all emotions onto poetry and imagined beauty. The snow perfectly reflects his pure heart."
      },
      {
        id: 2, titleZh: "世俗掮客", titleEn: "The Worldly Broker", roleZh: "颜聘才 (Yan Pincai)", roleEn: "The Fixer",
        descZh: "穿梭于名利场的边缘文人。他深谙人情世故，用华丽的辞藻包装情色交易。在子玉面前，他扮演着“引路人”的诱惑角色。",
        descEn: "A marginal scholar navigating the vanity fair. He understands worldly ways, wrapping erotic transactions in elegant words. To Ziyu, he plays the tempting role of 'guide'."
      }
    ]
  }
};

