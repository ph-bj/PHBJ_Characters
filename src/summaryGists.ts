/**
 * One-sentence gists for each paragraph of each chapter summary.
 *
 * These are authored précis — not the paragraph's opening sentence — and are
 * shown as the accordion header for the corresponding paragraph. The arrays are
 * index-aligned with `chapterSummaries[n].zh.split(/\n\n+/)` and its English
 * counterpart, so a gist at index i heads paragraph i in both languages.
 *
 * When a chapter (or an index) is missing here, ChapterReader falls back to the
 * paragraph's first sentence.
 */

export interface ChapterGists {
  zh: string[];
  en: string[];
}

export const summaryGists: Record<number, ChapterGists> = {
  0: {
    zh: [
      `两篇序文揭开《品花宝鉴》的来历。`,
      `一序述手稿几经辗转始得刻版流传，一序为作者自道京华失意、由歌楼见闻而成书的缘起。`,
    ],
    en: [
      `Two prefaces lift the veil on how the novel came to be.`,
      `One tells how the manuscript was rescued and printed; the other, by the author, traces the book to his own disappointed years among the capital's singing-houses.`,
    ],
  },
  1: {
    zh: [
      `作者把缙绅子弟与梨园名旦各分十等，八种下流不与"情"字相干，为全书立定褒贬的尺度。`,
      `梅子玉的家世既明，史南湘以《曲台花选》相诘，子玉冷笑力辩而心下将信将疑。`,
      `戏园一游令他如坐涂炭，归途车中却撞见两个妙童，惊鸿一瞥间始信南湘之言非妄。`,
    ],
    en: [
      `The author grades gentlemen and performers in ten degrees of feeling and shuts eight vices out of the word entirely, fixing the book's scale of praise and blame.`,
      `Mei Ziyu's lineage is set out, and Shi Nanxiang's *Flower Register of the Theatre* provokes a debate that leaves him scornful in speech and unsettled in mind.`,
      `A wretched afternoon at the playhouse ends with two exquisite boys glimpsed in a passing carriage, and he begins to believe what he had denied.`,
    ],
  },
  2: {
    zh: [
      `梅士燮与王文辉议团拜、叹择婿之难，忽报魏聘才、李元茂自江南投奔而来。`,
      `花厅初见，一个伶俐善媚，一个笨拙可笑；不上十日，聘才已把满宅人哄得交口称好。`,
      `夜话中聘才盛赞舟中所见的杜琴官，子玉盘问相符而暗喜；次日王宅席上笑闹一场，散后又传出班中新来两个名旦。`,
    ],
    en: [
      `While Mei Shixie and Wang Wenhui plan the reunion dinner and lament how hard it is to choose a son-in-law, two cards announce Wei Pincai and Li Yuanmao, arrived from the south.`,
      `At their first appearance one is quick and ingratiating, the other absurdly clumsy; within ten days Pincai has the whole household praising him.`,
      `Pincai's night-time account of the boy Qinguan matches the carriage in every detail, to Ziyu's secret joy; and after a riotous banquet at the Wang house comes word of two new performers in the troupe.`,
    ],
  },
  3: {
    zh: [
      `聘才熟读《曲台花选》而暗疑琴官更胜，恰逢叶茂林、金二来定正月初六的堂会戏。`,
      `三乐园听戏，他结识富伦、贵芬，又为一个摔碎的琥珀鼻烟壶被卖玉老者讹诈，赖富伦喝止解围。`,
      `广东豪客奚十一与相公赌气砸尽杯碗，众人始知其为捐官的冤桶；归家夜话，聘才说琴官冷硬如水晶，子玉听了反生怜惜。`,
    ],
    en: [
      `Pincai learns the *Flower Register* by heart while privately doubting it, and Ye Maolin comes with the troupe's manager to book plays for the sixth of the first month.`,
      `At the Sanle Garden he falls in with Fu Lun and Gui Fen and is fleeced over a broken snuff bottle until Fu Lun waves the old jade-seller off.`,
      `The Cantonese magnate Xi Shiyi smashes every dish in a quarrel with a performer and proves to be a rich fool buying office; and that night Pincai's account of Qinguan's cold, crystalline pride only draws Ziyu's pity toward him.`,
    ],
  },
  4: {
    zh: [
      `腊雪一夜五寸，西席病卧，子玉独坐琴斋读《雪赋》，遂邀魏聘才、李元茂同来赏雪。`,
      `席间再问琴官；饭后分题咏雪，子玉别出四个虚字成题，聘才暗集戏文，元茂的五律通篇不知所云。`,
      `次日雪霁同游下洼子，林春喜说起消寒会与新来的琴官；对楼一位美少年高论戏曲、题词壁上而去，姓名竟无人知。`,
    ],
    en: [
      `Five inches of snow fall overnight; with the tutor ill in bed, Ziyu reads the *Rhapsody on Snow* alone and invites Wei Pincai and Li Yuanmao to share the view.`,
      `Qinguan comes up again over dinner, and the party turns to snow poems — Ziyu inventing four abstract titles, Pincai quietly cribbing from plays, and Yuanmao producing couplets nobody can construe.`,
      `Next day, out in the clear cold, Lin Chunxi speaks of the winter poetry club and the newly arrived Qinguan, while across the way a handsome stranger discourses on opera, writes a lyric on the wall, and leaves without a name.`,
    ],
  },
  5: {
    zh: [
      `怡园主人徐子云的家世与取友之道既明，复叙杜琴言父碎琴而亡、母兄相继凋零而堕入梨园的身世。`,
      `他性洁志高、屡欲自尽，入京前梦见美少年提携出坑，及至途中车马相值，才知梦中人即是梅子玉。`,
      `怡园席上子云为他改名琴言、号玉侬；聘才以济宁旧事中伤反成美谈，随后又引出锦春园华光宿的豪奢与除夕梅宅的家训。`,
    ],
    en: [
      `The chapter sets out Xu Ziyun's lineage and his way of choosing friends, then tells how Du Qinyan's father died over a smashed lute and how the orphaned boy was sold into a troupe.`,
      `Fastidious and proud, he had tried more than once to hang himself; and the youth who lifted him from the pit in a dream proves, when their carriages meet, to be Mei Ziyu.`,
      `At Yiyuan Ziyun renames him Qinyan, styled Yunong; Pincai's attempt to blacken him only raises him in Ziyu's esteem; and the chapter closes on Hua Guangsu's magnificence and a sober New Year's Eve at the Mei mansion.`,
    ],
  },
  6: {
    zh: [
      `新正应酬络绎，团拜只剩十二位，颜夫人又设内宴款待王、孙两家女眷。`,
      `孙家两房怨偶的丑态写尽；席间陆夫人一语定下子玉与琼华的婚事，琼华却在书房发现《车中人》诗末藏着自己的名字。`,
      `姑苏会馆团拜，李元茂借衣出丑、孙氏兄弟备受揶揄；及至《瑶台》《惊梦》登场，子玉惊为天人，只得向史南湘俯首认错。`,
    ],
    en: [
      `The new-year rounds begin: only twelve are left for the reunion dinner, and Lady Yan gives an inner banquet for the Wang and Sun women.`,
      `The wretched marriages of the Sun household are laid bare; Madam Lu settles the match between Ziyu and Qionghua with a single remark; and Qionghua finds her own name rhymed into a poem on his desk.`,
      `At the guild-hall reunion Li Yuanmao is ridiculous in borrowed clothes and the Sun brothers are mercilessly teased — until *Jade Terrace* and *The Interrupted Dream* leave Ziyu awestruck and ready to admit that Shi Nanxiang was right.`,
    ],
  },
  7: {
    zh: [
      `子玉两日间把诸旦逐一品第，终觉琴官无可比拟，忽见旧作《车中人》被人挖去两字。`,
      `小丫鬟道破婚事，他才知误犯"琼华"之讳而无从分辩；初九日赴刘文泽之约，园中雅集叙齿入座。`,
      `席上以对句行令，子玉句稳而大方公推第一，高品胡诌成趣满座绝倒；归途又听说宏济寺新来一位风雅阔绰的南京人。`,
    ],
    en: [
      `Two days of weighing the performers leave Ziyu certain that none can match Qinguan — and then he notices two characters gouged out of his old poem.`,
      `A maid lets out the betrothal, and he realizes he has innocently written his betrothed's name into verse and can never explain it away; on the ninth he goes to Liu Wenze's garden, where the company seats itself by age.`,
      `The evening goes in capping couplets — Ziyu's judged the steadiest, Gao Pin's the funniest — and on the way home there is talk of an elegant, open-handed Nanjing man newly lodged at the Hongji Temple.`,
    ],
  },
  8: {
    zh: [
      `聘才怂恿李元茂盗父亲的碎银同赴太和园，元茂进门跌了一交，被人扶起时搭链已不翼而飞。`,
      `楼上遇张仲雨，琪官登台艳惊两楼却转陪贵客；春阳馆行令，元茂吃皮杯从鼻中喷酒，笑倒满座。`,
      `散席方知银子尽失，两个相公索账不休，幸得孙嗣徽满口《千字文》胡诌解围，末了只能写下梅宅字号挂账而归。`,
    ],
    en: [
      `Pincai talks Li Yuanmao into taking silver from his father's box, and at the theatre gate a helpful stranger dusts the fallen Yuanmao down and relieves him of the whole purse.`,
      `Upstairs they meet Zhang Zhongyu; Qiguan dazzles both galleries and then goes off to attend richer patrons; and at the tavern Yuanmao snorts his forfeit wine out through his nose.`,
      `The reckoning finds the silver gone and the performers unwilling to be put off, until Sun Sihui's babble of *Thousand Character Classic* tags gets them out — the bill charged, in the Mei family's name, against another day.`,
    ],
  },
  9: {
    zh: [
      `两人借钱了结旧账并瞒过子玉；元宵之夜，刘文泽、颜仲清、王恂邀子玉弃车步行，同入火树银花的灯市。`,
      `途中先遇车中少妇卖弄金莲，又被一群妇人冲撞；转入怡园猜灯虎，子玉独中园主特为玉侬所设的一条，得瑶琴为彩。`,
      `石台观烟火与万树灯龙，史南湘醉吐得丸而醒；子玉私问袁宝珠，才知琴官已改名琴言，今日恰被带去赴席，缘悭一面。`,
    ],
    en: [
      `The debt is quietly settled and Ziyu kept in the dark; and at the Lantern Festival Liu Wenze, Yan Zhongqing and Wang Xun call for him and they walk into the blaze of the lantern market.`,
      `A young wife in a carriage displays her tiny foot and a press of women bowls the party over; then at Yiyuan Ziyu alone solves the riddle the master set for Yunong, and carries off a lute as the prize.`,
      `From the terrace they watch fireworks and a thousand lantern-beasts, and Shi Nanxiang is drunk and revived by a pill — while Yuan Baozhu tells Ziyu that Qinguan is now called Qinyan and has been taken elsewhere for the evening.`,
    ],
  },
  10: {
    zh: [
      `琴言认定车中人便是梦里救他出坑的梅公子，日夜相思；子云听次贤说破灯谜之事，一句戏言吓哭了他，遂定下移花接木之计试探子玉。`,
      `梅崦席上，子云取出琴背镌铭的瑶琴相赠，子玉方悟玉侬即琴官，又从容答过种种试探。`,
      `假琴言百般作态反被子玉正色斥退，真琴言始现；席间行令相谑，两人心许目成，末乃揭出玉龄替身之谜。`,
    ],
    en: [
      `Certain that the young man in the carriage is the one who saved him in his dream, Qinyan pines for him; and Ziyun, hearing of the riddle, frightens him to tears with a joke and resolves to test Ziyu with a substitute.`,
      `At the plum retreat Ziyun produces the lute with its inscribed dedication, and Ziyu, realizing that Yunong is Qinguan, answers every probing question with composure.`,
      `The false Qinyan's advances earn a stern rebuke, the true one appears, and through the games and toasts the two reach a wordless understanding — after which the impostor Yuling is unmasked.`,
    ],
  },
  11: {
    zh: [
      `袁绮香问这些相公究竟胜过丫鬟何处，子云以"面有女容，身无女体"作答，自谓可娱目而不动欲念。`,
      `华夫人苏浣香二十岁寿宴，袁绮香先致十样重宝；席间创一新令，骨牌、唐诗、《西厢》、曲牌、《毛诗》五句一韵到底，三人各逞才思。`,
      `席上盛称王琼华的才思；后房十珠与六红行令互刺，笑闹翻杯，末由两位夫人评定轻重罚过。`,
    ],
    en: [
      `Asked by Yuan Qixiang what these boys have that her own maids lack, Ziyun answers that they have women's faces without women's bodies — a pleasure to the eye that leaves desire unstirred.`,
      `At Su Huanxiang's twentieth birthday Yuan Qixiang sends ten treasures ahead, and the three ladies match wits at a new game whose five lines must run from domino name to Tang couplet to *Western Chamber* aria to tune title to *Classic of Poetry* on a single rhyme.`,
      `Wang Qionghua's brilliance is praised at table while in the back rooms the pearl-maids and the red-maids lampoon each other until the wine goes over, and the two ladies must grade the offences and set the forfeits.`,
    ],
  },
  12: {
    zh: [
      `子云瞒着夫人把十六个酒令刻版流传，遂引出寄居扬州的名士田春航——才名满江南而三试不第，入京后散尽千金于乱弹相公。`,
      `高品讥其待己薄而待人厚，春航反引《孟子》痛驳；颜仲清慕名相见、赠金试志，而春航雨中被车溅倒，反因车里的绝色而怒气全消。`,
      `他典了老仆的皮袍连看五日戏，认出那人是苏蕙芳；及至断炊求助，仲清只寄来郑元和乞食小像相讥，春航和诗见志，仲清、王恂遂再备百金。`,
    ],
    en: [
      `Ziyun has the sixteen games printed behind his wife's back, and the chapter brings in Tian Chunhang — famous in the south, thrice failed at the examinations, and now scattering his money among the popular-stage performers of the capital.`,
      `Gao Pin mocks him for starving himself to enrich others and is answered out of *Mencius*; Yan Zhongqing seeks him out and gives him money to test him; and a carriage knocks him into the mud, where the beauty inside disarms his anger entirely.`,
      `He pawns his old servant's fur coat for five days of plays and identifies Su Huifang; and when hunger drives him to ask for help, Zhongqing sends only a painting of the beggared Zheng Yuanhe — to which his answering poems declare a purpose that moves Zhongqing and Wang Xun to send more.`,
    ],
  },
  13: {
    zh: [
      `春航日日守在戏园门口，蕙芳终于命人请他进门，细述官宦家败、辗转入京的身世。`,
      `蕙芳说到蒙师顾先生收留而相继物故，春航遂发天、地、书、诗四友之外别有"宝友"的议论，二人执手订交，誓此生勿负。`,
      `潘其观重金求买、拉他作干儿子，蕙芳假意劝酒灌翻两人，携钱票衣服投奔春航；那边潘三与张仲雨醉中互殴，闹得阖家掌灯大笑。`,
    ],
    en: [
      `Chunhang keeps watch at the theatre gate day after day until Huifang has him invited in, and tells him how an official family's ruin drove him north.`,
      `Huifang tells how the teacher who took him in died too; Chunhang answers with his doctrine that beyond the four friends — sky, earth, books and poems — there is a fifth and rarer one; and they clasp hands and swear never to fail each other.`,
      `Pan Qiguan comes to buy him and proposes adopting him as a son; Huifang plies both men with wine, walks out with the money and his clothes to find Chunhang, and leaves Pan and Zhang Zhongyu brawling in the dark to the whole household's delight.`,
    ],
  },
  14: {
    zh: [
      `蕙芳亲手替春航换上新衣，对镜映出两个玉人，又翻出他的《燕台旅稿》，就一首《恼公》逐句品评。`,
      `蕙芳猜诗中人不着，唐和尚与高品又来凑趣联对；春航弹《水仙操》至中段忽然弦乱，果然是史南湘挟王兰保、李玉林携杏花闯来。`,
      `高品抖出跌车旧事，众人行"奚"字令罚酒不休；蕙芳家中却来报，一位广东来的奚十一老爷正阔气地候着——这名字第一次落到他门上。`,
    ],
    en: [
      `Huifang dresses Chunhang in new clothes and holds up a mirror to two jade figures, then finds his *Yantai Travel Drafts* and works line by line through a poem of vexed love.`,
      `Huifang guesses wrong at the poem's subject, the monk and Gao Pin cap couplets for sport, and Chunhang's playing breaks off mid-piece because someone who knows the lute is listening outside — Shi Nanxiang, arriving with Wang Lanbao, Li Yulin and a spray of apricot blossom.`,
      `Gao Pin lets out the story of the fall in the mud and the company runs a drinking game on a single character, until word comes that a rich Cantonese named Xi Shiyi is waiting at Huifang's house — the first time that name arrives at his door.`,
    ],
  },
  15: {
    zh: [
      `南湘细述春航与蕙芳的患难之交；聘才独往樱桃巷说动琴言，约定次日引子玉相见，偏遇梅士燮放了江西学差，贺客盈门，相会之期就此隔断。`,
      `临行前补足了子玉与琼华的婚礼，孙亮功又替李元茂另伏一门亲事；子玉被文泽、南湘取笑强拉往樱桃巷，琴言偏被人带走，只得转访陆素兰。`,
      `素兰道破琴言借他的貌以慰相思，子玉酸泪暗吞；送别梅士燮之后，怡园桃花坞赏花行令，次贤却预言这般相得之后，必有许多苦恼缓缓生出。`,
    ],
    en: [
      `Nanxiang describes the friendship forged in hardship between Chunhang and Huifang; Pincai goes alone to Cherry Lane and arranges for Ziyu to meet Qinyan next day — and Mei Shixie's appointment to Jiangxi fills the house with well-wishers and cancels it.`,
      `The betrothal is formalized before the departure, and Sun Lianggong quietly lays a second match for Li Yuanmao; Ziyu, teased and dragged off to Cherry Lane, finds Qinyan taken elsewhere and calls on Lu Sulan instead.`,
      `Sulan reveals that Qinyan borrows his likeness to comfort his longing, and Ziyu swallows his tears; and after Mei Shixie is seen off, the peach-blossom party at Yiyuan ends with Cixian's prophecy that so much happiness must slowly breed sorrow.`,
    ],
  },
  16: {
    zh: [
      `子玉读书清闲如故，聘才却自忖梅宅非久恋之乡，进城结识华府的老篾片阎简安与假看风水的杨梅窗，另谋高枝。`,
      `富伦荐他到华公子府中帮办杂务；子玉挽留不住，颜夫人仍赠银饯行。及入侯门，照墙石狮、重门总管，其势煊赫反令他心生畏惧。`,
      `子玉携砚墨扇册去谢陆素兰，听他说出琴言满屋梅花的心事；二人同访秋水堂，却撞见一班人硬闯抢烟枪，只得托素兰致意保重。`,
    ],
    en: [
      `Ziyu's studious quiet continues, but Pincai decides the Mei house holds no future for him and goes into the city, where he meets the Hua family's old hanger-on Yan Jian'an and the bogus geomancer Yang Meichuang.`,
      `Fu Lun recommends him to Hua Guangsu's household; Ziyu cannot keep him, and Lady Yan sends him off with silver — but the screen walls, stone lions and register-keeping stewards of the mansion leave him more frightened than pleased.`,
      `Ziyu takes inkstone, ink and album to thank Lu Sulan, and hears how Qinyan has filled his rooms with plum blossom; their call at the Autumn Water Hall runs into a gang forcing its way in, and he can only send word that Qinyan should take care.`,
    ],
  },
  17: {
    zh: [
      `众人议定十五日为春航、蕙芳合贺生日，南湘一句"倒忘了一个花王"添上杜琴言；子玉磨墨写帖，竟成一篇香艳的骈俪小启。`,
      `春航闭户读书而声名益著，蕙芳日日相规；开筵之日群贤毕集，蕙芳华服先至行大礼，与子玉初次觌面便暗以瑜亮相许。`,
      `席上联句成篇，复以花比人，子云独以梅花许琴言；子玉因他卧病而心不在焉，末了再订后会，而他与琴言二人始终未愈。`,
    ],
    en: [
      `The company fixes a joint birthday feast for Chunhang and Huifang, and Nanxiang's remark that they have forgotten the king of flowers adds Du Qinyan to the list — whereupon Ziyu's invitation turns into a small masterpiece of parallel prose.`,
      `Chunhang studies behind closed doors while Huifang calls daily to keep him steady; and on the day itself Huifang arrives first in full dress to make his bow, meeting Ziyu for the first time and privately ranking them rivals born in one age.`,
      `Linked verses are composed and every performer matched to a flower, with Ziyun giving the plum to Qinyan alone; Ziyu, thinking of the sickbed, is absent in spirit, and when the next gathering is set neither he nor Qinyan has recovered.`,
    ],
  },
  18: {
    zh: [
      `琴言闭门养病，作者借此写尽梨园师傅由兔而狐、而虎、而狗的一生四变；另一头聘才进华府满月竟未见主人一面，日日赔累。`,
      `张仲雨为他讲一篇富贵场中的处世学，教他先笼络林珊枝、再哄住八龄班；归途尾随李元茂到东园，但见茅茨土墙的娼寮门口挤满闲人。`,
      `帘内一个南方女子抱琵琶自弹自唱，历数一路追寻负心人的凄凉身世，正是从广西来的白菊花；孙嗣徽的荷包却已被剪绺割去。`,
      `陶妈妈认她作义女专为笼络奚十一，二人语音相投、烧烟称意；末了奚十一赏了五十金，买她回去做了姨奶奶。`,
    ],
    en: [
      `Qinyan lies ill behind closed doors while the book sets out the four ages of a troupe master — hare, fox, tiger, dog; and Pincai, a month inside the Hua mansion, has yet to set eyes on his master and is steadily out of pocket.`,
      `Zhang Zhongyu lectures him on the art of living off the rich — win Lin Shanzhi first, then the boy-players — and on the way home he follows Li Yuanmao to the East Garden, where idlers crowd the door of a mud-walled brothel.`,
      `A southern woman comes out with a pipa and sings her own history, a faithless lover pursued the length of the empire and never found: this is the White Chrysanthemum newly come from Guangxi — while Sun Sihui's purse is being cut from his belt.`,
      `Madam Tao adopts her as a daughter purely to hook Xi Shiyi, whose dialect and opium habit she suits exactly; and in the end he pays fifty taels and takes her home as a concubine.`,
    ],
  },
  19: {
    zh: [
      `聘才依计先降服林珊枝，又哄遍八龄班与管事诸人，不到一月人人称好；一日趁主人出门，同张笑梅出城访冯子佩，四人转上酒楼。`,
      `席间所点的琴言、玉林皆称病不来；二喜一听他住在华公府便换了脸色，随即说出奚十一那只机括暗藏的木桶与李玉林受辱的原委。`,
      `琪官不知就里伸手入桶，一腿踢中要害、扭坏机括血淋淋脱身；袁宝珠禀知徐子云，子云连夜救出玉林、扬言搜桶治罪，奚十一遂托词出京。`,
      `潘其观独自寻上苏蕙芳门来，蕙芳设酒周旋、正言相责，又以翡翠镯诱得他腕上金箍；正危急时忽报坊官查夜，色厉胆薄的潘三一溜烟逃了。`,
    ],
    en: [
      `Following the plan, Pincai wins over Lin Shanzhi, charms the boy-players and the stewards, and within a month everyone speaks well of him; then, his master out, he rides with Zhang Xiaomei to visit Feng Zipei.`,
      `Qinyan and Yulin both plead illness; and Er Xi, learning that Pincai now lives in the Hua mansion, changes his manner at once and tells how Xi Shiyi's trick barrel was used to trap and shame Li Yulin.`,
      `Qiguan puts his hands in unknowing, kicks his assailant down, wrenches the mechanism apart and gets free with bleeding wrists; Yuan Baozhu reports it, Xu Ziyun has Yulin freed that night and threatens prosecution, and Xi Shiyi leaves the capital on a pretext.`,
      `Pan Qiguan comes to Huifang's door alone; Huifang plies him with wine, reproaches him to his face and coaxes the gold band off his wrist with talk of a jade one — and at the cry of a night patrol the timid lecher bolts.`,
    ],
  },
  20: {
    zh: [
      `那查夜原是蕙芳预先布下的圈套，事后他仍避往春航寓中；这边子玉与琴言几番错过，只因长庆认得钱多而认不得人好。`,
      `旧日名士已散去三人，五月初一子云等四人换了便服入园登缥缈亭；停云叙雨之斋一联署着华光宿的名字，众人惊其词翰而叹其为势位所误。`,
      `水榭荡出两只花艇，五枝名花同游全园；吟秋水榭三层临水，龙舟盘旋、健仆翻身入水夺标，次贤遂以漆葫芦封筹抛水的法子设下《水浒传》酒令。`,
      `众人各掣一位《水浒传》人物行令：蕙芳偏得潘金莲、宝珠得王婆、春航得一丈青，牵巾跪捧笑闹百出；日暮又泛舟去看小赤城如霞的榴花。`,
    ],
    en: [
      `The night patrol was Huifang's own contrivance, and he retires to Chunhang's lodging to be safe; while Ziyu and Qinyan keep missing each other, because Changqing knows money when he sees it and merit not at all.`,
      `Three of the old circle have gone away; on the first of the fifth month four friends ride into the garden in plain clothes, and a couplet in the Lingering Cloud studio signed by Hua Guangsu astonishes them — a fine hand, they agree, spoiled by rank.`,
      `Two painted skiffs bring five performers out to tour the whole garden; at the three-storeyed water pavilion a dragon boat wheels below and servants somersault in to race for the prize, and Cixian devises a *Water Margin* drinking game with lots sealed in gourds and thrown into the lake.`,
      `The lots fall wickedly — Huifang must play Pan Jinlian, Baozhu Dame Wang, Chunhang the One-Foot Blue — and after an evening of forfeits, knotted kerchiefs and kneeling, they row out at dusk to see the pomegranates burning like cloud.`,
    ],
  },
  21: {
    zh: [
      `聘才在华府得志，衣马鲜明出城探病；子玉的病由七情而起，药石无功，聘才却盛夸华府诸人，说琴言性冷如高枝之花、寒夜之月，不如近手的春花。`,
      `子玉正色驳之，一席话竟把聘才归入俗人异趣，只托他带话报平安；聘才心中不悦，径往樱桃巷，见琴言满室梅花、清瘦如雪里寒枝。`,
      `聘才捏造帐后藏人的谎话，说子玉已别有所欢、连瑶琴也转赠了人，气得琴言逐客垂泪；素兰赶来道破实情，又说出子玉误答"玉侬自然在玉艳之上"的笑话。`,
      `琴言痛骂聘才造言生事；素兰说了些外间新闻，末了郑重叮嘱：这人既进了华府，小人得志必要作威作福，不可不防。`,
    ],
    en: [
      `Prospering in the Hua mansion, Pincai drives out in style to visit the sickbed; Ziyu's illness is of the feelings and no medicine touches it — and Pincai praises his new household while calling Qinyan a flower too high to pick and a moon too cold to warm.`,
      `Ziyu's rebuttal — the unplucked flower keeps its fragrance, the cold moon shines the clearer — quietly classes Pincai among the vulgar; and Pincai, nettled, goes to Cherry Lane, where Qinyan sits thin as a plum branch in snow among his plum blossoms.`,
      `Pincai invents a lover hidden behind the bed-curtain and claims the lute has been given away, until Qinyan sends him out and weeps; then Sulan arrives with the truth, and with the story of how Ziyu blurted out that Yunong stands above every flower in the register.`,
      `Qinyan curses Pincai as a maker of lies; Sulan tells him the town's other news, and warns him in earnest that a small man risen in a great house will certainly use his power, and must be guarded against.`,
    ],
  },
  22: {
    zh: [
      `素兰想出泛舟运河之计，借徐子云的名义请动子玉；持信去报喜时，却撞见两个凶汉捶台大骂，索了四吊钱方去——原来都是魏聘才买来的。`,
      `琴言说出死志，求葬于怡园梅树之下，或烧成灰往山高水深处吹散；及察出闹事者的来路，才恍然是聘才所遣，看了子玉的回信方微微一笑。`,
      `船上素兰先以病重、替身相试，子玉正色不受，琴言方从后舱转出，三人抱头痛哭；一水之隔恰是潘其观拥妓狂欢的画船，清愁浊欢两相映照。`,
    ],
    en: [
      `Sulan hits on a boating party and uses Xu Ziyun's name to bring Ziyu; but carrying the good news in, he finds two bullies pounding the table and cursing, who go only when paid — hired, it turns out, by Wei Pincai.`,
      `Qinyan speaks of dying — buried under the plums at Yiyuan, or burnt and scattered where the hills are high and the water deep — until the bullies are traced to Pincai; and only Ziyu's answering letter draws a faint smile from him.`,
      `On the boat Sulan tests him first with news of illness and then with the offer of a double, both refused; Qinyan comes out at last and the three weep together — while a few feet of water away Pan Qiguan's boat roars with wine and women.`,
    ],
  },
  23: {
    zh: [
      `本回上下两截各写一个"欲"字的丑处：上截李元茂借钱换票，逛到东园看中一个粗肥妇人，被两个闲汉一推进门，反手扣上。`,
      `情热之际街门大响，四个人八只手把他剥个精光；他只得裹着草帘蹲在破屋里高喊小使，看热闹的挤满门口。`,
      `丑事终于传到孙亮功耳中；下截转出办刑钱的姬亮轩，作者借他分幕友为数等，而他正是最下一等——席上竟以"驴子与小妾"自夸其贱，秽亵不堪。`,
    ],
    en: [
      `The chapter gives two studies in appetite: first Li Yuanmao, who borrows money, changes it into notes, and is shoved through a brothel door by two idlers who bolt it behind him.`,
      `At the critical moment the gate bangs open and four people strip him to the skin, so that he squats in a wrecked room wrapped in a straw blind, calling for his boy while a crowd fills the doorway.`,
      `The scandal reaches Sun Lianggong's ears; and the second half introduces the legal secretary Ji Liangxuan, lowest of the several grades the author distinguishes, who boasts over wine that his boy serves him as both donkey and concubine.`,
    ],
  },
  24: {
    zh: [
      `颜仲清与王恂闲话，把潘其观求认干儿子、李元茂裹草帘、魏聘才买凶糟蹋琴言诸事一一抖开，末了才是子玉与琴言同游运河、二人病都好了的喜信。`,
      `王恂不解一面之缘何以缠绵至此，仲清剖析这段至正之情的情根偏由不正之人种下，又逐一品题同侪，把聘才、潘其观诸人判为情中之蠹与情中之盗。`,
      `李玉林、王桂保带来怡园消息：六月初六华光宿要来逛园，萧次贤合各班另谱新戏；十旦既定，众人复评品同侪长短，并说出琪官毁桶、奚家致富的来历。`,
    ],
    en: [
      `Yan Zhongqing and Wang Xun run through the season's news — Pan Qiguan's proposed adoption, Li Yuanmao in his straw blind, Wei Pincai's hired bullies — and end with the good news: the day on the canal that cured both Ziyu and Qinyan.`,
      `Asked how a single meeting could bind them so, Zhongqing shows that this purest of attachments was rooted by the least pure of men, then grades the whole circle and sets Pincai, Pan Qiguan and their like down as the moths and thieves of feeling.`,
      `Li Yulin and Wang Guibao bring word from Yiyuan: Hua Guangsu will visit on the lotus birthday and Xiao Cixian is assembling a combined troupe for newly written plays; the cast of ten is settled, each performer is weighed in turn, and the story of Qiguan's broken barrel and the Xi family's fortune comes out.`,
    ],
  },
  25: {
    zh: [
      `六月初六荷花生日，怡园为华光宿设宴；书中细写园中气象与徐子云的用心，又交代名士纷纷告辞、只剩张仲雨与萧次贤作陪的缘故。`,
      `十旦参见，华公子独赏琴言；新戏诸本极尽奇丽，末了琴言与袁宝珠自东西两边同演《寻梦》，公子拍案叫绝，而琴言只把他权当作楼上的子玉才唱得下去。`,
      `华公子解汉玉双龙佩相赠，众人都劝琴言领情；他越想越气竟至垂泪，一句硬话顶得张仲雨变色——日后无数苦况即由此生。`,
    ],
    en: [
      `On the lotus birthday Yiyuan feasts Hua Guangsu; the garden and its master's thoughtfulness are described at length, and it is explained why nearly every scholar has excused himself, leaving only Zhang Zhongyu and Xiao Cixian.`,
      `The ten performers make their bows and Hua Guangsu notices Qinyan alone; after the splendours of the new plays, Qinyan and Yuan Baozhu enter from opposite wings for a doubled *Seeking the Dream* that brings him to his feet — while Qinyan gets through it only by pretending the man upstairs is Ziyu.`,
      `Hua Guangsu unties a jade pendant for him and everyone urges him to be grateful; the more he thinks of it the more he weeps, and one hard word changes Zhang Zhongyu's face — sowing the sorrows to come.`,
    ],
  },
  26: {
    zh: [
      `华光宿回府，十珠婢环侍，他细开一张消暑粥的方子；欲遣人请魏聘才夜谈，林珊枝以园门已锁挡了回去，又答他相公们何以总不进府。`,
      `公子问起琴言的师承与《寻梦》优劣，说论相貌还算琴言、身上像有仙骨；书中并点明这对夫妻相安的缘故——公子好奢而不淫，夫人便任他繁华而不生疑。`,
      `聘才奉召如金殿传胪，却饿等了两个时辰；见公子叹八龄班压不倒外班，便怂恿他买人——心里另有一本账：琴言一入府便与子玉永绝，正好出这口恶气。`,
      `聘才同叶茂林往说长庆，长庆先哭穷、后索高价；聘才揭他的短、拂袖上车，长庆终舍不得这棵摇钱树，只说要问过徒弟，两日后回话。`,
    ],
    en: [
      `Hua Guangsu comes home to his ten pearl-maids and dictates an elaborate recipe for a cooling gruel; and when he would send for Wei Pincai, Lin Shanzhi puts him off with the locked gates and explains why the performers never get past the door.`,
      `He asks whose pupil Qinyan is and who sang the better, and decides that for looks Qinyan has something of an immortal about him; and the chapter explains why his marriage holds — he is extravagant but not licentious, and his wife lets him have his splendour without suspicion.`,
      `Summoned as though to an imperial audience, Pincai is left starving for two hours; and hearing his master complain that his own boy-players are outshone, he urges him to buy — with a private calculation, that once inside the mansion Qinyan will never see Ziyu again.`,
      `Pincai and Ye Maolin go to Changqing, who first pleads poverty and then names a huge price; Pincai names his weaknesses instead and walks out — and Changqing, unwilling to lose his money-tree, says only that he must ask the boy and will answer in two days.`,
    ],
  },
  27: {
    zh: [
      `聘才盘算再唆使凶徒上门；笔锋随即转到重新阔起来的奚十一——他借潘其观一万而实得八千，又聘了那位坐粪车的姬亮轩作刑钱朋友。`,
      `席间蓉官、春林齐说琴言架子大，奚十一夸口必要一试，张仲雨冷笑说他连门也进不去；这边曹长庆道破买人之意，琴言放声大哭，只求一死。`,
      `素兰分四层剖白：子玉年少受责、心事不可教人看破、屡撞徐子云终必冷落、到那步田地求死也无益，说得琴言破涕为笑。`,
      `奚十一闯入撞倒长庆、踢门掀帐，扬言明日再来；王兰保献计——不取身价即送琴言进华府反可保全，长庆心服，琴言至此亦无可奈何。`,
    ],
    en: [
      `Pincai plans another round of harassment; and the brush turns to Xi Shiyi, rich again on a fresh cargo, borrowing ten thousand from Pan Qiguan to receive eight, and taking on Ji Liangxuan as his legal secretary.`,
      `Over breakfast the performers complain of Qinyan's hauteur and Xi Shiyi boasts that he will have him, till Zhang Zhongyu sneers that he will never get through the door; and at Cherry Lane, told of the sale, Qinyan weeps aloud and asks only to die.`,
      `Sulan argues it out in four stages — Ziyu is young and will be punished, the secret must not show in his face, Ziyun's patience will run out, and dying would help nobody — until Qinyan laughs through his tears.`,
      `Xi Shiyi bursts in, knocks Changqing down, kicks the door open and swears to come again; and Wang Lanbao proposes sending Qinyan into the Hua mansion at once and taking no price for him — Changqing is convinced, and Qinyan has nothing left to say.`,
    ],
  },
  28: {
    zh: [
      `长庆负荆请罪、分文不取，华公子应允而立下不准在外陪酒的规矩；琴言欲见子玉而不能，只取出拭泪的罗帕，另包四味药托陆素兰转交。`,
      `琴言入府拨在留青精舍，华夫人也称他好；子玉在素兰处得那纸包，把牵牛、独活、芍药、防己一一解通，约的正是七夕，回家便大病。`,
      `颜夫人求医许愿俱无效，拷问云儿才知实情；请了魏聘才来，他先愧后自表功劳，说买人正为断子玉的痴心，夫人反倒谢他，求他设法叫琴言出来一见。`,
      `夫人许了二百两，聘才却只死缠林珊枝，珊枝为挤掉这个新宠一口应承；琴言到梅宅，颜夫人一见其玉骨冰肌竟像未过门的媳妇，怒气化作笑容，问明半年只两面，反生怜意。`,
    ],
    en: [
      `Changqing comes to apologize and asks no price; Hua Guangsu accepts, on the condition that the boy never sing outside again — and Qinyan, unable to see Ziyu, wraps four medicines in the handkerchief he has wept into and sends it by Lu Sulan.`,
      `Qinyan is installed in the mansion, where even Madam Hua approves of him; and Ziyu, receiving the packet at Sulan's, reads the four drugs as a message — already parted, living alone, guarding himself, and asking to meet at the Weaver's festival — then goes home and falls gravely ill.`,
      `Doctors and vows fail, and a threatened beating gets the truth out of the page-boy; Wei Pincai, sent for, colours with shame and then claims credit — the purchase was meant to cure the infatuation — and is thanked, and asked to bring Qinyan out.`,
      `Two hundred taels are promised, but Pincai spends none of it and works on Lin Shanzhi instead, who agrees in hopes of being rid of a rival; and when Qinyan reaches the Mei house, Lady Yan finds him so like her son's betrothed that anger turns to a smile, and hearing they have met twice in half a year, she pities him.`,
    ],
  },
  29: {
    zh: [
      `病榻上子玉半睡半醒，先念《长恨歌》七夕之句，又答出"独活、防己之下应添一味当归"；他只当又是假琴言，直到听见"真真是真的"才狂笑扑肩。琴言破例说谎宽他的心，子玉当即起床索食。`,
      `颜夫人在外看得又惊又叹，赏了琴言许多东西，又秤二百两交与聘才——那本是讹来的谎账；回府后林珊枝先吓唬后勒索，聘才却把这段奇闻四处传扬。`,
      `王文辉、陆氏夫人为女儿吃醋，琼华低头暗想；子玉病愈后又设法见了琴言一次，事传到华光宿耳中，遂把他拨往洗红居交十珠婢看管，与拘禁无异。`,
    ],
    en: [
      `Half asleep, Ziyu murmurs the *Song of Everlasting Sorrow* on the seventh night and answers the drug-riddle with one herb more — the one that means come home; taking Qinyan for another impostor, he questions him until the word *real* makes him laugh aloud and fall on his shoulder. Qinyan lies, for once, to comfort him, and Ziyu gets up and calls for food.`,
      `Lady Yan, watching from outside, is astonished and moved, loads Qinyan with gifts, and hands Pincai the two hundred taels he had invented a use for; back at the mansion Lin Shanzhi frightens them and then extorts his price — while Pincai spreads the story all over town.`,
      `Wang Wenhui and Madam Lu are jealous on their daughter's behalf and Qionghua sits silent with her own thoughts; and when Ziyu, recovered, contrives one more meeting, word reaches Hua Guangsu, who moves Qinyan into the inner quarters under the pearl-maids' watch — confinement in all but name.`,
    ],
  },
  30: {
    zh: [
      `琴言独对凤仙垂泪，悟出花在本根自有天然机趣、一被折入金盆便减了颜色，而人尤不如花；八月十四华公子在西园设夜宴，其时正值秋闱，名士大半回避。`,
      `西园本是画家谢笠山十二年经营，华公子爱繁华，改得一味雕琢；张仲雨、魏聘才随林珊枝遍游归鸿小渚、藏书楼与玻璃水榭，方知这一日之宴分作三处。`,
      `恩庆堂五班合演，九旦同串《秦淮河看花大会》；子云问起琴言，及至由珊枝领出，但见低眉垂首、全无从前神气，相隔两月竟如陌路。`,
      `灯戏之夜火树银花，冯子佩半夜闯来说破乌大傻被锁拿的原委，随后串《活捉》竟幽怨可怜，华公子离席赞他"居然像个好妇人"；刘文泽却低声说出归自荣卖妻当忘八的丑史。`,
    ],
    en: [
      `Weeping among the balsams, Qinyan reflects that a flower on its own root keeps its nature and loses it the moment it is cut for a golden bowl — and that people fare worse than flowers; and Hua Guangsu fixes a night banquet in the West Garden for the fourteenth, at a season when the examinations keep the scholars away.`,
      `The West Garden was twelve years in the making under a painter's hand until Hua Guangsu had it recut for splendour; Zhang Zhongyu and Wei Pincai are shown its islets, library and glass pavilion, and learn that the day's entertainment is laid in three separate places.`,
      `Five troupes play at Enqing Hall and nine performers share a great flower-viewing scene on the Qinhuai; and when Ziyun asks for Qinyan and Shanzhi at last brings him out, he stands with lowered eyes, all his old spirit gone, two months having made them strangers.`,
      `Under hundreds of painted lanterns Feng Zipei bursts in with the story of Wu Dasha's arrest, then takes the stage himself in *The Ghost's Capture* so plaintively that Hua Guangsu leaves his seat to call him a convincing woman — while Liu Wenze quietly tells the squalid history of Gui Zirong and his wives.`,
    ],
  },
  31: {
    zh: [
      `华公子命众旦脱去衣帽，各献戏曲之外的一长；琴言半年不弹，指下生涩，被评为"琴声不佳，箫声倒好"，抚今追昔几乎落泪。`,
      `袁宝珠以王麓台笔法写成《良宵风月图》，蕙芳、素兰题绝句，李玉林填小令，各经一字之改；张仲雨与聘才这才知他们句句自出，并非倩人代笔。`,
      `桂保猜谜、兰保舞剑，红霞满天而客散；十六日子玉与众人到春航、高品寓中，谈起闱中文字，高品扯碎文稿，赌气说"我总中一个给你看"。`,
      `蕙芳忽正色请客"分子"，取出《香雪先生传》与《香雪遗稿》，道破业师身后萧条、寡妻弱子千里来寻的原委；众人各撰诔赞、合凑四百金，二十九日同到荒寺致奠，浩然亭上联句而归。`,
    ],
    en: [
      `Hua Guangsu has the performers put off their costumes and show what they can do besides act; Qinyan, who has not touched the lute in half a year, plays stiffly and is told the flute was the better of the two — and nearly weeps at what he has become.`,
      `Yuan Baozhu paints *Fine Night, Wind and Moon* in half an hour, Huifang and Sulan add quatrains and Li Yulin a lyric, each bettered by a single word — and Zhang Zhongyu and Pincai learn that none of it is ghost-written.`,
      `Guibao guesses the riddles and Lanbao's sword becomes a streak of cold light before the guests disperse at dawn; and two days later the talk at Chunhang's lodging turns to examination essays, until Gao Pin tears up his own draft and swears he will pass one of these days to spite them.`,
      `Huifang solemnly asks his guests for a subscription and produces a life of his old teacher with the *Surviving Drafts of Fragrant Snow*, telling how the man's coffin lies neglected and his widow and son have come a thousand li to find him; the company writes elegies, raises four hundred taels, makes the offering at the ruined temple, and caps verses together on the hill above.`,
    ],
  },
  32: {
    zh: [
      `放榜前夜春航与高品煮茗谈到五更，一个自道名心已淡而愧对蕙芳，一个大骂主考房官；次日报来四十名内没有田老爷，倒是开窑子的归自荣中了，蕙芳气得直说"忘八都中了"。`,
      `胡裁缝送糕报喜又央求收徒，蕙芳厌烦；及至宏济寺贺高品，才知报条上的"高品三"另有其人，直到二更后才报来田春航中了南元第二名。`,
      `蕙芳指出榜上两个熟人；高品索性直说那"杠花"的举人是他一千六百两代作的，收清枪银便回了苏州。另一头乌大傻因假房契被押，皂隶陆升却记起拿人那日归自荣分明在乌家吃酒。`,
      `陆升访出归自荣当日躲在城里看戏、雇了个丁忧廪生顶名代考，讹诈不成便递呈刑部；归自荣革去举人监押，一篇四六勘语传遍全城，众人由此论起科名的幸与不幸。`,
    ],
    en: [
      `The night before the list Chunhang and Gao Pin talk till dawn — one professing indifference and ashamed only before Huifang, the other cursing the examiners; and at noon the first forty names lack Chunhang's and include the brothel-keeping Gui Zirong, at which Huifang explodes.`,
      `A tailor arrives with cakes, false news and a request to apprentice his son; and at the temple the name on the report proves to be another man's — until, after the second watch, word comes that Tian Chunhang has taken second place in the province.`,
      `Huifang picks out two names he knows; Gao Pin admits outright that he wrote one of them through for sixteen hundred taels, collects his fee and leaves for Suzhou — while Wu Dasha is jailed over a forged deed, and a yamen runner remembers that Gui Zirong was drinking at Wu's house on the very day of the arrest.`,
      `The runner traces the truth — Gui Zirong hid in the city watching plays while a mourning licentiate sat the papers in his name — and when blackmail fails he files a plaint; the degree is stripped, a clerk's parallel-prose indictment goes round the city, and the friends fall to debating how much of fame is luck.`,
    ],
  },
  33: {
    zh: [
      `史南湘随任出京，王文辉又催婚事；子玉进城访聘才中途折回，恰遇袁宝珠邀他到小琅嬛室，煮雪烹茶清谈，说起华府未必是琴言安身立命之处。`,
      `素兰说出魏聘才宿娼被拿、锁在车尾跟着跑的新闻，正是当日指使车夫糟蹋玉侬的加倍奉还；子玉回家又撞上梅士燮责备的家书，颜夫人冷笑相责，仍托王文辉往刑部说情。`,
      `聘才在监中串供反诬吏目，从轻发落只杖二十，出来还夸口衙门里都是相好；不料林珊枝捧来一封"赆仪二百两"，他才明白已被辞退，当日搬出。`,
      `他携着积蓄租下宏济寺的房子，高车大马与蓉官、玉天仙征歌斗酒；富三爷为两个官缺来求，聘才荐了吏部经承之弟唐和尚，那和尚拍胸担保，小和尚得月捧烟出来，富三爷看得两眼发直。`,
    ],
    en: [
      `Shi Nanxiang leaves with his father's appointment and Wang Wenhui presses the wedding; Ziyu, turning back halfway to the city, meets Yuan Baozhu and is taken to his studio, where snow-water tea and quiet talk turn on whether the Hua mansion can ever be a home for Qinyan.`,
      `Sulan brings the news of Wei Pincai arrested with a prostitute and made to run behind the cart — repayment doubled for the carter he once set on Yunong; and at home Ziyu meets his father's reproving letter and his mother's cold anger, though she still asks Wang Wenhui to intercede.`,
      `Pincai coaches his witnesses, turns the charge on the constable, escapes with twenty strokes and boasts that every office is full of his friends — until Lin Shanzhi sets down a packet marked *travelling money, two hundred taels*, and he understands he has been dismissed.`,
      `With his savings he takes the rooms at the Hongji Temple and lives high with his singers; and when Fu Lun comes worrying about a good post and a bad one, Pincai recommends the monk Tang Heshang, whose brother sits in the Board of Civil Office — and whose novice Deyue, bringing in the water-pipe, leaves Fu Lun staring.`,
    ],
  },
  34: {
    zh: [
      `李元茂寻上门来借钱，反被聘才抖出五百余吊的账贴；三更时唐和尚密议：只消把贵州挪到湖北前头，索价三千吊，那缺一到任便有两万银子的现成规矩。`,
      `聘才把三千的口气报作二千四百，富三爷东拼西凑换出银票；事成实得一千三百两，过年便阔绰起来，接玉天仙守岁、连闹五日，初九更开赌局，引来奚十一与潘其观两个大赌客。`,
      `次日潘其观坐庄输个精光，奚十一独赢八百余两；唐和尚指点菜园暗门可作退路，聘才顺势收场。是夜他向冯子佩大发牢骚，骂相公们被书呆子抬坏了身分，子佩便荐了两个听使唤的剃头小子卓天香与张翠官。`,
      `十四日席上玻璃灯屏画着春画，众人指画取笑、动手动脚，杨梅窗烧了袖子、奚十一泼了一脸灯油；及至四儿回房取烟，才发现院门被石头顶住，皮箱拜匣衣包尽失。`,
    ],
    en: [
      `Li Yuanmao comes to borrow and is shown a sheaf of Pincai's own bills instead; and at the third watch Tang Heshang proposes the fraud — simply reverse the order of two vacancies, three thousand strings for the service, on a post worth twenty thousand taels a year.`,
      `Pincai quotes the three thousand as twenty-four hundred, Fu Lun scrapes the notes together, and Pincai clears thirteen hundred taels; the new year passes in feasting and fireworks, and by the ninth he has opened a gambling house that draws Xi Shiyi and Pan Qiguan.`,
      `Next day Pan Qiguan loses his whole bank and Xi Shiyi walks off with eight hundred taels; Tang Heshang shows them the vegetable garden's hidden door as a way out, and Pincai closes the game — then pours out his grievance to Feng Zipei, that the scholars have spoiled the performers, and is offered two cheap and biddable barber's boys instead.`,
      `At the farewell dinner a lantern screen painted with erotica sets the company laughing and pawing, a sleeve is burnt and lamp oil goes over Xi Shiyi's face — and when the boy is sent to fetch opium he finds the courtyard door wedged shut from within and the trunks gone.`,
    ],
  },
  35: {
    zh: [
      `月明如昼，众人搜到菜园只寻着一只空箱，失去衣物金银共一千余金，那新雇的伙计已不见影踪；蓉官偏此时才到，见了两个剃头的冷笑一声便走。`,
      `报了失单，坊里严缉；十八日袁宝珠生日，萧次贤把席设在新辟的红茶仙馆，亲手拟定三十二样菜式，子玉却在廊上见着一方新嵌的石刻五绝。`,
      `那诗正是琴言怀梅崦之作，子云一句"花是人非"说得子玉悲酸走开；席上银壶自流、走杯循轮，蕙芳与子玉先后看破机关，随后行起飞唐诗嵌数目的酒令。`,
      `次贤又出"百美捧觞"筹令，集唐诗嵌美人名、集《毛诗》凑花名；子云另给五旦一个掷骰集曲文的甜令。两令交辉，名士纷纷认输，反被讨了几十杯贺酒去。`,
    ],
    en: [
      `By moonlight they find only an empty trunk in the vegetable garden — over a thousand taels in clothes, gold and silver gone with the newly hired man — and Rongguan, arriving late and seeing the two barber's boys, laughs once and leaves.`,
      `The loss is reported and a hunt ordered; and on the eighteenth, Yuan Baozhu's birthday, Xiao Cixian lays the feast in a newly built hall beside the camellia and plans all thirty-two dishes himself — while Ziyu notices a quatrain newly cut in stone along the gallery.`,
      `The poem proves to be Qinyan's own, and Ziyun's remark that the flowers remain and the person does not drives Ziyu away in grief; then wine-pots that pour themselves and cups that roll to the drinker are unriddled by Huifang and Ziyu in turn, and a game of numbered Tang lines begins.`,
      `Cixian brings out lots naming a hundred beauties, each to be framed in Tang couplets and matched with a flower from the *Classic of Poetry*, while Ziyun sets the performers a sweeter game of dice and aria lines — and the scholars concede defeat, having drunk dozens of cups in tribute.`,
    ],
  },
  36: {
    zh: [
      `元宵演戏他情动真哭，被华公子痛斥；独坐石畔比较徐子云与华公子待人之别，深恨先做戏子后做奴才；正伤心时，林珊枝进来说破师傅曹长庆已死，准他回去送殓。`,
      `师娘哭诉家计萧条，琴言把随身五六十两赏银尽数送她；宝珠、蕙芳、素兰来吊，劝他告长假不去，又议论林珊枝的骄矜与魏聘才的堕落，并说起刻在梅崦的那首诗。`,
      `伍麻子代告一月之假，公子准了；琴言想去看子玉又怕独自登门碰钉子，索性先到宏济寺找魏聘才同去——这一念便惹出祸来。`,
      `谁知满屋子的人：奚十一按住他两肩自夸"是我作成你的"，潘其观一把拉手，唐和尚合掌乱拜；奚十一假意告辞而暗嘱聘才留饭，又飞车回寓取了白菊花箱中那对翡翠镯。`,
      `席上三人轮番戏侮，琴言砸碎酒杯、被和尚跪捧强灌；末了奚十一硬套上一只翡翠镯，他挣脱痛哭，跑到院中除下镯子砸成三段而去，回家蒙头哭了半日，几乎要寻短见。`,
    ],
    en: [
      `He weeps in earnest on stage at the Lantern Festival and is sharply rebuked; brooding by the rockery he measures Xu Ziyun's forbearance against Hua Guangsu's temper and hates a life that is first the stage and then servitude — and then Lin Shanzhi comes in to say that his master Cao Changqing is dead.`,
      `The widow laments a household with nothing left and Qinyan gives her every tael he has; and as Baozhu, Huifang and Sulan come to condole, they urge him to take long leave, weigh Lin Shanzhi's arrogance against Wei Pincai's decline, and tell him of the poem cut in stone at the plum retreat.`,
      `A month's leave is granted; and wanting to see Ziyu but afraid to knock at that gate alone, Qinyan decides to call first on Wei Pincai and go with him — the decision that undoes him.`,
      `The room is full: Xi Shiyi holds him by the shoulders and claims the credit for his rise, Pan Qiguan seizes his hand, the monk bows and chants — and Xi Shiyi, feigning departure, arranges to be let back in, then drives home for the jade bracelets in White Chrysanthemum's chest.`,
      `The three work on him in turn until he smashes a cup and is forced to drink by a kneeling monk; and when Xi Shiyi wrenches a bracelet onto his wrist he breaks free in tears, snaps it into three pieces in the courtyard and flees — and lies weeping at home, close to taking his own life.`,
    ],
  },
  37: {
    zh: [
      `二月初一梅崦雅集，子云倡议作十日之叙；次贤历数京中种种消遣而皆不足取，王恂偏出难题："人中花与花中花孰美"，笑说满园是花而不见一个人中花。`,
      `琴言午正方至，素淡衣裳走入梅林，人花一色；子云特特要他坐首席。他恐魏聘才造谣，索性把奚十一设计、席间戏侮、硬套镯子的始末细细说出。`,
      `子玉断定这是聘才设的计；席上行"一字化三"令，太犬、王玉主、杳查香诸字迭出，王恂说到"曰田"顿住，众人接出由、甲、申，满座大笑；蕙芳又说起遇见刘文泽的业师屈道翁。`,
      `次贤断言道翁品格高于侯石翁，子云遂出"对戏目"之令：《题曲》对《教歌》、《访鼠》对《伏虎》、《看袜》对《借靴》、《折柳》对《扫松》，末以子玉的《思亲罢宴》压卷，一日共对三十二副。`,
    ],
    en: [
      `On the first of the second month the plum retreat opens a ten-day series of gatherings; Cixian runs through the capital's amusements and finds none worth having, and Wang Xun asks slyly which is lovelier, the flower among people or the flower in the garden — remarking that the garden is full of flowers and no person has yet appeared.`,
      `Qinyan comes at noon in plain clothes and walks into the plum grove indistinguishable from the blossom, and Ziyun insists on seating him at the head; fearing Pincai's version will get out first, he tells the whole story himself — the trap, the insults, the bracelet forced onto his wrist.`,
      `Ziyu is certain the trap was Pincai's; the company plays at splitting one character into three, and when Wang Xun sticks fast the others carry it through to general laughter — after which Huifang mentions meeting Liu Wenze's old teacher, Qu Daoweng.`,
      `Cixian rates Qu Daoweng above Hou Shiweng, and Ziyun sets a game of matching play titles — *Composing an Aria* against *Teaching a Song*, *Visiting the Rat* against *Subduing the Tiger*, *Inspecting the Socks* against *Borrowing the Boots* — thirty-two pairs in a day, crowned by Ziyu's answer that turns a son sold to the river into a feast broken off for a mother's sake.`,
    ],
  },
  38: {
    zh: [
      `徐子云在梅崦请屈道翁，只叫四个名旦作陪；书中细叙屈公身世——三闾之后、九年之忧、二十年幕客纵横万里，两试不第，晚岁才得江西一个苦缺，去年夫人病故只剩孑然一身。`,
      `道翁凭神骨口音品人：断蕙芳出身不凡、一二年内必改行，独看琴言便说"这位有些不像"，身有傲骨、不能与时俯仰，劝他趁早改行、修身以俟；琴言听得句句说到心坎。`,
      `众人轮番请教，道翁从碑板源流、《兰亭》诸本讲到李杜优劣与历代韵书分合，断以"李诗可以绍古，而杜诗可以开今"；末论术数，一句"数不敌理"被史南湘赞为快论。`,
      `再论古来形容美人以《硕人》为第一，又辨缠足之始；末了提起南京金吉甫的学问品行，引出他与袁宝珠的师友之谊。二更时四旦拂几移研，道翁按各人大概各题七律一首。`,
    ],
    en: [
      `Xu Ziyun receives Qu Daoweng at the plum retreat with only four performers in attendance; and the chapter gives the old man's life — nine years in mourning, twenty years a private secretary across ten thousand li, twice failed at the examinations, and left alone in the world by his wife's death.`,
      `Reading bone and voice, Daoweng tells Huifang that he was not born to this and will change his life within a year or two, and stops at Qinyan — a proud frame that will never bend with the times, who should leave the profession at once and cultivate himself against a short span; and Qinyan finds every word true.`,
      `Question by question the old man ranges over stele rubbings, the versions of the *Orchid Pavilion*, the merits of Li Bai against Du Fu — one carries on antiquity, the other opens what comes after — and the history of rhyme books, ending with the pronouncement that number cannot outweigh principle.`,
      `He ranks the ancient descriptions of beauty, settles the origins of foot-binding, and finally names the learned Jin Jifu of Nanjing — whose pupil, it emerges, is Yuan Baozhu himself; and late that night, with four performers steadying the paper and grinding ink, Daoweng writes a poem for each of them.`,
    ],
  },
  39: {
    zh: [
      `李元茂招赘孙家，吉期定在二月初十；聘才代他张罗一切并追讨去年的金镯，过礼那日到梅宅甚是局促，彩礼还是借了颜夫人的珠冠玉带才凑成十六盒的局面。`,
      `闹房时孙氏兄弟一个结巴一个满口《孟子》，姬亮轩攀亲扯谎被众人取笑；颜仲清讲龙王放生、王恂讲瞎妓辨客，末了聘才为取笑元茂的近视，讲了两个近视兄弟看老婆的故事。`,
      `帐中新娘破口大骂掷物砸碗——原来她正是满头白发的"天老"，性情泼悍年已三十；元茂却蒙在鼓里，只在验帕与黑油之间自解自疑，谢媒时翻来覆去只说头发，人人听不懂。`,
      `半月后新娘取半臂时露出三尺银发，元茂唬得当是妖精，夫妻大闹；原来她每日以灯煤柿漆刷发须费一个时辰。末了元茂想出网巾罩发之计，加髻画眉一照竟像醉杨妃，一场怄气化作洞房和好。`,
    ],
    en: [
      `Li Yuanmao is to marry into the Sun family on the tenth; Pincai manages everything and presses him for last year's gold bracelet, and at the betrothal he is stiff and awkward at the Mei house — the gifts made up to sixteen trays only by borrowing Lady Yan's coronet and court robes.`,
      `In the bridal chamber the Sun brothers stammer and quote *Mencius*, Ji Liangxuan is mocked for his invented kinship, and after tales of the Dragon King's release and the blind courtesan, Pincai — meaning only to tease a short-sighted bridegroom — tells the story of two myopic brothers inspecting their wives.`,
      `The bride bursts out cursing and throws something that smashes the dishes, for she is white-haired from birth, thirty years old and famously fierce; and the bridegroom, understanding nothing, puzzles over a stained handkerchief and black grease, and at the thank-you calls can only talk incoherently about hair.`,
      `Half a month later a three-foot fall of silver hair comes into view, the bridegroom takes her for a demon, and the daily hour of lamp-black and persimmon lacquer is exposed; after a furious quarrel he hits on a net cap and false chignon — and the painted result is so like a tipsy Yang Guifei that the marriage is made up.`,
    ],
  },
  40: {
    zh: [
      `奚十一逢人造谣，又弃旧怜新；巴英官向春兰说破那只西洋木桶的机关，还说有好人家的孩子受骗后上吊投水，末了咒他"烂掉了倒大家干净"——不料一语成谶。`,
      `卓天香带毒而来，两毒并发，奚十一当晚便如火烧；请遍医生越治越烂，末了唐和尚用至宝丹敷住才保得一寸有余，从此行房再不能了。这是他的淫报。`,
      `潘其观灌醉店中小伙计许老三强奸得手，还揌进短发使他日后作痒；老三的姐姐许三姐年方十九却最有主意，定下"叫他也受用一回"的计策，由姐夫周小三邀他上门。`,
      `三姐先赚得他八两重的金镯与三百吊银票，次日周小三领着两个舅子持刀执绳闯入，依样把药与头发揌了回去；潘其观讨还不得只能抱头鼠窜，三姐还在背后笑喊叫他明日再来。`,
    ],
    en: [
      `Xi Shiyi slanders Qinyan everywhere and tires of one favourite after another; Ba Yingguan explains the workings of the foreign barrel and says that boys of decent family have hanged or drowned themselves after it, then curses him with a rotting death — and is taken at his word.`,
      `Zhuo Tianxiang brings the infection, the two poisons meet, and by nightfall Xi Shiyi is on fire; doctor after doctor makes it worse until a monk's remedy saves an inch of him, and he is finished as a lecher for good — his reckoning at last.`,
      `Pan Qiguan gets his young clerk drunk and rapes him, then packs him with cut hair to torment him afterwards; and the boy's nineteen-year-old sister, the cleverest head in the family, proposes that he be served exactly as he served the boy, with her husband to invite him home.`,
      `She first relieves him of a heavy gold bracelet and three hundred strings in notes; next day her husband and brothers burst in with knife and rope and pay him back in kind, and he flees with nothing recovered while she calls after him to come again tomorrow.`,
    ],
  },
  41: {
    zh: [
      `华光宿倚阑垂钓，一尾红鲤扯断丝线连钓吞去；他一时高兴命撑小船，与苏浣香并四婢穿桥过堤，到修竹深处开满碧桃的留仙院。`,
      `赏花不可无酒，夫妇取出管夫人所画的花蕊夫人小像、李香君的桃花扇册页与夫人亲绣的《玉台新咏序》陈在廊前，焚香浇酒，各择一株最好的碧桃祭之。`,
      `十珠各执小杯穿花乱浇如群蝶，齐拜四拜；随后接唱《桃花扇》两出，夫人当场品第，又一语道破花珠之病——添出腔调来那是戏曲不是清曲，清曲要洗尽铅华方见清真本色。`,
      `一句"倒是琴言虽然生些，还得清字意"勾起公子的心事；夫妇又论《元人百种曲》与工尺之弊，各就《梁州序》填一阕新词。晚间他终于唤林珊枝来问：告假一个多月了，怎么还不进来？`,
    ],
    en: [
      `Hua Guangsu is fishing when a red carp breaks his line and swallows the hook; on the impulse he calls for the painted skiff, and with Su Huanxiang and four maids passes under the bridges and along the bank to a courtyard deep in bamboo where the peaches are in flower.`,
      `Flowers must be honoured with wine: they set out three treasures on the gallery — a portrait of the Lady Huarui, the album leaves of Li Xiangjun's peach-blossom fan, and a preface embroidered by Madam Hua herself — burn incense, and pour the wine at the root of the finest tree each has chosen.`,
      `The ten maids scatter through the blossom with little cups like a flight of butterflies and bow four times; then they sing two scenes from *The Peach Blossom Fan*, and Madam Hua ranks them, telling the one who protests that added flourishes make it theatre, not pure song — which must be washed clean of paint before its true colour shows.`,
      `Her remark that Qinyan, stiff as he is, has the true clear quality touches her husband; the two go on to the corruption of the old song-books by their notation, and each fills in a new lyric to the same tune — and that night he sends for Lin Shanzhi to ask why a month's leave has run past six weeks.`,
    ],
  },
  42: {
    zh: [
      `葬事既毕，师娘一早便进房算账，索每月二百吊，或索三千两出师，两条路凭他走；琴言几乎落泪，出门寻素兰、宝珠皆不遇，路上反被两个人跟着品评。`,
      `跟来的正是乌大傻与姬亮轩，硬来打茶围；一个近视欠通而爱念对子充斯文，一个满口吹嘘敝东与华光宿、徐子云不相上下，琴言听得坐不住，托词走开。`,
      `席上不过干果小菜白粥，乌大傻吃饱先溜；姬亮轩找不着人便说没带钱，被两个孩子拉住，只得由伍麻子提灯跟回寓所，开了拜匣捡出票子如割自己的肉，末了只拈了三吊。`,
      `伍麻子嫌少争执，门房里人说破这是奚十一的寓处才不敢惹；师娘见了三吊钱大骂，次日再去照票那后添的一吊竟还是假的。这一日琴言到底找着了宝珠与素兰，把师娘索钱的事细细商量。`,
    ],
    en: [
      `The funeral over, the widow comes in with her accounts and offers a choice — two hundred strings a month, or three thousand taels to buy his freedom; near tears, Qinyan goes out to find Sulan and Baozhu, finds neither, and is followed through the streets by two men appraising him aloud.`,
      `The two prove to be Wu Dasha and Ji Liangxuan, come to force their way in for tea: one short-sighted and unlettered but fond of reading couplets aloud, the other boasting that his employer ranks with Hua Guangsu and Xu Ziyun — until Qinyan cannot sit still and slips out.`,
      `The fare is nuts, pickles and gruel; Wu Dasha eats his fill and slips away, and Ji Liangxuan, left with the reckoning, pleads an empty purse, is held fast by the two boys, and must let Wu Mazi light him home — where he parts with three strings as though cutting his own flesh.`,
      `Wu Mazi argues for more until the gatemen let slip that this is Xi Shiyi's lodging; the widow curses the three strings, and next day one of the notes proves counterfeit — while Qinyan at last finds Baozhu and Sulan, and lays the widow's demand before them.`,
    ],
  },
  43: {
    zh: [
      `宝珠替他算账：每年二千四百吊而"养膳"更无尽期，出师须先立定主意；素兰一听便拍手，说十天前已与蕙芳议过，四五千吊几个相好凑一半也不难，三人遂同到蕙芳寓中。`,
      `四人同往怡园赏杏，先听见楼上笛声清歌——次贤新从书箱翻出旧友所撰的《梅花梦》曲本，正照谱填工尺；蕙芳劝他切莫交与班中教师，那些人只顺自己的口，改到不通而后止。`,
      `席间由干荔枝谈到花能开几日，蕙芳叹形貌变而气味亦变，人过几年便清而变浊、甘而变酸；饭后宝珠把师娘索价说与子云，众人所凑共一千八百，子云索性一概包下，只叮嘱以速为妙。`,
      `开口的差使荐了叶茂林，他却要蕙芳同去；到长庆家，寡妇诉了满腹苦水，蕙芳便编出一位江南知县要认琴言作儿子，出到三千吊，寡妇却索三千两纹银，还说华公子、徐老爷更好说话。`,
      `蕙芳冷笑下了一记重手，说华公子近来并不喜欢他、徐老爷也有些烦了；寡妇终被这条软麻绳捆住，讲定二千四百两。次日交割立据，琴言拜辞师父的灵与师娘洒泪而别——才出了师，忽又生出一场气恼来。`,
    ],
    en: [
      `Baozhu reckons it up — twenty-four hundred strings a year and no end to her keep — and says he must first decide whether to buy his freedom; Sulan claps his hands, having already worked it out with Huifang, and says friends could raise half of four or five thousand between them.`,
      `The four go to Yiyuan among the apricot blossom and hear a flute above — Cixian has found an old friend's play in his book-chest and is setting it to notation; and Huifang warns him never to give it to the troupe teachers, who will alter it to suit their own mouths until it makes no sense.`,
      `Talk of dried lychees becomes a meditation on how few days a flower has, and how a person's savour sours with the years; and after the meal Baozhu lays the widow's price before Ziyun, whose friends pledge eighteen hundred between them — and who quietly covers the rest, urging only speed.`,
      `Ye Maolin is chosen to open the matter but insists that Huifang come too; at the widow's house, after a long recital of her hardships, Huifang invents a Jiangnan magistrate who wants the boy for a son and offers three thousand strings — and is told nothing under three thousand taels will do, since the great houses would pay more.`,
      `Huifang answers coldly that Hua Guangsu has tired of the boy and Ziyun grown weary too, and the widow, tied by that soft rope, settles at twenty-four hundred taels; the papers are signed next day, and Qinyan weeps at his master's bier and at her door — and is barely free before fresh trouble begins.`,
    ],
  },
  44: {
    zh: [
      `华光宿命外跟班姚贤出城催他回府，扑了空；路上却与徐、奚两府的家人小酌，一个说出子云代出二千四百两的实情，一个添出琴言在宏济寺陪酒、受了翡翠镯的谎话。`,
      `姚贤回府又添了许多，林珊枝正想臊他的脸，索性照直去回；华公子气得脸都白了，连说"琴言丧尽天良，而度香笑里藏刀"，扬言要把他撵出京去，经众人婉劝才略平。`,
      `夫人淡淡说人家爱替他出师干我们甚事，闹起来两家都担狎优之名，公子心气又消一半；不料隔了一夜早上忽又恼起来，命林珊枝把箱笼送到怡园，另附一封措辞极狠的信。`,
      `琴言取信一字字看去，一腔怒气直涌，两眼一翻仰面便倒，救醒后放声大哭；子云索性断了这交情，次贤要收他作忘年小友，蕙芳、宝珠也说起改行之志。珊枝回府只说徐老爷冷笑一声便收下了箱子，气得公子讲不出话来。`,
    ],
    en: [
      `Hua Guangsu sends a servant to fetch Qinyan back and the man finds him gone; over wine with two other households' servants he hears one true thing — that Ziyun paid twenty-four hundred taels — and one false, that Qinyan drank at the temple and took a jade bracelet.`,
      `The servant embroiders further, and Lin Shanzhi, glad of a chance to shame a rival, repeats it all; Hua Guangsu turns white, cries that Qinyan is without conscience and Duxiang a smiling knife, and swears to drive the boy out of the capital until the household talks him down.`,
      `His wife says coolly that if others choose to buy the boy out it is no business of theirs, and that a quarrel would fix the name of catamite-keeper on both houses; but a night's sleep revives his anger, and he sends the trunks to Yiyuan with a letter of studied savagery.`,
      `Reading it word by word, Qinyan chokes, faints and wakes to a storm of weeping; Ziyun breaks off the friendship altogether, Cixian offers to make him a young friend and teach him everything he knows, and Huifang and Baozhu speak of leaving the stage themselves — while Shanzhi reports only that Ziyun laughed once and kept the trunks, which leaves his master speechless.`,
    ],
  },
  45: {
    zh: [
      `琴言住进怡园，愁闷消去一半；子玉趁新月再来，脱开古董客的纠缠到海棠春圃，与他论海棠有色无香——那清香藏在花的肌肤颜色里，须凝眸谛视良久才自然上到鼻孔，子玉称之为"心香"。`,
      `琴言说出一段心事：从前上场便把这身子不当自己，如今身虽安而心实未安——戏是决意不唱，奴才也不再作，却又作什么？子玉说若离了京便与平人一样，只恨自己一无能力，两人相约等他得一个外任小官同行。`,
      `次日十九人齐集含万楼扶乩，降坛的自称杜兰香；琴言跪祷终身，乩上判出"再生不记前生事，父子相逢各惘然"，众人皆解不出，再求注解，只得"杜郎且退，屈翁上前"八字。`,
      `乩明言道翁前生是江宁府推官，琴言乃其十五夭亡的娇女；换人再扶，来的是坡仙，一气写下长篇古风把在座逐一嵌入，末段"娇女含愁化玉郎"竟使道翁泪下。席上子云遂倡议成此仙缘，收琴言为义子。`,
      `道翁应允，琴言红着脸点头，铺下红毡拜了八拜；道翁当席为他改名——依我的姓，改名勤先，留一个琴字，号琴仙。自此他便称屈勤先，不复叫琴言了。`,
    ],
    en: [
      `Qinyan settles at Yiyuan and half his gloom lifts; Ziyu, coming again by new moon, escapes an antique dealer's chatter and finds him among the crabapples, where they decide that the flower's scent is not absent but hidden in its colour and skin, to be drawn out only by long looking — a fragrance of the mind.`,
      `Qinyan confesses that on stage he used to pretend the body was not his, and that now, though safe, his mind is less at rest than before — he will not act and will not serve, and does not know what else there is; Ziyu says that away from the capital he would be like anyone else, and wishes only for a small provincial post so that they might go together.`,
      `Next day nineteen of them gather for the planchette, and the goddess who descends bids Qinyan kneel and ask his fortune — answering with a verse about a rebirth that remembers nothing and a father and child who meet without knowing it, and then, pressed for a gloss, with eight words calling Qu Daoweng forward in his place.`,
      `The spirit declares that in a former life Daoweng was a Jiangning judge and Qinyan the daughter he lost at fifteen; a second sitting brings Su Shi, who writes a long poem working every guest into it and ends on a grieving daughter turned into a jade youth — at which the old man weeps, and Ziyun proposes the adoption.`,
      `Daoweng consents and Qinyan, too shy to speak, nods; red felt is spread and eight bows made; and the old man renames him on the spot — his own surname, a new given name, and the style Qinxian, keeping one character of the old — so that Qinyan is Qinyan no longer.`,
    ],
  },
  46: {
    zh: [
      `道翁搬进怡园与琴仙同住，晨夕课他温书习字，半月之间文理大进，父子亲爱如同亲生；他写成《怡园序》送与子云、次贤斟酌，次贤赞"就使徐、庾复生也不能涂改一字"。`,
      `二十八日众人遍游全园，一路改名题联：含万楼改作赐书楼并亲题长联，承荫堂添了两副，戏台前的匾额由子玉题成，道翁赞道"我说庾香世兄定是不凡的"。`,
      `牡丹、兰径、菊畦、梅崦诸处次第改题，各有属笔；到海棠春圃，道翁当众考琴仙起名，他红着脸说出"春风沉醉轩"，又出一上联对不出，末由子玉续成"千金买良夜，好酬春色正温柔"。`,
      `宝香堂上摆席，子云推道翁的两副为冠冕，道翁却逐一品题诸人，说这二十四副好在虚字少而实字多；末了众人携灯照读那篇序，读到"蓬心将死，经零雨而重苏"，真是游、夏不能赞一词，惟有拜倒而已。`,
    ],
    en: [
      `Daoweng moves into the garden and teaches him morning and evening; within a fortnight the boy's writing is transformed and the two are as father and son — and the old man finishes the garden preface, of which Cixian says that the great masters of parallel prose could not alter a character of it.`,
      `On the twenty-eighth the company walks the whole garden, renaming and inscribing as they go: the great tower becomes the Hall of Bestowed Books with a couplet in the old man's own hand, two more are added at the main hall, and Ziyu's tablet for the stage draws the remark that he was always sure this young man was out of the common.`,
      `One place after another is renamed and given its couplet; and at the crabapple court Daoweng makes Qinxian name it himself — he blushes out a name that everyone applauds, offers a first line he cannot cap, and has it completed by Ziyu with a night worth a thousand gold and a spring too tender to waste.`,
      `Over supper Ziyun ranks the old man's two couplets first, but Daoweng grades every hand in turn and observes that the twenty-four owe their strength to having few empty words; then the preface is pinned to the wall and read by lamplight — and at its close, where a withered heart revives in the rain, no one can add a word to it.`,
    ],
  },
  47: {
    zh: [
      `四月十一日报到：史南湘中二十一名、田春航中三十四名进士，蕙芳与兰保喜得说不出话；子云要他们搬进怡园，春航却因接母北上另寻房子，蕙芳替他备车马、收管家，赶车的正是周小三。`,
      `奚十一病后仍不安本分，无奈那物只剩半截，一动便疼；他备银谢唐和尚，听他夸新开的饭庄如何后门通着魏聘才的住房，从前必然高兴，如今却听不得，索性说出苦楚，问广东那个接树的法子京里可有会的。`,
      `唐和尚拍手说巧极：隔壁正有个苏州人阳善修专门行这一道。讲定包修包好二百两，先治直那条筋；次日行术蒙眼四刀，白菊花在板壁缝里失口叫了一声"极短也要五寸"，唬得跑了进去。`,
      `十余日果然长好，只是刀痕斑斑、撒溺仍疼。潘其观那边的报应更琐碎难堪：许老二塞进的东西久而生变，痒得难忍又开不了口，先求打更的焦傻子被顶了回来，再请桂枝又丢了银包与挂表。`,
      `卓天香荐来的那人一听便笑说早已尽知，开口三百吊，还指定一枝二两金的耳挖；潘其观用镀金的充数被银匠试出，那人便以此为凭据要挟，此后零零星星应酬了好几年，直到他死了方罢。`,
    ],
    en: [
      `On the eleventh the news comes that Shi Nanxiang and Tian Chunhang have both passed; Huifang and Lanbao are speechless with joy, Ziyun offers them rooms in the garden, and Huifang, since Chunhang must house his mother, finds him a place and staffs it — with Zhou Xiaosan on the carriage.`,
      `Xi Shiyi will not stay quiet after his illness, but half of him is gone and any stirring is agony; taking silver to thank Tang Heshang, he hears the monk boast of the new restaurant with its hidden door into Wei Pincai's rooms — talk he can no longer bear — and asks instead whether anyone in the capital can perform the southern graft.`,
      `The monk knows the very man, a Suzhou practitioner who does nothing else; the work is contracted at two hundred taels, the tendon straightened first, and next day, with the patient blindfolded and four incisions made, White Chrysanthemum is heard through the partition calling out how long it had better be, and comes running in.`,
      `In ten days it heals, scarred and still painful; and Pan Qiguan's retribution is pettier and worse — what was packed into him festers and itches unbearably, the night watchman he begs for help hands him a scrap of paper and walks off, and the old acquaintance he calls in leaves with his silver and his watch.`,
      `The man Zhuo Tianxiang brings knows the whole story already, names three hundred strings and demands a gold ear-pick of a stated weight; Pan Qiguan fobs him off with silver gilt, is found out by a silversmith, and is blackmailed with the story for years afterwards, until the man dies.`,
    ],
  },
  48: {
    zh: [
      `殿试揭晓，田春航大魁天下，史南湘点了庶常；书中点出他与"苏"字的缘分——去年赖苏蕙芳成全，今科又赖苏侯赏识。正得意时忽得家信：夫人已于二月暴病而亡，太夫人将偕母舅进京，春航一悲一喜。`,
      `十余日后田太夫人到京，春航在母亲面前极说蕙芳的好处；史南湘则搬进怡园清凉诗境，把同年同馆一概不放在眼里，求文求诗者接踵而来，他索性请金粟、子玉甚至琴仙代笔，人人说好而无一人看破。`,
      `南湘拉琴仙、金粟、子玉泛舟看龙舟；船上琴仙看燕子问"今年去了明年还回来么"，又说落花劫太多，落在水里的还干净些；子玉暗祷一尾鲤鱼若游转来玉侬也能转来，那鱼果然挨着船身转了回来。`,
      `琴仙取出《怡园饯别图》扇子，子云已填了半阕《金缕曲》，子玉和其韵；念到"只道今生长厮守……谁又想，境更换"琴仙放声大哭，泪把词稿滴湿了一半。初六日秦琪官单请话别，说起同来的十个人如今只剩两个，三人同哭。`,
      `琴仙掷骰祝"三心和同，有始有终"，两掷皆是六红——其实那副骰子六面皆红，是琪官做的顽意，倒解了好些愁闷。众人送至十里外的皇华亭，琴仙望见子玉躲在人后拭泪，一阵心痛跌倒在地；车轮碾动后，子玉望不见那车才放声一哭而回。`,
    ],
    en: [
      `The palace examination makes Tian Chunhang first in the empire and Shi Nanxiang a Hanlin bachelor; the book notes how much he owes to the name Su — to Su Huifang last year and to the Marquis Su this — and then a letter comes: his wife died suddenly in the second month, and his mother is on her way north.`,
      `Lady Tian arrives and Chunhang praises Huifang to her until she treats him as one of the family; Shi Nanxiang, installed at Yiyuan, ignores his fellow graduates entirely and, pestered for poems, has Jin Su, Ziyu and even Qinxian write them for him — to universal praise and no suspicion.`,
      `Nanxiang carries Qinxian, Jin Su and Ziyu off to watch the dragon boats; on the water Qinxian asks whether the swallows that leave will come back, and says that of all the fates of fallen blossom the water is at least the cleanest — while Ziyu prays silently that a passing carp may turn, and it turns.`,
      `Qinxian brings out the farewell fan Cixian has painted, on which Ziyun has begun a lyric and Ziyu now answers it; at the line about believing they would be together for life he breaks down and soaks half the draft with tears. Then Qin Qiguan gives a parting dinner and recalls that of the ten who came north together only two are left, and all three weep.`,
      `Qinxian throws the dice on a vow that three hearts should hold together, and twice they come up all red — the dice being red on every face, a trick of Qiguan's that lifts the gloom; and at the pavilion ten li from the city, catching sight of Ziyu wiping his eyes behind the others, he faints away — and when the wheels move and the carriage is lost to sight, Ziyu weeps aloud and turns home.`,
    ],
  },
  49: {
    zh: [
      `子玉送别归来旧病复发；田春航断弦，太夫人诸事不惯，雇来两个京东妇人皆不堪使唤，赶车的周小三便向苏蕙芳荐了他三姐——蕙芳久闻她收拾潘其观之名，也想见识见识。`,
      `三姐一到便见不村不俏、伶俐周到，田太夫人十分欢喜；蕙芳忍不住问起潘三之事，她红脸啐了一声便走，到帘边却回脸一笑。另一头苏侯听说春航要续弦，托房师杨方猷传话，春航踌躇难辞，只说禀过家慈再复命。`,
      `华光宿早已自悔那封恶札，听了扶乩之事更觉冤了琴言，遂先下气去招陪，子云大度包容绝不提起；春航来问亲事，子云连连称贺，说苏氏姊妹人称"二乔"，那次女的相貌竟与苏蕙芳有九分相似。`,
      `子云顺路到苏府提亲，苏侯故作沉吟只怕轻薄少年，经力保才大笑应允；随后长谈两家亲眷、史南湘的狂名与秋间的博学宏词。回来又故意拿"现有个状元夫人在家"的闲话臊春航，末了讲定七月初七成礼。`,
      `春航把"那位小姐像你竟到九分"的话说与蕙芳，二人由此谈到蕙芳自己成家之难；他去后三姐进来论年庚，一个叫姐姐一个叫兄弟，她这才说破前事：那是你姐夫做的，与三兄弟报仇，"我瞧还没有瞧见潘三是什么样儿呢"。`,
    ],
    en: [
      `Ziyu comes back from the farewell and relapses; and in the widowed Chunhang's household two hired women prove so idle and foul-mouthed that both are dismissed within a fortnight, until the carriage-driver recommends his own sister-in-law — the Third Sister whose handling of Pan Qiguan Huifang has long wanted to see for himself.`,
      `Third Sister proves neither coarse nor showy and so capable that Lady Tian is delighted; Huifang cannot resist asking about Pan Qiguan and gets a blush, a hiss and a turned back — and a smile from the doorway. Meanwhile the Marquis Su, hearing that Chunhang means to remarry, has the proposal conveyed through his examiner, and Chunhang can only say he must ask his mother.`,
      `Hua Guangsu has long repented the cruel letter, and after hearing what the planchette declared is sure he wronged Qinyan — so he comes to make amends, and Ziyun receives him exactly as before and never mentions it; and when Chunhang asks about the match, Ziyun congratulates him and says the younger Su sister is nine parts the image of Su Huifang.`,
      `Ziyun calls at the Su mansion and, when the marquis affects to hesitate over the morals of young men, vouches for Chunhang until the old man laughs and consents; a long talk follows on both families, on Shi Nanxiang's reputation for wildness and on the coming examination — and Ziyun teases Chunhang afterwards with the rumour that he already has a zhuangyuan's lady at home, before fixing the wedding for the seventh.`,
      `Chunhang repeats that the bride is nine parts Huifang's double, and the talk turns to how nearly impossible it is for one of their kind to marry; and after he leaves, Third Sister comes in, compares birthdays until they settle on sister and brother, and explains at last that the revenge was her husband's doing on her brother's behalf — she never even saw Pan Qiguan's face.`,
    ],
  },
  50: {
    zh: [
      `刘文泽路过林春喜门口进去看他，见后窗芭蕉叶上写满真行大小的字——他取"书成蕉叶"之意，写满一面再写一面，擦去再写，又在叶上画草虫；一柄团扇上螳螂捕蝉宛然欲动，文泽赞叹不信，硬索了去。`,
      `众人转到唐和尚新开的安吉堂，密室三间而联额字画俗恶不堪；席间说起梅子玉自送行后又病了几天，仲清说他的元神此时正跟着玉侬在长江里守风，只怕送到南昌才肯回来。`,
      `桂保出了个分四柱的拆字令；忽听隔壁唱《南浦》，春喜便就工尺板眼剖析南曲入声该断之法，又说《刺梁》一出普天下只此一处出调，更指出班中口白须拆作三截才与曲文文气相接。`,
      `唐和尚从后角门钻进来，一串闲话说尽京中近况：高品被他塞过顽物、天天拜佛保佑他落第；魏聘才捐了从九品分发湖北，玉天仙竟拿积蓄替他捐官并说定嫁他同走；潘其观欠嫖钱不出，自己咬下腕上两块肉。`,
      `他还奉承文泽三人将来同做抚藩臬台，走堂的却说账早已会过，他笑称和尚没有折本的买卖，明日就拿缘簿到宅里去。魏聘才与玉天仙同居另租房子，临行讨账不着，众人轮流饯别；出京之日唐和尚送到十里长亭洒泪而别，从此书中再没有他的事了。`,
    ],
    en: [
      `Liu Wenze looks in on Lin Chunxi and finds the banana leaves outside his window covered with writing — he practises on them because paper would invite ridicule, filling one face and then the other and wiping them clean — and carries off by force a round fan on which a mantis stalks a cicada so vividly that he cannot believe the boy drew it.`,
      `They move on to Tang Heshang's new restaurant, whose private rooms are hung with atrocious calligraphy; and over the food they speak of Mei Ziyu, ill again since the parting — his soul, says Zhongqing, is at this moment wind-bound on the Yangtze with Yunong and will not come back before Nanchang.`,
      `Guibao sets a character-splitting game in four columns; then a song from next door starts Chunxi on how the entering tone must be broken in southern arias, on the single passage in the whole repertory that changes mode, and on the spoken parts that troupes deliver in one lump and that ought to be cut in three to run with the music.`,
      `Tang Heshang slips in by the back gate with all the town's news: how he once smuggled an obscene toy into Gao Pin's sleeve and has prayed for his failure ever since; how Wei Pincai has a ninth-rank post for Hubei bought with Yu Tianxian's savings, she meaning to marry him and go too; and how Pan Qiguan, unable to pay a courtesan, bit two pieces out of his own wrist.`,
      `He flatters the three of them as future governors, and the bill proves already paid — no monk, he says, does business at a loss, and he will bring the subscription book round tomorrow. Wei Pincai sets up house with Yu Tianxian, fails to recover his debts, is feasted by his cronies, and is seen off at the ten-li pavilion by the weeping monk — after which the book is done with him.`,
    ],
  },
  51: {
    zh: [
      `李元茂与孙氏兄弟冒籍到通州院考：元茂抄旧稿，嗣徽花八十两雇了枪手，嗣元只在卷上一阵乱写；发落之日挂出牌来，说他的卷子无两字可连，嗣徽反去见宗师满口之乎者也，被一拍桌案骂作疯子。`,
      `元茂独逛运河边，被缆子绊倒跌在一个补衣妇人身上，两岸拍手大笑；那妇人揽下这桩买卖，跟到寓中讲定四百钱。偏偏嗣徽回来推门不开，从窗下看得清清楚楚，便在门口把那妇人截住，约她明日再来。`,
      `次日元茂假睡，隔着门窗把嗣徽的一场从头听到尾，连讲价也听得分明——那妇人抢白说泥腿上跷着皂靴还想赖作平人省钱。恰在此时嗣元回来：他在州里挺撞了几句，被按在明伦堂板凳上打了二十竹板，两腿紫烂，一步一攧地扶回来。`,
      `他推门不开，嗣徽急中生智撕破一件衣裳交那妇人缝才开了门；及至发现被撕的正是自己只穿过一回的衫子，索性直戳其短——"不过花了八十两请人枪来的"，两人夺棍互殴，全仗元茂拉开，斗嘴到五更。`,
      `元茂在媳妇面前夸自己的才学，却说漏了亲手摸过那妇人的话，被拧被咬赔了半日礼；后来他为凑钱把去年借聘才的金镯取出，路上遇见二喜被拉上车，酒后模模糊糊竟教他把镯子赚了去，只得再向王恂借四十金还清各账，随丈人出京。`,
    ],
    en: [
      `Li Yuanmao and the Sun brothers sit the prefectural examination on a false registration: one copies old drafts, one pays eighty taels for a substitute, and the third simply scribbles — and when a notice orders an inquiry into a paper in which no two characters connect, his brother goes to explain and is told, with a blow on the table, that he is the madman.`,
      `Wandering by the canal, Yuanmao trips over a hawser and lands on a woman mending clothes, to the delight of both banks; she takes on the business and follows him to his lodging for four hundred cash — and Sun Sihui, finding the door bolted, watches through the window, waylays her on the way out and books her for the next day.`,
      `Next day Yuanmao feigns sleep and hears the whole of his brother-in-law's turn through the door, haggling included — the woman retorting that a man in official boots need not pretend to be a commoner to save money — and at that moment the third brother comes home, hardly able to walk after twenty strokes of the bamboo for talking back to the education officer.`,
      `Unable to get in, he nearly breaks the door; his brother tears a garment and hands it to the woman to mend as an alibi — and when the torn garment proves to be his own, barely worn, the quarrel turns to the eighty taels paid for a substitute, and the two beat each other with a window-prop until Yuanmao pulls them apart at dawn.`,
      `Boasting to his wife of his own learning, Yuanmao lets slip that he handled the woman himself and is pinched and bitten into a long apology; and later, redeeming the gold bracelet he borrowed from Pincai, he is pulled into Er Xi's carriage, muddled with wine and talked out of it — so that he must borrow forty taels from Wang Xun to clear his debts before leaving the capital.`,
    ],
  },
  52: {
    zh: [
      `高品保荐应考博学宏词到京，考期定在八月初十；苏侯家阔，妆奁那日用了二千人夫，铺箱还添了二万白银三千黄金。初六两处戏酒，子玉勉强出来，见八旦独少杜琴言而一人向隅；点戏时高品偏点《当巾》，正是郑元和落魄的故事。`,
      `兰保跌了一交索性改口，说要当了七叔赠的衣衫再听两天戏，众人先骇异后哄堂；正闹着妆奁到了，二千抬夫塞满街道，送奁亲戚中就有华光宿——他一眼看见座中最年轻的子玉，心里一惊，坚不肯坐首席，只依齿序而坐。`,
      `八旦上来独不见蕙芳，华光宿一句"怎么不见那位状元夫人"被子云用《燕子笺》的《诰圆》岔开；随即他向子玉发问——既订交最密，"阁下何以忍心割爱"？子玉顿口无言，子云代答：欲成全这个人才叫他随业师去，"成身以报知己，岂不胜于轻身以事知己"。`,
      `华光宿取过素兰的扇子，见《断肠词》而猜着是子玉手笔，"非至情人不能道"；素兰追出讨扇，他不忍释手，另取一柄题着两首《梁州序》的桃花扇相赠。那边王文辉把蕙芳从账房叫出来，蕙芳说出开古董书画铺、货到苏杭置办、几个相好入股安身的打算。`,
      `华夫人一眼评破那阕词非夫妇非朋友非赠妓，公子说破是梅子玉送琴言的；她随口讨还自己写的扇子，公子只得推说收起了。第三日内眷齐集，田太夫人看新人与华夫人分不出次第，陆氏夫人一段牢骚精明爽辣，全场全靠许三姐八面张罗。`,
    ],
    en: [
      `Gao Pin arrives recommended for the special examination, fixed for the tenth of the eighth month; the Su dowry takes two thousand porters, with twenty thousand taels of silver laid into the chests for good measure. At the two banquets on the sixth Ziyu forces himself out and finds the eight performers there and Du Qinyan not — and Gao Pin pointedly calls for the play about Zheng Yuanhe in his beggary.`,
      `Taking a fall onstage, Lanbao improvises that he will pawn the coat his uncle gave him and hear two more days of the play; the room roars. Then the dowry arrives behind two thousand porters, and among the escorting relatives is Hua Guangsu — who starts at the sight of the youngest man present, refuses the head seat, and takes his place by age.`,
      `The eight performers come up without Huifang, and Hua Guangsu's question about the zhuangyuan's lady is turned aside with a joke about there being two of them; then he asks Ziyu outright how he could bear to give Qinyan up — and Ziyun answers for him, that the boy was sent away to be made into a man, and that to establish oneself in repayment of a friend beats throwing one's life away in his service.`,
      `Hua Guangsu takes up Sulan's fan, reads the *Heartbreak Lyrics* and guesses the hand — none but a man of utmost feeling could write so; and when Sulan comes after it he cannot give it up, and hands over a peach-blossom fan instead. Meanwhile Wang Wenhui calls Huifang out of the counting-house and hears his plan for a shop of curios and silks, stocked from the south and owned by friends who want somewhere to be together.`,
      `Madam Hua judges the lyric at a glance — not a wife's, not a friend's, not a courtesan's — and is told it was Mei Ziyu's to Qinyan; then she asks for her own fan back, and her husband can only say he has put it away. On the third day the women gather, Lady Tian cannot tell bride from sister, Madam Lu delivers a brisk and bitter complaint about her examiner husband, and Third Sister keeps eight tables going at once.`,
    ],
  },
  53: {
    zh: [
      `华光宿懊悔把夫人画的桃花扇给了陆素兰，遣人进城叫他带扇来见；素兰正与众人商议开铺，进园后被命就画上桃花填一阕《梁州序》，席间公子问出一句诛心的话：你们这班人当初何必学戏？素兰答得极有分寸。`,
      `公子许以库房中的刻丝顾绣与中等古董，又同去看了屋后那块怪石；素兰的词一出，公子连吟数遍便一句句点破——"你明明将琴言借题发挥感讽我"，随即自认"究竟是他负我，非我负他"。`,
      `素兰说出一番极通透的话：琴言之心没有一点曲折，所谓孤忠苦节，正是他的好处；公子点头自认"我毕竟不是他的知己"，又叹"我还不如度香"。天晚留宿，次日挑出两箱花绣并许多古玩，素兰竟一下有了半个古董铺。`,
      `子云又添了数十项货色，田春航托辞送去二百两赤金；一日书童捧进屈道翁自南京寄来的一包书信，十几封都是琴言笔迹，其中"庾香才子手启"一封竟是和子玉的《金缕曲》，南湘也说非玉侬不能。`,
      `次贤主张把信送去让子玉哭个尽性。那一夜子玉梦见琴言荡桨而来，转眼化作一个逼问他"非为色耶"的女郎；再登彼船，琴言递来的却是当年那方血泪罗帕，末了父亲怒喝而出，他一脚踏空落江惊醒。次日得词，读了百余遍，缝个古锦囊佩在身上。`,
    ],
    en: [
      `Regretting the fan he gave away, Hua Guangsu sends for Lu Sulan; Sulan, interrupted in the middle of planning the shop, is set to write a lyric on the painted peaches, and is asked over the wine why people like him ever learned to act at all — and answers with careful precision.`,
      `He promises chests of old embroidery and his second-best curios and takes Sulan to see the strange stone behind the house; and when the lyric is written he chants it over and reads it through — this is Qinyan, used to reproach me — before insisting that it was the boy who failed him and not he the boy.`,
      `Sulan's summing-up is the chapter's core: Qinyan's heart has no bend in it, and that lonely, unbending loyalty is precisely his virtue — at which Hua Guangsu concedes that he was never the boy's true friend and is no match for Duxiang; and Sulan, kept overnight, goes home with two chests of embroidery and curios enough for half a shop.`,
      `Ziyun adds dozens of lines of stock and Tian Chunhang sends two hundred taels of gold on a pretext; then a packet arrives from Qu Daoweng at Nanjing, every letter in Qinyan's hand — including one to Ziyu that proves to be a matching lyric, which even Nanxiang, who had thought the original unanswerable, says only Yunong could have written.`,
      `Cixian says the letters should be sent so that Ziyu may weep his fill; and that night Ziyu dreams that Qinyan rows out to him and turns into a woman demanding whether his devotion is not desire after all — then finds the real Qinyan in another boat, handing him not the lyric but the old blood-stained handkerchief, until his father's furious voice sends him overboard. Next day the lyric comes, is read a hundred times, and is sewn into a brocade bag to be worn.`,
    ],
  },
  54: {
    zh: [
      `梅士燮家书回来，说子玉年已十九可以完婚，宏词之试若自信得过便求人保荐；海内文人七八百人应试，三场只取六十名，子玉第二，殿试又占鳌头，最年轻而授了编修。`,
      `三试压倒群英他却毫不自得，反因仲清、高品、王恂落第而更谦谨；孙佩秋与蓉华到王琼华房里道喜，说宏词十年一考强似中状元，说得琼华低头不语，由妆台上一本闺秀诗草转入一段极精彩的论诗。`,
      `琼华的议论最见识力：说《唐诗三百首》便于初学而一诗有一诗的好处，拆解岑参《白雪歌》妙在言语之外，推杜甫四十字为五律之冠，又大胆指出《梦太白》两句梦成了死太白；末以斗韵一场把佩秋考得哑口。`,
      `九月十九日成礼，洞房花烛之夜子玉一见便心花开放——书中点破：琴言是个男子终不能配偶，皇天才又生出个与他上妆时一模一样的琼华小姐。一日子玉落下那个小锦囊，琼华拾起解开，见了两纸《金缕曲》与琴言的名字。`,
      `她把词收起、空囊仍挂原处，子玉一捏便着了忙；她先逐句剖解那两阕词，随即逼问"这人与你常相厮守，你却怎样位置他"，子玉答"不过侍书捧研"，她道"侍书捧研，何用魂梦相唤"，两人各说半句便住了口，末了只以赏菊之约岔开。`,
    ],
    en: [
      `A letter from Mei Shixie says his son is nineteen and should marry, and may seek a recommendation for the special examination if he can trust himself; seven or eight hundred scholars compete, three sessions cut them to sixty, Ziyu stands second — and at the palace round he takes first place and, youngest of them all, is made a Hanlin compiler.`,
      `Having crushed the whole field he shows no elation and grows humbler because his friends have failed; Sun Peiqiu and Ronghua come to congratulate Wang Qionghua, telling her that an examination held once in ten years outshines the first place itself — and from a volume of verse on her dressing table the talk turns to Tang poetry.`,
      `Qionghua's criticism carries the chapter: the anthology is good for beginners but no poem can be simply graded; Cen Shen's snow song works outside its own words; forty characters of Du Fu crown the five-word form; and even Du Fu may be faulted for a couplet that turns a dreamed Li Bai into a dead one — after which a contest of rhyme counts leaves Peiqiu speechless.`,
      `They marry on the nineteenth, and at the sight of his bride Ziyu's heart opens — for, the book explains, Qinyan being a man could never be a match, and heaven produced instead a lady with exactly Qinyan's stage face. Then he leaves the little brocade bag behind, and Qionghua opens it and finds the two lyrics with Qinyan's name.`,
      `She keeps the sheets and hangs the empty bag back where it was; Ziyu squeezes it flat and is thoroughly alarmed. Having taken the lyrics apart line by line, she asks what place such a person would have beside him — to attend my books, he says — and answers that book-attendants have no need to call each other's souls in dreams; each breaks off half a sentence, and the subject is turned to a chrysanthemum party.`,
    ],
  },
  55: {
    zh: [
      `琴仙出京一路涕零，三日到扬州；道翁带他雇小船逛平山堂，途中指点当年修禊的小虹园已围墙半倒，又有游船上的妇人掷果相赠；知客僧借着指点景致挨来挤去，几次握住琴仙的手，只得托词有雨辞去。`,
      `一日半到江宁，道翁带他拜访凤凰山的侯石翁——七十四岁的天下第一才子，年逾七十而姬妾满堂，论诗专主性灵，人称"诗佛"。石翁一见便拉手大笑"你是个秃尾猢狲，怎么忽然有个小儿"，随即与道翁高谈经史，各自抚掌大笑。`,
      `石翁劝他弃官，道翁自言彩笔已还只想善刀而藏；石翁指出序中两句可议，道翁拜服称"一字之师"，随即回敬一箴，劝他把游戏之言另编外集。偏偏他看着琴仙念出"无逾我园，无折我树檀"，道翁便以"树深时见鹿"相讥；末了他索去琴仙的扇子，另换了自己的一柄。`,
      `琴仙到路上才知换了扇，取过一看竟题着一首用"云郎捧研"故事的诗，恼得几乎要撕；他记起乩上"莲花香绕女郎坟"之句，便到莫愁湖去。默祷未毕，莲花丛中荡出一只小艇，一个红衣垂髫女郎船头集着一群翠雀，说那是杜仙女墓上的鸟。`,
      `她引他到那开满蕙兰的小小坟墓前，笑他"我即是他"是句呆话，又拔簪掘坑替他种下桃李苹梨；归途逛秦淮河他被两岸妓女看杀，天黑上船，家人却迎上来说老爷跌了一交晕了过去。`,
    ],
    en: [
      `Qinxian weeps the whole way out of the capital; at Yangzhou the old man takes him by small boat to Pingshan Hall, pointing out the ruined garden where he once held a purification feast, while women in a passing boat throw fruit at the beautiful boy — and the guest-monk presses so close on the pretext of showing the views, and gets hold of his hand so often, that they leave on the excuse of coming rain.`,
      `A day and a half brings them to Jiangning and the garden of Hou Shiweng — seventy-four, called the first talent of the empire, a house full of concubines, known as the Buddha of Poetry for praising any pretty line. He takes both their hands, roars with laughter at the idea of so unlikely a son, and falls with Daoweng into a torrent of learning that ends with both men clapping their hands.`,
      `Hou urges him to give up office and is told the coloured brush has been given back and he wants only to sheathe his knife; Hou faults two lines of the garden preface and is bowed to as a teacher of a single word, and is advised in return to keep his lighter verse in a separate collection. Then he eyes the boy and quotes the Songs about not breaking another man's tree — a hint Daoweng caps with a line of his own — and ends by making off with the boy's fan.`,
      `Only on the road does Qinxian find the fans exchanged, and the poem on his own — with its allusion to a boy who held the inkstone — angers him almost to tearing it. Remembering the planchette's line about lotus fragrance round a maiden's grave, he goes to Mochou Lake; and before his silent prayer is done a skiff comes out of the lotus with a red-clad girl, kingfishers on her bow, who says the birds come from the Lady Du's grave.`,
      `She leads him to a small mound thick with orchids, laughs at his claim to be the person buried there, and plants his offering with a pin from her hair; and coming back through the Qinhuai he is nearly stared to death by the courtesans, only to be met at the boat with news that his father has fallen on the hill.`,
    ],
  },
  56: {
    zh: [
      `琴仙进舱时道翁半个身子已动不得；听说莫愁湖果有杜仙女墓也觉诧异，及见石翁题扇的诗登时动气，叫他撕得粉碎。次日大风走锚直打到燕子矶；这一跌已中了心，遂租下护国寺客房养病，谁知反添呕血旧疾，日渐沉重。`,
      `道翁执手说"我害了你了"，嘱他死后仍旧进京，还要照伍大夫的样沉在燕子矶下切勿殡葬；那几日寺中乌鸦枭鸟凄厉异常，刘喜又发现箱笼被卷逃一空，而道翁竟命取出一生诗文烧了，只留一稿一册。`,
      `他颤巍巍写下遗言，问"一抔之土何方，六尺之孤谁托"，托孤于度香；少顷香风拂拂，他更衣趺坐，题下"一世牢骚到白头，文章误我不封侯"掷笔而逝。后事全仗刘喜张罗，勉强凑得五十吊买棺；琴仙穿着麻衣在灵帏伴宿，一个来月容颜便憔悴了下去。`,
      `一夜他梦见旌旗仪从拥着一位珠璎蔽面的女神入寺，一个头角峥嵘的童子长揖不拜反得赐了满兜的笔；继而戴金幞头的义父进来，说他不过百日困苦，自有好人来带他回去。转眼又到燕子矶，梅子玉与一个扮戏时的自己并坐照镜，末了一只满臂鳞甲的蓝手把镜子夺去。`,
      `石翁闻丧落泪，一口应承缉贼诸事，亲到寺中痛哭；不料他收了泪进帏便挨身握手，层层劝他不必回湖北、不可进京，只该拜他作义爷或老师——琴仙洒脱了手站得远远的，次日又把试探的米炭银两原物璧还。`,
    ],
    en: [
      `Qinxian comes back to find half of Qu Daoweng's body dead; the news of a real grave at Mochou Lake astonishes the old man, and the poem on the fan enrages him so that the boy tears it to shreds. A gale drags the anchor next morning; the fall has struck at his heart, and the rooms he takes at the temple to recover in see the old spitting of blood return instead.`,
      `Taking his hand, the old man says he has ruined him, tells him to return to the capital afterwards and asks to be sunk in the river rather than buried; crows and owls fill the temple, Liu Xi finds the trunks stripped and the servants fled, and Daoweng has his life's writings burnt but for one manuscript and one album — leave them, and they will ruin somebody else.`,
      `With a trembling hand he writes his testament — where is his handful of earth to be, and to whom is his orphan entrusted — and commends the boy to Duxiang; then, as a fragrance moves through the room, he is washed and dressed, sits up cross-legged, writes four lines on a life of grievance and a talent that brought him no title, and dies. Liu Xi scrapes together fifty strings for a coffin, and within a month of sleeping in mourning by the bier the boy's beauty is wasted.`,
      `One night he dreams of a goddess borne into the temple with banners and music, and a proud boy who bows without kneeling and is given a hundred brushes; then his adoptive father comes in crowned and robed and tells him that a hundred days of hardship will end when a good man comes to take him home — and the scene shifts to the cliff, where Mei Ziyu sits with a painted double of Qinxian sharing a mirror, until a blue scaled hand reaches in and carries the mirror off.`,
      `Hou Shiweng weeps at the news, undertakes the plaint and the pursuit, and mourns so convincingly at the temple that the boy behind the curtain believes him — until he dries his eyes, comes inside, takes his hand, and argues that with Hubei closed and the capital corrupt he should become his adopted son or his pupil; and the rice and silver sent next day to test him come straight back.`,
    ],
  },
  57: {
    zh: [
      `笔锋转回京中：十月初旬袁绮香在怡园宴请六位夫人，宝香堂另是一番铺设；席前她提议仿竹林七贤作个桃园结义，序齿团拜，此后相见不许谦让。`,
      `琼华说今日原为游园，绮香却笑说逛园不过是个名目，况三寸金莲如何走得；于是弃山就水，主仆四十余人荡到吟秋榭。绮香说出她与丈夫新编的"秦灭六国"酒令，七国分掣，众人未战先各夸海口。`,
      `掣人物的笑话层出不穷：楚国得一个佞人、一个梦神、一个风流鬼，燕国"尚未出兵倒已先砍了两个脑袋"；及至出马，廉颇戴上假白须、平原君作交线之戏、信陵君的诗句罚遍满堂的金镯与凤钗。`,
      `全回最风雅的一段是浣香与绮香以词牌集句往复四五联，众人尊为盟主；此后燕、齐两国投壶哑令、掷骰答唐诗，末了许三姐扮"狗盗"输了要伏地作犬，她假意伏下却一把抱住爱珠两脚乱抓，满堂笑得堕钗翻酒。`,
      `韩国以骰子摆诗句、以棋谱决胜，青琴扮博浪椎竟一人打败六人；日暮移席清谈，琼华独斗成一首七律，绮香最爱那一联"任说朝朝依玉树，终应步步让金莲"，说是为闺阁吐气——"不然，这个园几成了那几个名旦的梨园了"。`,
    ],
    en: [
      `The scene returns to the capital, where in the tenth month Yuan Qixiang gathers six ladies at Yiyuan among the chrysanthemums — and before the wine begins proposes that they swear sisterhood, rank themselves by age, and never defer to one another again.`,
      `Qionghua reminds them they came to see the garden; Qixiang laughs that the garden was only the pretext and that such feet were never made for five li of rock — so they take to the water, and at the pavilion she produces the war-game she and her husband devised, with the seven kingdoms drawn by lot and everyone boasting before a blow is struck.`,
      `The drawing of personages is pure comedy — Chu gets a sycophant, a dream-goddess and a poet, and Yan has lost two heads before the army marches — and then the fighting begins, with a false white beard for Lian Po, cat's cradle for Lord Pingyuan, and lines of verse that fine every gold bracelet and phoenix pin in the room.`,
      `The evening's most elegant turn is a duel of couplets built entirely from the titles of ci tunes, which makes its two authors league-leaders; then come pitch-pot, silent games and Tang couplets answered with dice — and finally Third Sister, condemned as the dog-thief to crawl and bark, feigns obedience, seizes a maid by both ankles, and scatters the company in laughter that drops hairpins and spills wine.`,
      `Han sets lines of verse to be pictured with dice and settles matters over a chess manual, and one maid with the Bolang hammer beats all six of Qin single-handed; then, over tea, Qionghua alone completes a regulated verse whose couplet about jade trees yielding to golden lotuses Qixiang loves best — it vents the grievance of the inner chambers, she says, or this garden would have become those performers' theatre.`,
    ],
  },
  58: {
    zh: [
      `作者笔锋一转，专写几个下作人做几件下作事：奚十一选了广西极苦的知州，家事一败涂地又欠潘其观数千两，告贷无门；末了立下万两欠票才借得盘费，当夜纵药狂欢，两人皆伤。`,
      `次日他往逛九香楼：三块金字招牌，九个名旦均已出班，正楼额是田春航的手笔，掌事的竟是乌大傻。及至巴英官把两盆金橘摘得干干净净与人厮打，奚十一出来望见芙蓉花外的苏蕙芳、王兰保便涎水先流、出言无状。`,
      `他闯过桥去掀翻残席，被王兰保一扠踉跄扑向桌角，那颗镶嵌狗肾正压在花梨桌角上；数日后又醉后纵欲，顶篷豁喇塌下，主仆二人一齐昏死——阳善修断言只能救命不能再接，末了十剂寒凉药断了他的性。`,
      `白菊花守起活寡而外面装出从良的样子，巴英官被撵出后不到一年众毒齐发烂死；至于潘其观的鼻子，是被石氏一掌打去——银指甲折断刮落鼻尖。两人竟是同病相怜，只便宜了得月一人。`,
    ],
    en: [
      `The brush turns deliberately downward to a few base people doing base things: Xi Shiyi, assigned a wretched Guangxi post with his family's fortune gone and thousands owing to Pan Qiguan, can borrow nowhere — and buys his travelling money at last with a note for ten thousand, then injures himself and his concubine in a night of drugged excess.`,
      `Next day he visits the Nine Fragrance Pavilion, with its three gilt signboards, its nine performers all out of their troupes and its tablet in Tian Chunhang's hand — and when his boy strips two pots of kumquat bare and starts a brawl, Xi Shiyi comes out, sees Su Huifang and Wang Lanbao beyond the hibiscus, and begins to drool and to talk filth.`,
      `He charges across the bridge and overturns the table, and is jabbed by Wang Lanbao into the corner of a rosewood table where the grafted flesh takes the whole weight; days later, drunk and drugged, the rotten ceiling comes down on him and his boy, and the surgeon says he can save the life but not restore what is lost — ten doses of cooling medicine end his desire for good.`,
      `White Chrysanthemum keeps a living widowhood while playing the reformed woman in public, and the boy driven from the house rots to death within the year; as for Pan Qiguan's nose, his wife's broken silver nail-guard sheared the tip away — two fellow sufferers to the last, and only Deyue, who crippled them both, walks away whole.`,
    ],
  },
  59: {
    zh: [
      `琴仙守灵百日，衣物典卖殆尽，初冬尚无棉衣；刘喜劝他投奔侯石翁，他只答"我就饿死也不去的"。石翁带二十金来，先赞其画，继而层层劝诱，末露本相；琴仙谢而不受，说冻死饿死也死得光明，说罢不顾而走。`,
      `石翁羞恼而去；与此同时梅士燮一月三迁奉旨来京，路过南京拜制台，才知窃犯已被拿获、失物须交还嗣子。他备了祭桌亲到护国寺，见琴仙便点头叹"道翁可为有子"，许他领回失物，又把葬事一概揽下。`,
      `当夜他梦见道翁执莲花而来，说"此花出于淤泥而临清波，岂得以淤泥为辱"，醒后已明白这义子的出身，转念只要人好总是一样；次日同游莫愁湖，严冬而花鸟如春，他遂决意建祠立碑，江宁绅士送葬者数百人。`,
      `屈公祠后来扩为南京一处名胜；二十八日开船北上，梅士燮把琴仙当作子玉一般，绝不查问他的出身。京中子玉腊月十五接到那封"哀启"，痛哭奔走，众人在九香楼设位而哭；二十二日出城三十里迎候，灯笼引进一个美少年，他始而大骇继而乐得笑出声来。`,
      `三人在那边屋里竟成三个哑子，夜深同枕和衣而卧，把两年的悲喜细细说尽；至于身世，颜夫人只说"算他转了个劫罢"，梅士燮亦道"我已猜着了几分"，命阖府称"屈大爷"，又叫子玉尽心教他。`,
    ],
    en: [
      `A hundred days of mourning have pawned everything he owns and left him without a padded coat; urged to go to Hou Shiweng, he answers that he would sooner starve. The old man comes with gold, praises his painting, argues by degrees and at last shows his hand — and is told that to freeze or starve is at least to die in the open light, before the boy walks away.`,
      `Hou departs in a rage; and meanwhile Mei Shixie, promoted three times in a month and recalled to the capital, learns at Nanjing that the thieves are taken and the stolen goods must go to the dead man's heir — so he comes to the temple with offerings, looks at Qinyan, nods, says that Daoweng may be called fortunate in his son, and takes the whole burial upon himself.`,
      `That night he dreams of Daoweng holding a lotus and saying that a flower risen out of mud is not disgraced by the mud; waking, he understands what his guest once was and decides it makes no difference if the person is good. Next day, at Mochou Lake in deep winter, flowers and birds behave as in spring, and he resolves on a shrine — to which hundreds of the Nanjing gentry come at the burial.`,
      `The shrine grows into one of the sights of Nanjing; on the twenty-eighth they sail north, Mei Shixie treating Qinxian as another son and never asking about his past. In the capital Ziyu opens the mourning letter on the fifteenth and runs weeping from house to house until the whole company mourns at the Nine Fragrance Pavilion — and thirty li outside the city a lantern leads in a beautiful youth, and his shock turns into open laughter.`,
      `In the next room the three sit like mutes, and late that night Ziyu and Qinxian lie on one pillow telling over two years of grief and joy; as for his origins, Lady Yan says he may be counted as having passed through a rebirth and Mei Shixie that he had already half guessed — and the household is ordered to call him Master Qu.`,
    ],
  },
  60: {
    zh: [
      `元宵前夕徐子云大会群贤，琴仙已出旦党而入士党，反谦谦自守；席后萧次贤说起他从前的梦境，金吉甫便笑说九香楼百花全有而只供一个花神牌位，不如借这九人作个九香花史，又献策以屈道翁与杜仙女凑成十二位。`,
      `众人议定画法体例，拈阄分题竟处处暗合前缘——子玉拈得杜仙女与琴仙；次贤画了十日，经吉甫改定，画一幅刻一幅。三十日十人先自祭花神，逐方细看那些诗赞，蕙芳一句"我们这一关倒可以算跳出了"最见分量。`,
      `饭后袁宝珠提议报答：他们既刻我们的像作花神，我们便刻他们的像称作文星，仿司空图《诗品》各作四言赞语；十一篇次第展读，自"群仙领袖"以下各标一品，众名士谦让称谬赞，读毕却说"可谓木桃之投，而得琼瑶之报矣"。`,
      `三月初三供设长生禄位，高品朗读那篇公撰的祝文，众花史齐拜，随即把舞衫歌扇、翠羽金钿在太湖石畔烧化；香风忽起，灰烬映着红日如花蝶飞舞，到半天化作万点金光一闪不见。全书至此作结——"我自有情君莫问，此中得失寸心知"。`,
    ],
    en: [
      `Xu Ziyun assembles the whole company for the Lantern Festival, where Qinxian, now of the scholars' party, is modest where he was once proud; and afterwards Xiao Cixian tells his dreams to Jin Jifu, who laughs that a garden holding every flower keeps only one spirit-tablet in a corner — and proposes making the nine of them its flower-historians, with Qu Daoweng and the Lady Du to complete the twelve.`,
      `The form is settled and the lots drawn, and the draw itself seems to know their histories — Ziyu receives both the Lady Du and Qinxian; Cixian paints for ten days under Jin Jifu's correction, each sheet cut as it is finished, and on the thirtieth the ten make their own offering and read the inscriptions one by one, Huifang remarking that this at least is a barrier they may be said to have got over.`,
      `After the meal Yuan Baozhu proposes the return: since their friends have carved them as flower gods, they will carve their friends as stars of letters, each with a four-word encomium in the manner of Sikong Tu's *Poetic Categories* — and the eleven are read out from the Leader of the Immortals down, the scholars protesting at the flattery and admitting at the end that a gift of peaches has been repaid with jade.`,
      `On the third of the third month the tablets are enshrined, Gao Pin reads aloud the prayer they wrote together, the ten bow, and the dancing gowns, singing fans and gold ornaments are burnt beside the lake-rock; a scented wind lifts the ashes into the sunlight like flowers and butterflies, and at mid-heaven they turn to ten thousand points of gold and vanish — and there the book ends: I have my own feelings, and you need not ask.`,
    ],
  },
};

export function getGist(
  chapterId: number,
  lang: "en" | "zh",
  index: number,
): string | undefined {
  const entry = summaryGists[chapterId];
  if (!entry) return undefined;
  const gist = entry[lang]?.[index];
  return gist && gist.trim() ? gist.trim() : undefined;
}
