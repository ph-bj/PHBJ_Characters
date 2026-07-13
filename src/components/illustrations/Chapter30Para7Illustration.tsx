import React from "react";

/**
 * A compact, chapter-specific SVG inspired by `MainInkLandscape`.
 * Visualizes paragraph 7 of Chapter 30: winding paths, a pond with six
 * bridges, boats, pavilions, and trees. Kept intentionally small and
 * decorative to sit under the paragraph in the reader.
 */
export const Chapter30Para7Illustration: React.FC = () => {
  return (
    <div className="mt-4 mb-6 block w-full parchment p-3 rounded-sm border-[var(--paper-border)]/30">
      <div style={{ maxHeight: 300, overflow: "hidden" }}>
        <svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <linearGradient id="c30-ink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c2420" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2c2420" stopOpacity="0.06" />
            </linearGradient>
            <filter id="c30-bleed" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="5" result="noise" />
              <feDisplacementMap in="blur" in2="noise" scale="6" />
            </filter>
          </defs>

          {/* stylized Jade Belt River with six bridges */}
          <g filter="url(#c30-bleed)">
            <path d="M8 110 C60 90, 120 130, 180 110 S300 95, 360 110 S460 90, 512 110 L512 140 L8 140 Z" fill="#2c2420" opacity="0.08" />
          </g>

          <path d="M10 115 C62 95, 122 135, 182 115 S302 100, 362 115 S462 95, 510 115" fill="none" stroke="#2c2420" strokeWidth="0.9" />

          {/* Six simple bridges */}
          {[40, 110, 180, 250, 320, 390].map((cx, i) => (
            <g key={i}>
              <path d={`M${cx - 22} 110 Q${cx} ${90 - (i % 2) * 6}, ${cx + 22} 110`} fill="none" stroke="#2c2420" strokeWidth={1.2} />
              <rect x={cx - 18} y={112} width={36} height={6} rx={2} fill="#2c2420" opacity={0.06} />
            </g>
          ))}

          {/* Banks, little su causeway and pavilions */}
          <path d="M30 90 Q70 60, 120 80 Q160 65, 200 82 Q250 70, 300 86 Q350 72, 400 90" fill="none" stroke="#2c2420" strokeWidth="0.8" opacity="0.7" />
          <path d="M60 80 L72 72 L90 80 L76 86 Z" fill="#2c2420" opacity="0.6" />
          <path d="M360 80 L372 72 L390 80 L376 86 Z" fill="#2c2420" opacity="0.6" />

          {/* Small boats */}
          <g fill="none" stroke="#2c2420" strokeWidth="0.6">
            <path d="M115 122 Q120 118, 130 121 Q138 123, 144 122" opacity="0.95" />
            <path d="M325 125 Q330 121, 340 124 Q348 126, 354 125" opacity="0.9" />
          </g>

          {/* Bamboo & pines on banks */}
          <g fill="none" stroke="#2c2420" strokeWidth="0.9" opacity="0.9">
            <path d="M18 72 Q22 58, 20 46 Q18 36, 24 28" />
            <path d="M498 72 Q492 58, 494 46 Q498 36, 492 30" />
            <path d="M70 60 Q86 44, 102 60" strokeWidth="0.6" />
            <path d="M420 60 Q436 44, 452 60" strokeWidth="0.6" />
          </g>

          {/* Stylized pavilion cluster (small) */}
          <g transform="translate(220,40) scale(0.7)">
            <path d="M-40 70 L0 45 L40 70" fill="#2c2420" opacity="0.35" />
            <path d="M-40 70 L0 45 L40 70" fill="none" stroke="#2c2420" strokeWidth="1.2" />
            <line x1="-18" y1="70" x2="-18" y2="92" stroke="#2c2420" strokeWidth="1" />
            <line x1="18" y1="70" x2="18" y2="92" stroke="#2c2420" strokeWidth="1" />
          </g>

        </svg>
      </div>
    </div>
  );
};

export default Chapter30Para7Illustration;
