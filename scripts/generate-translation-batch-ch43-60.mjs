/**
 * Export chapters 43–60 as a paragraph-by-paragraph translation batch.
 * Chinese text must be split EXACTLY as ChapterReader: content.split('\n\n')
 *   (see src/App.tsx).
 *
 * Usage:
 *   node scripts/generate-translation-batch-ch43-60.mjs
 *   node scripts/generate-translation-batch-ch43-60.mjs --out translation-batch/ch43-60
 *   node scripts/generate-translation-batch-ch43-60.mjs --from 45 --to 60
 *
 * Optional: merge existing English for 43–44 from src/chapterTranslations43to44.ts
 *   (useful for review / re-translation tickets only when counts match).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const defaultOut = path.join(projectRoot, "translation-batch", "ch43-60");

function parseArgs() {
  const a = process.argv.slice(2);
  const o = { from: 43, to: 60, out: defaultOut, include43to44En: true };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--out" && a[i + 1]) o.out = path.resolve(a[++i]);
    else if (a[i] === "--from" && a[i + 1]) o.from = +a[++i];
    else if (a[i] === "--to" && a[i + 1]) o.to = +a[++i];
    else if (a[i] === "--no-existing-en") o.include43to44En = false;
  }
  if (o.from > o.to) [o.from, o.to] = [o.to, o.from];
  return o;
}

/** Match ChapterReader: split('\n\n') */
function splitParagraphsLikeReader(content) {
  return content.split("\n\n");
}

// ---- parse chapterTranslations43to44.ts (same as other rebuild scripts) ----
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
  if (start === -1) return null;
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

