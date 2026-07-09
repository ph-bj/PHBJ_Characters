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
      subsections: [
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "本章是情感的酝酿期。大雪封锁了外部的喧闹，将镜头聚焦于梅子玉书房内的精神世界。", textEn: "An emotional incubation phase. The snow isolates the noise, focusing on Ziyu's inner spiritual world." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Character", score: 85,
      subsections: [
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "子玉对琴官的倾慕从“外貌震撼”深化为“灵魂知音”的想象。聘才的渲染让这个形象在他心中完美化。", textEn: "Ziyu's admiration deepens from 'visual shock' to 'soulmate' imagination, heavily influenced by Pincai's praise." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes", score: 90,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "纯洁的白雪象征了主角对“至情”毫无杂念的追求。雪中读诗、饮茶，构成了古典审美的极致结晶。", textEn: "Pure snow symbolizes the pursuit of untainted 'supreme feeling'. Reading poetry and brewing tea creates a peak classical aesthetic." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "POV", score: 80,
      subsections: [
        { labelZh: "语调", labelEn: "Tone", textZh: "极其文雅、安静。与前两回的市井喧闹形成鲜明对比。", textEn: "Extremely elegant and quiet, a sharp contrast to the urban chaos of previous chapters." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Style", score: 95,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetics", textZh: "《雪窗八咏》展现了作者极高的诗词造诣。冰雪诗词与梅子玉清冷高洁的气质完美互文。", textEn: "The 'Eight Views' poems showcase immense poetic skill. The icy verses perfectly mirror Ziyu's pure and aloof aura." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验", titleEn: "Resonance", score: 80,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Impact", textZh: "读者能感受到一种静谧的文化愉悦感，仿佛与主角一同在红炉旁赏雪。", textEn: "Readers feel a tranquil cultural pleasure, as if viewing snow beside a warm stove with the protagonist." }
      ]
    }
  ],
  visualizer: { type: "none" }
};

