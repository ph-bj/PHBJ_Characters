import React from 'react';

/**
 * Decorative plum (apricot) line art for the upper-left corner of the character
 * card of 梅子玉. A brush-style branch reaches in from the corner with
 * a single, highly detailed apricot/plum fruit (representing the Jade Plum) and leaves.
 * Purely ornamental: no pointer events, no shared defs.
 */

const INK = '#2c2420';

export const PlumCorner: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    aria-hidden="true"
    className="absolute top-0.5 left-0.5 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none select-none opacity-95"
  >
    <defs>
      {/* Radial gradient for the plum/apricot fruit: a glowing blush over jade green */}
      <radialGradient id="plumGradient" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fffcf0" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#f4cb6c" stopOpacity="0.9" />
        <stop offset="70%" stopColor="#e79c5d" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#8fa882" stopOpacity="0.95" />
      </radialGradient>
      
      {/* Gradient for the leaf */}
      <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a7c29b" />
        <stop offset="100%" stopColor="#5c7a4d" />
      </linearGradient>

      {/* Subtle drop shadow to make the fruit pop from the parchment card */}
      <filter id="plumShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0.5" dy="1" stdDeviation="0.6" floodColor="#140d0b" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* single plum fruit at the corner */}
    <g transform="translate(12, 12) scale(1.5)" filter="url(#plumShadow)">
      {/* Stem */}
      <path
        d="M 0 -3 C -1.5 -5, -3 -6, -4.5 -5.5"
        fill="none"
        stroke={INK}
        strokeWidth="0.55"
        strokeLinecap="round"
      />
      {/* Leaf */}
      <path
        d="M -3 -5.5 C -5.5 -7.5, -9 -7.5, -10 -6 C -11 -4, -8 -4, -3 -5.5 Z"
        fill="url(#leafGradient)"
        stroke={INK}
        strokeWidth="0.4"
      />
      {/* Leaf vein */}
      <path
        d="M -3.5 -5.5 C -6 -6.2, -7.5 -6.0, -9 -6.2"
        fill="none"
        stroke={INK}
        strokeWidth="0.25"
        opacity="0.6"
      />
      {/* Fruit Body */}
      <path
        d="M 0 -3 C -3.8 -3, -5.8 -0.8, -5.5 2.8 C -5.2 6.4, -2.6 8, 0 8 C 2.6 8, 5.2 6.4, 5.5 2.8 C 5.8 -0.8, 3.8 -3, 0 -3 Z"
        fill="url(#plumGradient)"
        stroke={INK}
        strokeWidth="0.6"
      />
    </g>
  </svg>
);
