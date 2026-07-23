import { Character, Relationship } from './types';

const rawData = `char-0	梅子玉 Méi Zǐyù	庾香	17	Jinling	scholar	ch.1	Male protagonist; scholar-gentry; falls for Qinyan; later marries Wang Qionghua; promoted examiner (ch.15); builds Qu shrine (ch.59)	男主角；书生士绅；钟情于琴言；后娶王琼华；第15回升任主考官；第59回为屈道翁修建祠堂。
char-1	杜琴言 Dù Qínyán	琴官 / 玉侬 / 琴仙	15	Jiangsu	performer	ch.1	Central romantic figure; orphaned; renamed by Xu Ziyun (ch.5); redeemed in ch.43; reunites with Ziyu	核心浪漫人物；孤儿；第5回由徐子云改名；第43回赎身；最终与子玉重逢。
char-2	颜仲清 Yán Zhòngqīng	剑潭	23	Jinling	scholar	ch.1	A chivalrous scholar and close friend of Ziyu; nephew of Lady Yan. Often mediates between friends and participates in major literary gatherings.	侠义书生，子玉挚友；颜夫人之侄。常在友人间周旋，活跃于各大文会雅集。
char-3	史南湘 Shǐ Nánxiāng	竹君	24	Hanyang	scholar	ch.1	Top graduate who compiled the Flower Register; witty and romantic. Deeply attached to Lu Sulan; later achieves Jinshi rank (ch. 44).	乡试榜首，编纂《花选》；机智风流。痴情于陆素兰，后于第44回高中进士。
char-4	王恂 Wáng Xún	庸庵	22	Jinling	scholar	ch.1	Son of Wang Wenhui and cousin to Ziyu; a key figure in social circles. Fond of opera and often involved in arranging local social affairs.	王文辉之子，子玉表兄；名士圈核心人物。平生好优伶，常参与筹办京中社交雅事。
char-5	魏聘才 Wèi Pìncái	—	~20	Jiangning	villain	ch.2	A glib and opportunistic scholar; initially a guest at the Mei house. Known for scheming and gossip, he endures public humiliations before marrying a courtesan (ch. 50).	伶牙俐齿的投机文人；初寄居梅府。为人阴险好造谣，历经多次丑闻折辱，最终在第50回娶妓为妻。
char-6	李元茂 Lǐ Yuánmào	—	~20	—	scholar	ch.2	The obtuse son of Ziyu's tutor; serves as comic relief. Infamous for being robbed in a disreputable area (ch. 23), he eventually marries into the Sun family as a matrilocal husband.	塾师李性全之子；书中喜剧人物。因在东园遭抢沦为笑谈（第23回），后于第39回招赘入孙家。
char-7	徐子云 Xú Zǐyún	度香	25	"Zhejiang, Shanyin"	scholar	ch.4	The generous and refined owner of Yiyuan Garden; a key patron of the arts. He treats performers with respect and redeems Qinyan in ch. 43.	怡园主人，慷慨儒雅的名士领袖。对伶人以礼相待，第43回斥巨资为琴言赎身。
char-8	萧次贤 Xiāo Cìxián	静宜	32	"Hunan, Xiangtan"	scholar	ch.5	Xu Ziyun's closest friend; polymath; designed Yiyuan. A detached and brilliant scholar who offers artistic guidance to many.	徐子云的挚友，博学多才，亲手设计了怡园。为人淡泊名利，常为众人提供艺术指引。
char-9	刘文泽 Liú Wénzé	前舟	~24	"Henan, Zhengyang"	scholar	ch.6	Vice-minister's son; exceptionally generous and approachable. A close friend of Xu Ziyun who hosts major literary banquets.	刘侍郎之子；慷慨大方，平易近人。徐子云的好友，常在自家宅邸主持重要文会。
char-10	高品 Gāo Pǐn	卓然	~25	Suzhou	scholar	ch.2	Tribute student (拔贡); wickedly funny; coins the Sun brothers' nicknames; lives at Hongji Temple	拔贡；极其幽默；为孙氏兄弟起绰号；住在鸿济寺。
char-11	张仲雨 Zhāng Zhòngyǔ	—	~22	Yangzhou	scholar	ch.6	Nephew of Grand Secretary Wu; versatile; goes by '二老爷'; frequents Yiyuan (ch.8)	吴阁学之侄；多才多艺；人称“二老爷”；常出入怡园。
char-12	沈伯才 Shěn Bócái	—	~30	—	scholar	ch.6	Son of Director Shen; recently selected county magistrate; capable	沈司业之子；新任知县；精明强干。
char-13	巴霖 Bā Lín	—	~20	Tianjin	scholar	ch.6	Son of garrison commander Ba; handsome; close to Liu Wenze; dislikes Sun brothers	巴天宠之子；英俊；与刘文泽亲近；讨厌孙氏兄弟。
char-14	冯子佩 Féng Zǐpèi	—	~18	Beijing	scholar	ch.6	Son of former Jiangsu magistrate; very handsome; arrives late at banquets	前江苏知县之子；极其俊美；宴会常迟到。
char-15	田春航 Tián Chūnháng	湘帆	23	Jinling	scholar	ch.4	A passionate Nanjing scholar who finds a soulmate in Su Huifang (ch. 13); eventually achieves the rank of top laureate (Zhuangyuan) in chapter 49.	金陵才子，第13回与苏蕙芳结为知己，后高中状元（第49回）。
char-17	金吉甫 Jīn Jífǔ	金栗	—	Jinling	scholar	ch.38	From a great Nanjing family; real name Jin Su (金栗), art name Jifu; leading literary scholar; frames the novel's conclusion in ch.60	南京巨族；本名金栗，号吉甫；文坛名士；第60回为小说作结。
char-19	屈少君 Qū Shàojūn	—	—	—	scholar	ch.59	Adopted son of Qu Daoweng (Qinxian); returns to capital in ch.59; helped by Ziyu	屈道翁义子（琴仙）；第59回回京；得子玉相助。
char-20	李性全 Lǐ Xìngquán	—	—	Zhejiang	scholar	ch.1	Ziyu's strict Confucian tutor; Li Yuanmao's father; stays with Mei family	子玉严厉的儒家老师；李元茂之父；住在梅家。
char-21	孙嗣徽 Sūn Sìhuī	虫蛀千字文	26	Jinling	scholar	ch.2	Elder Sun son; pedantic; 'Worm-eaten Primer' nickname; red nose	孙家长子；迂腐；绰号”虫蛀千字文”；红鼻子。
char-22	孙嗣元 Sūn Sìyuán	迭韵双声谱	~24	Jinling	scholar	ch.2	Younger Sun son; severe stammer; 'Unfinished Three-Character Classic' nickname	孙家次子；严重结巴；绰号”迭韵双声谱”。
char-23	袁宝珠 Yuán Bǎozhū	瑶卿	16	Suzhou	performer	ch.1	Top-ranked performer, celebrated for painting and poetry. A close confidant of Xu Ziyun and a loyal friend who supports Qinyan during hardships.	花榜状元，以书画诗词见长。是徐子云的知音，也是琴言最可靠的盟友。
char-24	苏蕙芳 Sū Huìfāng	媚香	17	Suzhou	performer	ch.1	High-principled performer of official descent; soulmate to Tian Chunhang. Known for her wit and integrity, helping secure Qinyan's freedom (ch. 43).	花榜榜眼，官宦之后。与田春航情投意合，第43回以机智助琴言赎身。
char-25	陆素兰 Lù Sùlán	香畹	16	Suzhou	performer	ch.1	A talented performer and calligrapher, loved by Shi Nanxiang. Known for her righteousness, she actively assists in the Ziyu-Qinyan reunion (ch. 22).	花榜探花，精通书法。史南湘之知己，第22回苦心促成子玉与琴言重逢。
char-26	金漱芳 Jīn Shùfāng	瘦香	15	Suzhou	performer	ch.1	#4; plays flute and chess; Lianzhu troupe	花榜第四；擅长吹笛下棋；联珠班。
char-27	李玉林 Lǐ Yùlín	佩仙	15	Yangzhou	performer	ch.1	#5; musician; famous for 《折柳阳关》; Lianzhu troupe	花榜第五；乐师；以《折柳阳关》闻名；联珠班。
char-28	王兰保 Wáng Lánbǎo	静芳	17	Yangzhou	performer	ch.1	#6; martial arts; refuses powerful patrons; elder brother of Guibao; Lianjin troupe	花榜第六；擅长武术；拒绝权贵；桂保之兄；联锦班。
char-29	王桂保 Wáng Guìbǎo	蕊香	15	Yangzhou	performer	ch.1	A charming and witty performer, younger brother of Lanbao. A steady presence in social and literary scenes throughout the novel.	兰保之弟，排行花榜第七，为人机智讨喜。是文人雅集中的常客，贯穿全书始终。
char-30	林春喜 Lín Chūnxǐ	小梅	14	Suzhou	performer	ch.1	#8; entered troupe at 12; plays male and female roles; rewrites opera scripts (ch.50)	花榜第八；12岁入班；兼演男女角；第50回改写剧本。
char-31	袁琪官 Yuán Qíguān	琪官	14	—	performer	ch.2	Companion to Qinyan on the canal journey; vivid beauty; joins Lianjin troupe	琴言进京途中的同伴；容貌出众；加入联锦班。
char-32	蓉官 Róngguān	Rong Guan	~15	—	performer	ch.3	Friend of Fu Lun; witty; comic scenes chs.2–3; knows about Xi Shiyi	富伦之友；机智；第2-3回有喜剧场面；了解奚十一。
char-33	春兰 Chūnlán	—	~15	—	performer	ch.3	"Associated with Xi Shiyi; smashes crockery in the restaurant scene, ch.3"	与奚十一有关；第3回在酒楼摔碎瓷器。
char-34	小福 Xiǎofú	—	~15	—	performer	ch.3	Quanfu troupe; rumoured Fu Lun spent 3000 cash on his graduation ceremony	全福班；传闻富伦为其出师礼花费三千钱。
char-35	玉美 Yùměi	—	—	—	performer	ch.4	"Jianchun troupe; seen with Tian Chunhang at the tavern scene, ch.4"	建春班；第4回出现在酒楼场面。
char-36	四喜 Sìxǐ	Sixi	—	—	performer	ch.4	Jianchun troupe; seen in ch.4 tavern scene	建春班；第4回出现在酒楼场面。
char-37	全福 Quánfú	—	—	—	performer	ch.4	Jianchun troupe; seen in ch.4 tavern scene	建春班；第4回出现在酒楼场面。
char-38	保珠 Bǎozhū	—	~15	—	performer	ch.1	"Dark-complexioned performer living next to Guibao; his name mirrors Yuan Baozhu, confusing Ziyu (chs.1, 6); later attaches to Wei Pincai's circle (chs.8–9, 21)"	住在桂保间壁的黑相公；名字与袁宝珠相似，令子玉误会（第1、6回）；后混迹魏聘才一伙（第8–9、21回）。
char-39	珊枝 Shānzhī	—	—	—	performer	ch.36	Scandalous; rebuked by the whole group in ch.36; morally condemned	名声不佳；第36回遭众人斥责；受道德谴责。
char-40	袁绮香 Yuán Qǐxiāng	—	23	—	female	ch.5	Xu Ziyun's wife, née Yuan; daughter of the Yunnan governor; graceful and virtuous; leads the ladies' drinking games in ch.57	徐子云之妻，袁氏绮香；云南巡抚之女；婉娴贤淑；第57回主持闺阁酒令。
char-42	林珊枝 Lín Shānzhī	—	—	—	performer	ch.5	"Bought by Hua Guangsu for 8,000 taels; lives in Hua mansion as personal companion"	被华光宿以八千两买下；住在华府作为私人伴侣。
char-43	谭八 Tán Bā	—	—	—	performer	ch.2	Comic lead (京丑) of Lianjin troupe; his mannerisms imitated by Sun Lianggong at the banquet	联锦班丑角；宴会上被孙亮功模仿。
char-44	小顺儿 Xiǎo Shùn'ér	—	—	—	performer	ch.5	十不闲 drum performer; brought by Fu Lun; rejected by Hua Guangsu with contempt	“十不闲”鼓手；富伦带来；遭华光宿蔑视拒绝。
char-45	二喜 Èr Xǐ	Erxi	—	—	performer	ch.8	Male performer (dan) of the Lianjin troupe; attaches himself to Li Yuanmao at the theatre; recurs in Wei Pincai's circle (chs.8–21)	联锦班旦角；在剧场缠住李元茂；常随魏聘才一伙出入（第8–21回）。
char-47	梅士燮 Méi Shìxiè	铁庵	46	Jinling	official	ch.1	Hanlin reader; Ziyu's father; stern Confucian; promoted to vice-minister later; appointed provincial examiner (ch.15)	翰林侍读；子玉之父；严厉的儒者；后升任侍郎；第15回任主考官。
char-48	王文辉 Wáng Wénhuī	—	~55	Jinling	official	ch.1	3rd-rank Tongzheng official; Wang Xun's father; father-in-law of Yan Zhongqing; same hometown as Mei Shixie	三品通政使；王恂之父；颜仲清之岳父；与梅士燮同乡。
char-49	孙亮功 Sūn Liànggōng	—	~50	Jinling	official	ch.2	An official in the Ministry of Works whose household is a source of domestic drama. Known for his colorful and comic personality at banquets.	工部官员，孙氏兄弟之父。其家宅内斗频发，常在宴席上闹出笑话。
char-50	杨方猷 Yáng Fāngyóu	—	—	—	official	ch.2	Ministry of War deputy director; guest at Wang Wenhui's banquet	兵部员外郎；王文辉宴会宾客。
char-51	周锡爵 Zhōu Xíjué	—	—	—	official	ch.2	Guanglu Temple junior director; guest at Wang Wenhui's banquet	光禄寺少卿；王文辉宴会宾客。
char-52	陆宗沅 Lù Zōngyuán	—	—	—	official	ch.2	Censor; gets wine sprayed in his face by Sun Lianggong; cousin of the two Madam Lu	御史；被孙亮功喷了一脸酒；两位陆夫人的堂兄弟。
char-53	富伦 Fú Lún	富三爷 / Fu San / Fu the Third	~30	Jiangning	official	ch.3	A warm-hearted and wealthy official who serves as a generous patron to performers. A close friend of many scholars who often mediates social conflicts.	内务府官员，为人热诚。他是名伶们的重要赞助人，常在京城社交圈中排忧解难。
char-54	贵芬 Guì Fēn	贵大爷 / Master Gui	~30	—	official	ch.3	7th-rank ministry clerk; prudent and steady; Fu Lun's close friend	七品部吏；谨慎稳重；富伦好友。
char-55	华光宿 Huá Guāngsù	华公子 / 星北	21	—	villain	ch.5	A high-ranking noble and owner of Jinchun Garden. While dissolute, he possesses genuine taste, but his possessive acquisition of Qinyan (ch. 28) makes him a primary antagonist.	世袭侯爵，锦春园主。虽放荡不羁但颇具文采，因强纳琴言入府（第28回）而成为核心反派。
char-56	曹长庆 Cáo Chángqìng	—	—	—	performer	ch.3	Troupe master who bought Qinyan as his apprentice; relies on him as the household's breadwinner; dies suddenly in ch.36	买琴言为徒的班主师傅；倚琴言为摇钱树；第36回猝然去世。
char-57	史曾望 Shǐ Zēngwàng	—	—	—	official	ch.1	Shi Nanxiang's father; Censor (吏科给事中)	史南湘之父；吏科给事中。
char-58	袁浩 Yuán Hào	—	—	—	official	ch.5	Yunnan governor; Xu Ziyun's father-in-law	云南巡抚；徐子云岳父。
char-59	徐震 Xú Zhèn	晓山 / Xiaoshan	—	—	official	ch.5	Grand Secretary (art name Xiaoshan); Xu Ziyun's father; governor-general of the two Guangs; named only as 名震 in ch.5	大学士，号晓山；徐子云之父；总督两广；第5回仅以“名震”提及。
char-60	徐子容 Xú Zǐróng	—	—	—	official	ch.5	Xu Ziyun's elder brother; Huaiyang circuit intendant	徐子云之兄；淮扬道。
char-61	刘侍郎 Liú Shìláng	Minister Liu / Vice-Minister Liu	—	—	official	ch.6	Vice-minister; Liu Wenze's father; attends the Spring Festival banquet	刘侍郎；刘文泽之父；出席春节宴会。
char-62	吴阁学 Wú Gé Xué	Academician Wu	—	—	official	ch.6	Grand Secretary; Zhang Zhongyu's maternal uncle	大学士；张仲雨舅父。
char-63	沈司业 Shěn Sīyè	Director Shen	—	—	official	ch.6	National Academy director; Shen Bocai's father; old-fashioned Confucian; praises Ziyu	国子监司业；沈伯才之父；守旧儒者；赞赏子玉。
char-64	巴天宠 Bā Tiānchǒng	—	~40	Tianjin	official	ch.6	Garrison commander; father of Ba Lin and Ba Laifeng; misled by a matchmaker	总兵；巴霖与巴来风之父；被媒人误导。
char-65	陆宗淮 Lù Zōnghuái	—	—	Sichuan	official	ch.6	Judicial commissioner of Sichuan; elder brother of the two Madam Lu	四川按察使；两位陆夫人之兄。
char-66	田状元 Tián Zhuàngyuán	—	—	—	official	ch.49	Top imperial exam graduate; proposes marriage in ch.49	状元；第49回提亲。
char-67	侯太史 Hóu Tàishǐ	—	—	—	official	ch.56	Hanlin historian; feigns charity toward orphans; hypocritical antagonist	翰林太史；假装慈善；虚伪的反派。
char-68	詹事府正詹事庄 Zhuāng	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	詹事府正詹事；春节宴会宾客。
char-69	左庶子郑 Zhèng	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	左庶子；春节宴会宾客。
char-70	国子监司业张 Zhāng	—	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	国子监司业；春节宴会宾客。
char-71	掌山西道陆 Director Lu	Director of the Shanxi Circuit / Censor Lu	—	—	official	ch.6	Listed among Spring Festival banquet guests in ch.6	掌山西道；春节宴会宾客。
char-72	奚十一 Xī Shíyī	奚正绅 / Xi Eleven / Xi the Eleventh / Lord Xi / Master Xi	~30	Guangdong	villain	ch.3	A violent and wealthy Cantonese merchant known as the 'Smoke-Blackened Grand Duke.' He repeatedly harasses Qinyan, ultimately suffering grotesque karmic retribution.	绰号“烟熏太岁”的广东富商。屡次纠缠迫害琴言，最终在第40及58回遭到惨烈的报应。
char-73	潘其观 Pān Qíguān	潘三 / 潘三爷 / Pan San / Pan the Third / Pan Laosan	—	—	villain	ch.13	Known as Pan San; keeper of the Qisheng silver bureau and crony of Xi Shiyi. Harasses Su Huifang (chs.13–21) and endures degrading karmic punishments (chs.40, 47, 58).	人称潘三，起盛银号东家，奚十一的帮凶。第13–21回纠缠苏蕙芳，后段（第40、47、58回）屡遭毒打恶疾报应。
char-74	老王 Lǎo Wáng	—	~60	—	villain	ch.3	Hunchbacked jade-vendor; tries to extort Pincai at the theatre; expelled by Xi Shiyi's men	驼背玉商；在剧场敲诈聘才；被奚十一的人赶走。
char-75	唐和尚 Táng Héshang	Monk Tang	~40	—	villain	ch.8	Wine-and-meat Buddhist monk (酒肉和尚); purple-faced; fur-robed; associate of Xi Shiyi and Pan Qiguan; enables harassment of Qinyan and runs gambling and opium dens at Hongji Temple.	酒肉和尚；紫脸皮袄；与奚十一、潘其观等勾结；在宏济寺设赌开烟，助虐琴言，为书中反派之一。
char-76	潘老三 Pān Lǎosān	—	—	—	minor	ch.8	Silver-exchange merchant of the Qisheng bureau; dines with Zhang Zhongyu in ch.8	起盛银号商人；第8回与张仲雨共餐。
char-78	华夫人 Huá Fūrén	Lady Hua / Madam Hua	—	—	minor	ch.5	"Hua Guangsu's beautiful wife; née Su, daughter of Jingbian Hou (靖边侯); described as 'the most beautiful woman in the empire'; ten pearl-maids"	华光宿之妻；靖边侯之女；号称“天下第一美人”。
char-79	青姨奶奶 Qīng Yínǎinai	—	—	—	minor	ch.3	One of Fu Lun's two quarrelling concubines; fights with Bai Yinainai; mentioned by Rong Guan	富伦的姨太太；与白姨奶奶争吵。
char-80	白姨奶奶 Bái Yínǎinai	—	—	—	minor	ch.3	Fu Lun's other quarrelling concubine; fights with Qing Yinainai; mentioned by Rong Guan	富伦的另一位姨太太；与青姨奶奶争吵。
char-81	阿呆 Ā Dāi	—	—	—	minor	ch.23	Simple-minded victim who is cruelly harmed by Xi Shiyi's men in ch.23	愚笨的受害者；第23回遭奚十一手下残害。
char-85	王大夫 Wáng Dàfū	Doctor Wang	—	—	minor	ch.4	Doctor who treats Sun Lianggong when the Sun household couple have a fight; mentioned by Sihui in ch.4	医生；在孙亮功夫妇吵架后为其诊治。
char-86	颜夫人 Yán Fūrén	Lady Yan / Madam Yan	44	Jinling	female	ch.1	Wife of Mei Shixie; moral guardian of the novel; arranges Ziyu's betrothal to Wang Qionghua	梅士燮之妻；小说中的道德守护者；安排子玉与王琼华的婚事。
char-87	陆氏夫人（王家） Lù Shì Fūrén	陆夫人 / 陆氏 / 陆氏夫人 / Madam Lu / Wang family's Madam Lu / The Wang Madam Lu	40	—	female	ch.1	Wang Wenhui's second wife; stepmother to Wang Xun; sister of Sun family's Madam Lu	王文辉继室；王恂继母；孙家陆夫人之妹。
char-88	孙氏 Sūn Shì	Madam Sun	—	—	female	ch.1	Wang Xun's wife; daughter of Sun Lianggong	王恂之妻；孙亮功之女。
char-89	蓉华 Rónghuá	—	—	—	female	ch.1	Yan Zhongqing's wife; Wang Wenhui's daughter; sister of Wang Qionghua	颜仲清之妻；王文辉之女；王琼华之姐。
char-90	王琼华 Wáng Qiónghúa	—	16	—	female	ch.1	Wang Wenhui's second daughter; shy; scratches Ziyu's poem; eventually betrothed and married to Ziyu	王文辉次女；害羞；涂抹子玉的诗；最终嫁给子玉。
char-91	袁夫人 Yuán Fūrén	Mrs. Yuan / Mrs Yuan / Madam Yuan	23	—	female	ch.5	Xu Ziyun's wife; née Yuan; daughter of Yunnan governor; beautiful and virtuous	徐子云之妻；云南巡抚之女；美丽贤德。
char-92	郑氏 Zhèng Shì	—	—	—	female	ch.1	Yan Zhuang's wife; fasted to death after his death; honoured for chastity; Yan Zhongqing's mother	颜庄之妻；绝食殉夫；贞节受表彰；颜仲清之母。
char-94	许三姐 Xǔ Sānjiě	Third Sister / Sanjie	—	—	female	ch.40	Spirited elder sister of the Xu brothers; masterminds the revenge on Pan San (ch.40); enters service and recognizes her lost brother Zhou Xiaosan (ch.49)	许家三姐，泼辣有谋；第40回设计惩治潘三；第49回入府帮佣，意外与失散之弟周小三相认。
char-95	玉天仙 Yù Tiānxiān	—	27	—	female	ch.18	Courtesan married by Wei Pincai in ch.50 after he helps revise opera texts	妓女；魏聘才改写剧本后娶其为妻。
char-96	陆氏夫人（孙家） Lù Shì Fūrén	陆夫人 / 陆氏 / 陆氏夫人 / Madam Lu / Sun family's Madam Lu / The Sun Madam Lu	39	—	female	ch.6	Sun Lianggong's second wife; jealous and domineering; sister of Wang family's Madam Lu	孙亮功继室；嫉妒霸道；王家陆夫人之姐。
char-97	沈芸姑 Shěn Yúngū	—	—	—	female	ch.6	Sun Sihui's wife; née Shen; intelligent but miserable in marriage	孙嗣徽之妻；聪明但婚姻不幸。
char-98	巴来风 Bā Láifēng	—	~17	—	female	ch.6	Sun Siyuan's wife; née Ba; beautiful and fierce; physically overpowers husband on wedding night	孙嗣元之妻；美丽凶悍；新婚之夜制服丈夫。
char-99	孙大姑娘	—	~29	—	female	ch.6	Sun Lianggong's eldest daughter; prematurely white-haired and long unmarriageable; finally wed to Li Yuanmao with dyed hair in ch.39	孙亮功长女；少白头，久未字人；第39回染发假髻嫁与李元茂。
char-100	佩秋 Pèiqiū	—	~18	—	female	ch.6	Wang Xun's wife; née Sun; daughter of Sun Lianggong's second wife; gentle and beautiful	王恂之妻；孙亮功继室之女；温柔美丽。
char-101	石氏 Shí Shì	—	28	—	female	ch.58	Pan Qiguan's wife, née Shi; handsome and wayward; central to the scandalous turmoil of ch.58	潘其观之妻石氏，年二十八，颇有姿色而情性风骚；第58回淫乱风波的中心人物。
char-102	云儿 Yún'ér	—	~12	—	servant	ch.1	Ziyu's personal page; rides on horseback; runs errands and carries messages throughout	子玉的小厮；骑马；负责跑腿传信。
char-103	俊儿 Jùn'ér	—	~12	—	servant	ch.1	Ziyu's second young page; carries lanterns; also rides on horseback alongside Yun'er	子玉的第二个小厮；打灯笼；也骑马。
char-104	许顺 Xǔ Shùn	—	—	—	servant	ch.2	Mei household steward and accounts manager; came with Lady Yan from her natal home	梅府管家；随颜夫人从娘家来。
char-105	许顺妻 Xǔ Shùn qī	许顺夫妇	—	—	servant	ch.3	Xu Shun's wife; works alongside him in household management	许顺之妻；协助管理家务。
char-106	梅进 Méi Jìn	—	—	—	servant	ch.2	Mei household gate attendant; called in to receive and seat guests	梅府门房；负责接待客人。
char-107	虎儿 Hǔ'ér	—	—	—	servant	ch.8	Household page in the Mei residence; brings messages between rooms	梅府小厮；负责传话。
char-108	书僮(×2) Study Boys (×2)	—	—	—	servant	ch.4	Two unnamed study boys; wait outside the study; serve tea and pour water.	书童；在书房外候着；端茶倒水。
char-109	仆妇（门上）	仆妇	—	—	servant	ch.2	Doorwoman who brings calling cards from Wei Pincai and Li Yuanmao in to Mei Shixie	门上仆妇；递送名帖。
char-110	家人媳妇（衣裳）	家人媳妇	—	—	servant	ch.1	Household woman who fetches Ziyu's fur coat at Lady Yan's instruction	家里的媳妇；负责取衣物。
char-111	小丫鬟（子玉书房）	小丫鬟	—	—	servant	ch.7	Maidservant in Ziyu's study; reports that Wang Qionghua scratched out two characters from Ziyu's poem; relays betrothal gossip from Xue'er	子玉书房的小丫鬟；报告王琼华涂诗；传闲话。
char-112	四儿 Sì'ér	—	—	—	servant	ch.2	Wei Pincai's personal page-boy; carries money; sits on carriage edge; receives tips from Fu Lun	魏聘才的小厮；管钱；坐车沿；收小费。
char-113	健儿 Jiàn'ér	—	—	—	servant	ch.4	Yan Zhongqing's running-boy messenger; carries letters between the Yan and Mei households	颜仲清的跑腿；在颜梅两家间传信。
char-114	雪儿 Xuě'ér	—	—	—	servant	ch.7	Wang Qionghua's personal maidservant; gossips about the betrothal arrangement and the jade hairpin incident	王琼华的贴身丫鬟；传关于婚约和玉簪的闲话。
char-115	松儿 Sōng'ér	—	—	—	servant	ch.6	Originally Shen Yungu's dowry maid; taken as concubine by Sun Sihui; effectively relieves Shen Yungu	沈芸姑的陪嫁丫鬟；被孙嗣徽收为妾。
char-116	伴送婆（巴家）	伴送婆	—	—	servant	ch.6	Bridal escort matron who accompanied Ba Laifeng to the Sun household; mediates the violent wedding night	巴家的送亲婆；调解新婚之夜的冲突。
char-117	乳母（巴来风）	乳母 / 奶妈	—	—	servant	ch.6	Ba Laifeng's childhood nanny; persuades her to accept the marriage with moral arguments	巴来风的奶妈；劝其接受婚姻。
char-118	跟班（富家）	跟班 / 跟班的	—	—	servant	ch.3	Fu Lun's neat household attendant; brings tea to Pincai; wears plain silk padded jacket	富府跟班；端茶；穿素绸棉袄。
char-119	卢大爷 Lú Dàyé	—	—	—	servant	ch.5	Hua Guangsu's stable and livestock manager; oversees 100+ horses and 70–80 large mules	华府马房总管；管理百余匹马。
char-120	跟班队（华家，~20–30人）	跟班 / 跟班的	—	—	servant	ch.5	20–30 liveried grooms and mounted escorts who accompany Hua Guangsu on outings	华府跟班队；随华光宿出巡。
char-121	叶茂林 Yè Màolín	—	50+	Suzhou	servant	ch.2	Impresario who bought and transported the young performers from Suzhou to Beijing by canal boat	班主；将伶人从苏州运往北京。
char-122	金二 Jīn Èr	—	—	—	servant	ch.3	Head troupe manager (掌班) of the Lianjin troupe; negotiates booking contracts	联锦班掌班；负责签约。
char-123	老三 Lǎo Sān	—	—	—	servant	ch.3	Restaurant server at the crockery-smashing scene; scolded for not bringing fine enough porcelain	酒楼伙计；因瓷器不够好被骂。
char-124	掌柜的 Zhǎngguì de	掌柜的 / 掌柜	—	—	servant	ch.3	Restaurant owner in the crockery-smashing scene; fawns on Xi Shiyi; lectures waiter on porcelain acoustics	酒楼掌柜；讨好奚十一。
char-125	梅鼎 Méi Dǐng	鼎	—	—	deceased	ch.1	Mei Shixie's grandfather; former Minister of Personnel (吏部尚书)	梅士燮之祖父；前吏部尚书。
char-126	梅羹调 Méi Gēngdiào	—	—	—	deceased	ch.1	Mei Shixie's father; former Grand Secretary (文华殿大学士)	梅士燮之父；前文华殿大学士。
char-127	颜庄 Yán Zhuāng	—	—	—	deceased	ch.1	Hanlin compiler; Lady Yan's brother; died at 30; Yan Zhongqing's father	翰林编修；颜夫人之弟；30岁去世；颜仲清之父。
char-128	颜尧臣 Yán Yàochén	—	—	—	deceased	ch.1	Left Censor; Lady Yan's father	左都御史；颜夫人之父。
char-129	富安世 Fù Ānshì	—	—	—	deceased	ch.3	Fu Lun's father; former Jiangnan governor; venerated as a local deity in Nanjing	富伦之父；前江南巡抚；在南京被尊为地方神。
char-130	杜琴师 Dù Qínshī	—	—	Jiangsu	deceased	ch.5	Qinyan's father; a zither-maker; died of anger after being humiliated by a powerful man	琴言之父；琴师；受辱后气绝身亡。
char-131	杜母 Dù Mǔ	其母	—	Jiangsu	deceased	ch.5	Qinyan's mother; died of grief a year after her husband	琴言之母；夫死后一年忧郁而亡。
char-132	杜族叔 Dù Zúshū	—	—	—	deceased	ch.5	Qinyan's clan uncle who took him in; died when Qinyan was 13	琴言族叔；收留琴言；琴言13岁时去世。
char-133	魏老仁 Wèi Lǎorén	—	—	—	deceased	ch.2	Wei Pincai's father; a failed litigious scholar; now works in a salt bureau	魏聘才之父；落魄文人；在盐务局工作。
char-134	刘喜 Liú Xǐ	—	40+	—	servant	ch.55	Loyal longtime attendant to Qu Daosheng; protects and supports Qinxian through illness, theft, funeral rites, and return arrangements	屈道生的老仆；在重病、失窃、丧事与返京过程中始终尽心扶持琴仙。
char-135	侯石翁 Hóu Shíwēng	石翁	74	Nanjing	scholar	ch.55	Elder literary celebrity at Phoenix Mountain; outwardly patronizing but morally ambiguous in his treatment of Qinxian after Daosheng's death	凤凰山文坛名宿；在道翁身后对琴仙“照应”中显出复杂且暧昧的真实面目。
char-136	巴英官 Bā Yīngguān	英官	~15	—	servant	ch.40	Youth attached to Xi Shiyi's household; central to Xi's late-stage debauchery arc and ensuing bodily retribution	奚十一身边少年；卷入其后期淫乱与报应情节，是关键当事人之一。
char-137	菊花 Júhuā	白菊花 / White Chrysanthemum	20+	Guangxi	minor	ch.17	Courtesan from Wuzhou, Guangxi, at Madam Tao's East Garden house, known as White Chrysanthemum; becomes Xi Shiyi's intimate companion through his decline and retribution arcs	广西梧州人，东园陶家妓女，人称白菊花；后成为奚十一的亲近之人，见证其衰败与报应线。
char-138	得月 Déyuè	—	~17	—	performer	ch.40	Young novice/performance-world youth linked with Xi Shiyi, Wei Pincai, and Pan Qiguan; pivotal in major karmic episodes in later chapters	与奚十一、魏聘才、潘其观等线索相连的重要少年人物；在后段多起报应事件中居关键位置。
char-139	卓天香 Zhuō Tiānxiāng	—	—	—	performer	ch.40	Performer associated with Wei Pincai's circle; appears repeatedly in the Xi Shiyi/Pan Qiguan late-stage entanglements	与魏聘才圈层相关的伶人；在奚十一、潘其观后期纠葛中多次出现。
char-140	阳善修 Yáng Shànxiū	—	—	—	minor	ch.40	Doctor specializing in intimate ailments; repeatedly called to treat major injuries and illnesses of key characters in late chapters	专治下体病症的医生；在后段关键人物伤病处理中多次出场。
char-141	屈道翁 Qū Dàowēng	道翁 / 道生 / Master Qu / 屈方正 Qū Fāngzhèng / 屈本立 Qū Běnlì / Qu Benli	—	—	scholar	ch.7	Senior scholar known as Qu Benli (calligraphy, ch.7), Qu Daoweng (main name), and Qu Fangzheng (divine aspect); adopts Qinxian; dies in Nanjing (ch.56); shrine and dream arcs (ch.59–60)	名士屈道翁（亦以屈本立、屈方正等名出现）：第7回署名书法，后段收养琴仙，第56回殁于南京，第59–60回托梦、建祠并入选十二花神。
char-142	苏侯 Sū Hóu	Marquis Su / the Marquis	—	—	official	ch.48	Powerful noble household head; father-in-law of Tian Chunhang through his daughter's marriage	权势显赫的侯门家长；其女与田春航成婚后，成为田春航岳家核心人物。
char-143	姬亮轩 Jī Liàngxuān	—	—	—	minor	ch.27	Corrupt hanger-on tied to Xi Shiyi's milieu; repeatedly appears in rumor, coercion, and underhand social manipulation arcs	与奚十一圈层相关的奸滑人物；多次卷入流言、挟制与权势投机情节。
char-144	金粟 Jīn Sù	—	—	—	scholar	ch.32	Literary-circle member active in later gatherings, inscriptions, and the Nine Fragrance cultural projects	后段文士圈成员之一，参与题赞、聚会与九香楼文化工程。
char-145	张笑梅 Zhāng Xiàoméi	—	—	—	performer	ch.19	Performer connected to Wei Pincai's social circle; appears in his expanding pleasure-network entanglements	与魏聘才交游圈相关的伶人，出现在其声色关系扩张阶段的关键场景中。
char-146	杨梅窗 Yáng Méichuāng	—	—	—	performer	ch.19	Performer in Wei Pincai's orbit; linked to his theatrical-social network and late-stage decline arc	魏聘才圈层伶人之一，牵连其戏园交游网络与后期失序线索。
char-147	周小三 Zhōu Xiǎosān	—	—	—	servant	ch.40	Driver and fixer tied to Pan Qiguan's household sphere; central participant in the revenge setup against Pan	与潘其观圈层关联的车夫/办事人；在对潘的报复布局中居关键执行位置。
char-148	孟七 Mèng Qī	—	—	—	servant	ch.44	Xu Ziyun household servant appearing in communication and dispatch tasks during conflict-heavy chapters	徐子云家中仆从，主要出现在冲突密集段落中的传递与差遣环节。
char-149	姚贤 Yáo Xián	—	—	—	servant	ch.44	Outer attendant under Hua Guangsu's side, dispatched in retrieval and pursuit errands around Qinyan's transfer period	华光宿一侧外跟班人物，在琴言去留风波中承担追索差事。
char-150	吴紫烟 Wú Zǐyān	—	23	—	female	ch.57	Liu Wenze's wife; one of the central ladies in Yuan Qixiang's Chapter 57 women-only drinking-game gathering	刘文泽之妻；第57回袁绮香闺阁酒令局中的核心女性成员之一。
char-151	蔡某 Cài Mǒu	—	—	—	minor	ch.35	Named suspect in temple theft-related incident chain; appears in the investigation and blame-casting context	寺中失窃事件链条中的具名嫌疑角色，出现在追查与归责语境中。
char-152	长庆师娘 Chángqìng Shīniáng	师娘 / 长庆媳妇	—	—	female	ch.42	Widow of troupe master Changqing; involved in maintenance-price bargaining and pressure over performer arrangements	长庆亡后相关寡妇角色；在养赡索价与伶人去留博弈中承担关键施压方。
char-153	苏浣香 Sū Huànxiāng	—	21	—	female	ch.5	Hua Guangsu's wife, elder daughter of Marquis Su; celebrated as 'the most beautiful woman in the empire'; presides over the ten pearl-maids; joins the ladies' gathering of ch.57	华光宿之妻，苏侯长女浣香；号称“天下第一美人”，统领十珠婢女；第57回闺阁雅集成员。
char-154	浣兰 Huànlán	苏小姐 / Miss Su	19	—	female	ch.11	Marquis Su's younger daughter and Su Huanxiang's sister; visits the Hua mansion as 'Miss Su' (ch.11); marries Tian Chunhang (ch.49); youngest of the seven ladies in ch.57	苏侯次女，浣香胞妹；第11回以“苏小姐”造访华府；第49回嫁田春航；第57回闺阁雅集中年龄最小。
char-155	红雪 Hóng Xuě	Hongxue	—	—	servant	ch.11	Yuan Qixiang's maidservant; active participant in the dice and tongue-twister drinking games (chs.11, 57)	袁绮香的丫鬟；酒令游戏中的活跃参与者（第11、57回）。
char-156	红香 Hóng Xiāng	Hongxiang	—	—	servant	ch.11	Yuan Qixiang's maidservant; participates in chess and shoe-game sequences (chs.11, 57)	袁绮香的丫鬟；棋局与鞋令游戏的参与者（第11、57回）。
char-157	花珠 Huā Zhū	Huazhu	—	—	servant	ch.11	One of the Hua household pearl-maids, lent to Yuan Qixiang's team; plays the role of 商君 in the ch.57 games	华府“十珠”婢女之一，被借入袁绮香一方；第57回扮演"商君"角色。
char-158	画珠 Huà Zhū	Huazhu	—	—	servant	ch.11	One of the Hua household pearl-maids; plays the role of 蔺相如 in the ch.57 poetry-card games	华府“十珠”婢女之一；第57回诗牌游戏中扮演"蔺相如"角色。
char-159	明珠 Míng Zhū	Mingzhu	—	—	servant	ch.11	One of the Hua household pearl-maids; participates in the topknot and tongue-twister games (chs.11, 26, 41, 57)	华府“十珠”婢女之一；参与顶针续麻令与绕口令游戏（第11、26、41、57回）。
char-160	荷珠 Hé Zhū	Hezhu	—	—	servant	ch.11	One of the Hua household pearl-maids; plays the role of 孟尝君 in the ch.57 games	华府“十珠”婢女之一；第57回扮演"孟尝君"角色。
char-161	蕊珠 Ruǐ Zhū	Ruizhu	—	—	servant	ch.11	One of the Hua household pearl-maids; plays the role of 张子房 in the ch.57 dice games	华府“十珠”婢女之一；第57回扮演"张子房"角色。
char-162	乌大傻 Wū Dàshǎ	—	~30	—	minor	ch.30	Wealthy simpleton of the idle-rich circle; brother-in-law of Gui Zirong; tried in the forged-deed case (ch.32) and joins Ji Liangxuan's tea-house fleecing of Qinyan (ch.42)	纨绔圈中的有钱蠢汉；归自荣的姻亲；第32回卷入假契案受审，第42回与姬亮轩同去打茶围诓骗琴言。
char-163	归自荣 Guī Zìróng	窑子归	—	—	minor	ch.30	Feng Zipei's brother-in-law, nicknamed 'Kiln Gui'; jailed with Wu Dasha over a forged property deed (ch.32)	冯子佩之妻舅，诨名“窑子归”；第32回因假房契一案与乌大傻同堂受审。
char-164	伍麻子 Wǔ Mázi	—	—	—	minor	ch.36	Pockmarked cousin of Qinyan's shiniang; hangs about the Changqing household through the mourning and ransom-bargaining chapters (chs.36–44); returns to Yangzhou (ch.58)	琴言师娘的表弟；长庆丧事与索养赡各回中始终在场帮闲（第36–44回），第58回随师娘回扬州。
char-165	天福 Tiānfú	—	~15	—	performer	ch.27	Junior fellow-disciple of Qinyan under master Changqing; plain-looking but sociable; earns for the household by performing (chs.27, 42)	琴言的师弟，长庆之徒；相貌平常而会应酬，靠唱戏帮衬家用（第27、42回）。
char-166	天寿 Tiānshòu	—	~15	—	performer	ch.27	Junior fellow-disciple of Qinyan under master Changqing; appears alongside Tianfu in the household scenes (chs.27, 36, 42)	琴言的师弟，与天福同为长庆之徒；常与天福同进同出（第27、36、42回）。
char-167	爱珠 Àizhū	—	~15	—	servant	ch.11	One of the Hua household pearl-maids; lively presence in the garden games and lantern scenes (chs.11, 26, 41, 44)	华府“十珠”婢女之一；活跃于酒令、灯下诸场面（第11、26、41、44回）。
char-168	掌珠 Zhǎngzhū	—	~15	—	servant	ch.11	One of the Hua household pearl-maids; fans the young lord and joins the drinking games (chs.11, 26, 41)	华府“十珠”婢女之一；为公子打扇，参与酒令游戏（第11、26、41回）。
char-169	珍珠 Zhēnzhū	—	~15	—	servant	ch.11	One of the Hua household pearl-maids; attends Hua Guangsu in the garden scenes (chs.11, 26, 57)	华府“十珠”婢女之一；在园中侍奉华公子（第11、26、57回）。
char-170	赠珠 Zèngzhū	—	~15	—	servant	ch.11	One of the Hua household pearl-maids; accompanies Madam Hua on the boat outing (ch.41)	华府“十珠”婢女之一；第41回随华夫人游船。
char-171	红薇 Hóngwēi	—	~15	—	servant	ch.11	One of Yuan Qixiang's 'red' maids; noted dice-thrower in the ladies' drinking games (chs.11, 57)	袁绮香的“红”字辈丫鬟之一；闺阁酒令中的掷骰好手（第11、57回）。
char-172	红玉 Hóngyù	—	~15	—	servant	ch.11	One of Yuan Qixiang's 'red' maids; plays music at the ch.57 gathering	袁绮香的“红”字辈丫鬟之一；第57回调丝品竹。
char-173	红雯 Hóngwén	—	~15	—	servant	ch.11	One of Yuan Qixiang's 'red' maids; joins the dice and poetry-card games (chs.11, 57)	袁绮香的“红”字辈丫鬟之一；参与掷骰与诗牌游戏（第11、57回）。
char-174	红莲 Hónglián	—	~15	—	servant	ch.52	One of Yuan Qixiang's 'red' maids; attends the wedding festivities and the ch.57 games	袁绮香的“红”字辈丫鬟之一；见于第52回婚礼随侍与第57回酒令。
char-175	红娟 Hóngjuān	—	~15	—	servant	ch.57	One of Yuan Qixiang's 'red' maids; appears in the ch.57 drinking games	袁绮香的“红”字辈丫鬟之一；见于第57回酒令。
char-176	秋莲 Qiūlián	—	~15	—	servant	ch.57	Ronghua's maidservant; joins the ch.57 poetry-card gathering	蓉华的丫鬟；参与第57回诗牌雅集。
char-177	侍香 Shìxiāng	—	~15	—	servant	ch.57	Wu Ziyan's maidservant; joins the ch.57 games	吴紫烟的丫鬟；参与第57回酒令。
char-178	金凤 Jīnfèng	—	~15	—	servant	ch.57	Peiqiu's maidservant; joins the ch.57 games	孙佩秋的丫鬟；参与第57回酒令。
char-179	小翠 Xiǎocuì	—	13	—	servant	ch.57	Huanlan's young maidservant; clever and pretty; joins the ch.57 games	浣兰的小丫鬟，年十三，伶俐灵变；参与第57回酒令。
char-180	青琴 Qīngqín	—	~15	—	servant	ch.57	Wang Qionghua's maidservant; joins the ch.57 games	王琼华的丫鬟；参与第57回酒令。
char-181	陶妈妈 Táo Māma	Madam Tao	—	—	minor	ch.18	Keeper of the pleasure house in the East Garden; takes in Yu Tianxian and White Chrysanthemum; sizes up Xi Shiyi's fortune (ch.18)	东园开门户的鸨母；收留玉天仙与白菊花，第18回打听奚十一家世。
char-182	杨八 Yáng Bā	Yang the Eighth	—	—	minor	ch.19	Geomancer hanger-on ('Eighth Master Yang') in the Fu Lun and Xi Shiyi circle; consulted on graves and fortunes (chs.19, 34–36)	富伦、奚十一交游圈中的风水先生“杨八爷”；第34回起为人看风水断祸福。
char-183	陆皂隶 Lù Zàolì	Runner Lu	—	—	minor	ch.32	Yamen runner who puzzles over the garbled case documents with copyist Ge Fengshi (ch.32)	衙门皂隶；第32回与葛贴写在茶馆研读错讹的案卷。
char-184	葛逢时 Gě Féngshí	葛贴写 / Ge Fengshi	—	—	minor	ch.32	Shaoxing copyist ('Ge the copyist'), sixth of his line; deciphers the miswritten yamen documents for Runner Lu (ch.32)	绍兴籍贴写，排行第六；第32回为陆皂隶讲解案卷中的错字。
char-185	许老二 Xǔ Lǎoèr	—	—	—	minor	ch.40	Second of the Xu brothers; carries out the bare-fisted revenge on Pan San (chs.40, 47)	许家老二；第40、47回亲手惩治潘三的主力。
char-186	许老三 Xǔ Lǎosān	许贵 / Xu Gui	16	—	servant	ch.40	Handsome young assistant in Pan San's silver shop; later renamed Xu Gui as Tian Chunhang's attendant (ch.47)	潘三银号中的清秀小伙计，年十六；后改名许贵，随田春航为跟班（第47回）。
char-187	田安 Tián Ān	—	50+	—	servant	ch.12	Tian Chunhang's old family retainer; follows him from Nanjing and keeps his household through the lean years (chs.12–13, 48)	田春航的老家人；随行进京，穷困时仍守在身边（第12–13、48回）。
char-188	田太夫人 Tián Tàifūrén	—	—	—	female	ch.48	Tian Chunhang's mother; brought to the capital after his success (ch.48); presides over the wedding-season gatherings (ch.52)	田春航之母；第48回被接进京，第52回操持喜庆宴集。
char-189	缝穷婆 Féngqióng Pó	缝穷婆 / 缝穷的	—	—	female	ch.51	The mending-woman outside the theatre wall; her quarrel over pilfered coppers sets off the ch.51 street brawl	戏园墙外的缝穷婆；第51回因铜钱失窃与人争闹，引出隔墙听戏一场风波。
char-190	李大夫 Lǐ Dàfū	Doctor Li	—	Nanjing	minor	ch.56	Doctor in Nanjing summoned by Liu Xi to treat Qu Daoweng when Doctor Wang was away in Yizheng County; arrives after Daoweng's death.	南京医生；王大夫去仪征县后，被刘喜请来为屈道翁诊治，次日赶到时道翁已故。
char-191	张贵 Zhāng Guì	—	—	—	villain	ch.56	Treacherous servant of Qu Daoweng; absconded with silver, luggage, and official credentials in ch.56; captured in Ji'an in ch.59.	屈道翁的背主恶仆；第56回乘道翁危重私匿白银、衣箱及文凭潜逃，第59回于吉安府落网。
char-192	汪升 Wāng Shēng	—	—	—	villain	ch.56	Treacherous servant of Qu Daoweng; participated in the ch.56 theft and flight; died on the run before ch.59.	屈道翁的背主恶仆；第56回参与盗窃逃跑，于第59回前在逃亡途中身故。
char-193	钱德 Qián Dé	—	—	—	villain	ch.56	Treacherous servant of Qu Daoweng; absconded with Zhang Gui in ch.56; captured in Ji'an in ch.59.	屈道翁的背主恶仆；第56回与张贵等人合谋盗宝潜逃，第59回于吉安府落网。`;


