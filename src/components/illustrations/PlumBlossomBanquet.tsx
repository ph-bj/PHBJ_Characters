import React from 'react';

interface IllustrationProps {
  lang: 'zh' | 'en';
}

export const PlumBlossomBanquet: React.FC = () => {
  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center">
      <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '140px' }}>
        <defs>
          <linearGradient id="bqWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="banquetHills" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0.01" />
          </linearGradient>
          <radialGradient id="banquetMoon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2c2420" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2c2420" stopOpacity="0" />
          </radialGradient>
          {/* Brush wobble for hand-painted line quality */}
          <filter id="bqBrush" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          {/* Ink bleed for the background hill wash */}
          <filter id="bqBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="9" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="7" />
          </filter>
          {/* Pale rouge for plum blossoms (淡彩) */}
          <radialGradient id="bqPlumTint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#b4494e" stopOpacity="0.08" />
          </radialGradient>
        </defs>
        <rect x="3" y="3" width="274" height="154" fill="none" stroke="#2c2420" strokeWidth="0.5" rx="1" />
        <rect x="6" y="6" width="268" height="148" fill="url(#bqWash)" stroke="#2c2420" strokeWidth="1.2" rx="2" />
        <circle cx="210" cy="35" r="25" fill="url(#banquetMoon)" stroke="none" />
        {/* Bled hill wash - soft feathered edge like wet ink */}
        <g filter="url(#bqBleed)">
          <path d="M6 120 Q70 90, 140 115 Q200 95, 274 125 L274 154 L6 154 Z" fill="url(#banquetHills)" stroke="none" opacity="0.7" />
        </g>
        <g filter="url(#bqBrush)">
        <ellipse cx="140" cy="110" rx="42" ry="14" fill="none" stroke="#2c2420" strokeWidth="1.2" />
        <line x1="110" y1="118" x2="108" y2="140" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="170" y1="118" x2="172" y2="140" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M128 104 L128 100 Q130 96, 132 100 L132 104" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <path d="M145 103 L145 98 Q148 94, 151 98 L151 103" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <ellipse cx="140" cy="106" rx="3" ry="1.5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <ellipse cx="122" cy="107" rx="2" ry="1" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <ellipse cx="158" cy="107" rx="2" ry="1" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="95" cy="82" r="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
        <path d="M92 77 Q95 74, 98 77" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="95" y1="87" x2="95" y2="89" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M87 92 Q91 89, 95 90 Q99 89, 103 92" fill="none" stroke="#2c2420" strokeWidth="1" />
        <line x1="87" y1="92" x2="89" y2="108" stroke="#2c2420" strokeWidth="1" />
        <line x1="103" y1="92" x2="101" y2="108" stroke="#2c2420" strokeWidth="1" />
        <path d="M90 96 Q93 98, 95 96 Q97 98, 100 96" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M87 92 Q82 86, 80 80" fill="none" stroke="#2c2420" strokeWidth="1" />
        <ellipse cx="79" cy="79" rx="2" ry="1" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M103 92 Q108 96, 112 100" fill="none" stroke="#2c2420" strokeWidth="0.9" />
        <circle cx="185" cy="82" r="5" fill="none" stroke="#2c2420" strokeWidth="1.1" />
        <path d="M182 77 Q185 74, 188 77" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="185" y1="87" x2="185" y2="89" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M177 92 Q181 89, 185 90 Q189 89, 193 92" fill="none" stroke="#2c2420" strokeWidth="1" />
        <line x1="177" y1="92" x2="179" y2="108" stroke="#2c2420" strokeWidth="1" />
        <line x1="193" y1="92" x2="191" y2="108" stroke="#2c2420" strokeWidth="1" />
        <path d="M180 96 Q183 98, 185 96 Q187 98, 190 96" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M177 92 Q172 96, 168 100" fill="none" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M193 92 Q198 88, 202 84" fill="none" stroke="#2c2420" strokeWidth="1" />
        <circle cx="140" cy="58" r="4.5" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M137 54 Q140 51, 143 54" fill="none" stroke="#2c2420" strokeWidth="0.7" />
        <line x1="140" y1="62.5" x2="140" y2="64" stroke="#2c2420" strokeWidth="0.8" />
        <path d="M132 67 Q136 64, 140 65 Q144 64, 148 67" fill="none" stroke="#2c2420" strokeWidth="1" />
        <line x1="132" y1="67" x2="134" y2="90" stroke="#2c2420" strokeWidth="0.9" />
        <line x1="148" y1="67" x2="146" y2="90" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M135 71 Q138 73, 140 71 Q142 73, 145 71" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M148 67 Q153 72, 155 78" fill="none" stroke="#2c2420" strokeWidth="0.9" />
        <path d="M155 78 L155 82 Q156 80, 157 82" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <path d="M10 15 Q30 22, 55 20 Q75 18, 90 22" fill="none" stroke="#2c2420" strokeWidth="1" />
        <path d="M45 20 Q50 12, 58 10" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        {/* Rouge washes under the blossoms */}
        <circle cx="55" cy="18" r="4.5" fill="url(#bqPlumTint)" stroke="none" />
        <circle cx="72" cy="19" r="4" fill="url(#bqPlumTint)" stroke="none" />
        <circle cx="38" cy="21" r="3.5" fill="url(#bqPlumTint)" stroke="none" />
        <circle cx="58" cy="10" r="3.5" fill="url(#bqPlumTint)" stroke="none" />
        <circle cx="55" cy="18" r="3.5" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <circle cx="55" cy="18" r="1.2" fill="#2c2420" />
        <circle cx="72" cy="19" r="3" fill="none" stroke="#2c2420" strokeWidth="0.6" />
        <circle cx="72" cy="19" r="1" fill="#2c2420" />
        <circle cx="38" cy="21" r="2.5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="38" cy="21" r="0.8" fill="#2c2420" />
        <circle cx="58" cy="10" r="2.5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <circle cx="58" cy="10" r="0.8" fill="#2c2420" />
        <line x1="220" y1="10" x2="220" y2="28" stroke="#2c2420" strokeWidth="0.5" />
        <ellipse cx="220" cy="36" rx="7" ry="10" fill="none" stroke="#2c2420" strokeWidth="0.8" />
        <line x1="213" y1="36" x2="227" y2="36" stroke="#2c2420" strokeWidth="0.4" />
        <path d="M216 46 Q220 50, 224 46" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        <rect x="230" y="15" width="30" height="40" fill="none" stroke="#2c2420" strokeWidth="0.8" rx="1" />
        <line x1="245" y1="15" x2="245" y2="55" stroke="#2c2420" strokeWidth="0.4" />
        <line x1="230" y1="35" x2="260" y2="35" stroke="#2c2420" strokeWidth="0.4" />
        <circle cx="252" cy="25" r="5" fill="none" stroke="#2c2420" strokeWidth="0.5" />
        <path d="M10 145 Q70 140, 140 143 Q210 146, 270 142" fill="none" stroke="#2c2420" strokeWidth="0.4" />
        {/* Drifting petals (落花) */}
        <ellipse cx="100" cy="38" rx="1.6" ry="1" fill="#b4494e" opacity="0.3" transform="rotate(-25 100 38)" />
        <ellipse cx="115" cy="52" rx="1.4" ry="0.9" fill="#b4494e" opacity="0.25" transform="rotate(15 115 52)" />
        <ellipse cx="82" cy="60" rx="1.3" ry="0.8" fill="#b4494e" opacity="0.22" transform="rotate(-40 82 60)" />
        <ellipse cx="128" cy="30" rx="1.2" ry="0.8" fill="#b4494e" opacity="0.2" transform="rotate(30 128 30)" />
        </g>
        <rect x="248" y="130" width="14" height="14" fill="none" stroke="#8b2500" strokeWidth="1" rx="0.5" />
        <text x="255" y="141" textAnchor="middle" fill="#8b2500" fontSize="7" fontFamily="serif" fontWeight="bold">宴</text>
      </svg>
    </div>
  );
};
