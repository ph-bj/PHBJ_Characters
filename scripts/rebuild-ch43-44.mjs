/**
 * Merge chapterTranslations43to44.ts so each chapter's array length matches
 * chapter.content.split('\n\n') from chapterData.json (ChapterReader alignment).
 */

import fs from "fs";

const srcPath = new URL("../src/chapterTranslations43to44.ts", import.meta.url);

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
    if (source[i] !== '"') throw new Error(`expected string in ${key}`);
    const { end, value } = parseString(source, i);
    strings.push(value);
    i = end;
    i = skipCommentsAndWs(source, i);
    if (source[i] === ",") i++;
  }
  return strings;
}

function j(...parts) {
  return parts.filter((p) => p != null && p !== "").join("\n\n");
}

let src = fs.readFileSync(srcPath, "utf8");
const raw43 = extractArray(src, "43");
const raw44 = extractArray(src, "44");

if (raw43.length !== 32) {
  throw new Error(`ch43 raw expected 32 segments, got ${raw43.length}`);
}
if (raw44.length !== 34) {
  throw new Error(`ch44 raw expected 34 segments, got ${raw44.length}`);
}

const e = raw43;

const merged43 = [
  ...e.slice(0, 5),
  e[5],
  j(e[6], e[7], e[8]),
  e[9],
  j(e[10], e[11]),
  j(e[12], e[13]),
  e[14],
  e[15],
  e[16],
  j(e[17], e[18], e[19]),
  ...e.slice(20, 32),
];

const f = raw44;
// P6 = up to "arrived at the lines:"; P7–P11 = verse + stumble/entertainment = one CN paragraph
const merged44 = [
  ...f.slice(0, 6),
  f[6],
  j(f[7], f[8], f[9], f[10], f[11]),
  ...f.slice(12, 27),
  j(f[27], f[28]),
  ...f.slice(29),
];

function fmt(arr) {
  return arr.map((s) => "    " + JSON.stringify(s)).join(",\n");
}

function validate(countCn, merged, label) {
  if (merged.length !== countCn) {
    throw new Error(`${label}: expected ${countCn} paragraphs, got ${merged.length}`);
  }
}

const chapterData = JSON.parse(
  fs.readFileSync(new URL("../src/chapterData.json", import.meta.url), "utf8")
);

function cnParagraphCount(id) {
  const ch = chapterData.chapters.find((c) => c.id === id);
  return ch.content.split("\n\n").length;
}

validate(cnParagraphCount(43), merged43, "ch43");
validate(cnParagraphCount(44), merged44, "ch44");

const out =
  `export const chapterTranslations43to44: Record<number, string[]> = {\n` +
  `  43: [\n${fmt(merged43)}\n  ],\n` +
  `  44: [\n${fmt(merged44)}\n  ],\n` +
  `};\n`;

fs.writeFileSync(srcPath, out, "utf8");

console.log(
  "OK: chapter 43 →",
  merged43.length,
  "paragraphs; chapter 44 →",
  merged44.length,
  "(matches chapterData \\n\\n splits)"
);
