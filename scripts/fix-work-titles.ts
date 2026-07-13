/**
 * One-off normalizer: rewrites cited-work titles in the English chapter
 * translations to the canonical titles from WORK_ENGLISH_BY_CHINESE, based on
 * the July 2026 audit (scripts/audit-cited-works.ts). Rules are chapter-scoped
 * and applied in array order (put longer/more specific strings first).
 *
 * Run: npx tsx scripts/fix-work-titles.ts [--dry]
 */
import fs from "fs";
import path from "path";

type Rule = { ch: number; from: string | RegExp; to: string };

const rules: Rule[] = [
  // ch.1
  { ch: 1, from: "Register of Flowers from the Curved Terrace", to: "The Opera Stage Flower Manual" },
  { ch: 1, from: "Selections of Flowers from the Curved Terrace", to: "Qutai Huaxuan" },
  { ch: 1, from: "Register of Flowers", to: "Selection of Flowers" },
  { ch: 1, from: "Startled from a Dream", to: "Waking from a Dream" },
  { ch: 1, from: "Searching for the Dream", to: "Pursuing the Dream" },
  { ch: 1, from: "Neon Garments", to: "Nishang" },
  { ch: 1, from: "The Jasper Terrace", to: "The Jade Terrace" },
  { ch: 1, from: "Examining the Autumn", to: "Autumn at the Tray" },
  { ch: 1, from: "Dancing on the Platter", to: "Dancing on the Tray" },
  { ch: 1, from: "The Willow Floss Pavilion", to: "The Pavilion of Gossamer" },
  { ch: 1, from: "poem on the begonia", to: "poem 'Crabapple'" },
  { ch: 1, from: "Breaking the Willow at Yangguan", to: "Willow at Yang Pass" },
  { ch: 1, from: "The Grassy Field", to: "Grass Ground" },
  { ch: 1, from: "Yangguan", to: "Yang Pass" },
  { ch: 1, from: "The Tale of Double Red", to: "Double Red Record" },
  { ch: 1, from: "Stealing the Command Token", to: "Stealing the Token" },
  { ch: 1, from: "Assassinating the Tiger", to: "Slaying the Tiger" },
  { ch: 1, from: "Killing on the Boat", to: "Killing in the Boat" },
  { ch: 1, from: "Sending the Son", to: "Entrusting the Son" },
  { ch: 1, from: "Admonishing the Prince", to: "Stored Admonitions" },
  { ch: 1, from: "The Barbarian Boy", to: "Barbarian Child" },
  { ch: 1, from: "The Underworld Investigation", to: "Underworld Inquest" },
  { ch: 1, from: "Book of Odes", to: "Mao Shi" },
  { ch: 1, from: "Ode to the Red Cliff", to: "Rhapsody on the Red Cliff" },
  { ch: 1, from: "Book of the Later Han", to: "Book of Later Han" },
  { ch: 1, from: "Guofeng", to: "Airs of the States" },
  { ch: 1, from: "Inscribing the Poem", to: "Inscribing the Song" },
  { ch: 1, from: "The Lute's Temptation", to: "Flirting with a Zither" },
  // ch.2
  { ch: 2, from: "Register of Unrivaled Eccentrics", to: "Peerless Register" },
  { ch: 2, from: "Guwen Guanzhi", to: "Finest of Ancient Prose" },
  { ch: 2, from: "Register of Flowers", to: "Selection of Flowers" },
  { ch: 2, from: /(?<![Tt]he )Five Classics/g, to: "The Five Classics" },
  // ch.3
  { ch: 3, from: "A Selection of Stage Flowers", to: "Qutai Huaxuan" },
  { ch: 3, from: "Flower Selection", to: "Selection of Flowers" },
  { ch: 3, from: "Flower Register", to: "Catalogue of Flowers" },
  { ch: 3, from: "The Patchwork Robe", to: "Pieced White Fur" },
  { ch: 3, from: "Nanpu", to: "The Southern Shore" },
  // ch.4
  { ch: 4, from: "Xie Huilian's Ode on Snow", to: "Xie Huilian's Rhapsody on Snow" },
  { ch: 4, from: "The topic was On Snow", to: "The topic was Ode on Snow" },
  { ch: 4, from: "Eight Verses on the Snow Window", to: "Eight Odes from the Snow Window" },
  { ch: 4, from: "River-Sky Snow", to: "Snow on River and Sky" },
  { ch: 4, from: "Treading the Snow", to: "Walking in Snow" },
  { ch: 4, from: /(?<!Winning )[Tt]he Flower Queen/g, to: "Winning the Flower Queen" },
  { ch: 4, from: "Occupying Alone", to: "Exclusive Possession" },
  { ch: 4, from: "The Book of Songs", to: "The Classic of Poetry" },
  { ch: 4, from: "the Book of Songs", to: "the Classic of Poetry" },
  { ch: 4, from: "Book of Songs", to: "Classic of Poetry" },
  // ch.5
  { ch: 5, from: "Shi Lei Fu", to: "Rhapsodies on Categorized Affairs" },
  // ch.6
  { ch: 6, from: "The Banquet of Achievement", to: "Merit Banquet" },
  { ch: 6, from: "The Jasper Terrace", to: "The Jade Terrace" },
  { ch: 6, from: "Jasper Terrace", to: "Jade Terrace" },
  { ch: 6, from: "Awakening in the Garden", to: "Waking from a Dream" },
  { ch: 6, from: "Three Intoxications", to: "Three Times Drunk" },
  { ch: 6, from: "Debating the Sword", to: "Discussing the Sword" },
  { ch: 6, from: "Visiting the Master", to: "Paying Respects to the Teacher" },
  { ch: 6, from: "Admiring the Lotus", to: "Appreciating the Lotuses" },
  { ch: 6, from: "Dancing with a Tray", to: "Dancing on the Tray" },
  { ch: 6, from: "Inscribing the Tune", to: "Inscribing the Song" },
  { ch: 6, from: "The Mountain Gate", to: "The Monastery Gate" },
  { ch: 6, from: "Riding Out to Hunt", to: "Going on the Hunt" },
  // ch.7
  { ch: 7, from: "Seeing Off Wang Jun of Xiangyuan Returning to His Villa", to: "Seeing Lord Wang of Xiangyuan Home to His Villa" },
  { ch: 7, from: /(?<![Tt]he )Person in the Carriage/g, to: "The Person in the Carriage" },
  // ch.8
  { ch: 8, from: "Visiting the Brothel", to: "Visiting the Courtyard" },
  { ch: 8, from: "The Female Ballad Singer", to: "Female Ballad-Singing" },
  { ch: 8, from: "Silver Silk Button", to: "Silver Button Silk" },
  { ch: 8, from: "Horse Head Tune", to: "Horse-Head Tune" },
  { ch: 8, from: "The River Turns Red", to: "The River Runs Red" },
  { ch: 8, from: "Inscribing the Melody", to: "Inscribing the Song" },
  { ch: 8, from: "Picking Up the Gold", to: "Finding Gold" },
  // ch.9
  { ch: 9, from: "The Shi Justice Cases", to: "Cases of Magistrate Shi" },
  { ch: 9, from: "Jinling Ballad", to: "Jinling Song" },
  { ch: 9, from: "Wash Not the Red", to: "Do Not Wash the Red" },
  { ch: 9, from: "Five-Watch Bell", to: "Fifth-Watch Bell" },
  { ch: 9, from: "Crow with Eight or Nine Chicks", to: "The Crow Has Eight or Nine Young" },
  { ch: 9, from: "Book of Rites", to: "Liji" },
  { ch: 9, from: "Enjoying Autumn", to: "Appreciating Autumn" },
  { ch: 9, from: "Chasing the Carriage", to: "Driving the Cart" },
  { ch: 9, from: "Preface to a Song", to: "Inscribing the Song" },
  { ch: 9, from: "The Book of Songs", to: "The Classic of Poetry" },
  { ch: 9, from: "the Book of Songs", to: "the Classic of Poetry" },
  { ch: 9, from: "Book of Songs", to: "Classic of Poetry" },
  // ch.10
  { ch: 10, from: "Spring Dream", to: "Waking from a Dream" },
  // ch.11
  { ch: 11, from: "Book of Odes", to: "Mao Shi" },
  { ch: 11, from: /(?<![Tt]he )Western Chamber/g, to: "The Western Chamber" },
  { ch: 11, from: "Lantern-Moon Lyric", to: "Lantern and Moon Lyrics" },
  // ch.12
  { ch: 12, from: "Flower Selection from the Qu Stage", to: "Qutai Huaxuan" },
  { ch: 12, from: "The Book of Songs", to: "The Classic of Poetry" },
  { ch: 12, from: "the Book of Songs", to: "the Classic of Poetry" },
  { ch: 12, from: "Book of Songs", to: "Classic of Poetry" },
  // ch.13
  { ch: 13, from: "Immortals Gathering", to: "Picture of the Immortals' Grand Assembly" },
  // ch.14
  { ch: 14, from: "Drafts from the Yan Capital", to: "Travel Drafts from Yantai" },
  { ch: 14, from: "Vexing the Beloved", to: "Annoying the Lord" },
  { ch: 14, from: "Mulberry Path", to: "Luofu on the Mulberry Path" },
  { ch: 14, from: "Outer Biography of the Precious Consort", to: "Unofficial Biography of the Noble Consort" },
  { ch: 14, from: "Records of the Unusual", to: "Record of Strange Gatherings" },
  { ch: 14, from: "Chen Tuan the Immortal Sage", to: "Immortal Chen Tuan Attains the Way" },
  { ch: 14, from: "The Young Gallants' Gathering", to: "Young Gallants Gathering Clients" },
  { ch: 14, from: "The Eighteen Stanzas on the Nomad Flute", to: "Eighteen Songs of a Nomad Flute" },
  { ch: 14, from: "The Eighteen Stanzas", to: "Eighteen Songs of a Nomad Flute" },
  { ch: 14, from: "The Water Immortal's Air", to: "Narcissus Lyric" },
  { ch: 14, from: "Water Immortal's Air", to: "Narcissus Lyric" },
  { ch: 14, from: "The Water Immortal", to: "Narcissus Lyric" },
  { ch: 14, from: "Water Immortal", to: "Narcissus Lyric" },
  { ch: 14, from: "Yantai Flower Register", to: "Yantai Flower Selection" },
  { ch: 14, from: /(?<![Tt]he )Four Books/g, to: "The Four Books" },
  // ch.15
  { ch: 15, from: "Pledging the Heart", to: "Fixing Affection" },
  { ch: 15, from: "The Startled Dream", to: "Waking from a Dream" },
  { ch: 15, from: "Mulan Hua Man", to: "Slow Magnolia Blossoms" },
  { ch: 15, from: "Romance of the Western Chamber", to: "The Western Chamber" },
  { ch: 15, from: "Xi Xiang Ji", to: "The Western Chamber" },
  { ch: 15, from: /(?<![Tt]he )Western Chamber/g, to: "The Western Chamber" },
  { ch: 15, from: "The Book of Songs", to: "The Classic of Poetry" },
  { ch: 15, from: "the Book of Songs", to: "the Classic of Poetry" },
  { ch: 15, from: "Book of Songs", to: "Classic of Poetry" },
  { ch: 15, from: "Shi Jing", to: "The Classic of Poetry" },
  { ch: 15, from: "Oil Gourd", to: "Oily Gourd" },
  { ch: 15, from: "The Spinning Plate Dance", to: "Dancing on the Tray" },
  // ch.16
  { ch: 16, from: "Qutai Flower Register", to: "The Opera Stage Flower Manual" },
  // ch.17
  { ch: 17, from: "The High Assembly of Immortals", to: "Picture of the Immortals' Grand Assembly" },
  { ch: 17, from: "Ding Niang's Ten Requests", to: "Lady Ding's Ten Laments" },
  // ch.18
  { ch: 18, from: "Ten Plays", to: "Ten Kinds of Songs" },
  // ch.20
  { ch: 20, from: "Rhapsody on the Tiantai Mountains", to: "Rhapsody on Mount Tiantai" },
  // ch.21
  { ch: 21, from: "Princess Shouyang's Plum Blossom Makeup", to: "Picture of Shouyang Forehead Dots" },
  // ch.23
  { ch: 23, from: /(?<![Tt]he )Four Books/g, to: "The Four Books" },
  // ch.24
  { ch: 24, from: "The Mending Heaven Stone", to: "Stone to Mend Heaven" },
  { ch: 24, from: "The Lute Song", to: "Story of the Pipa" },
  { ch: 24, from: "Paste-Emerald Forfeit", to: "Affixing the Kingfisher Command" },
  { ch: 24, from: "Prince Dan Extinguishes Qin", to: "Prince Dan Destroys Qin" },
  { ch: 24, from: "Zhuge Extends Life", to: "Zhuge Yan Nian" },
  { ch: 24, from: "Green Pearl Leaps at the Golden Valley", to: "Green Pearl Throws Herself from the Golden Valley Garden" },
  { ch: 24, from: "Consort Yang Escorts at Mawei Post", to: "Consort Yang Follows the Carriage at Mawei Post" },
  { ch: 24, from: "Li Bai Receives the Edict at Night Lang", to: "Li the Banished Immortal Receives the Edict at Yelang" },
  { ch: 24, from: "Du Fu Honored at the Golden Hall", to: "Du the Remonstrator Honored in the Golden Hall" },
  { ch: 24, from: "Flower Register", to: "Catalogue of Flowers" },
  // ch.25
  { ch: 25, from: "The Talented Scholar Receives the Edict", to: "The Envoy Receives the Edict" },
  { ch: 25, from: "The Yang Consort Enters Shu", to: "Consort Yang Enters Shu" },
  { ch: 25, from: "Qingping", to: "Clear Peace" },
  { ch: 25, from: "Returning Wind", to: "Whirling Wind" },
  { ch: 25, from: "The High Assembly of Immortals", to: "Immortals' Grand Assembly" },
  { ch: 25, from: "Lotus-Gathering", to: "Lotus-Picking Song" },
  { ch: 25, from: "Golden Strand", to: "Golden Thread" },
  { ch: 25, from: "Rainbow Skirts", to: "Nishang" },
  { ch: 25, from: "Immortals on Mount Emei", to: "Immortals of Mount Emei" },
  { ch: 25, from: "Exclusive Claim", to: "Exclusive Possession" },
  { ch: 25, from: "Startled Dream", to: "Waking from a Dream" },
  { ch: 25, from: "Seeking the Dream", to: "Pursuing the Dream" },
  // ch.26–27
  { ch: 26, from: "Searching the Dream", to: "Pursuing the Dream" },
  { ch: 27, from: "Startled from a Dream", to: "Waking from a Dream" },
  { ch: 27, from: "Searching the Dream", to: "Pursuing the Dream" },
  { ch: 27, from: "Yang Gao", to: "The Piteous Appeal" },
  // ch.29
  { ch: 29, from: "Song of Everlasting Regret", to: "Song of Everlasting Sorrow" },
  // ch.30
  { ch: 30, from: "The Flower-Viewing Assembly at Qinhuai River", to: "Flower-Viewing Assembly on the Qinhuai" },
  { ch: 30, from: "Cases of Lord Bao", to: "Cases of the Dragon Diagram" },
  { ch: 30, from: "Caught Alive", to: "Capturing Alive" },
  { ch: 30, from: "Front Seduction", to: "Prior Enticement" },
  { ch: 30, from: "Back Seduction", to: "Later Enticement" },
  { ch: 30, from: "Reverse Deception", to: "Counter-Deception" },
  { ch: 30, from: "Raising the Curtain", to: "Lifting the Curtain" },
  { ch: 30, from: "Tailoring Clothes", to: "Cutting Cloth" },
  { ch: 30, from: "Snapping the Willow", to: "Plucking a Willow Branch" },
  { ch: 30, from: "Viewing the Lotus", to: "Appreciating the Lotuses" },
  { ch: 30, from: "Teasing with the Lute", to: "Flirting with a Zither" },
  // ch.31
  { ch: 31, from: "Wild Geese on the Sand", to: "Wild Geese Alighting on Level Sand" },
  { ch: 31, from: "One-Trace Sand", to: "A Trace of Sand" },
  { ch: 31, from: "The Moon Ascending High", to: "Moon Rises High" },
  { ch: 31, from: "Biography of Master Fragrant-Snow", to: "Biography of Master Fragrant Snow" },
  { ch: 31, from: "Posthumous Drafts of Fragrant-Snow", to: "Posthumous Writings of Fragrant Snow" },
  { ch: 31, from: "On Brook Autumn Mound", to: "Inscription on Jinqiu Mound" },
  { ch: 31, from: "He Xin Liang", to: "Congratulations on the New Cool" },
  // ch.35
  { ch: 35, from: "Night Banquet for a Courtesan", to: "Night Banquet Bestowing a Courtesan" },
  { ch: 35, from: "Song of the Beauty Combing Her Hair", to: "Song of a Beauty Combing Her Hair" },
  { ch: 35, from: "Classic of Poetry", to: "Mao Shi" },
  { ch: 35, from: "Stealing Poetry", to: "Stealing the Poem" },
  { ch: 35, from: "Seeing Off Hongxian", to: "Sending Red Thread" },
  { ch: 35, from: "Ascending the Xiangcheng Tower", to: "Ascending the Xiangyang City Tower" },
  { ch: 35, from: "The Wine Tower", to: "The Tavern" },
  { ch: 35, from: "The Floss Pavilion", to: "The Pavilion of Gossamer" },
  { ch: 35, from: "Stealing a Song", to: "Stealing the Song" },
  { ch: 35, from: "The Little Banquet", to: "The Small Banquet" },
  { ch: 35, from: "Qin Courtship", to: "Flirting with a Zither" },
  // ch.37
  { ch: 37, from: "Waking and Sleeping", to: "The Awakening from Sleep Collection" },
  { ch: 37, from: "Composing on a Song", to: "Inscribing the Song" },
  { ch: 37, from: "Stealing a Poem", to: "Stealing the Poem" },
  { ch: 37, from: "Setting the Score", to: "Composing the Score" },
  { ch: 37, from: "Beating the Inn", to: "Attacking the Inn" },
  { ch: 37, from: "Snatching the Beauty", to: "Seizing the Beauty" },
  { ch: 37, from: "Killing Xijiao", to: "Killing Xishi" },
  { ch: 37, from: "Hemp Field", to: "Hemp Ground" },
  { ch: 37, from: "Cotton Bower", to: "The Pavilion of Gossamer" },
  { ch: 37, from: "Leaving the Bower", to: "Declining the Pavilion" },
  { ch: 37, from: "Flower Crone", to: "Flower Lady" },
  { ch: 37, from: "Grass Minister", to: "Grass Chancellor" },
  { ch: 37, from: "The Mountain Gate", to: "The Monastery Gate" },
  { ch: 37, from: "Rain Bell", to: "Bell in the Rain" },
  { ch: 37, from: "Wine Tavern", to: "The Tavern" },
  { ch: 37, from: "Picking Up the Gold", to: "Finding Gold" },
  // ch.38
  { ch: 38, from: "Discourse on the Great Man", to: "Essay on the Great Man" },
  { ch: 38, from: "The Bibliographical Treatise of the Han Shu", to: "Bibliographic Treatise of the Hanshu" },
  { ch: 38, from: "The Crow Perches at Dusk", to: "Raven-Roost Song" },
  { ch: 38, from: "Crow Perches at Dusk", to: "Raven-Roost Song" },
  { ch: 38, from: "The Crow Cries at Night", to: "Crows Crying at Night" },
  { ch: 38, from: "Crow Cries at Night", to: "Crows Crying at Night" },
  { ch: 38, from: "Ministry of Rites Rhyme Table", to: "Ministry of Rites Rhymes" },
  // ch.41
  { ch: 41, from: "Visiting the Green Bower", to: "Visiting Cui" },
  { ch: 41, from: "Slumbering in Fragrance", to: "Sleeping amid Fragrance" },
  { ch: 41, from: "The Peach-Blossom Fan", to: "The Peach Blossom Fan" },
  { ch: 41, from: "Liang Zhou Xu", to: "Liangzhou Xu" },
  { ch: 41, from: "Jiugong Pu", to: "Nine-Palace Score" },
  { ch: 41, from: "Garden Stroll and Dream", to: "A Stroll in the Garden and Waking from a Dream" },
  { ch: 41, from: "Preface to the New Songs from the Jade Terrace", to: "New Songs from the Jade Terrace Preface" },
  { ch: 41, from: "Palace Poetry", to: "Palace Lyrics" },
  { ch: 41, from: "Qian Qiang", to: "Opening Aria" },
  // ch.42
  { ch: 42, from: "Killing on the Boat", to: "Killing in the Boat" },
  { ch: 42, from: "The Tryst", to: "The Rendezvous" },
  // ch.43
  { ch: 43, from: "Book of Rites", to: "Liji" },
  { ch: 43, from: "Nine-Palace Notation", to: "Nine-Palace Score" },
  // ch.44
  { ch: 44, from: "Song of Everlasting Regret", to: "Song of Everlasting Sorrow" },
  // ch.52–53
  { ch: 52, from: "The Peach-Blossom Fan", to: "The Peach Blossom Fan" },
  { ch: 53, from: "Song of the Golden Thread", to: "Jinlü Qu" },
  // ch.55
  { ch: 55, from: "Book of Han", to: "History of the Former Han" },
  { ch: 55, from: "Shilei Fu", to: "Rhapsodies on Categorized Affairs" },
  // ch.60
  { ch: 60, from: "Nine Hills", to: "Nine Mounds" },
  { ch: 60, from: "Three Tombs", to: "The Three Tomes" },
  { ch: 60, from: "Twenty-Four Categories of Poetry", to: "Poetic Categories" },
];

const dry = process.argv.includes("--dry");
const dir = path.join(process.cwd(), "src", "chapterTranslations");
const byChapter = new Map<number, Rule[]>();
for (const r of rules) {
  if (!byChapter.has(r.ch)) byChapter.set(r.ch, []);
  byChapter.get(r.ch)!.push(r);
}

let total = 0;
for (const [ch, chRules] of byChapter) {
  const file = path.join(dir, `chapterTranslations${ch}.ts`);
  let s = fs.readFileSync(file, "utf8");
  for (const r of chRules) {
    let n = 0;
    if (typeof r.from === "string") {
      n = s.split(r.from).length - 1;
      if (n > 0) s = s.split(r.from).join(r.to);
    } else {
      const matches = s.match(r.from);
      n = matches?.length ?? 0;
      if (n > 0) s = s.replace(r.from, r.to);
    }
    if (n > 0) console.log(`ch.${ch}: ${String(r.from)} -> ${r.to}  x${n}`);
    else console.log(`ch.${ch}: NO MATCH for ${String(r.from)}`);
    total += n;
  }
  if (!dry) fs.writeFileSync(file, s);
}
console.log(`\nTotal replacements: ${total}${dry ? " (dry run)" : ""}`);
