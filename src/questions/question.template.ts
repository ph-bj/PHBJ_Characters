/**
 * Copy this file into `data/` with any unique name (e.g. `data/poetry-competitions.ts`).
 * When copying, change the import below to: `import type { Question } from "../types";`
 * Pick the next free `id` (run `node scripts/next-question-id.mjs`).
 * Do not edit `index.ts` — questions are discovered automatically.
 */
import type { Question } from "./types";

export const question: Question = {
  id: 0,
  questionEn: "",
  questionZh: "",
  answerEn: "",
  answerZh: "",
};
