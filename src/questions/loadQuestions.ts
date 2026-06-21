import type { Question } from "./types";

type QuestionModule = {
  question?: Question;
  [key: string]: unknown;
};

function isQuestion(value: unknown): value is Question {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "questionEn" in value &&
    "questionZh" in value
  );
}

function questionFromModule(path: string, mod: QuestionModule): Question {
  if (mod.question && isQuestion(mod.question)) {
    return mod.question;
  }

  const found = Object.values(mod).find(isQuestion);
  if (found) {
    return found;
  }

  throw new Error(`No question export found in ${path}`);
}

/** Load and sort all question modules under `data/`. */
export function loadQuestions(
  modules: Record<string, QuestionModule>,
): Question[] {
  const questions = Object.entries(modules).map(([path, mod]) =>
    questionFromModule(path, mod),
  );

  questions.sort((a, b) => a.id - b.id);

  const seen = new Set<number>();
  for (const question of questions) {
    if (seen.has(question.id)) {
      throw new Error(`Duplicate question id ${question.id}`);
    }
    seen.add(question.id);
  }

  return questions;
}
