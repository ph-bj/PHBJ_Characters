import { ChapterAppreciationData } from "../appreciationTypes";

export const chapter2Appreciation: ChapterAppreciationData = {
  radarData: [
    { subjectZh: "文本结构", subjectEn: "Structure", score: 80 },
    { subjectZh: "人物塑造", subjectEn: "Character", score: 88 },
    { subjectZh: "主题思想", subjectEn: "Themes", score: 85 },
    { subjectZh: "叙事视角", subjectEn: "POV & Voice", score: 90 },
    { subjectZh: "语言修辞", subjectEn: "Style", score: 85 },
    { subjectZh: "体验共鸣", subjectEn: "Resonance", score: 92 },
  ],
  timelineData: [
    {
      stageZh: "1. 入席筹谋", stageEn: "1. Seat Strategy", sentiment: 95,
      descriptionZh: "作为宴席亲家首座，衣冠楚楚，气度雍容，正襟危坐",
      descriptionEn: "Sits at the head of the table; dignified, well-dressed, and composed",
    },
    {
      stageZh: "2. 猜拳连罚", stageEn: "2. Losing Bets", sentiment: 75,
      descriptionZh: "猜拳连输三局给杨芳有，被迫认罚喝酒，尊严受到轻微挑战",
      descriptionEn: "Loses three consecutive finger-guessing rounds, forced to drink",
    },
    {
      stageZh: "3. 装旦进酒", stageEn: "3. Drag Toast", sentiment: 30,
      descriptionZh: "以袖掩须模仿名伶Tan Ba姿态，娇嗔敬酒，滑稽百出，尊严解构",
      descriptionEn: "Forced to mimic Tan Ba; a highly comical drag show that deconstructs authority",
    },
    {
      stageZh: "4. 喷酒粘花", stageEn: "4. Flower Sneeze", sentiment: 10,
      descriptionZh: "大笑喷酒在御史脸上，又被桂保巧计吹花粘了一脸，狂打喷嚏，仪态扫地",
      descriptionEn: "Sprays wine on the Censor's face, gets covered in plum petals, sneezes uncontrollably",
    },
    {
      stageZh: "5. 惧内惊退", stageEn: "5. Fleeing Wife", sentiment: 5,
      descriptionZh: "忽报悍妻传唤，脸色惨白，顾不得体统，慌忙扒饭告退，落荒而逃",
      descriptionEn: "Wife sends a messenger; turns pale, scrambles his rice, and flees in panic",
    },
  ],
  dimensions: [
    {
      iconType: "GitBranch", titleZh: "文本结构与布局", titleEn: "Structure & Layout", score: 80,
      subsections: [
        { labelZh: "承上启下", labelEn: "Connection", textZh: "由首回的车厢惊艳悬念，通过魏聘才的回叙印证，接着转入王府俗宴，为后续优伶正式登场拉足期待。", textEn: "Connects Ziyu's carriage encounter to Wei's confirmation, then shifts to Wang's vulgar feast, building anticipation for the actors' debut." },
        { labelZh: "情节逻辑", labelEn: "Plot Logic", textZh: "以“赴宴”为核心事件，推动了王桂保等优伶的出场，是展现晚清社会群像的推进器。", textEn: "Driven by the feast, it pushes the debut of actors like Guibao. An engine for showcasing the late Qing social ensemble." },
        { labelZh: "节奏掌控", labelEn: "Pacing", textZh: "先在书房静聊（留白悬念），后转入酒宴的极度喧闹与滑稽（高潮），张弛有度，喜剧张力拉满。", textEn: "Quiet suspense in the study followed by the loud, chaotic climax of the banquet. Great dynamic pacing." }
      ]
    },
    {
      iconType: "User", titleZh: "人物塑造与心理", titleEn: "Characterization & Psychology", score: 88,
      subsections: [
        { labelZh: "性格展现", labelEn: "Personality", textZh: "魏聘才的长袖善舞、孙氏兄弟的附庸风雅与迂腐、王桂保的机智伶俐，各自鲜明传神。", textEn: "Wei's slickness, the Sun brothers' pedantry, and Guibao's wit are all vividly and distinctly drawn." },
        { labelZh: "心理深度", labelEn: "Psychological Depth", textZh: "孙良功醉酒后从高高在上的威严到惧内逃窜的心理反差，极具讽刺效果，展示了礼教面具的脆弱。", textEn: "Sun Lianggong's psychological shift from dignified authority to terrified flight is deeply satirical, exposing the fragility of decorum." },
        { labelZh: "人物关系", labelEn: "Relationships", textZh: "官僚士大夫与优伶之间的权力关系发生倒转，地位卑微的戏子在酒局中反而利用智商与规则掌控了达官贵人。", textEn: "The power dynamic between officials and actors is inverted; the actors use intellect and rules to control the elite at the feast." }
      ]
    },
    {
      iconType: "Heart", titleZh: "主题与思想内核", titleEn: "Themes & Philosophical Core", score: 85,
      subsections: [
        { labelZh: "核心议题", labelEn: "Core Issues", textZh: "探讨晚清社会的“名实分离”——高官满口仁义却行止粗俗，优伶地位卑贱却才思敏捷。", textEn: "Explores the separation of name and reality in late Qing: high officials are vulgar while lowly actors are brilliant." },
        { labelZh: "象征与隐喻", labelEn: "Symbolism", textZh: "“装旦进酒”隐喻了官僚阶层实质上的谄媚与精神矮化；整场酒局本身就是微缩的丑态百出的官场。", textEn: "The drag toast symbolizes the officials' spiritual degradation and sycophancy; the feast is a microcosm of a corrupt officialdom." },
        { labelZh: "作者意图", labelEn: "Author's Intent", textZh: "作者以辛辣的笔触，解构封建统治阶层的道德虚无、无聊以及精神腐朽，折射出礼教在世俗欲望前的无力。", textEn: "A biting critique deconstructing the moral bankruptcy, boredom, and spiritual rot of the ruling class." }
      ]
    },
    {
      iconType: "Eye", titleZh: "叙事视角与声音", titleEn: "POV & Voice", score: 90,
      subsections: [
        { labelZh: "叙事视角", labelEn: "POV", textZh: "采用全景式的俯瞰视角，像一幅长卷风俗画，客观且细致地展现了宴席上的群丑图。", textEn: "A panoramic, bird's-eye view, like a genre painting unrolling the banquet's gallery of clowns." },
        { labelZh: "语调与语体", labelEn: "Tone", textZh: "充满了冷峻的幽默与干练的讽刺。叙事者如同看客，不加主观说教地白描荒谬行为，把讽刺效果最大化。", textEn: "Filled with deadpan humor and sharp satire, objectively displaying absurd behavior without preaching." }
      ]
    },
    {
      iconType: "PenTool", titleZh: "语言特色与修辞", titleEn: "Stylistic Devices", score: 85,
      subsections: [
        { labelZh: "辞章美感", labelEn: "Aesthetics", textZh: "展示了高超的“语言复调”与雅俗互文。书房的描写辞藻华丽，而酒局上的斗嘴则俚俗生动，充满生活气息。", textEn: "Masterful heteroglossia. Elegant prose in the study contrasts with lively, vernacular bickering at the feast." },
        { labelZh: "经典句式", labelEn: "Classic Quotes", textZh: "孙思源结巴揭短的市井对话，与飞花令中“桃李春风一杯酒”的高雅词句并置，产生强烈的反差萌与滑稽感。", textEn: "The stuttered insults juxtaposed with elegant poetry in the drinking game create a sharp comedic contrast." },
        { labelZh: "感官描写", labelEn: "Sensory Details", textZh: "极其生动的视觉与动效描写——喷酒泼脸、粘满花瓣打喷嚏的声音与画面，极具现代喜剧电影的张力。", textEn: "Vivid sights and actions—sprayed wine, petal-covered sneezes—create immense cinematic comedic tension." }
      ]
    },
    {
      iconType: "MessageSquare", titleZh: "阅读体验与共鸣", titleEn: "Reader Response", score: 92,
      subsections: [
        { labelZh: "情感冲击", labelEn: "Emotional Impact", textZh: "阅读体验被密集的“喜剧包袱”填充，从听闻绝色的惊艳，迅速转换为被小丑群像逗得捧腹大笑，情绪跌宕起伏。", textEn: "Packed with comic relief. Transitions from awe at perfect beauty to roaring laughter at the clowns, a rollercoaster of emotion." },
        { labelZh: "时代反思", labelEn: "Modern Reflection", textZh: "酒桌文化中的劝酒、权力服从、失态无礼以及令人会心一笑的“惧内”八卦，在今天（2026年）仍有强烈的现代荒诞感与普世共鸣。", textEn: "Modern drinking culture, power dynamics, loss of decorum, and strict wife gossip still resonate strongly in 2026." }
      ]
    }
  ],
  visualizer: {
    type: "drinkingCups",
    cups: [
      {
        id: 1, titleZh: "第一杯：猜拳斗酒", titleEn: "Cup 1: Finger Guessing",
        ruleZh: "一化为三，对手指拳", ruleEn: "One cup becomes three; guessing fingers with a partner",
        actionZh: "杨芳有与孙良功划拳对决，孙良功连输三局", actionEn: "Yang Fangyou vs. Sun Lianggong; Sun loses 3 rounds in a row",
        critiqueZh: "宴席的开局对决，奠定了酒会热闹世俗的欢快基调，同时将孙良功拉入连败的漩涡中。", critiqueEn: "The opening duel sets up a noisy, playful tension, pulling Sun Lianggong into a losing streak."
      },
      {
        id: 2, titleZh: "第二、三杯：戏装进酒", titleEn: "Cup 2 & 3: Performer Impersonation",
        ruleZh: "装旦进酒，模仿名伶Tan Ba神态", ruleEn: "Mimic a female performer's posture and toast in drag style",
        actionZh: "孙良功以手掩须，扭捏作态，向杨芳有和陆宗元进大杯", actionEn: "Sun Lianggong hides his beard, curtsies, and toasts with large cups",
        critiqueZh: "士大夫高官主动解构自身政治形象，模仿卑微女伶，讽刺了清代官员伪善面具下的庸俗狂欢。", critiqueEn: "Gentry officials voluntarily deconstruct their political image, revealing the absurdity beneath decorum."
      },
      {
        id: 4, titleZh: "第四杯：数籽定罚", titleEn: "Cup 4: Seed Counting Gamble",
        ruleZh: "手抓瓜子，奇偶数子，数到谁谁喝", ruleEn: "Grab a handful of melon seeds; count determines the target",
        actionZh: "孙良功手抓瓜子数出二十五粒，再度落到自身受罚", actionEn: "Sun Lianggong grabs and counts 25 seeds, landing on himself again",
        critiqueZh: "概率博弈的游戏，展现了席间纯粹的偶然娱乐，也印证了孙良功今晚“衰运缠身”的戏剧定位。", critiqueEn: "A pure game of chance that highlights Sun's comedic misfortune throughout the night."
      },
      {
        id: 5, titleZh: "第五、六杯：飞花令词", titleEn: "Cup 5 & 6: Flying Flower Poetry",
        ruleZh: "二化为六，诗词中须含“花”字，按数字行罚", ruleEn: "Two cups become six; quote poetry containing 'flower', count determines target",
        actionZh: "良功、文hui等对诗，良功被王桂保巧计连灌数杯", actionEn: "Lianggong, Wenhui, and others trade quotes; Guibao traps Lianggong",
        poetryZh: "“何人更问后庭花” / “桃花细逐杨花落” / “无可奈何花落去”", poetryEn: "'Who asks of rear courtyard flowers?' / 'Peach blossoms follow willow flowers' / 'Flowers fall helplessly'",
        critiqueZh: "高雅的诗词成为席间斗智、灌酒的工具，甚至被优伶作为调戏官僚的武器，雅俗在此时达成一体。", critiqueEn: "Elegant classical poetry is used as a tactical tool to tease and force drinks on the bureaucracy."
      }
    ]
  }
};

