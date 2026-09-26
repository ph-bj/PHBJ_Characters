import { defineStory } from '../../define';

/**
 * Chapter 1, paragraph 10.
 *
 * 原文：现在这京城里人山人海，譬如见位尊望重者，与之讲官话，说官箴，自顶至踵，一一要合官体，则可
 *   畏。见酸腐措大，拘手挛足，曲背耸肩而呻吟作推敲之势，则可笑。见市井逐臭之夫，评黄白，论市
 *   价，俗气熏人，则可恶。
 *
 * Translation: The capital today is an endless sea of humanity. Suppose you meet a man of exalted rank and
 *   heavy prestige; to converse with him means exchanging official jargon and mouthing
 *   bureaucratic maxims, every inch from head to toe bound by official decorum—such a man
 *   inspires only dread. Suppose you meet a sour, pedantic scholar, his hands cramped and his
 *   feet bound, hunching his back and shrugging his shoulders as he groans in the pretense of
 *   deep contemplation—such a man is merely laughable. Suppose you meet a market vulgarity
 *   chasing after foul scents, haggling over silver and gold, debating market prices, exuding a
 *   stench of commonness that assaults the senses—such a man is simply detestable.
 *
 * Staged from tableau beats (cinema/beats/tableau.ts): three caricatures in turn: the official, the pedant, the merchant.
 */
export default defineStory({
  title: { en: 'Dreadful, laughable, detestable', zh: '可畏、可笑、可恶' },
  description: {
    en: 'Nanxiang sorts the capital’s crowds: the official who inspires dread, the pedant who is laughable, the merchant who is detestable.',
    zh: '南湘数京城众生：位尊望重者可畏，酸腐措大可笑，市井逐臭之夫可恶。',
  },
  shots: [
    {
      start: 0, end: 12,
      title: { en: 'The official: dreadful', zh: '可畏' },
      quote: '见位尊望重者，与之讲官话，说官箴……则可畏。',
      caption: { en: 'A man of rank, all official jargon and decorum from head to toe: he inspires dread.', zh: '位尊望重者，满口官话，自顶至踵合乎官体：可畏。' },
    },
    {
      start: 12, end: 24,
      title: { en: 'The pedant: laughable', zh: '可笑' },
      quote: '见酸腐措大，拘手挛足，曲背耸肩而呻吟作推敲之势，则可笑。',
      caption: { en: 'A sour pedant, hunched and shrugging, groaning over his phrases: laughable.', zh: '酸腐措大，曲背耸肩，呻吟推敲：可笑。' },
    },
    {
      start: 24, end: 36,
      title: { en: 'The merchant: detestable', zh: '可恶' },
      quote: '见市井逐臭之夫，评黄白，论市价，俗气熏人，则可恶。',
      caption: { en: 'A market vulgarian haggling over silver and prices: detestable.', zh: '市井逐臭之夫，评黄白，论市价：可恶。' },
    },
  ],
  subtitles: [
    { start: 0.4, end: 5, zh: '现在这京城里人山人海，', en: 'The capital today is an endless sea of humanity.' },
    { start: 5, end: 11.6, zh: '见位尊望重者，与之讲官话，说官箴，一一要合官体，则可畏。', en: 'A man of exalted rank, all official jargon, every inch bound by decorum—he inspires only dread.' },
    { start: 12.4, end: 18, zh: '见酸腐措大，拘手挛足，曲背耸肩，', en: 'A sour, pedantic scholar, hands cramped, hunching his back and shrugging his shoulders,' },
    { start: 18, end: 23.6, zh: '而呻吟作推敲之势，则可笑。', en: 'groaning in the pretense of deep thought—he is merely laughable.' },
    { start: 24.4, end: 30, zh: '见市井逐臭之夫，评黄白，论市价，', en: 'A market vulgarian chasing foul scents, haggling over silver and gold,' },
    { start: 30, end: 35.6, zh: '俗气熏人，则可恶。', en: 'exuding a stench of commonness—he is simply detestable.' },
  ],
});
