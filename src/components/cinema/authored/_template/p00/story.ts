import { defineStory } from '../../define';

// TEMPLATE-ONLY: scaffolded by `npm run new-cinema -- <chapter> <paragraph>`; lines marked like this one are dropped.
/**
 * Chapter {{CHAPTER}}, paragraph {{PARAGRAPH}}.
 *
 * 原文：{{SOURCE_ZH}}
 *
 * Translation: {{SOURCE_EN}}
 *
 * TODO: Split the passage into 2–6 beats, one per shot. Shots run back to back from 0 to 36
 * seconds; `cut: false` carries a set on without the dip to black. Titles label the shot buttons,
 * so keep them short; `quote` holds the words of the original each shot stages.
 */
export default defineStory({
  title: { en: 'TODO: English title', zh: 'TODO：中文标题' },
  description: {
    en: 'TODO: One or two sentences on how the passage is staged, and whom the figures represent.',
    zh: 'TODO：一两句话说明本段如何演绎，画中人物所指为谁。',
  },
  shots: [
    {
      start: 0, end: 22,
      title: { en: 'TODO: first beat', zh: 'TODO：第一幕' },
      quote: '{{QUOTE_1}}',
      caption: { en: 'TODO: what the viewer sees in this shot.', zh: 'TODO：本幕画面说明。' },
    },
    {
      start: 22, end: 36,
      title: { en: 'TODO: second beat', zh: 'TODO：第二幕' },
      quote: '{{QUOTE_2}}',
      caption: { en: 'TODO: what the viewer sees in this shot.', zh: 'TODO：本幕画面说明。' },
    },
  ],
  // Subtitles: phrases of the original with their translation, shown while each is staged.
  // TODO: drafted from the text; retime them to the shots and trim lines too long for the screen.
  subtitles: [
    { start: 0.4, end: 35.6, zh: '{{SOURCE_ZH}}', en: '{{SOURCE_EN}}' }, // SUBTITLES
  ],
});