const ROLE_MAP: Record<string, string> = {
  scholar: '名士',
  performer: '伶人',
  official: '官员',
  villain: '反派',
  minor: '配角',
  female: '女性',
  servant: '仆从',
  deceased: '已故',
  Other: '其他'
};

const ORIGIN_MAP: Record<string, string> = {
  'Suzhou': '苏州',
  'Yangzhou': '扬州',
  'Jinling': '金陵',
  'Nanjing': '南京',
  'Beijing': '北京',
  'Zhejiang': '浙江',
  'Hangzhou': '杭州',
  'Jiangnan': '江南',
  'Jiangsu': '江苏',
  'Anhui': '安徽',
  'Fujian': '福建',
  'Guangdong': '广东',
  'Shanxi': '山西',
  'Shandong': '山东',
  'Sichuan': '四川',
  'Hubei': '湖北',
  'Hunan': '湖南',
  'Jiangxi': '江西',
  'Henan': '河南',
  'Hebei': '河北',
  'Shaanxi': '陕西',
  'Gansu': '甘肃',
  'Yunnan': '云南',
  'Guizhou': '贵州',
  'Guangxi': '广西',
  'Zhejiang, Shanyin': '浙江山阴',
  'Suzhou, Wu County': '苏州吴县',
  'Hanyang': '汉阳',
  'Jiangning': '江宁',
  'Tianjin': '天津',
  'Hunan, Xiangtan': '湖南湘潭',
  'Henan, Zhengyang': '河南正阳',
  '—': '—'
};

