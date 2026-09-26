/** Chapter 2, paragraphs 18–42: at Wang Wenhui's house—Pincai's letter, the Sun brothers, and the banquet. Build with `npm run build-cinemas -- 2`. */
import type { Spec } from '../write';

// Beat shorthands, written into scene.ts as code.
const T = (o: string) => `T({ ${o} })`;
const B = (o = '') => `banquetBeat({ ${o} })`;
const lines = (...l: string[]) => `lines: [${l.map(s => `'${s}'`).join(', ')}]`;
const words = (...l: [string, number, string?][]) => `wordsBeat([${l.map(([text, at, red]) => `{ text: '${text}', at: ${at}${red ? `, red: '${red}'` : ''} }`).join(', ')}])`;
/** Wenhui cross-legged on his couch, Pincai standing below, Zhongqing on the window seat. */
const parlor = (wenhui: string, pincai: string, extra = '') => T(`place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated'${wenhui ? `, cues: ${wenhui}` : ''} }), who.pincai(-3.4${pincai ? `, { cues: ${pincai} }` : ''}), who.zhongqing(3.4, { h: 4 })]${extra}`);
/** Wang Xun's study: Wang Xun, Zhongqing and the two Sun brothers at the table. */
const suns = (sihui: string, siyuan: string, xun = '', zq = '', extra = '') => T(`place: 'study', table: { x: 0, w: 8.4 }, cast: [who.wangxun(-3${xun ? `, { cues: ${xun} }` : ''}), who.zhongqing(-1.1${zq ? `, { cues: ${zq} }` : ''}), who.sihui(1${sihui ? `, { cues: ${sihui} }` : ''}), who.siyuan(3${siyuan ? `, { cues: ${siyuan} }` : ''})]${extra}`);
const talk = `[[0.4, 'speaking']]`;

