const fs = require('fs');
const path = require('path');

const translationsDir = path.join(__dirname, 'src', 'chapterTranslations');
const files = fs.readdirSync(translationsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let output = '# Extracted Verses\n\n';
let totalVerses = 0;
let chaptersWithVerses = 0;

for (const file of files) {
    const chapterMatch = file.match(/chapterTranslations(\d+)\.ts/);
    if (!chapterMatch) continue;
    const chapterNum = chapterMatch[1];
    
    const content = fs.readFileSync(path.join(translationsDir, file), 'utf-8');
    
    let jsCode = content.replace(/export const chapterTranslations\d+[\s\S]*?=\s*/, 'module.exports = ');
    jsCode = jsCode.replace(/: Record<number, string[]>/, '');
    
    const tempFile = path.join(__dirname, `temp_${chapterNum}.cjs`);
    fs.writeFileSync(tempFile, jsCode);
    
    try {
        const data = require(tempFile);
        const paragraphs = data[chapterNum];
        let chapterHasVerse = false;
        
        paragraphs.forEach((para, index) => {
            // Check for / or // used as line breaks, or actual newlines (for chapter 4)
            // also look for typical verse structures
            if (para.includes(' / ') || para.includes(' // ') || (chapterNum === '4' && para.includes('\n'))) {
                if (!chapterHasVerse) {
                    output += `## Chapter ${chapterNum}\n\n`;
                    chapterHasVerse = true;
                    chaptersWithVerses++;
                }
                output += `### Paragraph ${index}\n\n`;
                output += `${para}\n\n`;
                totalVerses++;
            }
        });
    } catch (e) {
        console.error(`Error parsing ${file}:`, e);
    } finally {
        if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
        }
    }
}

output = `Total Verses: ${totalVerses}\nChapters with Verses: ${chaptersWithVerses}\n\n` + output;
const artifactsDir = 'C:\\Users\\tc\\.gemini\\antigravity-ide\\brain\\022378fa-d972-4994-b440-2b52da546aef';
const outPath = path.join(artifactsDir, 'extracted_verses.md');
fs.writeFileSync(outPath, output);
console.log('Extraction complete. Output written to ' + outPath);
