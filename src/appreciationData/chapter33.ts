import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter33Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：送别故人",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "友人们离开京城，留下子玉倍感孤独，此时他的婚事也被提上日程。",
      descriptionEn: "Friends depart the capital, leaving Ziyu lonely just as talks of his marriage begin.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第三十三章：送别故人与子玉议婚' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 33: Farewells and Marriage Proposals', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "子玉在朋友离去后感到孤立，同时面临着包办婚姻的压力。", textEn: "Ziyu feels isolated after friends leave, while facing the pressure of an arranged marriage." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "离别的必然与社会对婚姻的期许", textEn: "The inevitability of parting and the societal expectations of marriage." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“离别的必然与社会对婚姻的期许”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The inevitability of parting and the societal expectations of marriage.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "socialLadder",
    ladder: [
        {
          id: 1,
          characterZh: "梅子玉", characterEn: "Mei Ziyu",
          initialStatusZh: "沉浸于纯粹情感的游离状态", initialStatusEn: "Drifting in pure emotional attachment",
          finalStatusZh: "被迫步入传统家庭秩序的预备期", finalStatusEn: "Forced into the preparatory phase of traditional family order",
          methodZh: "家族长辈（颜夫人与王大学士）的包办与催促", methodEn: "Arranged and urged by family elders (Lady Yan and Grand Secretary Wang)"
        }
      ]
  },
    {
      "type": "wealthFlow",
      "flows": [
        {
          "id": 1,
          "sourceZh": "众名士",
          "sourceEn": "Scholars",
          "targetZh": "戏班",
          "targetEn": "Troupe",
          "amountZh": "源源不断",
          "amountEn": "Continuous",
          "impactZh": "反映捧角的狂热风气",
          "impactEn": "Reflects the fervent trend of patronizing actors"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "梅子玉 ⇄ 袁宝珠",
          "pairEn": "Mei Ziyu ⇄ Yuan Baozhu",
          "relationZh": "雪斋清叙",
          "relationEn": "Snowbound Communion",
          "temperature": 75,
          "noteZh": "小琅室煮雪烹茶，竹石之语最见默契。",
          "noteEn": "Snow-melt tea in the Xiaolang studio; talk of bamboo and stone reveals a quiet accord."
        },
        {
          "id": 2,
          "pairZh": "袁宝珠 ⇄ 金粟",
          "pairEn": "Yuan Baozhu ⇄ Jin Su",
          "relationZh": "故人之思",
          "relationEn": "Remembering the Fallen",
          "temperature": 60,
          "noteZh": "忆落难画师含泪长叹，风雅人自有情义账。",
          "noteEn": "Tears for the ruined painter — the refined keep their own ledgers of loyalty."
        },
        {
          "id": 3,
          "pairZh": "梅子玉 ⇄ 父命婚期",
          "pairEn": "Mei Ziyu ⇄ the Appointed Marriage",
          "relationZh": "婚期将近",
          "relationEn": "The Closing Date",
          "temperature": 40,
          "noteZh": "“家信未回”的淡淡推说下，另有一腔隐衷。",
          "noteEn": "'No reply from home yet,' he demurs — hiding an entire unspoken heart."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "史南湘随任出京，众名士相送",
          "decisionEn": "Shi Nanxiang leaves the capital for his post, seen off by the circle",
          "rippleZh": "知己又少数人，京中顿显冷清。",
          "rippleEn": "Another confidant gone; the capital feels suddenly empty.",
          "echoZh": "名士星散拉开了全书聚散无常的下半场。",
          "echoEn": "The scattering of the scholars opens the novel's second act of partings."
        },
        {
          "id": 2,
          "decisionZh": "席间子玉的婚事被一语道破",
          "decisionEn": "At the table, Ziyu's betrothal is named aloud",
          "rippleZh": "他淡淡推说家信未回，神情间另有隐衷。",
          "rippleEn": "He deflects with talk of unanswered letters, his face saying otherwise.",
          "echoZh": "情与礼的拉锯将在第54回敲定婚期时迎来终局。",
          "echoEn": "The tug-of-war between feeling and duty reaches its endgame when the wedding date is fixed in chapter 54."
        }
      ]
    }
  ]
};
