import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter4Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Characterization", score: 90 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 80 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 75 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 95 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 85 },
  ],
  timelineData: [
    { stageZh: "冬至瑞雪", stageEn: "Winter Solstice Snow", sentiment: 80, descriptionZh: "冬至降雪，梅子玉因雪闲坐书斋，品读《雪赋》。自然之景呼应其清高之志。", descriptionEn: "Snow falls on the Winter Solstice. Mei Ziyu reads 'Rhapsody on Snow' in his study, the natural scenery reflecting his lofty aspirations." },
    { stageZh: "听论琴官", stageEn: "Hearing of Qinguan", sentiment: 90, descriptionZh: "魏聘才极力渲染琴官才貌，子玉心驰神往，倾慕之情达到顶点。", descriptionEn: "Wei Pincai fervently praises Qinguan's talent and beauty. Ziyu is mesmerized, his admiration reaching its peak." },
    { stageZh: "品鉴咏雪", stageEn: "Appreciating Snow Poems", sentiment: 95, descriptionZh: "阅读友人寄来的《雪窗八咏》，诗词之美与知己之情交融，极具审美愉悦。", descriptionEn: "Reading the 'Eight Verses on the Snow Window' sent by friends. The beauty of poetry and the sentiment of kindred spirits blend into profound aesthetic joy." },
    { stageZh: "酒楼奇遇", stageEn: "Restaurant Encounter", sentiment: 85, descriptionZh: "视线转至酒楼，神秘少年（徐湘帆）论音乐、题壁词，展现清狂绝俗的风采。", descriptionEn: "The scene shifts to a restaurant. A mysterious youth (Xu Xiangfan) discusses music and writes a poem on the wall, showing his transcendent and unconstrained grace." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      textZh: "本章在结构上呈现出明显的“双线并行”与“动静交替”的特点，前半部分聚焦于书房的静谧，后半部分转向酒楼的喧嚣与清谈。",
      textEn: "Structurally, this chapter presents a clear 'dual-thread' and 'alternating dynamic-static' pattern. The first half focuses on the quiet study, while the second half shifts to the lively yet refined discourse in the restaurant.",
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "前三章写市井喧嚣，本章借“大雪”将节奏收拢于书斋。子玉通过聘才之口对琴官产生了极度的好奇与迷恋，为二人未来的宿命相逢做足了情感铺垫。", textEn: "The first three chapters depict urban bustle. This chapter uses the 'heavy snow' to draw the rhythm into the study. Ziyu's extreme curiosity and infatuation with Qinguan, sparked by Pincai, lay a deep emotional foundation for their fated encounter." },
        { labelZh: "情节逻辑与节奏", labelEn: "Plot & Pacing", textZh: "本章的情节推进主要依赖于“对话”和“诗词品鉴”。它放缓了外部动作的节奏（成为缓冲带），但在心理与精神层面上，却将人物间的精神契合度推向了高潮。", textEn: "Plot advancement relies heavily on dialogue and poetry appreciation. It slows external action (acting as a buffer) but pushes spiritual affinity between characters to a climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      textZh: "本章最成功之处在于通过“听闻”和“读诗”来塑造人物，展现了人物内心极度的理想化与唯美倾向。",
      textEn: "The chapter's greatest success lies in shaping characters through 'hearing' and 'reading poetry', revealing their extreme idealization and aestheticism.",
      subsections: [
        { labelZh: "性格展现", labelEn: "Personality", textZh: "梅子玉的清高脱俗与多情被刻画得淋漓尽致。他只听描述、只看诗句便将琴官引为知音，展现了其“重情不重貌”的浪漫主义性格；而新出场的神秘少年则展现出一种不落俗套的狂放。", textEn: "Mei Ziyu's aloof purity and deep sentiment are vividly portrayed. Deeming Qinguan a soulmate based solely on descriptions and poetry shows his romantic 'valuing feeling over appearance' nature. The new mysterious youth shows an unconventional wildness." },
        { labelZh: "心理深度", labelEn: "Psychological Depth", textZh: "子玉在听闻琴官之事时，内心经历了从好奇到深深迷恋的转变。这种未见其人、先倾其心的“神交”，是古典小说中情痴的最高境界。", textEn: "Hearing of Qinguan, Ziyu's heart shifts from curiosity to deep infatuation. This 'spiritual communion' before ever meeting is the highest state of the 'love-fool' in classical fiction." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core", score: 80,
      textZh: "本章探讨了清朝士大夫阶层的审美情趣、知音难求的孤独感，以及超越世俗阶级的“情”之力量。",
      textEn: "This chapter explores the aesthetic tastes of Qing dynasty literati, the loneliness of seeking a soulmate, and the power of 'Qing' (feeling) that transcends class.",
      subsections: [
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "“雪”在文中不仅是自然景观，更是主人公内心纯洁无瑕、不染世俗尘埃的象征。《雪窗八咏》更是将这份冰雪之操具象化。", textEn: "'Snow' is not just a natural landscape, but a symbol of the protagonist's flawless, unpolluted inner world. The 'Eight Verses' concrete this pure integrity." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "作者试图构建一个以“情”和“才”为核心的乌托邦，以此来对抗外部名利场中的虚伪与浑浊。", textEn: "The author attempts to construct a utopia centered on 'Qing' (emotion) and talent, to counter the hypocrisy and corruption of the external vanity fair." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "POV & Voice", score: 75,
      textZh: "采用了全知全能的叙事视角，但在处理子玉听闻琴官和神秘少年出场时，又带有强烈的限制性体验。",
      textEn: "An omniscient perspective is used, but it adopts a strongly restricted experience when Ziyu hears of Qinguan and when the mysterious youth appears.",
      subsections: [
        { labelZh: "叙事视角", labelEn: "Perspective", textZh: "通过聘才的讲述和朋友的诗信来侧面描绘琴官，这种“间接描写”极大地激发了读者的想象力。酒楼一段则通过旁观者的视角观察神秘少年，增加了神秘感。", textEn: "Indirect description of Qinguan via Pincai's tales and friends' poems greatly stimulates the reader's imagination. The restaurant scene observes the mysterious youth from a bystander's POV, adding mystery." },
        { labelZh: "语调与语体", labelEn: "Tone & Style", textZh: "整体语调雅致清冷，充满了古典文人独有的书卷气与抒情性。酒楼少年的言论则带有一种睥睨流俗的冷峻与孤傲。", textEn: "The overall tone is elegantly cool, filled with the unique scholarly and lyrical air of classical literati. The youth's speech in the restaurant carries a cold, proud disdain for the mundane." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 95,
      textZh: "本章是全书文学性最高峰之一，《雪窗八咏》及结尾的《浪淘沙》展现了作者深厚的古典诗词功底。",
      textEn: "This chapter is a literary peak of the novel. The 'Eight Verses on the Snow Window' and the closing 'Langtaosha' showcase the author's profound mastery of classical poetry.",
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetics", textZh: "诗词与散文交织，用典精妙，句式工整。如《雪窗八咏》中“雪山”、“雪塔”等咏物诗，既切题又寄托了人物的高雅志趣，极具大观园诗社之风。", textEn: "Poetry and prose intertwine with exquisite allusions and neat structures. Poems like 'Snow Mountain' and 'Snow Pagoda' are both topical and expressive of lofty tastes, highly reminiscent of the Grand View Garden poetry club." },
        { labelZh: "经典句式", labelEn: "Classic Quotes", textZh: "“丝声本哀，说胡琴非淫声，此却破俗之论，从没有人听得出来的。”（String music is inherently sorrowful; his saying that the huqin is not licentious—now that is indeed a view that breaks from convention.）一语道破了少年的脱俗见解，也点明了“音乐”与“人心”的深刻联系。", textEn: "'String music is inherently sorrowful; his saying that the huqin is not licentious—now that is indeed a view that breaks from convention.' This breaks convention and highlights the deep link between music and the human heart." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 85,
      textZh: "在慢节奏的诗酒风流中，读者能深切感受到古典士大夫那份精致而孤独的精神生活。",
      textEn: "In the slow-paced elegance of poetry and wine, readers deeply feel the refined yet lonely spiritual life of classical literati.",
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "雪夜围炉读诗的场景令人感到宁静与向往；而神秘少年对音乐的独到见解及其留下的绝妙好词，则让人产生强烈的惊艳与好奇。", textEn: "The scene of reading poetry by the stove on a snowy night evokes peace and yearning. The mysterious youth's unique musical views and brilliant poem leave a strong sense of awe and curiosity." },
        { labelZh: "时代反思 (2026)", labelEn: "Modern Reflection", textZh: "在快节奏、碎片化的今天，这种“雪夜闭门读禁书”的闲情逸致、对一首诗词的反复咀嚼与品味，成了一种极为奢侈的精神享受，引发现代人对“慢生活”与“深阅读”的反思与渴望。", textEn: "In today's fast-paced, fragmented world, this leisurely 'reading behind closed doors on a snowy night' and the slow savoring of poetry has become a luxurious spiritual enjoyment, sparking a modern longing for 'slow living' and 'deep reading'." }
      ]
    }
  ],
  visualizer: {
    type: "objectSymbolism",
    objects: [{ id: 1, objectZh: "梅花纹饰", objectEn: "Plum Blossom Motifs", appearanceZh: "琴言居所及衣物上的梅花图案", appearanceEn: "Plum blossom patterns on Qinyan's residence and clothes", meaningZh: "梅（Mei）暗合子玉的姓氏，象征着两人之间超越世俗、高洁且隐秘的灵魂契合。", meaningEn: "Plum (Mei) matches Ziyu's surname, symbolizing a pure, secret soul connection transcending the secular world." }]
  }
};