function loadExisting43to44() {
  const p = path.join(projectRoot, "src", "chapterTranslations43to44.ts");
  if (!fs.existsSync(p)) return { 43: null, 44: null };
  const src = fs.readFileSync(p, "utf8");
  return {
    43: extractArray(src, "43"),
    44: extractArray(src, "44"),
  };
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function main() {
  const opts = parseArgs();
  const chapterDataPath = path.join(projectRoot, "src", "chapterData.json");
  const raw = JSON.parse(fs.readFileSync(chapterDataPath, "utf8"));
  const chapters = raw.chapters;

  const existing = opts.include43to44En ? loadExisting43to44() : { 43: null, 44: null };

  ensureDir(opts.out);
  const promptsDir = path.join(opts.out, "prompts");
  ensureDir(promptsDir);

  const manifest = {
    generated: new Date().toISOString(),
    source: "src/chapterData.json",
    paragraphSplit: "content.split('\\n\\n') — must match src/App.tsx ChapterReader",
    range: { from: opts.from, to: opts.to },
    chapters: [],
  };

  const allTasks = [];

  for (let id = opts.from; id <= opts.to; id++) {
    const ch = chapters.find((c) => c.id === id);
    if (!ch) {
      manifest.chapters.push({
        id,
        error: "chapter not found in chapterData.json",
      });
      continue;
    }

    const paragraphsZh = splitParagraphsLikeReader(ch.content);
    const enArr = existing[id] || null;
    const cnCount = paragraphsZh.length;
    const enCount = enArr ? enArr.length : 0;
    const aligned = enArr ? cnCount === enCount : false;

    const chapterSummary = {
      id,
      titleZh: ch.title,
      paragraphCount: cnCount,
      existingEnglishCount: enArr ? enCount : 0,
      alignmentOk: enArr ? aligned : null,
      translationStatus: enArr
        ? aligned
          ? "english_segments_present_match_paragraphs"
          : "MISMATCH_en_vs_cn_counts_fix_merge_before_app"
        : "pending_full_translation",
    };
    manifest.chapters.push(chapterSummary);

    const tasks = paragraphsZh.map((zh, paragraphIndex) => {
      const en =
        aligned && enArr && paragraphIndex < enArr.length
          ? enArr[paragraphIndex]
          : null;
      const taskId = `${id}-P${String(paragraphIndex).padStart(3, "0")}`;
      const task = {
        taskId,
        chapterId: id,
        chapterTitleZh: ch.title,
        paragraphIndex,
        zh,
        en: en || null,
        status: en
          ? "has_english_review_or_replace"
          : enArr && !aligned
            ? "pending_translation_see_raw_segments_in_chapter_file"
            : "pending_translation",
      };
      allTasks.push(task);
      return task;
    });

    const chapterPayload = {
      chapterId: id,
      titleZh: ch.title,
      paragraphSplitNote: "split('\\n\\n')",
      chineseParagraphCount: cnCount,
      tasks,
    };
    if (enArr && !aligned) {
      chapterPayload.translationNote =
        "English segments in repo do not match paragraph count; raw segments attached — merge/resegment to match CN before pairing.";
      chapterPayload.rawEnglishSegmentsFromRepo = enArr;
    }

    fs.writeFileSync(
      path.join(opts.out, `chapter-${String(id).padStart(2, "0")}.json`),
      JSON.stringify(chapterPayload, null, 2),
      "utf8"
    );

    let promptBody = tasks
      .map(
        (t) =>
          `### ${t.taskId}\n\nZH:\n${t.zh}\n\nEN (translate or revise):\n${t.en ? `(existing)\n${t.en}` : "(empty)"}\n`
      )
      .join("\n---\n\n");

    if (enArr && !aligned) {
      promptBody +=
        "\n---\n\nAPPENDIX: Raw English segments from repo (counts do not match paragraphs — merge/split as needed before inserting above):\n\n";
      enArr.forEach((seg, j) => {
        promptBody += `[${id}-E${j}]\n${seg}\n\n`;
      });
    }

    const promptHeader = `Translate or revise literary English for 品花宝鉴 / Pinhua Baojian, chapter ${id} (${ch.title}).\nPreserve paragraph boundaries (one task block = one UI paragraph). Tone: literate fiction, Qing-era polite speech and theatrical slang where appropriate.\n\n`;

    fs.writeFileSync(
      path.join(promptsDir, `chapter-${String(id).padStart(2, "0")}-prompt.txt`),
      promptHeader + promptBody,
      "utf8"
    );
  }

  fs.writeFileSync(
    path.join(opts.out, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  fs.writeFileSync(
    path.join(opts.out, "all-tasks.json"),
    JSON.stringify(
      {
        meta: {
          generated: manifest.generated,
          taskCount: allTasks.length,
          paragraphSplit: manifest.paragraphSplit,
        },
        tasks: allTasks,
      },
      null,
      2
    ),
    "utf8"
  );

  const tsvLines = [
    "taskId\tchapterId\tparagraphIndex\tzh\texisting_en",
    ...allTasks.map((t) => {
      const zh = t.zh.replace(/\t/g, " ").replace(/\r?\n/g, "\\n");
      const en = (t.en || "").replace(/\t/g, " ").replace(/\r?\n/g, "\\n");
      return `${t.taskId}\t${t.chapterId}\t${t.paragraphIndex}\t${zh}\t${en}`;
    }),
  ];
  fs.writeFileSync(path.join(opts.out, "all-tasks.tsv"), tsvLines.join("\n"), "utf8");

  console.log(`Wrote batch to ${opts.out}`);
  console.log(`  manifest.json, all-tasks.json, all-tasks.tsv`);
  console.log(`  chapter-NN.json × ${manifest.chapters.filter((c) => !c.error).length}`);
  console.log(`  prompts/chapter-NN-prompt.txt (same count)`);
  console.log(`Total paragraph tasks: ${allTasks.length}`);
  const bad = manifest.chapters.filter((c) => c.alignmentOk === false);
  if (bad.length) {
    console.warn(
      `\nWarning: CN/EN count mismatch for chapters: ${bad.map((c) => c.id).join(", ")} — merge English segments before mapping to paragraphs.`
    );
  }
}

main();
