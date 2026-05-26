// Pre-computed per-chapter appearance analysis for performers
// Key: character id → chapter number → array of bilingual scene descriptions.
export type SceneBullet = { en: string; zh: string };

export const characterAppearances: Record<
  string,
  Record<number, SceneBullet[]>
> = {
  "char-0": {
    1: [
      {
        en: "Formally introduced as a 17-year-old scholar of exceptional talent and moral purity, son of official Mei Shaoyan.",
        zh: "正式登场：梅少言之子，年十七岁，才学超群、品行纯正。",
      },
      {
        en: "Debates the beauty and virtue of famous actors with friends Shi Nanxiang, Yan Zhongqing, and Wang Xun.",
        zh: "与史南湘、颜仲清、王珣等至友辩论名伶之美德与才情。",
      },
      {
        en: "Visits the theater with Wang Xun and, on the way back, catches a glimpse of a strikingly beautiful young actor in a passing carriage — later revealed to be Du Qinyan — leaving him profoundly shaken.",
        zh: "同王珣入班肆看戏，归途中瞥见一华美少年（后知为杜琴言）自车中驰过，心中为之震动。",
      },
    ],
    2: [
      {
        en: "Listens to Wei Pengcai describe two exceptionally beautiful actors he encountered on the journey north, deepening Ziyu's longing for the one he briefly saw.",
        zh: "听韦朋才讲述北行路上遇见之两位绝代伶人，益加思念旧日一瞥之人。",
      },
      {
        en: "Participates in family meals while his father and Wang Wenhui discuss political affairs.",
        zh: "侍父与王文惠议论朝事，家宴相陪。",
      },
      {
        en: "Visits the theater with Wang Xun to observe Beijing's theatrical world firsthand.",
        zh: "与王珣再入班肆，观京师戏坛一隅。",
      },
    ],
    3: [
      {
        en: "Peripherally referenced through the activities of Wei Pengcai, who is a guest in the Mei household, as the social world Ziyu inhabits is shown through others' encounters at the theater.",
        zh: "以韦朋才在梅家之事迹，隐约显其所处之社交圈。",
      },
    ],
    4: [
      {
        en: "Composes eight snow-themed poems alone in his study, with thoughts of Qinyan threading through his poetic imagery.",
        zh: "独在书房撰雪题诗八篇，琴言之思贯于诗句之中。",
      },
      {
        en: "Hosts and exchanges poem drafts with friends Yan Zhongqing and Wang Xun during a snowy gathering.",
        zh: "雪夜款待颜仲清、王珣，互相评论诗篇。",
      },
      {
        en: "His friends separately spot a beautiful young man (later revealed to be the wealthy Hua Gongzi) in an opposing carriage on a snowy street.",
        zh: "友人于雪中见一美貌少年（后知为华公子）过街而行。",
      },
    ],
    5: [
      {
        en: "Catches a second glimpse of Qinyan riding in a carriage with Yuan Baozhu toward the garden, and they exchange a lingering glance.",
        zh: "再见琴言同袁宝珠乘车入园，两心相视、目光交缠。",
      },
      {
        en: "Hears from Wei Pengcai a detailed account of the extravagant Hua Gongzi's retinue and fearsome reputation.",
        zh: "自韦朋才处闻华公子奢华仪从及其威名。",
      },
    ],
    6: [
      {
        en: "Women guests discover his poetry and a small portrait in his bedroom; his cousin Wang Qionghua quietly erases lines that reference her name.",
        zh: "女客见其卧房诗稿及小像，堂妹王琼华悄悄抹去自己名字。",
      },
      {
        en: "Attends a formal gathering where Qinyan performs 'The Peony Pavilion,' and is so transfixed that their mutual gaze is noticed by all present.",
        zh: "琴言演《牡丹亭》，子玉凝视若痴，二人目光相交为众人所见。",
      },
      {
        en: "Engages in literary discussions with scholars and officials, beginning to recognize his own deepening romantic feelings.",
        zh: "与诸名士贵人文会，渐悟己心之所系。",
      },
    ],
    7: [
      {
        en: "Participates in a competitive couplet-composition session with friends, with his thoughts of Qinyan weaving through his literary engagement.",
        zh: "与友人结句相对，心间琴言之思萦绕不散。",
      },
      {
        en: "Continues social gatherings and literary exchanges that reflect his emotional preoccupation.",
        zh: "往来诗酒酬和，其心事尽显于笔端。",
      },
    ],
    8: [
      {
        en: "Briefly referenced in connection with the broader social circle as his friends encounter troubles at the theater and a wine-shop brawl.",
        zh: "友人因班肆及酒肆事生波澜，子玉隐约相关。",
      },
    ],
    9: [
      {
        en: "Goes out on Lantern Festival night with Liu Wenze, Zhongqing, and Wang Xun to view lantern displays.",
        zh: "元宵夜同刘文泽、颜仲清、王珣出游灯市。",
      },
      {
        en: "Visits the Yiyuan garden to solve lantern riddles and meets Xiao Cixian in a refined literary gathering.",
        zh: "至怡园灯谜会中，与萧次贤相识于雅集。",
      },
      {
        en: "Learns from Yuan Baozhu that Qinyan was taken to another banquet by Xu Ziyun, causing him deep regret at yet another near-miss; he and Baozhu exchange meaningful glances observed by Liu Wenze.",
        zh: "闻袁宝珠言琴言为徐子云引赴他席，心中悔恨；与宝珠目光暗通，为刘文泽所见。",
      },
    ],
    10: [
      {
        en: "Central to extended scenes of deepening romantic longing, in which the narrator traces his emotional obsession with Qinyan through dreams, poetry, and private reflection.",
        zh: "绵长岁月中，日夜思琴言，梦魂相系，诗笔为之摇曳。",
      },
      {
        en: "Participates in multiple social gatherings where his connection to Qinyan is discussed or observed by others, firmly establishing him as the novel's romantic protagonist.",
        zh: "于众多社交场合，与琴言之缘为人所议所见，确立小说男主之地位。",
      },
    ],
    11: [
      {
        en: "Briefly referenced in passing as the social activities of servant women and maidservants in and around the Mei household are described.",
        zh: "梅家仆妾往来之事，隐约言及子玉。",
      },
    ],
    15: [
      {
        en: "After his father departs for an official post in Jiangxi, Ziyu is left free to pursue his own affairs and begins actively seeking out Qinyan.",
        zh: "父赴江西上任后，子玉方得自由，遂积极寻访琴言。",
      },
      {
        en: "Takes advantage of his new freedom to attend gatherings and visit acquaintances connected to the theatrical world.",
        zh: "往来班肆、结识伶人故交，频繁出入于文人聚集之所。",
      },
    ],
    16: [
      {
        en: "Maintains his scholarly routine and social circles following his father's departure, now effectively master of his own schedule.",
        zh: "父离京后，子玉学问社交如旧，不复父教约束。",
      },
      {
        en: "Visits the ailing Qinyan to offer comfort, and converses with Sulan about his emotional situation.",
        zh: "往探重病中之琴言，与苏兰密语心事。",
      },
    ],
    17: [
      {
        en: "Composes and sends congratulatory letters, and attends literary gatherings where his reputation among refined circles is praised.",
        zh: "撰书贺状、赴诗会，其名声为雅集中人所推重。",
      },
      {
        en: "Is compared favorably to other celebrated figures in rankings of distinguished courtiers and their associates.",
        zh: "被列为品评中之佳士，与诸名流并列。",
      },
    ],
    18: [
      {
        en: "Recalled and longed for by Qinyan during his illness; makes an effort to visit Qinyan outside the city walls.",
        zh: "琴言病中日念子玉；子玉亦力赴城郊相探。",
      },
    ],
    19: [
      {
        en: "Referenced as the sole person toward whom Qinyan shows genuine warmth and devotion, contrasting with Qinyan's cold indifference toward all other patrons.",
        zh: "琴言独对子玉展现真情，对他人则冷漠以待，形成鲜明对比。",
      },
    ],
    20: [
      {
        en: "Their alternating illnesses prevent them from meeting; Ziyu is too unwell to attend the garden's Dragon Boat Festival celebration where Qinyan performs.",
        zh: "子玉病重，未能赴园中端午会；琴言亦因疾阻，二人失之交臂。",
      },
    ],
    21: [
      {
        en: "Central to extended narrative discussion of his character and the social damage done by Wei Pengcai's malicious gossip about him.",
        zh: "韦朋才造谣中伤，其名誉遭损，众人皆知其事。",
      },
      {
        en: "Shown enduring cold treatment from acquaintances who have believed the rumors, while he himself remains unaware of the source.",
        zh: "故旧因谣言疏远，子玉初不知言之何出。",
      },
    ],
    22: [
      {
        en: "Arranges a secret private meeting with Qinyan along the Grand Canal through Sulan's intermediation.",
        zh: "由苏兰为媒，与琴言约在大运河畔密会。",
      },
      {
        en: "The two make their first mutual declaration of exclusive, lasting affection during their clandestine Grand Canal outing.",
        zh: "舟中促膝，两心相许，立下白首之盟。",
      },
    ],
    23: [
      {
        en: "Briefly referenced in the immediate aftermath of the Grand Canal outing as surrounding events unfold.",
        zh: "大运河之事既毕，子玉隐现于后续风波之中。",
      },
    ],
    24: [
      {
        en: "The secret Grand Canal outing has become public gossip among courtesans and socialites throughout Beijing.",
        zh: "大运河私会之事已为京城伶界及贵妇所知，成为街谈巷议。",
      },
      {
        en: "His exclusive claim on Qinyan's affections is now treated as settled fact in their shared social world.",
        zh: "子玉于琴言心中之地位，举世公认，成为既定之事实。",
      },
    ],
    25: [
      {
        en: "Cannot attend a major banquet due to relapsed illness; Qinyan performs at the gathering while mentally picturing Ziyu present.",
        zh: "子玉因病复发未赴大宴；琴言演艺场中，心中所思唯子玉。",
      },
      {
        en: "His relationship with Qinyan is openly acknowledged and discussed among the assembled guests in his absence.",
        zh: "子玉与琴言之情，为宾客所议所认，二人若为配对。",
      },
    ],
    26: [
      {
        en: "Referenced as Wei Pengcai schemes to have Qinyan acquired by the Hua household — a plot that would permanently sever Ziyu's access to Qinyan.",
        zh: "韦朋才图将琴言售与华家，意在永绝其与子玉之缘。",
      },
    ],
    27: [
      {
        en: "Mourned and longed for by Qinyan as the crisis unfolds; Qinyan seeks to send him a farewell through intermediaries.",
        zh: "琴言被迫入华家前，日夜思念子玉，欲托人送别书。",
      },
      {
        en: "Ziyu himself remains unaware of the impending forced separation.",
        zh: "子玉犹不知离别在即。",
      },
    ],
    28: [
      {
        en: "Qinyan is purchased and removed to the Hua household, severing their access to each other.",
        zh: "琴言为华公子所纳，迁入华府，二人从此隔阻。",
      },
      {
        en: "Receives a farewell embroidered handkerchief from Qinyan, delivered through Sulan, as a token of parting.",
        zh: "由苏兰转送琴言之绣帕，暗含离别之意。",
      },
    ],
    29: [
      {
        en: "Falls gravely ill from despair and grief over Qinyan's removal to the Hua household.",
        zh: "琴言入华家，子玉悲恸成疾，卧床不起。",
      },
      {
        en: "Qinyan secretly visits the Mei household to see the bedridden Ziyu, and they are briefly reconciled before parting again.",
        zh: "琴言冒险夜访梅家，与病中子玉促膝谈心，暂得重逢，又复离别。",
      },
    ],
    30: [
      {
        en: "Still in convalescence; Qinyan visits him again, and their mutual longing is tenderly acknowledged.",
        zh: "子玉犹未全愈，琴言复至，两心相许、深情难舍。",
      },
      {
        en: "Qinyan performs at a Mei family banquet held during this visit.",
        zh: "琴言于梅家宴中献艺，子玉在侧观看。",
      },
    ],
    31: [
      {
        en: "Friends visit him at home to celebrate his recovery from summer illness and lift his spirits.",
        zh: "友人来探子玉病愈，把酒言欢。",
      },
      {
        en: "Accompanies friends to visit theater celebrities Chun Hang and Gao Pin to review their examination essays.",
        zh: "同友人往访春航、高品，共评其试卷。",
      },
      {
        en: "His unwillingness to attend a planned temple outing is noted by the group and attributed to his lingering melancholy.",
        zh: "友人议赴庙会，子玉推辞，众人知其心绪未佳。",
      },
    ],
    33: [
      {
        en: "Becomes withdrawn and melancholy after his closest friends depart Beijing, spending more time in solitude.",
        zh: "至友离京，子玉益增冷寂，独处居多。",
      },
      {
        en: "Visits the courtesan Baozhu for tea and refined conversation to ease his loneliness.",
        zh: "频往访袁宝珠，以诗酒解愁。",
      },
      {
        en: "Learns that his friend Wei Pengcai has been imprisoned on forgery charges, alarming him greatly.",
        zh: "闻韦朋才以伪造之罪入狱，惊骇莫名。",
      },
      {
        en: "Receives a stern letter from his father rebuking him for reckless behavior and failure of filial duty, which deeply frightens and chastens him.",
        zh: "父自江西遣书痛责其行止不端、不尽孝道，子玉惶恐悔悟。",
      },
    ],
    34: [
      {
        en: "Mentioned by Wei Pengcai, who notes he hasn't called on Ziyu recently; the Wang family is said to be arranging Ziyu's marriage in the coming spring.",
        zh: "韦朋才言未曾见子玉；王家传言春时拟为子玉议婚。",
      },
    ],
    35: [
      {
        en: "Attends Baozhu's birthday celebration at Xu Ziyun's garden as one of five distinguished gentleman guests.",
        zh: "赴徐子云园中宝珠生辰宴，列为上客之一。",
      },
      {
        en: "Participates extensively in elaborate wine games using mechanized cups and numbered wheels to select recipients.",
        zh: "参与机关酒令，轮转之间，命运自择。",
      },
      {
        en: "Competes in sophisticated poetry contests requiring matching flower names with classical literary allusions.",
        zh: "与诸名士竞花名联对，引经据典、对答如流。",
      },
      {
        en: "Experiences the rare joy of sitting close to Qinyan in mixed company for the first time since they fell in love.",
        zh: "难得在众人眼前与琴言同席而坐，自相识以来此为首次。",
      },
    ],
    36: [
      {
        en: "Qinyan wonders whether Wei Pengcai might be staying with Ziyu and resolves to pay Ziyu's household a visit.",
        zh: "琴言疑韦朋才或暂居梅家，遂决意往访。",
      },
      {
        en: "Conversations confirm that Ziyu has withdrawn from social gatherings and is quietly awaiting his arranged marriage.",
        zh: "众人言及子玉已隐退诗酒，静候婚期。",
      },
    ],
    37: [
      {
        en: "Arrives early to admire spring plum blossoms with fellow scholars in the garden.",
        zh: "早至园中同诸名士赏春梅。",
      },
      {
        en: "Seated at the place of honor as host; he and Qinyan share an intense, emotion-laden glance across the banquet table.",
        zh: "为主人而坐上席，与琴言隔席相望，目光千言万语。",
      },
      {
        en: "Participates brilliantly in character-transformation literary games, where a single written character must be modified into three distinct new ones.",
        zh: "字迹变幻游戏中，子玉笔下生花、妙语连珠。",
      },
      {
        en: "Engages in theatrical-title matching competitions with witty responses that demonstrate his cultural depth.",
        zh: "戏曲题名对答，文采斐然、声价倍增。",
      },
      {
        en: "Gently suggests ending the competitions when he notices Qinyan's fatigue, revealing his tender attentiveness.",
        zh: "见琴言疲态，温言止游，体贴入微。",
      },
    ],
    38: [
      {
        en: "Attends an intellectual gathering with the renowned Daoist scholar Qu Daosheng and engages in learned discussion about ancient texts, philosophy, and cultural interpretation.",
        zh: "赴道学家屈道生之研讨会，论古籍、议哲学，文采飞扬。",
      },
    ],
    39: [
      {
        en: "Becomes noticeably cold toward Wei Pengcai during a visit, troubled by jealousy over Pengcai's proximity to Qinyan.",
        zh: "韦朋才访时，子玉态度冷淡，因其与琴言之事而心生嫉意。",
      },
      {
        en: "Serves as an accompanying guest at Li Yuanmao's wedding celebration.",
        zh: "赴李元茂婚宴，为陪客之一。",
      },
      {
        en: "Meets for the first time a young man named Ji Liangxuan, who has become a retainer for Xi Shier.",
        zh: "初识少年姬亮轩，乃奚十一之幕僚。",
      },
    ],
    42: [
      {
        en: "Qinyan spends several joyful days with him in the garden after leaving his courtesan position, finding deep mutual contentment.",
        zh: "琴言脱离伶籍后，数日来园与子玉相聚，两心相悦、若有所得。",
      },
    ],
    44: [
      {
        en: "Invited to a farewell gathering organized by Xu Ziyun to honor Shi Nanxiang and Chun Hang before their provincial examination departure.",
        zh: "赴徐子云为史南湘、春航饯别之宴。",
      },
    ],
    45: [
      {
        en: "Listed among the prominent gentleman guests at Xu Ziyun's grand gathering with a visiting Daoist diviner.",
        zh: "赴徐园中邀请屈道生驻宿之盛宴，列为显客。",
      },
      {
        en: "Visits the garden by moonlight for intimate private conversation with Qinyan away from the other guests.",
        zh: "月下同琴言私语于花间，避开众人。",
      },
      {
        en: "Endures a lengthy sales pitch from a talkative bookseller trying to interest him in purchasing an expensive encyclopedia.",
        zh: "为缠人书贩所困，听其夸夸其谈。",
      },
      {
        en: "Escapes to the Begonia Pavilion to share romantic moments with Qinyan, discussing the fragrance and beauty of hawthorn blossoms.",
        zh: "同琴言逃至海棠春圃，共赏海棠芬芳，笑靥如花。",
      },
      {
        en: "Participates in an elaborate spirit-writing divination séance where Qu Daosheng channels messages from past-life connections.",
        zh: "参与屈道生主持之扶乩大会，沟通前世因缘。",
      },
      {
        en: "Witnesses the revelation that Qinyan shares a karmic bond with Qu Daosheng from a previous life, and is moved to tears.",
        zh: "得知琴言与道生有前世之缘，感动涕泪涟涟。",
      },
      {
        en: "Advocates joyfully that Qinyan become Qu Daosheng's adopted daughter and spiritual disciple for her moral protection and future happiness.",
        zh: "欣然赞同琴言拜道生为父，得道学庇护、指引前途。",
      },
      {
        en: "Sits at the seat of honor during the celebratory feast marking Qinyan's adoption into Qu Daosheng's household.",
        zh: "琴言认父之宴，子玉为上座。",
      },
    ],
    46: [
      {
        en: "Joins other scholars on a tour of the garden, participating in discussions about architectural features and poetic names for pavilions.",
        zh: "与诸名士游园，评论亭台楼阁之名。",
      },
      {
        en: "Composes couplets for garden structures and assists Qinyan with calligraphy practice.",
        zh: "为园舍撰对联，助琴言习字。",
      },
    ],
    47: [
      {
        en: "Briefly referenced in casual conversation about impending relocations and farewells among the Beijing literary circle.",
        zh: "北京文人将散，众人言及子玉之去留。",
      },
    ],
    48: [
      {
        en: "Falls into prolonged illness caused by emotional distress over Qinyan's departure from Beijing.",
        zh: "琴言随屈道生南下，子玉因之消沉，旧疾复发。",
      },
      {
        en: "Throughout the chapter he is in recurring emotional turmoil — reflecting on Qinyan's absence, re-reading old letters, and struggling to resume normal life.",
        zh: "日日忆琴言南行，旧信反复读之，心绪不宁，难以如常生活。",
      },
    ],
    49: [
      {
        en: "Recovers from illness; his mother learns more about Qinyan's circumstances from outside sources.",
        zh: "子玉病渐愈；母氏闻及琴言南下后之事。",
      },
      {
        en: "His father's letter from the provinces discusses arranging Ziyu's formal marriage when he turns nineteen.",
        zh: "父自外省遣书，谓子玉十九岁当成婚。",
      },
    ],
    50: [
      {
        en: "Attends a casual dinner gathering with fellow scholars at a restaurant.",
        zh: "与诸友聚饭，诗酒往还。",
      },
    ],
    52: [
      {
        en: "Attends a spring wedding celebration among officials and scholars, participating in poetry discussion and social affairs.",
        zh: "赴春日婚宴，与官员名士交游。",
      },
    ],
    53: [
      {
        en: "Is present when letters arrive from Qu Daosheng's journey south, learning of the old Daoist's accident along the way.",
        zh: "屈道生南下路中遭厄，书信传至，子玉得知。",
      },
      {
        en: "Appears in multiple social gatherings where literary and romantic matters involving Qinyan and Qu Daosheng are discussed.",
        zh: "多次出现于文人聚会，议论琴言与道生之事。",
      },
    ],
    54: [
      {
        en: "Receives Qinyan's reply poem and falls into deep melancholy at the distance between them.",
        zh: "得琴言复诗，距离遥远、鸿雁传信，子玉因而黯然。",
      },
      {
        en: "His father sends instructions and funds for marriage arrangements; Ziyu prepares for the imperial examination while the family discusses his impending marriage to Wang Qionghua.",
        zh: "父遣书及婚资，子玉准备乡试，家中筹议其与王琼华之婚期。",
      },
    ],
    55: [
      {
        en: "Referenced in Qu Daosheng's philosophical conversation with a southern literary figure about fate, life choices, and career.",
        zh: "屈道生与南方文士谈论命运、人生抉择，言及子玉。",
      },
    ],
    56: [
      {
        en: "Referenced in Qu Daosheng's deathbed dictations, which include messages intended for Qinyan and those close to Ziyu.",
        zh: "屈道生临终遗言，涉及琴言及子玉至友。",
      },
      {
        en: "Mentioned in context of a disreputable official's improper advances toward Qinyan following Qu Daosheng's death.",
        zh: "道生身后，有品行不端官员欲非礼琴言，事涉子玉。",
      },
    ],
    57: [
      {
        en: "His wife Wang Qionghua is invited to a gathering of wives of prominent families, establishing Ziyu's new domestic status as a married official.",
        zh: "妻子王琼华列席贵妇之会，子玉之已婚官员身份由此确立。",
      },
    ],
    59: [
      {
        en: "Receives a letter from Qinyan seeking financial help to arrange a proper burial for Qu Daosheng.",
        zh: "琴言遣信乞助，欲为屈道生营葬。",
      },
      {
        en: "His father, now an Assistant Minister, decides to build a memorial temple for Qu Daosheng in recognition of the old Daoist's virtue.",
        zh: "父官至侍郎，决为道生建庙以纪其德。",
      },
      {
        en: "The Mei family extends formal charity to Qinyan and draws him back into their household circle, reuniting Ziyu with his lifelong love under legitimate patronage.",
        zh: "梅家正式纳琴言入世家圈子，子玉与琴言遂得以名正言顺地相聚。",
      },
    ],
    60: [
      {
        en: "Attends a grand New Year celebration gathering with fellow scholars and old friends.",
        zh: "与诸名士故友赴元旦大宴。",
      },
      {
        en: "Participates in discussions about creating a commemorative collection — flower goddess portraits and literary tributes to nine celebrated beauties — as a lasting legacy project.",
        zh: "议定编纂花神图及九佳传记，以流芳百世。",
      },
    ],
  },
  "char-1": {
    2: [
      {
        en: "Introduced as a gifted new opera performer named 琴官, fifteen years old, who has just arrived in Beijing — Wei Pengcai describes him to Ziyu as a sensation of exceptional beauty and talent.",
        zh: "初入京城的新秀伶人琴官，年方十五，以天资绝伦的容貌与艺技惊动四座，由韦朋才之口道与子玉。",
      },
    ],
    3: [
      {
        en: "Mentioned as a patient recovering from illness at the household of his teacher Cao Changqing, and praised for his unmatched looks and vocal ability.",
        zh: "在师父曹长青家中养疾，闻其容貌绝伦、歌喉无双，众人皆赞。",
      },
    ],
    4: [
      {
        en: "Discussed among the scholars as the new sensation in the capital, fuelling Ziyu's growing romantic curiosity about him.",
        zh: "京城新秀之名日盛，引得士子议论纷纷，激起子玉心中之思。",
      },
    ],
    5: [
      {
        en: "His full background is revealed: originally named 琴官, surname Du, son of a zither-maker; he is formally renamed 琴言 and given the style-name 玉侬 by his patrons Xu Ziyun and Xiao Cixian.",
        zh: "本姓杜，原名琴官，琴匠之子，今为徐子云、萧次贤两位恩主雅名曰琴言，号玉侬。",
      },
      {
        en: "His first street encounter with Ziyu occurs as he rides in a carriage with Yuan Baozhu — they exchange a charged glance that marks the beginning of their romantic connection.",
        zh: "与子玉在街头初遇，随袁宝珠乘舆而过，一眼相识，情缘至此而萌。",
      },
    ],
    6: [
      {
        en: "Performs in a stage production that captivates Ziyu, who watches him so intently that their mutual gaze is noticed by the assembled guests.",
        zh: "登台演《牡丹亭》，技艺绝妙，与子玉眼光相交，为在座众宾所见。",
      },
    ],
    7: [
      {
        en: "Praised in conversations among the scholars for his exceptional theatrical talent and beauty, which continues to preoccupy Ziyu's thoughts.",
        zh: "士子间频频称颂其台上风采，美色与才情并绝，令子玉心念不忘。",
      },
    ],
    8: [
      {
        en: "Notable for his absence from the theater, discussed as a temperamental but captivating performer currently lodging with one of his patrons.",
        zh: "以气性高洁著称，近日寓于一恩主家中，久不见其登台。",
      },
    ],
    9: [
      {
        en: "The gifted zither given to him by Xu Ziyun as a romantic token is referenced; Ziyu learns Qinyan was taken to a rival banquet the same evening, causing their meeting to be missed yet again.",
        zh: "徐子云馈以名琴；然时乖命蹇，琴言当晚被携往他处赴筵，两人又失之交臂。",
      },
    ],
    10: [
      {
        en: "Portrayed as melancholic and emotionally withdrawn despite Xu Ziyun's devotion to him, longing for someone more spiritually aligned.",
        zh: "虽得徐子云垂爱，心中却怅然若失，冀求精神相知之人。",
      },
      {
        en: "Has his first private meeting with Ziyu at the garden; they develop a deep romantic understanding through intimate conversation.",
        zh: "与子玉园中初聚，通宵谈心，相知相许，情谊渐深。",
      },
      {
        en: "Discovers that Ziyu is the man from his dream, confirming the karmic nature of their mutual attraction.",
        zh: "悟得子玉即梦中人，因缘际会，天定之缘也。",
      },
    ],
    11: [
      {
        en: "Xu Ziyun discusses his romantic connection with Ziyu with his wife, marking it as an acknowledged bond.",
        zh: "徐子云与妻言及琴言与子玉之心事，往来有信。",
      },
    ],
    15: [
      {
        en: "Wei Pengcai visits Qinyan's residence and discusses Ziyu's feelings on his behalf.",
        zh: "韦朋才往访琴言寓所，代为传述子玉之情意。",
      },
      {
        en: "An arrangement is made through Ou Sulan for Qinyan and Ziyu to meet privately.",
        zh: "由欧苏兰撮合，两人密约得期。",
      },
    ],
    16: [
      {
        en: "Reported to be ill and confined to bed, avoiding social visits while his teacher receives clients.",
        zh: "卧病在床，谢客不见，师父曹长青仍接待宾客。",
      },
      {
        en: "His remarkable integrity and emotional fidelity toward Ziyu are noted by those who know him.",
        zh: "其人心性高洁，对子玉一片真心，为知者所称许。",
      },
    ],
    17: [
      {
        en: "Absent from a major literary gathering due to illness, causing Ziyu visible distress; he is considered the foremost talent among the courtesans.",
        zh: "因疾未能赴文会，令子玉忧形于色；论伶人之才貌，琴言首屈一指。",
      },
    ],
    18: [
      {
        en: "Ill and confined indoors, receiving occasional visits from friends; he is economically dependent on his teacher Cao Changqing.",
        zh: "寝疾缠身，经济拮据，靠师父曹长青接待宾客而维持。",
      },
    ],
    19: [
      {
        en: "Referenced as unable to attend social occasions due to continuing illness, while his independent and dignified character is emphasised in contrast to his circumstances.",
        zh: "虽久病难出，然其气节高卓，不为俗事所动。",
      },
    ],
    20: [
      {
        en: "Repeated missed meetings with Ziyu — alternating illnesses and social obligations continue to keep them apart despite their mutual devotion.",
        zh: "两人相继抱恙或他事缠身，与子玉时乖命蹇，迟迟未得相聚。",
      },
    ],
    21: [
      {
        en: "Ziyu falls ill from lovesickness over Qinyan and is confined to bed; Wei Pengcai visits Qinyan's residence in Yingtao Lane to check on him.",
        zh: "子玉相思成疾；韦朋才往樱桃巷琴言寓所探问。",
      },
      {
        en: "Qinyan is punished by his teacher after a dispute with the actor Changqing over the actress Xiufang.",
        zh: "因与伶人长庆争宠女伶绣芳，被师父责罚。",
      },
    ],
    22: [
      {
        en: "Lu Sulan arranges a secret meeting between Qinyan and Ziyu.",
        zh: "陆素兰为两人撮合密约。",
      },
      {
        en: "Qinyan and Ziyu are reunited along the Grand Canal and declare their exclusive mutual devotion — the emotional culmination of their long separation.",
        zh: "两人运河畔重逢，倾心吐意，互许终身，万千思绪化作一句誓言。",
      },
    ],
    24: [
      {
        en: "Wei Pengcai pays someone to publicly insult Qinyan out of spite; an apology follows.",
        zh: "韦朋才怀恨，暗遣人当众侮辱琴言，事后悔过补礼。",
      },
      {
        en: "News of the Grand Canal outing with Ziyu and Sulan spreads throughout Beijing's social circles.",
        zh: "运河之游事露，传遍京城士庶间。",
      },
      {
        en: "Others openly discuss the origins and depth of the romantic bond between Ziyu and Qinyan.",
        zh: "两人之情谊为众所知，议论纷纷。",
      },
    ],
    25: [
      {
        en: "Performs at a banquet in the Hua household and is singled out for special attention and gifts by Hua Gongzi.",
        zh: "于华家宴席献艺，华公子独加垂青，赏赐甚厚。",
      },
      {
        en: "Performs as the lead female-role actor, demonstrating his exceptional theatrical skills.",
        zh: "担任花旦主角，其台上技艺之妙令人叹赏。",
      },
    ],
    26: [
      {
        en: "Shanzhi introduces Qinyan's background and talents to Hua Gongzi, who inquires about the possibility of acquiring him as an exclusive performer.",
        zh: "珊枝将琴言身世才艺详述于华公子，华公子遂询问纳其为己有之可能。",
      },
    ],
    27: [
      {
        en: "Xi Shier is attracted by Qinyan's beauty and attempts to proposition him at Qiushui Hall, causing Qinyan fear and distress.",
        zh: "奚十一垂涎琴言容貌，于秋水堂欲加非礼，琴言震恐。",
      },
      {
        en: "Qinyan consults with Changqing about Xi Shier's harassment, anxious both about the threat and about potential separation from Ziyu.",
        zh: "琴言就此事询问长庆，忧心忡忡，既虑己身，更虑与子玉离别。",
      },
      {
        en: "Qinyan moves into the Hua household to escape Xi Shier's harassment — and to avoid the greater disruption Hua Gongzi's formal acquisition would cause.",
        zh: "琴言遂移居华家，以脱奚十一之魔爪，兼免日后华公子强取之累。",
      },
    ],
    28: [
      {
        en: "Formally purchased by Hua Gongzi and relocated from Qiushui Hall to the Hua household, severing his daily access to Ziyu.",
        zh: "被华公子正式收购，迁离秋水堂入华府，自此与子玉日不得见。",
      },
      {
        en: "Ziyu sends him an embroidered fabric as a farewell token containing hidden coded messages of longing.",
        zh: "子玉赠以绣帕一条，其中暗寓千般相思与惜别之意。",
      },
    ],
    29: [
      {
        en: "Secretly visits the Mei household to see the bedridden Ziyu; initially fearful at the number of people present.",
        zh: "秘密造访梅家，欲见卧疾之子玉，初见人众而惶恐。",
      },
      {
        en: "He and Ziyu talk through the night, sharing their deepest feelings about life's hardships and their bond.",
        zh: "两人彻夜谈心，诉说人生之悲欢与心事之隐秘。",
      },
      {
        en: "The two achieve profound spiritual understanding and mutual recognition of the authenticity of their love.",
        zh: "于此际达成灵犀相通，互认彼此心之真挚无欺。",
      },
    ],
    30: [
      {
        en: "Returns to the Hua household after his visit with Ziyu, the tenderness of their reunion acknowledged.",
        zh: "自梅家归返华府，与子玉重逢之温馨往事犹在心间。",
      },
      {
        en: "Performs as the lead female-role actor at a lantern-moon banquet hosted by the Hua household.",
        zh: "于华家灯月宴上担任花旦主角献艺。",
      },
    ],
    31: [
      {
        en: "Performs and sings at a literati gathering, earning widespread acclaim from the assembled scholars.",
        zh: "于文人雅集献歌舞，博得满堂彩。",
      },
    ],
    33: [
      {
        en: "Hua Gongzi's farewell interactions before departing Beijing are described in relation to Qinyan, marking a period of transition.",
        zh: "华公子北京将去，与琴言有诸多交代之事，局势为之转变。",
      },
    ],
    35: [
      {
        en: "Ziyu recalls with nostalgia the anniversary of his first encounter with Qinyan, feeling the bittersweet passage of time.",
        zh: "子玉忆及初遇琴言之日，感慨光阴流逝、人事沧桑。",
      },
      {
        en: "Poems recently composed by Qinyan (under his alias 玉侬) are copied and circulated among the literary community.",
        zh: "琴言近作诗词以玉侬之名流传文人间，被竞相传抄。",
      },
    ],
    36: [
      {
        en: "Yuan Baozhu harbors deep resentment toward Qinyan for failing to win his favor, leading to schemes against him.",
        zh: "袁宝珠心有不平，怀怨琴言之不纳其好，遂暗生图谋。",
      },
      {
        en: "Qinyan is widely praised as a person of integrity who cannot be swayed by money or material temptation.",
        zh: "琴言之气节高卓、不为利诱之名声远播，众人咸称其品行端洁。",
      },
    ],
    37: [
      {
        en: "Returns home after an upsetting encounter and weeps privately over what occurred.",
        zh: "经历不快之事而归，独自伤心堕泪。",
      },
      {
        en: "Participates in literary games — flying-flower verse competitions and opera-title matching — showcasing his considerable cultural accomplishments.",
        zh: "参与飞花令、戏名相对等文化游戏，展露渊博才学。",
      },
    ],
    38: [
      {
        en: "The Daoist master Qu Daosheng advises Qinyan to leave the performance world and pursue serious literary study, seeing in him a refined spiritual nature.",
        zh: "道士屈道生劝琴言远离伶界，致力文学修为，见其气质清雅，堪为佳器。",
      },
      {
        en: "Attends the literati gathering as an honored guest, further integrating him into the scholarly social world.",
        zh: "作为嘉宾出席文人雅集，渐融入士林社交圈。",
      },
    ],
    39: [
      {
        en: "Briefly referenced as background context during the wedding-chamber revelry at a friend's celebration.",
        zh: "于友人婚礼洞房花烛之际略作提及。",
      },
    ],
    40: [
      {
        en: "Xi Shier's earlier obsessive harassment of Qinyan is cited as the karmic cause of the retribution now befalling him.",
        zh: "奚十一早年骚扰琴言之业因，今已遭报应。",
      },
    ],
    41: [
      {
        en: "Hua Gongzi anxiously awaits his return after his leave period expires, asking attendants when Qinyan will come back.",
        zh: "华公子归期将至，倚门待琴言归来，日日问讯。",
      },
      {
        en: "Hua Furen praises Qinyan's singing technique as uniquely preserving the pure classical tradition despite his youth.",
        zh: "华夫人赞其歌喉之妙，虽年幼而保存古雅纯正之韵味。",
      },
    ],
    42: [
      {
        en: "Lives in seclusion at the Yiyuan garden with Ziyu, recovering from illness and finding rare contentment, while financial pressure mounts as his widowed teacher's mother demands ongoing support.",
        zh: "与子玉偕隐怡园，疾愈而心乐；然师母纠缠索钱，经济拮据，两人陷入两难之境。",
      },
    ],
    43: [
      {
        en: "Experiences emotional distress after hearing malicious rumors; visits friends for comfort.",
        zh: "闻恶言而心烦意乱，往访友人以排忧。",
      },
      {
        en: "Is formally redeemed from his contract by the patron Xu Ziyun, supported financially by Su Huifang, ending his servitude to his teacher's household.",
        zh: "由恩主徐子云正式赎身，苏蕙芳资助，自此脱离曹长青家之束缚。",
      },
    ],
    44: [
      {
        en: "His redemption shocks Hua Gongzi, who had expected his return; the news triggers rumors and misunderstandings that fracture relationships among the aristocratic patrons.",
        zh: "其赎身消息令华公子震惊意外，由此引发种种传言，诸贵人间因而生隙。",
      },
      {
        en: "His newly free status becomes the catalyst for a serious falling-out between two powerful benefactors.",
        zh: "其自由身份遂成为两位权贵反目之导火索。",
      },
    ],
    45: [
      {
        en: "Settles at the Yiyuan garden and gradually recovers emotionally through literary and social gatherings.",
        zh: "安居怡园，借文会以疗心伤，渐复其明慧清爽之姿。",
      },
      {
        en: "Has an intimate moonlit reunion with Ziyu; supernatural spirit-writing suggests a deep karmic bond between them across incarnations.",
        zh: "与子玉月下重聚，灵通神笔暗示两人跨越轮回之因缘。",
      },
      {
        en: "Qu Daosheng formally adopts him as a spiritual daughter, providing him moral protection and a path out of the performance world.",
        zh: "屈道生正式收其为义女，既为其把持风节，又为其指点人生出路。",
      },
    ],
    47: [
      {
        en: "Referenced (as 玉侬) as soon departing to accompany Qu Daosheng on his journey south to a new official post.",
        zh: "以玉侬之名，即将随屈道生南下就官。",
      },
    ],
    48: [
      {
        en: "Recites melancholic poetry about celestial separation during the southward journey, moving his traveling companions to reflection.",
        zh: "南下途中吟诵离别之诗，其声凄婉，同伴无不为之动容。",
      },
      {
        en: "Exchanges heartfelt farewells with Qi Guan before departing, expressing fear about mortality and the uncertainty of reunion.",
        zh: "与琪官话别，叹人生无常，离别难期，泪染衣襟。",
      },
    ],
    49: [
      {
        en: "His romantic entanglement creates complications at a social gathering; others discuss his relationships delicately in his absence.",
        zh: "其感情之事在社交场合引发微妙之议论，众人婉言相劝。",
      },
    ],
    50: [
      {
        en: "His departure south with Qu Daosheng affects Ziyu so deeply that friends notice Ziyu appears physically ill — his spirit seemingly traveling with his beloved on the river.",
        zh: "琴言南下，子玉形销骨立，友人见其神魂似随琴言于江上漂泊。",
      },
    ],
    52: [
      {
        en: "His absence from a wedding celebration is felt acutely by Ziyu, who becomes melancholic reflecting on their separation.",
        zh: "婚礼上琴言之缺席令子玉黯然神伤，思绪飘零于远方。",
      },
      {
        en: "Hua Gongzi compares Su Lan favorably to Qinyan, acknowledging Qinyan's exceptional qualities as a benchmark.",
        zh: "华公子以琴言为评鉴之标准，言苏兰不如，反衬其卓越之处。",
      },
    ],
    53: [
      {
        en: "Su Lan's nostalgic spring poetry contains hidden allusions to Qinyan, using him as a metaphor for lost beauty and passing time.",
        zh: "苏兰春日怀旧诗中暗寓琴言之影，以之喻逝水年华。",
      },
      {
        en: "Letters relayed from Qu Daosheng's journey include messages composed by Qinyan — his penmanship limited by an injury — expressing gratitude and cataloguing the generous gifts he has received.",
        zh: "屈道生南下信中有琴言所作之笔，虽因伤病笔力不如，然感恩之心溢于言表，并细数所得厚赐。",
      },
    ],
    54: [
      {
        en: "Ziyu grieves after receiving Qinyan's reply poem, haunted by dreams of Qinyan's pallid appearance and fearing omens of misfortune.",
        zh: "子玉得琴言复诗而悲切，梦中见其面容苍白，疑虑其有凶兆。",
      },
      {
        en: "Wang Qionghua wonders aloud about the 'troublesome' Qinyan who previously caused Ziyu such illness and distress.",
        zh: "王琼华私下议论琴言之事，言其昔日如何致子玉沉疾。",
      },
    ],
    59: [
      {
        en: "Following Qu Daosheng's death, arrangements are made to bring Qinyan (as 玉侬) back north from his southern journey to Beijing.",
        zh: "屈道生身故后，琴言以玉侬之身北归京城。",
      },
      {
        en: "The Mei family extends formal charity and welcome to him, drawing him back into their household circle under legitimate patronage.",
        zh: "梅家正式纳其为赡养对象，以名正言顺之名义将其纳入家族保护范围。",
      },
    ],
    60: [
      {
        en: "Reconnects with the scholarly social circle at the grand reunion gathering, now having transitioned from performer to person of refined literary standing.",
        zh: "于大型重聚中复见士林友朋，此时已非伶人之身，而为清雅文人矣。",
      },
      {
        en: "Referenced (as 玉侬) among those to be commemorated in the planned flower-goddess portrait collection celebrating nine celebrated beauties.",
        zh: "以玉侬之名列于拟绘之《花神图》中，与九位佳人并存青史。",
      },
    ],
  },
  "char-23": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...琼楼珠树袁宝珠..."',
        zh: "出场于此章节，文本描述：“...琼楼珠树袁宝珠...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...宝珠姓袁氏，宇瑶卿，年十六岁。姑苏人。隶联锦部。善丹青，娴吟咏。其演《鹊桥》、《密誓..."',
        zh: "出场于此章节，文本描述：“...宝珠姓袁氏，宇瑶卿，年十六岁。姑苏人。隶联锦部。善丹青，娴吟咏。其演《鹊桥》、《密誓...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...没有说下去。」王恂问道：「这两人怎样？」春喜道：「好极了，那个琴官，与瑶卿不相上下。那个琪官，与蕊香难定高低。此刻都还没有上台，但一天已有三..."',
        zh: "出场于此章节，文本描述：“...没有说下去。」王恂问道：「这两人怎样？」春喜道：「好极了，那个琴官，与瑶卿不相上下。那个琪官，与蕊香难定高低。此刻都还没有上台，但一天已有三...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...偿而已。史南湘《花选》中的八个名旦日夕来游，子云尽皆珍爱，而尤宠异者惟袁宝珠。这一片钟情爱色之心，却与别人不同，视这些好相公与那奇珍异宝、好..."',
        zh: "出场于此章节，文本描述：“...偿而已。史南湘《花选》中的八个名旦日夕来游，子云尽皆珍爱，而尤宠异者惟袁宝珠。这一片钟情爱色之心，却与别人不同，视这些好相公与那奇珍异宝、好...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...两个，十分赞赏，叹为创见，正与那八个名旦一气相孚，才生了物色的念头。叫袁宝珠改日同他们到园来。又见他们的服饰未美，即连夜制造了几套，赏给了他..."',
        zh: "出场于此章节，文本描述：“...两个，十分赞赏，叹为创见，正与那八个名旦一气相孚，才生了物色的念头。叫袁宝珠改日同他们到园来。又见他们的服饰未美，即连夜制造了几套，赏给了他...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...湘侧耳而听，听这说话诧异，将要问时。王恂笑道：「冤哉！冤哉！那个那里是袁宝珠，那是顶黑的黑相公，偏偏他的名字也叫保珠，庾香一听就当是你定的第..."',
        zh: "出场于此章节，文本描述：“...湘侧耳而听，听这说话诧异，将要问时。王恂笑道：「冤哉！冤哉！那个那里是袁宝珠，那是顶黑的黑相公，偏偏他的名字也叫保珠，庾香一听就当是你定的第...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...倒罢了，只不晓得有琴官的戏没有？」一语未了，只听得楼下有人嚷道：「没有袁宝珠的戏，是断不依的。」..."',
        zh: "出场于此章节，文本描述：“...倒罢了，只不晓得有琴官的戏没有？」一语未了，只听得楼下有人嚷道：「没有袁宝珠的戏，是断不依的。」...”",
      },
    ],
    7: [
      {
        en: 'Features in a scene where the narrative notes: "...湘道：「如此饮酒，罚来罚去，也觉无味。前日我们打了一天诗牌，却极有趣。瑶卿打成两首绝好的，可惜他们今日又在怡园。咱们何不再想一个新鲜酒令。」..."',
        zh: "出场于此章节，文本描述：“...湘道：「如此饮酒，罚来罚去，也觉无味。前日我们打了一天诗牌，却极有趣。瑶卿打成两首绝好的，可惜他们今日又在怡园。咱们何不再想一个新鲜酒令。」...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...。忽见亭子前面太湖石山洞，一对明灯照出一双玉人来。走到面前看时，一个是袁宝珠，一个是金漱芳。仲清问道：「你们藏在那里？」宝珠道：「我们在前面..."',
        zh: "出场于此章节，文本描述：“...。忽见亭子前面太湖石山洞，一对明灯照出一双玉人来。走到面前看时，一个是袁宝珠，一个是金漱芳。仲清问道：「你们藏在那里？」宝珠道：「我们在前面...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...悬着一额，是屈本立写的「宜春阁」三字，一边是陆素兰写的几幅小楷，一边是袁宝珠画的几幅墨兰，中间地上点着一盏仿古鸡足银灯，有四尺高，上面托着个..."',
        zh: "出场于此章节，文本描述：“...悬着一额，是屈本立写的「宜春阁」三字，一边是陆素兰写的几幅小楷，一边是袁宝珠画的几幅墨兰，中间地上点着一盏仿古鸡足银灯，有四尺高，上面托着个...”",
      },
    ],
    10: [
      {
        en: 'Features in a scene where the narrative notes: "...这里袁宝珠用手帕替他擦了泪痕，就将史南湘的醉态，及妆点情形，说得琴言欢喜了..."',
        zh: "出场于此章节，文本描述：“...这里袁宝珠用手帕替他擦了泪痕，就将史南湘的醉态，及妆点情形，说得琴言欢喜了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...据瑶卿说来，与玉侬改了名字，他全然不知，可见素未浃洽。..."',
        zh: "出场于此章节，文本描述：“...据瑶卿说来，与玉侬改了名字，他全然不知，可见素未浃洽。...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...下相公出在京城，京城相公聚在联锦班。史竹君的《曲台花选》，品题最允，如袁宝珠、苏蕙芳等方配称名花，而且诗词书画无一不佳，直可作我辈良友。若翠..."',
        zh: "出场于此章节，文本描述：“...下相公出在京城，京城相公聚在联锦班。史竹君的《曲台花选》，品题最允，如袁宝珠、苏蕙芳等方配称名花，而且诗词书画无一不佳，直可作我辈良友。若翠...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...的相公？」高品想了一会道：「据你说来，不是陆素兰，就是金漱芳，不然就是袁宝珠。」春航道；「金漱芳在联殊班，我见过他的戏，生得瘦瘦儿的，不是。..."',
        zh: "出场于此章节，文本描述：“...的相公？」高品想了一会道：「据你说来，不是陆素兰，就是金漱芳，不然就是袁宝珠。」春航道；「金漱芳在联殊班，我见过他的戏，生得瘦瘦儿的，不是。...”",
      },
    ],
    13: [
      {
        en: 'Features in a scene where the narrative notes: "...话罢了，会作什么诗？」春航道：「原唱呢，为何不写出来？」蕙芳道：「去年袁宝珠替我写了一幅，人家拿去看，遗失了。」春航再将蕙芳细细的看了一看，..."',
        zh: "出场于此章节，文本描述：“...话罢了，会作什么诗？」春航道：「原唱呢，为何不写出来？」蕙芳道：「去年袁宝珠替我写了一幅，人家拿去看，遗失了。」春航再将蕙芳细细的看了一看，...”",
      },
    ],
    14: [
      {
        en: 'Features in a scene where the narrative notes: "...点头说「是」。蕙芳道：「等我想一想象谁？上二句纤腰抱月，星眸妒云，非袁瑶卿不足当此二语。下两句软爱罗轻，娇嫌帐重，非金瘦香却也不称。是他二人..."',
        zh: "出场于此章节，文本描述：“...点头说「是」。蕙芳道：「等我想一想象谁？上二句纤腰抱月，星眸妒云，非袁瑶卿不足当此二语。下两句软爱罗轻，娇嫌帐重，非金瘦香却也不称。是他二人...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...何处来？我今日同了静芳到怡园，他们都在家，留我吃了饭。佩仙也在座，还有瑶卿、瘦香两个。吃完了饭，佩仙家内有人来叫他，度香问起来，方知道是你叫..."',
        zh: "出场于此章节，文本描述：“...何处来？我今日同了静芳到怡园，他们都在家，留我吃了饭。佩仙也在座，还有瑶卿、瘦香两个。吃完了饭，佩仙家内有人来叫他，度香问起来，方知道是你叫...”",
      },
    ],
    15: [
      {
        en: 'Features in a scene where the narrative notes: "...有一日瑶卿在此，我与他说起来，瑶卿便把你们的情节，说了一个透彻。玉侬已后自己..."',
        zh: "出场于此章节，文本描述：“...有一日瑶卿在此，我与他说起来，瑶卿便把你们的情节，说了一个透彻。玉侬已后自己...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...家亦可，但无花园子，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之..."',
        zh: "出场于此章节，文本描述：“...家亦可，但无花园子，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...人一齐出厅迎接，只见子云同了次贤翩翩的，俨似太原公子裼裘而来，后面随着袁宝珠、王兰保二人。再后还有八个清俊书童，拿着衣包、铜盆、漱盂等物。..."',
        zh: "出场于此章节，文本描述：“...人一齐出厅迎接，只见子云同了次贤翩翩的，俨似太原公子裼裘而来，后面随着袁宝珠、王兰保二人。再后还有八个清俊书童，拿着衣包、铜盆、漱盂等物。...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...淋的，也就哭骂出来。他因小脑袋疼痛，也就躲了。琪官回去告诉了师傅，他与袁宝珠相好，又告诉了宝珠，宝珠气极，便进怡园与徐老爷说了。徐老爷就大怒..."',
        zh: "出场于此章节，文本描述：“...淋的，也就哭骂出来。他因小脑袋疼痛，也就躲了。琪官回去告诉了师傅，他与袁宝珠相好，又告诉了宝珠，宝珠气极，便进怡园与徐老爷说了。徐老爷就大怒...”",
      },
    ],
    20: [
      {
        en: 'Features in a scene where the narrative notes: "...惊鸿，婉若游龙』，真觉得摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺而观，则赵飞..."',
        zh: "出场于此章节，文本描述：“...惊鸿，婉若游龙』，真觉得摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺而观，则赵飞...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...媚香，又错了，你不看注指并坐左邻为武松，不是右边的人，怎么把这杯酒敬起瑶卿来？」蕙芳道：「你到底要我敬那一个呢？他不是与我并坐的吗？」宝珠道..."',
        zh: "出场于此章节，文本描述：“...媚香，又错了，你不看注指并坐左邻为武松，不是右边的人，怎么把这杯酒敬起瑶卿来？」蕙芳道：「你到底要我敬那一个呢？他不是与我并坐的吗？」宝珠道...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...』度香正赞湘帆的文章，庾香忽说道：『玉侬自然在玉艳之上，玉艳虽好，尚逊瑶卿、媚香一筹，而玉侬则玉树琼花，似非人间花谱中可以位置。』静宜、度香..."',
        zh: "出场于此章节，文本描述：“...』度香正赞湘帆的文章，庾香忽说道：『玉侬自然在玉艳之上，玉艳虽好，尚逊瑶卿、媚香一筹，而玉侬则玉树琼花，似非人间花谱中可以位置。』静宜、度香...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。素兰只得再三解劝，劝得住了哭，把前日宝珠、蕙芳行的酒令说给琴言听。说瑶卿还罢了，第一媚香尖利不肯吃亏的，偏偏吃了这闷亏；又听得他为潘三缠不..."',
        zh: "出场于此章节，文本描述：“...。素兰只得再三解劝，劝得住了哭，把前日宝珠、蕙芳行的酒令说给琴言听。说瑶卿还罢了，第一媚香尖利不肯吃亏的，偏偏吃了这闷亏；又听得他为潘三缠不...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...五六班凑成的。」仲清道：「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」..."',
        zh: "出场于此章节，文本描述：“...五六班凑成的。」仲清道：「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...没有什么脾气。」玉林道：「讲情性风雅，心地聪敏，不慕势利，意气自豪，是瑶卿。一尘不染，灵慧空明，胸有别才，心怀好胜，是媚香。温文俊雅，出言有..."',
        zh: "出场于此章节，文本描述：“...没有什么脾气。」玉林道：「讲情性风雅，心地聪敏，不慕势利，意气自豪，是瑶卿。一尘不染，灵慧空明，胸有别才，心怀好胜，是媚香。温文俊雅，出言有...”",
      },
    ],
    25: [
      {
        en: 'Features in a scene where the narrative notes: "...，又对华公子请了一安，将牙笏呈上。华公子知道这一班小旦都是子云得意人，袁宝珠更是宠爱，天天在园里的，也就世故起来，便搀住宝珠手道：「你们这本..."',
        zh: "出场于此章节，文本描述：“...，又对华公子请了一安，将牙笏呈上。华公子知道这一班小旦都是子云得意人，袁宝珠更是宠爱，天天在园里的，也就世故起来，便搀住宝珠手道：「你们这本...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...一想，各说了一出。子云道：「此尚非极得意的，只有媚香与香畹的《独占》，瑶卿与玉侬的《惊梦》《寻梦》，都是绝妙无双，人家唱不来的，可惜偏又雷同..."',
        zh: "出场于此章节，文本描述：“...一想，各说了一出。子云道：「此尚非极得意的，只有媚香与香畹的《独占》，瑶卿与玉侬的《惊梦》《寻梦》，都是绝妙无双，人家唱不来的，可惜偏又雷同...”",
      },
    ],
    26: [
      {
        en: 'Features in a scene where the narrative notes: "...，也是徐二老爷钟爱的，听说外边不肯应酬。」华公子道：「徐二老爷钟爱的是袁宝珠，不爱他。」珊枝道：「听见徐二老爷爱他与袁宝珠差不多。又听得说，..."',
        zh: "出场于此章节，文本描述：“...，也是徐二老爷钟爱的，听说外边不肯应酬。」华公子道：「徐二老爷钟爱的是袁宝珠，不爱他。」珊枝道：「听见徐二老爷爱他与袁宝珠差不多。又听得说，...”",
      },
    ],
    27: [
      {
        en: 'Features in a scene where the narrative notes: "...，到他家去看他，倒是从不会客的。就是从前的王吉庆、李春芳，如今红字号的袁宝珠、苏蕙芳，也没有这么大架子。要他中意的，才陪着坐一坐；不中意的，..."',
        zh: "出场于此章节，文本描述：“...，到他家去看他，倒是从不会客的。就是从前的王吉庆、李春芳，如今红字号的袁宝珠、苏蕙芳，也没有这么大架子。要他中意的，才陪着坐一坐；不中意的，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...道：「有什么法想？你忘了他们有个魏聘才，肯赦我这条命么？只有一句，倒是瑶卿害了我了。」素兰道：「怎么说是瑶卿害你？」琴言又淌了些泪，不言语，..."',
        zh: "出场于此章节，文本描述：“...道：「有什么法想？你忘了他们有个魏聘才，肯赦我这条命么？只有一句，倒是瑶卿害了我了。」素兰道：「怎么说是瑶卿害你？」琴言又淌了些泪，不言语，...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...文泽站起来道：「妙，妙！待我来分派。」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的..."',
        zh: "出场于此章节，文本描述：“...文泽站起来道：「妙，妙！待我来分派。」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...这边袁宝珠摊了一幅绢在画案上，左右凝思，画些什么呢？..."',
        zh: "出场于此章节，文本描述：“...这边袁宝珠摊了一幅绢在画案上，左右凝思，画些什么呢？...”",
      },
    ],
    32: [
      {
        en: 'Features in a scene where the narrative notes: "...春航道：「如今世上竟不成事了。你看此中漏网者固多，冤枉者亦复不少。前日瑶卿说，我们同年与他最好，教他画画的那个南京人金粟，本是个名士，性情磊..."',
        zh: "出场于此章节，文本描述：“...春航道：「如今世上竟不成事了。你看此中漏网者固多，冤枉者亦复不少。前日瑶卿说，我们同年与他最好，教他画画的那个南京人金粟，本是个名士，性情磊...”",
      },
    ],
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...他。已经进了城，我想他是常在外边的，忽然不高兴起来，所以转回，恰才遇见瑶卿。」宝珠横波一笑道：「你错了，该去的。就使聘才不在家，你那心里人是..."',
        zh: "出场于此章节，文本描述：“...他。已经进了城，我想他是常在外边的，忽然不高兴起来，所以转回，恰才遇见瑶卿。」宝珠横波一笑道：「你错了，该去的。就使聘才不在家，你那心里人是...”",
      },
    ],
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...过如此。近来有两个人倒很好，叫他也便宜，而且你还可以常使唤他，相貌也与袁宝珠、苏蕙芳相并。」聘才道：「叫什么名字？」子佩道：「一个叫卓天香，..."',
        zh: "出场于此章节，文本描述：“...过如此。近来有两个人倒很好，叫他也便宜，而且你还可以常使唤他，相貌也与袁宝珠、苏蕙芳相并。」聘才道：「叫什么名字？」子佩道：「一个叫卓天香，...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...甚好，但何以单刻这一首，想是新咏。」子云道：「这是玉侬近日怀梅崦的诗，瑶卿抄了他的出来，也是个望梅止渴的意思，我故把他刻了。真是花是人非，吾..."',
        zh: "出场于此章节，文本描述：“...甚好，但何以单刻这一首，想是新咏。」子云道：「这是玉侬近日怀梅崦的诗，瑶卿抄了他的出来，也是个望梅止渴的意思，我故把他刻了。真是花是人非，吾...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...懂了八分，便笑道：「我也来试试，不知灵不灵。」斟了酒，说道：「这杯酒敬瑶卿！」那杯子便对着宝珠走来，走到面前，碰着箸子住了。蕙芳拍手笑道：「..."',
        zh: "出场于此章节，文本描述：“...懂了八分，便笑道：「我也来试试，不知灵不灵。」斟了酒，说道：「这杯酒敬瑶卿！」那杯子便对着宝珠走来，走到面前，碰着箸子住了。蕙芳拍手笑道：「...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...只见众人纷纷的忙乱，伍麻子捧了一包孝衣进来。又见袁宝珠、苏蕙芳、陆素兰来了，琴言即忙招接三人，一同坐下。..."',
        zh: "出场于此章节，文本描述：“...只见众人纷纷的忙乱，伍麻子捧了一包孝衣进来。又见袁宝珠、苏蕙芳、陆素兰来了，琴言即忙招接三人，一同坐下。...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...「很好，就请庾香、玉侬先对起来。」子玉道：「还是你与媚香先对，次度香、瑶卿，次庸奄、蕊香，末后轮到我们罢。」子云道：「也罢，你作个先锋，他作..."',
        zh: "出场于此章节，文本描述：“...「很好，就请庾香、玉侬先对起来。」子玉道：「还是你与媚香先对，次度香、瑶卿，次庸奄、蕊香，末后轮到我们罢。」子云道：「也罢，你作个先锋，他作...”",
      },
    ],
    38: [
      {
        en: 'Features in a scene where the narrative notes: "...用其才，真真可惜。」宝珠忙接道：「何幸此君，今日竟遇知己。」道翁道：「瑶卿与此君相好么？」素兰在旁道：「他的画画弹琴，皆是此君教的。前月他们..."',
        zh: "出场于此章节，文本描述：“...用其才，真真可惜。」宝珠忙接道：「何幸此君，今日竟遇知己。」道翁道：「瑶卿与此君相好么？」素兰在旁道：「他的画画弹琴，皆是此君教的。前月他们...”",
      },
    ],
    43: [
      {
        en: 'Features in a scene where the narrative notes: "...作此义举么？」蕙芳道：「若说力量，原也勉强，但集腑成裘，也还容易。我与瑶卿、香畹三人可以凑得六百金，王氏弟兄、佩仙、庚香可以凑得四百金。」次..."',
        zh: "出场于此章节，文本描述：“...作此义举么？」蕙芳道：「若说力量，原也勉强，但集腑成裘，也还容易。我与瑶卿、香畹三人可以凑得六百金，王氏弟兄、佩仙、庚香可以凑得四百金。」次...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...织、蜂蛛各样的草虫。文泽笑道：「这倒亏你，很有点意思，只怕你学出来，比瑶卿还要好些。」春喜道：「瑶卿近来我有些恨他。他的画自然比我好，但他学..."',
        zh: "出场于此章节，文本描述：“...织、蜂蛛各样的草虫。文泽笑道：「这倒亏你，很有点意思，只怕你学出来，比瑶卿还要好些。」春喜道：「瑶卿近来我有些恨他。他的画自然比我好，但他学...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...把，你落了款罢。」春喜只得落了款，送与文泽。文泽道：「看你这画，已经比瑶卿好了，字也写得好。」春喜道：「瑶卿原只会画兰竹与几笔花卉，山水尚是..."',
        zh: "出场于此章节，文本描述：“...把，你落了款罢。」春喜只得落了款，送与文泽。文泽道：「看你这画，已经比瑶卿好了，字也写得好。」春喜道：「瑶卿原只会画兰竹与几笔花卉，山水尚是...”",
      },
    ],
    53: [
      {
        en: 'Features in a scene where the narrative notes: "...前日的扇子来。那日素兰正在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，..."',
        zh: "出场于此章节，文本描述：“...前日的扇子来。那日素兰正在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，...”",
      },
    ],
    58: [
      {
        en: 'Features in a scene where the narrative notes: "...赏他的，苏州也不及他好。我要买也要不了多少钱。」奚十一也知道这个铺子是袁宝珠、苏蕙芳等开的，却因近日心绪不佳，没有去逛。如今有了盘缠，明日借..."',
        zh: "出场于此章节，文本描述：“...赏他的，苏州也不及他好。我要买也要不了多少钱。」奚十一也知道这个铺子是袁宝珠、苏蕙芳等开的，却因近日心绪不佳，没有去逛。如今有了盘缠，明日借...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...月光满，蓬山路长。既美且都，亦风而雅。学士满宫，首推大舍。 琴仙道：「瑶卿之▉艳韶华，却一齐被静宜画出来，吉甫赞出来了。」宝珠道：「算花神罢..."',
        zh: "出场于此章节，文本描述：“...月光满，蓬山路长。既美且都，亦风而雅。学士满宫，首推大舍。 琴仙道：「瑶卿之▉艳韶华，却一齐被静宜画出来，吉甫赞出来了。」宝珠道：「算花神罢...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...「这个是极妙，但我们的诗配不上他们。且请谁画这些像呢？」蕙芳道：「就是瑶卿，你与小梅两人分画罢，也不必画服饰，不衫不履的最妙。我们今晚先把赞..."',
        zh: "出场于此章节，文本描述：“...「这个是极妙，但我们的诗配不上他们。且请谁画这些像呢？」蕙芳道：「就是瑶卿，你与小梅两人分画罢，也不必画服饰，不衫不履的最妙。我们今晚先把赞...”",
      },
    ],
  },
  "char-24": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...子，自然没有好的了。」子玉再看第二题的是：瑶台璧月苏惠芳惠芳姓苏氏，字媚香，年十七岁。姑苏人。..."',
        zh: "出场于此章节，文本描述：“...子，自然没有好的了。」子玉再看第二题的是：瑶台璧月苏惠芳惠芳姓苏氏，字媚香，年十七岁。姑苏人。...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...是局戏。今日度香要叫我们做诗，出了个《冰床》题目，各人做七律一首，教苏媚香考了第一。」仲清道：「你记得他的诗么？」春喜道：「我只记得他中间四..."',
        zh: "出场于此章节，文本描述：“...是局戏。今日度香要叫我们做诗，出了个《冰床》题目，各人做七律一首，教苏媚香考了第一。」仲清道：「你记得他的诗么？」春喜道：「我只记得他中间四...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...「他肚子里比我们强得多呢！我们如今考起来，只怕媚香还考不过他。」子云听了，更加欢喜，便问琴官道：「你到底念过书没有？..."',
        zh: "出场于此章节，文本描述：“...「他肚子里比我们强得多呢！我们如今考起来，只怕媚香还考不过他。」子云听了，更加欢喜，便问琴官道：「你到底念过书没有？...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...南湘哈哈大笑道：「我也不怪的，幸你自行检举。」文泽道：「怎么？庾香连苏媚香也不认识。」南湘道：「他是秀才不出门，焉知天下事。」少顷《瑶台》唱..."',
        zh: "出场于此章节，文本描述：“...南湘哈哈大笑道：「我也不怪的，幸你自行检举。」文泽道：「怎么？庾香连苏媚香也不认识。」南湘道：「他是秀才不出门，焉知天下事。」少顷《瑶台》唱...”",
      },
    ],
    7: [
      {
        en: 'Features in a scene where the narrative notes: "...话说子玉从会馆回来，将琴官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神..."',
        zh: "出场于此章节，文本描述：“...话说子玉从会馆回来，将琴官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...在京城，京城相公聚在联锦班。史竹君的《曲台花选》，品题最允，如袁宝珠、苏蕙芳等方配称名花，而且诗词书画无一不佳，直可作我辈良友。若翠宝、玉美..."',
        zh: "出场于此章节，文本描述：“...在京城，京城相公聚在联锦班。史竹君的《曲台花选》，品题最允，如袁宝珠、苏蕙芳等方配称名花，而且诗词书画无一不佳，直可作我辈良友。若翠宝、玉美...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...道：「袁宝珠是不大穿素色衣裳的。你说这光景，也不大很像陆素兰。要不然是苏蕙芳，不错的，定是苏媚香，那真是冰壶秋月，清绝无尘，生得不肥不瘦，一..."',
        zh: "出场于此章节，文本描述：“...道：「袁宝珠是不大穿素色衣裳的。你说这光景，也不大很像陆素兰。要不然是苏蕙芳，不错的，定是苏媚香，那真是冰壶秋月，清绝无尘，生得不肥不瘦，一...”",
      },
    ],
    13: [
      {
        en: 'Features in a scene where the narrative notes: "...一日，用了饭，高品拜客去了，春航即到戏园来，一心想着苏蕙芳，又没有钱听戏，只好站在戏园门口，候着那蕙芳出进。将到开戏时候，..."',
        zh: "出场于此章节，文本描述：“...一日，用了饭，高品拜客去了，春航即到戏园来，一心想着苏蕙芳，又没有钱听戏，只好站在戏园门口，候着那蕙芳出进。将到开戏时候，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...红姹紫，▉艳芬芳。上面小小三间客厅，也有钟鼎琴书，十分精雅。不多一刻，苏蕙芳出来，穿一副素色珍珠皮衣服，上前来请安。春航即一把拉住了手，却是..."',
        zh: "出场于此章节，文本描述：“...红姹紫，▉艳芬芳。上面小小三间客厅，也有钟鼎琴书，十分精雅。不多一刻，苏蕙芳出来，穿一副素色珍珠皮衣服，上前来请安。春航即一把拉住了手，却是...”",
      },
    ],
    14: [
      {
        en: 'Features in a scene where the narrative notes: "...品是与他常顽笑的，便把他的帽子揪下，在他顶上摩了一摩，对着蕙芳说道：「媚香，我出副对，给你对对。」即说道：..."',
        zh: "出场于此章节，文本描述：“...品是与他常顽笑的，便把他的帽子揪下，在他顶上摩了一摩，对着蕙芳说道：「媚香，我出副对，给你对对。」即说道：...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...在桌上道：「弹罢！可要焚香？」春航道：「焚香倒是俗套。」高品道：「有了媚香，已经香得簇脑门的了，自然不要焚香。」蕙芳便把高品推过，自己坐在琴..."',
        zh: "出场于此章节，文本描述：“...在桌上道：「弹罢！可要焚香？」春航道：「焚香倒是俗套。」高品道：「有了媚香，已经香得簇脑门的了，自然不要焚香。」蕙芳便把高品推过，自己坐在琴...”",
      },
    ],
    15: [
      {
        en: 'Features in a scene where the narrative notes: "...了，又将春航、蕙芳的光景说了一会。王恂、仲清羡慕不已。仲清道：「不料苏媚香竞能这样，从此田湘帆倒可以收心改过了。」也将前日题画规劝之事说了，..."',
        zh: "出场于此章节，文本描述：“...了，又将春航、蕙芳的光景说了一会。王恂、仲清羡慕不已。仲清道：「不料苏媚香竞能这样，从此田湘帆倒可以收心改过了。」也将前日题画规劝之事说了，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...，大约非玉侬之戏不看，非玉侬的之酒不喝的了。」漱芳笑道：「玉侬行事还没媚香的奇，近来闻他天天到宏济寺去一回。有个什么田湘帆，也是个风流名士，..."',
        zh: "出场于此章节，文本描述：“...，大约非玉侬之戏不看，非玉侬的之酒不喝的了。」漱芳笑道：「玉侬行事还没媚香的奇，近来闻他天天到宏济寺去一回。有个什么田湘帆，也是个风流名士，...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...一过访不遇事说过。先是王恂开言道：「今日我们都在卓然斋中，交会田湘帆与媚香，又遇见竹君前来。那湘帆果是吾辈，与媚香相处的光景，真令人羡慕。」..."',
        zh: "出场于此章节，文本描述：“...一过访不遇事说过。先是王恂开言道：「今日我们都在卓然斋中，交会田湘帆与媚香，又遇见竹君前来。那湘帆果是吾辈，与媚香相处的光景，真令人羡慕。」...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...有一件极好的事，来与你商量。」子玉便问道：「何事？」高品道：「十五日是媚香生日。今日大家商议，并订前舟与你合成一剂六君子汤，凑一公分，找个宽..."',
        zh: "出场于此章节，文本描述：“...有一件极好的事，来与你商量。」子玉便问道：「何事？」高品道：「十五日是媚香生日。今日大家商议，并订前舟与你合成一剂六君子汤，凑一公分，找个宽...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...渐觉红晕起来，便自己怔了半天，发恨道：「索性留他，我若怕了他，我也不叫苏蕙芳了。」便道：「三爷你不喝酒，饭是要吃的。」潘三便点点头，蕙芳便亲..."',
        zh: "出场于此章节，文本描述：“...渐觉红晕起来，便自己怔了半天，发恨道：「索性留他，我若怕了他，我也不叫苏蕙芳了。」便道：「三爷你不喝酒，饭是要吃的。」潘三便点点头，蕙芳便亲...”",
      },
    ],
    20: [
      {
        en: 'Features in a scene where the narrative notes: "...之赞语『翩若惊鸿，婉若游龙』，真觉得摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺..."',
        zh: "出场于此章节，文本描述：“...之赞语『翩若惊鸿，婉若游龙』，真觉得摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...不住。众人哄然皆笑起来。蕙芳弄得没法，放下杯子，自己也笑了。次贤道：「媚香，又错了，你不看注指并坐左邻为武松，不是右边的人，怎么把这杯酒敬起..."',
        zh: "出场于此章节，文本描述：“...不住。众人哄然皆笑起来。蕙芳弄得没法，放下杯子，自己也笑了。次贤道：「媚香，又错了，你不看注指并坐左邻为武松，不是右边的人，怎么把这杯酒敬起...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...「什么笑话？你快快说罢。」素兰道：「媚香的生日，田湘帆做了一篇小序，大家说做得好，度香便抄了。那一天，庾香..."',
        zh: "出场于此章节，文本描述：“...「什么笑话？你快快说罢。」素兰道：「媚香的生日，田湘帆做了一篇小序，大家说做得好，度香便抄了。那一天，庾香...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...劝，劝得住了哭，把前日宝珠、蕙芳行的酒令说给琴言听。说瑶卿还罢了，第一媚香尖利不肯吃亏的，偏偏吃了这闷亏；又听得他为潘三缠不清楚，媚香却不肯..."',
        zh: "出场于此章节，文本描述：“...劝，劝得住了哭，把前日宝珠、蕙芳行的酒令说给琴言听。说瑶卿还罢了，第一媚香尖利不肯吃亏的，偏偏吃了这闷亏；又听得他为潘三缠不清楚，媚香却不肯...”",
      },
    ],
    22: [
      {
        en: 'Features in a scene where the narrative notes: "...便道：「这些蠢人，看他作什么？」素兰指着那下手坐的那一个道：「这就是与媚香缠扰的潘三。」琴言道：「哎哟！这个样子，亏媚香认识他，倒又怎么能哄..."',
        zh: "出场于此章节，文本描述：“...便道：「这些蠢人，看他作什么？」素兰指着那下手坐的那一个道：「这就是与媚香缠扰的潘三。」琴言道：「哎哟！这个样子，亏媚香认识他，倒又怎么能哄...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...出门。」仲清道：「我昨日听得张仲雨讲的，有个开银号的潘三，从三月间想买苏蕙芳作干儿子。头一回是拉着张老二同去缠扰媚香，没有法儿，媚香故意殷殷..."',
        zh: "出场于此章节，文本描述：“...出门。」仲清道：「我昨日听得张仲雨讲的，有个开银号的潘三，从三月间想买苏蕙芳作干儿子。头一回是拉着张老二同去缠扰媚香，没有法儿，媚香故意殷殷...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...绝无翳障，以此观庾香、琴言之情，正是极深极正，就在人人之上了。若湘帆、媚香之情，较之庾香、琴言，又将何如呢？」..."',
        zh: "出场于此章节，文本描述：“...绝无翳障，以此观庾香、琴言之情，正是极深极正，就在人人之上了。若湘帆、媚香之情，较之庾香、琴言，又将何如呢？」...”",
      },
    ],
    25: [
      {
        en: 'Features in a scene where the narrative notes: "...出来。」四旦听了，想了一想，各说了一出。子云道：「此尚非极得意的，只有媚香与香畹的《独占》，瑶卿与玉侬的《惊梦》《寻梦》，都是绝妙无双，人家..."',
        zh: "出场于此章节，文本描述：“...出来。」四旦听了，想了一想，各说了一出。子云道：「此尚非极得意的，只有媚香与香畹的《独占》，瑶卿与玉侬的《惊梦》《寻梦》，都是绝妙无双，人家...”",
      },
    ],
    26: [
      {
        en: 'Features in a scene where the narrative notes: "...鬟侍立两旁。公子见夫人淡扫蛾眉，薄施脂粉，双鬟腻绿，高髻盘云，很有些那苏蕙芳的相貌，便坐下了，讲了些闲话，说在夫人房里吃饭，把昨日看的戏一一..."',
        zh: "出场于此章节，文本描述：“...鬟侍立两旁。公子见夫人淡扫蛾眉，薄施脂粉，双鬟腻绿，高髻盘云，很有些那苏蕙芳的相貌，便坐下了，讲了些闲话，说在夫人房里吃饭，把昨日看的戏一一...”",
      },
    ],
    27: [
      {
        en: 'Features in a scene where the narrative notes: "...去看他，倒是从不会客的。就是从前的王吉庆、李春芳，如今红字号的袁宝珠、苏蕙芳，也没有这么大架子。要他中意的，才陪着坐一坐；不中意的，简直的不..."',
        zh: "出场于此章节，文本描述：“...去看他，倒是从不会客的。就是从前的王吉庆、李春芳，如今红字号的袁宝珠、苏蕙芳，也没有这么大架子。要他中意的，才陪着坐一坐；不中意的，简直的不...”",
      },
    ],
    30: [
      {
        en: 'Features in a scene where the narrative notes: "...文泽见了便道：「待我说罢。」蕙芳对着文泽丢了个眼色，这边张仲雨笑道：「媚香，今日人多嘴杂，你就要掩人的口，也掩不住这许多。」蕙芳道：「要掩人..."',
        zh: "出场于此章节，文本描述：“...文泽见了便道：「待我说罢。」蕙芳对着文泽丢了个眼色，这边张仲雨笑道：「媚香，今日人多嘴杂，你就要掩人的口，也掩不住这许多。」蕙芳道：「要掩人...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...默默无言，子云与文泽站起来道：「妙，妙！待我来分派。」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，..."',
        zh: "出场于此章节，文本描述：“...默默无言，子云与文泽站起来道：「妙，妙！待我来分派。」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...内，一直走到里面。只听高品一片笑声，夹着些燕语莺声在内。到春航斋中，见苏蕙芳、李玉林在内。高品、春航见了四人进来，不胜欢喜，让坐了，苏、李二..."',
        zh: "出场于此章节，文本描述：“...内，一直走到里面。只听高品一片笑声，夹着些燕语莺声在内。到春航斋中，见苏蕙芳、李玉林在内。高品、春航见了四人进来，不胜欢喜，让坐了，苏、李二...”",
      },
    ],
    32: [
      {
        en: 'Features in a scene where the narrative notes: "...心事来。春航叹了一口气道：「我的名心原淡，中不中倒也无妨，就是对不住苏媚香，半年期望之心白白孤负了。科名虽不足贵，但古今名士才人，断无不从科..."',
        zh: "出场于此章节，文本描述：“...心事来。春航叹了一口气道：「我的名心原淡，中不中倒也无妨，就是对不住苏媚香，半年期望之心白白孤负了。科名虽不足贵，但古今名士才人，断无不从科...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...却说苏蕙芳惦记春航，亦复一夜不能安睡，比到起身时，已是巳正时候，连忙梳洗，..."',
        zh: "出场于此章节，文本描述：“...却说苏蕙芳惦记春航，亦复一夜不能安睡，比到起身时，已是巳正时候，连忙梳洗，...”",
      },
    ],
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...近来有两个人倒很好，叫他也便宜，而且你还可以常使唤他，相貌也与袁宝珠、苏蕙芳相并。」聘才道：「叫什么名字？」子佩道：「一个叫卓天香，一个叫张..."',
        zh: "出场于此章节，文本描述：“...近来有两个人倒很好，叫他也便宜，而且你还可以常使唤他，相貌也与袁宝珠、苏蕙芳相并。」聘才道：「叫什么名字？」子佩道：「一个叫卓天香，一个叫张...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...于是也把座子下看了一遍，斟了酒，说道：「敬媚香一杯！」那杯错走到子玉面前，引得众人大笑。子云笑道：「真有些古怪，..."',
        zh: "出场于此章节，文本描述：“...于是也把座子下看了一遍，斟了酒，说道：「敬媚香一杯！」那杯错走到子玉面前，引得众人大笑。子云笑道：「真有些古怪，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。」飞到子玉。子玉喝了酒，道：「已经十二了，还要飞吗？」次贤道：「座中媚香还没有轮到。轮到了他，我们再换令罢。如今只可飞十三了。」子玉飞出一..."',
        zh: "出场于此章节，文本描述：“...。」飞到子玉。子玉喝了酒，道：「已经十二了，还要飞吗？」次贤道：「座中媚香还没有轮到。轮到了他，我们再换令罢。如今只可飞十三了。」子玉飞出一...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...只见众人纷纷的忙乱，伍麻子捧了一包孝衣进来。又见袁宝珠、苏蕙芳、陆素兰来了，琴言即忙招接三人，一同坐下。..."',
        zh: "出场于此章节，文本描述：“...只见众人纷纷的忙乱，伍麻子捧了一包孝衣进来。又见袁宝珠、苏蕙芳、陆素兰来了，琴言即忙招接三人，一同坐下。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...且把东西赏他，或者他受了赏，回心转意也未可定。」潘三想道：「这孩子比苏蕙芳更强，可惜我没有带结票子来赏他，或他得了钱就巴结我，也未可知。」..."',
        zh: "出场于此章节，文本描述：“...且把东西赏他，或者他受了赏，回心转意也未可定。」潘三想道：「这孩子比苏蕙芳更强，可惜我没有带结票子来赏他，或他得了钱就巴结我，也未可知。」...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...东西作怪，何不拿他来割掉了，也就安分了。」王恂笑道：「这倒不容易，除非媚香肯行苦肉计方可。」蕙芳道：「你何不行一回？」王恂道：「我与他无怨无..."',
        zh: "出场于此章节，文本描述：“...东西作怪，何不拿他来割掉了，也就安分了。」王恂笑道：「这倒不容易，除非媚香肯行苦肉计方可。」蕙芳道：「你何不行一回？」王恂道：「我与他无怨无...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...次贤道：「很好，就请庾香、玉侬先对起来。」子玉道：「还是你与媚香先对，次度香、瑶卿，次庸奄、蕊香，末后轮到我们罢。」子云道：「也罢..."',
        zh: "出场于此章节，文本描述：“...次贤道：「很好，就请庾香、玉侬先对起来。」子玉道：「还是你与媚香先对，次度香、瑶卿，次庸奄、蕊香，末后轮到我们罢。」子云道：「也罢...”",
      },
    ],
    38: [
      {
        en: 'Features in a scene where the narrative notes: "...素兰在西，一一坐了。主人让酒，客皆饮了几杯。道生道：「我将前日先见的苏媚香谈起。」西席的人个个细听。道生道：「我这看相不论气色，部位是要论的..."',
        zh: "出场于此章节，文本描述：“...素兰在西，一一坐了。主人让酒，客皆饮了几杯。道生道：「我将前日先见的苏媚香谈起。」西席的人个个细听。道生道：「我这看相不论气色，部位是要论的...”",
      },
    ],
    43: [
      {
        en: 'Features in a scene where the narrative notes: "...，所以没有对人讲起。」宝珠道：「你说佩服的是谁？」素兰道：「那一天我与媚香闲谈，偶然讲起玉侬来，媚香说他师娘…」素兰说到此，便从窗外望了一望..."',
        zh: "出场于此章节，文本描述：“...，所以没有对人讲起。」宝珠道：「你说佩服的是谁？」素兰道：「那一天我与媚香闲谈，偶然讲起玉侬来，媚香说他师娘…」素兰说到此，便从窗外望了一望...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...俯首若思。子云颇觉诧异，见他是倜傥诙谐惯的，何以忽然如此。次贤问道：「媚香有什么心事么？」蕙芳道：「没有。」子云道：「方才很高兴的，此刻为何..."',
        zh: "出场于此章节，文本描述：“...俯首若思。子云颇觉诧异，见他是倜傥诙谐惯的，何以忽然如此。次贤问道：「媚香有什么心事么？」蕙芳道：「没有。」子云道：「方才很高兴的，此刻为何...”",
      },
    ],
    44: [
      {
        en: 'Features in a scene where the narrative notes: "...管总的叫我去到日新银号，开了一张二千四百两的银票，又一张五十两的，交与苏蕙芳，替琴言出师的。方才我们在路上，还见他同蕙芳坐在一车，又到我们园..."',
        zh: "出场于此章节，文本描述：“...管总的叫我去到日新银号，开了一张二千四百两的银票，又一张五十两的，交与苏蕙芳，替琴言出师的。方才我们在路上，还见他同蕙芳坐在一车，又到我们园...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...云对次贤道：「这两天竹君、湘帆都在那里抱佛脚呢。湘帆无怪乎其然，他要在媚香跟着争个脸。竹君也坐得定能写字作文，可见功名心切，是人人不免的。」..."',
        zh: "出场于此章节，文本描述：“...云对次贤道：「这两天竹君、湘帆都在那里抱佛脚呢。湘帆无怪乎其然，他要在媚香跟着争个脸。竹君也坐得定能写字作文，可见功名心切，是人人不免的。」...”",
      },
    ],
    48: [
      {
        en: 'Features in a scene where the narrative notes: "...比起去年春间的春航来，就天壤之别了。这春航偏是姓苏的与他有缘。去年亏了苏蕙芳遂了他的心愿，本以风月因缘，倒成了道义肝胆，使春航一腔感激，不得..."',
        zh: "出场于此章节，文本描述：“...比起去年春间的春航来，就天壤之别了。这春航偏是姓苏的与他有缘。去年亏了苏蕙芳遂了他的心愿，本以风月因缘，倒成了道义肝胆，使春航一腔感激，不得...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...杯罢。」一面把船荡到练秋阁前，南湘道：「去年静宜有个《水浒传》的酒令，媚香掣着了《潘金莲雪天戏叔》，媚香那个神色，再没有这么好笑，不料湘帆今..."',
        zh: "出场于此章节，文本描述：“...杯罢。」一面把船荡到练秋阁前，南湘道：「去年静宜有个《水浒传》的酒令，媚香掣着了《潘金莲雪天戏叔》，媚香那个神色，再没有这么好笑，不料湘帆今...”",
      },
    ],
    49: [
      {
        en: 'Features in a scene where the narrative notes: "...话我此时对你讲，你必不信。如成了，你一见面，就明白他姊妹二人相貌，与苏媚香真是一模一样。大世妹还只有七分相像，二世妹竟有九分，比媚香还要娇柔..."',
        zh: "出场于此章节，文本描述：“...话我此时对你讲，你必不信。如成了，你一见面，就明白他姊妹二人相貌，与苏媚香真是一模一样。大世妹还只有七分相像，二世妹竟有九分，比媚香还要娇柔...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...满脸通红，说道：「岂有此理，吾兄怎么讲起这些顽话来。弟固不足惜，兄应为媚香留一地步。」子云笑道：「这是他的话，关我甚事？」春航笑道：「吾兄也..."',
        zh: "出场于此章节，文本描述：“...满脸通红，说道：「岂有此理，吾兄怎么讲起这些顽话来。弟固不足惜，兄应为媚香留一地步。」子云笑道：「这是他的话，关我甚事？」春航笑道：「吾兄也...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...要猜疑。」文泽道：「可不是？庾香与湘帆比起来，正是苦乐不同。湘帆非但与媚香朝夕相亲，如今又对了阔亲，偏偏又是个姓苏的，而且才貌双全。你道湘帆..."',
        zh: "出场于此章节，文本描述：“...要猜疑。」文泽道：「可不是？庾香与湘帆比起来，正是苦乐不同。湘帆非但与媚香朝夕相亲，如今又对了阔亲，偏偏又是个姓苏的，而且才貌双全。你道湘帆...”",
      },
    ],
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...苏蕙芳一会儿走了来，又被张仲雨叫了去账房帮忙，倒比别人还忙些。..."',
        zh: "出场于此章节，文本描述：“...苏蕙芳一会儿走了来，又被张仲雨叫了去账房帮忙，倒比别人还忙些。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...夫头儿，纷纷搬运。张仲雨跑过来，跑过去，指这样，说那样。门外人声嘈杂，苏蕙芳发赏封，上号簿，一个人那里打发得开，又叫了兰保、素兰来相帮，足足..."',
        zh: "出场于此章节，文本描述：“...夫头儿，纷纷搬运。张仲雨跑过来，跑过去，指这样，说那样。门外人声嘈杂，苏蕙芳发赏封，上号簿，一个人那里打发得开，又叫了兰保、素兰来相帮，足足...”",
      },
    ],
    58: [
      {
        en: 'Features in a scene where the narrative notes: "...苏州也不及他好。我要买也要不了多少钱。」奚十一也知道这个铺子是袁宝珠、苏蕙芳等开的，却因近日心绪不佳，没有去逛。如今有了盘缠，明日借此可以逛..."',
        zh: "出场于此章节，文本描述：“...苏州也不及他好。我要买也要不了多少钱。」奚十一也知道这个铺子是袁宝珠、苏蕙芳等开的，却因近日心绪不佳，没有去逛。如今有了盘缠，明日借此可以逛...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...闲话，奚十一便问大傻子，那些相公在什么地方。大傻道：「今日就只王兰官、苏蕙芳在家，其余都出门去了。」奚十一道：「我要看看花，你同我们去。」大..."',
        zh: "出场于此章节，文本描述：“...闲话，奚十一便问大傻子，那些相公在什么地方。大傻道：「今日就只王兰官、苏蕙芳在家，其余都出门去了。」奚十一道：「我要看看花，你同我们去。」大...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...心香吐萼，意蕊含苞。曰富曰康，如宾如友。妻子好合，父母眉寿。 第八首是苏蕙芳题的《仙中华品》：..."',
        zh: "出场于此章节，文本描述：“...心香吐萼，意蕊含苞。曰富曰康，如宾如友。妻子好合，父母眉寿。 第八首是苏蕙芳题的《仙中华品》：...”",
      },
    ],
  },
  "char-25": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...碧海珊枝陆素兰素兰姓陆氏，宇香畹，年十六岁。姑苏人。..."',
        zh: "出场于此章节，文本描述：“...碧海珊枝陆素兰素兰姓陆氏，宇香畹，年十六岁。姑苏人。...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...呢？」大家都微笑看着子玉，子玉有口难辩，不觉脸红起来。这出唱过，又看了陆素兰的《舞盘》、金漱芳的《题曲》、李玉林的《偷诗》，都是无上上品，香..."',
        zh: "出场于此章节，文本描述：“...呢？」大家都微笑看着子玉，子玉有口难辩，不觉脸红起来。这出唱过，又看了陆素兰的《舞盘》、金漱芳的《题曲》、李玉林的《偷诗》，都是无上上品，香...”",
      },
    ],
    7: [
      {
        en: 'Features in a scene where the narrative notes: "...从会馆回来，将琴官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神色尤胜于..."',
        zh: "出场于此章节，文本描述：“...从会馆回来，将琴官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神色尤胜于...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...，金鼎铜壶，斑然可爱。正中悬着一额，是屈本立写的「宜春阁」三字，一边是陆素兰写的几幅小楷，一边是袁宝珠画的几幅墨兰，中间地上点着一盏仿古鸡足..."',
        zh: "出场于此章节，文本描述：“...，金鼎铜壶，斑然可爱。正中悬着一额，是屈本立写的「宜春阁」三字，一边是陆素兰写的几幅小楷，一边是袁宝珠画的几幅墨兰，中间地上点着一盏仿古鸡足...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...，还是我说谎的么？」又指着两边的书画道：「你再看看，这是瑶卿画的，那是香畹写的，你看外边那班假名士，能够如这班真相公吗？」..."',
        zh: "出场于此章节，文本描述：“...，还是我说谎的么？」又指着两边的书画道：「你再看看，这是瑶卿画的，那是香畹写的，你看外边那班假名士，能够如这班真相公吗？」...”",
      },
    ],
    10: [
      {
        en: 'Features in a scene where the narrative notes: "...是他不是他？」琴言呆呆的想了半晌，又问宝珠道：「他的相貌可同我们班里陆香畹差不多？就只眼睛长些，觉得光彩照人；鼻子直些，觉得满面秀气，是不是..."',
        zh: "出场于此章节，文本描述：“...是他不是他？」琴言呆呆的想了半晌，又问宝珠道：「他的相貌可同我们班里陆香畹差不多？就只眼睛长些，觉得光彩照人；鼻子直些，觉得满面秀气，是不是...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...了，问道：「你可识得是那一班的相公？」高品想了一会道：「据你说来，不是陆素兰，就是金漱芳，不然就是袁宝珠。」春航道；「金漱芳在联殊班，我见过..."',
        zh: "出场于此章节，文本描述：“...了，问道：「你可识得是那一班的相公？」高品想了一会道：「据你说来，不是陆素兰，就是金漱芳，不然就是袁宝珠。」春航道；「金漱芳在联殊班，我见过...”",
      },
    ],
    15: [
      {
        en: 'Features in a scene where the narrative notes: "...喜欢。南湘道：「那里去？我还没有吃饭，对门不是妙香堂素兰家么，咱们就找香畹去。」文泽道：「只怕也未必在家。叫人去问一问。「素兰却好在家，里头..."',
        zh: "出场于此章节，文本描述：“...喜欢。南湘道：「那里去？我还没有吃饭，对门不是妙香堂素兰家么，咱们就找香畹去。」文泽道：「只怕也未必在家。叫人去问一问。「素兰却好在家，里头...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...「你可看得出香畹像谁？」文泽道；「像庾香，我第一回见庾香，我就要说他，因为他面嫩，..."',
        zh: "出场于此章节，文本描述：“...「你可看得出香畹像谁？」文泽道；「像庾香，我第一回见庾香，我就要说他，因为他面嫩，...”",
      },
    ],
    16: [
      {
        en: 'Features in a scene where the narrative notes: "...门也未去，不知玉依在家不在家？」素兰叹口气不言语，子玉心疑，便问道：「香畹因何不快？」素兰道：「我自己倒没有什么不快，我想起你心上人，你们背..."',
        zh: "出场于此章节，文本描述：“...门也未去，不知玉依在家不在家？」素兰叹口气不言语，子玉心疑，便问道：「香畹因何不快？」素兰道：「我自己倒没有什么不快，我想起你心上人，你们背...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...，但无花园子，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不..."',
        zh: "出场于此章节，文本描述：“...，但无花园子，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...鞠跽前来。」文泽道：「此亦同人盛举，瞻仰倾城，为借花献佛耳。」说话间，陆素兰、李玉林、金漱芳同到，随后高、史、颜、王四人偕来，蕙劳一一都谢了..."',
        zh: "出场于此章节，文本描述：“...鞠跽前来。」文泽道：「此亦同人盛举，瞻仰倾城，为借花献佛耳。」说话间，陆素兰、李玉林、金漱芳同到，随后高、史、颜、王四人偕来，蕙劳一一都谢了...”",
      },
    ],
    20: [
      {
        en: 'Features in a scene where the narrative notes: "...摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺而观，则赵飞燕之掌上舞，张静婉之帐中..."',
        zh: "出场于此章节，文本描述：“...摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺而观，则赵飞燕之掌上舞，张静婉之帐中...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...用是用不着他们，但劝是要劝的。」子云带笑饮了一杯，又将一杯对素兰道：「香畹你是个好人，你莫要学那阎婆惜，心上只记着张三郎，不瞅不睬的，你且饮..."',
        zh: "出场于此章节，文本描述：“...用是用不着他们，但劝是要劝的。」子云带笑饮了一杯，又将一杯对素兰道：「香畹你是个好人，你莫要学那阎婆惜，心上只记着张三郎，不瞅不睬的，你且饮...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...上加病。他若晓得我病，你就不必瞒他，只说我的病不要紧，几天就好的。你说香畹这个最好的，常可以找他去谈谈，只要郁闷一开，自然好得快了。」这句话..."',
        zh: "出场于此章节，文本描述：“...上加病。他若晓得我病，你就不必瞒他，只说我的病不要紧，几天就好的。你说香畹这个最好的，常可以找他去谈谈，只要郁闷一开，自然好得快了。」这句话...”",
      },
    ],
    22: [
      {
        en: 'Features in a scene where the narrative notes: "...话说前回书中，陆素兰应许了琴言约子玉出来相会，话便说了这一句，明日恰好是端午，是没有..."',
        zh: "出场于此章节，文本描述：“...话说前回书中，陆素兰应许了琴言约子玉出来相会，话便说了这一句，明日恰好是端午，是没有...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...子云、次贤笔迹，因想道：「或是叫书童写的也未可知。即拆开一看，第一行是陆素兰谨启，庾香公子吟坛云云。」心中倒觉跳了一跳，香畹何故作札来，莫非..."',
        zh: "出场于此章节，文本描述：“...子云、次贤笔迹，因想道：「或是叫书童写的也未可知。即拆开一看，第一行是陆素兰谨启，庾香公子吟坛云云。」心中倒觉跳了一跳，香畹何故作札来，莫非...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...了相，在外边很不安分：闹了春阳馆，送了掌柜的，打了二十还不要紧。又听得陆素兰对人说，魏聘才买出华公府一个车夫，一个三小子，去糟蹋琴言，直骂了..."',
        zh: "出场于此章节，文本描述：“...了相，在外边很不安分：闹了春阳馆，送了掌柜的，打了二十还不要紧。又听得陆素兰对人说，魏聘才买出华公府一个车夫，一个三小子，去糟蹋琴言，直骂了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。」仲清道：「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这..."',
        zh: "出场于此章节，文本描述：“...。」仲清道：「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这...”",
      },
    ],
    25: [
      {
        en: 'Features in a scene where the narrative notes: "...」四旦听了，想了一想，各说了一出。子云道：「此尚非极得意的，只有媚香与香畹的《独占》，瑶卿与玉侬的《惊梦》《寻梦》，都是绝妙无双，人家唱不来..."',
        zh: "出场于此章节，文本描述：“...」四旦听了，想了一想，各说了一出。子云道：「此尚非极得意的，只有媚香与香畹的《独占》，瑶卿与玉侬的《惊梦》《寻梦》，都是绝妙无双，人家唱不来...”",
      },
    ],
    27: [
      {
        en: 'Features in a scene where the narrative notes: "...且说陆素兰来，见了琴言问道：「何事？」只见琴言又是娇啼满面，歪倒在炕上。素..."',
        zh: "出场于此章节，文本描述：“...且说陆素兰来，见了琴言问道：「何事？」只见琴言又是娇啼满面，歪倒在炕上。素...”",
      },
    ],
    28: [
      {
        en: 'Features in a scene where the narrative notes: "...子玉道：「今日实不料香畹处尚有佳客。」兰保道：「这就是你的小姨子，你们会过亲没有？」子玉道..."',
        zh: "出场于此章节，文本描述：“...子玉道：「今日实不料香畹处尚有佳客。」兰保道：「这就是你的小姨子，你们会过亲没有？」子玉道...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...告诉你，你且坐稳了。静芳、玉艳，你两个扶住了他，待我再说。」子玉道：「香畹一向直爽，今日何故作这些态度？想来也没有什么奇事，故作惊人之语耳。..."',
        zh: "出场于此章节，文本描述：“...告诉你，你且坐稳了。静芳、玉艳，你两个扶住了他，待我再说。」子玉道：「香畹一向直爽，今日何故作这些态度？想来也没有什么奇事，故作惊人之语耳。...”",
      },
    ],
    29: [
      {
        en: 'Features in a scene where the narrative notes: "...又哽咽了，喉咙叫不出来，只把手拍他。那子玉忽然睁开眼来，对着琴言道：「香畹，这回又亏了你，费了如此的心，我以后便放了心了。」琴言又往前凑了一..."',
        zh: "出场于此章节，文本描述：“...又哽咽了，喉咙叫不出来，只把手拍他。那子玉忽然睁开眼来，对着琴言道：「香畹，这回又亏了你，费了如此的心，我以后便放了心了。」琴言又往前凑了一...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品..."',
        zh: "出场于此章节，文本描述：“...」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...花部中曾受业于香雪者，现有四人：袁宝珠、王桂保、金漱芳、陆素兰，或学画，或学诗，皆为高弟，此四人也共凑百金，连蕙芳的共有四百金..."',
        zh: "出场于此章节，文本描述：“...花部中曾受业于香雪者，现有四人：袁宝珠、王桂保、金漱芳、陆素兰，或学画，或学诗，皆为高弟，此四人也共凑百金，连蕙芳的共有四百金...”",
      },
    ],
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...日我倒得了两样菜，不晓得你肯赏脸在这里吃饭么？若肯在这里吃饭，我便约了香畹来，大家叙叙。」..."',
        zh: "出场于此章节，文本描述：“...日我倒得了两样菜，不晓得你肯赏脸在这里吃饭么？若肯在这里吃饭，我便约了香畹来，大家叙叙。」...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...吃饭回去就迟了。前日这么大雪，你想必积了些雪水，我们何不煮雪烹茶，请了香畹来作个清谈雅会，不好吗？」宝珠笑道：「很好，到底你总与别人不同。」..."',
        zh: "出场于此章节，文本描述：“...吃饭回去就迟了。前日这么大雪，你想必积了些雪水，我们何不煮雪烹茶，请了香畹来作个清谈雅会，不好吗？」宝珠笑道：「很好，到底你总与别人不同。」...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...喝酒。又飞三字，一轮到十二为止。错者罚酒，可好么？」众人都说：「好。」陆素兰与金漱芳等道：「这个苦了我们，搜索枯肠，那里就有这些凑巧数目飞出..."',
        zh: "出场于此章节，文本描述：“...喝酒。又飞三字，一轮到十二为止。错者罚酒，可好么？」众人都说：「好。」陆素兰与金漱芳等道：「这个苦了我们，搜索枯肠，那里就有这些凑巧数目飞出...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...：「也不容易，幸亏我们的曲子，还有几枝在肚里。」子云谓次贤道：「索性叫香畹、佩仙坐到这里来，好在一处掷骰，我们与他二人换个坐儿。」次贤、子次..."',
        zh: "出场于此章节，文本描述：“...：「也不容易，幸亏我们的曲子，还有几枝在肚里。」子云谓次贤道：「索性叫香畹、佩仙坐到这里来，好在一处掷骰，我们与他二人换个坐儿。」次贤、子次...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...只见众人纷纷的忙乱，伍麻子捧了一包孝衣进来。又见袁宝珠、苏蕙芳、陆素兰来了，琴言即忙招接三人，一同坐下。..."',
        zh: "出场于此章节，文本描述：“...只见众人纷纷的忙乱，伍麻子捧了一包孝衣进来。又见袁宝珠、苏蕙芳、陆素兰来了，琴言即忙招接三人，一同坐下。...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...回见面。」子玉道：「正是，我却出来过几次，总没有见你。」宝珠道：「今日香畹与静芳苦了，处处有他们的戏，是再不能来了。」子云道：「我算有六七人..."',
        zh: "出场于此章节，文本描述：“...回见面。」子玉道：「正是，我却出来过几次，总没有见你。」宝珠道：「今日香畹与静芳苦了，处处有他们的戏，是再不能来了。」子云道：「我算有六七人...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...约了明日。到明日又添了文泽、春航，名旦中也添了几个，又在怡园叙了一日。陆素兰单请子玉、琴言二人，又叙了一日，这一日清谈小叙，更为有趣。一连叙..."',
        zh: "出场于此章节，文本描述：“...约了明日。到明日又添了文泽、春航，名旦中也添了几个，又在怡园叙了一日。陆素兰单请子玉、琴言二人，又叙了一日，这一日清谈小叙，更为有趣。一连叙...”",
      },
    ],
    42: [
      {
        en: 'Features in a scene where the narrative notes: "...重新躺下，思前想后，毫无主意。伤心了一会，又想道：「我每逢想不透的，经香畹一说就明白了，此事非与他商量不可。」主意定了，带了跟他的小孩子，随..."',
        zh: "出场于此章节，文本描述：“...重新躺下，思前想后，毫无主意。伤心了一会，又想道：「我每逢想不透的，经香畹一说就明白了，此事非与他商量不可。」主意定了，带了跟他的小孩子，随...”",
      },
    ],
    43: [
      {
        en: 'Features in a scene where the narrative notes: "...，咱们又会少离多了。」琴言道：「近来倒有件难事，我竟没有主意，故请你与香畹来商量，怎么代我想个法儿才好。」宝珠道：「什么难事，你且说来。但你..."',
        zh: "出场于此章节，文本描述：“...，咱们又会少离多了。」琴言道：「近来倒有件难事，我竟没有主意，故请你与香畹来商量，怎么代我想个法儿才好。」宝珠道：「什么难事，你且说来。但你...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...举么？」蕙芳道：「若说力量，原也勉强，但集腑成裘，也还容易。我与瑶卿、香畹三人可以凑得六百金，王氏弟兄、佩仙、庚香可以凑得四百金。」次贤道：..."',
        zh: "出场于此章节，文本描述：“...举么？」蕙芳道：「若说力量，原也勉强，但集腑成裘，也还容易。我与瑶卿、香畹三人可以凑得六百金，王氏弟兄、佩仙、庚香可以凑得四百金。」次贤道：...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...，王树琪花列两行。 十树琼花十样锦，春风喜气满华堂。 众人道：「首句是香畹，次句是佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有..."',
        zh: "出场于此章节，文本描述：“...，王树琪花列两行。 十树琼花十样锦，春风喜气满华堂。 众人道：「首句是香畹，次句是佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有...”",
      },
    ],
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...「好词。这扇子那里来的？」公子道：「是陆素兰的。我爱这首词，所以带了他回来。」华夫人道：「这首词甚好，但不像..."',
        zh: "出场于此章节，文本描述：“...「好词。这扇子那里来的？」公子道：「是陆素兰的。我爱这首词，所以带了他回来。」华夫人道：「这首词甚好，但不像...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...日芙蓉。素面风流，是为绝艳，仙殆莲花化身者欤？ 琴仙笑道：「这几句倒比香畹的小照还画得像些。这『紫绡衣行吟风露间，』与『莲花化身』之说，却移..."',
        zh: "出场于此章节，文本描述：“...日芙蓉。素面风流，是为绝艳，仙殆莲花化身者欤？ 琴仙笑道：「这几句倒比香畹的小照还画得像些。这『紫绡衣行吟风露间，』与『莲花化身』之说，却移...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...庄严妙相，天女笄珈。玉佩自鸣，貂褕为饰。云近蓬莱，望之五色。 第九首是陆素兰题的《仙中豪品》：..."',
        zh: "出场于此章节，文本描述：“...庄严妙相，天女笄珈。玉佩自鸣，貂褕为饰。云近蓬莱，望之五色。 第九首是陆素兰题的《仙中豪品》：...”",
      },
    ],
  },
  "char-39": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...碧海珊枝陆素兰素兰姓陆氏，宇香畹，年十六岁。姑苏人。..."',
        zh: "出场于此章节，文本描述：“...碧海珊枝陆素兰素兰姓陆氏，宇香畹，年十六岁。姑苏人。...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...不但没有讨好，他倒说我俗恶不堪，以后我就再不敢请他的了。他有一个亲随林珊枝，真花八千两银子买的。」聘才听了，点头微笑，说道：「这个阔公子，与..."',
        zh: "出场于此章节，文本描述：“...不但没有讨好，他倒说我俗恶不堪，以后我就再不敢请他的了。他有一个亲随林珊枝，真花八千两银子买的。」聘才听了，点头微笑，说道：「这个阔公子，与...”",
      },
    ],
    16: [
      {
        en: 'Features in a scene where the narrative notes: "...，是你的好朋友。自然不用讲了。说请你去讲一声，请他来就是了。」即吩咐林珊枝传谕总办，将魏师爷修金钦馔说定，富三连连答应几个「是」！又进去见了..."',
        zh: "出场于此章节，文本描述：“...，是你的好朋友。自然不用讲了。说请你去讲一声，请他来就是了。」即吩咐林珊枝传谕总办，将魏师爷修金钦馔说定，富三连连答应几个「是」！又进去见了...”",
      },
    ],
    18: [
      {
        en: 'Features in a scene where the narrative notes: "...我知道他府里有个林珊枝，是他的亲随。」说到此便竖起大拇指来道：「是个这一分儿的，言听计从..."',
        zh: "出场于此章节，文本描述：“...我知道他府里有个林珊枝，是他的亲随。」说到此便竖起大拇指来道：「是个这一分儿的，言听计从...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...话说魏聘才自得仲雨传授，依法行之，先于林珊枝面前献尽殷懃，又于八龄班赔尽辛苦。珊枝本系联锦部有名小旦，继进登春..."',
        zh: "出场于此章节，文本描述：“...话说魏聘才自得仲雨传授，依法行之，先于林珊枝面前献尽殷懃，又于八龄班赔尽辛苦。珊枝本系联锦部有名小旦，继进登春...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...一日，林珊枝教玉龄唱曲，适值聘才闲闯进来，珊枝就请他坐了，一面教着。刚刚这曲子..."',
        zh: "出场于此章节，文本描述：“...一日，林珊枝教玉龄唱曲，适值聘才闲闯进来，珊枝就请他坐了，一面教着。刚刚这曲子...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...。问那华公府内光景，聘才即把华公子称赞得上天下地选不出来，又夸其亲随林珊枝及八龄班怎样的好，就说琴言也不能及他。..."',
        zh: "出场于此章节，文本描述：“...。问那华公府内光景，聘才即把华公子称赞得上天下地选不出来，又夸其亲随林珊枝及八龄班怎样的好，就说琴言也不能及他。...”",
      },
    ],
    25: [
      {
        en: 'Features in a scene where the narrative notes: "...、仲雨、次贤，大家公商点了几出。开了场，加官出来，献上世受国恩」，那林珊枝就走上来，拿出一个赏封望台上一抛，文泽等亦各赏了。..."',
        zh: "出场于此章节，文本描述：“...、仲雨、次贤，大家公商点了几出。开了场，加官出来，献上世受国恩」，那林珊枝就走上来，拿出一个赏封望台上一抛，文泽等亦各赏了。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...仙魂魄都做出来。及到唱完，已有一个时辰。华公子赞了几声，吩咐了一句话，珊枝出去了一回，就有十六个人，抬上八张桌子，赏了八十吊钱。主人照样发赏..."',
        zh: "出场于此章节，文本描述：“...仙魂魄都做出来。及到唱完，已有一个时辰。华公子赞了几声，吩咐了一句话，珊枝出去了一回，就有十六个人，抬上八张桌子，赏了八十吊钱。主人照样发赏...”",
      },
    ],
    26: [
      {
        en: 'Features in a scene where the narrative notes: "...又见爱珠提了一盏绛纱灯走出来道：「差不多要定更了，此刻还要传林珊枝进来呢！」宝珠问道：「叫林珊枝做什么？」爱珠道：「我知道什么事？自..."',
        zh: "出场于此章节，文本描述：“...又见爱珠提了一盏绛纱灯走出来道：「差不多要定更了，此刻还要传林珊枝进来呢！」宝珠问道：「叫林珊枝做什么？」爱珠道：「我知道什么事？自...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...爱珠把绛纱灯提起，在珊枝脸上一照，笑了一笑，道：「你把脸喝得红红儿的，上去准要碰钉子。」珊..."',
        zh: "出场于此章节，文本描述：“...爱珠把绛纱灯提起，在珊枝脸上一照，笑了一笑，道：「你把脸喝得红红儿的，上去准要碰钉子。」珊...”",
      },
    ],
    28: [
      {
        en: 'Features in a scene where the narrative notes: "...，便甚得意，只道他一怒之后，使他愧悔送上门来，应了前日所说的话，便找了珊枝，请公子出来说了，华公子道：「为何不要身价呢？」聘才说：「他的意思..."',
        zh: "出场于此章节，文本描述：“...，便甚得意，只道他一怒之后，使他愧悔送上门来，应了前日所说的话，便找了珊枝，请公子出来说了，华公子道：「为何不要身价呢？」聘才说：「他的意思...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...即便出来，一径回华府，到自己房中坐下，细细的想了一回，没有主意。即来找珊枝，把方才颜夫人托他话，都说与珊枝，又加上些话。又说我与这个兄弟是三..."',
        zh: "出场于此章节，文本描述：“...即便出来，一径回华府，到自己房中坐下，细细的想了一回，没有主意。即来找珊枝，把方才颜夫人托他话，都说与珊枝，又加上些话。又说我与这个兄弟是三...”",
      },
    ],
    29: [
      {
        en: 'Features in a scene where the narrative notes: "...道是上号簿。聘才先叫四儿将银包拿进房去，放在钱柜内锁好。一同进来找着林珊枝，珊枝见琴言回来，即笑道：「怎么去了许多时，想必医的病好了。」琴言..."',
        zh: "出场于此章节，文本描述：“...道是上号簿。聘才先叫四儿将银包拿进房去，放在钱柜内锁好。一同进来找着林珊枝，珊枝见琴言回来，即笑道：「怎么去了许多时，想必医的病好了。」琴言...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...，聘才就连忙问道：「你看见什么，只管说来我听，或者我可以就给你办来。」珊枝道：「不是别的。我见沙回子家里有一个金丝拧成的一个花篮，不过二两重..."',
        zh: "出场于此章节，文本描述：“...，聘才就连忙问道：「你看见什么，只管说来我听，或者我可以就给你办来。」珊枝道：「不是别的。我见沙回子家里有一个金丝拧成的一个花篮，不过二两重...”",
      },
    ],
    30: [
      {
        en: 'Features in a scene where the narrative notes: "...先在聘才处吃了早饭，与张、顾诸人谈笑了半天。到得午正时候，拉了聘才、林珊枝来逛西园。..."',
        zh: "出场于此章节，文本描述：“...先在聘才处吃了早饭，与张、顾诸人谈笑了半天。到得午正时候，拉了聘才、林珊枝来逛西园。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...当下仲雨、聘才二人，跟着珊枝，顺着山路径，高低斜曲，穿入一个神仙洞内。从左边上去，几树丹桂，不..."',
        zh: "出场于此章节，文本描述：“...当下仲雨、聘才二人，跟着珊枝，顺着山路径，高低斜曲，穿入一个神仙洞内。从左边上去，几树丹桂，不...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...」即吩咐撤席止戏，家人整顿茶具，泡好了香茗送来。子云留心不见琴言，但见珊枝靠着屏风有些倦态。华公子查起琴言来，珊枝回道：「他身子不快，睡了。..."',
        zh: "出场于此章节，文本描述：“...」即吩咐撤席止戏，家人整顿茶具，泡好了香茗送来。子云留心不见琴言，但见珊枝靠着屏风有些倦态。华公子查起琴言来，珊枝回道：「他身子不快，睡了。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。可惜玉侬又病了，他倒会一套《平沙落雁》。」华公子便命叫他起来，又吩咐珊枝拿了琵琶来。家人把些笔砚乐器都搬了出来，分摆在各处。次贤道：「我来..."',
        zh: "出场于此章节，文本描述：“...。可惜玉侬又病了，他倒会一套《平沙落雁》。」华公子便命叫他起来，又吩咐珊枝拿了琵琶来。家人把些笔砚乐器都搬了出来，分摆在各处。次贤道：「我来...”",
      },
    ],
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...，唯不见华公子打发人来，聘才真道他不知此事，便放了心。到了第三日，见林珊枝进来，两手捧了一大封，像是银子，放在桌上，说道：「这是公子送你的。..."',
        zh: "出场于此章节，文本描述：“...，唯不见华公子打发人来，聘才真道他不知此事，便放了心。到了第三日，见林珊枝进来，两手捧了一大封，像是银子，放在桌上，说道：「这是公子送你的。...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...聘才虽不是个好人，然尚有一言半语，道着我的心事，如今他又出去了。那个林珊枝倒像是半个主儿一般，先要小心谨慎的奉承他才喜欢，不然他就要撮弄人。..."',
        zh: "出场于此章节，文本描述：“...聘才虽不是个好人，然尚有一言半语，道着我的心事，如今他又出去了。那个林珊枝倒像是半个主儿一般，先要小心谨慎的奉承他才喜欢，不然他就要撮弄人。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...略将近事说了几句。宝珠道：「你既回来，告了几天假？」琴言道：「早上是林珊枝来告诉的，我也没有见着公子，说办完丧事就回去，也没有限定几天。」素..."',
        zh: "出场于此章节，文本描述：“...略将近事说了几句。宝珠道：「你既回来，告了几天假？」琴言道：「早上是林珊枝来告诉的，我也没有见着公子，说办完丧事就回去，也没有限定几天。」素...”",
      },
    ],
    41: [
      {
        en: 'Features in a scene where the narrative notes: "...一日在园中归鸿小渚倚阑垂钓，珊枝与金、玉二龄，还有一个小丫鬟香儿，在傍伺候。金龄找了一个大瓷瓯，走..."',
        zh: "出场于此章节，文本描述：“...一日在园中归鸿小渚倚阑垂钓，珊枝与金、玉二龄，还有一个小丫鬟香儿，在傍伺候。金龄找了一个大瓷瓯，走...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...？」花珠原是爱顽，并非不认得路径，只得独自出去。将到藤花书屋前，只见林珊枝正走来，口中嚷道：「花姑娘来了，想必在留仙院了。」花珠待要问时，只..."',
        zh: "出场于此章节，文本描述：“...？」花珠原是爱顽，并非不认得路径，只得独自出去。将到藤花书屋前，只见林珊枝正走来，口中嚷道：「花姑娘来了，想必在留仙院了。」花珠待要问时，只...”",
      },
    ],
    44: [
      {
        en: 'Features in a scene where the narrative notes: "...话说琴言出师之日，就是华公子赏花之日。明日，华公子吩咐珊枝着人去叫琴言回来，珊枝派了一个外跟班姚贤，一早出城。到了长庆寓处，..."',
        zh: "出场于此章节，文本描述：“...话说琴言出师之日，就是华公子赏花之日。明日，华公子吩咐珊枝着人去叫琴言回来，珊枝派了一个外跟班姚贤，一早出城。到了长庆寓处，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...言怎样的恩典，一月给他师父二百银，格外还有赏赐。他的分儿，在府里除了林珊枝，还有谁比得上他？他竟绝不感恩，辞也不辞，竟同人走了。我想天下竟有..."',
        zh: "出场于此章节，文本描述：“...言怎样的恩典，一月给他师父二百银，格外还有赏赐。他的分儿，在府里除了林珊枝，还有谁比得上他？他竟绝不感恩，辞也不辞，竟同人走了。我想天下竟有...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...不知这句的故事。」文泽道：「明珠是他有十婢，皆以珠字为名，这珊瑚就是林珊枝了。」又看写的是：..."',
        zh: "出场于此章节，文本描述：“...不知这句的故事。」文泽道：「明珠是他有十婢，皆以珠字为名，这珊瑚就是林珊枝了。」又看写的是：...”",
      },
    ],
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...忽见林珊枝走来，华公子便叫取衣服过来，穿戴了，辞了春航，说道：「弟还要到舍亲..."',
        zh: "出场于此章节，文本描述：“...忽见林珊枝走来，华公子便叫取衣服过来，穿戴了，辞了春航，说道：「弟还要到舍亲...”",
      },
    ],
    53: [
      {
        en: 'Features in a scene where the narrative notes: "...人，到家换了衣服，带了人上车，一径到华府来，先到门房应酬了几句话，再到珊枝处问了缘故。..."',
        zh: "出场于此章节，文本描述：“...人，到家换了衣服，带了人上车，一径到华府来，先到门房应酬了几句话，再到珊枝处问了缘故。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...珊枝道：「我不知道，或者要你写什么。」素兰在珊枝房里略坐了一坐，珊枝道..."',
        zh: "出场于此章节，文本描述：“...珊枝道：「我不知道，或者要你写什么。」素兰在珊枝房里略坐了一坐，珊枝道...”",
      },
    ],
  },
  "char-26": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...嵰山艳雪金漱芳。漱芳姓金氏，字瘦香，年十五岁。姑苏人。隶联珠部。秀骨珊珊，柔情..."',
        zh: "出场于此章节，文本描述：“...嵰山艳雪金漱芳。漱芳姓金氏，字瘦香，年十五岁。姑苏人。隶联珠部。秀骨珊珊，柔情...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...着子玉，子玉有口难辩，不觉脸红起来。这出唱过，又看了陆素兰的《舞盘》、金漱芳的《题曲》、李玉林的《偷诗》，都是无上上品，香艳绝伦，子玉唯有向..."',
        zh: "出场于此章节，文本描述：“...着子玉，子玉有口难辩，不觉脸红起来。这出唱过，又看了陆素兰的《舞盘》、金漱芳的《题曲》、李玉林的《偷诗》，都是无上上品，香艳绝伦，子玉唯有向...”",
      },
    ],
    7: [
      {
        en: 'Features in a scene where the narrative notes: "...来，将琴官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神色尤胜于诸人，次..."',
        zh: "出场于此章节，文本描述：“...来，将琴官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神色尤胜于诸人，次...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...太湖石山洞，一对明灯照出一双玉人来。走到面前看时，一个是袁宝珠，一个是金漱芳。仲清问道：「你们藏在那里？」宝珠道：「我们在前面小船室下棋。」..."',
        zh: "出场于此章节，文本描述：“...太湖石山洞，一对明灯照出一双玉人来。走到面前看时，一个是袁宝珠，一个是金漱芳。仲清问道：「你们藏在那里？」宝珠道：「我们在前面小船室下棋。」...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...你可识得是那一班的相公？」高品想了一会道：「据你说来，不是陆素兰，就是金漱芳，不然就是袁宝珠。」春航道；「金漱芳在联殊班，我见过他的戏，生得..."',
        zh: "出场于此章节，文本描述：“...你可识得是那一班的相公？」高品想了一会道：「据你说来，不是陆素兰，就是金漱芳，不然就是袁宝珠。」春航道；「金漱芳在联殊班，我见过他的戏，生得...”",
      },
    ],
    14: [
      {
        en: 'Features in a scene where the narrative notes: "...腰抱月，星眸妒云，非袁瑶卿不足当此二语。下两句软爱罗轻，娇嫌帐重，非金瘦香却也不称。是他二人么？」春航摇摇头。蕙芳道：「然则是谁呢？」春航道..."',
        zh: "出场于此章节，文本描述：“...腰抱月，星眸妒云，非袁瑶卿不足当此二语。下两句软爱罗轻，娇嫌帐重，非金瘦香却也不称。是他二人么？」春航摇摇头。蕙芳道：「然则是谁呢？」春航道...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...？我今日同了静芳到怡园，他们都在家，留我吃了饭。佩仙也在座，还有瑶卿、瘦香两个。吃完了饭，佩仙家内有人来叫他，度香问起来，方知道是你叫的，我..."',
        zh: "出场于此章节，文本描述：“...？我今日同了静芳到怡园，他们都在家，留我吃了饭。佩仙也在座，还有瑶卿、瘦香两个。吃完了饭，佩仙家内有人来叫他，度香问起来，方知道是你叫的，我...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，只好办了再算..."',
        zh: "出场于此章节，文本描述：“...里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，只好办了再算...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...道：「此亦同人盛举，瞻仰倾城，为借花献佛耳。」说话间，陆素兰、李玉林、金漱芳同到，随后高、史、颜、王四人偕来，蕙劳一一都谢了。..."',
        zh: "出场于此章节，文本描述：“...道：「此亦同人盛举，瞻仰倾城，为借花献佛耳。」说话间，陆素兰、李玉林、金漱芳同到，随后高、史、颜、王四人偕来，蕙劳一一都谢了。...”",
      },
    ],
    20: [
      {
        en: 'Features in a scene where the narrative notes: "...龙』，真觉得摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺而观，则赵飞燕之掌上舞，..."',
        zh: "出场于此章节，文本描述：“...龙』，真觉得摹拟入神。」南湘道：「静芳之倜傥，媚香之灵慧，瑶卿之柔婉，瘦香之妍静，香畹之丰韵，皆是天仙化人。若以其艺而观，则赵飞燕之掌上舞，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...却没有逛到。一喝酒就是一天，那里能逛。约有七八处逛过。」宝珠道：「我同瘦香是逛完的了。」蕙芳道：「我就是桂岭、菊畦、兰径没有到过，其余也都逛..."',
        zh: "出场于此章节，文本描述：“...却没有逛到。一喝酒就是一天，那里能逛。约有七八处逛过。」宝珠道：「我同瘦香是逛完的了。」蕙芳道：「我就是桂岭、菊畦、兰径没有到过，其余也都逛...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这就是十美班了..."',
        zh: "出场于此章节，文本描述：“...「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这就是十美班了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...言语爽直，风度高超，雅俗咸宜，毫无拘束，是静芳。恬静安详，言语妥贴，是瘦香。..."',
        zh: "出场于此章节，文本描述：“...言语爽直，风度高超，雅俗咸宜，毫无拘束，是静芳。恬静安详，言语妥贴，是瘦香。...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹笙的。可惜玉侬又病了，他倒会一套《平沙落..."',
        zh: "出场于此章节，文本描述：“...长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹笙的。可惜玉侬又病了，他倒会一套《平沙落...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...长弹，生疏了。」琴言道：「有半年不学了，方才第四段第三句几乎想不出来。瘦香的箫，比从前更好了。」漱芳道：「我是向老师课学。静宜先生隔三日必教..."',
        zh: "出场于此章节，文本描述：“...长弹，生疏了。」琴言道：「有半年不学了，方才第四段第三句几乎想不出来。瘦香的箫，比从前更好了。」漱芳道：「我是向老师课学。静宜先生隔三日必教...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...飞三字，一轮到十二为止。错者罚酒，可好么？」众人都说：「好。」陆素兰与金漱芳等道：「这个苦了我们，搜索枯肠，那里就有这些凑巧数目飞出来？」文..."',
        zh: "出场于此章节，文本描述：“...飞三字，一轮到十二为止。错者罚酒，可好么？」众人都说：「好。」陆素兰与金漱芳等道：「这个苦了我们，搜索枯肠，那里就有这些凑巧数目飞出来？」文...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...了，琴言拉住了不肯放，众人不忍相离，只得坐下。后又来了王桂保、李玉林、金漱芳，大家直等了送殓，拜了，然后才散。琴言穿了孝袍，似乎明日不好出门..."',
        zh: "出场于此章节，文本描述：“...了，琴言拉住了不肯放，众人不忍相离，只得坐下。后又来了王桂保、李玉林、金漱芳，大家直等了送殓，拜了，然后才散。琴言穿了孝袍，似乎明日不好出门...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...在中间，容易讨好些。」次贤道：「头难，头难，我一时想不出好的。我前日见瘦香的《题曲》唱得甚好，就出《题曲》罢。」蕙芳道：「《题曲》就可以对《..."',
        zh: "出场于此章节，文本描述：“...在中间，容易讨好些。」次贤道：「头难，头难，我一时想不出好的。我前日见瘦香的《题曲》唱得甚好，就出《题曲》罢。」蕙芳道：「《题曲》就可以对《...”",
      },
    ],
    43: [
      {
        en: 'Features in a scene where the narrative notes: "...代他张罗张罗，或是几个相好中凑凑，也可凑得一半。就说的是你、王氏弟兄、瘦香、佩仙等，想没有不肯的。若能凑出一半，那一半就容易了。」宝珠道：「..."',
        zh: "出场于此章节，文本描述：“...代他张罗张罗，或是几个相好中凑凑，也可凑得一半。就说的是你、王氏弟兄、瘦香、佩仙等，想没有不肯的。若能凑出一半，那一半就容易了。」宝珠道：「...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...说道：「今日倒料不着你们来。」宝珠道：「都是我请来的。」又对次贤道：「瘦香身子不快，不来了。」..."',
        zh: "出场于此章节，文本描述：“...说道：「今日倒料不着你们来。」宝珠道：「都是我请来的。」又对次贤道：「瘦香身子不快，不来了。」...”",
      },
    ],
    46: [
      {
        en: 'Features in a scene where the narrative notes: "...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道：「今日..."',
        zh: "出场于此章节，文本描述：“...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道：「今日...”",
      },
    ],
    53: [
      {
        en: 'Features in a scene where the narrative notes: "...子来。那日素兰正在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，也就不少..."',
        zh: "出场于此章节，文本描述：“...子来。那日素兰正在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，也就不少...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...琼树，返劫□□典玉签。 只恐留仙留不住，晓风吹上绿云尖。 琴仙道：「将瘦香的神情骨相全写出来。」漱芳笑道：「我这个瘦字倒有些像，别样真令我惭..."',
        zh: "出场于此章节，文本描述：“...琼树，返劫□□典玉签。 只恐留仙留不住，晓风吹上绿云尖。 琴仙道：「将瘦香的神情骨相全写出来。」漱芳笑道：「我这个瘦字倒有些像，别样真令我惭...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...素月流天，照靡有遗。青空无云，霄露自降。大钟中虚，寸挺可撞。 第二首是金漱芳题的《仙中逸品》：..."',
        zh: "出场于此章节，文本描述：“...素月流天，照靡有遗。青空无云，霄露自降。大钟中虚，寸挺可撞。 第二首是金漱芳题的《仙中逸品》：...”",
      },
    ],
  },
  "char-27": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...玉树临风李玉林。玉林姓李氏，字佩仙，年十五岁。扬州人。..."',
        zh: "出场于此章节，文本描述：“...玉树临风李玉林。玉林姓李氏，字佩仙，年十五岁。扬州人。...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...辩，不觉脸红起来。这出唱过，又看了陆素兰的《舞盘》、金漱芳的《题曲》、李玉林的《偷诗》，都是无上上品，香艳绝伦，子玉唯有向南湘认错而已。..."',
        zh: "出场于此章节，文本描述：“...辩，不觉脸红起来。这出唱过，又看了陆素兰的《舞盘》、金漱芳的《题曲》、李玉林的《偷诗》，都是无上上品，香艳绝伦，子玉唯有向南湘认错而已。...”",
      },
    ],
    7: [
      {
        en: 'Features in a scene where the narrative notes: "...官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神色尤胜于诸人，次则素兰可..."',
        zh: "出场于此章节，文本描述：“...官的戏足足想了两日，以谓天下之美莫过于此。又将苏蕙芳、陆素兰、金漱芳、李玉林的色艺品评，都为绝顶。细细核来，蕙芳的神色尤胜于诸人，次则素兰可...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...，到底饮了多少酒来？」南湘道：「今日我同高卓然、张仲雨，带了王静芳、李佩仙在酒楼上饮了一天，也不晓得有多少，他们都醉得先走了。我送静芳回去，..."',
        zh: "出场于此章节，文本描述：“...，到底饮了多少酒来？」南湘道：「今日我同高卓然、张仲雨，带了王静芳、李佩仙在酒楼上饮了一天，也不晓得有多少，他们都醉得先走了。我送静芳回去，...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...航这样。而且他又不喜欢他那些相公，说他所爱的一班不好，春航不服。及见了李玉林来看高品，那一种娟媚韶秀的丰致，比蓉官等似要好些，便此心自讼了几..."',
        zh: "出场于此章节，文本描述：“...航这样。而且他又不喜欢他那些相公，说他所爱的一班不好，春航不服。及见了李玉林来看高品，那一种娟媚韶秀的丰致，比蓉官等似要好些，便此心自讼了几...”",
      },
    ],
    14: [
      {
        en: 'Features in a scene where the narrative notes: "...随口说道：「没有对。」高品道：「见免放箭。」蕙芳略停一停道：「你们那个李玉林倒属兔，今年十六岁，你去叫了玉免儿来吧。」春航也要高品去叫玉林，..."',
        zh: "出场于此章节，文本描述：“...随口说道：「没有对。」高品道：「见免放箭。」蕙芳略停一停道：「你们那个李玉林倒属兔，今年十六岁，你去叫了玉免儿来吧。」春航也要高品去叫玉林，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...高品急出来看时，不是别人，恰是史南湘左手挽着王兰保，右手携了李玉林，面上已有了几分酒意。又见玉林手内拈了一枝杏花，后面又跟着三四个..."',
        zh: "出场于此章节，文本描述：“...高品急出来看时，不是别人，恰是史南湘左手挽着王兰保，右手携了李玉林，面上已有了几分酒意。又见玉林手内拈了一枝杏花，后面又跟着三四个...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...花园子，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定..."',
        zh: "出场于此章节，文本描述：“...花园子，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。」文泽道：「此亦同人盛举，瞻仰倾城，为借花献佛耳。」说话间，陆素兰、李玉林、金漱芳同到，随后高、史、颜、王四人偕来，蕙劳一一都谢了。..."',
        zh: "出场于此章节，文本描述：“...。」文泽道：「此亦同人盛举，瞻仰倾城，为借花献佛耳。」说话间，陆素兰、李玉林、金漱芳同到，随后高、史、颜、王四人偕来，蕙劳一一都谢了。...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...仲清答道：「在可善可恶之间，尚识好人，天良未昧。」二人刚说得有趣，忽见李玉林同着桂保来，见过了，遂即坐下，因问道：「这两日不见你们出来，在家..."',
        zh: "出场于此章节，文本描述：“...仲清答道：「在可善可恶之间，尚识好人，天良未昧。」二人刚说得有趣，忽见李玉林同着桂保来，见过了，遂即坐下，因问道：「这两日不见你们出来，在家...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...了首，春山半蹙，远黛含颦，又有些怒态。王恂、仲清等不解其意，因问道：「佩仙缘何发恼起来？」桂保见问，对仲清道：「都是你问起琪官，触起他的伤心..."',
        zh: "出场于此章节，文本描述：“...了首，春山半蹙，远黛含颦，又有些怒态。王恂、仲清等不解其意，因问道：「佩仙缘何发恼起来？」桂保见问，对仲清道：「都是你问起琪官，触起他的伤心...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹..."',
        zh: "出场于此章节，文本描述：“...媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...那边蕙芳等三人挤在一处。只见李玉林俯首凝思，素兰把串香珠数个不了，蕙芳只管看着宝珠落笔，尚暗暗的指..."',
        zh: "出场于此章节，文本描述：“...那边蕙芳等三人挤在一处。只见李玉林俯首凝思，素兰把串香珠数个不了，蕙芳只管看着宝珠落笔，尚暗暗的指...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...不容易，幸亏我们的曲子，还有几枝在肚里。」子云谓次贤道：「索性叫香畹、佩仙坐到这里来，好在一处掷骰，我们与他二人换个坐儿。」次贤、子次与玉林..."',
        zh: "出场于此章节，文本描述：“...不容易，幸亏我们的曲子，还有几枝在肚里。」子云谓次贤道：「索性叫香畹、佩仙坐到这里来，好在一处掷骰，我们与他二人换个坐儿。」次贤、子次与玉林...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...候，要走了，琴言拉住了不肯放，众人不忍相离，只得坐下。后又来了王桂保、李玉林、金漱芳，大家直等了送殓，拜了，然后才散。琴言穿了孝袍，似乎明日..."',
        zh: "出场于此章节，文本描述：“...候，要走了，琴言拉住了不肯放，众人不忍相离，只得坐下。后又来了王桂保、李玉林、金漱芳，大家直等了送殓，拜了，然后才散。琴言穿了孝袍，似乎明日...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...实在为难你。」次贤、王恂皆笑。桂保道：「那个奚十一，我倒没碰见他，就是佩仙、玉艳吃了他的大亏。」琴言道：「我是两次了。」王恂谓桂保道：「你若..."',
        zh: "出场于此章节，文本描述：“...实在为难你。」次贤、王恂皆笑。桂保道：「那个奚十一，我倒没碰见他，就是佩仙、玉艳吃了他的大亏。」琴言道：「我是两次了。」王恂谓桂保道：「你若...”",
      },
    ],
    43: [
      {
        en: 'Features in a scene where the narrative notes: "...罗张罗，或是几个相好中凑凑，也可凑得一半。就说的是你、王氏弟兄、瘦香、佩仙等，想没有不肯的。若能凑出一半，那一半就容易了。」宝珠道：「出师之..."',
        zh: "出场于此章节，文本描述：“...罗张罗，或是几个相好中凑凑，也可凑得一半。就说的是你、王氏弟兄、瘦香、佩仙等，想没有不肯的。若能凑出一半，那一半就容易了。」宝珠道：「出师之...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...强，但集腑成裘，也还容易。我与瑶卿、香畹三人可以凑得六百金，王氏弟兄、佩仙、庚香可以凑得四百金。」次贤道：「我来一分，出二百金，前舟可出三百..."',
        zh: "出场于此章节，文本描述：“...强，但集腑成裘，也还容易。我与瑶卿、香畹三人可以凑得六百金，王氏弟兄、佩仙、庚香可以凑得四百金。」次贤道：「我来一分，出二百金，前舟可出三百...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...两行。 十树琼花十样锦，春风喜气满华堂。 众人道：「首句是香畹，次句是佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少..."',
        zh: "出场于此章节，文本描述：“...两行。 十树琼花十样锦，春风喜气满华堂。 众人道：「首句是香畹，次句是佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少...”",
      },
    ],
    53: [
      {
        en: 'Features in a scene where the narrative notes: "...在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，也就不少。况且怡园花木极..."',
        zh: "出场于此章节，文本描述：“...在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，也就不少。况且怡园花木极...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...楼头锁绿烟。 谪往天台守孤另，碧桃流水自年年。 琴仙道：「真说得好，将佩仙浓香秀韵一齐写出来了。」玉林道：「这首诗究竟也不甚好，还有些刻薄，..."',
        zh: "出场于此章节，文本描述：“...楼头锁绿烟。 谪往天台守孤另，碧桃流水自年年。 琴仙道：「真说得好，将佩仙浓香秀韵一齐写出来了。」玉林道：「这首诗究竟也不甚好，还有些刻薄，...”",
      },
    ],
  },
  "char-28": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...火树银花王兰保兰保姓王氏，字静芳，年十七岁。扬州人。..."',
        zh: "出场于此章节，文本描述：“...火树银花王兰保兰保姓王氏，字静芳，年十七岁。扬州人。...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...醉胡涂了，到底饮了多少酒来？」南湘道：「今日我同高卓然、张仲雨，带了王静芳、李佩仙在酒楼上饮了一天，也不晓得有多少，他们都醉得先走了。我送静..."',
        zh: "出场于此章节，文本描述：“...醉胡涂了，到底饮了多少酒来？」南湘道：「今日我同高卓然、张仲雨，带了王静芳、李佩仙在酒楼上饮了一天，也不晓得有多少，他们都醉得先走了。我送静...”",
      },
    ],
    14: [
      {
        en: 'Features in a scene where the narrative notes: "...高品急出来看时，不是别人，恰是史南湘左手挽着王兰保，右手携了李玉林，面上已有了几分酒意。又见玉林手内拈了一枝杏花，..."',
        zh: "出场于此章节，文本描述：“...高品急出来看时，不是别人，恰是史南湘左手挽着王兰保，右手携了李玉林，面上已有了几分酒意。又见玉林手内拈了一枝杏花，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...又看那王兰保，却是史南湘最得意的，春航倒有些怕他。柳眉贴翠，含娇处亦复含嗔。..."',
        zh: "出场于此章节，文本描述：“...又看那王兰保，却是史南湘最得意的，春航倒有些怕他。柳眉贴翠，含娇处亦复含嗔。...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，..."',
        zh: "出场于此章节，文本描述：“...，不如前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...厅迎接，只见子云同了次贤翩翩的，俨似太原公子裼裘而来，后面随着袁宝珠、王兰保二人。再后还有八个清俊书童，拿着衣包、铜盆、漱盂等物。..."',
        zh: "出场于此章节，文本描述：“...厅迎接，只见子云同了次贤翩翩的，俨似太原公子裼裘而来，后面随着袁宝珠、王兰保二人。再后还有八个清俊书童，拿着衣包、铜盆、漱盂等物。...”",
      },
    ],
    20: [
      {
        en: 'Features in a scene where the narrative notes: "...倒影，飞燕低掠，游鱼仰吹，须臾之间已过红桥，慢慢拢桥，慢慢拢过来。只见王兰保掖起罗衫，盘了辫发，鬓边倒插一枝榴花，手中拿一根小小的紫竹篙，一..."',
        zh: "出场于此章节，文本描述：“...倒影，飞燕低掠，游鱼仰吹，须臾之间已过红桥，慢慢拢桥，慢慢拢过来。只见王兰保掖起罗衫，盘了辫发，鬓边倒插一枝榴花，手中拿一根小小的紫竹篙，一...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...中间一张圆桌，也可以坐得五六人。那一个船略小了些，是坐那侍从人的。此时王兰保却早换好了衣裳，斯斯文文的坐了。宝珠对南湘道：「你们早上到过王大..."',
        zh: "出场于此章节，文本描述：“...中间一张圆桌，也可以坐得五六人。那一个船略小了些，是坐那侍从人的。此时王兰保却早换好了衣裳，斯斯文文的坐了。宝珠对南湘道：「你们早上到过王大...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...清道：「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这就是十..."',
        zh: "出场于此章节，文本描述：“...清道：「旦脚十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这就是十...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...而不流，婉而有致，要算香畹。言语爽直，风度高超，雅俗咸宜，毫无拘束，是静芳。恬静安详，言语妥贴，是瘦香。..."',
        zh: "出场于此章节，文本描述：“...而不流，婉而有致，要算香畹。言语爽直，风度高超，雅俗咸宜，毫无拘束，是静芳。恬静安详，言语妥贴，是瘦香。...”",
      },
    ],
    27: [
      {
        en: 'Features in a scene where the narrative notes: "...东基角上有一小后门，叩得乱响，即问道：「是那个？」外面应道：「我是对门王兰保，叫我送西瓜来与琴言的。」琴言听了，叫人开了门。那人挑着四个西瓜..."',
        zh: "出场于此章节，文本描述：“...东基角上有一小后门，叩得乱响，即问道：「是那个？」外面应道：「我是对门王兰保，叫我送西瓜来与琴言的。」琴言听了，叫人开了门。那人挑着四个西瓜...”",
      },
    ],
    28: [
      {
        en: 'Features in a scene where the narrative notes: "...在家，素兰闻知甚喜，忙出迎进。只见房内走出两人来：子玉看时，认得一个是王兰保；一个是琪官，因多时不见他，即看了他一看。见他杏脸搓酥，柳眉耸翠..."',
        zh: "出场于此章节，文本描述：“...在家，素兰闻知甚喜，忙出迎进。只见房内走出两人来：子玉看时，认得一个是王兰保；一个是琪官，因多时不见他，即看了他一看。见他杏脸搓酥，柳眉耸翠...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...那里有这个称呼？」素兰道：「这个称呼倒也通。」琪官也不好意思，便道：「静芳不要取笑。」兰保道：「这倒也不算取笑，你是玉侬的师弟，可不是他的小..."',
        zh: "出场于此章节，文本描述：“...那里有这个称呼？」素兰道：「这个称呼倒也通。」琪官也不好意思，便道：「静芳不要取笑。」兰保道：「这倒也不算取笑，你是玉侬的师弟，可不是他的小...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...，妙！待我来分派。」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙..."',
        zh: "出场于此章节，文本描述：“...，妙！待我来分派。」即对着蕙芳道：「媚香是长于诗的，瑶卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...哥，他就爱理不理的。他也只好在那八龄面前装声势，充老手。你不记得从前王静芳在燕□堂要打他么？如今见了静芳，还不瞅不睬的，记着前恨呢。」琴言道..."',
        zh: "出场于此章节，文本描述：“...哥，他就爱理不理的。他也只好在那八龄面前装声势，充老手。你不记得从前王静芳在燕□堂要打他么？如今见了静芳，还不瞅不睬的，记着前恨呢。」琴言道...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...。」子玉道：「正是，我却出来过几次，总没有见你。」宝珠道：「今日香畹与静芳苦了，处处有他们的戏，是再不能来了。」子云道：「我算有六七人可来，..."',
        zh: "出场于此章节，文本描述：“...。」子玉道：「正是，我却出来过几次，总没有见你。」宝珠道：「今日香畹与静芳苦了，处处有他们的戏，是再不能来了。」子云道：「我算有六七人可来，...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少静芳、蕊香两人了。又见写道：..."',
        zh: "出场于此章节，文本描述：“...佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少静芳、蕊香两人了。又见写道：...”",
      },
    ],
    46: [
      {
        en: 'Features in a scene where the narrative notes: "...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道..."',
        zh: "出场于此章节，文本描述：“...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道...”",
      },
    ],
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...。忽不见了高品，子云命书童去找他，找到戏房后头，找着了。见高品在那里教王兰保的戏，兰保点头而笑。高品出来，装出正经样子，连笑话也都不说一句。..."',
        zh: "出场于此章节，文本描述：“...。忽不见了高品，子云命书童去找他，找到戏房后头，找着了。见高品在那里教王兰保的戏，兰保点头而笑。高品出来，装出正经样子，连笑话也都不说一句。...”",
      },
    ],
    53: [
      {
        en: 'Features in a scene where the narrative notes: "...日素兰正在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，也就不少。况且怡..."',
        zh: "出场于此章节，文本描述：“...日素兰正在蕙芳处商议开那古董铺的事情，苏、陆之外，尚有袁宝珠、金漱芳、王兰保、李玉林要来，大家商议那古董书画等物公凑些起来，也就不少。况且怡...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...道：「这首七古，实在做得好，念去比《公孙大娘舞剑器行》还刻画得入细。」王兰保笑而不言。蕙芳道：「去年奚十一闹来，幸亏着他，我就没有法了。」素..."',
        zh: "出场于此章节，文本描述：“...道：「这首七古，实在做得好，念去比《公孙大娘舞剑器行》还刻画得入细。」王兰保笑而不言。蕙芳道：「去年奚十一闹来，幸亏着他，我就没有法了。」素...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。」琴仙道：「都切得很。你将这些诗更换了人，便不像了。」宝珠道：「只有静芳那一首，再不能更换的。」琴仙再看第十一方，画一个杏花，下有一个仙女..."',
        zh: "出场于此章节，文本描述：“...。」琴仙道：「都切得很。你将这些诗更换了人，便不像了。」宝珠道：「只有静芳那一首，再不能更换的。」琴仙再看第十一方，画一个杏花，下有一个仙女...”",
      },
    ],
  },
  "char-29": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...秋水芙蓉王桂保..."',
        zh: "出场于此章节，文本描述：“...秋水芙蓉王桂保...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...桂保即兰保之弟，字蕊香，年十五岁，与兄同部。似兰馨，如花解语。明眸善睐，皓齿流芳。嬉戏自..."',
        zh: "出场于此章节，文本描述：“...桂保即兰保之弟，字蕊香，年十五岁，与兄同部。似兰馨，如花解语。明眸善睐，皓齿流芳。嬉戏自...”",
      },
    ],
    2: [
      {
        en: 'Features in a scene where the narrative notes: "...亮功正要与他儿子说话，适值王桂保进来，见了亮功并王恂、仲清，也站在一边。亮功看看桂保，对他儿子说..."',
        zh: "出场于此章节，文本描述：“...亮功正要与他儿子说话，适值王桂保进来，见了亮功并王恂、仲清，也站在一边。亮功看看桂保，对他儿子说...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...上了几样菜，文辉道：「这样清饮无趣，蕊香你出个令罢。」桂保道：「打擂最好，什么都放得进去。」孙亮功道：「完..."',
        zh: "出场于此章节，文本描述：“...上了几样菜，文辉道：「这样清饮无趣，蕊香你出个令罢。」桂保道：「打擂最好，什么都放得进去。」孙亮功道：「完...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...喜道：「我原不肯做的，他们定要我做。今日大家的诗，都也没有什么好，但就蕊香与我倒了平仄，因此蕊香定了第七，我定了第八，我已后再不做这不通诗了..."',
        zh: "出场于此章节，文本描述：“...喜道：「我原不肯做的，他们定要我做。今日大家的诗，都也没有什么好，但就蕊香与我倒了平仄，因此蕊香定了第七，我定了第八，我已后再不做这不通诗了...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，只好办..."',
        zh: "出场于此章节，文本描述：“...前舟园里好。我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，只好办...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...定完后，王桂保、林春喜来了，皆见过了。正席上令漱芳、玉林、春喜伺候；左席上令宝..."',
        zh: "出场于此章节，文本描述：“...定完后，王桂保、林春喜来了，皆见过了。正席上令漱芳、玉林、春喜伺候；左席上令宝...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...亢不卑，无好无恶，这些是佩仙。」仲清、王恂同道：「这考语出得很切，足见蕊香近日识见又长了好些。」玉林道：「我却当不起这考语。」王恂道：「还有..."',
        zh: "出场于此章节，文本描述：“...亢不卑，无好无恶，这些是佩仙。」仲清、王恂同道：「这考语出得很切，足见蕊香近日识见又长了好些。」玉林道：「我却当不起这考语。」王恂道：「还有...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹笙的。可惜玉侬又病..."',
        zh: "出场于此章节，文本描述：“...卿是长于丹青的，静芳是长于舞剑的，香畹是长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹笙的。可惜玉侬又病...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...花部中曾受业于香雪者，现有四人：袁宝珠、王桂保、金漱芳、陆素兰，或学画，或学诗，皆为高弟，此四人也共凑百金，连..."',
        zh: "出场于此章节，文本描述：“...花部中曾受业于香雪者，现有四人：袁宝珠、王桂保、金漱芳、陆素兰，或学画，或学诗，皆为高弟，此四人也共凑百金，连...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...了好些时候，要走了，琴言拉住了不肯放，众人不忍相离，只得坐下。后又来了王桂保、李玉林、金漱芳，大家直等了送殓，拜了，然后才散。琴言穿了孝袍，..."',
        zh: "出场于此章节，文本描述：“...了好些时候，要走了，琴言拉住了不肯放，众人不忍相离，只得坐下。后又来了王桂保、李玉林、金漱芳，大家直等了送殓，拜了，然后才散。琴言穿了孝袍，...”",
      },
    ],
    37: [
      {
        en: 'Features in a scene where the narrative notes: "...王桂保对着子云笑道：「我有个一字化为三字的令，我说给你听，说不出者罚一..."',
        zh: "出场于此章节，文本描述：“...王桂保对着子云笑道：「我有个一字化为三字的令，我说给你听，说不出者罚一...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...香、玉侬先对起来。」子玉道：「还是你与媚香先对，次度香、瑶卿，次庸奄、蕊香，末后轮到我们罢。」子云道：「也罢，你作个先锋，他作个后劲，把我们..."',
        zh: "出场于此章节，文本描述：“...香、玉侬先对起来。」子玉道：「还是你与媚香先对，次度香、瑶卿，次庸奄、蕊香，末后轮到我们罢。」子云道：「也罢，你作个先锋，他作个后劲，把我们...”",
      },
    ],
    38: [
      {
        en: 'Features in a scene where the narrative notes: "...前日几个人，也凑了好些。」又指琴言、蕙芳、宝珠三人道：「这三个还有一个王桂保，他们也对了许多，比我们还好些。」便叫人到他书房拿出一个单子，并..."',
        zh: "出场于此章节，文本描述：“...前日几个人，也凑了好些。」又指琴言、蕙芳、宝珠三人道：「这三个还有一个王桂保，他们也对了许多，比我们还好些。」便叫人到他书房拿出一个单子，并...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少静芳、蕊香两人了。又见写道：..."',
        zh: "出场于此章节，文本描述：“...玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少静芳、蕊香两人了。又见写道：...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...泽见了大喜，问道：「怎么今日不约而同，都到这里来？」仲清道：「庸庵要到蕊香那里去，却遇见玉艳，想同到新开的庄子里去坐坐。见你的车在门口，所以..."',
        zh: "出场于此章节，文本描述：“...泽见了大喜，问道：「怎么今日不约而同，都到这里来？」仲清道：「庸庵要到蕊香那里去，却遇见玉艳，想同到新开的庄子里去坐坐。见你的车在门口，所以...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...求。安得张丽华，缟素来嬉游。 琴仙道：「好诗，好诗！读之令人口齿俱香。蕊香真像嫦娥。」桂保道：「不是我，这是蟾宫花史。」众人说道：「这些诗词..."',
        zh: "出场于此章节，文本描述：“...求。安得张丽华，缟素来嬉游。 琴仙道：「好诗，好诗！读之令人口齿俱香。蕊香真像嫦娥。」桂保道：「不是我，这是蟾宫花史。」众人说道：「这些诗词...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...一曲，《箫韶》九成。不矜不庄，或休或暇。惠而好我，是曰柳下。 第七首是王桂保题的《仙中乐品》：..."',
        zh: "出场于此章节，文本描述：“...一曲，《箫韶》九成。不矜不庄，或休或暇。惠而好我，是曰柳下。 第七首是王桂保题的《仙中乐品》：...”",
      },
    ],
  },
  "char-30": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...天上玉麟林春喜春喜姓林氏，字小梅，年十四岁。姑苏人。..."',
        zh: "出场于此章节，文本描述：“...天上玉麟林春喜春喜姓林氏，字小梅，年十四岁。姑苏人。...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...，那相公便挪出身子，生得香雕粉捏，玉裹金妆，原来是《花选》上最小的那个林春喜。王恂问道：「你从那里来？」春喜道：「我从怡园回来，你们也到恰园..."',
        zh: "出场于此章节，文本描述：“...，那相公便挪出身子，生得香雕粉捏，玉裹金妆，原来是《花选》上最小的那个林春喜。王恂问道：「你从那里来？」春喜道：「我从怡园回来，你们也到恰园...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...前回说林春喜与仲清等，讲起在怡园作消寒赋诗之会。我今要将怡园之事序起来：有个..."',
        zh: "出场于此章节，文本描述：“...前回说林春喜与仲清等，讲起在怡园作消寒赋诗之会。我今要将怡园之事序起来：有个...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，只好办了再算。」众..."',
        zh: "出场于此章节，文本描述：“...我们主人六个，添上湘帆七个，媚香、瑶卿、香畹、佩仙、静芳、蕊香、瘦香、小梅共是八个，要三席才可坐，醵分之说，不能预定多少，只好办了再算。」众...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...定完后，王桂保、林春喜来了，皆见过了。正席上令漱芳、玉林、春喜伺候；左席上令宝珠、兰保..."',
        zh: "出场于此章节，文本描述：“...定完后，王桂保、林春喜来了，皆见过了。正席上令漱芳、玉林、春喜伺候；左席上令宝珠、兰保...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这就是十美班了。」桂..."',
        zh: "出场于此章节，文本描述：“...十个是谁？」桂保道：「我们两个之外，尚有瑶卿、媚香、香畹、静芳、瘦香、小梅，后来又添了玉侬、玉艳，共是十个。」王恂道：「这就是十美班了。」桂...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...心灵口敏，仪秀态研，是小梅。泛应有余，风流自赏。」把嘴向着桂保道：「这是他。别有会心，人难索..."',
        zh: "出场于此章节，文本描述：“...心灵口敏，仪秀态研，是小梅。泛应有余，风流自赏。」把嘴向着桂保道：「这是他。别有会心，人难索...”",
      },
    ],
    31: [
      {
        en: 'Features in a scene where the narrative notes: "...长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹笙的。可惜玉侬又病了，他倒会一套《平沙落雁》。」华公子便命..."',
        zh: "出场于此章节，文本描述：“...长于书法的，佩仙是长于填词的，蕊香是长于猜谜诙谐的，瘦香是长于品箫的，小梅是长于吹笙的。可惜玉侬又病了，他倒会一套《平沙落雁》。」华公子便命...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...一回，念出《絮阁》上两句道：「为着个意中人，把心病挑。俏东君，春心偏向小梅梢。」蕙芳笑道：「这出《絮阁》比《闻铃》好得多了。」于是各贺了两杯..."',
        zh: "出场于此章节，文本描述：“...一回，念出《絮阁》上两句道：「为着个意中人，把心病挑。俏东君，春心偏向小梅梢。」蕙芳笑道：「这出《絮阁》比《闻铃》好得多了。」于是各贺了两杯...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...喜气满华堂。 众人道：「首句是香畹，次句是佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少静芳、蕊香两人了。又见写道：..."',
        zh: "出场于此章节，文本描述：“...喜气满华堂。 众人道：「首句是香畹，次句是佩仙、玉艳，三句总说，末句是小梅。」子云掐指一算，名花已有了八人，只少静芳、蕊香两人了。又见写道：...”",
      },
    ],
    46: [
      {
        en: 'Features in a scene where the narrative notes: "...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道：「今日这二十四副对子，..."',
        zh: "出场于此章节，文本描述：“...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道：「今日这二十四副对子，...”",
      },
    ],
    48: [
      {
        en: 'Features in a scene where the narrative notes: "...前给我那个水晶猫儿，我还当着宝贝一样。现在天天学字，拿他做镇纸。去年林小梅要我的，我不肯给他。我说是哥哥路上给我的，我要留着他。」琴仙道：「..."',
        zh: "出场于此章节，文本描述：“...前给我那个水晶猫儿，我还当着宝贝一样。现在天天学字，拿他做镇纸。去年林小梅要我的，我不肯给他。我说是哥哥路上给我的，我要留着他。」琴仙道：「...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...日子，可以出来散散。戏馆歌楼，三朋四友，甚是有兴。一日，文泽回来，路过林春喜门口，着人问了春喜在家，文泽下了车进去。远远望见春喜穿着白□丝衫..."',
        zh: "出场于此章节，文本描述：“...日子，可以出来散散。戏馆歌楼，三朋四友，甚是有兴。一日，文泽回来，路过林春喜门口，着人问了春喜在家，文泽下了车进去。远远望见春喜穿着白□丝衫...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...是唱的《南浦》道：「无限别离情，两月夫妻，一旦孤另。」桂保谓春喜道：「小梅你近来很讲究唱法，南曲逢入声字，应断，还是可以不断呢？」春喜道：「..."',
        zh: "出场于此章节，文本描述：“...是唱的《南浦》道：「无限别离情，两月夫妻，一旦孤另。」桂保谓春喜道：「小梅你近来很讲究唱法，南曲逢入声字，应断，还是可以不断呢？」春喜道：「...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...妙，但我们的诗配不上他们。且请谁画这些像呢？」蕙芳道：「就是瑶卿，你与小梅两人分画罢，也不必画服饰，不衫不履的最妙。我们今晚先把赞语做起，明..."',
        zh: "出场于此章节，文本描述：“...妙，但我们的诗配不上他们。且请谁画这些像呢？」蕙芳道：「就是瑶卿，你与小梅两人分画罢，也不必画服饰，不衫不履的最妙。我们今晚先把赞语做起，明...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...古松自挺，碧萝难依。太华入云，蓬莱隔水。谁登其峰，徒兴仰止。 第六首是林春喜题的《仙中和品》：..."',
        zh: "出场于此章节，文本描述：“...古松自挺，碧萝难依。太华入云，蓬莱隔水。谁登其峰，徒兴仰止。 第六首是林春喜题的《仙中和品》：...”",
      },
    ],
  },
  "char-38": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...见王恂问那人道：「你这相公叫什么名字？」那人道：「叫保珠。」子玉听了，忍不住一笑。又见王恂问道：「你不在桂保处么？」那人道..."',
        zh: "出场于此章节，文本描述：“...见王恂问那人道：「你这相公叫什么名字？」那人道：「叫保珠。」子玉听了，忍不住一笑。又见王恂问道：「你不在桂保处么？」那人道...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...这么看来，『有目共赏』的一句，竟是妄言了。把方才这个保珠比他，做他的舆□，也还不配。」子玉一路想到了家；不知后事如何。且听..."',
        zh: "出场于此章节，文本描述：“...这么看来，『有目共赏』的一句，竟是妄言了。把方才这个保珠比他，做他的舆□，也还不配。」子玉一路想到了家；不知后事如何。且听...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...色为第一，如果真美色，天下人没有不爱的。子玉前日在戏园的光景，倒像那个保珠沾染了他什么，那片心应该永远不动才是。谁知一个琴官，见了两次，还如..."',
        zh: "出场于此章节，文本描述：“...色为第一，如果真美色，天下人没有不爱的。子玉前日在戏园的光景，倒像那个保珠沾染了他什么，那片心应该永远不动才是。谁知一个琴官，见了两次，还如...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...道：「冤哉！冤哉！那个那里是袁宝珠，那是顶黑的黑相公，偏偏他的名字也叫保珠，庾香一听就当是你定的第一名。我也想着要分辨，就被那保环缠住，没有..."',
        zh: "出场于此章节，文本描述：“...道：「冤哉！冤哉！那个那里是袁宝珠，那是顶黑的黑相公，偏偏他的名字也叫保珠，庾香一听就当是你定的第一名。我也想着要分辨，就被那保环缠住，没有...”",
      },
    ],
    8: [
      {
        en: 'Features in a scene where the narrative notes: "...一出《嫖院》，便又一个相公到张仲雨身边，也坐着不走。聘才问他的名字，叫保珠。台上又换一出《女弹词》，一出场，聘才认得是琪官。看他打扮得十分香..."',
        zh: "出场于此章节，文本描述：“...一出《嫖院》，便又一个相公到张仲雨身边，也坐着不走。聘才问他的名字，叫保珠。台上又换一出《女弹词》，一出场，聘才认得是琪官。看他打扮得十分香...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...两个黑相公，夹着个怯老斗，把个李元茂左顾右盼，应接不暇。保珠、二喜抢装烟，抢倒茶，一个挨紧了膀子，一个挤紧了腿。李元茂得意洋洋..."',
        zh: "出场于此章节，文本描述：“...两个黑相公，夹着个怯老斗，把个李元茂左顾右盼，应接不暇。保珠、二喜抢装烟，抢倒茶，一个挨紧了膀子，一个挤紧了腿。李元茂得意洋洋...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...，借了十吊钱的票子，分作两张，写了一封字，叫四儿送与叶茂林，分给二喜、保珠。后来子玉盘问，聘才、元茂只推张仲雨请去听戏下馆子，却将实情瞒过了..."',
        zh: "出场于此章节，文本描述：“...，借了十吊钱的票子，分作两张，写了一封字，叫四儿送与叶茂林，分给二喜、保珠。后来子玉盘问，聘才、元茂只推张仲雨请去听戏下馆子，却将实情瞒过了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...称珠玉？那个名字，叫他改了才好。」宝珠不解，便问王恂，王恂就将去年所见保珠，子玉听错的话说了，宝珠嫣然而笑。..."',
        zh: "出场于此章节，文本描述：“...称珠玉？那个名字，叫他改了才好。」宝珠不解，便问王恂，王恂就将去年所见保珠，子玉听错的话说了，宝珠嫣然而笑。...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...：「我听走堂的说起来，却说得原原委委。新年上，这姓魏的同了几个人，带着保珠、二喜，吃了五十几吊钱，掌柜的因不认识，写账的时候，想必说了什么话..."',
        zh: "出场于此章节，文本描述：“...：「我听走堂的说起来，却说得原原委委。新年上，这姓魏的同了几个人，带着保珠、二喜，吃了五十几吊钱，掌柜的因不认识，写账的时候，想必说了什么话...”",
      },
    ],
  },
  "char-46": {
    1: [
      {
        en: 'Features in a scene where the narrative notes: "...见王恂问那人道：「你这相公叫什么名字？」那人道：「叫保珠。」子玉听了，忍不住一笑。又见王恂问道：「你不在桂保处么？」那人道..."',
        zh: "出场于此章节，文本描述：“...见王恂问那人道：「你这相公叫什么名字？」那人道：「叫保珠。」子玉听了，忍不住一笑。又见王恂问道：「你不在桂保处么？」那人道...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...这么看来，『有目共赏』的一句，竟是妄言了。把方才这个保珠比他，做他的舆□，也还不配。」子玉一路想到了家；不知后事如何。且听..."',
        zh: "出场于此章节，文本描述：“...这么看来，『有目共赏』的一句，竟是妄言了。把方才这个保珠比他，做他的舆□，也还不配。」子玉一路想到了家；不知后事如何。且听...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...色为第一，如果真美色，天下人没有不爱的。子玉前日在戏园的光景，倒像那个保珠沾染了他什么，那片心应该永远不动才是。谁知一个琴官，见了两次，还如..."',
        zh: "出场于此章节，文本描述：“...色为第一，如果真美色，天下人没有不爱的。子玉前日在戏园的光景，倒像那个保珠沾染了他什么，那片心应该永远不动才是。谁知一个琴官，见了两次，还如...”",
      },
    ],
    6: [
      {
        en: 'Features in a scene where the narrative notes: "...道：「冤哉！冤哉！那个那里是袁宝珠，那是顶黑的黑相公，偏偏他的名字也叫保珠，庾香一听就当是你定的第一名。我也想着要分辨，就被那保环缠住，没有..."',
        zh: "出场于此章节，文本描述：“...道：「冤哉！冤哉！那个那里是袁宝珠，那是顶黑的黑相公，偏偏他的名字也叫保珠，庾香一听就当是你定的第一名。我也想着要分辨，就被那保环缠住，没有...”",
      },
    ],
    8: [
      {
        en: 'Features in a scene where the narrative notes: "...一出《嫖院》，便又一个相公到张仲雨身边，也坐着不走。聘才问他的名字，叫保珠。台上又换一出《女弹词》，一出场，聘才认得是琪官。看他打扮得十分香..."',
        zh: "出场于此章节，文本描述：“...一出《嫖院》，便又一个相公到张仲雨身边，也坐着不走。聘才问他的名字，叫保珠。台上又换一出《女弹词》，一出场，聘才认得是琪官。看他打扮得十分香...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...两个黑相公，夹着个怯老斗，把个李元茂左顾右盼，应接不暇。保珠、二喜抢装烟，抢倒茶，一个挨紧了膀子，一个挤紧了腿。李元茂得意洋洋..."',
        zh: "出场于此章节，文本描述：“...两个黑相公，夹着个怯老斗，把个李元茂左顾右盼，应接不暇。保珠、二喜抢装烟，抢倒茶，一个挨紧了膀子，一个挤紧了腿。李元茂得意洋洋...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...，借了十吊钱的票子，分作两张，写了一封字，叫四儿送与叶茂林，分给二喜、保珠。后来子玉盘问，聘才、元茂只推张仲雨请去听戏下馆子，却将实情瞒过了..."',
        zh: "出场于此章节，文本描述：“...，借了十吊钱的票子，分作两张，写了一封字，叫四儿送与叶茂林，分给二喜、保珠。后来子玉盘问，聘才、元茂只推张仲雨请去听戏下馆子，却将实情瞒过了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...称珠玉？那个名字，叫他改了才好。」宝珠不解，便问王恂，王恂就将去年所见保珠，子玉听错的话说了，宝珠嫣然而笑。..."',
        zh: "出场于此章节，文本描述：“...称珠玉？那个名字，叫他改了才好。」宝珠不解，便问王恂，王恂就将去年所见保珠，子玉听错的话说了，宝珠嫣然而笑。...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...：「我听走堂的说起来，却说得原原委委。新年上，这姓魏的同了几个人，带着保珠、二喜，吃了五十几吊钱，掌柜的因不认识，写账的时候，想必说了什么话..."',
        zh: "出场于此章节，文本描述：“...：「我听走堂的说起来，却说得原原委委。新年上，这姓魏的同了几个人，带着保珠、二喜，吃了五十几吊钱，掌柜的因不认识，写账的时候，想必说了什么话...”",
      },
    ],
  },
  "char-31": {
    2: [
      {
        en: 'Features in a scene where the narrative notes: "...戏，倒也听会了许多。我们这个船上，有五个孩子，顶好的有两个：一个小旦叫琪官，年十四岁。他的颜色就像花粉和了姻脂水，勾匀的搓成，一弹就破的。另..."',
        zh: "出场于此章节，文本描述：“...戏，倒也听会了许多。我们这个船上，有五个孩子，顶好的有两个：一个小旦叫琪官，年十四岁。他的颜色就像花粉和了姻脂水，勾匀的搓成，一弹就破的。另...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...样。」便又问道：「你说那个顶好的叫什么名字？」聘才道：「叫琴官。那个叫琪官。」子玉道：「琴官进城那一天穿的什么衣裳？」聘才道：「都是蓝绉绸皮..."',
        zh: "出场于此章节，文本描述：“...样。」便又问道：「你说那个顶好的叫什么名字？」聘才道：「叫琴官。那个叫琪官。」子玉道：「琴官进城那一天穿的什么衣裳？」聘才道：「都是蓝绉绸皮...”",
      },
    ],
    3: [
      {
        en: 'Features in a scene where the narrative notes: "...琪官定于腊月初十日上台，其余各自跟他师傅，也有在联锦班的，也有过别班里..."',
        zh: "出场于此章节，文本描述：“...琪官定于腊月初十日上台，其余各自跟他师傅，也有在联锦班的，也有过别班里...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...年，再与他们来。」又说道：「我们班里来了两个新脚色，一个叫琴官，一个叫琪官，你们见过没有？」仲清道，「前日蕊香说起两人来，刚说时就有人来打断..."',
        zh: "出场于此章节，文本描述：“...年，再与他们来。」又说道：「我们班里来了两个新脚色，一个叫琴官，一个叫琪官，你们见过没有？」仲清道，「前日蕊香说起两人来，刚说时就有人来打断...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...一日，子云在堂会中，见了新来的琴官、琪官两个，十分赞赏，叹为创见，正与那八个名旦一气相孚，才生了物色的念头..."',
        zh: "出场于此章节，文本描述：“...一日，子云在堂会中，见了新来的琴官、琪官两个，十分赞赏，叹为创见，正与那八个名旦一气相孚，才生了物色的念头...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...是日琪官感冒，不能起来，袁宝珠先到琴官寓里。这个宝珠的容貌，《花选》中已经..."',
        zh: "出场于此章节，文本描述：“...是日琪官感冒，不能起来，袁宝珠先到琴官寓里。这个宝珠的容貌，《花选》中已经...”",
      },
    ],
    8: [
      {
        en: 'Features in a scene where the narrative notes: "...「我也见过这人，相貌倒好，就是人冷些。如今是天天在怡园徐度香处。还有个琪官，略比他和气些。」聘才道：「这个琴官，是我们梅庾香最得意的。」仲两..."',
        zh: "出场于此章节，文本描述：“...「我也见过这人，相貌倒好，就是人冷些。如今是天天在怡园徐度香处。还有个琪官，略比他和气些。」聘才道：「这个琴官，是我们梅庾香最得意的。」仲两...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...走。聘才问他的名字，叫保珠。台上又换一出《女弹词》，一出场，聘才认得是琪官。看他打扮得十分香艳，颇有花含晓露，月印暗川之致，两边楼上喝采不迭..."',
        zh: "出场于此章节，文本描述：“...走。聘才问他的名字，叫保珠。台上又换一出《女弹词》，一出场，聘才认得是琪官。看他打扮得十分香艳，颇有花含晓露，月印暗川之致，两边楼上喝采不迭...”",
      },
    ],
    17: [
      {
        en: 'Features in a scene where the narrative notes: "...王恂道：「是呀，我真该打，一时竟忘了琴言，是必要他来的。还有那个秦琪官号玉艳的也叫了他来，凑成十个。」众人道：「如此更妙。」子玉道：「如..."',
        zh: "出场于此章节，文本描述：“...王恂道：「是呀，我真该打，一时竟忘了琴言，是必要他来的。还有那个秦琪官号玉艳的也叫了他来，凑成十个。」众人道：「如此更妙。」子玉道：「如...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...会群花，于明日辰刻毕集。因说道：「明日花林中，恐有几个不能来。我知道秦琪官害眼，杜琴言亦患病未痊。昨晚我见素兰，谈及庚香在彼处坐了半日，去访..."',
        zh: "出场于此章节，文本描述：“...会群花，于明日辰刻毕集。因说道：「明日花林中，恐有几个不能来。我知道秦琪官害眼，杜琴言亦患病未痊。昨晚我见素兰，谈及庚香在彼处坐了半日，去访...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...真病呢，还是推托的？笑梅道：「自然是真病，推托什么。」聘才道：「还有个琪官也是很好的，我正月里叫过他几回，倒是全来的。」聘才又写了条子去叫琪..."',
        zh: "出场于此章节，文本描述：“...真病呢，还是推托的？笑梅道：「自然是真病，推托什么。」聘才道：「还有个琪官也是很好的，我正月里叫过他几回，倒是全来的。」聘才又写了条子去叫琪...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...闹了一阵，只不见蓉官、琪官到来。笑梅道：「奇了，今日是忌辰，倒叫不出相公来。」二喜道：「还有..."',
        zh: "出场于此章节，文本描述：“...闹了一阵，只不见蓉官、琪官到来。笑梅道：「奇了，今日是忌辰，倒叫不出相公来。」二喜道：「还有...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...初听了不知他说些什么，后来想了出来：「他误听『愈浓、愈艳』，当是问你与琪官那个好？他就所以说出这两句来，惹得静宜、度香笑个不了。庾香也想出错..."',
        zh: "出场于此章节，文本描述：“...初听了不知他说些什么，后来想了出来：「他误听『愈浓、愈艳』，当是问你与琪官那个好？他就所以说出这两句来，惹得静宜、度香笑个不了。庾香也想出错...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...奚十一，专爱糟蹋相公，有一个木桶哄人，不到手不歇，受其荼毒者不少。前日琪官竟为所骗，幸其性烈，毁其木桶而出，双手竟刮得稀烂，至今尚未全好，此..."',
        zh: "出场于此章节，文本描述：“...奚十一，专爱糟蹋相公，有一个木桶哄人，不到手不歇，受其荼毒者不少。前日琪官竟为所骗，幸其性烈，毁其木桶而出，双手竟刮得稀烂，至今尚未全好，此...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...一天，忽然的病就好了。」王恂道：「此是人逢喜气精神爽了。」仲清道：「那琪官不是坏了手，如今想也好了。」玉林听得仲清说起此事，便低了首，春山半..."',
        zh: "出场于此章节，文本描述：“...一天，忽然的病就好了。」王恂道：「此是人逢喜气精神爽了。」仲清道：「那琪官不是坏了手，如今想也好了。」玉林听得仲清说起此事，便低了首，春山半...”",
      },
    ],
    26: [
      {
        en: 'Features in a scene where the narrative notes: "...于是即与聘才同吃了晚饭，席间聘才又把琴言情性才艺，讲得个锦上添花，又将琪官也保举了一番，直到定更后才散。..."',
        zh: "出场于此章节，文本描述：“...于是即与聘才同吃了晚饭，席间聘才又把琴言情性才艺，讲得个锦上添花，又将琪官也保举了一番，直到定更后才散。...”",
      },
    ],
    28: [
      {
        en: 'Features in a scene where the narrative notes: "...甚喜，忙出迎进。只见房内走出两人来：子玉看时，认得一个是王兰保；一个是琪官，因多时不见他，即看了他一看。见他杏脸搓酥，柳眉耸翠，光彩奕奕，袅..."',
        zh: "出场于此章节，文本描述：“...甚喜，忙出迎进。只见房内走出两人来：子玉看时，认得一个是王兰保；一个是琪官，因多时不见他，即看了他一看。见他杏脸搓酥，柳眉耸翠，光彩奕奕，袅...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...」子玉道：「这是什么话？那里有这个称呼？」素兰道：「这个称呼倒也通。」琪官也不好意思，便道：「静芳不要取笑。」兰保道：「这倒也不算取笑，你是..."',
        zh: "出场于此章节，文本描述：“...」子玉道：「这是什么话？那里有这个称呼？」素兰道：「这个称呼倒也通。」琪官也不好意思，便道：「静芳不要取笑。」兰保道：「这倒也不算取笑，你是...”",
      },
    ],
    30: [
      {
        en: 'Features in a scene where the narrative notes: "...贤略述了几处。随后即见宝珠、蕙芳、素兰、漱芳、玉林、兰保、桂保，春喜、琪官等九个，又凑上一个，作了一出《秦淮河看花大会》，有幽闲的，有妖冶的..."',
        zh: "出场于此章节，文本描述：“...贤略述了几处。随后即见宝珠、蕙芳、素兰、漱芳、玉林、兰保、桂保，春喜、琪官等九个，又凑上一个，作了一出《秦淮河看花大会》，有幽闲的，有妖冶的...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...场中未来。相公们到的是宝珠、蕙芳、素兰、玉林、漱芳、兰保、桂保、春喜、琪官、连琴言刚是十人。..."',
        zh: "出场于此章节，文本描述：“...场中未来。相公们到的是宝珠、蕙芳、素兰、玉林、漱芳、兰保、桂保、春喜、琪官、连琴言刚是十人。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...道生与琴言拜送了杜兰仙，重新焚香换酒，众名士一齐下拜，换了琪官、春喜上来扶乩。道生道：「今日坡仙必有佳作，我们当□漱恭读。」只见..."',
        zh: "出场于此章节，文本描述：“...道生与琴言拜送了杜兰仙，重新焚香换酒，众名士一齐下拜，换了琪官、春喜上来扶乩。道生道：「今日坡仙必有佳作，我们当□漱恭读。」只见...”",
      },
    ],
    46: [
      {
        en: 'Features in a scene where the narrative notes: "...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道：「今日这二十四副..."',
        zh: "出场于此章节，文本描述：“...正饭酒间，王兰保、金漱芳、秦琪官、林春喜同来见了，即分开坐了，谈了些闲话。子云道：「今日这二十四副...”",
      },
    ],
    48: [
      {
        en: 'Features in a scene where the narrative notes: "...明日，道翁还有事进城。琪官因与琴仙一同来京，且同一师傅学戏，如今见他跳出樊笼，得以出京，心里..."',
        zh: "出场于此章节，文本描述：“...明日，道翁还有事进城。琪官因与琴仙一同来京，且同一师傅学戏，如今见他跳出樊笼，得以出京，心里...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...子玉喜欢，一径就到琪官寓处，进去见琴仙已等了好一会，还有一个老年人在那里说话。见了子玉，..."',
        zh: "出场于此章节，文本描述：“...子玉喜欢，一径就到琪官寓处，进去见琴仙已等了好一会，还有一个老年人在那里说话。见了子玉，...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...说我比他好，我也不安，将来或者赶得上他。」正说话间，只见仲清、王恂同着琪官、桂保进来。..."',
        zh: "出场于此章节，文本描述：“...说我比他好，我也不安，将来或者赶得上他。」正说话间，只见仲清、王恂同着琪官、桂保进来。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...桃、杏仁、大桃儿、葡萄、雪藕之类，浸在冰里。首坐仲清，次文泽，次王恂，琪官、春喜、桂保相间而坐。来了几样菜，各人随意小酌闲谈。..."',
        zh: "出场于此章节，文本描述：“...桃、杏仁、大桃儿、葡萄、雪藕之类，浸在冰里。首坐仲清，次文泽，次王恂，琪官、春喜、桂保相间而坐。来了几样菜，各人随意小酌闲谈。...”",
      },
    ],
    59: [
      {
        en: 'Features in a scene where the narrative notes: "...心中大喜，知琴仙到了江西任所了，便忙拆开，看见还有与子云、蕙芳、素兰、琪官的信，且搁过一边。拆开自己的信，见一张白纸写着「哀启者」，大为骇然..."',
        zh: "出场于此章节，文本描述：“...心中大喜，知琴仙到了江西任所了，便忙拆开，看见还有与子云、蕙芳、素兰、琪官的信，且搁过一边。拆开自己的信，见一张白纸写着「哀启者」，大为骇然...”",
      },
    ],
    60: [
      {
        en: 'Features in a scene where the narrative notes: "...云拈了道翁，子玉拈了杜仙女、琴仙，金粟拈了宝珠，春航拈了蕙芳，仲清拈了琪官，文泽拈了春喜，南湘拈了兰保，王恂拈了桂保，高品拈了玉林，次贤拈了..."',
        zh: "出场于此章节，文本描述：“...云拈了道翁，子玉拈了杜仙女、琴仙，金粟拈了宝珠，春航拈了蕙芳，仲清拈了琪官，文泽拈了春喜，南湘拈了兰保，王恂拈了桂保，高品拈了玉林，次贤拈了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...方，画一个杏花，下有一个仙女，珠腰玉衱，十分妩媚，题曰：及第花史。知是琪官，看颜仲清的序文：..."',
        zh: "出场于此章节，文本描述：“...方，画一个杏花，下有一个仙女，珠腰玉衱，十分妩媚，题曰：及第花史。知是琪官，看颜仲清的序文：...”",
      },
    ],
  },
  "char-43": {
    2: [
      {
        en: 'Features in a scene where the narrative notes: "...爷一杯酒，务必赏个脸儿。」说着，把眼睛四下里飞了一转，宛然联锦班内京丑谭八的丑态，引得合席大笑，桂保笑得如花枝乱颤，杨方猷只得饮了一杯。孙亮..."',
        zh: "出场于此章节，文本描述：“...爷一杯酒，务必赏个脸儿。」说着，把眼睛四下里飞了一转，宛然联锦班内京丑谭八的丑态，引得合席大笑，桂保笑得如花枝乱颤，杨方猷只得饮了一杯。孙亮...”",
      },
    ],
  },
  "char-32": {
    3: [
      {
        en: 'Features in a scene where the narrative notes: "...肩上。那先坐的两个相公，便跳将下去，摔着袖子走了。只听得那胖子说道：「蓉官，怎么两三月不见你的影儿？你也总不进城来瞧我，好个红相公。我前日在..."',
        zh: "出场于此章节，文本描述：“...肩上。那先坐的两个相公，便跳将下去，摔着袖子走了。只听得那胖子说道：「蓉官，怎么两三月不见你的影儿？你也总不进城来瞧我，好个红相公。我前日在...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...蓉官没有说完，把那胖子笑得眼皮裹着眼睛，没了缝，把蓉官嘴上一拧，骂道：..."',
        zh: "出场于此章节，文本描述：“...蓉官没有说完，把那胖子笑得眼皮裹着眼睛，没了缝，把蓉官嘴上一拧，骂道：...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...州话在里头。再看那四个相公，却非名下青钱，不过花中凡艳。王恂认得一个是蓉官，那三个都不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四..."',
        zh: "出场于此章节，文本描述：“...州话在里头。再看那四个相公，却非名下青钱，不过花中凡艳。王恂认得一个是蓉官，那三个都不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...蓉官道：「我们这二联班，是堂会戏多，几个唱昆腔的好相公总在堂会里，园子..."',
        zh: "出场于此章节，文本描述：“...蓉官道：「我们这二联班，是堂会戏多，几个唱昆腔的好相公总在堂会里，园子...”",
      },
    ],
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...「前日戏园里，蓉官说他青姨奶奶、白姨奶奶打架起来，摔这样，砸那样，我当是顽话。今日看..."',
        zh: "出场于此章节，文本描述：“...「前日戏园里，蓉官说他青姨奶奶、白姨奶奶打架起来，摔这样，砸那样，我当是顽话。今日看...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...爱的一班不好，春航不服。及见了李玉林来看高品，那一种娟媚韶秀的丰致，比蓉官等似要好些，便此心自讼了几日。..."',
        zh: "出场于此章节，文本描述：“...爱的一班不好，春航不服。及见了李玉林来看高品，那一种娟媚韶秀的丰致，比蓉官等似要好些，便此心自讼了几日。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...能免俗，聊复尔尔。大约诸名班中，要推登春的玉美、全福的翠宝，其余联珠的蓉官，也还可以，想都是有目共赏的。」仲清笑了一笑道：「叶公好龙，未见真..."',
        zh: "出场于此章节，文本描述：“...能免俗，聊复尔尔。大约诸名班中，要推登春的玉美、全福的翠宝，其余联珠的蓉官，也还可以，想都是有目共赏的。」仲清笑了一笑道：「叶公好龙，未见真...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...「我叫蓉官罢。」又问子佩，子佩道：「叫了三人，也就热闹。我不叫，我算吃镶边酒..."',
        zh: "出场于此章节，文本描述：“...「我叫蓉官罢。」又问子佩，子佩道：「叫了三人，也就热闹。我不叫，我算吃镶边酒...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...只见那走堂的进来道：「琴官、玉林都说病着不能来，蓉官就来。」聘才原料琴官不来的，只好罢了。倒是杨梅窗心上不快，说道：「..."',
        zh: "出场于此章节，文本描述：“...只见那走堂的进来道：「琴官、玉林都说病着不能来，蓉官就来。」聘才原料琴官不来的，只好罢了。倒是杨梅窗心上不快，说道：「...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...装起瞌睡来，我怕他不好意思，只好辞了出来。走到门房门口，见跟那联珠班内蓉官的得子与那些三爷们讲话，我知道是蓉官了。玉侬，你想蓉官这种东西，交..."',
        zh: "出场于此章节，文本描述：“...装起瞌睡来，我怕他不好意思，只好辞了出来。走到门房门口，见跟那联珠班内蓉官的得子与那些三爷们讲话，我知道是蓉官了。玉侬，你想蓉官这种东西，交...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...王恂道：「还有几个人索性请你批评批评。」桂保笑道：「是谁？」王恂道：「蓉官、二喜、玉美、春林、凤林，这些人又是怎样？」桂保笑道：「这又是一路..."',
        zh: "出场于此章节，文本描述：“...王恂道：「还有几个人索性请你批评批评。」桂保笑道：「是谁？」王恂道：「蓉官、二喜、玉美、春林、凤林，这些人又是怎样？」桂保笑道：「这又是一路...”",
      },
    ],
    27: [
      {
        en: 'Features in a scene where the narrative notes: "...官进去了。仲雨不知其故，只道有事，便与亮轩讲些闲话。这两个相公，一个是蓉官，一个是春林，皆是奚十一常叫的。蓉官对着春林做眼色，春林笑了一笑。..."',
        zh: "出场于此章节，文本描述：“...官进去了。仲雨不知其故，只道有事，便与亮轩讲些闲话。这两个相公，一个是蓉官，一个是春林，皆是奚十一常叫的。蓉官对着春林做眼色，春林笑了一笑。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...，快再干两杯，我们豁几拳罢。」仲雨道：「也好。」奚十一就与仲雨、亮轩、蓉官、春林豁了十拳，起初还叫得清，后来便叫出怪声。广东人豁拳是最难听的..."',
        zh: "出场于此章节，文本描述：“...，快再干两杯，我们豁几拳罢。」仲雨道：「也好。」奚十一就与仲雨、亮轩、蓉官、春林豁了十拳，起初还叫得清，后来便叫出怪声。广东人豁拳是最难听的...”",
      },
    ],
    29: [
      {
        en: 'Features in a scene where the narrative notes: "...头换面，添起枝叶，把个子玉、琴言说得无所不至。不料王通政在人家席上遇着蓉官、二喜等类，就把子玉、琴言的事说得活龙活现。文辉本看过子玉之病，也..."',
        zh: "出场于此章节，文本描述：“...头换面，添起枝叶，把个子玉、琴言说得无所不至。不料王通政在人家席上遇着蓉官、二喜等类，就把子玉、琴言的事说得活龙活现。文辉本看过子玉之病，也...”",
      },
    ],
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...那一日魏聘才请富三爷在蓉官寓里喝酒，富三爷想起一件事来，先进城去了。聘才便不进城，叫蓉官去叫..."',
        zh: "出场于此章节，文本描述：“...那一日魏聘才请富三爷在蓉官寓里喝酒，富三爷想起一件事来，先进城去了。聘才便不进城，叫蓉官去叫...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...罢。」梅进回去照直说了，颜夫人也无法，只得听其自然。且说聘才在监里许了蓉官与玉天仙许多银子，叫他们跟着他的口供，说系那日吏目请他在蓉官寓处吃..."',
        zh: "出场于此章节，文本描述：“...罢。」梅进回去照直说了，颜夫人也无法，只得听其自然。且说聘才在监里许了蓉官与玉天仙许多银子，叫他们跟着他的口供，说系那日吏目请他在蓉官寓处吃...”",
      },
    ],
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...大爷病了，张仲雨有事不能来。即补了冯子佩、唐和尚，宾主共七位。聘才叫了蓉官来陪富三，着人到篷子里叫了天香、翠官前来。不多一刻，两个剃头的也坐..."',
        zh: "出场于此章节，文本描述：“...大爷病了，张仲雨有事不能来。即补了冯子佩、唐和尚，宾主共七位。聘才叫了蓉官来陪富三，着人到篷子里叫了天香、翠官前来。不多一刻，两个剃头的也坐...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...坐了第三，聘才叫天香挨着他。潘三坐了第四，自己与唐和尚坐了主位，只不见蓉官来。饮酒之间，撒村笑骂，嘈杂到个不成样子。还是富三稳重些，不过与翠..."',
        zh: "出场于此章节，文本描述：“...坐了第三，聘才叫天香挨着他。潘三坐了第四，自己与唐和尚坐了主位，只不见蓉官来。饮酒之间，撒村笑骂，嘈杂到个不成样子。还是富三稳重些，不过与翠...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...初，大家都要作别。此时已经开城，富三与杨八也要回去。外面正在套车，只见蓉官坐了车来。..."',
        zh: "出场于此章节，文本描述：“...初，大家都要作别。此时已经开城，富三与杨八也要回去。外面正在套车，只见蓉官坐了车来。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...富三的家人道：「客要散了，你才来。」蓉官甩着袖子，急急走进来，见了众人，请了安，见要散的样子。富三道：「好..."',
        zh: "出场于此章节，文本描述：“...富三的家人道：「客要散了，你才来。」蓉官甩着袖子，急急走进来，见了众人，请了安，见要散的样子。富三道：「好...”",
      },
    ],
  },
  "char-34": {
    3: [
      {
        en: 'Features in a scene where the narrative notes: "...瞅着那胖子说道：「三老爷你好冤，人说你常在全福班听戏，花了三千吊钱，替小福出师。你瞧瞧小福在对面楼上，他竟不过来呢。」那胖子道：「那里来这些..."',
        zh: "出场于此章节，文本描述：“...瞅着那胖子说道：「三老爷你好冤，人说你常在全福班听戏，花了三千吊钱，替小福出师。你瞧瞧小福在对面楼上，他竟不过来呢。」那胖子道：「那里来这些...”",
      },
    ],
  },
  "char-37": {
    3: [
      {
        en: 'Features in a scene where the narrative notes: "...，衣裳华美，香气袭人。这蓉官瞅着那胖子说道：「三老爷你好冤，人说你常在全福班听戏，花了三千吊钱，替小福出师。你瞧瞧小福在对面楼上，他竟不过来..."',
        zh: "出场于此章节，文本描述：“...，衣裳华美，香气袭人。这蓉官瞅着那胖子说道：「三老爷你好冤，人说你常在全福班听戏，花了三千吊钱，替小福出师。你瞧瞧小福在对面楼上，他竟不过来...”",
      },
    ],
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四喜，穿水獭的是全福。都是剑春班的。」只见那位少年，将这边楼上望了一望，也就背转身子坐..."',
        zh: "出场于此章节，文本描述：“...不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四喜，穿水獭的是全福。都是剑春班的。」只见那位少年，将这边楼上望了一望，也就背转身子坐...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...也不过逢扬作戏，所谓未能免俗，聊复尔尔。大约诸名班中，要推登春的玉美、全福的翠宝，其余联珠的蓉官，也还可以，想都是有目共赏的。」仲清笑了一笑..."',
        zh: "出场于此章节，文本描述：“...也不过逢扬作戏，所谓未能免俗，聊复尔尔。大约诸名班中，要推登春的玉美、全福的翠宝，其余联珠的蓉官，也还可以，想都是有目共赏的。」仲清笑了一笑...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...春航也无心再看，付了戏钱。出得门来，地下已滑得似油一样。不多几时，只见全福班的翠宝坐着车，劈面过来，见了他，扭转了头，竟过去了。春航心里颇为..."',
        zh: "出场于此章节，文本描述：“...春航也无心再看，付了戏钱。出得门来，地下已滑得似油一样。不多几时，只见全福班的翠宝坐着车，劈面过来，见了他，扭转了头，竟过去了。春航心里颇为...”",
      },
    ],
    30: [
      {
        en: 'Features in a scene where the narrative notes: "...十旦上来敬酒。众人一齐上来，肥瘦纤浓，各极其妙。子云看九人之外添了一个全福班的全贵，也很娇娆艳丽，风致动人。都请过了安，齐齐的手捧金杯，分头..."',
        zh: "出场于此章节，文本描述：“...十旦上来敬酒。众人一齐上来，肥瘦纤浓，各极其妙。子云看九人之外添了一个全福班的全贵，也很娇娆艳丽，风致动人。都请过了安，齐齐的手捧金杯，分头...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...友。」有几个会串戏的在内，大家公议：「每人凑钱十吊，共得九十吊，遂叫了全福班演戏。归自荣高兴，与一个姓吕的串了一出《独占》。」文泽道：「归自..."',
        zh: "出场于此章节，文本描述：“...友。」有几个会串戏的在内，大家公议：「每人凑钱十吊，共得九十吊，遂叫了全福班演戏。归自荣高兴，与一个姓吕的串了一出《独占》。」文泽道：「归自...”",
      },
    ],
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...官与富三、和尚都请了安。富三却不认识，问他是谁，在那一班的，聘才就说是全福班的。随后奚十一、潘三同来。奚十一带了巴英官，潘三带了个学徒弟的小..."',
        zh: "出场于此章节，文本描述：“...官与富三、和尚都请了安。富三却不认识，问他是谁，在那一班的，聘才就说是全福班的。随后奚十一、潘三同来。奚十一带了巴英官，潘三带了个学徒弟的小...”",
      },
    ],
    49: [
      {
        en: 'Features in a scene where the narrative notes: "...，那里像花甲之人，正是龙马精神，我们是比不上的。而且尊公的福气那是世间全福，就是令泰山也比不上他。」子云道：「总是天恩祖德，家父一路算平稳，..."',
        zh: "出场于此章节，文本描述：“...，那里像花甲之人，正是龙马精神，我们是比不上的。而且尊公的福气那是世间全福，就是令泰山也比不上他。」子云道：「总是天恩祖德，家父一路算平稳，...”",
      },
    ],
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...今日却也沾了多少光，托了多少福。」田老夫人笑道：「我看太太的福气也就是全福了，自己是正二品的诰命，到一品也快了。膝下佳儿、佳妇朝夕承欢，还有..."',
        zh: "出场于此章节，文本描述：“...今日却也沾了多少光，托了多少福。」田老夫人笑道：「我看太太的福气也就是全福了，自己是正二品的诰命，到一品也快了。膝下佳儿、佳妇朝夕承欢，还有...”",
      },
    ],
  },
  "char-33": {
    3: [
      {
        en: 'Features in a scene where the narrative notes: "...东人，我只听得人都称他奚大老爷，我也是才认识他。且他也到京未久，他就待春兰待得好。今日春兰身上穿那件玄狐腿子的，是奚大老爷身上脱下来，现叫毛..."',
        zh: "出场于此章节，文本描述：“...东人，我只听得人都称他奚大老爷，我也是才认识他。且他也到京未久，他就待春兰待得好。今日春兰身上穿那件玄狐腿子的，是奚大老爷身上脱下来，现叫毛...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...。只听得隔壁燕语莺声，甚为热闹。蓉官从板缝里望时，就是那个奚大老爷带了春兰，还有三个相公在那里。聘才问富三道：「老太爷的讳，上下是那两个字？..."',
        zh: "出场于此章节，文本描述：“...。只听得隔壁燕语莺声，甚为热闹。蓉官从板缝里望时，就是那个奚大老爷带了春兰，还有三个相公在那里。聘才问富三道：「老太爷的讳，上下是那两个字？...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...了，就凑不上了，只捐了一个知州。这个人真算个阔手，他一进京先认识登春班春兰，就天天把春兰放在屋里，衣裳、金镯子、热车等类，就不用讲了。春兰的..."',
        zh: "出场于此章节，文本描述：“...了，就凑不上了，只捐了一个知州。这个人真算个阔手，他一进京先认识登春班春兰，就天天把春兰放在屋里，衣裳、金镯子、热车等类，就不用讲了。春兰的...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...喜道这奚十一到底是什么人？这样横行霸道，又这样有钱？」二喜道：「我听得春兰讲，说也是个少爷，他家祖太爷做过布政司，他父亲现做提督呢。」聘才道..."',
        zh: "出场于此章节，文本描述：“...喜道这奚十一到底是什么人？这样横行霸道，又这样有钱？」二喜道：「我听得春兰讲，说也是个少爷，他家祖太爷做过布政司，他父亲现做提督呢。」聘才道...”",
      },
    ],
    27: [
      {
        en: 'Features in a scene where the narrative notes: "...更是下作，一饭之间，也要进去两次。从前还只一个，如今又添了巴英官，更比春兰巴结的好。巴英官肌肤虽黑，却光亮滑泽，得个油字诀，所以爱的人最多，..."',
        zh: "出场于此章节，文本描述：“...更是下作，一饭之间，也要进去两次。从前还只一个，如今又添了巴英官，更比春兰巴结的好。巴英官肌肤虽黑，却光亮滑泽，得个油字诀，所以爱的人最多，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...是日饮酒之间，奚十一叫春兰进去了一回，出来坐了一坐；又叫巴英官进去了。仲雨不知其故，只道有事..."',
        zh: "出场于此章节，文本描述：“...是日饮酒之间，奚十一叫春兰进去了一回，出来坐了一坐；又叫巴英官进去了。仲雨不知其故，只道有事...”",
      },
    ],
    40: [
      {
        en: 'Features in a scene where the narrative notes: "...好的再配，方才开交。那奚十一的为人，真是可笑，一味的弃旧怜新。从前买了春兰，也待得甚好，不到半年就冷淡了。去年得了巴英官，如获至宝，如今又弄..."',
        zh: "出场于此章节，文本描述：“...好的再配，方才开交。那奚十一的为人，真是可笑，一味的弃旧怜新。从前买了春兰，也待得甚好，不到半年就冷淡了。去年得了巴英官，如获至宝，如今又弄...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...那巴英官心中气忿，便与春兰闲谈说道：「从前老土待我们怎样，如今是有一个忘一个，你心上倒放得开..."',
        zh: "出场于此章节，文本描述：“...那巴英官心中气忿，便与春兰闲谈说道：「从前老土待我们怎样，如今是有一个忘一个，你心上倒放得开...”",
      },
    ],
    42: [
      {
        en: 'Features in a scene where the narrative notes: "...交的。你是不知道他的脾气，若混熟了，只怕还离不开呢。」大傻道：「不见那春兰么？」亮轩道：「春兰固然。本来钱也花多了，自应心悦诚服的了。我那英..."',
        zh: "出场于此章节，文本描述：“...交的。你是不知道他的脾气，若混熟了，只怕还离不开呢。」大傻道：「不见那春兰么？」亮轩道：「春兰固然。本来钱也花多了，自应心悦诚服的了。我那英...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...春兰秋桂非凡种，香色由来人所重。 尽待神仙闲品题，群花齐向天门拥。 子..."',
        zh: "出场于此章节，文本描述：“...春兰秋桂非凡种，香色由来人所重。 尽待神仙闲品题，群花齐向天门拥。 子...”",
      },
    ],
    47: [
      {
        en: 'Features in a scene where the narrative notes: "...道：「索性上了药，你再和唐师父吃烟。等这药性发一发，就好动手了。」此时春兰、英官也站在书房门口观望。..."',
        zh: "出场于此章节，文本描述：“...道：「索性上了药，你再和唐师父吃烟。等这药性发一发，就好动手了。」此时春兰、英官也站在书房门口观望。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...说要五寸，抬头一看，见门口有两个孩子站着，便当是他们讲的，也笑了一笑。春兰脸倒红了一红，英官鼻子里哼了一声。..."',
        zh: "出场于此章节，文本描述：“...说要五寸，抬头一看，见门口有两个孩子站着，便当是他们讲的，也笑了一笑。春兰脸倒红了一红，英官鼻子里哼了一声。...”",
      },
    ],
    58: [
      {
        en: 'Features in a scene where the narrative notes: "...散步，走到跟班房门口，见关着门，里面有笑声。菊花轻轻的在门缝里一张，见春兰弯着腰在炕边，看有四只脚站在一处。菊花一见，即把袖子掩了口，听巴英..."',
        zh: "出场于此章节，文本描述：“...散步，走到跟班房门口，见关着门，里面有笑声。菊花轻轻的在门缝里一张，见春兰弯着腰在炕边，看有四只脚站在一处。菊花一见，即把袖子掩了口，听巴英...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...了，见自己衣里露出个膝盖来，才记得没有穿裤子，连忙站起，走了出去。这边春兰与老婆子将英官扶出，放在他自己炕上去了。..."',
        zh: "出场于此章节，文本描述：“...了，见自己衣里露出个膝盖来，才记得没有穿裤子，连忙站起，走了出去。这边春兰与老婆子将英官扶出，放在他自己炕上去了。...”",
      },
    ],
  },
  "char-35": {
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...艳。王恂认得一个是蓉官，那三个都不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四喜，穿水獭的是全福。都是剑春班的。」只见那位少年，将..."',
        zh: "出场于此章节，文本描述：“...艳。王恂认得一个是蓉官，那三个都不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四喜，穿水獭的是全福。都是剑春班的。」只见那位少年，将...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...道：「我是讲究人，不讲究戏，与其戏雅而人俗，不如人雅而戏俗。」又听得那玉美讲道：「都是唱戏，分什么昆腔乱弹。就算昆腔曲文好些，也是古人做的，..."',
        zh: "出场于此章节，文本描述：“...道：「我是讲究人，不讲究戏，与其戏雅而人俗，不如人雅而戏俗。」又听得那玉美讲道：「都是唱戏，分什么昆腔乱弹。就算昆腔曲文好些，也是古人做的，...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...等。我也不过逢扬作戏，所谓未能免俗，聊复尔尔。大约诸名班中，要推登春的玉美、全福的翠宝，其余联珠的蓉官，也还可以，想都是有目共赏的。」仲清笑..."',
        zh: "出场于此章节，文本描述：“...等。我也不过逢扬作戏，所谓未能免俗，聊复尔尔。大约诸名班中，要推登春的玉美、全福的翠宝，其余联珠的蓉官，也还可以，想都是有目共赏的。」仲清笑...”",
      },
    ],
    22: [
      {
        en: 'Features in a scene where the narrative notes: "...个都不相识，不知是那一班的？素兰道：「我都认识。坐在怀里的，是登春班的玉美，那弹弦子的叫春林，唱的是叫凤林，皆是凤台班的。」子玉道：「看他们..."',
        zh: "出场于此章节，文本描述：“...个都不相识，不知是那一班的？素兰道：「我都认识。坐在怀里的，是登春班的玉美，那弹弦子的叫春林，唱的是叫凤林，皆是凤台班的。」子玉道：「看他们...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...有几个人索性请你批评批评。」桂保笑道：「是谁？」王恂道：「蓉官、二喜、玉美、春林、凤林，这些人又是怎样？」桂保笑道：「这又是一路，不与我们往..."',
        zh: "出场于此章节，文本描述：“...有几个人索性请你批评批评。」桂保笑道：「是谁？」王恂道：「蓉官、二喜、玉美、春林、凤林，这些人又是怎样？」桂保笑道：「这又是一路，不与我们往...”",
      },
    ],
  },
  "char-36": {
    4: [
      {
        en: 'Features in a scene where the narrative notes: "...是蓉官，那三个都不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四喜，穿水獭的是全福。都是剑春班的。」只见那位少年，将这边楼上望了一望..."',
        zh: "出场于此章节，文本描述：“...是蓉官，那三个都不认得，因问春喜。春喜道：「穿染貂的是玉美，穿倭刀的是四喜，穿水獭的是全福。都是剑春班的。」只见那位少年，将这边楼上望了一望...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...子，不唱戏时，班里就没有支得住的人，只怕听的人就少。这班子还要散呢。」四喜道：「依我说，总是一样，二簧也是戏，昆腔也是戏，学了什么就唱什么。..."',
        zh: "出场于此章节，文本描述：“...子，不唱戏时，班里就没有支得住的人，只怕听的人就少。这班子还要散呢。」四喜道：「依我说，总是一样，二簧也是戏，昆腔也是戏，学了什么就唱什么。...”",
      },
    ],
    16: [
      {
        en: 'Features in a scene where the narrative notes: "...太爷笔底下也来的，去年老佛爷叫他和过诗，并说好，还赏了黄辫子荷包一对，四喜搬指儿一个呢。你要去，我明日就荐你，包管可成。」聘才听得喜动颜色，..."',
        zh: "出场于此章节，文本描述：“...太爷笔底下也来的，去年老佛爷叫他和过诗，并说好，还赏了黄辫子荷包一对，四喜搬指儿一个呢。你要去，我明日就荐你，包管可成。」聘才听得喜动颜色，...”",
      },
    ],
    18: [
      {
        en: 'Features in a scene where the narrative notes: "...点儿，梳个丁字头，两鬓惺忪，插了一枝花。身上穿得素净，脚下拖了一双尖头四喜堆绒蝠的高底鞋，也到凳上坐下，与那两个讲话。听他口音不像北边，倒像..."',
        zh: "出场于此章节，文本描述：“...点儿，梳个丁字头，两鬓惺忪，插了一枝花。身上穿得素净，脚下拖了一双尖头四喜堆绒蝠的高底鞋，也到凳上坐下，与那两个讲话。听他口音不像北边，倒像...”",
      },
    ],
  },
  "char-42": {
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...，不但没有讨好，他倒说我俗恶不堪，以后我就再不敢请他的了。他有一个亲随林珊枝，真花八千两银子买的。」聘才听了，点头微笑，说道：「这个阔公子，..."',
        zh: "出场于此章节，文本描述：“...，不但没有讨好，他倒说我俗恶不堪，以后我就再不敢请他的了。他有一个亲随林珊枝，真花八千两银子买的。」聘才听了，点头微笑，说道：「这个阔公子，...”",
      },
    ],
    16: [
      {
        en: 'Features in a scene where the narrative notes: "...好，是你的好朋友。自然不用讲了。说请你去讲一声，请他来就是了。」即吩咐林珊枝传谕总办，将魏师爷修金钦馔说定，富三连连答应几个「是」！又进去见..."',
        zh: "出场于此章节，文本描述：“...好，是你的好朋友。自然不用讲了。说请你去讲一声，请他来就是了。」即吩咐林珊枝传谕总办，将魏师爷修金钦馔说定，富三连连答应几个「是」！又进去见...”",
      },
    ],
    18: [
      {
        en: 'Features in a scene where the narrative notes: "...我知道他府里有个林珊枝，是他的亲随。」说到此便竖起大拇指来道：「是个这一分儿的，言听计..."',
        zh: "出场于此章节，文本描述：“...我知道他府里有个林珊枝，是他的亲随。」说到此便竖起大拇指来道：「是个这一分儿的，言听计...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...话说魏聘才自得仲雨传授，依法行之，先于林珊枝面前献尽殷懃，又于八龄班赔尽辛苦。珊枝本系联锦部有名小旦，继进登..."',
        zh: "出场于此章节，文本描述：“...话说魏聘才自得仲雨传授，依法行之，先于林珊枝面前献尽殷懃，又于八龄班赔尽辛苦。珊枝本系联锦部有名小旦，继进登...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...一日，林珊枝教玉龄唱曲，适值聘才闲闯进来，珊枝就请他坐了，一面教着。刚刚这曲..."',
        zh: "出场于此章节，文本描述：“...一日，林珊枝教玉龄唱曲，适值聘才闲闯进来，珊枝就请他坐了，一面教着。刚刚这曲...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...解。问那华公府内光景，聘才即把华公子称赞得上天下地选不出来，又夸其亲随林珊枝及八龄班怎样的好，就说琴言也不能及他。..."',
        zh: "出场于此章节，文本描述：“...解。问那华公府内光景，聘才即把华公子称赞得上天下地选不出来，又夸其亲随林珊枝及八龄班怎样的好，就说琴言也不能及他。...”",
      },
    ],
    25: [
      {
        en: 'Features in a scene where the narrative notes: "...泽、仲雨、次贤，大家公商点了几出。开了场，加官出来，献上世受国恩」，那林珊枝就走上来，拿出一个赏封望台上一抛，文泽等亦各赏了。..."',
        zh: "出场于此章节，文本描述：“...泽、仲雨、次贤，大家公商点了几出。开了场，加官出来，献上世受国恩」，那林珊枝就走上来，拿出一个赏封望台上一抛，文泽等亦各赏了。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...便叫林珊枝取他自己之大玉斗来。珊枝看天色不早，知道公子的脾气，闹开了就不论..."',
        zh: "出场于此章节，文本描述：“...便叫林珊枝取他自己之大玉斗来。珊枝看天色不早，知道公子的脾气，闹开了就不论...”",
      },
    ],
    26: [
      {
        en: 'Features in a scene where the narrative notes: "...又见爱珠提了一盏绛纱灯走出来道：「差不多要定更了，此刻还要传林珊枝进来呢！」宝珠问道：「叫林珊枝做什么？」爱珠道：「我知道什么事？..."',
        zh: "出场于此章节，文本描述：“...又见爱珠提了一盏绛纱灯走出来道：「差不多要定更了，此刻还要传林珊枝进来呢！」宝珠问道：「叫林珊枝做什么？」爱珠道：「我知道什么事？...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...况要开两三重门，从东园去请来，差不多就二更了，只怕师爷们也要安歇了。」林珊枝知道找魏聘才定是件不要紧事，不过讲今天看戏的话，便阻挡起来。华公..."',
        zh: "出场于此章节，文本描述：“...况要开两三重门，从东园去请来，差不多就二更了，只怕师爷们也要安歇了。」林珊枝知道找魏聘才定是件不要紧事，不过讲今天看戏的话，便阻挡起来。华公...”",
      },
    ],
    29: [
      {
        en: 'Features in a scene where the narrative notes: "...知道是上号簿。聘才先叫四儿将银包拿进房去，放在钱柜内锁好。一同进来找着林珊枝，珊枝见琴言回来，即笑道：「怎么去了许多时，想必医的病好了。」琴..."',
        zh: "出场于此章节，文本描述：“...知道是上号簿。聘才先叫四儿将银包拿进房去，放在钱柜内锁好。一同进来找着林珊枝，珊枝见琴言回来，即笑道：「怎么去了许多时，想必医的病好了。」琴...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...也当他是个丫鬟看待他，只不许与外人交接。到了此间，是断乎走不出来，就是林珊枝不奉呼唤也不能到的，何况他人？琴言只好坐守长门，日间有十珠婢与他..."',
        zh: "出场于此章节，文本描述：“...也当他是个丫鬟看待他，只不许与外人交接。到了此间，是断乎走不出来，就是林珊枝不奉呼唤也不能到的，何况他人？琴言只好坐守长门，日间有十珠婢与他...”",
      },
    ],
    30: [
      {
        en: 'Features in a scene where the narrative notes: "...，先在聘才处吃了早饭，与张、顾诸人谈笑了半天。到得午正时候，拉了聘才、林珊枝来逛西园。..."',
        zh: "出场于此章节，文本描述：“...，先在聘才处吃了早饭，与张、顾诸人谈笑了半天。到得午正时候，拉了聘才、林珊枝来逛西园。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...怪，却还老实，如今派在内书房，少刻就出来的。」子云又留心看去，却又不见林珊枝与那八龄班，心内思想，今日如此盛举，为何又不见这些人？难道都在戏..."',
        zh: "出场于此章节，文本描述：“...怪，却还老实，如今派在内书房，少刻就出来的。」子云又留心看去，却又不见林珊枝与那八龄班，心内思想，今日如此盛举，为何又不见这些人？难道都在戏...”",
      },
    ],
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...他，唯不见华公子打发人来，聘才真道他不知此事，便放了心。到了第三日，见林珊枝进来，两手捧了一大封，像是银子，放在桌上，说道：「这是公子送你的..."',
        zh: "出场于此章节，文本描述：“...他，唯不见华公子打发人来，聘才真道他不知此事，便放了心。到了第三日，见林珊枝进来，两手捧了一大封，像是银子，放在桌上，说道：「这是公子送你的...”",
      },
    ],
    36: [
      {
        en: 'Features in a scene where the narrative notes: "...魏聘才虽不是个好人，然尚有一言半语，道着我的心事，如今他又出去了。那个林珊枝倒像是半个主儿一般，先要小心谨慎的奉承他才喜欢，不然他就要撮弄人..."',
        zh: "出场于此章节，文本描述：“...魏聘才虽不是个好人，然尚有一言半语，道着我的心事，如今他又出去了。那个林珊枝倒像是半个主儿一般，先要小心谨慎的奉承他才喜欢，不然他就要撮弄人...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...言略将近事说了几句。宝珠道：「你既回来，告了几天假？」琴言道：「早上是林珊枝来告诉的，我也没有见着公子，说办完丧事就回去，也没有限定几天。」..."',
        zh: "出场于此章节，文本描述：“...言略将近事说了几句。宝珠道：「你既回来，告了几天假？」琴言道：「早上是林珊枝来告诉的，我也没有见着公子，说办完丧事就回去，也没有限定几天。」...”",
      },
    ],
    41: [
      {
        en: 'Features in a scene where the narrative notes: "...船？」花珠原是爱顽，并非不认得路径，只得独自出去。将到藤花书屋前，只见林珊枝正走来，口中嚷道：「花姑娘来了，想必在留仙院了。」花珠待要问时，..."',
        zh: "出场于此章节，文本描述：“...船？」花珠原是爱顽，并非不认得路径，只得独自出去。将到藤花书屋前，只见林珊枝正走来，口中嚷道：「花姑娘来了，想必在留仙院了。」花珠待要问时，...”",
      },
    ],
    44: [
      {
        en: 'Features in a scene where the narrative notes: "...琴言怎样的恩典，一月给他师父二百银，格外还有赏赐。他的分儿，在府里除了林珊枝，还有谁比得上他？他竟绝不感恩，辞也不辞，竟同人走了。我想天下竟..."',
        zh: "出场于此章节，文本描述：“...琴言怎样的恩典，一月给他师父二百银，格外还有赏赐。他的分儿，在府里除了林珊枝，还有谁比得上他？他竟绝不感恩，辞也不辞，竟同人走了。我想天下竟...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...花去了。奶奶没有去。」珊枝又听里面一人说话：「你听是谁？」那人道：「是林珊枝儿，还有谁！」珊枝知是花珠、荷珠，就急往园中来。只见姹紫嫣红，和..."',
        zh: "出场于此章节，文本描述：“...花去了。奶奶没有去。」珊枝又听里面一人说话：「你听是谁？」那人道：「是林珊枝儿，还有谁！」珊枝知是花珠、荷珠，就急往园中来。只见姹紫嫣红，和...”",
      },
    ],
    45: [
      {
        en: 'Features in a scene where the narrative notes: "...我不知这句的故事。」文泽道：「明珠是他有十婢，皆以珠字为名，这珊瑚就是林珊枝了。」又看写的是：..."',
        zh: "出场于此章节，文本描述：“...我不知这句的故事。」文泽道：「明珠是他有十婢，皆以珠字为名，这珊瑚就是林珊枝了。」又看写的是：...”",
      },
    ],
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...忽见林珊枝走来，华公子便叫取衣服过来，穿戴了，辞了春航，说道：「弟还要到舍..."',
        zh: "出场于此章节，文本描述：“...忽见林珊枝走来，华公子便叫取衣服过来，穿戴了，辞了春航，说道：「弟还要到舍...”",
      },
    ],
  },
  "char-44": {
    5: [
      {
        en: 'Features in a scene where the narrative notes: "...上下得来下不来，就是随他性儿。那一日我原冒失些，我爱听《十不闲》，有个小顺儿是《十不闲》中的状元了，我想他必定也喜欢他。那个小顺儿上了妆，刚..."',
        zh: "出场于此章节，文本描述：“...上下得来下不来，就是随他性儿。那一日我原冒失些，我爱听《十不闲》，有个小顺儿是《十不闲》中的状元了，我想他必定也喜欢他。那个小顺儿上了妆，刚...”",
      },
    ],
  },
  "char-45": {
    8: [
      {
        en: 'Features in a scene where the narrative notes: "...「他叫什么？」仲雨未及回答，那相公急应道：「我叫二喜。」就问：「你能贵姓？」聘才与他说了。又问元茂道：「前日你在苏州会..."',
        zh: "出场于此章节，文本描述：“...「他叫什么？」仲雨未及回答，那相公急应道：「我叫二喜。」就问：「你能贵姓？」聘才与他说了。又问元茂道：「前日你在苏州会...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...多情，见了我他就记在心里，这也难得的，便含着两个黄眼珠，细细的睃着他。二喜索性过来，与他一凳坐了，问道：「你能常听戏，你喜欢那一家的戏？」元..."',
        zh: "出场于此章节，文本描述：“...多情，见了我他就记在心里，这也难得的，便含着两个黄眼珠，细细的睃着他。二喜索性过来，与他一凳坐了，问道：「你能常听戏，你喜欢那一家的戏？」元...”",
      },
    ],
    9: [
      {
        en: 'Features in a scene where the narrative notes: "...了许顺，借了十吊钱的票子，分作两张，写了一封字，叫四儿送与叶茂林，分给二喜、保珠。后来子玉盘问，聘才、元茂只推张仲雨请去听戏下馆子，却将实情..."',
        zh: "出场于此章节，文本描述：“...了许顺，借了十吊钱的票子，分作两张，写了一封字，叫四儿送与叶茂林，分给二喜、保珠。后来子玉盘问，聘才、元茂只推张仲雨请去听戏下馆子，却将实情...”",
      },
    ],
    12: [
      {
        en: 'Features in a scene where the narrative notes: "...「二老爷，昨日有人很感你的情。」那胖子道：「是谁？」蓉官道：「联锦班的二喜，说你很疼他，给他好些东西，在你家住了一夜，有没有？」那胖子道：..."',
        zh: "出场于此章节，文本描述：“...「二老爷，昨日有人很感你的情。」那胖子道：「是谁？」蓉官道：「联锦班的二喜，说你很疼他，给他好些东西，在你家住了一夜，有没有？」那胖子道：...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...，出不了城，就留他住下。早上逛了庙，他要买了几样零碎东西，就出去的。这二喜倒罢了，肯巴结。」蓉官道：「此刻是尽讲究巴结了。我们的师傅不好，当..."',
        zh: "出场于此章节，文本描述：“...，出不了城，就留他住下。早上逛了庙，他要买了几样零碎东西，就出去的。这二喜倒罢了，肯巴结。」蓉官道：「此刻是尽讲究巴结了。我们的师傅不好，当...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...，我正月里叫过他几回，倒是全来的。」聘才又写了条子去叫琪官，梅窗另叫了二喜。走堂的道：「琪官打发人去叫了。二喜在那边陪客已经吃过饭，就散了。..."',
        zh: "出场于此章节，文本描述：“...，我正月里叫过他几回，倒是全来的。」聘才又写了条子去叫琪官，梅窗另叫了二喜。走堂的道：「琪官打发人去叫了。二喜在那边陪客已经吃过饭，就散了。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...走堂的知会了二喜，不多一刻，二喜就过来，对各人请过安，就在梅窗肩下坐了。斟了一巡酒..."',
        zh: "出场于此章节，文本描述：“...走堂的知会了二喜，不多一刻，二喜就过来，对各人请过安，就在梅窗肩下坐了。斟了一巡酒...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...听走堂的说起来，却说得原原委委。新年上，这姓魏的同了几个人，带着保珠、二喜，吃了五十几吊钱，掌柜的因不认识，写账的时候，想必说了什么话。..."',
        zh: "出场于此章节，文本描述：“...听走堂的说起来，却说得原原委委。新年上，这姓魏的同了几个人，带着保珠、二喜，吃了五十几吊钱，掌柜的因不认识，写账的时候，想必说了什么话。...”",
      },
    ],
    24: [
      {
        en: 'Features in a scene where the narrative notes: "...：「还有几个人索性请你批评批评。」桂保笑道：「是谁？」王恂道：「蓉官、二喜、玉美、春林、凤林，这些人又是怎样？」桂保笑道：「这又是一路，不与..."',
        zh: "出场于此章节，文本描述：“...：「还有几个人索性请你批评批评。」桂保笑道：「是谁？」王恂道：「蓉官、二喜、玉美、春林、凤林，这些人又是怎样？」桂保笑道：「这又是一路，不与...”",
      },
    ],
    29: [
      {
        en: 'Features in a scene where the narrative notes: "...，添起枝叶，把个子玉、琴言说得无所不至。不料王通政在人家席上遇着蓉官、二喜等类，就把子玉、琴言的事说得活龙活现。文辉本看过子玉之病，也觉得病..."',
        zh: "出场于此章节，文本描述：“...，添起枝叶，把个子玉、琴言说得无所不至。不料王通政在人家席上遇着蓉官、二喜等类，就把子玉、琴言的事说得活龙活现。文辉本看过子玉之病，也觉得病...”",
      },
    ],
    51: [
      {
        en: 'Features in a scene where the narrative notes: "...了正经账目，不要去混花消了。」元茂大喜，得了银子，又起了邪念，想到：「二喜待我这两年颇为不薄，如今远别，怎好不给他十吊钱。但这四十两只够还账..."',
        zh: "出场于此章节，文本描述：“...了正经账目，不要去混花消了。」元茂大喜，得了银子，又起了邪念，想到：「二喜待我这两年颇为不薄，如今远别，怎好不给他十吊钱。但这四十两只够还账...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...少了半换，只得十三换半。元茂心中纳闷，把镯子带上手，一路的闯去。忽然见二喜坐着车，劈面过来，见了元茂忙下来，一把拉住，说道：「今日叫我找着了..."',
        zh: "出场于此章节，文本描述：“...少了半换，只得十三换半。元茂心中纳闷，把镯子带上手，一路的闯去。忽然见二喜坐着车，劈面过来，见了元茂忙下来，一把拉住，说道：「今日叫我找着了...”",
      },
    ],
  },
  "char-41": {
    11: [
      {
        en: 'Features in a scene where the narrative notes: "...华夫人道：「是通政司卿那位王年伯么？我们倒没有往来过。」苏小姐道：「这王琼华怎样好呢？」袁夫人道：「他今年十七岁，相貌是没有比得上他的，与二..."',
        zh: "出场于此章节，文本描述：“...华夫人道：「是通政司卿那位王年伯么？我们倒没有往来过。」苏小姐道：「这王琼华怎样好呢？」袁夫人道：「他今年十七岁，相貌是没有比得上他的，与二...”",
      },
    ],
    57: [
      {
        en: 'Features in a scene where the narrative notes: "...岁，吴紫烟二十三岁，孙佩秋、王蓉华皆二十二岁，苏浣香二十一，浣兰十九，王琼华十八居末。绮香命丫鬟们焚了一炉百和香，铺了一条大锦毯，七美顺着年..."',
        zh: "出场于此章节，文本描述：“...岁，吴紫烟二十三岁，孙佩秋、王蓉华皆二十二岁，苏浣香二十一，浣兰十九，王琼华十八居末。绮香命丫鬟们焚了一炉百和香，铺了一条大锦毯，七美顺着年...”",
      },
    ],
  },
  "char-146": {
    16: [
      {
        en: 'Features in a scene where the narrative notes: "...手捶着腰道：「我本来不喜欢这个，输了钱还惹闷。」阎简安道：「可不是。」杨梅窗笑道：「谁叫你们打得这么灿头？将牌都乱发的，不输你输谁？」阎简安..."',
        zh: "出场于此章节，文本描述：“...手捶着腰道：「我本来不喜欢这个，输了钱还惹闷。」阎简安道：「可不是。」杨梅窗笑道：「谁叫你们打得这么灿头？将牌都乱发的，不输你输谁？」阎简安...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...公有旧，嫌其心窄嘴臭，脾气古怪，所以叫他在府里住着。华公子是更不对的。杨梅窗是个土篾片，但知势利，毫无所能。又是个里八府的人，怯头怯脑。因与..."',
        zh: "出场于此章节，文本描述：“...公有旧，嫌其心窄嘴臭，脾气古怪，所以叫他在府里住着。华公子是更不对的。杨梅窗是个土篾片，但知势利，毫无所能。又是个里八府的人，怯头怯脑。因与...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...一个直闯进来，道：「好阿！你在洞里头，还答应不在家。」众人一看，原来是杨梅窗，皆是熟识的，更为热闹了，大家说些无非是游戏欢乐的话。四人商议道..."',
        zh: "出场于此章节，文本描述：“...一个直闯进来，道：「好阿！你在洞里头，还答应不在家。」众人一看，原来是杨梅窗，皆是熟识的，更为热闹了，大家说些无非是游戏欢乐的话。四人商议道...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...官、玉林都说病着不能来，蓉官就来。」聘才原料琴官不来的，只好罢了。倒是杨梅窗心上不快，说道：「怎么叫三个人，倒有两个不来？不知是真病呢，还是..."',
        zh: "出场于此章节，文本描述：“...官、玉林都说病着不能来，蓉官就来。」聘才原料琴官不来的，只好罢了。倒是杨梅窗心上不快，说道：「怎么叫三个人，倒有两个不来？不知是真病呢，还是...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...银钱又宽展起来，便有些小人得志，就不肯安分了。内有顾月卿、张笑梅，外有杨梅窗、冯子佩一班人朝欢暮乐，所见所闻，无非势力钻营等事，是以渐渐心肥..."',
        zh: "出场于此章节，文本描述：“...银钱又宽展起来，便有些小人得志，就不肯安分了。内有顾月卿、张笑梅，外有杨梅窗、冯子佩一班人朝欢暮乐，所见所闻，无非势力钻营等事，是以渐渐心肥...”",
      },
    ],
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...才初一日拜年，初二日听戏，初三日寓里大排筵席，请一班浮浪子弟如冯子佩、杨梅窗、乌大傻等，带了一群下作相公，天天的欢呼畅饮，清曲锣鼓，闹得竹嘈..."',
        zh: "出场于此章节，文本描述：“...才初一日拜年，初二日听戏，初三日寓里大排筵席，请一班浮浪子弟如冯子佩、杨梅窗、乌大傻等，带了一群下作相公，天天的欢呼畅饮，清曲锣鼓，闹得竹嘈...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...到了明日，聘才发贴请客，请的是富三爷、贵大爷、奚十一、潘三、张仲雨、杨梅窗。是日辞了两个，贵大爷病了，张仲雨有事不能来。即补了冯子佩、唐和..."',
        zh: "出场于此章节，文本描述：“...到了明日，聘才发贴请客，请的是富三爷、贵大爷、奚十一、潘三、张仲雨、杨梅窗。是日辞了两个，贵大爷病了，张仲雨有事不能来。即补了冯子佩、唐和...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...了晦气。到出京那几日，一起一起的饯行，潘其观、奚十一、张仲雨、冯子佩、杨梅窗、张笑梅、顾月卿、唐和尚等轮流作饯，唐和尚的庄子好不热闹，聘才又..."',
        zh: "出场于此章节，文本描述：“...了晦气。到出京那几日，一起一起的饯行，潘其观、奚十一、张仲雨、冯子佩、杨梅窗、张笑梅、顾月卿、唐和尚等轮流作饯，唐和尚的庄子好不热闹，聘才又...”",
      },
    ],
  },
  "char-145": {
    16: [
      {
        en: 'Features in a scene where the narrative notes: "...又有人来接引。进了斑竹花篱，是一所厅，两进共有十间，还有些厢房。此中是张笑梅、顾月卿画画之处。顾、张二位出来相见，知道聘才是富三爷新荐来的，..."',
        zh: "出场于此章节，文本描述：“...又有人来接引。进了斑竹花篱，是一所厅，两进共有十间，还有些厢房。此中是张笑梅、顾月卿画画之处。顾、张二位出来相见，知道聘才是富三爷新荐来的，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...们到里头屋子，瞧瞧住那一间？」又同聘才到了里头一进，也是五间，东边两间张笑梅做房，聘才就在西边两间下榻，中间空了一间为会客之地。富三即叫将行..."',
        zh: "出场于此章节，文本描述：“...们到里头屋子，瞧瞧住那一间？」又同聘才到了里头一进，也是五间，东边两间张笑梅做房，聘才就在西边两间下榻，中间空了一间为会客之地。富三即叫将行...”",
      },
    ],
    18: [
      {
        en: 'Features in a scene where the narrative notes: "...这些闲杂人，倒也混熟了，也有与聘才合式的，也有不对的。合式的是顾月卿、张笑梅诸人；不对的是阎简安、王卿云诸人。聘才也只好各人安分，合式的便往..."',
        zh: "出场于此章节，文本描述：“...这些闲杂人，倒也混熟了，也有与聘才合式的，也有不对的。合式的是顾月卿、张笑梅诸人；不对的是阎简安、王卿云诸人。聘才也只好各人安分，合式的便往...”",
      },
    ],
    19: [
      {
        en: 'Features in a scene where the narrative notes: "...一日，打听华公子出门去了，聘才约了张笑梅出城。笑梅要找冯子佩，二人同车即到冯子佩家来。这子佩是与华公子最..."',
        zh: "出场于此章节，文本描述：“...一日，打听华公子出门去了，聘才约了张笑梅出城。笑梅要找冯子佩，二人同车即到冯子佩家来。这子佩是与华公子最...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...出来，嚷道：「你们来做什么，可是来给二太爷请安的吗？」聘才笑着要说话，张笑梅上前，便一把搂得紧紧的，子佩也就搂了笑梅，大家抱了一抱腰。笑梅笑..."',
        zh: "出场于此章节，文本描述：“...出来，嚷道：「你们来做什么，可是来给二太爷请安的吗？」聘才笑着要说话，张笑梅上前，便一把搂得紧紧的，子佩也就搂了笑梅，大家抱了一抱腰。笑梅笑...”",
      },
    ],
    21: [
      {
        en: 'Features in a scene where the narrative notes: "...他有些颜面，银钱又宽展起来，便有些小人得志，就不肯安分了。内有顾月卿、张笑梅，外有杨梅窗、冯子佩一班人朝欢暮乐，所见所闻，无非势力钻营等事，..."',
        zh: "出场于此章节，文本描述：“...他有些颜面，银钱又宽展起来，便有些小人得志，就不肯安分了。内有顾月卿、张笑梅，外有杨梅窗、冯子佩一班人朝欢暮乐，所见所闻，无非势力钻营等事，...”",
      },
    ],
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...谁知候了两日，不见一个人来，就是平时常见的顾月卿、张笑梅也不过来。再思量了半夜，才定了主意，次早写了一封谢札，先说些感激..."',
        zh: "出场于此章节，文本描述：“...谁知候了两日，不见一个人来，就是平时常见的顾月卿、张笑梅也不过来。再思量了半夜，才定了主意，次早写了一封谢札，先说些感激...”",
      },
    ],
    47: [
      {
        en: 'Features in a scene where the narrative notes: "...里来，我也与他相好。他们二人在间壁吃饭，我送烟过去，与他们讲了半天。那张笑梅有个亲戚是苏州人，专门行这一道，替人配眼珠子，配鼻子，配牙，这却..."',
        zh: "出场于此章节，文本描述：“...里来，我也与他相好。他们二人在间壁吃饭，我送烟过去，与他们讲了半天。那张笑梅有个亲戚是苏州人，专门行这一道，替人配眼珠子，配鼻子，配牙，这却...”",
      },
    ],
    50: [
      {
        en: 'Features in a scene where the narrative notes: "...到出京那几日，一起一起的饯行，潘其观、奚十一、张仲雨、冯子佩、杨梅窗、张笑梅、顾月卿、唐和尚等轮流作饯，唐和尚的庄子好不热闹，聘才又辞了几天..."',
        zh: "出场于此章节，文本描述：“...到出京那几日，一起一起的饯行，潘其观、奚十一、张仲雨、冯子佩、杨梅窗、张笑梅、顾月卿、唐和尚等轮流作饯，唐和尚的庄子好不热闹，聘才又辞了几天...”",
      },
    ],
  },
  "char-138": {
    33: [
      {
        en: 'Features in a scene where the narrative notes: "...和尚得意洋洋的道：「小徒叫得月，今年十五岁了，念经唱曲都也将就，就是爱顽皮，我总不许他出门，三老..."',
        zh: "出场于此章节，文本描述：“...和尚得意洋洋的道：「小徒叫得月，今年十五岁了，念经唱曲都也将就，就是爱顽皮，我总不许他出门，三老...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...：「你可不要费事。」聘才道：「没有什么可吃的。」于是分宾主坐了，富三叫得月也坐了。唐和尚命得月同着蓉官斟酒。富三见果碟小吃已摆满了一桌，便道..."',
        zh: "出场于此章节，文本描述：“...：「你可不要费事。」聘才道：「没有什么可吃的。」于是分宾主坐了，富三叫得月也坐了。唐和尚命得月同着蓉官斟酒。富三见果碟小吃已摆满了一桌，便道...”",
      },
    ],
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...：「呸！你怎么说这些人？」子佩道：「你别轻看他，他比相公还红呢！你瞧那得月的脑袋怎样？」聘才道：「好是好的，然而我不爱他，光光的头有甚趣味！..."',
        zh: "出场于此章节，文本描述：“...：「呸！你怎么说这些人？」子佩道：「你别轻看他，他比相公还红呢！你瞧那得月的脑袋怎样？」聘才道：「好是好的，然而我不爱他，光光的头有甚趣味！...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...后吃过早饭，开了烟灯，大家吃烟。富三爷先来，唐和尚见富三爷来了，就带了得月进来。天香、翠官与富三、和尚都请了安。富三却不认识，问他是谁，在那..."',
        zh: "出场于此章节，文本描述：“...后吃过早饭，开了烟灯，大家吃烟。富三爷先来，唐和尚见富三爷来了，就带了得月进来。天香、翠官与富三、和尚都请了安。富三却不认识，问他是谁，在那...”",
      },
    ],
    35: [
      {
        en: 'Features in a scene where the narrative notes: "...：「且不用忙，我们开了这门出去看看。」和尚即忙叫拿了钥匙，开了门，幸喜得月明如昼，倒也不消火把。和尚先喊醒了种菜的起来。种菜的听得此事，吓得..."',
        zh: "出场于此章节，文本描述：“...：「且不用忙，我们开了这门出去看看。」和尚即忙叫拿了钥匙，开了门，幸喜得月明如昼，倒也不消火把。和尚先喊醒了种菜的起来。种菜的听得此事，吓得...”",
      },
    ],
    40: [
      {
        en: 'Features in a scene where the narrative notes: "...，也待得甚好，不到半年就冷淡了。去年得了巴英官，如获至宝，如今又弄上了得月、卓天香，将英官也疏远起来。..."',
        zh: "出场于此章节，文本描述：“...，也待得甚好，不到半年就冷淡了。去年得了巴英官，如获至宝，如今又弄上了得月、卓天香，将英官也疏远起来。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...外面长衣，倒身躺下，轻轻的解了他的带子，把裤子扯了一半下来，贴身服侍。得月惊醒，扭转头一看，见了奚十一，便说道：「来不得。」奚十一不听，得月..."',
        zh: "出场于此章节，文本描述：“...外面长衣，倒身躺下，轻轻的解了他的带子，把裤子扯了一半下来，贴身服侍。得月惊醒，扭转头一看，见了奚十一，便说道：「来不得。」奚十一不听，得月...”",
      },
    ],
    47: [
      {
        en: 'Features in a scene where the narrative notes: "...，见间壁开了个饭庄子，挂着招牌，写着安吉堂。奚十一也不理会，到寺中见了得月，有些恨上心来，把他肩上狠狠的拧一了把。得月嚷道：「做什么使劲的拧..."',
        zh: "出场于此章节，文本描述：“...，见间壁开了个饭庄子，挂着招牌，写着安吉堂。奚十一也不理会，到寺中见了得月，有些恨上心来，把他肩上狠狠的拧一了把。得月嚷道：「做什么使劲的拧...”",
      },
    ],
    58: [
      {
        en: 'Features in a scene where the narrative notes: "...要避风，不能来。」奚十一、唐和尚都疑潘三怪了，是托辞的。那日奚十一见了得月，想与他叙叙，无奈唐和尚在前，只得忍住，酒也多喝了几杯，烟又多吹了..."',
        zh: "出场于此章节，文本描述：“...要避风，不能来。」奚十一、唐和尚都疑潘三怪了，是托辞的。那日奚十一见了得月，想与他叙叙，无奈唐和尚在前，只得忍住，酒也多喝了几杯，烟又多吹了...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...子了。」奚十一坐起，拉了过来，抱了他。英官冷笑道：「闹什么鬼？我又不是得月、卓天香，□了要烂鸡巴的，我们好好的家伙为什么要装这个狗鸡巴？」奚..."',
        zh: "出场于此章节，文本描述：“...子了。」奚十一坐起，拉了过来，抱了他。英官冷笑道：「闹什么鬼？我又不是得月、卓天香，□了要烂鸡巴的，我们好好的家伙为什么要装这个狗鸡巴？」奚...”",
      },
    ],
  },
  "char-139": {
    34: [
      {
        en: 'Features in a scene where the narrative notes: "...相貌也与袁宝珠、苏蕙芳相并。」聘才道：「叫什么名字？」子佩道：「一个叫卓天香，一个叫张翠官。」聘才道：「现在那班里？」子佩道：「在整容班。」..."',
        zh: "出场于此章节，文本描述：“...相貌也与袁宝珠、苏蕙芳相并。」聘才道：「叫什么名字？」子佩道：「一个叫卓天香，一个叫张翠官。」聘才道：「现在那班里？」子佩道：「在整容班。」...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...口的喝皮杯，又问道：「我听见人说，你的妹子相貌很好，认识的人也很多。」卓天香脸一红，回道：「你不要信他们一面之辞。」杨八道：「我去年看见人给..."',
        zh: "出场于此章节，文本描述：“...口的喝皮杯，又问道：「我听见人说，你的妹子相貌很好，认识的人也很多。」卓天香脸一红，回道：「你不要信他们一面之辞。」杨八道：「我去年看见人给...”",
      },
    ],
    40: [
      {
        en: 'Features in a scene where the narrative notes: "...得甚好，不到半年就冷淡了。去年得了巴英官，如获至宝，如今又弄上了得月、卓天香，将英官也疏远起来。..."',
        zh: "出场于此章节，文本描述：“...得甚好，不到半年就冷淡了。去年得了巴英官，如获至宝，如今又弄上了得月、卓天香，将英官也疏远起来。...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...：「我身子不快，且走肚子，懒得说话，你去罢。」奚十一只得出来，却好碰着卓天香进来，撞个满怀。奚十一道：「和尚与魏大爷都不在家，得月病了，懒应..."',
        zh: "出场于此章节，文本描述：“...：「我身子不快，且走肚子，懒得说话，你去罢。」奚十一只得出来，却好碰着卓天香进来，撞个满怀。奚十一道：「和尚与魏大爷都不在家，得月病了，懒应...”",
      },
    ],
    47: [
      {
        en: 'Features in a scene where the narrative notes: "...又挨了几日，那天多喝了一盅，更痒得利害，偶然想起卓天香也十七八岁了，又是他的老主顾，叫他来商量商量倒可以，即叫人去叫了..."',
        zh: "出场于此章节，文本描述：“...又挨了几日，那天多喝了一盅，更痒得利害，偶然想起卓天香也十七八岁了，又是他的老主顾，叫他来商量商量倒可以，即叫人去叫了...”",
      },
    ],
    58: [
      {
        en: 'Features in a scene where the narrative notes: "...」奚十一坐起，拉了过来，抱了他。英官冷笑道：「闹什么鬼？我又不是得月、卓天香，□了要烂鸡巴的，我们好好的家伙为什么要装这个狗鸡巴？」奚十一道..."',
        zh: "出场于此章节，文本描述：“...」奚十一坐起，拉了过来，抱了他。英官冷笑道：「闹什么鬼？我又不是得月、卓天香，□了要烂鸡巴的，我们好好的家伙为什么要装这个狗鸡巴？」奚十一道...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...英官撵出之后，便到卓天香辅里去做了伙计。人爱他脑袋好，这个卵字号，倒也生意兴隆。虽然英官..."',
        zh: "出场于此章节，文本描述：“...英官撵出之后，便到卓天香辅里去做了伙计。人爱他脑袋好，这个卵字号，倒也生意兴隆。虽然英官...”",
      },
    ],
  },
  "char-40": {
    52: [
      {
        en: 'Features in a scene where the narrative notes: "...明日，苏夫人请了他大姑奶奶浣香与徐子云夫人袁绮香去陪新，吃扶头卯酒。田太夫人请了王文辉的陆氏夫人，带了他大姑奶奶..."',
        zh: "出场于此章节，文本描述：“...明日，苏夫人请了他大姑奶奶浣香与徐子云夫人袁绮香去陪新，吃扶头卯酒。田太夫人请了王文辉的陆氏夫人，带了他大姑奶奶...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...眼中很熟，想去想来，原来有些像苏蕙芳，怪不得像见过的了。看徐子云的夫人袁绮香是冰肌玉骨，雍容大雅，真是林下风流，与子云恰是一对佳偶。刘少奶奶..."',
        zh: "出场于此章节，文本描述：“...眼中很熟，想去想来，原来有些像苏蕙芳，怪不得像见过的了。看徐子云的夫人袁绮香是冰肌玉骨，雍容大雅，真是林下风流，与子云恰是一对佳偶。刘少奶奶...”",
      },
    ],
    54: [
      {
        en: 'Features in a scene where the narrative notes: "...然累得慌了。我看苏氏姊妹，浣香华妍，像朵白牡丹。浣兰清艳，像是粉芍药。袁绮香像莲花，香能及远，觉有潇洒出尘之致。」..."',
        zh: "出场于此章节，文本描述：“...然累得慌了。我看苏氏姊妹，浣香华妍，像朵白牡丹。浣兰清艳，像是粉芍药。袁绮香像莲花，香能及远，觉有潇洒出尘之致。」...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...梦中措大的光景。若像那梦中光景，岂不要将个琼华小姐气死了么？明日也请了袁绮香、苏浣香、浣兰、吴紫烟、王蓉华、孙佩秋来陪新人，群仙高会，又叙了..."',
        zh: "出场于此章节，文本描述：“...梦中措大的光景。若像那梦中光景，岂不要将个琼华小姐气死了么？明日也请了袁绮香、苏浣香、浣兰、吴紫烟、王蓉华、孙佩秋来陪新人，群仙高会，又叙了...”",
      },
    ],
    57: [
      {
        en: 'Features in a scene where the narrative notes: "...且说徐子云的夫人袁绮香，生得婉娴柔静，贤淑无双，又且绣口锦心，才能咏絮。于十月初十日，..."',
        zh: "出场于此章节，文本描述：“...且说徐子云的夫人袁绮香，生得婉娴柔静，贤淑无双，又且绣口锦心，才能咏絮。于十月初十日，...”",
      },
      {
        en: 'Features in a scene where the narrative notes: "...袁绮香接下台阶，苏氏姊妹笑盈盈的上前见礼，然后与佩秋、紫烟、蓉华、琼华..."',
        zh: "出场于此章节，文本描述：“...袁绮香接下台阶，苏氏姊妹笑盈盈的上前见礼，然后与佩秋、紫烟、蓉华、琼华...”",
      },
    ],
  },
};

/** Curated scene bullets from characterAppearances; empty when none exist for this chapter. */
export function getCharacterSceneBullets(
  characterId: string,
  chapterId: number,
): SceneBullet[] {
  return characterAppearances[characterId]?.[chapterId] ?? [];
}
