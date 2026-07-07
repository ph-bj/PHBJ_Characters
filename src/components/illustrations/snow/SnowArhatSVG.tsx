import React from 'react';

export function SnowArhatSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-arhat-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-arhat-wobble)" stroke="#1f2329" fill="none">
          {/* Floor */}
          <path d="M 80 200 L 320 200" strokeDasharray="4,4" opacity="0.5" />
          
          {/* Zen Wall */}
          <path d="M 230 40 L 230 200" strokeWidth="1.5" opacity="0.3" />
          <path d="M 270 40 L 270 200" strokeWidth="1.5" opacity="0.3" />
          
          {/* Arhat facing the wall (meditating) */}
          {/* Robes */}
          <path d="M 150 195 Q 130 150 160 120 Q 180 110 200 120 Q 220 150 210 195 Z" fill="#f8f9fa" strokeWidth="2" />
          {/* Head (bald, snow-covered) */}
          <circle cx="180" cy="100" r="18" fill="#f8f9fa" strokeWidth="1.5" />
          {/* Hands clasped in lap (hidden by robes) */}
          <path d="M 160 140 Q 180 150 200 140" opacity="0.6" />
          <path d="M 170 190 Q 180 185 190 190" opacity="0.4" />
          
          {/* Staff with rings leaning against the wall */}
          <path d="M 245 200 L 260 70" strokeWidth="1.5" />
          <circle cx="260" cy="65" r="5" />
          <circle cx="255" cy="65" r="3" />
          <circle cx="265" cy="65" r="3" />
          
          {/* Palm leaf text / Sutras scattered */}
          <path d="M 100 190 Q 110 185 120 190 Q 110 195 100 190 Z" fill="#faf6ee" opacity="0.8" />
          <path d="M 110 180 Q 125 175 130 185 Q 115 190 110 180 Z" fill="#faf6ee" opacity="0.8" />
          
          {/* Lotus illusion emerging from the snow */}
          <path d="M 110 140 Q 105 130 110 120 Q 115 130 110 140 Z" fill="#e8eaed" />
          <path d="M 110 140 Q 100 135 90 130 Q 100 125 110 140 Z" fill="#e8eaed" />
          <path d="M 110 140 Q 120 135 130 130 Q 120 125 110 140 Z" fill="#e8eaed" />
          <path d="M 110 145 Q 110 160 115 175" opacity="0.3" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
