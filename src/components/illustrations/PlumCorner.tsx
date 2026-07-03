import React from 'react';

/**
 * Decorative plum (apricot) line art for the upper-left corner of the character
 * card of 梅子玉. A brush-style branch reaches in from the corner with
 * small apricot fruits and leaves. Purely ornamental: no pointer events, no
 * shared defs.
 */

const INK = '#2c2420';
const APRICOT = '#e9c46a';
const LEAF_GREEN = '#95a370';

/* Small apricot/plum fruit drawn around a local origin. */
const PlumFruit: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y})${s !== 1 ? ` scale(${s})` : ''}`}>
    {/* Plum/Apricot fruit shape */}
    <path
      d="M 0 -3 C -3.5 -3, -5 -1, -5 2 C -5 5, -2.5 7, 0 7 C 2.5 7, 5 5, 5 2 C 5 -1, 3.5 -3, 0 -3 Z"
      fill={APRICOT}
      fillOpacity="0.25"
      stroke={INK}
      strokeWidth="0.55"
    />
    {/* Indentation/cleft line on the plum fruit */}
    <path
      d="M 0 -3 C -0.8 0, -0.8 3, 0 7"
      fill="none"
      stroke={INK}
      strokeWidth="0.4"
      strokeDasharray="0.8 0.8"
      opacity="0.65"
    />
    {/* Small stem connecting to the vine */}
    <path
      d="M 0 -3 Q -1 -5 -3 -5.5"
      fill="none"
      stroke={INK}
      strokeWidth="0.5"
    />
    {/* Small leaf */}
    <path
      d="M -3 -5.5 C -4.5 -6.5, -6 -6.5, -6.5 -5 C -7 -3.5, -5.5 -4, -3 -5.5 Z"
      fill={LEAF_GREEN}
      fillOpacity="0.3"
      stroke={INK}
      strokeWidth="0.4"
    />
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
    {/* corner and edge fruits */}
    <PlumFruit x={7} y={7} />
    <PlumFruit x={22} y={5} s={0.8} />
    <PlumFruit x={38} y={6} s={0.7} />
    <PlumFruit x={6} y={21} s={0.8} />
    <PlumFruit x={5} y={38} s={0.7} />
    {/* buds at the vine tips */}
    <circle cx="52" cy="5" r="1.1" fill={APRICOT} fillOpacity="0.3" stroke={INK} strokeWidth="0.45" />
    <circle cx="45" cy="1.5" r="0.9" fill={APRICOT} fillOpacity="0.3" stroke={INK} strokeWidth="0.4" />
    <circle cx="5" cy="52" r="1.1" fill={APRICOT} fillOpacity="0.3" stroke={INK} strokeWidth="0.45" />
    <circle cx="10" cy="44" r="0.9" fill={APRICOT} fillOpacity="0.3" stroke={INK} strokeWidth="0.4" />
  </svg>
);
