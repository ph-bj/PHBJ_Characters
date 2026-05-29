import type { Question } from './types';
import { question as question01 } from './data/question-01';
import { question as question02 } from './data/question-02';
import { question as question03 } from './data/question-03';
import { question as question04 } from './data/question-04';
import { question as question05 } from './data/question-05';
import { question as question06 } from './data/question-06';
import { question as question07 } from './data/question-07';
import { question as question08 } from './data/question-08';
import { question as question09 } from './data/question-09';
import { question as question10 } from './data/question-10';
import { question as question11 } from './data/question-11';
import { question as question12 } from './data/question-12';
import { question as question13 } from './data/question-13';
import { question as question14 } from './data/question-14';
import { question as question15 } from './data/question-15';
import { question as question16 } from './data/question-16';
import { question as question17 } from './data/question-17';
import { question18 } from './data/question-18';

export type { Question } from './types';

/** Sidebar display order. New entries: add `data/question-NN.ts`, import above, append here. */
export const questions: Question[] = [
  question08,
  question09,
  question01,
  question02,
  question03,
  question04,
  question05,
  question06,
  question07,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
];
