import fs from 'fs';

const dataPath = 'src/data.ts';
let dataContent = fs.readFileSync(dataPath, 'utf-8');

const newRels = fs.readFileSync('scratch/new-relationships.txt', 'utf-16le');
const lines = newRels.split('\n').filter(line => line.includes('{ source:'));
const insertionStr = lines.join('\n') + '\n';

// Replace the array closing bracket for generatedRelationships
const searchStr = /\];[\r\n]+export const relationships: Relationship\[\]/m;

if (searchStr.test(dataContent)) {
  dataContent = dataContent.replace(searchStr, insertionStr + '];\n\nexport const relationships: Relationship[]');
  fs.writeFileSync(dataPath, dataContent);
  console.log('Successfully injected new relationships with regex!');
} else {
  console.error('Could not find insertion point!');
}
