import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dataDir = join(dirname(fileURLToPath(import.meta.url)), "../src/questions/data");

const ids = readdirSync(dataDir)
  .filter((name) => name.endsWith(".ts"))
  .flatMap((name) => {
    const content = readFileSync(join(dataDir, name), "utf8");
    const match = content.match(/\bid:\s*(\d+)/);
    return match ? [Number(match[1])] : [];
  });

const nextId = ids.length === 0 ? 1 : Math.max(...ids) + 1;
console.log(`Next question id: ${nextId}`);
