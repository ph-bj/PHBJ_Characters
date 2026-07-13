import { buildCharacterTokenMap } from "../src/nameChips";
import { characters } from "../src/data";

const tm = buildCharacterTokenMap(characters);
const ids = process.argv.slice(2);
for (const id of ids.length ? ids : ["char-124"]) {
  const toks = tm.filter(([, c]) => c.id === id).map(([t]) => t);
  console.log(id, JSON.stringify(toks));
}
