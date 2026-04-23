import { summaries0to10 } from './summaries_0to10';
import { summaries11to20 } from './summaries_11to20';
import { summaries21to30 } from './summaries_21to30';
import { summaries31to40 } from './summaries_31to40';
import { summaries41to50 } from './summaries_41to50';
import { summaries51to60 } from './summaries_51to60';

export const chapterSummaries: Record<number, { zh: string; en: string }> = {
  ...summaries0to10,
  ...summaries11to20,
  ...summaries21to30,
  ...summaries31to40,
  ...summaries41to50,
  ...summaries51to60,
};
