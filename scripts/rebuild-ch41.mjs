import fs from "fs";

const srcPath = new URL("../src/chapterTranslations41to42.ts", import.meta.url);
let src = fs.readFileSync(srcPath, "utf8");

function skipCommentsAndWs(s, i) {
  while (i < s.length) {
    if (s[i] === "/" && s[i + 1] === "/") {
      while (i < s.length && s[i] !== "\n") i++;
      continue;
    }
    if (s[i] === " " || s[i] === "\t" || s[i] === "\n" || s[i] === "\r") {
      i++;
      continue;
    }
    break;
  }
  return i;
}

function parseString(s, startQuote) {
  let i = startQuote + 1;
  let out = "";
  while (i < s.length) {
    const c = s[i];
    if (c === "\\") {
      const n = s[++i];
      switch (n) {
        case "n":
          out += "\n";
          break;
        case "t":
          out += "\t";
          break;
        case "r":
          out += "\r";
          break;
        case '"':
          out += '"';
          break;
        case "\\":
          out += "\\";
          break;
        case "'":
          out += "'";
          break;
        default:
          out += n;
      }
      i++;
      continue;
    }
    if (c === '"') return { end: i + 1, value: out };
    out += c;
    i++;
  }
  throw new Error("unterminated string");
}

function extractArray(source, key) {
  const k = `${key}: [`;
  const start = source.indexOf(k);
  if (start === -1) throw new Error("missing " + k);
  let i = start + k.length;
  const strings = [];
  while (true) {
    i = skipCommentsAndWs(source, i);
    if (source[i] === "]") break;
    if (source[i] !== '"') {
      throw new Error(`expected string in ${key}`);
    }
    const { end, value } = parseString(source, i);
    strings.push(value);
    i = end;
    i = skipCommentsAndWs(source, i);
    if (source[i] === ",") i++;
  }
  return strings;
}

function splitAt(hay, needle, label) {
  const m = hay.indexOf(needle);
  if (m === -1) throw new Error(`${label}: needle not found: ${needle.slice(0, 40)}`);
  return [hay.slice(0, m), hay.slice(m)];
}

function j(...parts) {
  return parts.filter((p) => p != null && p !== "").join("\n\n");
}

const raw41 = extractArray(src, "41");
const raw42 = extractArray(src, "42");

if (raw41.length !== 64) {
  throw new Error(`ch41 raw expected 64 segments, got ${raw41.length}`);
}

const e = raw41;

const [e22a, e22bRaw] = splitAt(
  e[22],
  " At this point Mingzhu took up the next aria and sang:",
  "E22"
);
const e22b = e22bRaw.trimStart();
const [e32a, e32b] = splitAt(e[32], "Zengzhu now sang:", "E32");
const [e40a, e40b] = splitAt(e[40], "Then Ruizhu began", "E40");

const merged41 = [
  ...e.slice(0, 18),
  j(e[18], e[19], e[20], e[21], e22a),
  j(e22b, e[23], e[24]),
  j(e[25], e[26]),
  e[27],
  j(e[28], e[29], e[30]),
  j(e[31], e32a),
  j(e32b, e[33]),
  j(e[34], e[35], e[36]),
  e[37],
  j(e[38], e[39], e40a),
  j(e40b, e[41], e[42]),
  j(e[43], e[44], e[45], e[46], e[47]),
  e[48],
  e[49],
  e[50],
  e[51],
  j(e[52], e[53], e[54]),
  j(e[55], e[56], e[57]),
  e[58],
  e[59],
  e[60],
  e[61],
  e[62],
  e[63],
];

if (merged41.length !== 42) {
  throw new Error(`merged41 expected 42, got ${merged41.length}`);
}

function fmt(arr) {
  return arr.map((s) => "    " + JSON.stringify(s)).join(",\n");
}

const out =
  `export const chapterTranslations41to42: Record<number, string[]> = {\n` +
  `  41: [\n${fmt(merged41)}\n  ],\n` +
  `  42: [\n${fmt(raw42)}\n  ],\n` +
  `};\n`;

fs.writeFileSync(srcPath, out, "utf8");
console.log("Wrote chapter 41:", merged41.length, "paragraphs; chapter 42:", raw42.length);
