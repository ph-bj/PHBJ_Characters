import { Chapter } from './types';
import chapterData from './chapterData.json';

const { preface, chapters: rawChapters } = chapterData as {
  preface: string;
  chapters: { id: number; title: string; content: string }[];
};

export const chapters: Chapter[] = [
  { id: 0, title: '序', content: preface },
  ...rawChapters,
];
