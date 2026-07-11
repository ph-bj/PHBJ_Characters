import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter51Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 85 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 90 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 88 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 82 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 86 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 92 },
  ],
  timelineData: [
    {
      stageZh: "1. 阶段起因", stageEn: "1. The Cause", sentiment: 50,
      descriptionZh: "本章开篇局势：冒名顶替",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "元茂与孙氏兄弟在科举考试中冒名顶替，甚至雇佣代笔。",
      descriptionEn: "Yuanmao and the Sun brothers fraudulently participate in exams, resorting to bribery and ghostwriters.",
    },
    {
      stageZh: "3. 剧情高潮", stageEn: "3. Climax", sentiment: 80,
      descriptionZh: "本章的高潮点与情感爆发",
      descriptionEn: "The climax and emotional burst of this chapter.",
    }
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 85,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "本章紧接上文，推动了核心情节发展。", textEn: "This chapter directly follows the previous text, advancing the core plot." },
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第五十一章：冒名顶替与科考闹剧' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 51: The Fake Scholar and the Examination Farce', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "孙氏兄弟诉诸代笔与欺诈，暴露了他们缺乏真才实学。", textEn: "Sun Sihui and Siyuan resort to ghostwriting and fraud, exposing their lack of true learning." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "科举制度的腐败与德不配位的荒诞", textEn: "The corruption of the imperial examination system and the absurdity of unearned status." },
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "文中场景被赋予了强烈的象征意味，暗合人物心境。", textEn: "Scenes in the text are given strong symbolic meaning, matching the characters' moods." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "流露出作者对特定现象的批判态度或审美倾向。", textEn: "Reveals the author's critical attitude or aesthetic tendency towards certain phenomena." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "Point of View & Voice", score: 82,
      subsections: [
        { labelZh: "叙事视角", labelEn: "Narrative POV", textZh: "视角的切换灵活，既有全知的宏观掌握，又有局部的心理聚焦。", textEn: "Flexible perspective switching, with both omniscient macro-mastery and local psychological focus." },
        { labelZh: "语调与语体", labelEn: "Tone & Voice", textZh: "叙述语调与场景氛围高度契合，增强了代入感。", textEn: "The narrative tone perfectly matches the scene atmosphere, enhancing immersion." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 86,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetic", textZh: "修辞手法运用得当，提升了文学表现力。", textEn: "Proper use of rhetorical devices enhances literary expression." },
        { labelZh: "感官描写", labelEn: "Sensory", textZh: "视觉与听觉等多重感官描写的交织，构建了生动的临场感。", textEn: "The intertwining of visual and auditory descriptions builds a vivid sense of presence." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 92,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "剧情的起伏给读者带来较强的情绪共振与思考。", textEn: "The ups and downs of the plot bring readers strong emotional resonance and reflection." },
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“科举制度的腐败与德不配位的荒诞”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The corruption of the imperial examination system and the absurdity of unearned status.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "socialLadder",
    ladder: [
        {
          id: 1,
          characterZh: "孙嗣徽", characterEn: "Sun Sihui",
          initialStatusZh: "不学无术的市井商贾之子", initialStatusEn: "Ignorant son of a merchant",
          finalStatusZh: "冒牌科举秀才", finalStatusEn: "Fake scholar",
          methodZh: "八十两银子雇人代笔，贿赂科场", methodEn: "Hired a ghostwriter for 80 taels, bribing the exam system"
        }
      ]
  },
    {
      "type": "powerDynamics",
      "dynamics": [
        {
          "id": 1,
          "dominatorZh": "长庆",
          "dominatorEn": "Changqing",
          "submissiveZh": "戏班伶人",
          "submissiveEn": "Troupe Actors",
          "powerBaseZh": "经济剥削",
          "powerBaseEn": "Economic exploitation",
          "shiftZh": "权力达到顶峰",
          "shiftEn": "Power reaches peak"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "孙嗣徽 ⇄ 孙嗣元",
          "pairEn": "Sun Sihui ⇄ Sun Siyuan",
          "relationZh": "难兄难弟",
          "relationEn": "A Matched Pair of Failures",
          "temperature": 45,
          "noteZh": "一个雇枪手、一个乱涂鸦，堂上厚颜辩解语惊四座。",
          "noteEn": "One hires a ghostwriter, the other scribbles nonsense — and the courtroom defense outdoes them both."
        },
        {
          "id": 2,
          "pairZh": "宗师 ⇄ 孙氏兄弟",
          "pairEn": "The Examiner ⇄ the Sun Brothers",
          "relationZh": "斥为疯子",
          "relationEn": "Dismissed as Madmen",
          "temperature": 5,
          "noteZh": "卷子被点名嘲讽，满堂哄笑中斯文扫地。",
          "noteEn": "Their papers are mocked by name; scholarly dignity dies amid the hall's laughter."
        },
        {
          "id": 3,
          "pairZh": "李元茂 ⇄ 科场",
          "pairEn": "Li Yuanmao ⇄ the Examination",
          "relationZh": "侥幸得售",
          "relationEn": "Luck Over Learning",
          "temperature": 50,
          "noteZh": "混得秀才，志得意满独步运河边。",
          "noteEn": "Scraping through to xiucai, he struts the canal bank in triumph."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "嗣徽花钱雇枪手代考",
          "decisionEn": "Sihui pays a ghostwriter to sit his examination",
          "rippleZh": "堂上为弟辩解语出惊人，被宗师斥为疯子。",
          "rippleEn": "His outrageous courtroom defense of his brother gets him branded a madman by the examiner.",
          "echoZh": "科举腐败的众生相，与子玉、春航的真才实学两相对照。",
          "echoEn": "A rogues' gallery of exam fraud — the dark twin of Ziyu's and Chunhang's genuine laurels."
        },
        {
          "id": 2,
          "decisionZh": "元茂考毕，独自在运河边散步解闷",
          "decisionEn": "Exams done, Yuanmao strolls the canal bank alone",
          "rippleZh": "粮船如云、市声喧嚣，志得意满。",
          "rippleEn": "Grain barges crowd the water, the market roars — and he savors his little triumph.",
          "echoZh": "世俗繁华中一个小人物的高光时刻，竟也令人唏嘘。",
          "echoEn": "A small man's shining moment amid the worldly bustle — absurd, and strangely poignant."
        }
      ]
    }
  ]
};
