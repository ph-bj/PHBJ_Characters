import { defineStory } from '../../define';

/**
 * Chapter 3, paragraph 17. The shots and subtitles; the
 * hand-staged film itself is in scene.ts beside this file.
 *
 * 原文：那卖玉器的本是个老奸臣猾，知是南边人初进京的光景，便索性放起刁来道：「我卖了四十多年的玉器，
 *   走了几十个戏园子，从没有见还了价，重说不要的。老爷那里不多使二两银，别这么着。」靠紧了聘才，
 *   把壶儿捏着。聘才没奈何，只得直说道：「今日实在没有带银子，明日带了银子来取你的罢。」那卖玉器
 *   的那里肯信道：「老爷没有银子，就使票子。」聘才道：「连票子也没有。」卖玉器的道：「我跟老爷府
 *   上去领。」聘才道：「我住得远。」卖玉器的只当不听见，仍捏着壶儿紧靠着聘才。那时台上换了二簧戏
 *   ，一个小旦才出场，尚未开口，就有一个人喊起好来，于是楼上楼下，几十个人同声一喊，倒像救火似的
 *   。聘才吓了一跳，身子一动，碰了那卖玉器的手，只听得扑托一响，把个松香烟壶，砸了好几块。聘才吃
 *   了一惊，发怔起来，那卖玉器的倒不慌不忙慢慢的将碎壶儿捡起，搁在聘才身边道：「这位爷闹脾气，整
 *   的不要要碎的。如今索性拉交情，整的是六两银，碎的算六吊大钱，十二吊京钱。」聘才便生起气来道：
 *   「你这人好不讲理，方才说二两，怎么如今又要六两，你不是讹我么？」旁边那些听戏的，都替聘才不平
 *   。
 *
 * Translation: The peddler, a seasoned trickster adept at reading faces, instantly recognized Pincai as a
 *   newcomer to the capital and seized the advantage. "I have peddled jade for forty years,
 *   traversing dozens of playhouses, and never once have I met a gentleman who strikes a bargain
 *   only to rescind it! Do not hoard your two taels, sir. Do not play me false." He pressed
 *   aggressively against Pincai, keeping the bottle firmly in the young man's grasp. Left with
 *   no recourse, Pincai confessed, "I carry no silver upon my person today. Bring it tomorrow,
 *   and I shall pay you in full." The peddler sneered in disbelief, "No silver? Then pay with a
 *   bank note." Pincai shook his head, "I possess no notes either." The peddler pressed closer,
 *   "Then I shall accompany Your Excellency to your residence to collect." Pincai replied, "I
 *   live far from here." The old man acted deaf to the excuse, leaning heavily against Pincai,
 *   the bottle practically trapped between them. On stage, the melody shifted to a Erhuang aria.
 *   A young dan had barely stepped into the light, lips parted to sing, when a solitary voice in
 *   the crowd roared, "Bravo!" Instantly, the theater erupted—dozens of voices from the pit to
 *   the rafters joined in a deafening, thunderous cheer, startling as a fire gong. Pincai
 *   flinched violently. His arm jerked, striking the peddler's hand. With a sharp crack, the
 *   amber-colored pine-resin bottle shattered on the floor. Pincai froze in dismay. The peddler,
 *   unhurried and unnervingly calm, knelt to gather the shards, placing them methodically beside
 *   Pincai. "It seems the gentleman has a temper," he drawled. "He rejects the whole, preferring
 *   the broken. Let us settle this amicably: the intact bottle was six taels; the fragments are
 *   six large strings of cash—twelve strings of capital cash in total." Pincai's embarrassment
 *   flared into anger. "You are entirely devoid of reason! A moment ago, you demanded two taels;
 *   now you demand six. Is this not blatant extortion?" The surrounding patrons murmured in
 *   sympathetic outrage on Pincai's behalf.
 *
 * Staging: the peddler leaning close; a dan’s entrance and the whole house roaring; the bottle falling and
 *   shattering in slow motion; the shards laid out, the new demand, and the neighbours turning.
 */
