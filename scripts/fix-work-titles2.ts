/** Round 2 of cited-work title normalization (chapters 38–60 long tail). */
import fs from "fs";
import path from "path";

type Rule = { ch: number; from: string | RegExp; to: string };

const rules: Rule[] = [
  // ch.38
  { ch: 38, from: "Waking and Sleeping", to: "The Awakening from Sleep Collection" },
  { ch: 38, from: "Heng Yue Stele", to: "Mount Heng Stele" },
  { ch: 38, from: "Copper Basin Inscription", to: "Bronze Plate Inscription" },
  { ch: 38, from: "Zuo Zhuan", to: "Zuo Tradition" },
  { ch: 38, from: "Yishan Inscription", to: "Mount Yi Inscription" },
  { ch: 38, from: "Epitaph for the Ministry of Works", to: "Epitaph of the Works Department" },
  { ch: 38, from: "Sky-Mother Mountain", to: "Mount Tianmu" },
  { ch: 38, from: "Southern Mountain", to: "South Mountain" },
  { ch: 38, from: "Rhymes for Poetry", to: "Poetic Rhymes" },
  { ch: 38, from: "Augmented Rhymes", to: "Rhyme Supplement" },
  { ch: 38, from: /Rhyme Treasury(?! Jade)/g, to: "Rhyme Treasury Jade Collection" },
  { ch: 38, from: "Concise Ministry of Rites Rhymes", to: "Abridged Ministry of Rites Rhymes" },
  { ch: 38, from: "Records of the Vanished State of Yue", to: "Book of Yue Annals" },
  { ch: 38, from: "Southern Sea Records", to: "Record of the South Sea" },
  { ch: 38, from: "Rhapsody on the Goddess of the Luo River", to: "Rhapsody on the Goddess of the Luo" },
  { ch: 38, from: "Rhapsody on the Divine Woman", to: "Rhapsody on the Goddess" },
  { ch: 38, from: "Rhapsody on the Beautiful Woman", to: "Rhapsody on Lust" },
  { ch: 38, from: "Secret Fascinations in Miscellaneous Affairs", to: "Miscellaneous Secret Affairs" },
  { ch: 38, from: "Zashi Mixin", to: "Miscellaneous Secret Affairs" },
  { ch: 38, from: "Taiyi Elbow-Sleeve Handbook", to: "Taichi Elbow-Backup Formulary" },
  // ch.41
  { ch: 41, from: "Gou Shan Yue", to: "Moon over Mount Gou" },
  { ch: 41, from: "Jin Chan Dao", to: "Brocade-Wrapped Road" },
  { ch: 41, from: "Nine Plays of the Red Snow Pavilion", to: "Nine Works from Red Snow Tower" },
  { ch: 41, from: "Zhu Nu Ti Yin Deng", to: "Red Slave Trimming the Silver Lamp" },
  { ch: 41, from: "Yan Guo Sheng", to: "Sound of Geese Passing" },
  { ch: 41, from: "Xiao Tao Hong", to: "Little Peach Red" },
  { ch: 41, from: "Lin Jiang Xian", to: "Immortal by the River" },
  { ch: 41, from: "Yi Zhi Hua", to: "A Spray of Flowers" },
  { ch: 41, from: "Jie Jie Gao", to: "Section by Section Higher" },
  { ch: 41, from: "Admiring the Flowers", to: "Viewing Flowers" },
  { ch: 41, from: "The Flower Libation", to: "Sacrificing to the Flowers" },
  // ch.42
  { ch: 42, from: "The Quarrel", to: "Mutual Scolding" },
  // ch.43
  { ch: 43, from: "Lan Hua Mei", to: "Too Lazy to Paint the Brows" },
  { ch: 43, from: "Dream of the Plum Blossoms", to: "Dream of the Plum Blossom" },
  { ch: 43, from: "Book of Music", to: "Record of Music" },
  { ch: 43, from: "Touring the Lake to Borrow an Umbrella", to: "Borrowing an Umbrella on the Lake" },
  { ch: 43, from: "Searching the Mountain and Smashing the Cart", to: "Searching the Mountain, Driving the Cart" },
  { ch: 43, from: "Parting from Mother Under a Hail of Arrows", to: "Parting from Mother amid Flying Arrows" },
  { ch: 43, from: "Admonishing the Son with a Single Sword", to: "Admonishing the Son with a Single Saber" },
  { ch: 43, from: "Making a Ruckus in Court by Killing the Dog", to: "Raising a Ruckus at Court, Pouncing on a Dog" },
  { ch: 43, from: "Robbing the Inn and Stealing the Chicken", to: "Attacking the Inn; Stealing the Chicken" },
  // ch.44
  { ch: 44, from: "Rainbow Skirt and Feathered Robe", to: "Rainbow Skirt and Feathered-Robe Dance" },
  // ch.46
  { ch: 46, from: "Bailiang Terrace", to: "Cypress Beam" },
  // ch.48
  { ch: 48, from: "Prelude to Water Melody", to: "Prelude to Water Tune" },
  { ch: 48, from: "Clear and Level Tone", to: "Clear Peace Tune" },
  { ch: 48, from: "Preface to the Tengwang Pavilion", to: "Preface to the Pavilion of Prince Teng" },
  { ch: 48, from: "Pan Jinlian Teasing Her Brother-in-Law in the Snow", to: "Pan Jinlian Teases Her Uncle-in-Law in the Snow" },
  { ch: 48, from: "Garden of Ease Farewell", to: "Farewell at the Garden of Ease" },
  // ch.50
  { ch: 50, from: "Startling Change", to: "Startled by Change" },
  { ch: 50, from: "Rolling Embroidered Ball", to: "Rolling Silk Ball" },
  { ch: 50, from: "Chattering Tune", to: "Chattering Command" },
  { ch: 50, from: "Taking Off the Cloth Gown", to: "Removing the Cloth Jacket" },
  { ch: 50, from: "Pleading to the Sun", to: "The Piteous Appeal" },
  // ch.52
  { ch: 52, from: "Jealous Qiao", to: "Feigning Jealousy" },
  { ch: 52, from: "The Pawned Headscarf", to: "Pawned Headscarf" },
  { ch: 52, from: "'Heartbreak'", to: "'Heartbreak Lyrics'" },
  // ch.53
  { ch: 53, from: "*Bowing to the Rock*", to: "*Picture of Worshipping the Stone*" },
  { ch: 53, from: "Bowing to the Rock", to: "Picture of Worshipping the Stone" },
  { ch: 53, from: "*Peach Blossom Fan*", to: "*Peach Blossom Song*" },
  // globals applied to every chapter (unambiguous strings)
  { ch: 0, from: "Longing for Parents, Abandoning the Feast", to: "Longing for One's Parents, Abandoning the Feast" },
  { ch: 0, from: "Golden-Thread Song", to: "Jinlü Qu" },
  { ch: 0, from: "Flower Register", to: "Selection of Flowers" },
  { ch: 0, from: "The Book of Songs", to: "The Classic of Poetry" },
  { ch: 0, from: "the Book of Songs", to: "the Classic of Poetry" },
  { ch: 0, from: "Book of Songs", to: "Classic of Poetry" },
  { ch: 0, from: "Piercing the Eye", to: "Piercing the Eye" },
];

const dry = process.argv.includes("--dry");
const dir = path.join(process.cwd(), "src", "chapterTranslations");
let total = 0;
for (let ch = 1; ch <= 60; ch++) {
  const chRules = rules.filter((r) => r.ch === ch || r.ch === 0);
  if (chRules.length === 0) continue;
  const file = path.join(dir, `chapterTranslations${ch}.ts`);
  let s = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const r of chRules) {
    let n = 0;
    if (typeof r.from === "string") {
      if (r.from === r.to) continue;
      n = s.split(r.from).length - 1;
      if (n > 0) s = s.split(r.from).join(r.to);
    } else {
      n = (s.match(r.from) ?? []).length;
      if (n > 0) s = s.replace(r.from, r.to);
    }
    if (n > 0) {
      console.log(`ch.${ch}: ${String(r.from)} -> ${r.to}  x${n}`);
      changed = true;
      total += n;
    } else if (r.ch !== 0) {
      console.log(`ch.${ch}: NO MATCH for ${String(r.from)}`);
    }
  }
  if (changed && !dry) fs.writeFileSync(file, s);
}
console.log(`\nTotal replacements: ${total}${dry ? " (dry run)" : ""}`);