const baseRelationships: Relationship[] = [
  // Core Protagonists: Mei Ziyu (char-0)
  { source: 'char-0', target: 'char-1', type: 'Soulmate', typeZh: '情定知己' },
  { source: 'char-0', target: 'char-90', type: 'Marriage', typeZh: '明媒正娶' },
  { source: 'char-0', target: 'char-4', type: 'Cousin', typeZh: '中表之亲' },
  { source: 'char-0', target: 'char-2', type: 'Close Cousin', typeZh: '姑侄同袍' },
  { source: 'char-0', target: 'char-47', type: 'Father/Son', typeZh: '严父慈子' },
  { source: 'char-0', target: 'char-86', type: 'Mother/Son', typeZh: '母子情深' },
  { source: 'char-0', target: 'char-7', type: 'Literary Circle', typeZh: '文坛诗友' },
  { source: 'char-0', target: 'char-141', type: 'Veneration', typeZh: '修建祠堂' },
  { source: 'char-0', target: 'char-19', type: 'Benefactor', typeZh: '提携后辈' },
  { source: 'char-0', target: 'char-20', type: 'Student/Tutor', typeZh: '师生' },
  { source: 'char-0', target: 'char-102', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-0', target: 'char-103', type: 'Master/Servant', typeZh: '主仆' },

  // Du Qinyan (char-1)
  { source: 'char-1', target: 'char-7', type: 'Patron/Protege', typeZh: '救赎恩主' },
  { source: 'char-1', target: 'char-23', type: 'Loyal Friend', typeZh: '同门挚友' },
  { source: 'char-1', target: 'char-31', type: 'Companion', typeZh: '进京同伴' },
  { source: 'char-1', target: 'char-56', type: 'Former Guardian', typeZh: '曾收留者' },
  { source: 'char-1', target: 'char-130', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-1', target: 'char-131', type: 'Mother/Son', typeZh: '母子' },
  { source: 'char-1', target: 'char-132', type: 'Uncle/Nephew', typeZh: '族叔' },

  // Yan Zhongqing (char-2)
  { source: 'char-2', target: 'char-86', type: 'Aunt/Nephew', typeZh: '姑侄' },
  { source: 'char-2', target: 'char-89', type: 'Marriage', typeZh: '入赘姊妹' },
  { source: 'char-2', target: 'char-92', type: 'Mother/Son', typeZh: '母子' },
  { source: 'char-2', target: 'char-127', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-2', target: 'char-113', type: 'Master/Servant', typeZh: '主仆' },

  // Shi Nanxiang (char-3) & Tian Chunhang (char-15)
  { source: 'char-3', target: 'char-25', type: 'Unrequited Love', typeZh: '痴情苦恋' },
  { source: 'char-15', target: 'char-25', type: 'Passionate Pursuit', typeZh: '热烈追求' },
  { source: 'char-3', target: 'char-57', type: 'Father/Son', typeZh: '父子' },

  // Xu Ziyun Circle (char-7)
  { source: 'char-7', target: 'char-23', type: 'Favored Performer', typeZh: '钟爱伶人' },
  { source: 'char-7', target: 'char-8', type: 'Intimate Friend', typeZh: '莫逆之交' },
  { source: 'char-7', target: 'char-9', type: 'Friend', typeZh: '好友' },
  { source: 'char-7', target: 'char-91', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-7', target: 'char-58', type: 'Son-in-law/Father-in-law', typeZh: '翁婿' },
  { source: 'char-7', target: 'char-59', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-7', target: 'char-60', type: 'Brothers', typeZh: '兄弟' },

  // Wang Family (char-4, 48)
  { source: 'char-4', target: 'char-48', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-4', target: 'char-87', type: 'Stepmother/Son', typeZh: '继母子' },
  { source: 'char-4', target: 'char-88', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-4', target: 'char-100', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-48', target: 'char-87', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-48', target: 'char-89', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-48', target: 'char-90', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-49', target: 'char-99', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-6', target: 'char-99', type: 'Marriage', typeZh: '夫妻' },

  // Sun Family (char-21, 22, 49)
  { source: 'char-21', target: 'char-22', type: 'Brothers', typeZh: '同胞兄弟' },
  { source: 'char-21', target: 'char-49', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-21', target: 'char-97', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-21', target: 'char-115', type: 'Concubine', typeZh: '收为妾' },
  { source: 'char-22', target: 'char-49', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-22', target: 'char-98', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-49', target: 'char-96', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-49', target: 'char-88', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-49', target: 'char-100', type: 'Father/Daughter', typeZh: '父女' },

  // Performers
  { source: 'char-28', target: 'char-29', type: 'Brothers', typeZh: '同胞兄弟' },

  // Villains & Antagonists
  { source: 'char-72', target: 'char-33', type: 'Associated', typeZh: '有关' },
  { source: 'char-72', target: 'char-81', type: 'Oppressor', typeZh: '残害' },
  { source: 'char-72', target: 'char-124', type: 'Fawning', typeZh: '讨好' },
  { source: 'char-5', target: 'char-6', type: 'Scheming Peers', typeZh: '狐朋狗友' },
  { source: 'char-5', target: 'char-95', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-5', target: 'char-112', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-5', target: 'char-133', type: 'Father/Son', typeZh: '父子' },

  // Others
  { source: 'char-10', target: 'char-21', type: 'Mockery', typeZh: '嘲弄' },
  { source: 'char-10', target: 'char-22', type: 'Mockery', typeZh: '嘲弄' },
  { source: 'char-6', target: 'char-20', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-47', target: 'char-86', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-53', target: 'char-54', type: 'Friend', typeZh: '好友' },
  { source: 'char-53', target: 'char-79', type: 'Concubine', typeZh: '姨太太' },
  { source: 'char-53', target: 'char-80', type: 'Concubine', typeZh: '姨太太' },
  { source: 'char-53', target: 'char-129', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-55', target: 'char-78', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-55', target: 'char-42', type: 'Companion', typeZh: '私人伴侣' },
  { source: 'char-9', target: 'char-61', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-11', target: 'char-62', type: 'Nephew/Uncle', typeZh: '舅侄' },
  { source: 'char-12', target: 'char-63', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-13', target: 'char-64', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-98', target: 'char-64', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-141', target: 'char-19', type: 'Father/Son', typeZh: '父子' },
  { source: 'char-86', target: 'char-127', type: 'Brother/Sister', typeZh: '姐弟' },
  { source: 'char-86', target: 'char-128', type: 'Father/Daughter', typeZh: '父女' },
  { source: 'char-104', target: 'char-105', type: 'Marriage', typeZh: '夫妻' },
  { source: 'char-90', target: 'char-114', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-2', target: 'char-113', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-190', target: 'char-141', type: 'Doctor & Patient', typeZh: '医患' },
  { source: 'char-190', target: 'char-134', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-191', target: 'char-141', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-191', target: 'char-134', type: 'Fellow Servant', typeZh: '同僚' },
  { source: 'char-192', target: 'char-141', type: 'Master/Servant', typeZh: '主仆' },
  { source: 'char-193', target: 'char-141', type: 'Master/Servant', typeZh: '主仆' },
];


const parsedCharacters: Character[] = rawData.split('\n').map((line) => {
  const [id, nameRaw, alias, age, originRaw, roleRaw, chapter, description, descriptionZh] = line.split('\t');
  const origin = originRaw?.trim().replace(/^"(.*)"$/, '$1') || '—';
  const name = nameRaw?.trim() || 'Unknown';
  const role = roleRaw?.trim() || 'Other';

  let isFemale = false;
  if (role === 'female') {
    isFemale = true;
  }
  const femaleIndicators = ["夫人", "氏", "奶奶", "姐", "娘", "姑", "婆", "姑娘", "母", "妻", "媳妇", "丫鬟", "女"];
  for (const fem of femaleIndicators) {
    if (name.includes(fem)) {
      isFemale = true;
    }
  }
  const specificFemales = ["苏浣香", "浣兰", "吴紫烟", "蓉华", "王琼华", "佩秋", "卓天香", "红雪", "红香", "花珠", "画珠", "明珠", "荷珠", "蕊珠", "袁绮香", "爱珠", "掌珠", "珍珠", "赠珠", "红薇", "红玉", "红雯", "红莲", "红娟", "秋莲", "侍香", "金凤", "小翠", "青琴", "陶妈妈"];
  for (const femName of specificFemales) {
    if (name.includes(femName)) {
      isFemale = true;
    }
  }

  const gender = isFemale ? 'Female' : 'Male';
  const genderZh = isFemale ? '女' : '男';
  
  return {
    id: id?.trim() || 'unknown',
    name,
    alias: alias?.trim() || '—',
    age: age?.trim() || '—',
    origin,
    originZh: ORIGIN_MAP[origin] || origin,
    role,
    roleZh: ROLE_MAP[role] || role || '其他',
    chapter: chapter?.trim() || '—',
    chapterNum: parseInt(chapter?.match(/\d+/)?.[0] || '999'),
    description: description?.trim() || '',
    descriptionZh: descriptionZh?.trim() || '',
    gender,
    genderZh,
    speechesCount: 0,
    speechesCharCount: 0
  };
});

type MergeGroup = {
  canonicalNameKeyword: string;
  memberNameKeywords: string[];
};

const mergeGroups: MergeGroup[] = [
  {
    canonicalNameKeyword: '田春航',
    memberNameKeywords: ['田春航', '田状元'],
  },
  {
    canonicalNameKeyword: '孙氏',
    memberNameKeywords: ['孙氏', '佩秋'],
  },
  // 林珊枝 (Hua Guangsu's steward-performer) is written both 林珊枝 and 珊枝.
  {
    canonicalNameKeyword: '林珊枝',
    memberNameKeywords: ['珊枝'],
  },
  // 金吉甫's given name is written 金粟/金栗 (ch.38: 姓金名栗，号吉甫); the
  // painter 金粟 of chs.32–35 is the same Nanjing scholar.
  {
    canonicalNameKeyword: '金吉甫',
    memberNameKeywords: ['金吉甫', '金粟'],
  },
  // 华夫人 is 苏浣香, Marquis Su's elder daughter (ch.11: 这浣香十八岁上嫁了华光宿).
  {
    canonicalNameKeyword: '苏浣香',
    memberNameKeywords: ['苏浣香', '华夫人'],
  },
  // 袁夫人 is 袁绮香, Xu Ziyun's wife (ch.52/57: 徐子云的夫人袁绮香).
  {
    canonicalNameKeyword: '袁绮香',
    memberNameKeywords: ['袁绮香', '袁夫人'],
  },
  // 屈少君 (ch.59 title) is Qinxian, i.e. Du Qinyan as Qu Daoweng's adopted son.
  {
    canonicalNameKeyword: '杜琴言',
    memberNameKeywords: ['杜琴言', '屈少君'],
  },
  // 潘老三 of the Qisheng silver bureau (ch.8) is 潘其观/潘三 (ch.13: 开起盛银号的潘三爷).
  {
    canonicalNameKeyword: '潘其观',
    memberNameKeywords: ['潘其观', '潘老三'],
  },
];

const idRemap: Record<string, string> = {};
const mergedIdentityAliasesByCanonicalId: Record<string, string[]> = {};

for (const group of mergeGroups) {
  const members = parsedCharacters.filter((c) =>
    group.memberNameKeywords.some((keyword) => c.name.includes(keyword))
  );
  if (members.length <= 1) continue;

  const canonical =
    members.find((c) => c.name.includes(group.canonicalNameKeyword)) || members[0];
  const nonCanonical = members.filter((c) => c.id !== canonical.id);
  const mergedAliases = [
    ...new Set(
      members
        .flatMap((c) => [c.name, ...c.alias.split('/').map((item) => item.trim())])
        .map((item) => item.trim())
        .filter((item) => item && item !== '—' && item !== canonical.name)
    ),
  ];

  canonical.alias = mergedAliases.join(' / ') || canonical.alias;
  for (const removed of nonCanonical) {
    idRemap[removed.id] = canonical.id;
  }
  mergedIdentityAliasesByCanonicalId[canonical.id] = mergedAliases;
}

export const characters: Character[] = parsedCharacters.filter((c) => !idRemap[c.id]);

export const identityLinksById: Record<string, string[]> = (() => {
  const map: Record<string, string[]> = {};
  for (const [canonicalId, aliases] of Object.entries(mergedIdentityAliasesByCanonicalId)) {
    map[canonicalId] = aliases;
  }
  return map;
})();

const relationshipKey = (rel: Relationship) =>
  [rel.source, rel.target, rel.type, rel.typeZh].join('|');

function findCharacterIdByNameKeyword(keyword: string): string | undefined {
  return characters.find((c) => c.name.includes(keyword))?.id;
}

type RelationshipSpec = {
  sourceKeyword: string;
  targetKeyword: string;
  type: string;
  typeZh: string;
};

const chapterValidatedRelationshipSpecs: RelationshipSpec[] = [
  // Isolated-character links added only where the chapter text/character notes state direct ties.
  { sourceKeyword: '苏蕙芳', targetKeyword: '杜琴言', type: 'Allied Performers', typeZh: '伶界盟友' },
  { sourceKeyword: '金漱芳', targetKeyword: '李玉林', type: 'Lianzhu Troupe Colleagues', typeZh: '联珠班同伶' },
  { sourceKeyword: '蓉官', targetKeyword: '富伦', type: 'Friend/Patron Circle', typeZh: '友朋与 patron 圈' },
  { sourceKeyword: '小福', targetKeyword: '富伦', type: 'Sponsored Performer', typeZh: '出师资助' },
  { sourceKeyword: '玉美', targetKeyword: '田春航', type: 'Tavern Encounter', typeZh: '酒楼同场' },
  { sourceKeyword: '保珠', targetKeyword: '袁宝珠', type: 'Name Confusion', typeZh: '同名误认' },
  { sourceKeyword: '袁绮香', targetKeyword: '吴紫烟', type: 'Women\'s Gathering Host/Guest', typeZh: '闺阁酒令主客' },
  { sourceKeyword: '袁绮香', targetKeyword: '王琼华', type: 'Women\'s Gathering Host/Guest', typeZh: '闺阁酒令主客' },
  { sourceKeyword: '谭八', targetKeyword: '孙亮功', type: 'Imitated Performer', typeZh: '被模仿之角' },
  { sourceKeyword: '小顺儿', targetKeyword: '富伦', type: 'Brought by Patron', typeZh: '携带引见' },
  { sourceKeyword: '小顺儿', targetKeyword: '华光宿', type: 'Rejected by Patron', typeZh: '遭权门拒绝' },
  { sourceKeyword: '二喜', targetKeyword: '李元茂', type: 'Attached Performer/Patron', typeZh: '缠附与 patron' },
  { sourceKeyword: '杨方猷', targetKeyword: '王文辉', type: 'Banquet Guest', typeZh: '宴会宾客' },
  { sourceKeyword: '周锡爵', targetKeyword: '王文辉', type: 'Banquet Guest', typeZh: '宴会宾客' },
  { sourceKeyword: '陆宗沅', targetKeyword: '王文辉', type: 'Banquet Guest', typeZh: '宴会宾客' },
  { sourceKeyword: '陆宗淮', targetKeyword: '陆氏夫人（王家）', type: 'Brother/Sister', typeZh: '兄妹' },
  { sourceKeyword: '陆宗淮', targetKeyword: '陆氏夫人（孙家）', type: 'Brother/Sister', typeZh: '兄妹' },
  { sourceKeyword: '侯太史', targetKeyword: '杜琴言', type: 'Predatory Patronage Attempt', typeZh: '假义逼迫' },
  { sourceKeyword: '老王', targetKeyword: '魏聘才', type: 'Extortion Attempt', typeZh: '敲诈冲突' },
  { sourceKeyword: '老王', targetKeyword: '奚十一', type: 'Driven Out By', typeZh: '被其手下驱逐' },
  { sourceKeyword: '唐和尚', targetKeyword: '张仲雨', type: 'Friend/Intermediary', typeZh: '交游中介' },
  { sourceKeyword: '潘其观', targetKeyword: '张仲雨', type: 'Dining Companion', typeZh: '同席酒食' },
  { sourceKeyword: '王大夫', targetKeyword: '孙亮功', type: 'Physician/Patient', typeZh: '医患' },
  { sourceKeyword: '石氏', targetKeyword: '潘其观', type: 'Marriage', typeZh: '夫妻' },
  { sourceKeyword: '梅进', targetKeyword: '梅士燮', type: 'Gate Attendant/Master', typeZh: '门房主仆' },
  { sourceKeyword: '虎儿', targetKeyword: '梅子玉', type: 'Page/Master', typeZh: '小厮主仆' },
  { sourceKeyword: '书僮 (×2)', targetKeyword: '李性全', type: 'Study Attendants', typeZh: '塾馆书僮' },
  { sourceKeyword: '仆妇（门上）', targetKeyword: '梅士燮', type: 'Doorkeeper/Master', typeZh: '门上传帖' },
  { sourceKeyword: '家人媳妇（衣裳）', targetKeyword: '颜夫人', type: 'Household Servant', typeZh: '内宅使唤' },
  { sourceKeyword: '小丫鬟（子玉书房）', targetKeyword: '梅子玉', type: 'Maid/Master', typeZh: '书房使女' },
  { sourceKeyword: '小丫鬟（子玉书房）', targetKeyword: '王琼华', type: 'Maid/Young Lady', typeZh: '闺阁侍女' },
  { sourceKeyword: '伴送婆（巴家）', targetKeyword: '巴来风', type: 'Bridal Escort', typeZh: '送亲陪伴' },
  { sourceKeyword: '乳母（巴来风）', targetKeyword: '巴来风', type: 'Nanny/Young Lady', typeZh: '乳母与小姐' },
  { sourceKeyword: '跟班（富家）', targetKeyword: '富伦', type: 'Attendant/Master', typeZh: '跟班主仆' },
  { sourceKeyword: '卢大爷', targetKeyword: '华光宿', type: 'Stable Manager/Master', typeZh: '马房总管主仆' },
  { sourceKeyword: '跟班队（华家，~20–30人）', targetKeyword: '华光宿', type: 'Retinue/Master', typeZh: '随从队伍' },
  { sourceKeyword: '叶茂林', targetKeyword: '袁宝珠', type: 'Impresario/Troupe Link', typeZh: '班主与伶人' },
  { sourceKeyword: '金二', targetKeyword: '袁宝珠', type: 'Troupe Manager/Performer', typeZh: '掌班与伶人' },
  { sourceKeyword: '老三', targetKeyword: '掌柜的', type: 'Waiter/Owner', typeZh: '伙计掌柜' },
  { sourceKeyword: '梅鼎', targetKeyword: '梅士燮', type: 'Grandfather/Grandson', typeZh: '祖孙' },
  { sourceKeyword: '梅羹调', targetKeyword: '梅士燮', type: 'Father/Son', typeZh: '父子' },

  { sourceKeyword: '屈道翁', targetKeyword: '杜琴言', type: 'Adoptive Father/Child', typeZh: '义父义子' },
  { sourceKeyword: '屈道翁', targetKeyword: '刘喜', type: 'Master/Servant', typeZh: '主仆' },
  { sourceKeyword: '屈道翁', targetKeyword: '梅子玉', type: 'Trusted Friend', typeZh: '知交' },
  { sourceKeyword: '屈少君', targetKeyword: '梅子玉', type: 'Benefactor', typeZh: '提携' },
  { sourceKeyword: '苏侯', targetKeyword: '田春航', type: 'Father-in-law/Son-in-law', typeZh: '岳父女婿' },
  { sourceKeyword: '姬亮轩', targetKeyword: '奚十一', type: 'Corrupt Associate', typeZh: '狼狈为奸' },
  { sourceKeyword: '巴英官', targetKeyword: '奚十一', type: 'Attendant', typeZh: '仆从附势' },
  { sourceKeyword: '菊花', targetKeyword: '奚十一', type: 'Concubine', typeZh: '姬妾' },
  { sourceKeyword: '得月', targetKeyword: '奚十一', type: 'Victim/Abuser', typeZh: '受害与加害' },
  { sourceKeyword: '得月', targetKeyword: '魏聘才', type: 'Exploited By', typeZh: '受其摆布' },
  { sourceKeyword: '得月', targetKeyword: '潘其观', type: 'Exploited By', typeZh: '受其摆布' },
  { sourceKeyword: '周小三', targetKeyword: '潘其观', type: 'Driver/Servant', typeZh: '车夫主仆' },
  { sourceKeyword: '孟七', targetKeyword: '徐子云', type: 'Servant', typeZh: '主仆' },
  { sourceKeyword: '姚贤', targetKeyword: '华光宿', type: 'Servant', typeZh: '主仆' },
  { sourceKeyword: '吴紫烟', targetKeyword: '刘文泽', type: 'Marriage', typeZh: '夫妻' },
  { sourceKeyword: '蔡某', targetKeyword: '潘其观', type: 'Criminal Entanglement', typeZh: '盗案牵连' },
  { sourceKeyword: '长庆师娘', targetKeyword: '曹长庆', type: 'Marriage', typeZh: '夫妻' },
  { sourceKeyword: '金粟', targetKeyword: '徐子云', type: 'Nine Fragrance Literary Collaboration', typeZh: '九香楼文事同道' },
  { sourceKeyword: '张笑梅', targetKeyword: '魏聘才', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' },
  { sourceKeyword: '杨梅窗', targetKeyword: '魏聘才', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' },
  { sourceKeyword: '卓天香', targetKeyword: '魏聘才', type: 'Wei Pincai Social Circle', typeZh: '魏聘才交游圈' },
  { sourceKeyword: '阳善修', targetKeyword: '奚十一', type: 'Physician/Patient', typeZh: '医患' },
  { sourceKeyword: '阳善修', targetKeyword: '潘其观', type: 'Physician/Patient', typeZh: '医患' },
  { sourceKeyword: '侯石翁', targetKeyword: '屈道翁', type: 'Literary Peers', typeZh: '文坛同辈' },
  { sourceKeyword: '刘喜', targetKeyword: '杜琴言', type: 'Protector', typeZh: '护持' },

  // New characters verified against the chapter text (July 2026 audit).
  { sourceKeyword: '乌大傻', targetKeyword: '姬亮轩', type: 'Cronies', typeZh: '狐朋狗友' },
  { sourceKeyword: '乌大傻', targetKeyword: '归自荣', type: 'In-laws', typeZh: '姻亲' },
  { sourceKeyword: '归自荣', targetKeyword: '冯子佩', type: 'Brothers-in-law', typeZh: '郎舅' },
  { sourceKeyword: '伍麻子', targetKeyword: '长庆师娘', type: 'Cousins', typeZh: '表姊弟' },
  { sourceKeyword: '伍麻子', targetKeyword: '杜琴言', type: 'Household Hanger-on', typeZh: '寓中帮闲' },
  { sourceKeyword: '天福', targetKeyword: '曹长庆', type: 'Apprentice/Master', typeZh: '师徒' },
  { sourceKeyword: '天寿', targetKeyword: '曹长庆', type: 'Apprentice/Master', typeZh: '师徒' },
  { sourceKeyword: '天福', targetKeyword: '杜琴言', type: 'Fellow Disciples', typeZh: '同门师兄弟' },
  { sourceKeyword: '天寿', targetKeyword: '杜琴言', type: 'Fellow Disciples', typeZh: '同门师兄弟' },
  { sourceKeyword: '曹长庆', targetKeyword: '杜琴言', type: 'Master/Apprentice', typeZh: '师徒' },
  { sourceKeyword: '爱珠', targetKeyword: '苏浣香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '掌珠', targetKeyword: '苏浣香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '珍珠', targetKeyword: '苏浣香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '赠珠', targetKeyword: '苏浣香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '爱珠', targetKeyword: '华光宿', type: 'Maid/Master', typeZh: '主仆' },
  { sourceKeyword: '红薇', targetKeyword: '袁绮香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '红玉', targetKeyword: '袁绮香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '红雯', targetKeyword: '袁绮香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '红莲', targetKeyword: '袁绮香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '红娟', targetKeyword: '袁绮香', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '秋莲', targetKeyword: '蓉华', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '侍香', targetKeyword: '吴紫烟', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '金凤', targetKeyword: '孙氏', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '小翠', targetKeyword: '浣兰', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '青琴', targetKeyword: '王琼华', type: 'Maid/Mistress', typeZh: '主仆' },
  { sourceKeyword: '陶妈妈', targetKeyword: '玉天仙', type: 'Keeper/Courtesan', typeZh: '鸨母门户' },
  { sourceKeyword: '陶妈妈', targetKeyword: '菊花', type: 'Keeper/Courtesan', typeZh: '鸨母门户' },
  { sourceKeyword: '陶妈妈', targetKeyword: '奚十一', type: 'Keeper/Client', typeZh: '门户主客' },
  { sourceKeyword: '杨八', targetKeyword: '富伦', type: 'Circle Acquaintance', typeZh: '交游相识' },
  { sourceKeyword: '杨八', targetKeyword: '奚十一', type: 'Circle Acquaintance', typeZh: '交游相识' },
  { sourceKeyword: '陆皂隶', targetKeyword: '葛逢时', type: 'Tea-house Colleagues', typeZh: '茶馆同僚' },
  { sourceKeyword: '许老二', targetKeyword: '许三姐', type: 'Siblings', typeZh: '姐弟' },
  { sourceKeyword: '许老三', targetKeyword: '许三姐', type: 'Siblings', typeZh: '姐弟' },
  { sourceKeyword: '许老三', targetKeyword: '潘其观', type: 'Shop Assistant/Owner', typeZh: '伙计东家' },
  { sourceKeyword: '许老三', targetKeyword: '田春航', type: 'Attendant/Master', typeZh: '跟班主仆' },
  { sourceKeyword: '许老二', targetKeyword: '潘其观', type: 'Revenge', typeZh: '报复惩治' },
  { sourceKeyword: '田安', targetKeyword: '田春航', type: 'Old Retainer/Master', typeZh: '老家人主仆' },
  { sourceKeyword: '田太夫人', targetKeyword: '田春航', type: 'Mother/Son', typeZh: '母子' },
  { sourceKeyword: '缝穷婆', targetKeyword: '李元茂', type: 'Street Quarrel', typeZh: '街头争闹' },
  { sourceKeyword: '菊花', targetKeyword: '玉天仙', type: 'Sworn Sisters', typeZh: '门户姊妹' },
];

function buildValidatedRelationshipsFromSpecs(specs: RelationshipSpec[]): Relationship[] {
  const rels: Relationship[] = [];
  for (const spec of specs) {
    const source = findCharacterIdByNameKeyword(spec.sourceKeyword);
    const target = findCharacterIdByNameKeyword(spec.targetKeyword);
    if (!source || !target || source === target) continue;
    rels.push({
      source,
      target,
      type: spec.type,
      typeZh: spec.typeZh,
    });
  }
  return rels;
}

const generatedRelationships: Relationship[] = [
  { source: 'char-4', target: 'char-10', type: 'Close Association', typeZh: '极其密切' },
  { source: 'char-39', target: 'char-42', type: 'Close Association', typeZh: '极其密切' },
  { source: 'char-72', target: 'char-137', type: 'Close Association', typeZh: '极其密切' },
  { source: 'char-72', target: 'char-75', type: 'Close Association', typeZh: '极其密切' },
  { source: 'char-89', target: 'char-100', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-38', target: 'char-46', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-33', target: 'char-72', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-2', target: 'char-4', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-4', target: 'char-9', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-72', target: 'char-136', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-78', target: 'char-91', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-3', target: 'char-4', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-72', target: 'char-138', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-38', target: 'char-45', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-45', target: 'char-46', type: 'Frequent Contact', typeZh: '密切交集' },
  { source: 'char-72', target: 'char-143', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-72', type: 'Villainous Associate', typeZh: '狐朋狗友' },
  { source: 'char-2', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-3', target: 'char-10', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-10', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-155', target: 'char-156', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-75', target: 'char-137', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-89', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-86', target: 'char-102', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-6', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-3', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-33', target: 'char-136', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-100', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-48', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-4', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-50', target: 'char-51', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-50', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-51', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-4', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-2', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-157', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-39', target: 'char-78', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-4', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-75', target: 'char-138', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-48', target: 'char-49', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-2', target: 'char-10', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-5', target: 'char-11', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-157', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-4', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-14', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-72', target: 'char-140', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-6', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-48', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-32', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-4', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-7', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-78', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-78', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-157', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-159', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-10', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-72', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-39', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-9', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-136', target: 'char-143', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-134', target: 'char-135', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-155', target: 'char-157', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-86', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-87', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-4', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-4', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-25', target: 'char-26', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-4', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-7', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-78', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-10', target: 'char-27', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-11', target: 'char-24', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-5', target: 'char-42', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-2', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-33', target: 'char-137', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-39', target: 'char-149', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-75', target: 'char-140', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-40', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-89', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-156', target: 'char-157', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-48', target: 'char-51', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-49', target: 'char-52', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-86', target: 'char-104', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-0', target: 'char-2', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-0', target: 'char-4', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-0', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-91', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-158', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-78', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-155', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-23', target: 'char-24', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-32', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-86', target: 'char-106', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-3', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-14', target: 'char-146', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-4', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-11', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-7', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-32', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-75', target: 'char-136', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-136', target: 'char-137', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-137', target: 'char-143', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-40', target: 'char-100', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-154', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-48', target: 'char-50', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-49', target: 'char-50', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-49', target: 'char-51', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-32', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-32', target: 'char-33', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-2', target: 'char-6', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-3', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-39', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-7', target: 'char-10', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-7', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-26', target: 'char-27', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-6', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-6', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-6', target: 'char-46', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-23', target: 'char-25', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-157', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-159', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-160', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-10', target: 'char-28', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-2', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-6', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-39', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-39', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-39', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-8', target: 'char-10', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-138', target: 'char-139', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-39', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-33', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-137', target: 'char-140', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-10', target: 'char-144', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-89', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-100', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-89', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-89', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-155', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-4', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-5', target: 'char-48', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-6', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-6', target: 'char-102', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-49', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-112', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-32', target: 'char-35', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-3', target: 'char-23', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-86', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-3', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-7', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-11', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-24', target: 'char-25', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-0', target: 'char-10', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-6', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-6', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-23', target: 'char-26', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-91', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-78', target: 'char-154', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-78', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-78', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-154', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-158', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-158', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-78', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-155', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-156', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-155', target: 'char-160', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-5', target: 'char-32', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-3', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-27', target: 'char-28', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-72', target: 'char-73', type: 'Villainous Associate', typeZh: '狐朋狗友' },
  { source: 'char-42', target: 'char-78', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-72', target: 'char-146', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-39', target: 'char-111', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-39', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-33', target: 'char-143', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-24', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-8', target: 'char-9', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-75', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-14', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-75', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-136', target: 'char-138', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-72', target: 'char-139', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-72', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-0', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-123', target: 'char-147', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-148', target: 'char-149', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-40', target: 'char-154', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-89', target: 'char-150', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-154', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-156', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-86', target: 'char-127', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-87', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-87', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-88', target: 'char-89', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-88', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-89', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-4', target: 'char-102', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-4', target: 'char-46', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-5', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-2', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-112', target: 'char-118', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-48', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-32', target: 'char-37', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-6', target: 'char-121', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-2', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-6', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-7', target: 'char-30', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-4', target: 'char-32', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-42', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-48', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-48', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-49', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-86', target: 'char-87', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-86', target: 'char-96', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-52', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-52', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-4', target: 'char-100', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-86', target: 'char-100', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-89', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-2', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-2', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-2', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-3', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-11', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-12', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-21', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-25', target: 'char-27', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-0', target: 'char-3', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-11', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-11', target: 'char-46', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-38', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-38', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-45', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-45', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-46', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-46', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-45', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-6', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-121', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-104', target: 'char-112', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-5', target: 'char-7', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-78', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-154', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-154', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-154', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-78', target: 'char-110', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-91', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-156', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-10', target: 'char-24', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-24', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-24', target: 'char-73', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-73', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-2', target: 'char-5', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-86', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-10', target: 'char-137', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-14', target: 'char-145', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-45', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-23', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-26', target: 'char-28', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-5', target: 'char-14', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-25', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-4', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-78', target: 'char-111', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-111', target: 'char-157', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-14', target: 'char-39', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-42', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-42', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-42', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-39', target: 'char-121', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-136', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-33', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-118', target: 'char-136', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-39', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-7', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-7', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-11', target: 'char-39', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-10', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-3', target: 'char-144', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-32', target: 'char-138', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-72', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-143', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-137', target: 'char-138', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-72', target: 'char-149', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-39', target: 'char-148', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-33', target: 'char-140', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-4', target: 'char-144', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-7', target: 'char-40', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-7', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-78', target: 'char-89', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-94', target: 'char-155', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-94', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-10', target: 'char-141', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-40', target: 'char-150', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-40', target: 'char-153', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-89', target: 'char-153', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-100', target: 'char-150', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-100', target: 'char-153', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-150', target: 'char-153', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-150', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-153', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-100', target: 'char-156', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-100', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-100', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-156', target: 'char-161', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-20', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-20', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-109', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-102', target: 'char-103', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-4', target: 'char-87', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-4', target: 'char-96', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-6', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-48', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-102', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-2', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-48', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-21', target: 'char-22', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-21', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-22', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-50', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-104', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-104', target: 'char-121', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-104', target: 'char-122', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-32', target: 'char-79', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-32', target: 'char-80', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-79', target: 'char-80', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-32', target: 'char-74', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-32', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-35', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-32', target: 'char-36', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-35', target: 'char-36', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-35', target: 'char-37', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-88', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-6', target: 'char-20', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-86', target: 'char-88', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-87', target: 'char-100', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-96', target: 'char-100', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-100', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-2', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-3', target: 'char-11', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-3', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-3', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-4', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-4', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-9', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-9', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-9', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-10', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-12', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-13', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-11', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-11', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-12', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-13', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-14', target: 'char-62', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-14', target: 'char-63', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-62', target: 'char-63', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-10', target: 'char-23', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-21', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-23', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-118', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-48', target: 'char-61', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-24', target: 'char-26', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-24', target: 'char-27', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-21', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-75', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-38', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-46', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-21', target: 'char-38', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-21', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-21', target: 'char-46', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-6', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-121', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-6', target: 'char-104', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-112', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-9', target: 'char-102', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-20', target: 'char-106', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-102', target: 'char-106', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-4', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-6', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-5', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-5', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-154', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-41', target: 'char-90', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-91', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-110', target: 'char-155', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-110', target: 'char-156', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-23', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-24', target: 'char-32', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-5', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-15', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-73', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-10', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-3', target: 'char-28', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-27', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-28', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-10', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-27', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-28', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-5', target: 'char-49', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-86', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-23', target: 'char-28', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-25', target: 'char-28', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-5', target: 'char-145', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-118', target: 'char-137', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-32', target: 'char-146', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-14', target: 'char-32', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-14', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-33', target: 'char-45', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-14', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-145', target: 'char-146', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-39', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-8', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-124', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-24', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-4', target: 'char-25', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-5', target: 'char-8', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-8', target: 'char-14', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-45', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-23', target: 'char-39', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-111', target: 'char-158', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-111', target: 'char-159', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-24', target: 'char-39', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-24', target: 'char-78', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-14', target: 'char-42', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-72', target: 'char-157', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-42', target: 'char-160', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-42', target: 'char-121', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-11', target: 'char-143', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-48', target: 'char-72', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-11', target: 'char-33', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-42', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-4', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-7', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-7', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-8', target: 'char-15', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-8', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-8', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-8', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-9', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-9', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-10', target: 'char-49', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-10', target: 'char-51', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-10', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-15', target: 'char-48', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-5', target: 'char-9', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-15', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-26', target: 'char-29', type: 'Theatrical Colleague', typeZh: '同台伶人' },
  { source: 'char-118', target: 'char-144', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-7', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-5', target: 'char-106', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-11', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-6', target: 'char-75', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-11', target: 'char-146', type: 'Patron & Performer', typeZh: '名士与伶人' },
  { source: 'char-75', target: 'char-146', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-75', target: 'char-118', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-72', target: 'char-123', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-118', target: 'char-123', type: 'Household Staff', typeZh: '同府仆从' },
  { source: 'char-2', target: 'char-52', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-136', target: 'char-139', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-39', target: 'char-158', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-72', target: 'char-148', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-42', target: 'char-148', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-42', target: 'char-149', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-9', target: 'char-86', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-15', target: 'char-17', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-137', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-72', target: 'char-145', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-75', target: 'char-145', type: 'Antagonistic Tie', typeZh: '结怨/算计' },
  { source: 'char-3', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-3', target: 'char-141', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-50', target: 'char-142', type: 'Official Colleague', typeZh: '同朝为官' },
  { source: 'char-142', target: 'char-154', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-8', target: 'char-144', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-10', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-45', target: 'char-88', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-11', target: 'char-142', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-0', target: 'char-7', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-0', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-2', target: 'char-8', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-7', target: 'char-50', type: 'Official & Scholar', typeZh: '官员与名士' },
  { source: 'char-7', target: 'char-100', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-48', target: 'char-100', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-25', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-78', target: 'char-94', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-78', target: 'char-109', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-94', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-94', target: 'char-161', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-40', target: 'char-78', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-141', target: 'char-135', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-9', target: 'char-150', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-89', target: 'char-110', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-89', target: 'char-137', type: 'Family/Household', typeZh: '家属/内眷' },
  { source: 'char-110', target: 'char-154', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-89', target: 'char-94', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-94', target: 'char-100', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-94', target: 'char-154', type: 'Female Companion', typeZh: '闺阁女伴' },
  { source: 'char-89', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-100', target: 'char-159', type: 'Master & Servant', typeZh: '主仆/雇佣' },
  { source: 'char-24', target: 'char-137', type: 'Acquaintance', typeZh: '相识' },
  { source: 'char-141', target: 'char-144', type: 'Literary Peer', typeZh: '同好文人' },
  { source: 'char-4', target: 'char-141', type: 'Literary Peer', typeZh: '同好文人' },
];

export const relationships: Relationship[] = (() => {
  const seen = new Set<string>();
  const result: Relationship[] = [];
  const manual = buildValidatedRelationshipsFromSpecs(chapterValidatedRelationshipSpecs);
  const allCandidates = [...baseRelationships, ...manual, ...generatedRelationships];

  for (const rel of allCandidates) {
    const source = idRemap[rel.source] || rel.source;
    const target = idRemap[rel.target] || rel.target;
    if (source === target) continue;

    const sourceExists = characters.some((c) => c.id === source);
    const targetExists = characters.some((c) => c.id === target);
    if (!sourceExists || !targetExists) continue;

    const normalized =
      source < target
        ? { ...rel, source, target }
        : { ...rel, source: target, target: source };

    const key = relationshipKey(normalized);
    if (seen.has(key)) continue;

    seen.add(key);
    result.push(normalized);
  }

  return result;
})();
