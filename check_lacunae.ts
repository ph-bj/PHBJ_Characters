import { chapterData } from './src/chapterData';
import { chapterLacunae } from './src/lacunae';

let allMatch = true;

for (const cl of chapterLacunae) {
  const chapter = chapterData.find(c => c.id === cl.chapterId);
  if (!chapter) {
    console.log(`Chapter ${cl.chapterId} not found`);
    allMatch = false;
    continue;
  }

  const content = chapter.content;
  const matches = [...content.matchAll(/[▉□]/g)];

  if (matches.length !== cl.lacunae.length) {
    console.log(`Chapter ${cl.chapterId}: content has ${matches.length} lacunae, but metadata has ${cl.lacunae.length}`);
    allMatch = false;
  }
}

if (allMatch) {
  console.log("All counts match perfectly!");
}
