import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter47Appreciation: ChapterAppreciationData = {
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
      descriptionZh: "本章开篇局势：科举高捷",
      descriptionEn: "The situation at the beginning of the chapter.",
    },
    {
      stageZh: "2. 冲突发展", stageEn: "2. Conflict Development", sentiment: 30,
      descriptionZh: "春航和南湘考中进士，成绩优异，给所有人带来了欢乐。",
      descriptionEn: "Chunhang and Nanxiang pass the jinshi examinations with high honors, bringing joy to all.",
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
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "情节围绕 '第四十七章：科举高捷与金榜题名' 展开，结构严密。", textEn: "The plot revolves around 'Chapter 47: Examination Triumphs', with a tight structure." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "张弛有度，高潮处情感饱满。", textEn: "Pacing is well-controlled with emotional fullness at the climax." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 90,
      subsections: [
        { labelZh: "性格展现", labelEn: "Character", textZh: "春航与南湘取得了巨大的成功，彻底改变了他们的社会轨迹。", textEn: "Chunhang and Nanxiang achieve great success, altering their social trajectories completely." },
        { labelZh: "心理深度", labelEn: "Psychology", textZh: "人物内心的挣扎和波澜描写真实细腻。", textEn: "The inner struggles and psychological waves of the characters are depicted authentically and delicately." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "人物间的互动微妙地改变了彼此的权力或情感平衡。", textEn: "Interactions between characters subtly alter their power or emotional balance." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Core Ideas", score: 88,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "社会的终极认可与文人抱负的巅峰", textEn: "The ultimate societal validation and the peak of scholarly ambition." },
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
        { labelZh: "时代反思", labelEn: "Modern Relevance", textZh: "即使在2026年审视，本章探讨的“社会的终极认可与文人抱负的巅峰”依然能引起现代人的共鸣，展现了超越时代的文本生命力。", textEn: "Even when examined in 2026, the discussion of 'The ultimate societal validation and the peak of scholarly ambition.' still resonates with modern readers, demonstrating text vitality beyond its era." }
      ]
    }
  ],
  visualizers: [
    {
    type: "socialLadder",
    ladder: [
        {
          id: 1,
          characterZh: "田春航", characterEn: "Tian Chunhang",
          initialStatusZh: "风流才子/普通举人", initialStatusEn: "Romantic talent / Provincial graduate",
          finalStatusZh: "新科状元/翰林院修撰", finalStatusEn: "Zhuangyuan (First Place) / Hanlin Compiler",
          methodZh: "通过科举考试的最高选拔（殿试）", methodEn: "Through the highest selection of the imperial examination (Palace Exam)"
        }
      ]
  },
    {
      "type": "archetypes",
      "archetypes": [
        {
          "id": 1,
          "titleZh": "觉醒士子",
          "titleEn": "Awakened Scholar",
          "roleZh": "梅子玉",
          "roleEn": "Mei Ziyu",
          "descZh": "反思封建礼教",
          "descEn": "Reflecting on feudal ethics"
        }
      ]
    },
    {
      "type": "relationCompass",
      "relations": [
        {
          "id": 1,
          "pairZh": "田春航 ⇄ 史南湘",
          "pairEn": "Tian Chunhang ⇄ Shi Nanxiang",
          "relationZh": "同榜之喜",
          "relationEn": "Fellow Graduates",
          "temperature": 85,
          "noteZh": "双双高中进士，社会轨迹就此改写。",
          "noteEn": "Both pass the jinshi — their social trajectories rewritten in a stroke."
        },
        {
          "id": 2,
          "pairZh": "苏蕙芳 ⇄ 田春航",
          "pairEn": "Su Huifang ⇄ Tian Chunhang",
          "relationZh": "张罗迁居",
          "relationEn": "Steward of the New Life",
          "temperature": 85,
          "noteZh": "欣喜之余为二人张罗搬迁，事事亲力。",
          "noteEn": "Amid the joy, he manages the whole move himself — devotion in logistics."
        },
        {
          "id": 3,
          "pairZh": "奚十一 ⇄ 江湖医馆",
          "pairEn": "Xi Shiyi ⇄ the Quack Clinic",
          "relationZh": "病急乱投",
          "relationEn": "Desperate Remedies",
          "temperature": 15,
          "noteZh": "伤处成疾内外难支，撞见怪医馆便一头栽入。",
          "noteEn": "His old injury festering, he stumbles on the bizarre clinic and dives straight in."
        }
      ]
    },
    {
      "type": "echoes",
      "echoes": [
        {
          "id": 1,
          "decisionZh": "春航、南湘同科高中进士",
          "decisionEn": "Chunhang and Nanxiang pass the jinshi in the same class",
          "rippleZh": "蕙芳张罗新宅，子云慷慨相邀。",
          "rippleEn": "Huifang arranges the new residence; Ziyun extends his open invitation.",
          "echoZh": "殿试夺魁（第48回）完成从落魄才子到状元的全书最大逆袭。",
          "echoEn": "The palace exam triumph (ch. 48) completes the novel's greatest reversal — from destitute genius to top graduate."
        },
        {
          "id": 2,
          "decisionZh": "奚十一踏入宏济寺旁的怪医馆",
          "decisionEn": "Xi Shiyi steps into the strange clinic beside Hongji Temple",
          "rippleZh": "荒唐求医之旅就此开场。",
          "rippleEn": "His farcical medical odyssey begins.",
          "echoZh": "讽刺恶人线在“修肾医臀”的闹剧中走向高潮。",
          "echoEn": "The satire of the villains crests in the 'kidney cures and buttock treatments' farce."
        }
      ]
    }
  ]
};
