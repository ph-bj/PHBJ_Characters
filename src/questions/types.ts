export interface QuestionContent {
  categoryZh: string;
  categoryEn: string;
  questionEn: string;
  questionZh: string;
  answerEn: string;
  answerZh: string;
}

/** Loaded question: `slug` is the `data/<slug>.ts` filename (no extension). */
export interface Question extends QuestionContent {
  slug: string;
}

/** Shape of a question module under `data/` (slug comes from the filename). */
export type QuestionDefinition = QuestionContent;
