import React from 'react';

/**
 * Per-chapter ink wash (水墨) scene illustrations, one for each of the 60
 * chapters, composed from a shared vocabulary of brush-drawn elements.
 * Each scene depicts the opening paragraph of its chapter and renders in
 * the same parchment tile style as the five standalone illustrations.
 */

const INK = '#2c2420';
const RED = '#8b2500';

/* ---- Element vocabulary ----------------------------------------------- */
/* Every element is a static fragment drawn around a local origin (ground   */
/* contact at y=0 unless noted); scenes place them via translate/scale.     */

const PRIMS: Record<string, React.ReactElement> = {
  /* soft bled hill mass, drawn inside the bleed group */
  hills: (
    <path d="M-134 0 Q-70 -28, 0 -6 Q70 -24, 134 0 L134 44 L-134 44 Z" fill={INK} opacity="0.1" />
  ),
  ground: (
    <path d="M-130 0 Q-60 -3, 0 -1 Q60 2, 130 0" fill="none" stroke={INK} strokeWidth="0.4" />
  ),
  moon: (
    <g>
      <circle cx="0" cy="0" r="16" fill="url(#csHalo)" />
      <circle cx="0" cy="0" r="9" fill="none" stroke={INK} strokeWidth="1.1" />
      <circle cx="-1.5" cy="-1" r="7" fill="none" stroke={INK} strokeWidth="0.4" strokeDasharray="2,3" />
    </g>
  ),
  sun: (
    <g>
      <circle cx="0" cy="0" r="16" fill="url(#csHalo)" />
      <circle cx="0" cy="0" r="8" fill="none" stroke={INK} strokeWidth="1" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <line key={a} x1={Math.cos(r) * 10} y1={Math.sin(r) * 10} x2={Math.cos(r) * 14} y2={Math.sin(r) * 14} stroke={INK} strokeWidth="0.4" opacity="0.55" />
        );
      })}
    </g>
  ),
  snow: (
    <g opacity="0.55">
      {[[-110, -40], [-80, -10], [-95, 25], [-50, -35], [-30, 5], [-60, 40], [0, -25], [15, 15], [-10, 45], [45, -40], [60, 0], [35, 35], [90, -20], [105, 20], [75, 45], [120, -45]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.3 : 0.9} fill="none" stroke={INK} strokeWidth="0.35" />
      ))}
    </g>
  ),
  rain: (
    <g opacity="0.45">
      {[[-110, -40], [-85, 0], [-60, -30], [-35, 10], [-10, -45], [10, -10], [35, -35], [60, 5], [85, -25], [110, -5], [-95, 30], [45, 30]].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={x - 3} y2={y + 10} stroke={INK} strokeWidth="0.3" />
      ))}
    </g>
  ),
  water: (
    <g>
      <path d="M-100 0 Q-90 -3 -80 0 T-60 0 T-40 0 T-20 0 T0 0 T20 0 T40 0 T60 0 T80 0 T100 0" fill="none" stroke={INK} strokeWidth="0.45" />
      <path d="M-80 5 Q-70 2.5 -60 5 T-40 5 T-20 5 T0 5 T20 5 T40 5 T60 5" fill="none" stroke={INK} strokeWidth="0.35" opacity="0.6" />
      <path d="M-50 10 Q-40 8 -30 10 T-10 10 T10 10 T30 10" fill="none" stroke={INK} strokeWidth="0.3" opacity="0.35" />
    </g>
  ),
  birds: (
    <g>
      <path d="M0 0 Q4 -5 8 -2 Q12 -6 16 -2" fill="none" stroke={INK} strokeWidth="0.5" />
      <path d="M20 -8 Q23 -12 26 -9 Q29 -13 32 -9" fill="none" stroke={INK} strokeWidth="0.4" />
    </g>
  ),

  /* ---- figures (all with defined chest and abs) ---- */
  figStand: (
    <g>
      <circle cx="0" cy="-36" r="4" fill="none" stroke={INK} strokeWidth="1" />
      <path d="M-2 -40 Q0 -42.5 2 -40" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="0" y1="-32" x2="0" y2="-30" stroke={INK} strokeWidth="0.8" />
      <path d="M-8 -27 Q-4 -30.5 0 -29.5 Q4 -30.5 8 -27" fill="none" stroke={INK} strokeWidth="1" />
      <line x1="-8" y1="-27" x2="-6" y2="-12" stroke={INK} strokeWidth="0.9" />
      <line x1="8" y1="-27" x2="6" y2="-12" stroke={INK} strokeWidth="0.9" />
      <path d="M-5.5 -24.5 Q-3 -22 0 -23.5 Q3 -22 5.5 -24.5" fill="none" stroke={INK} strokeWidth="0.55" />
      <path d="M-5 -21 Q-3 -19.8 -1 -21" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M1 -21 Q3 -19.8 5 -21" fill="none" stroke={INK} strokeWidth="0.3" />
      <line x1="0" y1="-23" x2="0" y2="-13" stroke={INK} strokeWidth="0.35" />
      <path d="M-4 -18.5 Q0 -17.5 4 -18.5" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M-3.5 -15.5 Q0 -14.5 3.5 -15.5" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M-6 -12 Q0 -10 6 -12" fill="none" stroke={INK} strokeWidth="0.7" />
      <path d="M-8 -27 Q-11 -21 -12 -15" fill="none" stroke={INK} strokeWidth="0.85" />
      <path d="M-12 -15 Q-12.5 -12 -11 -10" fill="none" stroke={INK} strokeWidth="0.75" />
      <path d="M8 -27 Q11 -21 12 -15" fill="none" stroke={INK} strokeWidth="0.85" />
      <path d="M12 -15 Q12.5 -12 11 -10" fill="none" stroke={INK} strokeWidth="0.75" />
      <line x1="-3" y1="-11" x2="-4" y2="0" stroke={INK} strokeWidth="0.9" />
      <line x1="3" y1="-11" x2="4" y2="0" stroke={INK} strokeWidth="0.9" />
    </g>
  ),
  figWalk: (
    <g>
      <circle cx="1" cy="-36" r="4" fill="none" stroke={INK} strokeWidth="1" />
      <path d="M-1 -40 Q1 -42.5 3 -40" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="1" y1="-32" x2="0.5" y2="-30" stroke={INK} strokeWidth="0.8" />
      <path d="M-8 -27 Q-4 -30.5 0 -29.5 Q4 -30.5 8 -27" fill="none" stroke={INK} strokeWidth="1" />
      <line x1="-8" y1="-27" x2="-6" y2="-12" stroke={INK} strokeWidth="0.9" />
      <line x1="8" y1="-27" x2="6" y2="-12" stroke={INK} strokeWidth="0.9" />
      <path d="M-5.5 -24.5 Q-3 -22 0 -23.5 Q3 -22 5.5 -24.5" fill="none" stroke={INK} strokeWidth="0.55" />
      <line x1="0" y1="-23" x2="0" y2="-13" stroke={INK} strokeWidth="0.35" />
      <path d="M-4 -18.5 Q0 -17.5 4 -18.5" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M-3.5 -15.5 Q0 -14.5 3.5 -15.5" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M-6 -12 Q0 -10 6 -12" fill="none" stroke={INK} strokeWidth="0.7" />
      <path d="M-8 -27 Q-12 -22 -14 -17" fill="none" stroke={INK} strokeWidth="0.85" />
      <path d="M8 -27 Q13 -23 16 -19" fill="none" stroke={INK} strokeWidth="0.85" />
      <line x1="-3" y1="-11" x2="-9" y2="0" stroke={INK} strokeWidth="0.9" />
      <line x1="3" y1="-11" x2="7" y2="0" stroke={INK} strokeWidth="0.9" />
    </g>
  ),
  figSit: (
    <g>
      <circle cx="0" cy="-30" r="4" fill="none" stroke={INK} strokeWidth="1" />
      <path d="M-2 -34 Q0 -36.5 2 -34" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="0" y1="-26" x2="0" y2="-24" stroke={INK} strokeWidth="0.8" />
      <path d="M-7 -21 Q-3.5 -24 0 -23.5 Q3.5 -24 7 -21" fill="none" stroke={INK} strokeWidth="1" />
      <line x1="-7" y1="-21" x2="-6" y2="-8" stroke={INK} strokeWidth="0.85" />
      <line x1="7" y1="-21" x2="6" y2="-8" stroke={INK} strokeWidth="0.85" />
      <path d="M-5 -18.5 Q-2.5 -16.5 0 -17.8 Q2.5 -16.5 5 -18.5" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="0" y1="-17" x2="0" y2="-9" stroke={INK} strokeWidth="0.3" />
      <path d="M-3.5 -13 Q0 -12 3.5 -13" fill="none" stroke={INK} strokeWidth="0.28" />
      <path d="M-6 -8 Q0 -6.5 6 -8" fill="none" stroke={INK} strokeWidth="0.7" />
      <path d="M-7 -21 Q-9 -15 -8 -10" fill="none" stroke={INK} strokeWidth="0.8" />
      <path d="M7 -21 Q9 -15 8 -10" fill="none" stroke={INK} strokeWidth="0.8" />
      <path d="M-5 -8 Q-8 -4 -8 0" fill="none" stroke={INK} strokeWidth="0.85" />
      <path d="M5 -8 Q8 -4 8 0" fill="none" stroke={INK} strokeWidth="0.85" />
    </g>
  ),
  figBow: (
    <g>
      <circle cx="8" cy="-25" r="3.5" fill="none" stroke={INK} strokeWidth="0.95" />
      <path d="M-5 -13 Q0 -24 5.5 -25" fill="none" stroke={INK} strokeWidth="0.95" />
      <path d="M-3 -12 Q1.5 -21 5 -22" fill="none" stroke={INK} strokeWidth="0.5" />
      <path d="M5 -22 Q8 -16 8 -11" fill="none" stroke={INK} strokeWidth="0.75" />
      <path d="M7 -23 Q10 -17 9 -11" fill="none" stroke={INK} strokeWidth="0.6" />
      <line x1="-5" y1="-12" x2="-5" y2="0" stroke={INK} strokeWidth="0.85" />
      <line x1="-1" y1="-12" x2="0" y2="0" stroke={INK} strokeWidth="0.85" />
    </g>
  ),

  /* ---- furniture & props ---- */
  tableRound: (
    <g>
      <ellipse cx="0" cy="-14" rx="20" ry="6" fill="none" stroke={INK} strokeWidth="1" />
      <line x1="-14" y1="-10" x2="-15" y2="0" stroke={INK} strokeWidth="0.7" />
      <line x1="14" y1="-10" x2="15" y2="0" stroke={INK} strokeWidth="0.7" />
      <path d="M-3 -17 Q0 -21 3 -17" fill="none" stroke={INK} strokeWidth="0.6" />
      <path d="M3 -18 Q5.5 -19.5 5 -17" fill="none" stroke={INK} strokeWidth="0.4" />
      <ellipse cx="-9" cy="-15.5" rx="1.8" ry="0.9" fill="none" stroke={INK} strokeWidth="0.4" />
      <ellipse cx="9" cy="-15.5" rx="1.8" ry="0.9" fill="none" stroke={INK} strokeWidth="0.4" />
    </g>
  ),
  desk: (
    <g>
      <path d="M-20 -14 L20 -14 L23 -10 L-23 -10 Z" fill={INK} opacity="0.08" />
      <path d="M-20 -14 L20 -14 L23 -10 L-23 -10 Z" fill="none" stroke={INK} strokeWidth="0.9" />
      <line x1="-18" y1="-10" x2="-18" y2="0" stroke={INK} strokeWidth="0.7" />
      <line x1="18" y1="-10" x2="18" y2="0" stroke={INK} strokeWidth="0.7" />
      <rect x="-15" y="-19" width="9" height="4.5" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="-15" y1="-16.7" x2="-6" y2="-16.7" stroke={INK} strokeWidth="0.3" />
      <path d="M10 -14 Q9 -19.5 12 -19.5 Q15 -19.5 14 -14" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="11.5" y1="-19.5" x2="10.5" y2="-24" stroke={INK} strokeWidth="0.35" />
      <line x1="13" y1="-19.5" x2="14" y2="-24" stroke={INK} strokeWidth="0.35" />
    </g>
  ),
  window: (
    <g>
      <rect x="-12" y="-14" width="24" height="28" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="0" y1="-14" x2="0" y2="14" stroke={INK} strokeWidth="0.35" />
      <line x1="-12" y1="0" x2="12" y2="0" stroke={INK} strokeWidth="0.35" />
      <line x1="-6" y1="-14" x2="-6" y2="14" stroke={INK} strokeWidth="0.25" />
      <line x1="6" y1="-14" x2="6" y2="14" stroke={INK} strokeWidth="0.25" />
    </g>
  ),
  qin: (
    <g>
      <path d="M-16 -12 L16 -12 L18 -9 L-18 -9 Z" fill="none" stroke={INK} strokeWidth="0.8" />
      <line x1="-15" y1="-9" x2="-15" y2="0" stroke={INK} strokeWidth="0.6" />
      <line x1="15" y1="-9" x2="15" y2="0" stroke={INK} strokeWidth="0.6" />
      <rect x="-12" y="-15" width="24" height="2.8" rx="1" fill={INK} opacity="0.15" />
      <rect x="-12" y="-15" width="24" height="2.8" rx="1" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="-10" y1="-13.8" x2="10" y2="-13.8" stroke={INK} strokeWidth="0.2" />
    </g>
  ),
  bed: (
    <g>
      <line x1="-22" y1="-30" x2="22" y2="-30" stroke={INK} strokeWidth="0.8" />
      <line x1="-22" y1="-30" x2="-22" y2="0" stroke={INK} strokeWidth="0.8" />
      <line x1="22" y1="-30" x2="22" y2="0" stroke={INK} strokeWidth="0.8" />
      <line x1="-22" y1="-2" x2="22" y2="-2" stroke={INK} strokeWidth="0.9" />
      <path d="M-21 -29 Q-18 -16 -20 -4" fill="none" stroke={INK} strokeWidth="0.45" />
      <path d="M21 -29 Q13 -20 15 -8" fill="none" stroke={INK} strokeWidth="0.45" />
      <rect x="-19" y="-11" width="8" height="4" fill="none" stroke={INK} strokeWidth="0.4" />
      <circle cx="-13" cy="-10" r="3.2" fill="none" stroke={INK} strokeWidth="0.85" />
      <path d="M-9 -8.5 Q2 -12 17 -7.5 Q19 -5 17 -3.5 L-9 -4.5 Z" fill={INK} opacity="0.1" />
      <path d="M-9 -8.5 Q2 -12 17 -7.5" fill="none" stroke={INK} strokeWidth="0.6" />
    </g>
  ),
  screen: (
    <g>
      <rect x="-21" y="-30" width="14" height="30" fill="none" stroke={INK} strokeWidth="0.7" />
      <rect x="-7" y="-32" width="14" height="32" fill="none" stroke={INK} strokeWidth="0.7" />
      <rect x="7" y="-30" width="14" height="30" fill="none" stroke={INK} strokeWidth="0.7" />
      <path d="M-18 -14 Q-14 -20 -10 -14" fill="none" stroke={INK} strokeWidth="0.35" opacity="0.7" />
      <path d="M-4 -16 Q0 -23 4 -16" fill="none" stroke={INK} strokeWidth="0.35" opacity="0.7" />
      <path d="M10 -14 Q14 -20 18 -14" fill="none" stroke={INK} strokeWidth="0.35" opacity="0.7" />
      <circle cx="0" cy="-9" r="1.5" fill="none" stroke={INK} strokeWidth="0.3" opacity="0.6" />
    </g>
  ),
  candle: (
    <g>
      <circle cx="0" cy="-11" r="6" fill="url(#csGlow)" />
      <line x1="0" y1="0" x2="0" y2="-8" stroke={INK} strokeWidth="1.4" />
      <path d="M-1 -9 Q0 -13.5 1 -9 Q0 -8 -1 -9 Z" fill={RED} opacity="0.55" />
      <ellipse cx="0" cy="0" rx="3" ry="1" fill="none" stroke={INK} strokeWidth="0.4" />
    </g>
  ),
  incense: (
    <g>
      <path d="M-4 0 Q-5 -4 0 -5 Q5 -4 4 0 Z" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="-3" y1="0" x2="-4" y2="2" stroke={INK} strokeWidth="0.5" />
      <line x1="3" y1="0" x2="4" y2="2" stroke={INK} strokeWidth="0.5" />
      <path d="M0 -6 Q-2 -12 0 -18 Q2 -24 0 -30" fill="none" stroke={INK} strokeWidth="0.35" opacity="0.5" />
      <path d="M1 -8 Q3 -14 2 -20" fill="none" stroke={INK} strokeWidth="0.25" opacity="0.4" />
    </g>
  ),
  lanterns: (
    <g>
      {[-12, 12].map((x) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <circle cx="0" cy="11" r="8" fill="url(#csGlow)" />
          <line x1="0" y1="0" x2="0" y2="6" stroke={INK} strokeWidth="0.4" />
          <ellipse cx="0" cy="11" rx="3.5" ry="5" fill={RED} fillOpacity="0.25" stroke={INK} strokeWidth="0.5" />
          <line x1="-1.5" y1="16.5" x2="-1.5" y2="19" stroke={RED} strokeWidth="0.4" opacity="0.6" />
          <line x1="0" y1="16.5" x2="0" y2="20" stroke={RED} strokeWidth="0.4" opacity="0.6" />
          <line x1="1.5" y1="16.5" x2="1.5" y2="19" stroke={RED} strokeWidth="0.4" opacity="0.6" />
        </g>
      ))}
    </g>
  ),
  handLantern: (
    <g>
      <line x1="0" y1="0" x2="6" y2="-9" stroke={INK} strokeWidth="0.5" />
      <circle cx="7" cy="-5" r="5" fill="url(#csGlow)" />
      <line x1="6" y1="-9" x2="7" y2="-8" stroke={INK} strokeWidth="0.4" />
      <ellipse cx="7" cy="-5" rx="2.5" ry="3.2" fill={RED} fillOpacity="0.3" stroke={INK} strokeWidth="0.45" />
    </g>
  ),
  firework: (
    <g>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <g key={a}>
            <line x1={Math.cos(r) * 3} y1={Math.sin(r) * 3} x2={Math.cos(r) * 11} y2={Math.sin(r) * 11} stroke={RED} strokeWidth="0.4" opacity="0.5" />
            <circle cx={Math.cos(r) * 13} cy={Math.sin(r) * 13} r="0.7" fill={RED} opacity="0.4" />
          </g>
        );
      })}
      <circle cx="0" cy="0" r="1.4" fill={RED} opacity="0.45" />
    </g>
  ),
  antiques: (
    <g>
      <path d="M-2 0 Q-4 -3 -3 -6 Q-4.5 -9 -2 -10 L2 -10 Q4.5 -9 3 -6 Q4 -3 2 0 Z" fill="none" stroke={INK} strokeWidth="0.6" />
      <rect x="6" y="-7" width="8" height="7" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="6" y1="-3.5" x2="14" y2="-3.5" stroke={INK} strokeWidth="0.25" />
      <circle cx="-8" cy="-3" r="3" fill="none" stroke={INK} strokeWidth="0.5" />
      <circle cx="-8" cy="-3" r="1.2" fill="none" stroke={INK} strokeWidth="0.3" />
    </g>
  ),

  /* ---- architecture ---- */
  house: (
    <g>
      <path d="M-28 -23 Q0 -35 28 -23 Q0 -29.5 -28 -23 Z" fill={INK} opacity="0.3" />
      <path d="M-28 -23 Q0 -35 28 -23" fill="none" stroke={INK} strokeWidth="1.2" />
      <path d="M-28 -23 Q-31 -25 -33 -28" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M28 -23 Q31 -25 33 -28" fill="none" stroke={INK} strokeWidth="0.9" />
      <line x1="-22" y1="-23" x2="-22" y2="0" stroke={INK} strokeWidth="0.85" />
      <line x1="22" y1="-23" x2="22" y2="0" stroke={INK} strokeWidth="0.85" />
      <line x1="-24" y1="0" x2="24" y2="0" stroke={INK} strokeWidth="0.7" />
      <rect x="-6" y="-16" width="12" height="16" fill="none" stroke={INK} strokeWidth="0.6" />
      <line x1="0" y1="-16" x2="0" y2="0" stroke={INK} strokeWidth="0.35" />
      <rect x="-18" y="-16" width="8" height="9" fill="none" stroke={INK} strokeWidth="0.45" />
      <line x1="-14" y1="-16" x2="-14" y2="-7" stroke={INK} strokeWidth="0.25" />
      <rect x="10" y="-16" width="8" height="9" fill="none" stroke={INK} strokeWidth="0.45" />
      <line x1="14" y1="-16" x2="14" y2="-7" stroke={INK} strokeWidth="0.25" />
    </g>
  ),
  mansion: (
    <g>
      <path d="M-26 -30 Q0 -40 26 -30 Q0 -35.5 -26 -30 Z" fill={INK} opacity="0.35" />
      <path d="M-26 -30 Q0 -40 26 -30" fill="none" stroke={INK} strokeWidth="1.2" />
      <path d="M-26 -30 Q-29 -32 -31 -35" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M26 -30 Q29 -32 31 -35" fill="none" stroke={INK} strokeWidth="0.9" />
      <line x1="-22" y1="-30" x2="-22" y2="0" stroke={INK} strokeWidth="0.9" />
      <line x1="22" y1="-30" x2="22" y2="0" stroke={INK} strokeWidth="0.9" />
      <rect x="-8" y="-22" width="16" height="22" fill={INK} opacity="0.07" />
      <rect x="-8" y="-22" width="16" height="22" fill="none" stroke={INK} strokeWidth="0.8" />
      <line x1="0" y1="-22" x2="0" y2="0" stroke={INK} strokeWidth="0.5" />
      <circle cx="-3.5" cy="-12" r="0.8" fill={INK} />
      <circle cx="3.5" cy="-12" r="0.8" fill={INK} />
      <line x1="-22" y1="-14" x2="-8" y2="-14" stroke={INK} strokeWidth="0.35" />
      <line x1="8" y1="-14" x2="22" y2="-14" stroke={INK} strokeWidth="0.35" />
      <line x1="-22" y1="-7" x2="-8" y2="-7" stroke={INK} strokeWidth="0.35" />
      <line x1="8" y1="-7" x2="22" y2="-7" stroke={INK} strokeWidth="0.35" />
    </g>
  ),
  temple: (
    <g>
      <path d="M-24 -30 Q0 -41 24 -30 Q0 -36 -24 -30 Z" fill={INK} opacity="0.35" />
      <path d="M-24 -30 Q0 -41 24 -30" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M-24 -30 Q-28 -33 -30 -37" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M24 -30 Q28 -33 30 -37" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M-13 -38 Q0 -45 13 -38" fill="none" stroke={INK} strokeWidth="0.8" />
      <circle cx="0" cy="-44" r="1.3" fill={INK} />
      <line x1="-19" y1="-30" x2="-19" y2="0" stroke={INK} strokeWidth="0.85" />
      <line x1="19" y1="-30" x2="19" y2="0" stroke={INK} strokeWidth="0.85" />
      <rect x="-6" y="-19" width="12" height="19" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="0" y1="-19" x2="0" y2="0" stroke={INK} strokeWidth="0.4" />
      <line x1="-21" y1="0" x2="21" y2="0" stroke={INK} strokeWidth="0.7" />
    </g>
  ),
  cityGate: (
    <g>
      <rect x="-34" y="-22" width="68" height="22" fill={INK} opacity="0.12" />
      <rect x="-34" y="-22" width="68" height="22" fill="none" stroke={INK} strokeWidth="0.9" />
      {[-31, -23, -15, 11, 19, 27].map((x) => (
        <rect key={x} x={x} y="-25" width="5" height="3" fill="none" stroke={INK} strokeWidth="0.45" />
      ))}
      <path d="M-8 0 Q-8 -14 0 -14 Q8 -14 8 0" fill="#f4ecd8" fillOpacity="0.7" stroke={INK} strokeWidth="0.8" />
      <path d="M-15 -25 Q0 -33 15 -25" fill="none" stroke={INK} strokeWidth="1" />
      <path d="M-15 -25 Q-18 -27 -20 -30" fill="none" stroke={INK} strokeWidth="0.7" />
      <path d="M15 -25 Q18 -27 20 -30" fill="none" stroke={INK} strokeWidth="0.7" />
    </g>
  ),
  pavilion: (
    <g>
      <path d="M-18 -22 L0 -33 L18 -22 L14 -22 L0 -30 L-14 -22 Z" fill={INK} opacity="0.4" />
      <path d="M-18 -22 L0 -33 L18 -22" fill="none" stroke={INK} strokeWidth="1.3" />
      <path d="M-18 -22 Q-21 -24 -23 -26" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M18 -22 Q21 -24 23 -26" fill="none" stroke={INK} strokeWidth="0.9" />
      <circle cx="0" cy="-33.5" r="1.2" fill={INK} />
      <line x1="-12" y1="-22" x2="-12" y2="0" stroke={INK} strokeWidth="0.9" />
      <line x1="12" y1="-22" x2="12" y2="0" stroke={INK} strokeWidth="0.9" />
      <line x1="-12" y1="-9" x2="12" y2="-9" stroke={INK} strokeWidth="0.5" />
      <line x1="-15" y1="0" x2="15" y2="0" stroke={INK} strokeWidth="0.7" />
    </g>
  ),
  stage: (
    <g>
      <path d="M-26 -14 L26 -14 L30 -8 L-30 -8 Z" fill={INK} opacity="0.1" />
      <path d="M-26 -14 L26 -14 L30 -8 L-30 -8 Z" fill="none" stroke={INK} strokeWidth="0.9" />
      <line x1="-26" y1="-14" x2="-26" y2="-8" stroke={INK} strokeWidth="0.5" />
      <line x1="26" y1="-14" x2="26" y2="-8" stroke={INK} strokeWidth="0.5" />
      <line x1="-22" y1="-14" x2="-22" y2="-36" stroke={INK} strokeWidth="0.7" />
      <line x1="22" y1="-14" x2="22" y2="-36" stroke={INK} strokeWidth="0.7" />
      <path d="M-24 -36 Q0 -39 24 -36" fill="none" stroke={INK} strokeWidth="0.8" />
      <path d="M-22 -35 Q-19 -31 -16 -34 Q-13 -31 -10 -34" fill="none" stroke={INK} strokeWidth="0.35" />
      <path d="M10 -34 Q13 -31 16 -34 Q19 -31 22 -35" fill="none" stroke={INK} strokeWidth="0.35" />
    </g>
  ),
  bridge: (
    <g>
      <path d="M-20 0 Q0 -15 20 0 L16 0 Q0 -11.5 -16 0 Z" fill={INK} opacity="0.22" />
      <path d="M-20 0 Q0 -15 20 0" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M-14 -5 Q0 -13.5 14 -5" fill="none" stroke={INK} strokeWidth="0.45" />
      <line x1="-8" y1="-9.5" x2="-8" y2="-6.5" stroke={INK} strokeWidth="0.35" />
      <line x1="0" y1="-11.3" x2="0" y2="-8" stroke={INK} strokeWidth="0.35" />
      <line x1="8" y1="-9.5" x2="8" y2="-6.5" stroke={INK} strokeWidth="0.35" />
    </g>
  ),
  tomb: (
    <g>
      <path d="M-11 0 Q0 -9 11 0" fill="none" stroke={INK} strokeWidth="0.6" />
      <path d="M-3 0 L-3 -13 Q0 -16 3 -13 L3 0" fill="none" stroke={INK} strokeWidth="0.8" />
      <line x1="0" y1="-13" x2="0" y2="-3" stroke={INK} strokeWidth="0.25" />
      <path d="M-8 1 Q-7 -2 -6 1" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M7 1 Q8 -2 9 1" fill="none" stroke={INK} strokeWidth="0.3" />
    </g>
  ),

  /* ---- vehicles ---- */
  cart: (
    <g>
      <circle cx="6" cy="-6" r="6" fill="none" stroke={INK} strokeWidth="0.9" />
      <line x1="6" y1="-11" x2="6" y2="-1" stroke={INK} strokeWidth="0.35" />
      <line x1="1" y1="-6" x2="11" y2="-6" stroke={INK} strokeWidth="0.35" />
      <path d="M-2 -24 Q8 -28 18 -24 L18 -12 L-2 -12 Z" fill="none" stroke={INK} strokeWidth="0.8" />
      <rect x="3" y="-21" width="7" height="5" fill="none" stroke={INK} strokeWidth="0.4" />
      <line x1="-2" y1="-13" x2="-26" y2="-10" stroke={INK} strokeWidth="0.7" />
      <ellipse cx="-34" cy="-13" rx="9" ry="5" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M-40 -16 Q-44 -23 -43 -27" fill="none" stroke={INK} strokeWidth="0.8" />
      <ellipse cx="-44" cy="-28" rx="3" ry="2" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="-38" y1="-9" x2="-39" y2="0" stroke={INK} strokeWidth="0.6" />
      <line x1="-33" y1="-8.5" x2="-33" y2="0" stroke={INK} strokeWidth="0.6" />
      <line x1="-28" y1="-9" x2="-27" y2="0" stroke={INK} strokeWidth="0.6" />
      <path d="M-25 -14 Q-21 -11 -22 -7" fill="none" stroke={INK} strokeWidth="0.5" />
    </g>
  ),
  sedan: (
    <g>
      <path d="M-11 -26 Q0 -31 11 -26" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M-11 -26 Q-13 -27.5 -15 -29" fill="none" stroke={INK} strokeWidth="0.7" />
      <path d="M11 -26 Q13 -27.5 15 -29" fill="none" stroke={INK} strokeWidth="0.7" />
      <rect x="-8" y="-26" width="16" height="18" fill={INK} opacity="0.08" />
      <rect x="-8" y="-26" width="16" height="18" fill="none" stroke={INK} strokeWidth="0.8" />
      <rect x="-4" y="-22" width="8" height="8" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="-24" y1="-11" x2="24" y2="-11" stroke={INK} strokeWidth="0.8" />
    </g>
  ),
  boat: (
    <g>
      <path d="M-26 -6 L-20 -4 Q0 -1 20 -4 L26 -6 Q22 3 0 4 Q-22 3 -26 -6 Z" fill={INK} opacity="0.15" />
      <path d="M-26 -6 Q-22 3 0 4 Q22 3 26 -6" fill="none" stroke={INK} strokeWidth="0.9" />
      <path d="M-20 -4 Q0 -1 20 -4" fill="none" stroke={INK} strokeWidth="0.6" />
      <path d="M-12 -4 Q-12 -15 0 -15 Q12 -15 12 -4" fill="none" stroke={INK} strokeWidth="0.7" />
      <line x1="-8" y1="-4" x2="-8" y2="-13.2" stroke={INK} strokeWidth="0.35" />
      <line x1="8" y1="-4" x2="8" y2="-13.2" stroke={INK} strokeWidth="0.35" />
      <line x1="18" y1="-5" x2="18" y2="-22" stroke={INK} strokeWidth="0.5" />
      <path d="M18 -22 L25 -19.5 L18 -17 Z" fill={INK} opacity="0.3" />
    </g>
  ),

  /* ---- flora ---- */
  willow: (
    <g>
      <ellipse cx="0" cy="-30" rx="14" ry="10" fill={INK} opacity="0.07" />
      <path d="M0 0 Q-2 -18 1 -30 Q2 -36 0 -40" fill="none" stroke={INK} strokeWidth="1.1" />
      <path d="M0 -38 Q-10 -34 -14 -26" fill="none" stroke={INK} strokeWidth="0.5" />
      <path d="M-12 -28 Q-14 -18 -12 -8" fill="none" stroke={INK} strokeWidth="0.4" />
      <path d="M-4 -34 Q-6 -20 -5 -10" fill="none" stroke={INK} strokeWidth="0.4" />
      <path d="M4 -34 Q7 -22 6 -10" fill="none" stroke={INK} strokeWidth="0.4" />
      <path d="M10 -32 Q13 -20 11 -10" fill="none" stroke={INK} strokeWidth="0.4" />
    </g>
  ),
  plum: (
    <g>
      <path d="M0 0 Q20 8 45 10 Q60 11 75 8" fill="none" stroke={INK} strokeWidth="1" />
      <path d="M30 9 Q36 2 44 0" fill="none" stroke={INK} strokeWidth="0.6" />
      {[[25, 8], [40, 10], [55, 9.5], [44, 0], [70, 8]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3.5" fill="url(#csPlum)" />
          <circle cx={x} cy={y} r="2.5" fill="none" stroke={INK} strokeWidth="0.55" />
          <circle cx={x} cy={y} r="0.9" fill={INK} />
        </g>
      ))}
    </g>
  ),
  bamboo: (
    <g>
      <line x1="0" y1="0" x2="0" y2="-44" stroke={INK} strokeWidth="1.1" />
      <line x1="-1.5" y1="-12" x2="1.5" y2="-12" stroke={INK} strokeWidth="1.4" />
      <line x1="-1.5" y1="-24" x2="1.5" y2="-24" stroke={INK} strokeWidth="1.4" />
      <line x1="-1.5" y1="-36" x2="1.5" y2="-36" stroke={INK} strokeWidth="1.4" />
      <line x1="6" y1="0" x2="6" y2="-38" stroke={INK} strokeWidth="0.8" />
      <line x1="4.8" y1="-15" x2="7.2" y2="-15" stroke={INK} strokeWidth="1.1" />
      <line x1="4.8" y1="-29" x2="7.2" y2="-29" stroke={INK} strokeWidth="1.1" />
      <path d="M0 -44 Q-8 -50 -16 -48 Q-8 -46.5 0 -42.5 Z" fill={INK} opacity="0.75" />
      <path d="M0 -44 Q7 -51 15 -50 Q7 -46.5 0 -42.5 Z" fill={INK} opacity="0.6" />
      <path d="M6 -38 Q14 -43 21 -41 Q13 -40 6 -36.5 Z" fill={INK} opacity="0.5" />
      <path d="M0 -24 Q-7 -29 -14 -27 Q-7 -26 0 -22.5 Z" fill={INK} opacity="0.4" />
    </g>
  ),
  rock: (
    <g>
      <path d="M-12 2 Q-16 -8 -8 -14 Q-4 -20 4 -16 Q12 -18 12 -8 Q14 0 6 4 Q-4 6 -12 2 Z" fill={INK} opacity="0.08" />
      <path d="M-12 2 Q-16 -8 -8 -14 Q-4 -20 4 -16 Q12 -18 12 -8 Q14 0 6 4 Q-4 6 -12 2 Z" fill="none" stroke={INK} strokeWidth="1" />
      <ellipse cx="-3" cy="-8" rx="2" ry="2.5" fill="none" stroke={INK} strokeWidth="0.5" />
      <ellipse cx="5" cy="-4" rx="1.5" ry="1.8" fill="none" stroke={INK} strokeWidth="0.4" />
      <path d="M-8 -4 Q-5 -6 -4 -2" fill="none" stroke={INK} strokeWidth="0.35" />
    </g>
  ),
  peony: (
    <g>
      <path d="M0 0 Q-1 -10 -2 -18" fill="none" stroke={INK} strokeWidth="0.6" />
      <circle cx="-2" cy="-22" r="6" fill="url(#csPlum)" />
      <circle cx="-2" cy="-22" r="5" fill="none" stroke={INK} strokeWidth="0.6" />
      <circle cx="-2" cy="-22" r="2.5" fill="none" stroke={INK} strokeWidth="0.4" />
      <circle cx="-2" cy="-22" r="0.9" fill={INK} />
      <path d="M4 0 Q6 -8 8 -13" fill="none" stroke={INK} strokeWidth="0.5" />
      <circle cx="9" cy="-16" r="4.5" fill="url(#csPlum)" />
      <circle cx="9" cy="-16" r="3.5" fill="none" stroke={INK} strokeWidth="0.5" />
      <circle cx="9" cy="-16" r="1.4" fill="none" stroke={INK} strokeWidth="0.3" />
      <path d="M-6 -8 Q-9 -10 -10 -7" fill="none" stroke={INK} strokeWidth="0.35" />
      <path d="M3 -6 Q6 -9 8 -6" fill="none" stroke={INK} strokeWidth="0.35" />
    </g>
  ),
  lotus: (
    <g>
      <ellipse cx="-6" cy="0" rx="7" ry="2.5" fill="none" stroke={INK} strokeWidth="0.5" />
      <line x1="-6" y1="-2.5" x2="-6" y2="2.5" stroke={INK} strokeWidth="0.25" />
      <line x1="6" y1="0" x2="6" y2="-9" stroke={INK} strokeWidth="0.45" />
      <path d="M4 -9 Q6 -14.5 8 -9 Q6 -7.5 4 -9 Z" fill="url(#csPlum)" />
      <path d="M4 -9 Q6 -14.5 8 -9" fill="none" stroke={INK} strokeWidth="0.5" />
      <ellipse cx="14" cy="2" rx="5" ry="1.8" fill="none" stroke={INK} strokeWidth="0.4" />
    </g>
  ),
};