export const chapter5Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 95 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 90 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 85 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 85 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 88 },
  ],
  timelineData: [
    { stageZh: "怡园雅集", stageEn: "Yiyuan Gathering", sentiment: 80, descriptionZh: "徐子云在怡园宴客，尽显名士风流", descriptionEn: "Xu Ziyun hosts a gathering, displaying scholarly elegance." },
    { stageZh: "初遇琴琪", stageEn: "Meeting Qinyan", sentiment: 95, descriptionZh: "子云惊叹二人的才貌，连夜制衣相赠", descriptionEn: "Ziyun is amazed by Qinyan/Qiguan, gifting clothes overnight." },
    { stageZh: "揭秘身世", stageEn: "Backstory", sentiment: 20, descriptionZh: "交代琴官家破人亡、落入火坑的悲惨过往", descriptionEn: "Reveals Qinyan's tragic past: orphaned and forced into theater." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "正式引入了全书的灵魂地标“怡园”，并补齐了杜琴言的身世背景，为后续群像在怡园的活动铺平道路。", textEn: "Introduces 'Yiyuan', the novel's core landmark, and completes Qinyan's backstory, paving the way for the ensemble." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Character", score: 95,
      subsections: [
        { labelZh: "性格展现", labelEn: "Personality", textZh: "徐子云的“惜花但不摧花”展现了极高的道德修养。琴言的悲惨身世则赋予了他清冷外表下极度敏感自尊的内核。", textEn: "Ziyun's 'cherishing without destroying' shows high moral cultivation. Qinyan's tragic past gives his cold exterior a deeply sensitive, proud core." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes", score: 90,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "怡园是一个乌托邦式的理想国。在这里，阶级界限被短暂抹平，名士与优伶可以基于对“美”的纯粹欣赏而平等相处。", textEn: "Yiyuan is a utopian ideal. Class lines blur, allowing scholars and actors to interact equally based on pure appreciation of beauty." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角", titleEn: "POV", score: 85,
      subsections: [
        { labelZh: "视角转换", labelEn: "POV Shift", textZh: "通过回忆式的插叙倒带，以全知视角沉重地揭开了琴言背后的血泪史。", textEn: "Uses an omniscient flashback to solemnly unveil the history of blood and tears behind Qinyan." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言修辞", titleEn: "Style", score: 85,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetics", textZh: "怡园的园林建筑描写极尽奢华典雅，展现了中国古典园林艺术的文字化表达。", textEn: "The architectural descriptions of Yiyuan are highly elegant, a textual manifestation of classical Chinese gardening art." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验", titleEn: "Resonance", score: 88,
      subsections: [
        { labelZh: "情感共鸣", labelEn: "Resonance", textZh: "读者在享受怡园美景的同时，被琴言凄惨的身世刺痛，产生了强烈的同情与保护欲。", textEn: "While enjoying Yiyuan's beauty, readers are stung by Qinyan's past, evoking strong sympathy and a desire to protect him." }
      ]
    }
  ],
  visualizer: { type: "none" }
};

export const chapter6Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 80 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 92 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 95 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 88 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 85 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 90 },
  ],
  timelineData: [
    { stageZh: "年节女眷", stageEn: "Women's Gathering", sentiment: 60, descriptionZh: "颜夫人设宴，女眷们衣香鬓影地聚会", descriptionEn: "Lady Yan hosts the women, an elegant surface." },
    { stageZh: "沈氏之苦", stageEn: "Shen's Suffering", sentiment: 20, descriptionZh: "沈芸姑无奈将丫鬟送给恶心的丈夫，以泪洗面", descriptionEn: "Shen Yunggu tearfully yields her maid to her repulsive husband." },
    { stageZh: "巴氏之怒", stageEn: "Ba's Fury", sentiment: 30, descriptionZh: "巴来风性格火爆，对包办婚姻极度不满，暗中抗争", descriptionEn: "Ba Laifeng, fierce and fiery, actively resists her arranged marriage." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure", score: 80,
      subsections: [
        { labelZh: "旁线补充", labelEn: "Side Plot", textZh: "暂时跳脱出才子佳人和戏院，将镜头转向深闺怨妇，构成了对当时社会婚姻制度的补充批判。", textEn: "Temporarily steps away from theaters to focus on resentful wives, complementing the social critique of the marriage system." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Character", score: 92,
      subsections: [
        { labelZh: "女性群像", labelEn: "Women Ensembles", textZh: "沈芸姑的传统隐忍与巴来风的武将烈性形成鲜明对比。两人虽应对方式不同，却同样是封建包办婚姻的受害者。", textEn: "Shen's traditional endurance contrasts with Ba's martial fierceness. Though reacting differently, both are victims of arranged marriage." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes", score: 95,
      subsections: [
        { labelZh: "男权批判", labelEn: "Patriarchy Critique", textZh: "深刻揭露了封建婚姻“盲婚哑嫁”的荒谬性，鲜活美丽的女性被强行婚配给丑陋无能的官宦子弟，酿成了无数后院悲剧。", textEn: "Deeply exposes the absurdity of blind arranged marriages, where vibrant women are forced onto ugly, incompetent heirs, creating domestic tragedy." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角", titleEn: "POV", score: 88,
      subsections: [
        { labelZh: "微观审视", labelEn: "Micro Gaze", textZh: "如同曹雪芹写大观园一样，作者深入内闱，用悲悯的视角审视女性的生存困境。", textEn: "Like Cao Xueqin writing the Grand View Garden, the author looks deeply into the women's quarters with compassionate scrutiny." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言修辞", titleEn: "Style", score: 85,
      subsections: [
        { labelZh: "冷嘲热讽", labelEn: "Satire", textZh: "在描写无能丈夫时，使用了极具讽刺意味的漫画式夸张（如红鼻子废物），强化了女性受屈辱的悲剧色彩。", textEn: "Uses cartoonish, highly satirical exaggeration when describing the incompetent husbands, magnifying the tragedy of the women's humiliation." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验", titleEn: "Resonance", score: 90,
      subsections: [
        { labelZh: "现代共鸣", labelEn: "Modern Echo", textZh: "关于“丧偶式育儿”和“痛苦婚姻”的描写，在现代女性读者中极易引发强烈的情绪共鸣与愤怒。", textEn: "Descriptions of toxic marriages strongly provoke emotional resonance and anger among modern female readers." }
      ]
    }
  ],
  visualizer: {
    type: "archetypes",
    archetypes: [
      {
        id: 1, titleZh: "隐忍的淑女", titleEn: "The Enduring Lady", roleZh: "沈芸姑 (Shen Yunggu)", roleEn: "The Traditional Victim",
        descZh: "书香门第的牺牲品。受封建女德洗脑，面对恶心丑陋的丈夫只能通过割舍自己陪嫁丫鬟来换取片刻清净，是将痛苦内化自伤的典型。",
        descEn: "Victim of scholarly families. Brainwashed by feudal female virtues; facing a repulsive husband, she sacrifices her own maid for peace, internalizing her suffering."
      },
      {
        id: 2, titleZh: "暴烈的反抗者", titleEn: "The Fierce Rebel", roleZh: "巴来风 (Ba Laifeng)", roleEn: "The Martial Resister",
        descZh: "武将之女，不受传统礼教束缚。面对不如意的婚姻，她选择了主动出击和压制丈夫，是深闺中罕见的一抹抗争亮色。",
        descEn: "Daughter of a general, unbound by soft decorum. Unhappy in marriage, she proactively suppresses her weak husband, a rare flash of rebellion in the boudoir."
      }
    ]
  }
};

export const chapter7Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 80 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 85 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 80 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 82 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 85 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 85 },
  ],
  timelineData: [
    { stageZh: "痴心挂念", stageEn: "Obsession", sentiment: 80, descriptionZh: "子玉对琴官朝思暮想，认定其为天下无双", descriptionEn: "Ziyu constantly thinks of Qinguan, declaring him unmatched." },
    { stageZh: "指甲掐字", stageEn: "Scratched Poem", sentiment: 70, descriptionZh: "发现情诗被王家小姐掐去两字，疑云顿生", descriptionEn: "Finds his love poem scratched by Wang's daughter, feeling puzzled." },
    { stageZh: "阴差阳错", stageEn: "Misunderstanding", sentiment: 85, descriptionZh: "得知王家小姐被许配给自己，只能将错就错", descriptionEn: "Learns he is betrothed to her, forced to accept the comic misunderstanding." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure", score: 80,
      subsections: [
        { labelZh: "伏笔与误会", labelEn: "Foreshadowing", textZh: "利用一首“指代不明”的诗，巧妙地将同性暗恋与异性联姻这两条线索通过一个极其戏剧化的“误会”编织在一起。", textEn: "Uses an 'ambiguous' poem to masterfully weave the homosexual crush and heterosexual betrothal plots together through a dramatic misunderstanding." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Character", score: 85,
      subsections: [
        { labelZh: "将错就错", labelEn: "Rationalization", textZh: "子玉得知未婚妻容貌像琴言后，居然产生了荒谬的欣慰感。这显示了他对“美”的追求已经超脱了性别，甚至带有一种精神鸦片般的沉溺。", textEn: "Hearing his betrothed looks like Qinyan brings Ziyu absurd comfort. It shows his pursuit of beauty transcends gender, bordering on spiritual addiction." }
      ]
    }
  ],
  visualizer: { type: "none" }
};

export const chapter8Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 90 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 88 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 85 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 90 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 92 },
  ],
  timelineData: [
    { stageZh: "偷银看戏", stageEn: "Stealing Silver", sentiment: 70, descriptionZh: "聘才怂恿元茂偷钱去戏院寻欢", descriptionEn: "Pincai urges Yuanmao to steal money for the theater." },
    { stageZh: "结识华光宿", stageEn: "Meeting Hua", sentiment: 50, descriptionZh: "元茂跌倒被恶少华光宿扶起，埋下隐患", descriptionEn: "Yuanmao falls, is helped by the villain Hua Guangsu, sowing future danger." },
    { stageZh: "失窃狼狈", stageEn: "Robbed & Panic", sentiment: 10, descriptionZh: "馆子结账时发现银两不翼而飞，极度难堪", descriptionEn: "Finding the silver stolen at the restaurant, leading to extreme panic." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure", score: 85,
      subsections: [
        { labelZh: "支线展开", labelEn: "Subplot", textZh: "引出了反派华光宿，同时通过聘才的“底层视角”展现了戏园里真正的世俗交易与虚荣陷阱。", textEn: "Introduces villain Hua Guangsu, while Pincai's 'bottom-up POV' reveals the true vanity traps and transactions of the theater." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes", score: 88,
      subsections: [
        { labelZh: "金钱与欲望", labelEn: "Money & Desire", textZh: "无钱寸步难行。偷钱逛窑子的狼狈下场，撕破了前几回“纯情”的滤镜，展示了名利场的残酷底色。", textEn: "Pennilessness means paralysis. The humiliating end to their stolen-money joyride strips away the 'pure love' filter, showing the vanity fair's cruel reality." }
      ]
    }
  ],
  visualizer: { type: "none" }
};

export const chapter9Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 88 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 85 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 85 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 88 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 95 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 88 },
  ],
  timelineData: [
    { stageZh: "元宵夜游", stageEn: "Lantern Night", sentiment: 80, descriptionZh: "众公子步入灯市，感受京城上元佳节的繁华", descriptionEn: "The young masters enter the lantern market, soaking in the capital's festive glory." },
    { stageZh: "车中少妇", stageEn: "Lady in Carriage", sentiment: 95, descriptionZh: "被马车拦路，与车内美艳少妇长时间对视，心潮起伏", descriptionEn: "Blocked by a carriage, Ziyu locks eyes with a beautiful married woman, heart racing." }
  ],
  dimensions: [
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Style", score: 95,
      subsections: [
        { labelZh: "元宵风俗画", labelEn: "Genre Painting", textZh: "作者倾注了极大笔墨描写玻璃灯、画纱灯等元宵细节，如同文字版的《清明上河图》，极具史料与美学价值。", textEn: "The author pours ink into detailing glass lanterns and painted silks. Like a textual 'Along the River During the Qingming Festival', it has immense historical and aesthetic value." },
        { labelZh: "眼神交锋", labelEn: "Eye Contact", textZh: "少妇露足、凝视、嫣然一笑的动作描写，没有一句台词，却将封建礼教下被压抑的情欲流动写得张力十足。", textEn: "The woman showing her foot, staring, and smiling—without a single word of dialogue—brilliantly captures the tense flow of repressed desire under feudal decorum." }
      ]
    }
  ],
  visualizer: { type: "none" }
};

export const chapter10Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 90 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 95 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 92 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 88 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 85 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 95 },
  ],
  timelineData: [
    { stageZh: "梦中羁绊", stageEn: "Dream Bond", sentiment: 80, descriptionZh: "琴言反复梦见进京路上救过自己的公子", descriptionEn: "Qinyan repeatedly dreams of the young master who saved him on the road." },
    { stageZh: "说配对惊恐", stageEn: "Matchmaking Fear", sentiment: 10, descriptionZh: "听到子云开玩笑要给他找配对，以为要被权贵糟蹋，吓得大哭", descriptionEn: "Hearing Ziyun joke about a 'match', he cries in terror, fearing he'll be ruined by elites." },
    { stageZh: "得知是子玉", stageEn: "Knowing It's Ziyu", sentiment: 95, descriptionZh: "从宝珠口中确认梅子玉的身份，压抑的幽情浮出水面", descriptionEn: "Confirming Mei Ziyu's identity from Baozhu, his repressed love surfaces." }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure", score: 90,
      subsections: [
        { labelZh: "双向奔赴", labelEn: "Mutual Longing", textZh: "前几回都是写子玉单方面的相思，本章终于切回琴言的视角，揭开了这段关系的“双向性”与宿命感。", textEn: "Earlier chapters focused on Ziyu's one-sided pining. This chapter shifts to Qinyan's POV, unveiling the mutual, fated nature of their bond." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Character", score: 95,
      subsections: [
        { labelZh: "自卑与防御", labelEn: "Insecurity", textZh: "琴言听到“配对”二字时的惊恐大哭，展现了他身为底层优伶极度缺乏安全感、时刻害怕被物化的心理防御机制。", textEn: "Qinyan's terrified tears at the word 'match' reveal the deep insecurity and defensive mechanisms of a lower-class actor terrified of objectification." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验", titleEn: "Resonance", score: 95,
      subsections: [
        { labelZh: "情感爆发", labelEn: "Emotional Climax", textZh: "得知一直默默关注自己的梅公子就是梦中恩人时，那种“众里寻他千百度”的宿命感极大地满足了读者的情感期待。", textEn: "The realization that his secret admirer Mei is his dream savior delivers a powerful sense of destiny, intensely satisfying the reader's emotional expectations." }
      ]
    }
  ],
  visualizer: { type: "none" }
};
