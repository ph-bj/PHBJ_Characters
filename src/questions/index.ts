import type { Question, QuestionDefinition } from "./types";
import { loadQuestions } from "./loadQuestions";

export type { Question, QuestionDefinition, QuestionContent } from "./types";

const questionModules = import.meta.glob<{
  question?: QuestionDefinition;
  [key: string]: unknown;
}>(
  "./data/*.ts",
  { eager: true },
);

/** Sidebar display order (sorted by filename). Add a new file under `data/` only. */
export const questions: Question[] = loadQuestions(questionModules);