/* ---- Scene table -------------------------------------------------------- */
/* [element, x, y, scale?] on a 280x150 canvas; ground sits near y=118-130.  */

type El = [keyof typeof PRIMS | string, number, number, number?];
type Scene = { seal: string; wash?: El[]; els: El[] };

const OUTDOOR_WASH: El[] = [['hills', 140, 110]];

const SCENES: Record<number, Scene> = {
  // 京师演戏之盛：歌台舞榭
  1: { seal: '京', els: [['ground', 140, 122], ['cityGate', 62, 120, 0.9], ['stage', 195, 120, 0.9], ['lanterns', 195, 68, 0.8], ['figStand', 188, 104, 0.55], ['figWalk', 140, 122, 0.8], ['birds', 120, 42]] },
  // 子玉在车里回家，门口一车三马
  2: { seal: '车', els: [['ground', 140, 122], ['mansion', 215, 120, 0.95], ['cart', 95, 122], ['figStand', 162, 122, 0.8], ['birds', 60, 40]] },
  // 聘才账房吃火锅
  3: { seal: '炉', wash: [], els: [['ground', 140, 124], ['window', 50, 80, 0.9], ['tableRound', 150, 122, 0.9], ['incense', 150, 106, 0.55], ['figSit', 118, 122, 0.9], ['figSit', 182, 122, 0.9], ['figWalk', 235, 122, 0.8]] },
  // 腊雪纷飞，一夜盈尺
  4: { seal: '雪', els: [['ground', 140, 122], ['snow', 140, 62], ['house', 205, 120, 0.95], ['plum', 15, 28], ['figStand', 95, 122, 0.85], ['figStand', 122, 122, 0.8]] },
  // 怡园：公子班头徐子云
  5: { seal: '园', els: [['ground', 140, 124], ['pavilion', 68, 118], ['rock', 148, 124, 0.85], ['peony', 185, 124, 0.8], ['willow', 240, 122], ['water', 140, 136], ['birds', 180, 40]] },
  // 元旦庆贺，知单帖子
  6: { seal: '贺', els: [['ground', 140, 122], ['snow', 140, 55], ['mansion', 72, 120], ['lanterns', 72, 66, 0.7], ['figBow', 152, 122, 0.9], ['figStand', 185, 122, 0.85]] },
  // 子玉思琴官，品评色艺
  7: { seal: '思', wash: [], els: [['ground', 140, 124], ['desk', 140, 118], ['figSit', 140, 122, 0.85], ['candle', 175, 110, 0.8], ['moon', 235, 35], ['plum', 12, 26, 0.9]] },
  // 二更回家，静悄悄掩了房门
  8: { seal: '夜', els: [['ground', 140, 122], ['moon', 225, 34], ['house', 80, 120, 0.95], ['figWalk', 172, 122, 0.85], ['handLantern', 185, 105, 0.9]] },
  // 三更敲门，敲了半天
  9: { seal: '叩', els: [['ground', 140, 122], ['moon', 235, 32, 0.9], ['mansion', 92, 120], ['figStand', 148, 122, 0.85], ['handLantern', 160, 106, 0.85], ['figWalk', 190, 122, 0.8]] },
  // 夜色已深，一径回宅
  10: { seal: '归', els: [['ground', 140, 122], ['moon', 55, 32], ['cart', 150, 122], ['willow', 245, 122], ['birds', 105, 48]] },
  // 相府宽大，夫妇夜谈
  11: { seal: '宅', wash: [], els: [['ground', 140, 124], ['mansion', 68, 120, 1.05], ['tableRound', 185, 122, 0.75], ['figSit', 158, 122, 0.9], ['figSit', 212, 122, 0.9], ['candle', 185, 106, 0.8]] },
  // 袁夫人卸妆说令
  12: { seal: '令', wash: [], els: [['ground', 140, 124], ['screen', 220, 118], ['tableRound', 120, 122, 0.8], ['figSit', 92, 122, 0.9], ['figSit', 148, 122, 0.9], ['candle', 178, 108, 0.85]] },
  // 春航困顿，寄食高品处
  13: { seal: '寒', els: [['ground', 140, 122], ['rain', 140, 55], ['house', 85, 120, 0.9], ['tableRound', 185, 122, 0.65], ['figSit', 165, 122, 0.85], ['figSit', 208, 122, 0.85]] },
  // 蕙芳为春航更衣抚琴
  14: { seal: '琴', wash: [], els: [['ground', 140, 124], ['qin', 145, 118], ['figStand', 105, 122, 0.9], ['figStand', 185, 122, 0.9], ['incense', 235, 114, 0.75], ['plum', 12, 24, 0.85]] },
  // 南湘与仲清、王恂茶叙
  15: { seal: '茶', wash: [], els: [['ground', 140, 124], ['tableRound', 140, 122, 0.9], ['figSit', 105, 122, 0.9], ['figSit', 140, 118, 0.85], ['figSit', 175, 122, 0.9], ['bamboo', 245, 120, 0.9]] },
  // 子玉读书，明窗净几
  16: { seal: '书', wash: [], els: [['ground', 140, 124], ['desk', 145, 118], ['figSit', 145, 122, 0.85], ['window', 225, 82, 0.95], ['bamboo', 40, 120, 0.95]] },
  // 一轮月上，倚阑而望
  17: { seal: '月', els: [['ground', 140, 122], ['moon', 220, 35], ['pavilion', 90, 118, 0.95], ['figStand', 118, 122, 0.9], ['peony', 170, 122, 0.75], ['birds', 40, 45]] },
  // 琴言病体恹恹，闭门谢客
  18: { seal: '病', wash: [], els: [['ground', 140, 124], ['bed', 110, 120], ['incense', 185, 112, 0.8], ['candle', 215, 110, 0.75], ['screen', 250, 116, 0.7]] },
  // 聘才学曲，珊枝教戏
  19: { seal: '曲', wash: [], els: [['ground', 140, 124], ['stage', 195, 120, 0.85], ['lanterns', 195, 70, 0.7], ['figStand', 95, 122, 0.9], ['figStand', 128, 122, 0.85], ['qin', 60, 118, 0.8]] },
  // 假查夜，潘三溜了
  20: { seal: '遁', els: [['ground', 140, 122], ['moon', 50, 32, 0.9], ['mansion', 90, 120, 0.9], ['figWalk', 185, 122, 0.95], ['handLantern', 140, 104, 0.9]] },
  // 聘才华府得志，朝欢暮乐
  21: { seal: '欢', wash: [], els: [['ground', 140, 124], ['mansion', 60, 120], ['lanterns', 180, 62, 0.85], ['tableRound', 185, 122, 0.85], ['figSit', 155, 122, 0.9], ['figSit', 215, 122, 0.9], ['figStand', 120, 122, 0.85]] },
  // 雇船逛运河
  22: { seal: '舟', els: [['ground', 140, 128], ['water', 140, 126], ['boat', 140, 118, 1.1], ['figSit', 128, 112, 0.6], ['figStand', 158, 110, 0.6], ['willow', 38, 122], ['bridge', 235, 126, 0.8]] },
  // 元茂换票子，信步街市
  23: { seal: '市', els: [['ground', 140, 122], ['house', 70, 120, 0.9], ['house', 135, 120, 0.8], ['figWalk', 200, 122, 0.9], ['figWalk', 232, 122, 0.6], ['birds', 190, 42]] },
  // 仲清、王恂闲谈新闻
  24: { seal: '谈', wash: [], els: [['ground', 140, 124], ['tableRound', 145, 122, 0.85], ['figSit', 112, 122, 0.9], ['figSit', 178, 122, 0.9], ['window', 240, 82, 0.9], ['bamboo', 40, 120, 0.9]] },
  // 文泽星夜赶回，庆贺盈门
  25: { seal: '迎', els: [['ground', 140, 122], ['cityGate', 65, 120, 0.9], ['cart', 155, 122, 0.95], ['figBow', 215, 122, 0.85], ['figStand', 245, 122, 0.85]] },
  // 华公子上灯回府，十婢侍立
  26: { seal: '灯', wash: [], els: [['ground', 140, 124], ['lanterns', 80, 62, 0.95], ['screen', 235, 118, 0.9], ['figSit', 165, 122, 0.95], ['figStand', 95, 122, 0.62], ['figStand', 112, 122, 0.6], ['figStand', 129, 122, 0.62], ['candle', 200, 108, 0.8]] },
  // 聘才夜归，暗自盘算
  27: { seal: '计', els: [['ground', 140, 122], ['moon', 225, 32], ['mansion', 62, 120, 0.85], ['figWalk', 150, 122, 0.9], ['birds', 185, 48]] },
  // 长庆负荆请罪
  28: { seal: '荆', wash: [], els: [['ground', 140, 124], ['figBow', 118, 122, 0.95], ['figBow', 145, 122, 0.85], ['figSit', 205, 122, 0.95], ['screen', 250, 116, 0.75], ['window', 45, 82, 0.85]] },
  // 琴言探病，子玉卧床
  29: { seal: '慰', wash: [], els: [['ground', 140, 124], ['bed', 115, 120], ['figSit', 178, 122, 0.85], ['incense', 215, 112, 0.8], ['candle', 240, 110, 0.7]] },
  // 水晶山畔，对凤仙花垂泪
  30: { seal: '泪', els: [['ground', 140, 124], ['rock', 95, 124], ['peony', 140, 124, 0.9], ['figSit', 120, 124, 0.9], ['water', 205, 130, 0.7], ['willow', 250, 122, 0.9]] },
  // 华公子把酒敬客，合席满饮
  31: { seal: '宴', wash: [], els: [['ground', 140, 124], ['tableRound', 145, 122, 1.05], ['figSit', 105, 122, 0.9], ['figSit', 145, 117, 0.85], ['figSit', 185, 122, 0.9], ['figStand', 68, 122, 0.9], ['lanterns', 230, 64, 0.8]] },
  // 秋雨连绵，场中候榜
  32: { seal: '榜', els: [['ground', 140, 122], ['rain', 140, 50], ['house', 190, 120, 0.95], ['desk', 95, 118, 0.85], ['figSit', 95, 122, 0.85], ['figSit', 130, 122, 0.85], ['candle', 62, 110, 0.8]] },
  // 腊月送行
  33: { seal: '别', els: [['ground', 140, 122], ['snow', 140, 55], ['cart', 120, 122], ['figStand', 200, 122, 0.85], ['figBow', 228, 122, 0.8], ['willow', 255, 122, 0.85]] },
  // 唐和尚处访友
  34: { seal: '访', els: [['ground', 140, 122], ['temple', 88, 120], ['incense', 130, 116, 0.7], ['figStand', 170, 122, 0.85], ['figWalk', 205, 122, 0.85]] },
  // 月明如昼，菜园失窃
  35: { seal: '惊', els: [['ground', 140, 122], ['moon', 235, 30], ['mansion', 65, 120, 0.85], ['figWalk', 130, 122, 0.85], ['handLantern', 145, 105, 0.9], ['figStand', 175, 122, 0.8], ['rock', 215, 122, 0.6]] },
  // 元宵演戏，神情寂寞
  36: { seal: '寂', wash: [], els: [['ground', 140, 124], ['stage', 155, 118, 0.95], ['figStand', 152, 102, 0.6], ['lanterns', 155, 62, 0.85], ['figSit', 55, 122, 0.9]] },
  // 琴言扎挣上车，往怡园来
  37: { seal: '往', els: [['ground', 140, 122], ['sun', 42, 32, 0.85], ['cart', 175, 122], ['figStand', 105, 122, 0.9], ['willow', 250, 122, 0.9]] },
  // 梅崦宴屈公
  38: { seal: '集', els: [['ground', 140, 122], ['pavilion', 115, 118, 1.05], ['plum', 175, 30, 0.95], ['tableRound', 195, 122, 0.7], ['figSit', 172, 122, 0.8], ['figSit', 218, 122, 0.8], ['figStand', 60, 122, 0.85]] },
  // 元茂招赘吉期
  39: { seal: '喜', els: [['ground', 140, 122], ['sedan', 150, 122], ['lanterns', 60, 60, 0.9], ['figStand', 105, 122, 0.85], ['figWalk', 200, 122, 0.85], ['birds', 220, 40]] },
  // 奚十一逢人便说
  40: { seal: '言', els: [['ground', 140, 122], ['house', 60, 120, 0.85], ['figStand', 125, 122, 0.9], ['figStand', 150, 122, 0.9], ['figWalk', 225, 122, 0.85]] },
  // 假满不归，华公子思念
  41: { seal: '念', els: [['ground', 140, 122], ['mansion', 78, 120, 0.95], ['figStand', 160, 122, 0.95], ['moon', 235, 32, 0.9], ['peony', 205, 122, 0.7]] },
  // 师娘讲定月钱
  42: { seal: '银', wash: [], els: [['ground', 140, 124], ['tableRound', 150, 122, 0.8], ['figSit', 120, 122, 0.9], ['figSit', 182, 122, 0.9], ['window', 55, 82, 0.9], ['candle', 220, 110, 0.75]] },
  // 烦闷不寐，候到二更
  43: { seal: '眠', wash: [], els: [['ground', 140, 124], ['bed', 118, 120], ['candle', 190, 110, 0.8], ['moon', 240, 34, 0.8], ['window', 245, 78, 0.75]] },
  // 姚贤一早出城叫琴言
  44: { seal: '召', els: [['ground', 140, 122], ['cityGate', 80, 120, 0.95], ['figWalk', 165, 122, 0.9], ['willow', 245, 122, 0.9], ['birds', 205, 45]] },
  // 怡园开导：今日牡丹台
  45: { seal: '圃', els: [['ground', 140, 124], ['pavilion', 48, 118, 0.85], ['peony', 105, 124, 0.95], ['rock', 150, 124, 0.85], ['figWalk', 200, 124, 0.9], ['figStand', 228, 124, 0.85]] },
  // 道翁教琴仙读书
  46: { seal: '学', wash: [], els: [['ground', 140, 124], ['desk', 140, 118], ['figSit', 140, 122, 0.85], ['figStand', 185, 122, 0.95], ['bamboo', 42, 120], ['window', 250, 82, 0.8]] },
  // 道翁书屏，季矮子刻字
  47: { seal: '屏', wash: [], els: [['ground', 140, 124], ['screen', 140, 118, 1.2], ['figStand', 78, 122, 0.9], ['figStand', 205, 122, 0.9], ['desk', 245, 118, 0.7]] },
  // 轮流饯行
  48: { seal: '饯', els: [['ground', 140, 122], ['tableRound', 135, 122, 0.9], ['figStand', 90, 122, 0.9], ['figSit', 135, 118, 0.8], ['figSit', 170, 122, 0.85], ['willow', 240, 122]] },
  // 旧病复发，足足一月
  49: { seal: '恙', wash: [], els: [['ground', 140, 124], ['bed', 112, 120], ['incense', 180, 112, 0.8], ['moon', 230, 32, 0.75], ['willow', 255, 122, 0.8]] },
  // 日长炎夏，火伞如焚
  50: { seal: '夏', els: [['ground', 140, 126], ['sun', 48, 32], ['water', 150, 130, 0.9], ['lotus', 150, 126, 0.95], ['house', 230, 122, 0.9], ['figSit', 95, 126, 0.85]] },
  // 聘才出京
  51: { seal: '行', els: [['ground', 140, 122], ['cityGate', 205, 120, 0.95], ['cart', 100, 122], ['willow', 35, 122, 0.9], ['birds', 65, 42]] },
  // 高品到园，保荐宏词
  52: { seal: '试', wash: [], els: [['ground', 140, 124], ['desk', 115, 118, 0.9], ['figSit', 115, 122, 0.85], ['figStand', 178, 122, 0.9], ['figBow', 208, 122, 0.85], ['bamboo', 42, 120]] },
  // 商议开古董铺
  53: { seal: '古', wash: [], els: [['ground', 140, 124], ['tableRound', 140, 122, 0.9], ['antiques', 140, 108, 1.1], ['figSit', 105, 122, 0.9], ['figSit', 175, 122, 0.9], ['figStand', 220, 122, 0.85]] },
  // 得和词悲楚，郁闷不解
  54: { seal: '梦', wash: [], els: [['ground', 140, 124], ['desk', 150, 118, 0.9], ['figSit', 150, 122, 0.85], ['candle', 190, 110, 0.7], ['moon', 235, 32, 0.8], ['willow', 45, 122, 0.9]] },
  // 渡黄河，舟行扬州
  55: { seal: '渡', els: [['ground', 140, 130], ['water', 140, 126], ['boat', 150, 118, 1.2], ['figSit', 140, 111, 0.6], ['birds', 60, 40], ['birds', 200, 32]] },
  // 莫愁湖，杜仙女墓
  56: { seal: '湖', els: [['ground', 140, 126], ['water', 155, 128, 0.9], ['lotus', 185, 126, 0.9], ['tomb', 88, 122, 0.95], ['figStand', 120, 124, 0.85], ['willow', 240, 122]] },
  // 小春天气，怡园又热闹
  57: { seal: '春', els: [['ground', 140, 124], ['pavilion', 68, 118, 0.95], ['peony', 128, 124, 0.85], ['birds', 175, 38], ['figWalk', 190, 124, 0.85], ['figStand', 220, 124, 0.85], ['sun', 245, 30, 0.7]] },
  // 群花齐放，百鸟争鸣
  58: { seal: '咏', els: [['ground', 140, 124], ['peony', 88, 124, 0.95], ['birds', 130, 35], ['birds', 175, 45], ['figStand', 150, 124, 0.9], ['figStand', 180, 124, 0.85], ['figStand', 210, 124, 0.9], ['rock', 250, 124, 0.7]] },
  // 护国寺守灵百日
  59: { seal: '灵', wash: [], els: [['ground', 140, 124], ['temple', 100, 120, 1.05], ['incense', 165, 116, 0.9], ['figBow', 152, 124, 0.9], ['candle', 195, 112, 0.8], ['candle', 215, 112, 0.7], ['moon', 245, 30, 0.7]] },
  // 元宵灯会，火树银花
  60: { seal: '宵', els: [['ground', 140, 122], ['firework', 75, 35], ['firework', 135, 25, 0.8], ['lanterns', 205, 60, 0.95], ['house', 55, 120, 0.85], ['figStand', 145, 122, 0.9], ['figStand', 175, 122, 0.85], ['figWalk', 230, 122, 0.9]] },
};

