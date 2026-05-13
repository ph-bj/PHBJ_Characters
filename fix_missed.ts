import * as fs from 'fs';

let ch54Content = fs.readFileSync('src/chapterTranslations54.ts', 'utf8');

// Looking east toward home the road is endless...
ch54Content = ch54Content.replace(
    /"Looking east toward home the road is endless\.\.\."/,
    `"Looking east toward home the road is endless, / My double sleeves are wet with tears and won't dry. / Instantly meeting my hometown envoy on a fine horse, / We exchange no letters, only words of peace."`
);

// Alone in a foreign land...
ch54Content = ch54Content.replace(
    /"Alone in a foreign land\.\.\."/,
    `"Alone in a foreign land, a stranger in a strange land, / Every festive day my homesickness doubles. / From afar I know my brothers are ascending the heights, / Planting dogwood, finding one person missing."`
);

// Shoo away the yellow orioles...
ch54Content = ch54Content.replace(
    /"Shoo away the yellow orioles\.\.\."/,
    `"Shoo away the yellow orioles, / Don't let them sing on the branches. / Their singing will wake me from my dream, / And I won't get to Liaoxi."`
);

fs.writeFileSync('src/chapterTranslations54.ts', ch54Content);

let ch18Content = fs.readFileSync('src/chapterTranslations3to60.ts', 'utf8');
ch18Content = ch18Content.replace(
    /A blind-eyed hen paired with a mangy toad\. \\\\\\"You like me, I like him/g,
    `A blind-eyed hen paired with a mangy toad. \\"You like me, I like him`
);
ch18Content = ch18Content.replace(
    /not an old hand\.\\\\\\"\\",/g,
    `not an old hand.\\"\\",`
);
fs.writeFileSync('src/chapterTranslations3to60.ts', ch18Content);
