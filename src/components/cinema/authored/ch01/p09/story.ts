import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 9. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：这日同来看子玉，门上见是来惯的，是少爷至好，便一直引到书房与子玉见了。仲清又同子玉进内见
 *   了姑母，然后出来与南湘坐下。三人讲了些话，书僮送上香茗。南湘见这室中清雅绝尘，一切陈设甚
 *   精且古，久知其胸次不凡，又见那清华尊贵的仪表，就是近日所选那《曲台花谱》中数人，虽然有此
 *   姿容，到底无此神骨。但见其谦谦自退，讷讷若虚，究不知他何所嗜好，若有些拘执鲜通，胶滞不
 *   化，也算不得全才了。便想来试他一试，即问道：「庾香，我问你，世间能使人娱耳悦目，动心荡魄
 *   的，以何物为最？」子玉蓦然被他这一问，便看着南湘，心里想道：「他是个清狂潇洒人，决不与世
 *   俗之见相同，必有个道理在内。」便答道：「这句话却问得太泛，人生耳目虽同，性情各异。有好繁
 *   华的，即有厌繁华的。有好冷淡的，也有嫌冷淡的。譬如东山以丝竹为陶情，而陋室又以丝竹为乱
 *   耳。有屏蛾眉而弗御，有携姬妾以自随。则娱耳悦目之乐既有不同，而荡心动魄之处更自难合，安能
 *   以一人之耳目性情，概人人之耳目性情？」南湘道：「不是这么说，我是指一种人而言。
 *
 * Translation: On this day, they came together to visit Ziyu. The gatekeepers, recognizing them as
 *   frequent guests and the young master's closest friends, ushered them straight into the
 *   study to meet him. Zhongqing first accompanied Ziyu into the inner chambers to pay his
 *   respects to his aunt, then returned to sit with Nanxiang. After the three had exchanged
 *   pleasantries, a pageboy served fragrant tea. Nanxiang noted the room's transcendent
 *   elegance, its furnishings exquisite and touched with antiquity, fully aware of Ziyu's
 *   extraordinary inner mind. Observing his noble and luminous bearing, he thought that even
 *   the figures recently celebrated in the "The Opera Stage Flower Manual," despite their
 *   physical beauty, lacked this divine spiritual bone. Yet, seeing Ziyu so modest,
 *   self-effacing, and seemingly reserved, Nanxiang wondered what true passions lay hidden
 *   within him. If he proved rigid, inflexible, and unyielding in his views, he could not be
 *   considered a complete talent. Resolving to test him, Nanxiang asked: "Yuxiang, tell me,
 *   what in this world is most capable of pleasing the ear, delighting the eye, and stirring
 *   the soul?" Taken aback by the abrupt question, Ziyu gazed at Nanxiang and thought to
 *   himself: "He is a man of pure, unrestrained elegance; his views will surely defy worldly
 *   conventions, and there must be a deeper reasoning behind his words." He replied: "Your
 *   question casts too wide a net. Though all men share the same ears and eyes, their
 *   temperaments diverge wildly. Some adore bustling prosperity, while others despise it; some
 *   seek cold tranquility, while others loathe it. For instance, Xie An found his spirit lifted
 *   by strings and woodwinds on the Eastern Mountain, yet another might find the same music a
 *   chaotic disturbance in his humble dwelling. One might banish moth-eyebrowed beauties and
 *   refuse their service, while another travels nowhere without concubines in tow. If the
 *   pleasures of the ear and eye are so varied, the things that stir the soul must be even
 *   harder to align. How can one person's senses and temperament dictate the senses and
 *   temperament of all?" Nanxiang shook his head. "That is not my meaning. I am speaking of a
 *   specific kind of person.
 *
 * Staging: the friends shown into the study, tea served, and Nanxiang’s question with Ziyu’s answer.
 */
export default defineStory({
  title: { en: 'Nanxiang’s question', zh: '南湘设问' },
  description: {
    en: 'In Ziyu’s study, over tea, Nanxiang tests him: what most pleases the ear and eye and stirs the soul?',
    zh: '书房茶叙，南湘试问子玉：世间何物最能娱耳悦目、动心荡魄？',
  },
  shots: [
    {
      start: 0, end: 10,
      title: { en: 'Shown straight in', zh: '引到书房' },
      quote: '门上见是来惯的，是少爷至好，便一直引到书房与子玉见了。',
      caption: { en: 'The gatekeepers know the young master’s closest friends and show them straight to the study.', zh: '门上见是少爷至好，一直引到书房。' },
    },
    {
      start: 10, end: 20,
      title: { en: 'Tea in the study', zh: '书僮送上香茗' },
      quote: '三人讲了些话，书僮送上香茗。',
      caption: { en: 'A pageboy serves tea; Nanxiang notes the room’s antique elegance and wonders what passions Ziyu hides.', zh: '书僮送茶；南湘见室中清雅，欲试子玉。' },
    },
    {
      start: 20, end: 36,
      title: { en: 'What stirs the soul?', zh: '动心荡魄' },
      quote: '世间能使人娱耳悦目，动心荡魄的，以何物为最？',
      caption: { en: 'Nanxiang asks what most stirs the soul; Ziyu answers that every temperament differs.', zh: '南湘问何物最能动心荡魄；子玉答：人性情各异。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '这日同来看子玉，门上见是来惯的，', en: 'On this day they came together; the gatekeepers recognized the frequent guests,' },
    { start: 5, end: 9.6, zh: '是少爷至好，便一直引到书房与子玉见了。', en: 'the young master’s closest friends, and ushered them straight into the study.' },
    { start: 10.4, end: 14.6, zh: '三人讲了些话，书僮送上香茗。', en: 'After the three had exchanged pleasantries, a pageboy served fragrant tea.' },
    { start: 14.6, end: 19.6, zh: '南湘见这室中清雅绝尘，便想来试他一试。', en: 'Nanxiang noted the room’s transcendent elegance, and resolved to test him.' },
    { start: 20.4, end: 25, zh: '「庾香，我问你，世间能使人娱耳悦目，动心荡魄的，以何物为最？」', en: '“Yuxiang, what in this world most pleases the ear, delights the eye, and stirs the soul?”' },
    { start: 25, end: 30, zh: '子玉答道：「这句话却问得太泛，人生耳目虽同，性情各异。」', en: 'Ziyu replied: “Your question casts too wide a net. All men share ears and eyes, but their temperaments differ.”' },
    { start: 30, end: 35.6, zh: '南湘道：「不是这么说，我是指一种人而言。」', en: 'Nanxiang shook his head. “That is not my meaning. I speak of a specific kind of person.”' },
  ],
});
