import type { Question, QuestionContent } from "./types";

type QuestionModule = {
  question?: QuestionContent;
  [key: string]: unknown;
};

function isQuestionContent(value: unknown): value is QuestionContent {
  return (
    typeof value === "object" &&
    value !== null &&
    "questionEn" in value &&
    "questionZh" in value &&
    "answerEn" in value &&
    "answerZh" in value
  );
}

function questionFromModule(path: string, mod: QuestionModule): QuestionContent {
  if (mod.question && isQuestionContent(mod.question)) {
    return mod.question;
  }

  const found = Object.values(mod).find(isQuestionContent);
  if (found) {
    return found;
  }

  throw new Error(`No question export found in ${path}`);
}

function slugFromPath(path: string): string {
  const match = path.match(/\/([^/]+)\.ts$/);
  if (!match) {
    throw new Error(`Invalid question path: ${path}`);
  }
  return match[1];
}

/** Load and sort all question modules under `data/` (alphabetically by filename). */
export function loadQuestions(
  modules: Record<string, QuestionModule>,
): Question[] {
  const questions = Object.entries(modules).map(([path, mod]) => ({
    ...questionFromModule(path, mod),
    slug: slugFromPath(path),
  }));

  questions.sort((a, b) => a.slug.localeCompare(b.slug));

  const seen = new Set<string>();
  for (const question of questions) {
    if (seen.has(question.slug)) {
      throw new Error(`Duplicate question slug ${question.slug}`);
    }
    seen.add(question.slug);
  }

  return questions;
}
