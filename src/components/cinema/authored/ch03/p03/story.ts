import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 3. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：看壁上的挂钟已到未初，偶然看见一个紫竹书架上有几本残书，顺手取了两本看时，却是抄写的曲本，无
 *   非是《牡丹亭》、《长生殿》上的几枝曲子。又取一本薄薄的二三十页，却是刻板的，题着《曲台花选》
 *   。略翻一翻，像品题小旦的。再拿几本看时，是不全的《缀白裘》。聘才道：「这两本书是自己的么？想
 *   来音律是讲究的。」许顺道：「那里懂什么音律，不知是那个爷们撂在这里的。」聘才要借去看看，许顺
 *   道：「只管拿去。」聘才袖了出来，到自己房里，歪在炕上，取那本《花选》看了一会，记清了八个名氏
 *   。一面想道：「原来京里有这样好小旦，怪不得外省人说：「要看戏，京里去。」相公非但好，个个有绝
 *   技，且能精通文墨，真是名不虚传。
 *
 * Translation: Glancing at the wall clock, Pincai noted it was just past one in the afternoon. His gaze
 *   drifted to a purple-bamboo bookshelf, where a few worn volumes caught his eye. Pulling out
 *   two at random, he found them to be hand-copied opera librettos, containing nothing more than
 *   a few scattered arias from The Peony Pavilion and The Palace of Eternal Life. He then
 *   selected a slender, woodblock-printed book of twenty-odd pages titled The Opera Stage Flower
 *   Manual. Leafing through it, he realized it was a critique and ranking of the capital's young
 *   dan actors. Picking up another incomplete volume, he found it to be Pieced White Fur. Pincai
 *   mused aloud, "Are these books yours? You must have a keen ear for music." Xu Shun laughed,
 *   "What do I know of music? I have no idea which of the masters left them here." When Pincai
 *   asked to borrow them, Xu Shun agreed. Tucking them into his sleeve, Pincai returned to his
 *   room and reclined on the heated brick bed. He studied the The Opera Stage Flower Manual at
 *   length, committing the names of eight renowned performers to memory. "So the capital boasts
 *   such extraordinary talents," he reflected. "No wonder provincial folks always say, 'For true
 *   opera, one must go to the capital.' These actors are not only unparalleled in beauty but
 *   also possess consummate skills and literary refinement—truly living up to their names."
 *
 * Staging: the wall clock and the bamboo shelf; the books in close-up; borrowed and carried off in a
 *   sleeve; Pincai on his kang while the eight performers of the Manual appear around him.
 */
export default defineStory({
  title: { en: 'The Opera Stage Flower Manual', zh: '曲台花选' },
  description: {
    en: 'On a purple-bamboo shelf in the accounts room Pincai finds copied arias and a slim printed book ranking the capital’s young dan. He borrows it, reads it on his kang and learns eight names by heart: for opera, go to the capital.',
    zh: '聘才在账房紫竹书架上翻出曲本和一本《曲台花选》，借回房中歪在炕上细看，记清了八个名氏。',
  },
  shots: [
    {
      start: 0, end: 9,
      title: { en: 'A shelf of worn books', zh: '紫竹书架' },
      quote: '偶然看见一个紫竹书架上有几本残书',
      caption: { en: 'Past one by the wall clock, Pincai notices a few worn books on a purple-bamboo shelf.', zh: '挂钟已过未初，紫竹书架上有几本残书。' },
    },
    {
      start: 9, end: 18,
      title: { en: 'Arias and a flower manual', zh: '《曲台花选》' },
      quote: '题着《曲台花选》。略翻一翻，像品题小旦的。',
      caption: { en: 'Copied arias from The Peony Pavilion, and a slim printed book that ranks the young dan.', zh: '抄写的曲本，还有一本刻板的《曲台花选》，品题小旦。' },
    },
    {
      start: 18, end: 27,
      title: { en: '“Take them”', zh: '只管拿去' },
      quote: '许顺道：「只管拿去。」聘才袖了出来',
      caption: { en: 'Xu Shun has no ear for music and lets him take them; Pincai tucks them in his sleeve.', zh: '许顺不懂音律，叫他只管拿去；聘才袖了出来。' },
    },
    {
      start: 27, end: 36,
      title: { en: 'Eight names', zh: '记清了八个名氏' },
      quote: '取那本《花选》看了一会，记清了八个名氏。',
      caption: { en: 'On his kang he reads, and eight performers seem to step off the page: to see opera, go to the capital.', zh: '歪在炕上看《花选》，八个名旦仿佛从书上走出：要看戏，京里去。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4.6, zh: '看壁上的挂钟已到未初，', en: 'The wall clock showed just past one.' },
    { start: 4.6, end: 8.6, zh: '偶然看见一个紫竹书架上有几本残书，', en: 'On a purple-bamboo shelf he noticed a few worn books:' },
    { start: 9.4, end: 13.6, zh: '却是抄写的曲本，无非是《牡丹亭》、《长生殿》上的几枝曲子。', en: 'copied arias from The Peony Pavilion and The Palace of Eternal Life,' },
    { start: 13.6, end: 17.6, zh: '又取一本，题着《曲台花选》，像品题小旦的。', en: 'and a slim printed book, The Opera Stage Flower Manual, ranking the young dan.' },
    { start: 18.4, end: 22.6, zh: '聘才道：「想来音律是讲究的。」许顺道：「那里懂什么音律。」', en: '“You must know music.” Xu Shun: “What do I know of music?”' },
    { start: 22.6, end: 26.6, zh: '聘才要借去看看，许顺道：「只管拿去。」聘才袖了出来。', en: 'Pincai asked to borrow them. “Take them,” said Xu Shun. Pincai slipped them into his sleeve.' },
    { start: 27.4, end: 31.6, zh: '歪在炕上，取那本《花选》看了一会，记清了八个名氏。', en: 'Lying on his kang he read the Manual and learned eight names by heart.' },
    { start: 31.6, end: 35.6, zh: '怪不得外省人说：「要看戏，京里去。」', en: 'No wonder people in the provinces say, “For opera, go to the capital.”' },
  ],
});
