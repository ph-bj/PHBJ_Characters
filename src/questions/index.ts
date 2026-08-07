import type { Question, QuestionDefinition } from "./types";
import { loadQuestions } from "./loadQuestions";

export type { Question, QuestionDefinition, QuestionContent } from "./types";

const questionModules = import.meta.glob<{
  question?: QuestionDefinition;
  [key: string]: unknown;
}>(
  "./data/*.ts"
);

let cachedQuestions: Question[] | null = null;
let loadingPromise: Promise<Question[]> | null = null;

export async function getQuestions(): Promise<Question[]> {
  if (cachedQuestions) return cachedQuestions;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    const resolvedModules: Record<string, { question?: QuestionDefinition; [key: string]: unknown }> = {};
    const entries = Object.entries(questionModules);
    await Promise.all(
      entries.map(async ([path, loader]) => {
        try {
          const mod = await loader();
          resolvedModules[path] = mod;
        } catch (e) {
          console.error(`Failed loading question module ${path}`, e);
        }
      })
    );
    cachedQuestions = loadQuestions(resolvedModules);
    return cachedQuestions;
  })();

  return loadingPromise;
}

export function getQuestionsSync(): Question[] {
  return cachedQuestions || [];
}

/** Proxy for backwards compatibility */
export const questions: Question[] = new Proxy([] as Question[], {
  get(target, prop, receiver) {
    if (cachedQuestions) {
      return Reflect.get(cachedQuestions, prop, receiver);
    }
    return Reflect.get(target, prop, receiver);
  }
});

