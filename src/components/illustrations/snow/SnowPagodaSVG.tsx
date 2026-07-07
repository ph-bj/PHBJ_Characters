import React from 'react';

export function SnowPagodaSVG() {
  return (
    <div className="w-full max-w-sm mx-auto my-6 opacity-90 transition-opacity hover:opacity-100">
      <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-sm">
        <defs>
          <filter id="snow-pagoda-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-pagoda-wobble)" stroke="#1f2329" fill="none">
          {/* Base */}
          <path d="M 150 200 L 250 200 L 250 220 L 150 220 Z" fill="#e8eaed" />
          {/* Tier 1 */}
          <path d="M 160 200 L 160 160 L 240 160 L 240 200" />
          <path d="M 130 160 Q 200 150 270 160" fill="#f8f9fa" strokeWidth="2" />
          <path d="M 130 160 L 160 140 L 240 140 L 270 160 Z" fill="#f8f9fa" />
          
          {/* Tier 2 */}
          <path d="M 165 140 L 165 110 L 235 110 L 235 140" />
          <path d="M 140 110 Q 200 100 260 110" fill="#f8f9fa" strokeWidth="2" />
          <path d="M 140 110 L 165 90 L 235 90 L 260 110 Z" fill="#f8f9fa" />
          
          {/* Tier 3 */}
          <path d="M 170 90 L 170 65 L 230 65 L 230 90" />
          <path d="M 150 65 Q 200 55 250 65" fill="#f8f9fa" strokeWidth="2" />
          <path d="M 150 65 L 170 50 L 230 50 L 250 65 Z" fill="#f8f9fa" />
          
          {/* Spire */}
          <path d="M 195 50 L 195 20 L 205 20 L 205 50 Z" fill="#f8f9fa" />
          <circle cx="200" cy="15" r="5" fill="#e8eaed" />
          
          {/* Small bells / details */}
          <circle cx="130" cy="160" r="2" fill="#1f2329" />
          <circle cx="270" cy="160" r="2" fill="#1f2329" />
          <circle cx="140" cy="110" r="2" fill="#1f2329" />
          <circle cx="260" cy="110" r="2" fill="#1f2329" />
          <circle cx="150" cy="65" r="2" fill="#1f2329" />
          <circle cx="250" cy="65" r="2" fill="#1f2329" />
        </g>
      </svg>
    </div>
  );
}
