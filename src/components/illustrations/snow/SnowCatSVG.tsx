import React from 'react';

export function SnowCatSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-cat-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-cat-wobble)" stroke="#1f2329" fill="none">
          {/* Eaves / Platform */}
          <path d="M 50 180 L 350 180 L 320 200 L 80 200 Z" fill="#e8eaed" />
          <path d="M 80 180 L 80 200 M 120 180 L 120 200 M 160 180 L 160 200 M 200 180 L 200 200 M 240 180 L 240 200 M 280 180 L 280 200 M 320 180 L 320 200" opacity="0.3" />
          
          {/* Go Board */}
          <path d="M 220 160 L 300 160 L 290 180 L 210 180 Z" fill="#faf6ee" strokeWidth="1.5" />
          <path d="M 230 160 L 220 180 M 240 160 L 230 180 M 250 160 L 240 180 M 260 160 L 250 180 M 270 160 L 260 180 M 280 160 L 270 180 M 290 160 L 280 180" opacity="0.4" strokeWidth="0.5" />
          <path d="M 215 165 L 295 165 M 215 170 L 295 170 M 215 175 L 295 175" opacity="0.4" strokeWidth="0.5" />
          
          {/* Snow Cat sleeping */}
          <path d="M 130 175 Q 120 130 160 120 Q 200 115 220 135 Q 240 155 210 175 Z" fill="#f8f9fa" strokeWidth="2" />
          {/* Cat ears */}
          <path d="M 150 125 L 140 105 L 165 120" fill="#f8f9fa" strokeWidth="1.5" />
          <path d="M 180 120 L 195 105 L 190 125" fill="#f8f9fa" strokeWidth="1.5" />
          {/* Cat tail curled */}
          <path d="M 140 165 Q 110 160 110 140 Q 110 120 125 125" strokeWidth="1.5" />
          {/* Closed eyes */}
          <path d="M 155 140 Q 160 145 165 140 M 175 140 Q 180 145 185 140" strokeWidth="1" />
          
          {/* Snow scattered */}
          <circle cx="230" cy="165" r="1.5" fill="#1f2329" />
          <circle cx="260" cy="170" r="1.5" fill="#1f2329" />
          <circle cx="250" cy="168" r="1.5" fill="#f8f9fa" stroke="none" />
          <circle cx="270" cy="172" r="1.5" fill="#f8f9fa" stroke="none" />
          
          {/* Willow branch / thread allusion */}
          <path d="M 100 50 Q 80 100 100 150" opacity="0.6" strokeWidth="1" />
          <path d="M 100 70 Q 90 90 100 100" opacity="0.6" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
