import type { Question } from "./types";
import { loadQuestions } from "./loadQuestions";

export type { Question } from "./types";

const questionModules = import.meta.glob<{ question?: Question; [key: string]: unknown }>(
  "./data/*.ts",
  { eager: true },
);

/** Sidebar display order (sorted by question id). Add a new file under `data/` only. */
export const questions: Question[] = loadQuestions(questionModules);
