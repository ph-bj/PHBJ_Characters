/**
 * Fonts for text painted inside the cinemas. They mirror the rest of the app (src/index.css,
 * --font-sans): Inter for English and Noto Sans SC for Chinese, never a separate film font.
 */

/** The app's font stack, for canvas `ctx.font`: Latin falls to Inter, Chinese to Noto Sans SC. */
export const APP_FONT = '"Inter", "Noto Sans SC", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

/** A canvas font string in the app's fonts, e.g. `appFont(48, 700)`. */
export const appFont = (px: number, weight = 400) => `${weight} ${px}px ${APP_FONT}`;

/**
 * How far below a point the alphabetic baseline must sit for a Chinese character, in the context's
 * current font, to be visually centred on that point. Measured on 国, which fills the em square.
 */
export function ideographCenterOffset(ctx: CanvasRenderingContext2D) {
  const baseline = ctx.textBaseline;
  ctx.textBaseline = 'alphabetic';
  const m = ctx.measureText('国');
  ctx.textBaseline = baseline;
  return (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
}

/** Writes Chinese text (one line) with its visual centre exactly at (x, y), in the current font. */
export function fillCentered(ctx: CanvasRenderingContext2D, text: string, x: number, y: number) {
  const align = ctx.textAlign, baseline = ctx.textBaseline;
  const dy = ideographCenterOffset(ctx);
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText(text, x, y + dy);
  ctx.textAlign = align; ctx.textBaseline = baseline;
}

/** Characters drawn by scene code itself (plaques, seals, lanterns, album pages), beyond story text. */
const SCENE_TEXT = '情品花世德堂贞烈流芳酒福寿試卷姑苏会馆正上高逸华豪狂趣和乐至慧韵醇淑烈直酣艳媚淫邪黠荡贪魔祟蠹中宝珠琴琪官';

/**
 * Loads the app's web fonts for the given text before a film paints it. Noto Sans SC is served in
 * slices by character, so the slices a film needs must be fetched first, or its canvases would
 * fall back to another font. Resolves even if loading fails (the film then uses fallbacks).
 */
export async function loadAppFonts(text: string) {
  if (typeof document === 'undefined' || !document.fonts) return;
  const chars = [...new Set([...text, ...SCENE_TEXT])].join('');
  const specimen = `${chars}Aa`;
  try {
    await Promise.all([400, 700].map(weight => document.fonts.load(appFont(32, weight), specimen)));
  } catch { /* fall back quietly */ }
}
