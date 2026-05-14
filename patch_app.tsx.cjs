const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Update ChapterReader props
content = content.replace(
  'onSelectCharacter: (character: Character) => void;',
  'onSelectCharacter: (character: Character) => void;\n  onSelectLacuna: () => void;'
);

content = content.replace(
  'onSelectCharacter,\n}: {',
  'onSelectCharacter,\n  onSelectLacuna,\n}: {'
);

// Update App component ChapterReader invocation
content = content.replace(
  '<ChapterReader \n            chapter={selectedChapter} \n            onClose={() => setSelectedChapter(null)} \n            lang={lang}\n            onSelectCharacter={(character) => setSelectedCharacter(character)}\n          />',
  '<ChapterReader \n            chapter={selectedChapter} \n            onClose={() => setSelectedChapter(null)} \n            lang={lang}\n            onSelectCharacter={(character) => setSelectedCharacter(character)}\n            onSelectLacuna={() => setActiveLacunaChapter(selectedChapter.id)}\n          />'
);

// Update renderAnnotated in ChapterReader
const renderAnnotatedSearch = `      if (typeof seg === 'string') return seg;`;
const renderAnnotatedReplace = `      if (typeof seg === 'string') {
        const parts = seg.split(/([▉□])/g);
        if (parts.length === 1) return seg;

        return parts.map((part, j) => {
          if (part === '▉' || part === '□') {
            return (
              <button
                key={\`\${i}-\${j}\`}
                onClick={onSelectLacuna}
                className="inline-flex items-center rounded-sm border px-1 py-[1px] mx-[1px] align-baseline cursor-pointer transition-all hover:brightness-95 bg-amber-200/70 text-[#2c2420] border-amber-400/50"
                title={lang === 'zh' ? '查看缺文档案' : 'View Lacunae'}
              >
                {part}
              </button>
            );
          }
          return part;
        });
      }`;

content = content.replace(renderAnnotatedSearch, renderAnnotatedReplace);

fs.writeFileSync('src/App.tsx', content);