export const ChapterScene: React.FC<{ chapterId: number }> = ({ chapterId }) => {
  const scene = SCENES[chapterId];
  if (!scene) return null;

  const washEls = scene.wash ?? OUTDOOR_WASH;

  return (
    <div className="parchment p-3 rounded-sm border-double border-4 border-[#d4c5a9] flex flex-col items-center mb-10">
      <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxHeight: '150px' }}>
        <defs>
          <linearGradient id="csWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={INK} stopOpacity="0.02" />
            <stop offset="100%" stopColor={INK} stopOpacity="0.09" />
          </linearGradient>
          <radialGradient id="csHalo" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor={INK} stopOpacity="0" />
            <stop offset="100%" stopColor={INK} stopOpacity="0.07" />
          </radialGradient>
          <radialGradient id="csGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={RED} stopOpacity="0.3" />
            <stop offset="100%" stopColor={RED} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="csPlum" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4494e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#b4494e" stopOpacity="0.08" />
          </radialGradient>
          <filter id="csBrush" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="csBleed" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="4" result="noise" />
            <feDisplacementMap in="blur" in2="noise" scale="7" />
          </filter>
        </defs>
        <rect x="3" y="3" width="274" height="144" fill="none" stroke={INK} strokeWidth="0.5" rx="1" />
        <rect x="6" y="6" width="268" height="138" fill="url(#csWash)" stroke={INK} strokeWidth="1.2" rx="2" />
        {washEls.length > 0 && (
          <g filter="url(#csBleed)">
            {washEls.map(([el, x, y, s], i) => (
              <g key={i} transform={`translate(${x} ${y})${s && s !== 1 ? ` scale(${s})` : ''}`}>
                {PRIMS[el]}
              </g>
            ))}
          </g>
        )}
        <g filter="url(#csBrush)">
          {scene.els.map(([el, x, y, s], i) => (
            <g key={i} transform={`translate(${x} ${y})${s && s !== 1 ? ` scale(${s})` : ''}`}>
              {PRIMS[el]}
            </g>
          ))}
        </g>
        <rect x="248" y="118" width="14" height="14" fill="none" stroke={RED} strokeWidth="1" rx="0.5" />
        <text x="255" y="129" textAnchor="middle" fill={RED} fontSize="7" fontFamily="serif" fontWeight="bold">
          {scene.seal}
        </text>
      </svg>
    </div>
  );
};
