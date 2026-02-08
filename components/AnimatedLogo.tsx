
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative group cursor-pointer select-none w-full h-full">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#39847a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#255e56', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer Circle with Dash */}
        <circle 
          cx="100" cy="100" r="95" 
          fill="none" 
          stroke="#39847a" 
          strokeWidth="2" 
          strokeDasharray="10 6" 
          className="animate-[spin_30s_linear_infinite] opacity-40" 
        />

        {/* Main Badge */}
        <circle cx="100" cy="100" r="88" fill="url(#logoGrad)" />
        
        {/* Subtle Inner Ring */}
        <circle cx="100" cy="100" r="82" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />

        {/* Icon: Modern Technical Flow */}
        <g transform="translate(45, 75) scale(0.7)" fill="white">
          <path d="M10 20h110v45H10z" opacity="0.95" />
          <path d="M120 20h30l15 30v15h-45z" />
          <circle cx="45" cy="80" r="14" fill="#255e56" stroke="white" strokeWidth="4" />
          <circle cx="130" cy="80" r="14" fill="#255e56" stroke="white" strokeWidth="4" />
        </g>

        {/* Brand Text */}
        <text 
          x="100" y="88" 
          fill="white" 
          fontSize="40" 
          fontWeight="900" 
          fontFamily="Arial Black, sans-serif" 
          textAnchor="middle" 
          className="tracking-tighter"
        >
          ADP
        </text>

        {/* Quality Banner */}
        <rect x="40" y="145" width="120" height="28" rx="14" fill="white" />
        <text 
          x="100" y="164" 
          fill="#39847a" 
          fontSize="14" 
          fontWeight="900" 
          fontFamily="Arial, sans-serif" 
          textAnchor="middle"
        >
          24 HORAS
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
