import React from 'react';

interface IllustrationProps {
  lang: 'zh' | 'en';
}

export const ScholarStudy: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center mt-5 mb-5">
      <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '130px' }}>
        <defs>
          <linearGradient id="studyWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.01" />
            <stop offset="50%" stopColor="#2c2420" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="hillWash" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#2c2420" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.03" />
          </linearGradient>
          {/* Brush wobble for hand-painted line quality */}
          <filter id="ssBrush" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="6" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          {/* Ink bleed for the background wash */}
          <filter id="ssBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="2" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="7" />
          </filter>
          {/* Warm lamp glow */}
          <radialGradient id="ssLamp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b2500" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b2500" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="3" y="3" width="274" height="144" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
        <rect x="6" y="6" width="268" height="138" fill="url(#studyWash)" stroke="#2c2420" strokeWidth="1.2" rx="2" />
        {/* Bled background wash */}
        <g filter="url(#ssBleed)">
          <path d="M6 100 Q80 70, 150 95 Q200 80, 274 110 L274 144 L6 144 Z" fill="url(#hillWash)" stroke="none" opacity="0.6" />
          <path d="M215 25 Q245 18, 268 28 L268 95 L222 92 Z" fill="#2c2420" opacity="0.05" />
        </g>
        <g filter="url(#ssBrush)">
        {/* Desk top ink wash */}
        <path d="M80 85 L200 85 L205 90 L75 90 Z" fill="#2c2420" opacity="0.12" />
        <path d="M80 85 L200 85 L205 90 L75 90 Z" fill="none" stroke="#2c2420" strokeWidth="1" />
        <line x1="85" y1="90" x2="85" y2="120" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="195" y1="90" x2="195" y2="120" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="85" y1="110" x2="195" y2="110" stroke="#2c2420" strokeWidth="0.4" />
        <rect x="170" y="76" width="18" height="9" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="170" y1="79" x2="188" y2="79" stroke="#2c2420" strokeWidth="0.3" />
        <line x1="170" y1="82" x2="188" y2="82" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M120 82 Q130 78, 140 82" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <path d="M140 82 Q150 78, 160 82" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="140" y1="78" x2="140" y2="85" stroke="#2c2420" strokeWidth="0.3" />
        <line x1="125" y1="80" x2="137" y2="80" stroke="#2c2420" strokeWidth="0.2" />
        <line x1="143" y1="80" x2="155" y2="80" stroke="#2c2420" strokeWidth="0.2" />
        {/* Oil lamp with warm glow */}
        <circle cx="100" cy="78" r="10" fill="url(#ssLamp)" stroke="none" />
        <ellipse cx="100" cy="82" rx="5" ry="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <path d="M99 78 Q100 74.5, 101 78 Q100 79, 99 78 Z" fill="#8b2500" opacity="0.55" />
        <line x1="92" y1="78" x2="108" y2="78" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M92 78 Q90 76, 89 78" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <circle cx="140" cy="52" r="5.5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
        <path d="M137 47 Q140 43, 143 47" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="140" y1="44" x2="140" y2="47" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="140" y1="57.5" x2="140" y2="59" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M130 62 Q135 59, 140 60 Q145 59, 150 62" fill="none" stroke="#2c2420" strokeWidth="1.1" />
        <line x1="130" y1="62" x2="133" y2="82" stroke="#2c2420" strokeWidth="1" />
        <line x1="150" y1="62" x2="147" y2="82" stroke="#2c2420" strokeWidth="1" />
        {/* Chest muscles (胸肌) */}
        <path d="M133.5 66 Q137 68.5, 140 67 Q143 68.5, 146.5 66" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <path d="M134.5 69.5 Q137 71, 139.5 69.5" fill="none" stroke="#2c2420" strokeWidth="0.35" />
        <path d="M140.5 69.5 Q143 71, 145.5 69.5" fill="none" stroke="#2c2420" strokeWidth="0.35" />
        {/* Abs (腹肌) */}
        <line x1="140" y1="68" x2="140" y2="80" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M136 72.5 Q140 73.5, 144 72.5" fill="none" stroke="#2c2420" strokeWidth="0.35" />
        <path d="M136 75.5 Q140 76.5, 144 75.5" fill="none" stroke="#2c2420" strokeWidth="0.35" />
        <path d="M136.5 78.5 Q140 79.5, 143.5 78.5" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M130 62 Q124 68, 120 75" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M120 75 Q118 78, 118 80" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M150 62 Q156 68, 160 75" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M160 75 Q162 78, 162 80" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <rect x="220" y="30" width="40" height="60" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="220" y1="45" x2="260" y2="45" stroke="#2c2420" strokeWidth="0.4" />
        <line x1="220" y1="60" x2="260" y2="60" stroke="#2c2420" strokeWidth="0.4" />
        <line x1="220" y1="75" x2="260" y2="75" stroke="#2c2420" strokeWidth="0.4" />
        <rect x="223" y="32" width="3" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="227" y="33" width="3" height="11" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="231" y="32" width="4" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="236" y="34" width="3" height="10" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="224" y="47" width="3" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="228" y="48" width="4" height="11" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="233" y="47" width="3" height="12" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <circle cx="250" cy="52" r="3" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <line x1="250" y1="49" x2="250" y2="55" stroke="#2c2420" strokeWidth="0.3" />
        <rect x="25" y="20" width="22" height="50" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <line x1="36" y1="15" x2="36" y2="20" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M28 45 Q33 32, 38 40 Q42 30, 44 45" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M58 78 Q60 72, 62 78" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <ellipse cx="60" cy="79" rx="4" ry="2" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M60 72 Q58 66, 60 60 Q62 54, 60 48" fill="none" stroke="#2c2420" strokeWidth="0.3" opacity="0.5" />
        <path d="M60 70 Q63 64, 62 58" fill="none" stroke="#2c2420" strokeWidth="0.25" opacity="0.4" />
        <rect x="15" y="75" width="30" height="30" fill="none" stroke="#2c2420" strokeWidth="0.7" rx="1" />
        <line x1="30" y1="75" x2="30" y2="105" stroke="#2c2420" strokeWidth="0.3" />
        <line x1="15" y1="90" x2="45" y2="90" stroke="#2c2420" strokeWidth="0.3" />
        <line x1="25" y1="78" x2="25" y2="102" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M25 82 Q20 80, 18 83" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M25 90 Q30 88, 33 91" fill="none" stroke="#2c2420" strokeWidth="0.3" />
        <path d="M10 130 Q140 126, 270 130" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        </g>
        <rect x="248" y="118" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
        <text x="255" y="129" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">书</text>
      </svg>
    </div>
  );
};
