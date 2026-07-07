import React from 'react';

export function SnowPagodaSVG() {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center my-6 opacity-90 transition-opacity hover:opacity-100 max-w-md mx-auto">
      <svg viewBox="0 0 400 240" className="w-full" style={{ maxHeight: '320px' }}>
        <defs>
          <filter id="snow-pagoda-wobble">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        <rect width="400" height="240" fill="transparent" />
        
        <g filter="url(#snow-pagoda-wobble)" stroke="#2c2420" fill="none">
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
          <circle cx="130" cy="160" r="2" fill="#2c2420" />
          <circle cx="270" cy="160" r="2" fill="#2c2420" />
          <circle cx="140" cy="110" r="2" fill="#2c2420" />
          <circle cx="260" cy="110" r="2" fill="#2c2420" />
          <circle cx="150" cy="65" r="2" fill="#2c2420" />
          <circle cx="250" cy="65" r="2" fill="#2c2420" />
        </g>
      
      {/* ===== RED SEAL STAMP (印章) ===== */}
      <rect x="365" y="205" width="22" height="22" fill="none" stroke="#8b2500" strokeWidth="1.5" rx="1" />
      <text x="376" y="220" textAnchor="middle" fill="#8b2500" fontSize="10" fontFamily="serif" fontWeight="bold">塔</text>

      {/* ===== CALLIGRAPHY TITLE (题字) ===== */}
      <text x="382" y="30" textAnchor="middle" fill="#2c2420" fontSize="14" fontFamily="serif" writingMode="vertical-rl" opacity="0.7">雪塔</text>
    </svg>
    </div>
  );
}
