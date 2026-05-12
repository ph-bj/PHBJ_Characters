import fs from "fs";

const srcPath = new URL("../src/chapterTranslations37to38.ts", import.meta.url);
const src = fs.readFileSync(srcPath, "utf8");

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

function extractArray(key) {
  const k = `${key}: [`;
  const start = src.indexOf(k);
  if (start === -1) throw new Error("missing " + k);
  let i = start + k.length;
  const strings = [];
  while (true) {
    i = skipCommentsAndWs(src, i);
    if (src[i] === "]") break;
    if (src[i] !== '"') {
      throw new Error(`expected string in ${key} at ${i}`);
    }
    const { end, value } = parseString(src, i);
    strings.push(value);
    i = end;
    i = skipCommentsAndWs(src, i);
    if (src[i] === ",") i++;
  }
  return strings;
}

const ch37 = extractArray("37");
const ch38raw = extractArray("38");

if (ch37.length !== 28) {
  throw new Error(`ch37 expected 28 strings, got ${ch37.length}`);
}
if (ch38raw.length !== 56) {
  throw new Error(`ch38 expected 56 strings, got ${ch38raw.length}`);
}

const e = ch38raw;
const j = (a, b) => e.slice(a, b).join(" ");

const ch38 = [
  ...e.slice(0, 16),
  e[16],
  j(17, 27),
  e[27],
  j(28, 31),
  e[31],
  e[32],
  e[33],
  e[34],
  e[35],
  j(36, 40),
  j(40, 44),
  e[44],
  e[45],
  e[46],
  e[47],
  e[48],
  e[49],
  e[50],
  e[51],
  e[52],
  e[53],
  e[54],
  e[55],
];

if (ch38.length !== 39) {
  throw new Error(`merged ch38 should be 39, got ${ch38.length}`);
}

function fmt(arr) {
  return arr.map((s) => "    " + JSON.stringify(s)).join(",\n");
}

const out =
  `export const chapterTranslations37to38: Record<number, string[]> = {\n` +
  `  37: [\n${fmt(ch37)}\n  ],\n` +
  `  38: [\n${fmt(ch38)}\n  ],\n` +
  `};\n`;

fs.writeFileSync(srcPath, out, "utf8");
console.log("Wrote chapterTranslations37to38.ts", {
  ch37: ch37.length,
  ch38: ch38.length,
});
