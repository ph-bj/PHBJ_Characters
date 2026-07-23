---
name: ink-wash-illustration
description: Generate Chinese ink wash landscape SVG React illustration components in the style of MainInkLandscape.tsx from text descriptions and embed them in chapter paragraphs.
---

# Chinese Ink Wash Illustration Skill (水墨画插图)

This skill guides the agent to convert Chinese literary scene descriptions into detailed, high-aesthetic Chinese ink wash painting (`水墨画`) SVG React components (in the style of `MainInkLandscape.tsx`) and integrate them into chapter readers.

---

## 1. Component Structure & Styling Standard

Every ink wash illustration component must adhere to the standard visual hierarchy established in `MainInkLandscape.tsx`:

### Parchment Container Frame
```tsx
<div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
  <svg
    viewBox="0 0 520 400"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
    style={{ maxHeight: "360px" }}
  >
    {/* defs, washes, linework, stamp, calligraphy */}
  </svg>
</div>
```

### SVG Defs & Filters (水墨效果)
Must include:
- `linearGradient` for ink tones (`#2c2420` at varying opacities `0.65` down to `0.08`).
- `filter id="inkTexture"`: `feTurbulence` (seed 7, freq 0.012, scale 3) for brush stroke wobble.
- `filter id="mlBleed"`: `feGaussianBlur` (stdDev 2.2) + `feTurbulence` (freq 0.06, scale 9) for wet rice-paper ink bleed (洇墨).
- `filter id="mlBleedFar"`: `feGaussianBlur` (stdDev 4) + `feTurbulence` (freq 0.04, scale 12) for background mountain/canopy washes.

### Traditional Scroll Border
```svg
<rect x="3" y="3" width="514" height="394" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="2" />
<rect x="8" y="8" width="504" height="384" fill="none" stroke="#2c2420" strokeWidth="1.8" rx="3" />
```

---

## 2. Rendering Layers (墨分五色)

Render SVG elements in back-to-front layer order:

1. **Background Washes (`g filter="url(#mlBleedFar)"`)**: Farthest mountain silhouettes, cloud canopy shadows, ground wash masses.
2. **Midground Bleed (`g filter="url(#mlBleed)"`)**: Roof ink masses, tree foliage masses, rock washes, coffin/furniture shadow washes.
3. **Linework (`g filter="url(#inkTexture)"`)**: Hand-painted stroke outlines for:
   - Architecture (tiled roofs, flying eaves 飞檐, doors, lattice windows 窗格, courtyard walls 砖墙).
   - Flora (gnarled Locust/Pine/Bamboo/Plum trees, bark texture 皴纹, leaf clusters, high wild grass 草深一尺).
   - Key Narrative Props (stacked travel luggage 箱笼, empty coffins 空棺木, double gates 重门, kitchen chimney smoke 炊烟).
   - Figures (scholars/servants in traditional robes).
4. **Red Seal Stamp (红印章)**: Red square stamp (`fill="none" stroke="#8b2500" strokeWidth="1.5"`) with seal text in bold serif.
5. **Vertical Calligraphy Title (题字)**: `writingMode="vertical-rl"` text in dark ink serif.

---

## 3. Chapter Integration Pattern

1. **Naming**: Place the file under `src/components/illustrations/Chapter<N>Para<P>Illustration.tsx`.
2. **Export**: Export both named component (`export const Chapter...`) and default (`export default Chapter...`).
3. **Import & Condition in `ChapterReader.tsx`**:
   Paragraph index `i` is 0-indexed (`Paragraph P` maps to `i === P - 1`):
   ```tsx
   {chapter.id === N && i === (P - 1) && (
     <div className="mt-4 mb-6 block w-full">
       <ChapterNParaPIllustration />
     </div>
   )}
   ```
4. **Typecheck Verification**: Run `npx tsc --noEmit` to ensure error-free TypeScript build.
