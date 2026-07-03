import React from 'react';

/**
 * Decorative plum blossom (梅花) line art for the upper-left corner of
 * functional panels. A brush-style branch reaches in from the corner with
 * five-petal blossoms and buds. Purely ornamental: no pointer events, no
 * shared defs (safe to render many at once on a page).
 */

const INK = '#2c2420';
const ROUGE = '#b4494e';

/* Five-petal plum blossom drawn around a local origin. */
const Blossom: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y})${s !== 1 ? ` scale(${s})` : ''}`}>
    {[270, 342, 54, 126, 198].map((a) => {
      const r = (a * Math.PI) / 180;
      return (
        <circle
          key={a}
          cx={Math.cos(r) * 2.7}
          cy={Math.sin(r) * 2.7}
          r="1.9"
          fill={ROUGE}
          fillOpacity="0.14"
          stroke={INK}
          strokeWidth="0.55"
        />
      );
    })}
    <circle cx="0" cy="0" r="0.7" fill={INK} opacity="0.85" />
    {[300, 60, 180].map((a) => {
      const r = (a * Math.PI) / 180;
      return (
        <line
          key={a}
          x1={Math.cos(r) * 1.1}
          y1={Math.sin(r) * 1.1}
          x2={Math.cos(r) * 2}
          y2={Math.sin(r) * 2}
          stroke={INK}
          strokeWidth="0.3"
          opacity="0.7"
        />
      );
    })}
  </g>
);

export const PlumCorner: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    aria-hidden="true"
    className="absolute top-0.5 left-0.5 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none select-none opacity-80"
  >
    {/* vine hugging the top edge */}
    <path d="M2 5 Q18 2.5 34 5 Q44 6.5 52 5" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.75" />
    <path d="M34 5 Q40 3 45 1" fill="none" stroke={INK} strokeWidth="0.5" opacity="0.65" />
    {/* vine hugging the left edge */}
    <path d="M4 3 Q6.5 18 4.5 34 Q3.5 44 5 52" fill="none" stroke={INK} strokeWidth="0.85" opacity="0.75" />
    <path d="M5 34 Q7.5 40 10 44" fill="none" stroke={INK} strokeWidth="0.5" opacity="0.65" />
    {/* corner and edge blossoms */}
    <Blossom x={7} y={7} />
    <Blossom x={22} y={5} s={0.8} />
    <Blossom x={38} y={6} s={0.7} />
    <Blossom x={6} y={21} s={0.8} />
    <Blossom x={5} y={38} s={0.7} />
    {/* buds at the vine tips */}
    <circle cx="52" cy="5" r="1.1" fill={ROUGE} fillOpacity="0.3" stroke={INK} strokeWidth="0.45" />
    <circle cx="45" cy="1.5" r="0.9" fill={ROUGE} fillOpacity="0.3" stroke={INK} strokeWidth="0.4" />
    <circle cx="5" cy="52" r="1.1" fill={ROUGE} fillOpacity="0.3" stroke={INK} strokeWidth="0.45" />
    <circle cx="10" cy="44" r="0.9" fill={ROUGE} fillOpacity="0.3" stroke={INK} strokeWidth="0.4" />
  </svg>
);
