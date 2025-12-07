import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 group transition-transform duration-500 hover:scale-105">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Outer Segmented Ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#b91c1c" strokeWidth="5" strokeDasharray="60 15" className="animate-[spin_10s_linear_infinite]" />
        
        {/* Main Red Circle Background */}
        <circle cx="100" cy="100" r="85" fill="#b91c1c" />
        
        {/* Inner White Ring */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />

        {/* Text: DESENTUPIDORA (Curved Top) */}
        <path id="curveTop" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
        <text fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle" alignmentBaseline="middle">
            DESENTUPIDORA
          </textPath>
        </text>

        {/* Center: Truck Icon */}
        <g transform="translate(50, 65) scale(0.6)">
          {/* Truck Body */}
          <path d="M10 40 L120 40 L120 90 L10 90 Z" fill="white" /> 
          {/* Truck Cabin */}
          <path d="M120 40 L150 40 L160 60 L160 90 L120 90 Z" fill="white" />
          {/* Window */}
          <path d="M125 45 L145 45 L150 60 L125 60 Z" fill="#b91c1c" />
          {/* Wheels */}
          <circle cx="40" cy="90" r="15" fill="white" stroke="#b91c1c" strokeWidth="5" />
          <circle cx="130" cy="90" r="15" fill="white" stroke="#b91c1c" strokeWidth="5" />
          {/* Tanker/Hose Detail */}
          <rect x="20" y="25" width="90" height="15" rx="5" fill="white" />
        </g>

        {/* Text: ADP (Center Big) */}
        <text x="100" y="85" fill="#b91c1c" fontSize="32" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle" stroke="white" strokeWidth="1">
          ADP
        </text>
        <text x="100" y="102" fill="#b91c1c" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" textAnchor="middle" className="uppercase">
          Encanadores
        </text>

        {/* Text: Phone (Bottom) */}
        <text x="100" y="160" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif" textAnchor="middle">
          (41) 3345-1194
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;