export default defineStory({
  title: { en: 'The bottle smashes', zh: '砸了好几块' },
  description: {
    en: 'The peddler, seeing a green southerner, presses him: no silver? a note, then; or he’ll follow him home. On stage a young dan appears and one shout of “Bravo!” sets the whole house roaring; Pincai starts, knocks the old man’s hand, and the bottle smashes. Calmly gathering the pieces, the peddler now wants six taels. Pincai is furious, and the neighbours take his side.',
    zh: '卖玉器的看他是初进京的南边人，索性放刁：没银子就使票子，要跟到府上去领。台上小旦一出场，满园喊好，聘才吓了一跳，碰得烟壶砸了。老头慢慢捡起碎片，反要六两。聘才生气，旁人都替他不平。',
  },
  shots: [
    {
      start: 0, end: 8,
      title: { en: 'No silver, no note', zh: '连票子也没有' },
      quote: '「老爷没有银子，就使票子。」聘才道：「连票子也没有。」',
      caption: { en: 'Pressed close: no silver? Then a note. No note? He’ll follow him home.', zh: '老头紧靠着他：没银子使票子，没票子跟到府上去领。' },
    },
    {
      start: 8, end: 17,
      title: { en: 'The house roars', zh: '同声一喊' },
      quote: '就有一个人喊起好来，于是楼上楼下，几十个人同声一喊',
      caption: { en: 'A young dan steps out; one “Bravo!” and the whole house roars like a fire alarm.', zh: '小旦才出场，一人喊好，楼上楼下几十人同声一喊。' },
    },
    {
      start: 17, end: 27,
      title: { en: 'Smashed', zh: '砸了好几块' },
      quote: '碰了那卖玉器的手，只听得扑托一响，把个松香烟壶，砸了好几块',
      caption: { en: 'Pincai starts, jogs the old man’s hand, and the bottle smashes—resin, not amber.', zh: '聘才吓得一动，碰了他的手，松香烟壶砸了好几块。' },
    },
    {
      start: 27, end: 36,
      title: { en: '“Extortion!”', zh: '你不是讹我么' },
      quote: '整的是六两银，碎的算六吊大钱',
      caption: { en: 'The peddler lays out the pieces: six taels now. Pincai flares up; the neighbours side with him.', zh: '老头捡起碎片，要六两；聘才生气，旁人都替他不平。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 4, zh: '聘才只得直说道：「今日实在没有带银子。」那卖玉器的道：「老爷没有银子，就使票子。」', en: '“I really have no silver with me.” “Then use a banknote, sir.”' },
    { start: 4, end: 7.6, zh: '聘才道：「连票子也没有。」卖玉器的道：「我跟老爷府上去领。」', en: '“I have no note either.” “Then I’ll come home with you to collect.”' },
    { start: 8.4, end: 12.6, zh: '那时台上换了二簧戏，一个小旦才出场，尚未开口，就有一个人喊起好来，', en: 'On stage an erhuang piece began; a young dan had barely stepped out when someone shouted “Bravo!”' },
    { start: 12.6, end: 16.6, zh: '于是楼上楼下，几十个人同声一喊，倒像救火似的。', en: 'and dozens of voices, upstairs and down, roared as one, like a fire alarm.' },
    { start: 17.4, end: 21.6, zh: '聘才吓了一跳，身子一动，碰了那卖玉器的手，', en: 'Pincai started, his arm jerked against the peddler’s hand,' },
    { start: 21.6, end: 26.6, zh: '只听得扑托一响，把个松香烟壶，砸了好几块。', en: 'and with a crack the pine-resin bottle shattered in pieces.' },
    { start: 27.4, end: 31.6, zh: '「这位爷闹脾气，整的不要要碎的。整的是六两银，碎的算六吊大钱。」', en: '“The gentleman has a temper—he wouldn’t have it whole, so he’ll have it broken. Six taels whole; six strings broken.”' },
    { start: 31.6, end: 35.6, zh: '聘才生起气来道：「方才说二两，怎么如今又要六两，你不是讹我么？」', en: 'Pincai flared up: “You said two, now you want six—this is extortion!”' },
  ],
});
