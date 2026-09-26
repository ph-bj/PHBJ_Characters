/** Chapter 2, paragraphs 1–17: Wei Pincai and Li Yuanmao arrive, and Pincai's night talk of Qinguan. Build with `npm run build-cinemas -- 2`. */
import type { Spec } from '../write';

// Beat shorthands, written into scene.ts as code.
const T = (o: string) => `T({ ${o} })`;
const lines = (...l: string[]) => `lines: [${l.map(s => `'${s}'`).join(', ')}]`;
const words = (...l: [string, number, string?][]) => `wordsBeat([${l.map(([text, at, red]) => `{ text: '${text}', at: ${at}${red ? `, red: '${red}'` : ''} }`).join(', ')}])`;
/** Ziyu and Pincai talking by lamplight at a small table. */
const night = (pincai: string, ziyu: string, extra = '') => T(`place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9${pincai ? `, { cues: ${pincai} }` : ''}), who.ziyu(1.1${ziyu ? `, { cues: ${ziyu} }` : ''})]${extra}`);
const talk = `[[0.4, 'speaking']]`;

export const specs: Spec[] = [
  {
    n: 1, title: ['Two red calling cards', '两个红帖'],
    description: ['Ziyu comes home to find Wang Wenhui with his father, talking of the spring gathering and a match for Qionghua, when two visiting cards arrive from the south.', '子玉回家，王文辉正与梅学士谈同年团拜、琼华亲事；忽有家乡来的两个红帖。'],
    staging: 'Ziyu’s cart at the gate, the fathers in the study, Wenhui with Lady Yan, and the two red cards',
    shots: [
      [0, 8, 'A carriage and three horses', '一车三马', '到了家，见门口一车三马，认得王通政的家人', 'Ziyu rides home still dreaming of the boy; at his gate stand Commissioner Wang’s carriage and horses.', '子玉一路想那绝色美童；到家见门口一车三马，知道王通政在此。'],
      [8, 17, 'The spring gathering', '开春同年团拜', '开春同年团拜，已定了联锦班，在姑苏会馆唱戏。', 'Wenhui has booked the Lianjin troupe at the Suzhou Guild Hall for the spring gathering of their examination year.', '文辉说开春同年团拜，已定了联锦班在姑苏会馆唱戏。'],
      [17, 27, 'A match for Qionghua', '琼华尚未字人', '即提起他次女琼华十六岁了，尚未字人，托士燮留心物色。', 'With Lady Yan, Wenhui asks Shixie to look for a husband for his daughter Qionghua, sixteen.', '文辉托士燮为十六岁的琼华物色女婿。'],
      [27, 36, 'Two red cards', '两个红帖', '一个全帖上写着：世愚侄魏聘才；一个写着：门下晚学生李元茂。', 'A maid brings two red cards: “Your humble nephew Wei Pincai” and “Your devoted later student Li Yuanmao.”', '仆妇呈上两个红帖：世愚侄魏聘才，门下晚学生李元茂。'],
    ],
    beats: [
      T(`place: 'gate', cast: [{ kind: 'cart', x: 3.4, flip: true }, { kind: 'horse', x: 6.2, h: 2.8, flip: true }, { kind: 'cart', x: -12, walk: [-12, -2.6, 0.3, 6] }]`),
      T(`place: 'study', table: { x: -0.8, w: 6 }, cast: [who.shixie(-2.4, { cues: [[5, 'speaking']] }), who.wenhui(0.6, { cues: [[0.4, 'speaking'], [5, 'still']] }), who.ziyu(3.4, { gesture: 'bow' })], linesSide: 'left', ${lines('姑苏会馆', '联锦班')}`),
      T(`place: 'hall', cast: [who.lady(-3, { cues: [[6, 'speaking']] }), who.wenhui(-0.6, { cues: [[0.4, 'speaking'], [6, 'still']] }), who.shixie(1.8, { cues: [[3.4, 'speaking'], [6, 'still']] })], ${lines('尚未字人', '琼华十六')}`),
      T(`place: 'hall', cast: [who.maid(7, { walk: [7, 2.8, 0.2, 2], flip: true, gesture: 'offering', until: 3 }), who.shixie(-3.4, { cues: [[2.4, 'reading']] })], props: [{ kind: 'card', x: -1.2, y: 1.2, s: 3, text: '魏聘才', from: 2.4 }, { kind: 'card', x: 1, y: 1.2, s: 3, text: '李元茂', from: 3 }]`),
    ],
    subtitles: [
      [0.4, 4, '话说子玉在车里，一路想那所见的绝色美童。', 'Ziyu rode home, his mind lingering on the exquisite youths he had glimpsed.'],
      [4, 7.6, '到了家，见门口一车三马，认得王通政的家人。', 'At the gate stood a carriage and three horses: Commissioner Wang was within.'],
      [8.4, 12.6, '文辉道：「开春同年团拜，已定了联锦班，在姑苏会馆唱戏。', 'Wenhui said: “For the spring gathering, the Lianjin troupe is engaged at the Suzhou Guild Hall.'],
      [12.6, 16.6, '这回只怕人不多，大约不过三四桌人。」', 'I fear attendance will be sparse—no more than three or four tables.”'],
      [17.4, 22, '文辉又到里头见了颜夫人，提起他次女琼华十六岁了，尚未字人，', 'In the inner chambers he mentioned that his daughter Qionghua, sixteen, was not yet betrothed,'],
      [22, 26.6, '托士燮留心物色。士燮道：「择女婿也是一件难事。」', 'and asked Shixie to find a match. “Choosing a son-in-law is a daunting task,” said Shixie.'],
      [27.4, 31, '只见一个仆妇，手里拿着两个红帖走进二门。', 'A maidservant came through the middle gate bearing two red calling cards.'],
      [31, 35.6, '一个写着：世愚侄魏聘才；一个写着：门下晚学生李元茂。', 'One read “Your humble nephew, Wei Pincai”; the other, “Your devoted later student, Li Yuanmao.”'],
    ],
  },
  {
    n: 2, title: ['Old Wei’s son', '魏老仁的儿子'],
    description: ['Shixie puzzles over the cards; Wenhui guesses the nephew is the son of Wei Laoren, a clever man turned scoundrel scholar.', '士燮不解名帖；文辉猜是魏老仁之子，其父聪明而成了泼皮秀才。'],
    staging: 'the two officials over the cards, and old Wei remembered',
    shots: [
      [0, 16, 'A peculiar title', '这称呼是小门生', '这称呼是小门生，不知那里来的？这魏聘才又是谁呢？', 'Shixie puzzles over the titles; Wenhui guesses: the son of Wei Laoren?', '士燮不解称呼；文辉道：不要是魏老仁的儿子么？'],
      [16, 36, 'A scoundrel of a scholar', '泼皮秀才', '就是阴骘损多了，成了个泼皮秀才。', 'Old Wei was sharp enough to pass any examination, but spent his virtue and became a scoundrel scholar.', '老魏原是上等聪明人，只是阴骘损多了，成了泼皮秀才。'],
    ],
    beats: [
      T(`place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.shixie(-2.2, { gesture: 'reading', cues: [[6, 'thinking']] }), who.wenhui(1, { cues: [[7, 'speaking']] })], ${lines('小门生', '世愚侄')}`),
      T(`place: 'study', table: { x: -0.6, w: 6.2 }, cast: [{ kind: 'pedant', x: -4.8, opacity: 0.35 }, who.shixie(-2.2, { cues: [[0.4, 'speaking'], [9, 'still']] }), who.wenhui(1, { cues: [[9, 'speaking'], [15, 'laughing']] })], ${lines('泼皮秀才')}`),
    ],
    subtitles: [
      [0.4, 5, '士燮道：「这称呼是小门生，不知那里来的？这魏聘才又是谁呢？」', 'Shixie: “‘Your devoted later student’—where is he from? And who is this Wei Pincai?”'],
      [5, 10, '王文辉道：「世愚侄，不要是魏老仁的儿子么？」', 'Wang Wenhui: “‘Humble nephew’—could it be the son of Wei Laoren?”'],
      [10, 15.6, '士燮道：「只怕是的，今年夏间接着老仁的信，托我收留照应。」', 'Shixie: “I suspect so. This summer Laoren wrote, entrusting his son to my care.”'],
      [16.4, 22, '「若论老魏人品，实在下作，惟在你我面上，还算有点真情。」', '“Old Wei’s character is despicable; only for our old ties does any goodwill remain.”'],
      [22, 28.6, '文辉道：「若论老魏，原是个上等聪明人，要发科甲也很可发的，', 'Wenhui: “Old Wei had a first-rate mind and could well have passed the examinations,'],
      [28.6, 35.6, '就是阴骘损多了，成了个泼皮秀才。」', 'but he spent his hidden virtue and became a scoundrel of a scholar.”'],
    ],
  },
  {
    n: 3, title: ['Bound by duty', '义无所辞'],
    description: ['Wenhui says Shixie cannot turn the boy away; the servant Mei Jin confirms who the visitors are.', '文辉说老弟义无所辞；梅进问明来人。'],
    staging: 'Wenhui’s advice, and the servant Mei Jin receiving orders',
    shots: [
      [0, 18, 'Duty-bound', '义无所辞', '既是他儿子远来投奔，老弟也是义无所辞的。', 'Since the son has come so far, Shixie cannot well refuse him.', '既是远来投奔，老弟义无所辞。'],
      [18, 36, 'Mei Jin', '梅进', '士燮叫梅进进来问了，果然是他。一个是西席李先生之子。', 'The servant Mei Jin confirms it: Wei Laoren’s son, and the son of Ziyu’s tutor, Mr. Li.', '梅进问明：果然是魏家之子；另一个是西席李先生之子。'],
    ],
    beats: [
      T(`place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.shixie(-2.2), who.wenhui(1, { cues: ${talk} })], ${lines('义无所辞')}`),
      T(`place: 'study', cast: [who.shixie(-2, { cues: [[5, 'speaking']] }), who.servant(8, { walk: [8, 1.2, 0.3, 4], flip: true, cues: [[4.2, 'bow']] })], ${lines('西席之子', '梅进')}`),
    ],
    subtitles: [
      [0.4, 17.6, '既是他儿子远来投奔，老弟也是义无所辞的。', '“Since his son has come so far to seek refuge, you are bound by duty and cannot turn him away.”'],
      [18.4, 27, '士燮叫梅进进来问了，果然是他。', 'Shixie summoned Mei Jin to verify, and indeed it was he.'],
      [27, 35.6, '一个是西席李先生之子。吩咐梅进：', 'The other was the son of Mr. Li, the resident tutor. He instructed Mei Jin:'],
    ],
  },
  {
    n: 4, title: ['To the flower hall', '请到花厅'],
    description: ['The visitors are shown to the flower hall; Wenhui leaves, and Shixie strolls in through the hanging-flower gate.', '请客人花厅坐；文辉告辞，士燮踱进花厅。'],
    staging: 'Wenhui seen off at the gate, and Shixie entering the flower hall',
    shots: [
      [0, 14, 'Wenhui takes his leave', '文辉告辞', '文辉也就起身告辞，士燮送到门口', '“Seat them in the flower hall; I shall be out shortly.” Wenhui leaves, and Shixie sees him to the gate.', '「请他们在花厅上坐。」文辉告辞，士燮送到门口。'],
      [14, 36, 'The hanging-flower gate', '垂花门', '转身到花厅垂花门首……遂即踱进花厅。', 'Shixie turns back through the hanging-flower gate, sends for his son, and strolls into the hall.', '士燮转到垂花门首，叫人去请少爷，踱进花厅。'],
    ],
    beats: [
      T(`place: 'gate', cast: [who.shixie(1.4, { gesture: 'bow' }), who.wenhui(-0.6, { walk: [-0.6, -9, 3, 10], flip: true, cues: [[0.4, 'bow']] })]`),
      T(`place: 'flower-hall', cast: [who.shixie(7, { walk: [7, 0.4, 0.4, 9], flip: true }), who.servant(0.4, { walk: [0.4, 9, 2, 7] })]`),
    ],
    subtitles: [
      [0.4, 6, '「请他们在花厅上坐，说我就出来。」', '“Invite them to sit in the flower hall; tell them I shall be out shortly.”'],
      [6, 13.6, '文辉也就起身告辞，士燮送到门口，', 'Wenhui rose to take his leave; Shixie saw him to the door,'],
      [14.4, 25, '转身到花厅垂花门首，即叫跟班的到书房去请少爷出来，', 'turned back to the hanging-flower gate, and sent an attendant to summon the young master,'],
      [25, 35.6, '遂即踱进花厅。', 'before strolling into the hall.'],
    ],
  },
  {
    n: 5, title: ['Two ways to kowtow', '两样叩头'],
    description: ['Nimble Pincai kowtows with a smile; heavy, short-sighted Yuanmao bows four times as if before a temple altar.', '伶俐的聘才满面笑容叩头；笨浊近视的元茂如拜神般拜了四拜。'],
    staging: 'the two visitors side by side, Pincai’s kowtow, and Yuanmao’s four temple bows',
    shots: [
      [0, 10, 'Slight and bright, heavy and sallow', '瘦小伶俐，笨浊微黄', '只见上首站的一个少年，身材瘦小，面目伶俐；下首一个身材笨浊', 'One is slight with bright, alert features; the other heavy, sallow, thick-browed and short-sighted.', '上首的瘦小伶俐；下首的笨浊微黄，浓眉近视。'],
      [10, 22, 'Pincai kowtows', '跪下叩头', '那上首的跄步上前，满面笑容，口称老伯，就跪下叩头。', 'Pincai steps forward all smiles, calls him Uncle and kowtows: the very image of his father.', '聘才满面笑容，口称老伯，跪下叩头。'],
      [22, 36, 'As if worshipping the gods', '如拜神的拜了四拜', '李元茂已高高的作了一个揖，然后徐徐跪下，如拜神的拜了四拜。', 'Yuanmao raises his hands high, kneels slowly and bows four times as at a temple, then mumbles something no one understands.', '元茂高高作揖，徐徐跪下，如拜神的拜了四拜，咕噜一句听不明白。'],
    ],
    beats: [
      T(`place: 'flower-hall', cast: [who.pincai(-1.8, { cues: [[1, 'laughing'], [3, 'still']] }), who.yuanmao(1.2, { gesture: 'thinking' })], ${lines('浓眉近视', '面目伶俐')}`),
      T(`place: 'flower-hall', cast: [who.pincai(-0.6, { cues: [[0.4, 'bow'], [2, 'kowtow'], [8, 'speaking']] }), who.shixie(2.6, { flip: true, cues: [[3, 'bow'], [7, 'speaking']] }), who.yuanmao(-3.6)]`),
      T(`place: 'flower-hall', cast: [who.yuanmao(-0.6, { cues: [[0.4, 'bow'], [3, 'kneel'], [4.6, 'kowtow'], [11, 'speaking']] }), who.shixie(2.6, { flip: true, cues: [[9.4, 'bow'], [11, 'still']] }), who.pincai(-3.6, { cues: [[6, 'laughing']] })]`),
    ],
    subtitles: [
      [0.4, 5, '只见上首站的一个少年，身材瘦小，面目伶俐；', 'At the upper end stood a young man, slight of build with bright, alert features;'],
      [5, 9.6, '下首一个身材笨浊，面色微黄，浓眉近视，二十几岁光景。', 'at the lower end another, heavy and sallow, thick-browed and short-sighted, in his twenties.'],
      [10.4, 15.6, '那上首的跄步上前，满面笑容，口称老伯，就跪下叩头。', 'The first stepped forward all smiles, called him “Uncle,” and kowtowed deeply.'],
      [15.6, 21.6, '士燮还礼不迭：「老世台的尊范，与令尊竟是一模一样。」', 'Shixie hastily returned the courtesy: “You are the very image of your father.”'],
      [22.4, 28, '李元茂已高高的作了一个揖，然后徐徐跪下，如拜神的拜了四拜。', 'Li Yuanmao raised his hands high, slowly knelt, and bowed four times as though at a temple altar.'],
      [28, 31.6, '士燮两手扶起：「你令尊正盼望你来，一路辛苦了。」', 'Shixie helped him up: “Your father has been eagerly awaiting you. You must be tired.”'],
      [31.6, 35.6, '那李元茂掀唇动齿的咕噜了一句，也听不明白。', 'Li Yuanmao moved his lips in a mumble that was entirely unintelligible.'],
    ],
  },
  {
    n: 6, title: ['Rooms behind the study', '书房后身两间屋子'],
    description: ['Ziyu greets the guests and leads them to his tutor; the servant Xu Shun is told to ready two rooms behind the study.', '子玉见礼，引二人去书房；许顺收拾书房后身两间屋子。'],
    staging: 'Ziyu greeting the guests, and Ziyu leading them off while Xu Shun takes his orders',
    shots: [
      [0, 14, 'Ziyu comes out', '子玉出来', '子玉出来，见过了礼，士燮即叫子玉引元茂去见他父亲', 'Ziyu comes out and exchanges greetings; his father tells him to take Yuanmao to his father, the tutor.', '子玉出来见礼；士燮叫他引元茂去见父亲。'],
      [14, 36, 'Two rooms prepared', '收拾两间屋子', '士燮吩咐家人许顺，收拾书房后身另院的两间屋子', 'Ziyu leads the two off; the servant Xu Shun is told to prepare two rooms in the courtyard behind the study.', '子玉引二人去书房；许顺收拾书房后身另院两间屋子。'],
    ],
    beats: [
      T(`place: 'flower-hall', cast: [who.shixie(-3, { cues: [[5, 'speaking']] }), who.pincai(-1, { gesture: 'bow' }), who.yuanmao(0.8, { gesture: 'bow' }), who.ziyu(8, { walk: [8, 3, 0.4, 4.4], flip: true, cues: [[4.6, 'bow']] })]`),
      T(`place: 'gate', cast: [who.servant(-3.4, { gesture: 'bow' }), who.ziyu(-0.6, { walk: [-0.6, 9, 2, 12] }), who.pincai(-2, { walk: [-2, 7.6, 2.4, 12.4] }), who.yuanmao(-3.4, { walk: [-3.4, 6.2, 3, 13], from: 2.6 })], ${lines('另院两间', '书房后身')}`),
    ],
    subtitles: [
      [0.4, 7, '士燮问了他父母好。子玉出来，见过了礼，', 'Shixie inquired after his parents. Ziyu came out and exchanged greetings,'],
      [7, 13.6, '士燮即叫子玉引元茂去见他父亲。', 'and Shixie told him to take Yuanmao to see his father.'],
      [14.4, 22, '子玉即同了元茂、聘才到书房去了。', 'Ziyu led Yuanmao and Pincai to the study.'],
      [22, 35.6, '士燮吩咐家人许顺，收拾书房后身另院的两间屋子，给他们暂且住下。', 'Shixie ordered the servant Xu Shun to prepare two rooms behind the study for them.'],
    ],
  },
  {
    n: 7, title: ['The luggage', '搬取行李'],
    description: ['Shixie has the visitors’ luggage fetched, then retires to the main house.', '士燮吩咐搬取行李，才到上房去了。'],
    staging: 'servants carrying the luggage in, and Shixie retiring',
    shots: [
      [0, 18, 'Fetching the luggage', '搬取行李', '又吩咐同了他们的来人，去搬取行李', 'Servants go with the visitors’ man to bring in the luggage.', '吩咐同他们的来人去搬取行李。'],
      [18, 36, 'To the main house', '到上房去了', '才到上房去了。', 'Then Shixie goes to the main residence.', '士燮才到上房去了。'],
    ],
    beats: [
      T(`place: 'gate', cast: [who.servant(8, { walk: [8, -9, 0.5, 12], flip: true, gesture: 'offering' }), who.servant(9.6, { walk: [9.6, -7.4, 1.4, 13], flip: true, gesture: 'offering' }), who.page(11, { walk: [11, -6, 2.4, 14], flip: true, gesture: 'offering' })]`),
      T(`place: 'hall', cast: [who.shixie(1.6, { walk: [1.6, -9, 1, 13], flip: true })]`),
    ],
    subtitles: [
      [0.4, 17.6, '又吩咐同了他们的来人，去搬取行李，', 'He further directed their attendant to retrieve their luggage,'],
      [18.4, 35.6, '才到上房去了。', 'before retiring to the main residence.'],
    ],
  },
  {
    n: 8, title: ['“Do you still know me?”', '世兄可还认得小弟么'],
    description: ['Yuanmao greets his father; over tea Pincai reminds Ziyu how, at five, he clung to Pincai’s sash at the dock; at dinner Pincai praises Yuanmao.', '元茂拜见父亲；聘才茶叙中提起子玉五岁时在船边拉住他腰带；席间聘才夸赞元茂。'],
    staging: 'the tutor and his son, tea in the boat-room, a remembered quayside, and dinner',
    shots: [
      [0, 9, 'Father and son', '先生父子', '性全已知道他儿子来了，等他叩见过了', 'Yuanmao kowtows to his father, the tutor Li Xingquan; Pincai declines the seat of honor.', '元茂叩见父亲李性全；聘才不肯上坐。'],
      [9, 19, 'Tea in the boat-room', '船房内坐下', '就引聘才到对面船房内坐下……「世兄可还认得小弟么？」', 'Ziyu takes Pincai to the boat-shaped annex for tea. “Do you still know me?”', '子玉引聘才到船房吃茶。聘才：「世兄可还认得小弟么？」'],
      [19, 27, 'Clinging to his sash', '双手拉住了腰带', '世兄双手拉住了腰带，定要叫小弟同伴进京', 'At five, seeing Pincai off at the boat, Ziyu clung to his sash and would not let go.', '子玉五岁时在船上双手拉住聘才腰带，定要他同伴进京。'],
      [27, 36, 'Dinner in the study', '同到书房吃饭', '席间性全问起一路来的光景……那李元茂闷着头不敢言语。', 'At dinner Pincai praises Yuanmao to his father, while Yuanmao keeps his head down and says nothing.', '席间聘才夸赞元茂；元茂闷着头不敢言语。'],
    ],
    beats: [
      T(`place: 'study', cast: [who.teacher(-2.4), who.yuanmao(0.2, { cues: [[0.4, 'kneel'], [1.6, 'kowtow'], [6, 'still']] }), who.pincai(2.6, { gesture: 'bow' })]`),
      T(`place: 'study', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9, { cues: [[1, 'laughing'], [4, 'speaking']] }), who.ziyu(1.1, { cues: [[6, 'thinking']] }), who.page(8, { walk: [8, 3.6, 0.2, 2.6], flip: true, gesture: 'offering', until: 4 })]`),
      T(`place: 'canal', cast: [who.lady(-3.2, { opacity: 0.6 }), who.page(-1, { h: 3, gesture: 'tugging', opacity: 0.75 }), who.pincai(0.6, { opacity: 0.75, gesture: 'laughing' })], ${lines('送到船上', '那一年')}`),
      T(`place: 'study', table: { x: 0, w: 8 }, cast: [who.teacher(-2.8, { cues: [[0.4, 'speaking'], [5, 'still']] }), who.pincai(-1, { cues: [[5, 'speaking']] }), who.yuanmao(0.9, { gesture: 'bow' }), who.ziyu(2.8)]`),
    ],
    subtitles: [
      [0.4, 4.6, '子玉引李、魏二人到了书房，性全已知道他儿子来了，等他叩见过了，', 'In the study, Li Xingquan received his son’s filial kowtow,'],
      [4.6, 8.6, '然后与魏聘才见礼，性全让他上坐，聘才只是不肯。', 'then greeted Wei Pincai and offered him the seat of honor, which Pincai declined.'],
      [9.4, 14, '子玉就引聘才到对面船房内坐下，云儿与俊儿送了茶。', 'Ziyu took Pincai to the boat-shaped annex, where Yun’er and Jun’er served tea.'],
      [14, 18.6, '聘才笑道：「世兄可还认得小弟么？」子玉道：「面善的很，实在想不起了。」', '“Do you still recognize me?” “Your face is familiar, but I cannot place you.”'],
      [19.4, 23.4, '「那一年，世兄同着老伯母进京，小弟送到船上。世兄双手拉住了腰带，', '“The year you came to the capital with your mother, I saw you off at the boat. You clung to my sash,'],
      [23.4, 26.6, '定要叫小弟同伴进京。」子玉笑道：「那时弟只得五岁。」', 'insisting I come along.” Ziyu smiled: “I was only five then.”'],
      [27.4, 31.6, '席间性全问起一路来的光景，聘才又赞了元茂许多好处。', 'Over dinner the tutor asked about the journey, and Pincai praised Yuanmao at length.'],
      [31.6, 35.6, '性全也觉喜欢。那李元茂闷着头不敢言语。', 'The tutor was gratified; Li Yuanmao kept his head bowed, not daring to speak.'],
    ],
  },
  {
    n: 9, title: ['Rest early', '早些安歇罢'],
    description: ['After tea, Pincai takes the sleepy Yuanmao to their rooms; Ziyu sees them settled and goes back with a lantern.', '茶后聘才领元茂回房安歇，子玉送他们进屋，叫俊儿提灯回上房。'],
    staging: 'tea in the study, and the guests’ room at night',
    shots: [
      [0, 14, 'Talk of the south', '南边年岁光景', '喝了一会茶，说了些南边年岁光景', 'Over tea they talk of the south; Pincai knows Yuanmao cannot stay up late.', '喝茶说些南边光景；聘才知元茂不能熬夜。'],
      [14, 36, '“Rest early”', '早些安歇罢', '子玉送他们进屋，见已铺设好了，说声：「早些安歇罢！」', 'Ziyu sees them to their room, bids them rest early, and goes back by lantern light.', '子玉送他们进屋，说声「早些安歇罢」，叫俊儿提灯回上房。'],
    ],
    beats: [
      T(`place: 'study', table: { x: -0.4, w: 7 }, cast: [who.teacher(-2.6), who.pincai(-0.6, { cues: ${talk} }), who.yuanmao(1.4, { gesture: 'thinking' }), who.ziyu(3.2)]`),
      T(`place: 'night-room', cast: [who.pincai(-2.6, { gesture: 'bow' }), who.yuanmao(-0.9, { gesture: 'thinking' }), who.ziyu(1.2, { cues: [[1, 'speaking'], [7, 'bow']], walk: [1.2, 9.6, 9.4, 16] }), who.page(3, { walk: [3, 9, 9, 16] })]`),
    ],
    subtitles: [
      [0.4, 7, '喝了一会茶，说了些南边年岁光景，', 'They lingered over tea, talking of affairs in the south.'],
      [7, 13.6, '聘才知道元茂不能熬夜，起身告辞。', 'Pincai, knowing Yuanmao could not abide late hours, rose to take his leave.'],
      [14.4, 22, '子玉送他们进屋，见已铺设好了，说声：「早些安歇罢！」', 'Ziyu saw them to their room, all arranged, and said, “Rest early!”'],
      [22, 35.6, '也就叫俊儿提灯，照进上房去了。', 'Then he had Jun’er light a lantern and went back to the main house.'],
    ],
  },
  {
    n: 10, title: ['Everyone speaks well of him', '满宅的人都说他好'],
    description: ['The visitors present gifts and letters to Lady Yan; Pincai is given a letter for Wang Wenhui; within ten days his clever tongue has charmed the household.', '二人拜见颜夫人，呈上土仪书信；聘才另有致王文辉一信；不到十天满宅都说他好。'],
    staging: 'gifts for Lady Yan, a letter for Wenhui, and the household charmed',
    shots: [
      [0, 12, 'Gifts from the south', '南边带来的土仪', '次日聘才、元茂到上屋去拜见了颜夫人，又将南边带来的土仪……呈上', 'Next day they pay respects to Lady Yan and present gifts from the south and their fathers’ letters.', '次日二人拜见颜夫人，呈上土仪与书信。'],
      [12, 24, 'A letter for Wenhui', '致王文辉一信', '另有致王文辉一信，士燮叫他迟日亲自送去。', 'One letter is for Wang Wenhui; Shixie tells Pincai to deliver it himself.', '另有致王文辉一信，士燮叫他亲自送去。'],
      [24, 36, 'A thousand nimble tricks', '千伶百俐', '这一张嘴，真个千伶百俐，善于哄骗……满宅的人都说他好。', 'Pincai’s tongue has a thousand tricks; within ten days everyone in the house sings his praises.', '聘才一张嘴千伶百俐，不到十天满宅的人都说他好。'],
    ],
    beats: [
      T(`place: 'hall', cast: [who.lady(1.6, { cues: [[6, 'speaking']] }), who.pincai(-1, { cues: [[0.4, 'kneel'], [1.2, 'kowtow'], [6, 'bow']] }), who.yuanmao(-3, { cues: [[0.8, 'kneel'], [1.8, 'kowtow'], [6, 'bow']] })], props: [{ kind: 'gifts', x: 0.2, y: 0, s: 1.4, from: 5 }]`),
      T(`place: 'study', cast: [who.shixie(-1.8, { cues: [[1, 'handing'], [6, 'speaking']] }), who.pincai(1, { flip: true, cues: [[0.4, 'bow'], [3, 'reading']] })], ${lines('致王文辉一信')}`),
      T(`place: 'gate', cast: [who.maid(-3.4, { cues: [[3, 'speaking']] }), who.pincai(-1.2, { cues: [[0.4, 'speaking'], [6, 'laughing']] }), who.servant(0.8, { flip: true, cues: [[2, 'laughing']] }), who.page(2.4, { flip: true })], ${lines('善于哄骗', '千伶百俐')}`),
    ],
    subtitles: [
      [0.4, 6, '次日聘才、元茂到上屋去拜见了颜夫人，', 'The next day Pincai and Yuanmao paid their respects to Lady Yan,'],
      [6, 11.6, '又将南边带来的土仪与他父亲的书信一并呈上。', 'presenting gifts from the south along with their fathers’ letters.'],
      [12.4, 23.6, '另有致王文辉一信，士燮叫他迟日亲自送去。', 'One letter was addressed to Wang Wenhui; Shixie told Pincai to deliver it himself.'],
      [24.4, 29, '这聘才本是个聪明人，这一张嘴，真个千伶百俐，善于哄骗，', 'Pincai was clever, and his tongue had a thousand nimble tricks for charming and cajoling;'],
      [29, 32.6, '所以在梅宅不到十天，满宅的人都说他好。', 'within ten days, the whole Mei household sang his praises.'],
      [32.6, 35.6, '子玉虽与其两道，然觉此人也无可厌处。', 'Though of a different bent, Ziyu found him far from disagreeable.'],
    ],
  },
  {
    n: 11, title: ['Talk by lamplight', '灯下闲谈'],
    description: ['One evening, with Yuanmao asleep, Pincai asks Ziyu about the capital’s famous young actors.', '一日晚上元茂睡了，聘才与子玉闲谈京中小旦。'],
    staging: 'Ziyu and Pincai at a lamp-lit table',
    shots: [
      [0, 14, 'One evening', '一日晚上', '一日晚上，元茂睡了，子玉与聘才闲谈。', 'One evening, while Yuanmao sleeps, Ziyu and Pincai sit talking.', '一日晚上，元茂睡了，子玉与聘才闲谈。'],
      [14, 36, 'The xianggong', '称呼相公', '京里的戏是甲于天下的。我听得说那些小旦称呼相公，好不扬气。', 'Pincai: the capital’s theatre is the finest in the land, and its young dan, called xianggong, carry themselves so grandly.', '聘才：京里的戏甲于天下，小旦称呼相公，好不扬气。'],
    ],
    beats: [
      night('', ''),
      night(`[[0.4, 'speaking']]`, `[[9, 'thinking']]`, `, ${lines('相公')}`),
    ],
    subtitles: [
      [0.4, 13.6, '一日晚上，元茂睡了，子玉与聘才闲谈。', 'One evening, while Yuanmao slept, Ziyu and Pincai sat chatting.'],
      [14.4, 24, '聘才问道：「京里的戏是甲于天下的。', 'Pincai asked: “The theatre of the capital is the finest beneath heaven.'],
      [24, 35.6, '我听得说那些小旦称呼相公，好不扬气。」', 'I hear the young dan, addressed as xianggong, carry themselves with such an air.”'],
    ],
  },
  {
    n: 12, title: ['Immortals banished to earth', '神仙落劫'],
    description: ['Pincai tells of the long canal voyage north with a troupe master and ten boys bought in Suzhou—and of Qiguan, fourteen, fragile as blended rouge.', '聘才讲与戏班同船北上四个多月，及琪官年十四，颜色如花粉和胭脂。'],
    staging: 'the talk by lamplight, the troupe boats on the Grand Canal, the boys rehearsing, and Qiguan',
    shots: [
      [0, 9, 'Princes sit beside them', '王公大人并起并坐', '就是王公大人，也与他们并起并坐。', 'Pincai hears that princes sit with the actors as equals; Ziyu says he knows little of such things.', '聘才听说王公大人与小旦并起并坐；子玉说不出门，不大知道。'],
      [9, 18, 'Four months on the canal', '运河里走了四个多月', '用两个太平船，由水路进京……就走了四个多月。', 'A troupe master bought ten boys in Suzhou and brought them north by canal; Pincai and Yuanmao rode along—four months among the grain barges.', '教师在苏州买了十个孩子，由水路进京；聘才搭船同行，走了四个多月。'],
      [18, 27, 'Rehearsing every day', '天天的学戏', '见他们天天的学戏，倒也听会了许多。', 'Every day the boys rehearsed under the master Ye Maolin.', '孩子们天天学戏，教师叶茂林是苏州人。'],
      [27, 36, 'Qiguan', '琪官', '一个小旦叫琪官，年十四岁。他的颜色就像花粉和了胭脂水', 'Qiguan, fourteen: his coloring like rouge and powder blended, fragile enough to break at a touch, his voice clearer than an oriole’s.', '琪官年十四，颜色如花粉和胭脂，一弹就破，唱起来比黄鹂还清脆。'],
    ],
    beats: [
      night(`[[0.4, 'speaking'], [5, 'still']]`, `[[5, 'laughing']]`),
      T(`place: 'canal', ${lines('四个多月', '由水路进京')}`),
      T(`place: 'canal', cast: [{ kind: 'elder', x: -3.2 }, { kind: 'dan', x: -1, h: 3.8, pose: DAN_POSES[2] }, { kind: 'dan', x: 0.8, h: 3.6, pose: DAN_POSES[5] }], ${lines('天天学戏')}`),
      `portraitBeat(QIGUAN, ['琪官', '年十四岁', '一弹就破', '声胜黄鹂'])`,
    ],
    subtitles: [
      [0.4, 4.6, '「就是王公大人，也与他们并起并坐，是有的么？」', '“Is it true that even princes share their tables as equals?”'],
      [4.6, 8.6, '子玉笑道：「或者有之，但我不出门，所以也不大知道。」', 'Ziyu laughed: “Perhaps, but I rarely go out and know little of it.”'],
      [9.4, 13.6, '「如今出了两个小旦，竟是神仙落劫，与我一路同来，且在一个船里。', '“Two young dan have appeared, immortals banished to earth; they came on my very boat.'],
      [13.6, 17.6, '京里一个名班请了个教师到苏州买了十个孩子，由水路进京。」', 'A troupe master bought ten boys in Suzhou and brought them north by water.”'],
      [18.4, 22.6, '「在运河里粮船拥挤，就走了四个多月。', '“Amid the crowding grain barges, the voyage took over four months.'],
      [22.6, 26.6, '见他们天天的学戏，倒也听会了许多。」', 'Watching them rehearse daily, I learned many of their tunes.”'],
      [27.4, 31.6, '「一个小旦叫琪官，年十四岁。他的颜色就像花粉和了胭脂水，一弹就破的。', '“One is Qiguan, fourteen—his complexion like powder and rouge blended, fragile enough to break at a touch.'],
      [31.6, 35.6, '唱起戏来，比那画眉、黄鹂的声音还要清脆几分。」', 'When he sings, his voice is clearer than a thrush or an oriole.”'],
    ],
  },
  {
    n: 13, title: ['Qinguan', '琴官'],
    description: ['But Qinguan, fifteen, is beyond words: no painter could catch his eyes; perhaps Du Liniang returned from the grave, or the fairy Du Lanxiang come down to earth.', '琴官十五岁，好处说不出来，画师也画不到；或是杜丽娘还魂，杜兰香下嫁。'],
    staging: 'Pincai’s praise by lamplight, Qinguan in moonlight, and the two ladies of the Du name',
    shots: [
      [0, 12, 'Beyond words', '说不出来', '更有一个唱闺门旦的叫琴官，十五岁了。他的好处，真教我说不出来。', 'There is another, Qinguan, fifteen, who plays the sheltered maiden—Pincai cannot put his beauty into words.', '琴官十五岁，唱闺门旦，好处真说不出来。'],
      [12, 26, 'No painter could catch him', '画不到这样的神情', '就是画师画的美人，也画不到这样的神情眉目。', 'No living beauty equals him, and no painter could catch the spirit in his eyes.', '世间活美人没有这样好的，画师也画不到他的神情眉目。'],
      [26, 36, 'Du Liniang returned', '杜丽娘还魂', '他姓杜，或者就是杜丽娘还魂？不然，就是杜兰香下嫁。', 'His surname is Du: perhaps Du Liniang back from the grave, or the fairy Du Lanxiang come down to earth.', '他姓杜，或是杜丽娘还魂，或是杜兰香下嫁。'],
    ],
    beats: [
      night(`[[0.4, 'speaking'], [6, 'pointing']]`, `[[6, 'thinking']]`),
      T(`place: 'moon-palace', aura: [-0.8, 0.4], petals: true, cast: [{ kind: 'dan', x: -0.8, h: 4.8, pose: DAN_POSES[1], opacity: 0.85 }], ${lines('画不到这样的神情', '年十五', '琴官')}`),
      T(`place: 'clouds', cast: [{ kind: 'dan', x: -2.6, pose: DAN_POSES[7], opacity: 0.7 }, { kind: 'deity', x: 0.8, y: 0.8, float: 0.2, opacity: 0.75 }], ${lines('杜兰香下嫁', '杜丽娘还魂')}`),
    ],
    subtitles: [
      [0.4, 5, '「这已经算个绝色了。更有一个唱闺门旦的叫琴官，十五岁了。', '“That alone is a peerless beauty. But there is another, Qinguan, fifteen, who plays the sheltered maiden.'],
      [5, 11.6, '他的好处，真教我说不出来。', 'His beauty I truly cannot put into words.'],
      [12.4, 16, '要将世间的颜色比他，也没有这个颜色。', 'No coloring in this world compares with his.'],
      [16, 20.6, '世间的活美人，是再没有这样好的。', 'No living beauty comes near him.'],
      [20.6, 25.6, '就是画师画的美人，也画不到这样的神情眉目。', 'Not even a painter of beauties could capture such spirit in his eyes.'],
      [26.4, 31, '他姓杜，或者就是杜丽娘还魂？不然，就是杜兰香下嫁。', 'His surname is Du—perhaps Du Liniang returned from the grave, or the fairy Du Lanxiang come down to earth.'],
      [31, 35.6, '除了这两个姓杜的，也就没有第三个了。」', 'Besides those two of the Du name, there could be no third.”'],
    ],
  },
  {
    n: 14, title: ['A gem-appraiser’s eyes', '识宝回回'],
    description: ['Ziyu laughs, thinking the praise fits the two boys in the cart exactly; Pincai insists his eyes never praise cheaply—though the two have forbidding tempers.', '子玉暗想这番形容正合车中所见两人；聘才自夸眼光是识宝回回，只是二人脾气不好。'],
    staging: 'Ziyu remembering the cart, and Pincai boasting of his eye',
    shots: [
      [0, 16, 'It fits the two in the cart', '移到车里所见的那两个身上', '但他形容这两个人，倒可以移到我前日车里所见的那两个身上', 'Ziyu laughs: such praise can’t be trusted—yet it fits the two he saw in the cart exactly.', '子玉暗笑：这般称赞不可信，却正合前日车中所见两人。'],
      [16, 36, 'Not easily impressed', '不是轻易赞好的', '那时吾兄见了，才信小弟这对眼睛，是个识宝回回，不是轻易赞好的。', 'Pincai: you’ll see them on stage and trust my eyes. Only—their tempers are as forbidding as their looks are fine.', '聘才：吾兄见了，才信我这对眼睛是识宝回回；只是这两个脾气不好。'],
    ],
    beats: [
      night(`[[6, 'still']]`, `[[0.4, 'laughing'], [5, 'thinking']]`, `, aura: [1.1, 0.6], ${lines('一毫不错', '车里所见')}`),
      night(`[[0.4, 'speaking'], [6, 'pointing'], [12, 'speaking']]`, `[[3, 'still']]`, `, ${lines('识宝回回')}`),
    ],
    subtitles: [
      [0.4, 5, '子玉不觉笑起来，心里想道：「他这般称赞是不可信的，', 'Ziyu couldn’t help laughing, thinking: “Such praise can’t be trusted,'],
      [5, 10.6, '但他形容这两个人，倒可以移到我前日车里所见的那两个身上，一毫不错。', 'yet it fits the two I saw in the carriage the other day, to the last detail.'],
      [10.6, 15.6, '世间既生了这两个，怎么还能再生两个出来？」', 'Since those two exist, how could heaven make another pair?”'],
      [16.4, 21, '聘才道：「他们与我同一天到京，此时自然已经进了班子。', 'Pincai: “They reached the capital the same day as I; by now they’ve joined a troupe.'],
      [21, 27, '那时吾兄见了，才信小弟这对眼睛，是个识宝回回，不是轻易赞好的。', 'When you see them, you’ll trust these eyes of mine—a gem-appraiser’s that don’t praise cheaply.'],
      [27, 35.6, '就是这两个相貌好了，脾气恰不好，凭你怎样巴结他，要他一句好言好语也不能。」', 'Only, their tempers are as bad as their looks are fine; flatter all you like, you won’t get a kind word.”'],
    ],
  },
  {
    n: 15, title: ['Close to tears', '气得要哭出来'],
    description: ['The other one ignores people altogether, and near weeps if pressed; yet no actor in the capital could outshine him.', '那一个更古怪，不理人，多问几句就气得要哭；论相貌京城里无人压得下他。'],
    staging: 'the proud boy turning away, and Pincai’s verdict by lamplight',
    shots: [
      [0, 18, 'He ignores everyone', '索性不理人', '那一个更古怪，他索性不理人，若多问了他几句话，他就气得要哭出来。', 'The other is stranger still: he ignores people, and if pressed, grows so vexed he nearly cries.', '那一个索性不理人，多问几句就气得要哭。'],
      [18, 36, 'None could outshine him', '总压不下他', '若论相貌，就算京城里有好相公，也总压不下他', 'But for looks, no fine actor in the capital could outshine him.', '论相貌，京城里的好相公也压不下他。'],
    ],
    beats: [
      T(`place: 'clouds', cast: [{ kind: 'dan', x: -0.8, h: 4.8, pose: DAN_POSES[1] }], ${lines('气得要哭', '索性不理人')}`),
      night(`[[0.4, 'speaking'], [8, 'laughing']]`, `[[4, 'thinking']]`, `, ${lines('总压不下他')}`),
    ],
    subtitles: [
      [0.4, 8.6, '「那一个更古怪，他索性不理人，', '“The other is even stranger—he simply ignores people.'],
      [8.6, 17.6, '若多问了他几句话，他就气得要哭出来。只怕这种性情到京里来，也没人喜欢。', 'Press him with a few questions and he’s near tears. I fear no one in the capital will like such a temper.'],
      [18.4, 35.6, '若论相貌，就算京城里有好相公，也总压不下他，恐还要比不上他呢。」', 'But in looks, even the capital’s finest could never outshine him—they would pale beside him.”'],
    ],
  },
  {
    n: 16, title: ['“I have seen them”', '我已见过这两人'],
    description: ['Ziyu checks the details—blue crepe fur coats, a blue-hooded cart and a white mule, a master past fifty—and claps his hands: these are the boys he saw.', '子玉逐一问明：蓝绉绸皮袄、蓝布车围白骡子、五十以外的叶茂林——拍手笑道：我已见过这两人。'],
    staging: 'Ziyu realising, the clothes described, the cart remembered through its window, and the two friends delighted',
    shots: [
      [0, 8, 'The same day', '同一天进京', '他说这两个人，与他同一天进京。……不要他说的就是我见的', 'They entered the capital the same day as Pincai—could they be the ones Ziyu saw?', '同一天进京——不要他说的就是我见的？'],
      [8, 18, 'Blue crepe fur coats', '蓝绉绸皮袄', '都是蓝绉绸皮袄，酱色呢得胜褂。', 'What was Qinguan wearing? Blue crepe fur coats under dark brown riding jackets. It matches.', '琴官进城穿的是蓝绉绸皮袄，酱色呢得胜褂——衣服对了。'],
      [18, 27, 'A white mule', '骡子是白的', '他与琪官、叶茂林同坐一个车，那车围是蓝布的，骡子是白的。', 'He rode with Qiguan and Ye Maolin, past fifty, in a blue-hooded cart drawn by a white mule.', '与琪官、叶茂林同车，蓝布车围，白骡子；叶茂林五十以外。'],
      [27, 36, '“I have seen them!”', '拍手笑道', '子玉不禁拍手笑道：「我已见过这两人，你果然赞得不错，真要算绝色了。」', 'Ziyu claps his hands and laughs: “I have seen them! You praised them rightly.” Pincai is overjoyed.', '子玉拍手笑道：我已见过这两人，真要算绝色了。聘才大乐。'],
    ],
    beats: [
      night('', `[[0.4, 'thinking']]`, `, aura: [1.1, 0.6], ${lines('同一天进京')}`),
      T(`place: 'clouds', cast: [{ kind: 'scholar', hair: 'bun', x: -1.6, h: 4.4, opacity: 0.8 }, { kind: 'scholar', hair: 'bun', x: 0.2, h: 4.2, opacity: 0.6 }], ${lines('酱色呢得胜褂', '蓝绉绸皮袄')}`),
      T(`place: 'street', window: true, petals: true, camera: { from: 10.6, to: 9.6, drift: 0.2 }, cast: [{ kind: 'cart', x: 0.4, h: 4, flip: true, z: -1 }, { kind: 'scholar', hair: 'bun', x: -2.5, y: 0.2, h: 3.1, z: -0.4, gesture: 'thinking' }, { kind: 'scholar', hair: 'bun', x: -3.6, y: 0.2, h: 3, z: -0.4 }]`),
      night(`[[2, 'laughing']]`, `[[0.4, 'laughing'], [4, 'speaking']]`, `, ${lines('真要算绝色了')}`),
    ],
    subtitles: [
      [0.4, 4, '子玉心里想道：「他说这两个人，与他同一天进京。', 'Ziyu thought: “He says these two entered the capital the same day as he did.'],
      [4, 7.6, '不要他说的就是我见的？」', 'Could they be the very ones I saw?”'],
      [8.4, 12.6, '「你说那个顶好的叫什么名字？」「叫琴官。那个叫琪官。」', '“What is the best one called?” “Qinguan. The other is Qiguan.”'],
      [12.6, 17.6, '「琴官进城那一天穿的什么衣裳？」「都是蓝绉绸皮袄，酱色呢得胜褂。」', '“What was Qinguan wearing that day?” “Blue crepe fur coats under dark brown riding jackets.”'],
      [18.4, 23, '「他与琪官、叶茂林同坐一个车，那车围是蓝布的，骡子是白的。」', '“He shared a cart with Qiguan and Ye Maolin—blue cloth awning, a white mule.”'],
      [23, 26.6, '「那叶茂林有多少岁数了？」「五十以外。」', '“How old is Ye Maolin?” “Past fifty.”'],
      [27.4, 32, '子玉不禁拍手笑道：「我已见过这两人，你果然赞得不错，真要算绝色了。」', 'Ziyu clapped his hands: “I have seen them! Your praise is right—they are truly peerless.”'],
      [32, 35.6, '那琪官已经好了，那琴官真可说天下无双。聘才乐得受不得。', 'Qiguan was fine indeed, but Qinguan was without equal. Pincai was beside himself with delight.'],
    ],
  },
  {
    n: 17, title: ['Recalling every detail', '细细追摹'],
    description: ['Pincai promises to find out which troupe the boys joined; a maid calls Ziyu to bed, where he recalls the boy’s face all night.', '聘才答应打听戏班；小丫头请少爷早睡；子玉一夜细细追摹车中模样。'],
    staging: 'the promise, the maid at the door, and Ziyu awake with a remembered face',
    shots: [
      [0, 10, 'I’ll find out tomorrow', '明日我出去打听', '明日我出去打听，打听着了，我们去听他的戏。', 'Pincai will ask around tomorrow; once they know the troupe, they’ll go hear him.', '聘才：明日出去打听，打听着了就去听他的戏。'],
      [10, 20, '“Retire early”', '请少爷早些睡罢', '忽见灯光一亮，一个小丫头在门外说道：「太太叫请少爷早些睡罢。」', 'The lamp flares; a little maid at the door: the mistress asks the young master to retire early.', '灯光一亮，小丫头说：太太叫请少爷早些睡罢。'],
      [20, 36, 'Over and over', '想了又想', '这一宿就把聘才的话想了又想，又将车中所见模样神情，细细追摹一回', 'All night Ziyu turns Pincai’s words over and recalls every detail of the face in the cart.', '子玉一宿把聘才的话想了又想，细细追摹车中所见模样。'],
    ],
    beats: [
      night(`[[0.4, 'speaking']]`, `[[4, 'bow']]`),
      T(`place: 'night-room', table: { x: -0.4, w: 5.6 }, cast: [who.pincai(-1.9), who.ziyu(1.1, { cues: [[5, 'bow']], walk: [1.1, 9, 6, 10] }), who.maid(9, { walk: [9, 3.6, 0.4, 3], flip: true, cues: [[3.2, 'speaking']] })]`),
      T(`place: 'night-room', cast: [who.ziyu(-1.6, { gesture: 'thinking' }), { kind: 'scholar', hair: 'bun', x: 1.8, opacity: 0.3, float: 0.12 }], ${lines('细细追摹', '想了又想')}`),
    ],
    subtitles: [
      [0.4, 5, '「比京里那些红相公怎样？」子玉笑道：「那个琴官更为难得。」', '“How do they compare to the capital’s famous actors?” Ziyu smiled: “Qinguan is a rarity beyond measure.”'],
      [5, 9.6, '聘才道：「明日我出去打听，打听着了，我们去听他的戏。」', 'Pincai: “I’ll inquire tomorrow, and once I know, we’ll go hear him.”'],
      [10.4, 15, '忽见灯光一亮，一个小丫头在门外说道：', 'Just then the lamp flared, and a little maid called from outside the door:'],
      [15, 19.6, '「太太叫请少爷早些睡罢。」子玉只得起身进去。', '“The mistress asks the young master to retire early.” Ziyu had to go in.'],
      [20.4, 26, '这一宿就把聘才的话想了又想，', 'All night he turned Pincai’s words over and over,'],
      [26, 31, '又将车中所见模样神情，细细追摹一回，然后睡着。', 'recalling every detail of the face in the carriage, before he fell asleep.'],
      [31, 35.6, '自此子玉待聘才更加亲厚。', 'From then on, Ziyu treated Pincai with ever greater warmth.'],
    ],
  },
];
void words;
