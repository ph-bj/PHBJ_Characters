/**
 * Chapter 25: paragraphs 0–1 unchanged; 2–16 from chapter25-mid-en.mjs; 17–29 tail (lotus onward).
 */
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mid } from './translations/chapter25-mid-en.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const OUTPUT = join(root, 'src/chapterTranslations3to60.ts');
const TMP = join(__dirname, 'tmp_chapter.json');

const src = readFileSync(OUTPUT, 'utf8');
const match = src.match(/Record<number, string\[\]> = (\{[\s\S]*?\n\})/);
const existing = Function('"use strict"; return (' + match[1] + ')')();
const prev = existing[25];

if (mid.length !== 15) {
  console.error('mid must be 15 paragraphs (CN 2–16), got', mid.length);
  process.exit(1);
}

const tail = [
  `By now the clock showed nearly the end of the wei hour; the banquet was cleared. Young Master Hua rose and said: "I came to stroll the garden — today again there was no time — yet the lotus must be seen." Ziyun had the feast carried to the Chanting-Autumn Waterside Pavilion, ordered lotus-gathering boats prepared, and told the ten performers to dress as maidens gathering lotus and paddle into the pool; guests were shown to the pavilion. Young Master Hua and company stepped inside — lotus stretched on every side, red perfume thick, emerald leaves layered — a world of color and scent. They sat again to wine. Four or five little boats slipped to the pool's heart; aboard sat the celebrated dans, costumed in long skirts and short sleeves, lotus faces above peach cheeks, threading through the blossoms — each lovely profile half-lost among the flowers. Along the shore lay a craft with brocade sail and silk hawser; within, an ensemble struck up the full wind-and-percussion "ten-fold." The gatherers sang the "Lotus-Gathering" song — voices tender and winding — heard like midnight song, seen like river goddesses at play — as if Zhang Lihua had dressed as an immortal and Zhu Gui'er played Chang'e — all grew dizzily happy, nearly rolling from their seats. Only Young Master Hua's high spirits mounted: he said to Ziyun: "Earlier plays never finished — that one alone took half the day. Why not sing 'Golden Strand' again and dance 'Rainbow Skirts' — let each show a glimpse of his art — worthy of elder brother's choosing colors and tones — let the troupe give their utmost and not waste the stage — what say you?"`,

  `Ziyun laughed: "Exactly my wish." He had the whole troupe summoned up. Hearing the order, they plied orchid oars toward the pavilion, landed, and drew up in goose formation beyond the railing. Young Master Hua called four men in by name: Huifang, Qinyan, Baozhu, Sulan. To them he said: "In 'Immortals on Mount Emei' just now the whole cast stood forth but not every gesture appeared. Each of you name a piece you do best." The four thought and each named one. Ziyun said: "Those are not yet your acme — only Meixiang and Xiangwan's 'Exclusive Claim' and Yaoqing and Yuyi's 'Startled Dream' and 'Seeking the Dream' are peerless — no one else performs them — pity they overlap." Wenze said: "Why not pair the two sides and sing together — each perfecting his part — pearls strung on one string?" Cixian and Zhongyu both said: "Excellent — though evenly matched there will still be shades to savor." Young Master Hua laughed: "Fresh — I have never seen two sing the same piece together — even 'Seeking the Dream' may be doubled." Ziyun relayed orders to the troupe to wait in the wings and had tables shifted forward. Baozhu and Qinyan withdrew to dress. Soon rose grieving bamboo and piercing strings — bright as bells. Young Master Hua watched Qinyan emerge from the east — like bright moon first rising on a breeze — those steps like spring clouds drifting toward heaven's edge of longing. Baozhu came from the west — like a shy bloom about to open, dawn dew still clinging — steps like willow strands trailing into crimson dust. When they sang, both voices turned and flowed, clear and round; amid green trees and kingfisher bamboo fledgling phoenix answered fledgling — each word honey-warm as jade, each tone shaking soul and bowels. One cast idle autumn glances, neck bent low; the other drew brows faintly knit, spring stars briefly meeting. The whole company sat entranced — hearts adrift, eyes drunk.`,

  `Ziyun only nodded and smiled. Young Master Hua smacked the table and cried: "Splendid! Splendid! Today I first believe peerless beauty exists under heaven — I deeply regret filling embroidered curtains with Momu and Wuyan look-alikes." He added loudly: "I blame Elder Brother Duxiang for hoarding goddesses — selfishly feasting his eyes — only after your fill do you invite guests to pick up what fragrance remains — today you drink ten huge cups before anything else."`,

  `He ordered Lin Shanzhi to bring his own great jade wine-cup. Shanzhi saw the hour late and knew his master's temper — once roused he would go day or night — though he answered aloud he stood frozen, eyes on Ziyun. Ziyun took the hint; knowing his drinking could not match, he said: "My shallow capacity truly cannot stomach more — let my door cup stand for your great dipper." Young Master Hua still refused until Cixian, Wenze, and Zhongyu mediated: "Not only Duxiang — none of us could match those cups — fine him three small cups instead." Knowing Ziyun drank little, Young Master Hua yielded. They made Ziyun drain three cups in succession while he himself, needing no urging, emptied a dozen large cups and still shouted praise — forced Wenze through three more and Cixian and Zhongyu five or six. Suddenly he turned to Baozhu and Qinyan: "Sing on — when done, sing again." He studied them again minutely and told the company: "These two each have marvels — like five sparrows and six swallows, weight in balance — Lady Zhao and Consort Yang, lean and plump each right. Baozhu's tenderness stirs pity at sight; Qinyan's bones shine like jade — who could bear to send him away? Apart each is supreme — together both shine. Elder Brother Duxiang — today you have truly gladdened me." Ziyun saw Young Master Hua somewhat drunk and knew his habit — at height of mood nothing could stop him — yet could hardly check him — resigned himself to drinking till dawn.`,

  `Meanwhile on stage the two finished singers were not permitted to descend — they must sing again. Baozhu, seeing Young Master Hua's fervor, rejoiced inwardly; seeing him watch once and demand again, he poured still more grace into gesture — both to bind the master's eye and give Duxiang face. Qinyan inwardly resisted — Young Master Hua could not be offended — he swallowed shame — and resented sharing the stage only with Yuan Baozhu as rival, striving to outdo him in skill and feeling. He recalled Young Master's face bore something of Yuxiang — remembered that day performing "Startled Dream" when Yuxiang appeared — hearts had recognized each other across the hall — pity Yuxiang was not here today — else these two songs would not be wasted. "Let me treat Young Master Hua as Yuxiang on that balcony — replay that scene — perhaps spirit moves spirit and Yuxiang dreams me — even if he does not see me, it is as if I saw him." With that he poured himself into every glance — sang again with utter abandon.`,

  `All sat transported — only Lin Shanzhi, watching his master's infatuation, seethed inwardly yet dared not show it. The hour pressed toward you — linger longer and the city gates would shut — yet he could not urge aloud — slipped out and told retainers to hold the gate open, then returned and stood behind Young Master Hua, eyes pleading at Ziyun; everyone understood but none wished to prompt. When Young Master Hua stepped out briefly to relieve himself, Shanzhi bowed low to Ziyun and whispered: "Beg Second Master persuade our lord to drink less and return soon — the gates will close — palace duty waits — delay is no joke." Ziyun nodded: "Quite right — and it is time." Young Master Hua returned and saw Shanzhi whispering: "Still early?" Shanzhi said: "The watch reads you hour proper." Young Master Hua said: "This watch runs fast." Ziyun said: "Since brother is so merry — as I said this morning we should revel to third or fourth watch — stay tonight — do not re-enter the city — Qianzhou and Zhongyu live outside the walls — they fear no gate." Hearing both an invitation to lodge and the remark about outsiders needing no gate, Young Master Hua wavered — charmed by the pavilion yet uneasy about staying.`,

  `Twilight neared lamp-lighting — stay or go tore at him; his train stood in neat ranks below the steps — he half wished to leave; Baozhu and Qinyan were finishing their song — he said to Ziyun: "I had better return to the city." Shanzhi cut in: "Gates will shut — if you go, hurry." Young Master Hua had no choice — rose, dressed formal wear, thanked Ziyun and took leave of the company.`,

  `By now Baozhu and Qinyan had washed off greasepaint and came to see guests off. Young Master Hua clasped Qinyan's hand: "Your singing tops the capital — rest a day then visit my mansion — I have much to ask in detail." From his waist he unclasped a Han jade paired-dragon pendant with purse and gave it to Qinyan — Qinyan bowed thanks. Young Master Hua took two steps, turned back to Baozhu: "You two are matched opponents — hard to declare a winner. You are Duxiang's darling — that is why you seldom come to my house." He asked Ziyun: "Second Brother — may I give him a gift?" Ziyun smiled: "As you will — why ask me?" Young Master Hua undid another jade plaque for Baozhu — Baozhu thanked him. All ten performers escorted them out; Young Master Hua reeled yet turned again and again toward Qinyan, Baozhu, Huifang, Sulan and the rest: "When idle, visit often." At Han Wan Lou he bowed once more to Ziyun and guests, boarded his sedan chair — Shanzhi and Eight Ling aside, sixteen personal attendants and five titled servants shouldered the poles and flew over hill and grove. The ten performers saw them to the garden gate and bowed farewell. Young Master Hua shifted to his green-canopied carriage and nodded repeated injunctions to the actors; followers mounted — the driver feared the gate and lashed once — the carriage flew; luckily Shanzhi had held the gate or they would have missed entry.`,

  `Young Master Hua's ride back to the city needs no further tale.`,

  `Here the ten performers entered; Ziyun had them change into plain clothes, swapped for a larger round table, cleared scraps and ordered fresh dishes. Wenze said: "Today Xinbei had his soul stolen away — I never saw him cling so." Ziyun answered: "In his heart it still was not enough — I feared only he might fall ill from excess — luckily his nature is vigorous — drunk one night — sober next — no harm."`,

  `Of today's ten acts the clearest triumph was Qinyan's — next Baozhu. Baozhu glowed inwardly; only Qinyan stayed cool as frost. Ziyun asked Qinyan: "Today you gained another true connoisseur — Young Master Hua seldom praises — sing for him again at his mansion and your name will ride highest."`,

  `Cixian said: "Young Master Hua truly cherishes beauty — outside gossip lies — today he was warm throughout — no spoiled-young-master air. Yunong — do not stay too cold with people." As all spoke Qinyan seemed about to answer —`,

  `Ziyun knew Qinyan's blunt tongue had nettled Zhongyu and explained: "Yuyong drank too much today — Yaoqing, take him aside to play until the wine sleeps off then return." Baozhu drew Qinyan inward and urged: "You spoke too straight — that Zhang the Second holds grudges — mind yourself."`,
];

const merged = [...prev.slice(0, 2), ...mid, ...tail];

if (merged.length !== 30) {
  console.error('Ch25 expected 30, got', merged.length);
  process.exit(1);
}

writeFileSync(TMP, JSON.stringify({ id: 25, translations: merged }, null, 2), 'utf8');
console.log('OK build-ch25', merged.length);
