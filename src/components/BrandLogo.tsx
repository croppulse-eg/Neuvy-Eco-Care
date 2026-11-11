import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'forest';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'forest',
}) => {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;

  const textColor =
    variant === 'light'
      ? 'text-[#FDFBF7]'
      : variant === 'forest'
      ? 'text-[#1E3A2B]'
      : 'text-[#2C3E35]';

  const subColor =
    variant === 'light' ? 'text-[#E8B4B8]' : 'text-[#C5A059]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official NEUVY Eco-Care Emblem (Green globe, leaf accent, golden orbit element) */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="NEUVY Eco-Care Official Emblem"
      >
        <defs>
          <linearGradient id="globeGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A523D" />
            <stop offset="1" stopColor="#152B20" />
          </linearGradient>
          <linearGradient id="goldOrbit" x1="10" y1="30" x2="90" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5C778" />
            <stop offset="0.5" stopColor="#C5A059" />
            <stop offset="1" stopColor="#A6833E" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="30" y1="65" x2="70" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9E8E8" />
            <stop offset="0.6" stopColor="#E8B4B8" />
            <stop offset="1" stopColor="#D99AA0" />
          </linearGradient>
        </defs>

        {/* Outer subtle halo */}
        <circle cx="50" cy="50" r="46" stroke="#C5A059" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />

        {/* Green Globe Body */}
        <circle cx="50" cy="50" r="34" fill="url(#globeGrad)" stroke="#1E3A2B" strokeWidth="1.5" />

        {/* Globe Latitude & Longitude Curvature Lines */}
        <ellipse cx="50" cy="50" rx="34" ry="12" stroke="#487259" strokeWidth="0.8" strokeOpacity="0.5" />
        <ellipse cx="50" cy="50" rx="16" ry="34" stroke="#487259" strokeWidth="0.8" strokeOpacity="0.5" />

        {/* Golden Orbit Element encircling globe */}
        <ellipse
          cx="50"
          cy="50"
          rx="44"
          ry="15"
          fill="none"
          stroke="url(#goldOrbit)"
          strokeWidth="3.2"
          transform="rotate(-28 50 50)"
          strokeLinecap="round"
        />

        {/* Orbit front shine node */}
        <circle cx="82" cy="34" r="3.2" fill="#FDFBF7" stroke="#C5A059" strokeWidth="1.5" />

        {/* Emerald & Rose Leaf Accent */}
        <path
          d="M36 62 C40 44, 58 38, 66 34 C60 52, 46 60, 36 62 Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M44 55 C48 45, 58 40, 62 36"
          stroke="#1E3A2B"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-semibold tracking-[0.16em] uppercase text-sm md:text-base ${textColor}`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          NEUVY
        </span>
        <span
          className={`text-[11px] md:text-xs font-serif tracking-widest font-normal ${subColor}`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Eco-Care
        </span>
      </div>
    </div>
  );
};