export const specs: Spec[] = [
  {
    n: 18, title: ['The master returns', '老爷回来了'],
    description: ['Pincai brings his letter to Wang Wenhui’s house, flatters Zhongqing while he waits, and bows low when the imposing Commissioner strides in.', '聘才送信到王宅，先会仲清，恭惟一番；文辉大步进来，聘才连忙拜见。'],
    staging: 'Pincai at the Wang gate, talking with Zhongqing, a servant with the master’s clothes, and Wenhui striding in',
    shots: [
      [0, 10, 'At the Wang gate', '送信到王宅', '次早聘才带了他的小子四儿，将王文辉的信送去。', 'Next morning Pincai and his boy Si’er bring the letter to Wang Wenhui’s house.', '次早聘才带小子四儿，送信到王宅。'],
      [10, 20, 'Flattering Zhongqing', '恭惟一番', '聘才见仲清一表非凡……免不得恭惟一番。', 'Wenhui and Wang Xun are out; Pincai meets Zhongqing and flatters him freely.', '文辉、王恂不在；聘才会了仲清，恭惟一番。'],
      [20, 28, '“The master is back”', '老爷回来了', '只见一个跟班捧着一包衣服进来说：「老爷回来了。」', 'A servant enters with a bundle of clothes: the master has returned.', '跟班捧着衣服进来：「老爷回来了。」'],
      [28, 36, 'A third-rank official', '三品服饰', '见一个大方脸，花白长须，三品服饰，仪容甚伟', 'Boots thud; in strides a square-faced man with a grizzled beard in third-rank robes. Pincai bows deeply.', '靴声秃秃，大方脸、花白长须、三品服饰的文辉走进来；聘才连忙作揖拜见。'],
    ],
    beats: [
      T(`place: 'gate', cast: [who.pincai(8, { walk: [8, 0.6, 0.4, 7], flip: true }), who.page(9.4, { walk: [9.4, 2.2, 0.8, 7.4], flip: true, gesture: 'offering' })]`),
      T(`place: 'parlor', cast: [who.zhongqing(1.4, { cues: [[6, 'speaking']] }), who.pincai(-1.6, { cues: [[0.4, 'bow'], [2, 'speaking']] })]`),
      T(`place: 'parlor', cast: [who.zhongqing(1.4), who.pincai(-1.6, { cues: [[4, 'bow']] }), who.servant(8, { walk: [8, 3.4, 0.3, 3.4], flip: true, gesture: 'offering', cues: [[3.6, 'speaking']] })]`),
      T(`place: 'parlor', cast: [who.zhongqing(3.4, { h: 4, gesture: 'bow' }), who.pincai(-1.2, { cues: [[2, 'bow']] }), who.wenhui(-9, { walk: [-9, -3.2, 0.2, 2.6], cues: [[3, 'speaking']] })]`),
    ],
    subtitles: [
      [0.4, 9.6, '次早聘才带了他的小子四儿，将王文辉的信送去。', 'The next morning, Pincai took his young servant Si’er to deliver Wang Wenhui’s letter.'],
      [10.4, 15, '适文辉一早出门未回，王恂也不在家，只得请颜仲清会了。', 'Wenhui had gone out and Wang Xun was away, so Pincai met Yan Zhongqing.'],
      [15, 19.6, '聘才见仲清一表非凡，知是文辉之婿，免不得恭惟一番。', 'Seeing his fine bearing and learning he was Wenhui’s son-in-law, Pincai flattered him generously.'],
      [20.4, 27.6, '正要告辞，只见一个跟班捧着一包衣服进来说：「老爷回来了。」', 'As he rose to leave, a servant entered with a bundle of clothes: “The master has returned.”'],
      [28.4, 32, '靴声秃秃，见一个大方脸，花白长须，三品服饰，仪容甚伟，走将进来。', 'Boots thudded; in strode a square-faced man, grizzled beard, in the robes of the third rank.'],
      [32, 35.6, '聘才连忙上前作揖拜见，文辉双手拉住道：「岂敢，岂敢！」', 'Pincai hurried forward to bow; Wenhui caught his hands: “Please, please!”'],
    ],
  },
  {
    n: 19, title: ['A blade and a brush', '一把刀，一枝笔'],
    description: ['Wenhui, cross-legged, tosses Pincai’s letter aside and tells how Pincai’s father lost first place: a blade, a brush, and an ink blot shaped like a head on his exam paper.', '文辉盘腿而坐，接信即放下，讲聘才之父当年卷面上画了一把刀、一枝笔、一团墨浸成人头，因此失了解元。'],
    staging: 'Pincai presenting the letter, Wenhui laughing it off, the haunted exam paper, and Pincai squirming',
    shots: [
      [0, 9, 'The letter', '双手呈上', '说罢取出书子来双手呈上', 'Wenhui sits cross-legged; Pincai flatters him and presents the letter with both hands.', '文辉盘起腿来；聘才恭维一番，双手呈上书信。'],
      [9, 18, '“Your Excellency”', '大人安启', '文辉一手接着，看看信面就放下，哈哈大笑', 'Wenhui takes it in one hand, glances at the envelope, tosses it down and laughs.', '文辉一手接过，看看信面就放下，哈哈大笑。'],
      [18, 28, 'The ink blot', '一团墨浸', '卷面上，画了一把刀，一枝笔，笔底下一团墨浸……连眉目都有了。', 'Pincai’s father was set to place first, until the examiner saw a blade, a brush, and an ink blot soaking into the shape of a head.', '其父本要中解元，主考见卷面上一把刀、一枝笔，一团墨浸成人头，便换了人。'],
      [28, 36, 'Squirming', '侷促不安', '说得聘才侷促不安。文辉又手理长髯', 'Pincai squirms while Wenhui strokes his beard and talks on.', '聘才侷促不安；文辉手理长髯，又说下去。'],
    ],
    beats: [
      parlor('', `[[0.4, 'speaking'], [4, 'handing']]`),
      parlor(`[[0.4, 'reading'], [2.4, 'laughing'], [6, 'speaking']]`, `[[0, 'bow']]`, `, ${lines('大人安启')}`),
      T(`place: 'exam-paper', ${lines('一团墨浸', '一枝笔', '一把刀')}`),
      parlor(`[[0.4, 'speaking']]`, `[[0, 'thinking']]`).replace("who.pincai(-3.4, { cues: [[0, 'thinking']] })", "who.pincai(-3.4, { cues: [[0, 'thinking']], blush: true })"),
    ],
    subtitles: [
      [0.4, 4.6, '文辉让聘才坐下，自己就盘起腿来，仲清坐在靠窗凳上。', 'Wenhui settled himself cross-legged; Zhongqing sat on a stool by the window.'],
      [4.6, 8.6, '聘才便站起来道：「大人的尊范，必要位至极品。」说罢取出书子来双手呈上。', 'Pincai rose: “Your Excellency is destined for the highest office,” and presented the letter with both hands.'],
      [9.4, 13.6, '文辉一手接着，看看信面就放下，哈哈大笑道：', 'Wenhui took it in one hand, glanced at the envelope, tossed it aside and laughed:'],
      [13.6, 17.6, '「你令尊怎么这样疏远我，写起大人安启来。」', '“Why does your father treat me so formally—‘To His Excellency’?”'],
      [18.4, 23, '「那一年与我同案进学，你令尊本要中解元的。主考忽看见那本卷面上，画了一把刀，一枝笔，', '“The year we sat together, your father was to place first—until the examiner saw a blade and a brush on his paper,'],
      [23, 27.6, '笔底下一团墨浸，揭开看时，像一个人头，连眉目都有了。」', 'and an ink blot beneath the brush that, page by page, became a human head, eyes and all.”'],
      [28.4, 32, '「这一管好笔，不做文章去做状子，至今还是个穷秀才。」', '“He used that fine brush for lawsuits instead of essays, and is still a poor scholar.”'],
      [32, 35.6, '说得聘才侷促不安。文辉又手理长髯说道：', 'Pincai squirmed. Wenhui stroked his long beard and went on:'],
    ],
  },
  {
    n: 20, title: ['Two relatives forced on him', '硬荐了两个亲戚'],
    description: ['Wenhui recalls recommending Pincai’s father to Prefect Wei, whose superiors forced other men on him.', '文辉说当年荐聘才之父给魏府尊，上司与侯石翁硬荐了人。'],
    staging: 'Wenhui talking on from his couch',
    shots: [
      [0, 18, 'Hou Shiweng’s relatives', '侯石翁', '又说侯石翁又硬荐了两个亲戚。', 'Hou Shiweng had forced two of his own relatives on the Prefect.', '侯石翁又硬荐了两个亲戚。'],
      [18, 36, 'Recommend him elsewhere', '转荐别处', '只好代为设法，或转荐别处。', 'So the Prefect could only find him some other post.', '只好代为设法，或转荐别处。'],
    ],
    beats: [
      parlor(talk, '', `, ${lines('硬荐了两个亲戚', '侯石翁')}`),
      parlor(`[[0.4, 'speaking'], [8, 'laughing']]`, `[[4, 'bow']]`),
    ],
    subtitles: [
      [0.4, 17.6, '「又说侯石翁又硬荐了两个亲戚。', '“He also said Hou Shiweng had forced two relatives on him.'],
      [18.4, 35.6, '只好代为设法，或转荐别处。', 'He could only make other arrangements, or recommend him elsewhere.'],
    ],
  },
  {
    n: 21, title: ['Those shady affairs', '还做那勾当'],
    description: ['Pincai knows nothing of any such recommendation; Wenhui asks whether his father still dabbles in shady business.', '聘才茫然，只得道谢；文辉问其父还做那勾当否。'],
    staging: 'Pincai bewildered and bowing, and Wenhui’s pointed question',
    shots: [
      [0, 18, 'Bewildered', '聘才茫然', '聘才茫然，并不曾见有此事，只得恭身道谢。', 'Pincai has never heard of it, and can only bow his thanks.', '聘才茫然，只得恭身道谢。'],
      [18, 36, 'Still teaching?', '还仍旧做那勾当', '但此时令尊还是处馆，还仍旧做那勾当？', '“Is your father still teaching—or still up to those old tricks?”', '文辉问：令尊还是处馆，还仍旧做那勾当？'],
    ],
    beats: [
      parlor(`[[0.4, 'speaking'], [5, 'still']]`, `[[0.4, 'thinking'], [6, 'bow']]`),
      parlor(`[[0.4, 'pointing'], [7, 'speaking']]`, `[[0, 'bow']]`, `, ${lines('还做那勾当')}`),
    ],
    subtitles: [
      [0.4, 6, '「后来到底转荐没有呢？」', '“Did that recommendation ever come through?”'],
      [6, 17.6, '聘才茫然，并不曾见有此事，只得恭身道谢，又说：「也没有转荐。」', 'Pincai, bewildered, had never heard of it; he bowed his thanks: “No such recommendation came.”'],
      [18.4, 26, '文辉道：「想必他又听了什么闲话了。', 'Wenhui: “He must have heard some gossip.'],
      [26, 35.6, '但此时令尊还是处馆，还仍旧做那勾当？」聘才道：', 'Is your father still teaching, or still dabbling in those shady affairs?” Pincai answered:'],
    ],
  },
  {
    n: 22, title: ['A clerk in the salt office', '盐务司事'],
    description: ['Pincai says his father now clerks in a salt administration office.', '聘才说其父在盐务里司事。'],
    staging: 'Pincai answering, Wenhui nodding',
    shots: [
      [0, 18, 'The salt administration', '盐务里司事', '此刻家父在一个盐务里司事，比处馆略宽展些。', 'His father now clerks in a salt office—a little more room than teaching.', '家父在盐务里司事，比处馆略宽展些。'],
      [18, 36, 'Wenhui nods', '文辉道', '文辉道：', 'Wenhui nods his approval.', '文辉点头。'],
    ],
    beats: [
      parlor('', talk, `, ${lines('盐务司事')}`),
      parlor(`[[2, 'laughing']]`, `[[0, 'bow']]`),
    ],
    subtitles: [
      [0.4, 17.6, '「此刻家父在一个盐务里司事，比处馆略宽展些。」', '“My father now serves as a clerk in the salt administration, with a little more latitude than teaching.”'],
      [18.4, 35.6, '文辉道：', 'Wenhui nodded approvingly:'],
    ],
  },
  {
    n: 23, title: ['Three hundred taels', '三百金'],
    description: ['Wenhui compares the father’s three hundred taels to his own stipend and laughs; a dandy servant whispers, and Wenhui swaggers off. Pincai thinks him far too grand.', '文辉以三百金比自己三品俸银，仰面而笑；俊俏跟班耳语，文辉大摇大摆进去。聘才暗想好大架子。'],
    staging: 'the stipend, the whispering servant, Wenhui swaggering off, and Pincai leaving',
    shots: [
      [0, 10, 'As much as a third-rank stipend', '三品京堂', '论起来我做了三品京堂，一年的俸银，也不过如此。', 'Three hundred taels—as much as Wenhui’s own stipend as a third-rank official. He laughs.', '三百金，与文辉三品京堂一年俸银不过如此；说罢仰面而笑。'],
      [10, 20, 'A whisper', '凑着耳边说了一句话', '忽见一个俊俏跟班，打扮得十分华丽，凑着文辉耳边说了一句话。', 'A handsome, splendidly dressed attendant whispers in Wenhui’s ear; Pincai takes the hint.', '一个华丽的俊俏跟班凑着文辉耳边说话；聘才知道有事。'],
      [20, 28, 'Swaggering in', '大摇大摆的进去了', '文辉便住了脚，弯一弯腰，大摇大摆的进去了。', 'Wenhui gives a perfunctory bow and swaggers inside.', '文辉弯一弯腰，大摇大摆的进去了。'],
      [28, 36, 'Far too grand', '好大架子', '这个老头儿好大架子，不及梅老伯远甚。', 'Pincai thinks: what airs—nothing like gracious Uncle Mei.', '聘才想：这个老头儿好大架子，不及梅老伯远甚。'],
    ],
    beats: [
      parlor(`[[0.4, 'speaking'], [5, 'laughing']]`, `[[0, 'bow']]`, `, ${lines('三品京堂', '三百金')}`),
      T(`place: 'parlor', cast: [who.wenhui(0.2, { y: 1.5, gesture: 'seated' }), who.pincai(-3.4, { cues: [[6, 'bow']] }), who.servant(8, { walk: [8, 1.6, 0.3, 3.6], flip: true, cues: [[3.8, 'whisper']] })]`),
      T(`place: 'hall', cast: [who.wenhui(1.4, { cues: [[0.4, 'bow']], walk: [1.4, -9, 2, 8], flip: true }), who.pincai(3.2, { gesture: 'bow' })]`),
      T(`place: 'gate', cast: [who.zhongqing(-2.4, { gesture: 'bow' }), who.pincai(0, { cues: [[0, 'thinking']], walk: [0, 9, 4, 11] })], ${lines('好大架子')}`),
    ],
    subtitles: [
      [0.4, 4, '「一年有多少修金呢？」聘才道：「也有三百金。」', '“What is his annual pay?” “About three hundred taels.”'],
      [4, 9.6, '文辉道：「论起来我做了三品京堂，一年的俸银，也不过如此。」说罢又仰面而笑。', '“As a third-rank official, my own stipend is scarcely more.” He threw back his head and laughed.'],
      [10.4, 15, '忽见一个俊俏跟班，打扮得十分华丽，凑着文辉耳边说了一句话。', 'A handsome, splendidly dressed attendant leaned in to whisper in Wenhui’s ear.'],
      [15, 19.6, '聘才是乖觉人，知道有事，便起身告辞。', 'Pincai, quick to perceive, rose to take his leave.'],
      [20.4, 27.6, '文辉便住了脚，弯一弯腰，大摇大摆的进去了。', 'Wenhui halted, gave a perfunctory bow, and swaggered inside.'],
      [28.4, 32, '仲清送出了门，聘才想道：「这个老头儿好大架子，', 'Zhongqing saw him out; Pincai thought: “What an arrogant old man—'],
      [32, 35.6, '不及梅老伯远甚。」便自回梅宅不题。', 'a far cry from Uncle Mei.” And he returned to the Mei house.'],
    ],
  },
  {
    n: 24, title: ['A matched pair', '难兄难弟'],
    description: ['Zhongqing talks with his wife Ronghua, then joins Wang Xun, just as Wang Xun’s two brothers-in-law, the Sun brothers, arrive.', '仲清与蓉华说话，到王恂书斋；王恂两个内舅孙嗣徽、孙嗣元来了。'],
    staging: 'Zhongqing with Ronghua, Zhongqing and Wang Xun, and the Sun brothers arriving',
    shots: [
      [0, 12, 'Zhongqing and Ronghua', '与蓉华讲话', '仲清到自己房中吃了饭，与其妻室蓉华讲了些话', 'Zhongqing eats in his own rooms and talks a while with his wife, Ronghua.', '仲清回房吃饭，与妻子蓉华说话。'],
      [12, 24, 'Wang Xun’s study', '王恂书斋', '来到王恂书斋，恰值王恂才回。', 'He goes to Wang Xun’s study just as Wang Xun returns.', '仲清来到王恂书斋，王恂才回。'],
      [24, 36, 'The Sun brothers', '孙嗣徽、孙嗣元', '有王恂两个内舅前来看望……真所谓难兄难弟。', 'Wang Xun’s brothers-in-law, Sun Sihui and Sun Siyuan, arrive—a truly matched pair.', '王恂两个内舅孙嗣徽、孙嗣元来看望，真是难兄难弟。'],
    ],
    beats: [
      T(`place: 'boudoir', cast: [who.lady(-1.4, { cues: [[5, 'speaking']] }), who.zhongqing(1.4, { flip: true, cues: [[0.4, 'speaking'], [5, 'still']] })]`),
      T(`place: 'study', cast: [who.zhongqing(-1.4, { cues: [[5, 'speaking']] }), who.wangxun(8, { walk: [8, 1.4, 0.3, 4.4], flip: true, cues: [[4.6, 'bow']] })]`),
      T(`place: 'study', cast: [who.wangxun(-3.4), who.zhongqing(-1.8), who.sihui(8, { walk: [8, 0.4, 0.3, 5], flip: true, cues: [[5.2, 'bow']] }), who.siyuan(9.6, { walk: [9.6, 2.2, 0.6, 5.6], flip: true, cues: [[5.8, 'bow']] })], linesSide: 'left', ${lines('难兄难弟')}`).replace("who.wangxun(-3.4), who.zhongqing(-1.8)", "who.wangxun(-1.8), who.zhongqing(-0.4)"),
    ],
    subtitles: [
      [0.4, 11.6, '且说仲清到自己房中吃了饭，与其妻室蓉华讲了些话，', 'Zhongqing ate in his own quarters and talked a while with his wife, Ronghua,'],
      [12.4, 23.6, '来到王恂书斋，恰值王恂才回。', 'then went to Wang Xun’s study, arriving just as Wang Xun returned.'],
      [24.4, 29, '有王恂两个内舅前来看望：一个叫孙嗣徽，一个叫孙嗣元，', 'Two of Wang Xun’s brothers-in-law came to visit: Sun Sihui and Sun Siyuan,'],
      [29, 33, '本是王文辉同乡同年孙亮功部郎之子。', 'sons of Ministry Director Sun Lianggong, Wenhui’s fellow provincial and classmate.'],
      [33, 35.6, '这嗣徽、嗣元两个，真所谓难兄难弟。', 'These two were truly a matched pair of ineptitude.'],
    ],
  },
  {
    n: 25, title: ['A bright red nose', '红鼻子'],
    description: ['Beside Wang Xun the brothers are heaven and abyss; Sihui has a sunken neck, puffed cheeks, and a face of red pimples crowned by a red nose.', '二人比王恂有天渊之隔；嗣徽缩颈堆腮，满脸红疙瘩，鼻上更多，变了红鼻子。'],
    staging: 'Wang Xun beside Sihui, then Sihui’s portrait',
    shots: [
      [0, 14, 'Heaven and the abyss', '天渊之隔', '将他们的外貌内才比起王恂来，真有天渊之隔。', 'Beside Wang Xun, in looks and wits, the difference is heaven and the abyss.', '比起王恂，外貌内才真有天渊之隔。'],
      [14, 36, 'Sun Sihui', '孙嗣徽', '这嗣徽生得缩颈堆腮……已变了一个红鼻子。', 'Sihui: a sunken neck, bulging cheeks, a fair skin buried under red pimples, thickest on his nose.', '嗣徽缩颈堆腮，满脸红疙瘩，鼻上更多，变了个红鼻子。'],
    ],
    beats: [
      T(`place: 'study', cast: [who.wangxun(-2.4), who.sihui(0.6)], ${lines('天渊之隔')}`),
      T(`place: 'study', cast: [who.sihui(-0.8, { h: 4.8 })], ${lines('红鼻子', '缩颈堆腮', '孙嗣徽')}`),
    ],
    subtitles: [
      [0.4, 13.6, '将他们的外貌内才比起王恂来，真有天渊之隔。', 'Compared with Wang Xun in looks and intellect, the difference was as heaven to the abyss.'],
      [14.4, 22, '这嗣徽生得缩颈堆腮，脸色倒还白净，', 'Sihui had a hunched neck and bulging cheeks, his complexion passably fair,'],
      [22, 28.6, '就是肺火太重，一年四季总是满脸的红疙瘩，', 'but from excess internal heat his face was covered year-round in red pimples,'],
      [28.6, 35.6, '而鼻上更多，已变了一个红鼻子。', 'thickest of all on his nose, which had become a bright red bulb.'],
    ],
  },
  {
    n: 26, title: ['Worm-eaten and stuttering', '虫蛀千字文，迭韵双声谱'],
    description: ['Sihui, twenty-six, spouts classical tags without understanding them; Siyuan has buck teeth, a hitched-up eyelid and a stammer. Gao Pin has nicknamed them both.', '嗣徽二十六岁，满口之乎者也；嗣元枭唇露齿、吊眼皮、口吃。高品给二人都起了诨名。'],
    staging: 'Sihui mouthing the classics, his nickname, and Siyuan’s portrait',
    shots: [
      [0, 12, 'A mouthful of classical tags', '满口之乎者也', '却又酷好掉文，满口之乎者也，腐气可掏。', 'Twenty-six and still short of the Five Classics, Sihui loves to show off in archaic particles.', '嗣徽二十六岁《五经》未念完，却酷好掉文，满口之乎者也。'],
      [12, 22, '“The Worm-Eaten Thousand Characters”', '虫蛀千字文', '有个苏州拔贡生高品，与他相熟，送他两个诨名：一个是「虫蛀千字文」。', 'Gao Pin of Suzhou has christened him “The Worm-Eaten Thousand Character Classic.”', '苏州拔贡生高品送他诨名「虫蛀千字文」。'],
      [22, 36, 'Sun Siyuan', '孙嗣元', '乃弟嗣元，生得枭唇露齿，又是个吊眼皮……又犯了口吃的毛病', 'His brother Siyuan: buck teeth, an eyelid hitched up as if circled in vermilion, and a stammer—“The Stuttering Dictionary.”', '嗣元枭唇露齿、吊眼皮，又口吃；高品叫他「迭韵双声谱」。'],
    ],
    beats: [
      T(`place: 'study', cast: [who.sihui(-0.8, { cues: [[0.4, 'speaking']] })], ${lines('满口之乎者也')}`),
      words(['虫蛀千字文', 0.6]),
      T(`place: 'study', cast: [who.siyuan(-0.8, { h: 4.8, cues: [[6, 'speaking']] })], ${lines('迭韵双声谱', '吊眼皮', '孙嗣元')}`),
    ],
    subtitles: [
      [0.4, 6, '年纪倒有二十六岁，《五经》还不曾念完，文理实在欠通，', 'Though twenty-six, he had not finished the Five Classics, and his writing was woeful,'],
      [6, 11.6, '却又酷好掉文，满口之乎者也，腐气可掏。', 'yet he loved to show off, his speech stuffed with archaic particles, reeking of pedantry.'],
      [12.4, 21.6, '有个苏州拔贡生高品，与他相熟，送他一个诨名：「虫蛀千字文」。', 'Gao Pin, a senior licentiate from Suzhou, dubbed him “The Worm-Eaten Thousand Character Classic.”'],
      [22.4, 27, '乃弟嗣元，生得枭唇露齿，又是个吊眼皮，右边一只眼睛高高吊起，像是朱笔圈了半圈。', 'His brother Siyuan had buck teeth and a right eyelid hitched high, as if half-circled in vermilion.'],
      [27, 31.6, '又犯了口吃的毛病，愈着急愈说不清楚。', 'He also stammered, and the more agitated he became, the less he could get out.'],
      [31.6, 35.6, '高品也送他一个混号，叫做「迭韵双声谱」，这两个废物真是一对。', 'Gao Pin called him “The Stuttering Dictionary.” Truly a perfect pair.'],
    ],
  },
  {
    n: 27, title: ['“The weary bird knows to return”', '鸟倦飞而知还'],
    description: ['In the study Sihui greets them in stilted classical phrases, comparing Wang Xun’s return to a weary bird; Wang Xun and Zhongqing can barely keep straight faces.', '书房里嗣徽满口文言：天朗气清、鸟倦飞而知还；王恂、仲清忍不住要笑。'],
    staging: 'the four in the study, Sihui’s phrases stamped out, and the listeners holding back laughter',
    shots: [
      [0, 12, 'Cornered in the study', '躲避不及', '仲清躲避不及，只得见了，同王恂陪着坐下。', 'Wenhui’s guests are due; Zhongqing cannot escape and sits down with them.', '文辉请客，客将到了；仲清躲避不及，只得陪坐。'],
      [12, 26, '“The heavens are clear”', '天朗气清', '今日天朗气清，所以愚兄弟正其衣冠，翩然而来奉看的。', '“Today the heavens are clear and the air is crisp; thus we have straightened our garments and drifted hither.”', '「今日天朗气清，所以愚兄弟正其衣冠，翩然而来。」'],
      [26, 36, 'A weary bird', '鸟倦飞而知还', '若不是「鸟倦飞而知还」，则虽引弓而射之，亦徒兴弋人之慕矣。', 'To Wang Xun: had the weary bird not known to return, even a bow and arrow would have been in vain.', '对王恂说：若不是「鸟倦飞而知还」，虽引弓而射之，亦徒兴弋人之慕。'],
    ],
    beats: [
      suns('', '', `[[0.4, 'speaking']]`, `[[4, 'bow']]`),
      words(['天朗气清', 0.5], ['正其衣冠', 2.2], ['翩然而来', 3.9]),
      suns(`[[0.4, 'speaking']]`, '', `[[5, 'laughing']]`, `[[6, 'laughing']]`, `, linesSide: 'left', ${lines('鸟倦飞而知还')}`),
    ],
    subtitles: [
      [0.4, 6, '是日来到王宅，适文辉请客，客将到了。王恂即同他到书房内来。', 'They arrived as Wenhui was hosting a banquet; Wang Xun ushered them into the study.'],
      [6, 11.6, '仲清躲避不及，只得见了，同王恂陪着坐下。', 'Unable to escape, Zhongqing greeted them and sat down with Wang Xun.'],
      [12.4, 19, '嗣徽先对仲清说道：「今日天朗气清，', 'Sihui addressed Zhongqing: “Today the heavens are clear and the air is crisp,'],
      [19, 25.6, '所以愚兄弟正其衣冠，翩然而来奉看的。」王恂、仲清忍不住要笑。', 'thus my brother and I straightened our garments and drifted hither.” The two struggled not to laugh.'],
      [26.4, 31, '「适值尊驾出门，若不是「鸟倦飞而知还」，', '“As your esteemed self was out, had not ‘the weary bird known to return,’'],
      [31, 35.6, '则虽引弓而射之，亦徒兴弋人之慕矣。」', 'then even drawing a bow to shoot it would only have aroused the fowler’s envy.”'],
    ],
  },
  {
    n: 28, title: ['“B-b-brother, you’re wrong”', '哥、哥、哥你这句话说错了'],
    description: ['Siyuan stammers that birds can’t be compared to men; Sihui defends his learning, Zhongqing teases, Wang Xun flees to laugh, and Siyuan recounts his brother’s couplet: “The d-d-dog has no constant heart.”', '嗣元结结巴巴驳哥哥；嗣徽引经自辩；仲清取笑，王恂躲出去笑；嗣元讲哥哥对对子「狗无恒心」。'],
    staging: 'the stammer stamped out, Sihui preening, the brothers quarrelling, and the dog couplet',
    shots: [
      [0, 9, 'The stammer', '哥、哥、哥', '哥、哥、哥你这句话说、说错了', 'Siyuan: “B-b-brother, your phrase is s-s-spoken in error—how can you c-c-compare a bird to a man?”', '嗣元：「哥、哥、哥你这句话说、说错了。」'],
      [9, 18, 'Profound erudition', '腹笥便便', '老二，你到底腹中空空如也，不知运化书卷之妙。', 'Sihui scorns his brother’s empty head and cites the classics; Wang Xun pretends to need the washroom and slips out to laugh.', '嗣徽说老二腹中空空；王恂装作解手出去，抿着嘴笑。'],
      [18, 27, 'Pimples shining with pride', '红疙瘩亮澄澄', '脸上的红疙瘩，如出花灌了浆一样，一颗颗的亮澄澄起来', 'Flattered, Sihui glows—every pimple shining; mocked, he puffs up like a toad while Siyuan laughs to tears.', '嗣徽得意，红疙瘩亮澄澄；被弟弟一笑，两腮鼓起像癞虾蟆。'],
      [27, 36, 'The dog couplet', '狗无恒心', '上对是：「人能弘道。」家、家、家兄却对得快，写了出来是：狗、狗、狗无恒心。', 'Set to match “Man can enlarge the Way,” Sihui wrote: “The d-d-dog has no constant heart.”', '先生出对「人能弘道」，家兄对了「狗无恒心」。'],
    ],
    beats: [
      `wordsBeat([{ text: '哥、哥、哥你这句话', at: 0.4, pace: 0.3 }, { text: '说、说错了', at: 3.8, pace: 0.3 }])`,
      suns(`[[0.4, 'speaking'], [6, 'pointing']]`, `[[3, 'fuming']]`, `[[4, 'laughing']]`, `[[6.4, 'speaking']]`).replace("who.wangxun(-3, { cues: [[4, 'laughing']] })", "who.wangxun(-3, { cues: [[4, 'laughing']], walk: [-3, -9, 4.4, 8] })"),
      suns(`[[0.4, 'laughing'], [5, 'fuming']]`, `[[4.6, 'laughing']]`, '', `[[0.4, 'speaking']]`).replace("who.sihui(1, { cues: [[0.4, 'laughing'], [5, 'fuming']] })", "who.sihui(1, { cues: [[0.4, 'laughing'], [5, 'fuming']], blush: true })"),
      `wordsBeat([{ text: '人能弘道', at: 0.5 }, { text: '狗、狗、狗无恒心', at: 3, red: '狗', pace: 0.3 }])`,
    ],
    subtitles: [
      [0.4, 4.6, '「哥、哥、哥你这句话说、说错了，怎么把鸟来比起人来，', '“B-b-brother, your phrase is s-s-spoken in error. How can you compare a bird to a man,'],
      [4.6, 8.6, '你、你、你还要将箭射、射、射他，那就更岂有此理了。」', 'and then w-w-want to shoot him? That’s p-p-preposterous.”'],
      [9.4, 13.6, '嗣徽道：「老二，你到底腹中空空如也，不知运化书卷之妙。', 'Sihui: “Number Two, your belly is empty; you know nothing of the alchemy of scholarship.”'],
      [13.6, 17.6, '王恂忍不住，装作解手出去，抿着嘴笑了一会。', 'Wang Xun could bear it no longer, feigned a trip to the washroom, and laughed outside.'],
      [18.4, 22.6, '嗣徽只道仲清果真佩服他，脸上的红疙瘩，一颗颗的亮澄澄起来。', 'Thinking Zhongqing truly admired him, Sihui swelled with pride; his red pimples shone one by one.'],
      [22.6, 26.6, '嗣元说着大笑，那只吊眼皮的眼睛已淌下泪来。嗣徽两腮鼓起就像癞虾蟆一样。', 'Siyuan laughed until his slanted eye wept; Sihui’s cheeks puffed out like a toad’s.'],
      [27.4, 31.6, '「有一天先生出了一个对，上对是：「人能弘道。」', '“One day our teacher set a couplet: ‘Man can enlarge the Way.’'],
      [31.6, 35.6, '家、家、家兄却对得快，写了出来是：狗、狗、狗无恒心。」', 'My b-b-brother answered fast: ‘The d-d-dog has no constant heart.’”'],
    ],
  },
  {
    n: 29, title: ['“Where is the ox going?”', '牛何之'],
    description: ['The Mencius line has the grass-radical gou, not the dog; and Sihui once began an essay with “Where is the ox going?” Sihui storms out.', '《孟子》上原是草字头的苟字；嗣徽又以「牛何之」起讲。嗣徽羞忿，乱踱告辞。'],
    staging: 'the two gou characters, the ox essay, and Sihui pacing and storming out',
    shots: [
      [0, 12, 'Grass, not dog', '草字头的苟字', '原来是草字头的苟字，不是反犬旁的狗字。', 'The Mencius line uses gou with the grass radical, “if,” not gou with the dog radical.', '原来是草字头的「苟」，不是反犬旁的「狗」。'],
      [12, 22, 'The ox essay', '牛何之', '先生出了一个做起讲的题目，是：「先生将何之。」家兄就将「牛何之」做了起头。', 'Set “Where is the master going?”, Sihui began: “Where is the ox going?”', '题目「先生将何之」，家兄以「牛何之」起头。'],
      [22, 36, '“Nonsense!”', '屁话，屁话', '便在屋子里乱踱起来，说道：「屁话，屁话！」便起身告辞。', 'Sihui paces the room sputtering “Nonsense!” and storms out; Wang Xun and Zhongqing see them off.', '嗣徽乱踱，骂道「屁话」，起身告辞；王恂、仲清送了出来。'],
    ],
    beats: [
      `wordsBeat([{ text: '苟无恒心', at: 0.5, red: '苟' }, { text: '狗无恒心', at: 2.6, red: '狗' }])`,
      `wordsBeat([{ text: '先生将何之', at: 0.5 }, { text: '牛何之', at: 3, red: '牛' }])`,
      T(`place: 'study', cast: [who.wangxun(-3.4), who.zhongqing(-1.8, { cues: [[2, 'laughing']] }), who.siyuan(3.4, { gesture: 'laughing' }), who.sihui(-0.4, { gesture: 'fuming', walk: [-0.4, 2.2, 0.4, 3], cues: [[3, 'fuming']] }), who.sihui(2.2, { gesture: 'fuming', walk: [2.2, -0.4, 3, 5.6], from: 3, until: 5.6 })]`).replace("who.sihui(-0.4, { gesture: 'fuming', walk: [-0.4, 2.2, 0.4, 3], cues: [[3, 'fuming']] })", "who.sihui(-0.4, { gesture: 'fuming', walk: [-0.4, 2.2, 0.4, 3], until: 3 }), who.sihui(-0.4, { gesture: 'fuming', walk: [-0.4, 9, 6, 11], from: 5.6 })"),
    ],
    subtitles: [
      [0.4, 5, '先生道：「岂、岂、岂有此理。」家兄只当先生忘了，连忙翻、翻、翻出来看，', '“P-p-preposterous!” said the teacher. My brother, delighted, flipped open the book to show him—'],
      [5, 11.6, '原来是草字头的苟字，不是反犬旁的狗字。」仲清笑道：「若不是狗记错了，倒是一副好对子。」', 'it was gou with the grass radical, not the dog. Zhongqing laughed: “But for the dog, a fine couplet.”'],
      [12.4, 17, '「又一日，先生出了一个做起讲的题、题、题目，是：「先生将何之。」', '“Another day the teacher set the theme: ‘Where is the master going?’'],
      [17, 21.6, '家兄就、就、就将「牛何之」做了起头。先生痛骂了一顿。」', 'My brother b-b-began with ‘Where is the ox going?’ The teacher crossed it out and scolded him.”'],
      [22.4, 28, '这一番说得嗣徽羞忿难耐，便在屋子里乱踱起来，说道：「屁话，屁话！」', 'Sihui, burning with shame and fury, paced the room sputtering, “Nonsense! Nonsense!”'],
      [28, 35.6, '便起身告辞。王恂恐他们弟兄斗气，不便挽留，同仲清送了出来。', 'and took his leave. Fearing a quarrel, Wang Xun did not detain them, and saw them out with Zhongqing.'],
    ],
  },
  {
    n: 30, title: ['At the inner gate', '二门口'],
    description: ['At the inner gate they meet Sun Lianggong coming in; his sons stand aside.', '刚到二门口，碰见孙亮功进来，孙氏弟兄站在一边。'],
    staging: 'the inner gate, the father arriving and the sons stepping aside',
    shots: [
      [0, 18, 'Sun Lianggong arrives', '孙亮功进来', '刚到二门口，可巧碰见孙亮功进来', 'Just at the inner gate, Sun Lianggong comes in.', '刚到二门口，碰见孙亮功进来。'],
      [18, 36, 'The sons stand aside', '站在一边', '孙氏弟兄站在一边。', 'The Sun brothers stand respectfully aside.', '孙氏弟兄站在一边。'],
    ],
    beats: [
      T(`place: 'gate', cast: [who.wangxun(-1.2, { walk: [-1.2, 1.2, 0.3, 5] }), who.zhongqing(-2.6, { walk: [-2.6, -0.2, 0.3, 5] }), who.sihui(0.6, { walk: [0.6, 3, 0.3, 5] }), who.siyuan(-4, { walk: [-4, -1.6, 0.3, 5] }), who.lianggong(9, { walk: [9, 4.6, 4, 9], flip: true })]`),
      T(`place: 'gate', cast: [who.lianggong(1.4, { flip: true }), who.wangxun(-0.6), who.zhongqing(-2.2), who.sihui(3.6, { gesture: 'bow' }), who.siyuan(4.9, { gesture: 'bow' })]`),
    ],
    subtitles: [
      [0.4, 17.6, '刚到二门口，可巧碰见孙亮功进来，', 'Just as they reached the inner gate, Sun Lianggong came in,'],
      [18.4, 35.6, '孙氏弟兄站在一边。', 'and the Sun brothers stood respectfully aside.'],
    ],
  },
  {
    n: 31, title: ['A flat, purplish face', '紫糖色扁脸'],
    description: ['Lianggong asks whether the guests have arrived; Zhongqing notes that for all his flat face, he is far better-looking than his sons.', '亮功问客到齐否；仲清看他虽紫糖色扁脸，却比两位贤郎好看多了。'],
    staging: 'greetings at the gate, and Lianggong’s portrait',
    shots: [
      [0, 16, '“Are the guests all here?”', '客到齐了么', '亮功问道：「客到齐了么？」王恂道：「没有。」', 'Greetings; Lianggong asks if the guests have all arrived. “Not yet.”', '亮功问：客到齐了么？王恂道：没有。'],
      [16, 36, 'Better than his sons', '比两位贤郎好看多了', '虽是个紫糖色扁脸，蹋鼻子，但五官端正，又有了几根胡须', 'A purplish flat face and a snub nose, but regular features and a few whiskers: far better than his sons.', '紫糖色扁脸、蹋鼻子，但五官端正，几根胡须，比两位贤郎好看多了。'],
    ],
    beats: [
      T(`place: 'gate', cast: [who.lianggong(1.4, { flip: true, cues: [[4, 'speaking']] }), who.wangxun(-0.6, { cues: [[0.4, 'bow'], [7, 'speaking']] }), who.zhongqing(-2.2, { gesture: 'bow' })]`),
      T(`place: 'gate', cast: [who.lianggong(-0.8, { h: 4.8 })], ${lines('几根胡须', '紫糖色扁脸')}`),
    ],
    subtitles: [
      [0.4, 8, '王恂、仲清上前见了礼，亮功问道：「客到齐了么？」', 'Wang Xun and Zhongqing greeted him. “Have the guests all arrived?” asked Lianggong.'],
      [8, 15.6, '王恂道：「没有。」', '“Not yet,” said Wang Xun.'],
      [16.4, 26, '仲清看亮功虽是个紫糖色扁脸，蹋鼻子，但五官端正，', 'Zhongqing noted his purplish flat face and snub nose, yet his features were regular,'],
      [26, 35.6, '又有了几根胡须，比两位贤郎好看多了。', 'and with a few whiskers, he looked far better than his two sons.'],
    ],
  },
  {
    n: 32, title: ['“Go home, and say nothing”', '你们回去，不要说什么'],
    description: ['Wang Guibao arrives; Lianggong sends his sons home with a warning to say nothing, and leads Guibao in by the arm.', '王桂保进来；亮功叫儿子们回去不要说什么，拉了桂保进去。'],
    staging: 'Guibao arriving, and Lianggong leading him in while the sons go home',
    shots: [
      [0, 14, 'Guibao arrives', '王桂保进来', '适值王桂保进来，见了亮功并王恂、仲清，也站在一边。', 'The actor Wang Guibao comes in and stands aside too.', '王桂保进来，也站在一边。'],
      [14, 36, 'Say nothing', '不要说什么', '「你们回去，不要说什么。」……于是亮功即拉了桂保进去。', '“Go home, and say nothing,” Lianggong tells his sons, and leads Guibao in by the arm.', '亮功对儿子说「你们回去，不要说什么」，便拉了桂保进去。'],
    ],
    beats: [
      T(`place: 'gate', cast: [who.lianggong(1.4, { flip: true }), who.wangxun(-0.6), who.zhongqing(-2.2), who.guibao(-9, { walk: [-9, -4, 0.4, 5], cues: [[5.2, 'bow']] })]`),
      T(`place: 'gate', cast: [who.sihui(3.2, { cues: [[5, 'bow']], walk: [3.2, 10, 7, 13] }), who.siyuan(4.6, { cues: [[5, 'bow']], walk: [4.6, 11.4, 7.2, 13.2] }), who.lianggong(1.4, { flip: true, cues: [[0.4, 'speaking']], walk: [1.4, -9, 8, 16] }), who.guibao(-0.4, { walk: [-0.4, -10.4, 8, 16], flip: true })]`),
    ],
    subtitles: [
      [0.4, 6, '亮功正要与他儿子说话，适值王桂保进来，', 'Lianggong was about to speak to his sons when Wang Guibao came in;'],
      [6, 13.6, '见了亮功并王恂、仲清，也站在一边。', 'seeing Lianggong, Wang Xun and Zhongqing, he too stood aside.'],
      [14.4, 22, '亮功看看桂保，对他儿子说道：「你们回去，不要说什么。」', 'Lianggong glanced at Guibao and told his sons: “Go home, and say nothing.”'],
      [22, 35.6, '嗣徽兄弟会意答应，于是亮功即拉了桂保进去。', 'The brothers understood and agreed, and Lianggong took Guibao by the arm and led him in.'],
    ],
  },
  {
    n: 33, title: ['Fit for the Peerless Register', '可入得《无双谱》'],
    description: ['Over supper Wang Xun jokes that his brothers-in-law belong in the Peerless Register, and tells of an albino sister-in-law and a fiercely jealous mother-in-law.', '晚饭时王恂说两位舅兄可入《无双谱》，又说家里有个天老大姨子，岳母泼妒异常。'],
    staging: 'supper in the study, the albino sister-in-law, and the jealous mother-in-law',
    shots: [
      [0, 12, 'The Peerless Register', '无双谱', '我们这两位舅兄，真可入得《无双谱》的。', 'Over wine, Wang Xun jokes that his two brothers-in-law are fit for the Peerless Register.', '王恂笑道：这两位舅兄，真可入得《无双谱》。'],
      [12, 24, 'An albino sister-in-law', '一头的白发', '我们还有个大姨子在家，是个天老，一头的白发，那是不能嫁人的', 'Luckily his wife is from a different mother; there is also an elder sister-in-law at home, an albino with white hair, nearly thirty and unmarried.', '幸亏内人是现在的岳母生的；家里还有个天老大姨子，一头白发，不能嫁人。'],
      [24, 36, 'Fiercely jealous', '泼妒异常', '听得令岳母泼妒异常，未知果否？', 'Is it true his mother-in-law is fiercely jealous? Zhongqing asks.', '仲清问：听得令岳母泼妒异常，果否？'],
    ],
    beats: [
      T(`place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.wangxun(-2.2, { cues: [[0.4, 'laughing'], [4, 'speaking']] }), who.zhongqing(1, { cues: [[6, 'laughing']] })], props: [{ kind: 'cup', x: -1.2, y: 1.1, s: 0.5, z: 0.9 }, { kind: 'cup', x: 0.2, y: 1.1, s: 0.5, z: 0.9 }], ${lines('无双谱')}`),
      T(`place: 'boudoir', cast: [who.lady(-1, { opacity: 0.4 })], ${lines('一头的白发', '天老')}`),
      T(`place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.wangxun(-2.2, { cues: [[6, 'speaking']] }), who.zhongqing(1, { cues: [[0.4, 'speaking'], [6, 'still']] })], ${lines('泼妒异常')}`),
    ],
    subtitles: [
      [0.4, 5, '仲清、王恂送了他弟兄出门进来，大家换了衣裳，在书房内晚饭对酌闲谈。', 'Having seen them off, they changed clothes and had supper and wine in the study.'],
      [5, 11.6, '王恂道：「我们这两位舅兄，真可入得《无双谱》的。」', 'Wang Xun: “My two brothers-in-law are truly worthy of the Peerless Register.”'],
      [12.4, 17, '仲清道：「为什么同胞兄妹丝毫不像？」王恂笑道：「幸亏内人是如今这位岳母生的。', '“Why is your wife nothing like them?” Wang Xun laughed: “Luckily she was born of my present mother-in-law.'],
      [17, 23.6, '我们还有个大姨子在家，是个天老，一头的白发，那是不能嫁人的，差不多有三十岁了。」', 'There is an elder sister-in-law at home, an albino with white hair, unmarriageable, nearly thirty.”'],
      [24.4, 35.6, '仲清问道：「听得令岳母泼妒异常，未知果否？」王恂道：', 'Zhongqing asked, “I hear your mother-in-law is fiercely jealous—is it true?” Wang Xun said:'],
    ],
  },
  {
    n: 34, title: ['A rare jealousy', '醋劲儿少有'],
    description: ['“That jealousy is rare indeed.” The story leaves them there and turns to the banquet.', '「这个醋劲儿却也少有的。」且按下这边。'],
    staging: 'Wang Xun’s answer, and the banquet hall waiting',
    shots: [
      [0, 18, 'A rare jealousy', '醋劲儿', '这个醋劲儿却也少有的。', '“That jealous temper is rare indeed.”', '「这个醋劲儿却也少有的。」'],
      [18, 36, 'Let us leave them', '且按下这边', '且按下这边。', 'But let us leave them there.', '且按下这边。'],
    ],
    beats: [
      T(`place: 'study', table: { x: -0.6, w: 6.2 }, cast: [who.wangxun(-2.2, { cues: [[0.4, 'speaking'], [6, 'laughing']] }), who.zhongqing(1, { cues: [[6, 'laughing']] })], ${lines('醋劲儿')}`),
      T(`place: 'banquet', round: { w: 9.6 }, ${lines('且按下这边')}`),
    ],
    subtitles: [
      [0.4, 17.6, '「这个醋劲儿却也少有的。」', '“That jealous temperament is truly rare.”'],
      [18.4, 35.6, '且按下这边。', 'But let us set that aside for now.'],
    ],
  },
  {
    n: 35, title: ['The banquet', '安起席来'],
    description: ['The guests take their seats by rank; Guibao pours and joins the table, tells of a day in Xu Duxiang’s vast Garden of Contentment, and makes Lianggong drink a penalty.', '客到齐按序入席，桂保斟酒入座，讲怡园之大；亮功取笑，被桂保罚酒。'],
    staging: 'arrival, the six seated, talk of the Garden of Contentment, and Guibao’s penalty cup',
    shots: [
      [0, 9, 'Lianggong and Guibao enter', '见过主人', '却说孙亮功同了桂保进来，见过主人。', 'Lianggong and Guibao greet their host.', '孙亮功同桂保进来，见过主人。'],
      [9, 18, 'Seated by rank', '安起席来', '便让兵部员外杨方猷坐了首席……文辉坐了主席。', 'Yang takes the seat of honour, then Zhou, Lu and Sun; Wenhui is host. Guibao pours, then sits facing Wenhui.', '杨方猷首席，周锡爵、陆宗沅、孙亮功依次，文辉主席；桂保斟酒入席。'],
      [18, 27, 'The Garden of Contentment', '怡园', '今日本都在怡园逛了一天……几几乎进去了出不来。', 'Guibao has spent the day in Xu Duxiang’s garden—half a million taels, a hundred rooms, a maze.', '桂保在徐度香的怡园逛了一天：花了五十多万银子，进去了几乎出不来。'],
      [27, 36, 'A penalty cup', '罚他', '你应该打个地洞，藏在里头。……便斟了一大杯酒来罚他', 'Lianggong jokes that Guibao should dig a burrow and hide in it; Guibao makes him drink a big penalty cup.', '亮功取笑桂保该打个地洞藏在里头；桂保斟一大杯罚他，灌他喝了。'],
    ],
    beats: [
      T(`place: 'hall', cast: [who.wenhui(1.8, { cues: [[5, 'bow']] }), who.lianggong(-9, { walk: [-9, -0.6, 0.3, 5] }), who.guibao(-10.4, { walk: [-10.4, -2.2, 0.6, 5.4] })]`),
      B(`cues: { guibao: [[0.4, 'toast'], [6, 'speaking']], yang: [[5, 'speaking']] }, props: [{ kind: 'cup', x: -1.6, y: 1.1, s: 0.45 }, { kind: 'cup', x: 1.8, y: 1.1, s: 0.45 }]`),
      B(`cues: { guibao: [[0.4, 'speaking']], lu: [[5, 'speaking'], [7, 'still']], wenhui: [[7, 'speaking']] }, linesSide: 'left', ${lines('怡园')}`),
      B(`cues: { sun: [[0.4, 'speaking'], [3, 'laughing'], [5, 'toast']], yang: [[3, 'laughing']], zhou: [[3, 'laughing']], lu: [[3, 'laughing']], wenhui: [[3, 'laughing']] }, move: { guibao: { x: 3.4, cues: [[4, 'toast']] } }`),
    ],
    subtitles: [
      [0.4, 4.4, '却说孙亮功同了桂保进来，见过主人。不多一刻，客已全到，便安起席来。', 'Sun Lianggong came in with Guibao and greeted the host; soon all the guests had arrived.'],
      [4.4, 8.6, '这些客都是文辉同年。', 'They were all Wenhui’s fellow graduates.'],
      [9.4, 13.6, '便让兵部员外杨方猷坐了首席，对面是光禄寺少卿周锡爵，', 'Yang Fangyou of the Ministry of War took the seat of honor; opposite him, Zhou Xijue;'],
      [13.6, 17.6, '陆宗沅坐了第三席，孙亮功第四，文辉坐了主席。桂保斟了一巡酒，入席对着文辉坐了。', 'Lu Zongyuan third, Sun Lianggong fourth, Wenhui as host. Guibao poured a round and sat opposite Wenhui.'],
      [18.4, 22.6, '桂保道：「今日本都在怡园逛了一天，徐老爷知道这里请客，才打发我来的。」', 'Guibao: “We spent all day in the Garden of Contentment; Master Xu sent me when he heard of your banquet.”'],
      [22.6, 26.6, '陆宗沅道：「听说他这个怡园共花了五十多万银子才造成。」', 'Lu Zongyuan: “I hear that garden cost over half a million taels.”'],
      [27.4, 31.6, '孙亮功道：「你应该打个地洞，藏在里头。」说得大家都笑。', 'Sun Lianggong: “You ought to dig a burrow and hide in it.” Everyone laughed.'],
      [31.6, 35.6, '桂保道：「你会骂人。」便斟了一大杯酒来罚他，桂保要灌，便也喝了。', '“You love insulting people,” said Guibao, pouring a big penalty cup and forcing him to drink.'],
    ],
  },
  {
    n: 36, title: ['A drinking game', '出个令'],
    description: ['Wenhui asks Guibao to lead a drinking game; Guibao chooses the challenge game, six coins are brought, the guests haggle over portions, and Guibao holds out his fist.', '文辉请桂保出令；桂保说打擂，取了六个钱；众人议定杯数，桂保伸出拳来。'],
    staging: 'the game proposed and the coins brought, then Guibao’s fist',
    shots: [
      [0, 14, 'The patriarch of games', '令祖宗', '文辉道：「这样清饮无趣，蕊香你出个令罢。」……「完了！把个令祖宗请了来了。」', 'Plain drinking is dull; Guibao proposes the challenge game. “We’re doomed,” groans Lianggong, “we’ve invited the patriarch of games.”', '文辉请桂保出令；桂保说打擂最好；亮功道：「完了！把个令祖宗请了来了。」'],
      [14, 36, 'Six coins', '六个钱', '文辉命人取了六个钱来……桂保伸出一个拳来', 'Six coins are fetched, the guests agree how to split their cups, and Guibao holds out a fist to Wenhui.', '取了六个钱，议定大小杯；桂保伸出一个拳来问文辉。'],
    ],
    beats: [
      B(`cues: { wenhui: [[0.4, 'speaking'], [4, 'still']], guibao: [[4, 'speaking']], sun: [[8, 'laughing']] }`),
      B(`cues: { zhou: [[1, 'speaking'], [5, 'still']], yang: [[5, 'speaking'], [9, 'still']], lu: [[9, 'speaking'], [13, 'still']], guibao: [[14, 'fist']] }, props: [{ kind: 'coins', x: 0.4, y: 1.05, s: 0.9, from: 0.5 }]`),
    ],
    subtitles: [
      [0.4, 4.6, '上了几样菜，文辉道：「这样清饮无趣，蕊香你出个令罢。」', 'After several dishes, Wenhui said, “Plain drinking is dull. Ruixiang, start a drinking game.”'],
      [4.6, 8.6, '桂保道：「打擂最好，什么都放得进去。」', 'Guibao: “The challenge game is best—it takes any rule.”'],
      [8.6, 13.6, '孙亮功道：「完了！把个令祖宗请了来了。」', 'Sun Lianggong: “We’re doomed! We’ve invited the patriarch of drinking games.”'],
      [14.4, 20, '文辉命人取了六个钱来。周锡爵道：「这杯分个大小才好。」', 'Wenhui had six coins fetched. Zhou Xijue: “The cups should come in larger and smaller portions.”'],
      [20, 27, '陆宗沅道：「你们一杯两开，我们都是一杯一开何如？」俱各依允。', 'Lu Zongyuan: “You two split a cup in half; the rest of us take one each?” All agreed.'],
      [27, 35.6, '桂保伸出一个拳来，问文辉吃多少杯？', 'Guibao held out a fist and asked Wenhui how many cups he wagered.'],
    ],
  },
  {
    n: 37, title: ['Six cups, six rules', '六杯为率'],
    description: ['Wenhui sets six cups; each guest names a rule: finger-guessing, impersonating a young dan, counting melon seeds, and the flying-flower verse.', '文辉定六杯为率；众人各出一令：豁拳、装小旦敬人、抓瓜子、花字飞觞。'],
    staging: 'Wenhui laying down the rules, the rules written out, and the bearded guests laughing at the dan rule',
    shots: [
      [0, 12, 'Six cups', '六杯为率', '我们六个人竟以六杯为率，不必增减', 'Six men, six cups: whoever guesses right performs that cup’s rule.', '六个人六杯为率，猜着的依令而行。'],
      [12, 24, 'The rules', '一杯化作三杯', '一杯化作三杯，找人豁拳。……两杯都装作小旦敬人。', 'Yang: finger-guessing. Lianggong: impersonate a young dan presenting wine. Lu: melon seeds.', '杨：豁拳；亮功：装作小旦敬人；陆：抓瓜子。'],
      [24, 36, 'Beards and all', '胡子', '我们这样的胡子，倒有些难装。……只要做作得好，便有胡子也不妨。', 'Zhou: with beards like ours, that’s hard to act. Lianggong: a good performance makes a beard no obstacle.', '周：我们这样的胡子难装；亮功：做作得好，有胡子也不妨。'],
    ],
    beats: [
      B(`cues: { wenhui: [[0.4, 'speaking']] }`),
      `wordsBeat([{ text: '一杯化作三杯', at: 0.4 }, { text: '找人豁拳', at: 2 }, { text: '两杯装作小旦敬人', at: 4 }, { text: '抓一把瓜子', at: 7 }])`,
      B(`cues: { zhou: [[0.4, 'laughing'], [4, 'speaking']], sun: [[6, 'speaking']], yang: [[2, 'laughing']], guibao: [[8, 'laughing']] }`),
    ],
    subtitles: [
      [0.4, 6, '文辉道：「我们六个人竟以六杯为率，不必增减，准他一杯化作几杯就是了。', 'Wenhui: “Six of us, six cups each; whoever wins a cup may split it as he likes.'],
      [6, 11.6, '那个猜着，就依令而行，最为剪截。」', 'Whoever guesses right carries out the rule. Simplest that way.”'],
      [12.4, 16, '杨方猷道：「一杯化作三杯，找人豁拳。」', 'Yang Fangyou: “One cup becomes three—finger-guessing with a partner.”'],
      [16, 20, '亮功道：「两杯都装作小旦敬人。」', 'Lianggong: “Two cups—both impersonating a young dan presenting wine.”'],
      [20, 23.6, '陆宗沅道：「把瓜子抓一把，数到谁就是谁。」', 'Lu Zongyuan: “Grab a handful of melon seeds; whoever the count lands on drinks.”'],
      [24.4, 30, '周锡爵道：「我们这样的胡子，倒有些难装。」', 'Zhou Xijue: “With beards like ours, that will be hard to act.”'],
      [30, 35.6, '亮功道：「只要做作得好，便有胡子也不妨。」', 'Lianggong: “So long as the performance is good, a beard is no obstacle.”'],
    ],
  },
  {
    n: 38, title: ['Off lightly', '这杯便宜了'],
    description: ['Guibao says the seed rule gets off lightly, and asks Zhou for the fifth and sixth cups.', '桂保说数瓜子这杯便宜了，又问周锡爵五六两杯。'],
    staging: 'Guibao laughing over the seeds, then turning to Zhou',
    shots: [
      [0, 18, 'Off lightly', '这杯便宜了', '「这杯便宜了。」', '“That cup gets off lightly,” laughs Guibao.', '桂保笑道：「这杯便宜了。」'],
      [18, 36, 'The fifth and sixth cups', '五六两杯', '又问周锡爵道：「五六两杯行什么令？」', 'He asks Zhou what the fifth and sixth cups shall be.', '又问周锡爵五六两杯行什么令。'],
    ],
    beats: [
      B(`cues: { guibao: [[0.4, 'laughing']], lu: [[4, 'laughing']] }, props: [{ kind: 'seeds', x: -0.4, y: 1.05, s: 0.9 }]`),
      B(`cues: { guibao: [[0.4, 'pointing']], zhou: [[5, 'speaking']] }`),
    ],
    subtitles: [
      [0.4, 17.6, '「这杯便宜了。」', '“That cup got off lightly.”'],
      [18.4, 35.6, '又问周锡爵道：「五六两杯行什么令？」', 'He then asked Zhou Xijue, “What are the rules for the fifth and sixth cups?”'],
    ],
  },
  {
    n: 39, title: ['Two coins', '就是两个'],
    description: ['Zhou names the flying-flower verse; Guibao’s fist goes round, Lianggong guesses two coins exactly, wins three cups, and loses all three rounds of finger-guessing to Yang.', '周锡爵出花字飞觞；桂保猜枚，亮功猜着两个，得三杯，与杨方猷豁拳连输三拳。'],
    staging: 'the guess, three cups set before Lianggong, and the finger-guessing',
    shots: [
      [0, 12, '“Exactly two”', '就是两个', '亮功伸着两指道：「就是两个。」', 'Guibao’s fist goes round; Lianggong holds up two fingers—and two coins it is.', '亮功伸两指：「就是两个。」放开手看时，正是两个。'],
      [12, 24, 'Three full cups', '三个杯子', '遂取了三个杯子，斟满了酒，放在亮功面前。', 'Three cups are filled and set before Lianggong.', '三个杯子斟满，放在亮功面前。'],
      [24, 36, 'Three lost rounds', '输了三拳', '可可响了三响，亮功输了三拳', 'Lianggong challenges Yang to finger-guessing and loses three rounds straight.', '亮功与杨方猷豁拳，输了三拳。'],
    ],
    beats: [
      B(`cues: { guibao: [[0.4, 'fist']], wenhui: [[2, 'speaking'], [4, 'still']], sun: [[5, 'fist'], [8, 'laughing']] }, props: [{ kind: 'coins', x: 3.2, y: 1.05, s: 0.8, from: 8 }]`),
      B(`cues: { sun: [[0.4, 'laughing'], [6, 'speaking']] }, props: [{ kind: 'cup', x: 1.8, y: 1.1, s: 0.5, from: 1 }, { kind: 'cup', x: 2.4, y: 1.1, s: 0.5, from: 1.6 }, { kind: 'cup', x: 3, y: 1.1, s: 0.5, from: 2.2 }]`),
      B(`cues: { sun: [[0.4, 'fist'], [8, 'fuming']], yang: [[0.4, 'fist'], [8, 'laughing']], guibao: [[8, 'laughing']] }`),
    ],
    subtitles: [
      [0.4, 4.6, '周锡爵道：「两杯化作六杯，花字飞觞。」', 'Zhou Xijue: “Two cups become six—a flying toast on the word ‘flower.’”'],
      [4.6, 8, '桂保先问文辉道：「几个？」文辉道：「一个。」', 'Guibao asked Wenhui, “How many?” “One.”'],
      [8, 11.6, '又问亮功，亮功伸着两指道：「就是两个。」放开手看时，正是两个。', 'Then Lianggong, holding up two fingers: “Exactly two.” He opened his hand—two it was.'],
      [12.4, 18, '遂取了三个杯子，斟满了酒，放在亮功面前。', 'Three cups were filled to the brim and set before Lianggong.'],
      [18, 23.6, '亮功道：「这是杨四兄的令，就和你豁。」', 'Lianggong: “This is Brother Yang’s rule—I’ll play you.”'],
      [24.4, 30, '可可响了三响，亮功输了三拳，', 'Three quick rounds—and Lianggong lost all three.'],
      [30, 35.6, '便道：「今日拳运不佳，让了你罢。」', '“My luck is dismal today,” he said. “I concede.”'],
    ],
  },
  {
    n: 40, title: ['Lianggong plays the dan', '装作小旦'],
    description: ['Caught by his own rule, Lianggong covers his beard, minces over to toast Yang like the clown Tan Ba, offers Lu a “skin cup”, sprays him with wine—then loses at the seeds and the flying flower too.', '亮功作法自弊，掩了胡子、软腰细步敬杨方猷，活像京丑谭八；又敬陆宗沅皮杯，喷了他一脸；数瓜子、飞花又轮到自己。'],
    staging: 'Lianggong mincing across the room, toasting Yang, spraying Lu, and the unlucky verse',
    shots: [
      [0, 10, 'Hand over his beard', '右手掩了胡子', '随站起来，左手拿了杯酒，右手掩了胡子……软腰细步的走到杨方猷面前', 'Caught by his own rule, Lianggong rises, cup in one hand, the other over his beard, and minces over to Yang.', '亮功作法自弊：左手拿酒，右手掩胡子，软腰细步走到杨方猷面前。'],
      [10, 18, '“Do me the honour”', '务必赏个脸儿', '娇声娇气的道「敬杨老爷一杯酒，务必赏个脸儿。」', 'In a sugary voice, eyes darting like the clown Tan Ba, he toasts Yang; the table roars.', '娇声娇气敬酒，眼睛四下飞转，宛然京丑谭八；合席大笑。'],
      [18, 27, 'A face full of wine', '喷了陆宗沅一脸', '亮功忍不住要笑，酒咽不及，喷了陆宗沅一脸。', 'He offers Lu a sip from his own lips; laughing, he sprays the wine all over Lu’s face.', '亮功要敬陆宗沅皮杯，忍不住笑，喷了陆宗沅一脸。'],
      [27, 36, '“Rear courtyard flowers”', '后庭花', '孙亮功看着桂保道：「岂宜重问后庭花。」数一数又是自饮。', 'The seeds count out to himself, and his flying-flower line lands on him again.', '数瓜子恰数到自己；飞花「岂宜重问后庭花」，又是自饮。'],
    ],
    beats: [
      B(`leave: ['sun'], cues: { yang: [[3, 'laughing']], zhou: [[3, 'laughing']], lu: [[3, 'laughing']], wenhui: [[3, 'laughing']], guibao: [[3, 'laughing']] }, extra: [who.lianggong(2.4, { z: 2.3, gesture: 'mincing', walk: [2.4, -2.6, 1, 9], flip: true })]`),
      B(`leave: ['sun'], cues: { yang: [[0.4, 'laughing'], [5, 'toast']], zhou: [[1, 'laughing']], lu: [[1, 'laughing']], wenhui: [[1, 'laughing']], guibao: [[1, 'laughing']] }, extra: [who.lianggong(-2.6, { z: 2.3, flip: true, cues: [[0, 'bow'], [1.4, 'mincing']] })]`),
      B(`leave: ['sun'], cues: { lu: [[0.4, 'speaking'], [5, 'fuming']], yang: [[5, 'laughing']], zhou: [[5, 'laughing']], wenhui: [[5, 'laughing']], guibao: [[5, 'laughing']] }, extra: [who.lianggong(0.4, { z: 2.3, flip: true, cues: [[0.4, 'toast'], [5, 'laughing']] })]`),
      `wordsBeat([{ text: '二十五粒', at: 0.5, small: true }, { text: '岂宜重问后庭花', at: 2.4, red: '花' }])`,
    ],
    subtitles: [
      [0.4, 5, '第二三杯即系亮功自己的令，便道：「这装小旦倒是作法自弊了。」', 'The second and third cups fell under his own rule. “This impersonation has backfired on me.”'],
      [5, 9.6, '随站起来，左手拿了杯酒，右手掩了胡子，笑迷迷软腰细步的走到杨方猷面前，', 'He rose, cup in his left hand, his right veiling his beard, and minced smiling over to Yang Fangyou,'],
      [10.4, 14, '请了一个安，娇声娇气的道：「敬杨老爷一杯酒，务必赏个脸儿。」', 'curtsied, and cooed: “A cup for Master Yang—please do me the honor.”'],
      [14, 17.6, '把眼睛四下里飞了一转，宛然联锦班内京丑谭八的丑态，引得合席大笑。', 'His eyes darted about, the very image of the clown Tan Ba; the whole table roared.'],
      [18.4, 22.6, '又取了一个大杯，走到陆宗沅面前：「想来都老爷是要吃皮杯的。」', 'With a large cup he crept to Lu Zongyuan: “I suppose the Censor wants a ‘skin cup.’”'],
      [22.6, 26.6, '亮功忍不住要笑，酒咽不及，喷了陆宗沅一脸。众人一发哄堂大笑。', 'He couldn’t help laughing and sprayed the wine all over Lu’s face. The room erupted.'],
      [27.4, 31.6, '第四杯是数瓜子令。亮功抓了一把，数一数是二十五粒，恰好数到自己。', 'The fourth cup: melon seeds. Lianggong grabbed twenty-five—landing on himself.'],
      [31.6, 35.6, '孙亮功看着桂保道：「岂宜重问后庭花。」数一数又是自饮。', 'Eyeing Guibao, he quoted, “How can one ask again of the rear-courtyard flowers?”—and it fell on him again.'],
    ],
  },
  {
    n: 41, title: ['Flying flowers', '飞花'],
    description: ['Every flower line lands on Lianggong; Guibao rattles off three more; then Guibao blows plum petals in Lianggong’s face—until a servant whispers that Madam has sent for him.', '飞花句句数到亮功；桂保一连三句；又吹梅花贴了亮功一脸；家人来报太太叫，亮功失色催饭。'],
    staging: 'the flower lines, Guibao’s three lines, the petals blown, and the servant’s whisper',
    shots: [
      [0, 9, 'Every line lands on him', '句句飞到亮功', '「桃花细逐杨花落。」……「无可奈何花落去。」……「笑隔荷花共人语。」', 'Wenhui, Lu and Yang each fly a flower line, and each one lands on Lianggong.', '文辉、陆宗沅、杨方猷飞花，句句数到亮功。'],
      [9, 18, 'Three lines at once', '一连说了三句', '桂保一连说了三句……众人拍手称妙', 'Challenged, Guibao rattles off three lines in a row; Lianggong drinks three and a half cups.', '桂保一连三句，众人拍手称妙，亮功倒饮了三个半杯。'],
      [18, 27, 'A face of petals', '花瓣贴得他一脸', '桂保对着他脸一吹，将些花瓣贴得他一脸……打了一个喷嚏', 'Guibao crushes plum blossoms and blows them into Lianggong’s face; he sneezes. “A painted face, no powder needed!”', '桂保揉碎梅花，对着亮功一吹，花瓣贴了一脸，一瓣吹进鼻孔，打了个喷嚏。'],
      [27, 36, 'Madam has sent for him', '太太打发人来叫', '恰好真见一个跟班进来，凑了亮功耳边说了两句。亮功登时失色', 'A real servant whispers in Lianggong’s ear; he goes pale and hurries the rice. “Madam has sent for him,” teases Guibao.', '真有跟班来耳语，亮功登时失色，催饭。桂保：准是太太打发人来叫。'],
    ],
    beats: [
      `wordsBeat([{ text: '桃花细逐杨花落', at: 0.4, red: '花' }, { text: '无可奈何花落去', at: 2.8, red: '花' }, { text: '笑隔荷花共人语', at: 5.2, red: '花' }])`,
      `wordsBeat([{ text: '月满花香记得无', at: 0.4, red: '花' }, { text: '漱齿花前酒半酣', at: 2.8, red: '花' }, { text: '楼上花枝笑独眠', at: 5.2, red: '花' }])`,
      B(`petals: true, cues: { sun: [[0, 'speaking'], [3, 'laughing']], yang: [[3.4, 'laughing']], zhou: [[3.4, 'laughing']], lu: [[3.4, 'laughing']], wenhui: [[3.4, 'laughing']] }, move: { guibao: { x: 3.4, cues: [[0.4, 'pointing'], [2.6, 'speaking'], [4, 'laughing']] } }`),
      B(`cues: { sun: [[3.4, 'fuming']], guibao: [[6, 'laughing']], yang: [[6.4, 'laughing']], zhou: [[6.4, 'laughing']], lu: [[6.4, 'laughing']], wenhui: [[6.4, 'laughing']] }, extra: [who.servant(9, { z: 2.3, walk: [9, 3, 0.3, 3], flip: true, cues: [[3.2, 'whisper']] })]`),
    ],
    subtitles: [
      [0.4, 4.6, '文辉便道：「桃花细逐杨花落。」轮应陆宗沅、孙亮功各一杯。', 'Wenhui recited, “Peach blossoms drift after the willow flowers”—a cup each for Lu and Lianggong.'],
      [4.6, 8.6, '陆宗沅便道：「无可奈何花落去。」杨方猷道：「笑隔荷花共人语。」', 'Lu: “Helplessly the flowers fall away.” Yang: “Laughing across the lotus, talking with another.”'],
      [9.4, 13.6, '亮功道：「他若能随口说两句飞着我，我就喝。」桂保一连说了三句，', 'Lianggong: “If he can fly two more at me off the cuff, I’ll drink.” Guibao rattled off three lines,'],
      [13.6, 17.6, '众人拍手称妙，亮功无法，倒饮了三个半杯。', 'the guests applauded, and Lianggong had to drink three and a half cups.'],
      [18.4, 22.6, '桂保将几朵梅花揉碎了，说道：「我一吹，落到人身上，都要喝的。」', 'Guibao crushed some plum blossoms: “I’ll blow—whoever they land on must drink.”'],
      [22.6, 26.6, '对着他脸一吹，花瓣贴得他一脸，打了一个喷嚏。陆宗沅道：「这个花脸好，不用上粉。」', 'He blew them into Lianggong’s face; Lianggong sneezed. Lu: “A fine painted face—no powder needed!”'],
      [27.4, 31.6, '恰好真见一个跟班进来，凑了亮功耳边说了两句。亮功登时失色。', 'Just then a real servant came and whispered in his ear. Lianggong went pale.'],
      [31.6, 35.6, '桂保道：「准是太太打发人来叫，回去迟了是要顶灯的。」众人又笑。', 'Guibao: “Madam has sent for you—late home, and you’ll balance a lamp on your head!” More laughter.'],
    ],
  },
  {
    n: 42, title: ['Qinguan and Qiguan', '琴官、琪官'],
    description: ['Wenhui rewards Guibao with twenty taels; in the study Guibao tells Wang Xun and Zhongqing that two new boys have joined the troupe—Qinguan and Qiguan.', '文辉赏桂保二十两；桂保到书房告诉王恂、仲清，班里新来了琴官、琪官。'],
    staging: 'the reward, Guibao’s news in the study, and the two new actors in moonlight',
    shots: [
      [0, 12, 'Twenty taels', '二十两银子', '文辉赏了桂保二十两银子，桂保谢了', 'Wenhui rewards Guibao with twenty taels of silver.', '文辉赏了桂保二十两银子。'],
      [12, 24, 'Two new boys', '新来了两个', '我们班里新来了两个：一个叫琴官，一个叫琪官', 'In the study, Guibao tells Wang Xun and Zhongqing: two new boys have joined the troupe.', '桂保到书房说：我们班里新来了两个。'],
      [24, 36, 'The Flower Manual reprinted', '《花选》又要翻刻了', '生得色艺俱佳，只怕史竹君的《花选》又要翻刻了。', 'Qinguan and Qiguan, fine in looks and art: Nanxiang’s Flower Manual will need a new printing.', '琴官、琪官色艺俱佳，只怕《花选》又要翻刻了。'],
    ],
    beats: [
      B(`cues: { wenhui: [[0.4, 'speaking']] }, move: { guibao: { x: 2.4, cues: [[4, 'bow']] } }, leave: ['sun'], props: [{ kind: 'silver', x: 1.6, y: 1.05, s: 0.9, from: 2 }]`),
      T(`place: 'study', cast: [who.wangxun(-2.4), who.zhongqing(-0.8, { cues: [[6, 'laughing']] }), who.guibao(1.6, { flip: true, cues: [[0.4, 'speaking']] })]`),
      T(`place: 'moon-palace', aura: [-0.6, 0.4], petals: true, cast: [{ kind: 'dan', x: -1.8, pose: DAN_POSES[1], opacity: 0.8 }, { kind: 'dan', x: 0.6, h: 4.2, pose: DAN_POSES[6], opacity: 0.7 }], ${lines('琪官', '琴官')}`),
    ],
    subtitles: [
      [0.4, 11.6, '文辉赏了桂保二十两银子，桂保谢了，走到书房来找王恂、仲清，', 'Wenhui rewarded Guibao with twenty taels; he thanked him and went to find Wang Xun and Zhongqing in the study.'],
      [12.4, 18, '谈了一会，说道：「我们班里新来了两个：', 'After a while he said, “Two new ones have joined our troupe:'],
      [18, 23.6, '一个叫琴官，一个叫琪官，', 'one called Qinguan, the other Qiguan—'],
      [24.4, 30, '生得色艺俱佳，只怕史竹君的《花选》又要翻刻了。」', 'both beautiful and gifted. I fear Shi Zhujun’s Flower Manual will need a new printing.”'],
      [30, 35.6, '不知后事如何，且听下回分解。', 'To know what happens next, listen to the next chapter.'],
    ],
  },
];
void words;
