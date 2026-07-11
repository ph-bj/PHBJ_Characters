import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter24Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：潘三纠缠",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "潘三强求收苏蕙芳为义子的流言四起。",
      descriptionEn: "Rumors spread about Pan the Third demanding to adopt Su Huifang.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第二十四章：潘三纠缠与应对之策' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 24: Pan the Third's Pestering', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "潘三对苏蕙芳的掠夺本性，以及梅香无奈的外交周旋。", textEn: "Pan the Third's predatory nature against Su Huifang and Meixiang's reluctant diplomacy." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "优伶面临的骚扰及反抗策略", textEn: "The harassment faced by actors and the strategies of resistance." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“优伶面临的骚扰及反抗策略”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The harassment faced by actors and the strategies of resistance.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "rumorNetwork",
    rumors: [
        {
          id: 1,
          rumorZh: "潘三非要收苏蕙芳为干儿子不可", rumorEn: "Pan the Third insists on taking Su Huifang as an adopted son",
          originZh: "银楼老板潘三的强权施压与市井闲谈", originEn: "The pressure from silver shop owner Pan the Third and street gossip",
          effectZh: "导致蕙芳极度恐慌，梅香被迫出面周旋，揭示了财势对优伶的人身霸凌。", effectEn: "Causes Huifang extreme panic; Meixiang is forced to intervene, revealing how wealth bullies actors."
        }
      ]
  },
    {
      "type": "archetypes",
      "archetypes": [
        {
          "id": 1,
          "titleZh": "清高名伶",
          "titleEn": "The Aloof Performer",
          "roleZh": "杜琴言",
          "roleEn": "Du Qinyan",
          "descZh": "面对金钱与权势依然孤高",
          "descEn": "Maintaining aloofness in the face of money and power"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "颜仲清 ⇄ 王恂",
          "pairEn": "Yan Zhongqing ⇄ Wang Xun",
          "relationZh": "促膝论世",
          "relationEn": "Fireside Chroniclers",
          "temperature": 80,
          "noteZh": "把盏闲话，将京城诸事与诸人性情一一勾连。",
          "noteEn": "Over wine they thread together the capital's affairs and every player's character."
        },
        {
          "id": 2,
          "pairZh": "潘其观 ⇄ 苏蕙芳",
          "pairEn": "Pan Qiguan ⇄ Su Huifang",
          "relationZh": "歪缠不休",
          "relationEn": "Relentless Pestering",
          "temperature": 10,
          "noteZh": "强求收义子的流言四起，掠夺披上了人情的外衣。",
          "noteEn": "Rumors of a forced 'adoption' swirl — predation dressed up as kinship."
        },
        {
          "id": 3,
          "pairZh": "梅子玉 ⇄ 杜琴言",
          "pairEn": "Mei Ziyu ⇄ Du Qinyan",
          "relationZh": "旁人眼中",
          "relationEn": "As Others See Them",
          "temperature": 80,
          "noteZh": "“情根何处而生”，令知交亦费解而感叹。",
          "noteEn": "'Where does such feeling take root?' — even close friends can only marvel."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "仲清、王恂坐论梅杜情缘的来龙去脉",
          "decisionEn": "Zhongqing and Wang Xun sit down to trace the Mei-Du romance from its origins",
          "rippleZh": "初见、灯谜、舟中重逢的脉络被梳理分明。",
          "rippleEn": "First glimpse, lantern riddle, canal reunion — the thread is laid out clearly.",
          "echoZh": "名士圈对这段情的正名，让后来的护持行动师出有名。",
          "echoEn": "The circle's endorsement legitimizes every later act of protection."
        },
        {
          "id": 2,
          "decisionZh": "潘三放出收蕙芳为义子的流言",
          "decisionEn": "Pan the Third spreads word that he will take Huifang as his 'adopted son'",
          "rippleZh": "蕙芳处境微妙，周旋愈难。",
          "rippleEn": "Huifang's position grows delicate, the maneuvering harder.",
          "echoZh": "蕙芳的应对智慧将在第43回瞒寡妇、赎琴言时再放异彩。",
          "echoEn": "That same resourcefulness will shine again in chapter 43, outwitting the widow to free Qinyan."
        }
      ]
    }
  ]
};
