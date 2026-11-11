import React from 'react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onPartnerClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onPartnerClick }) => {
  return (
    <footer className="bg-[#1E3A2B] text-[#FDFBF7] pt-16 pb-12 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" variant="light" />

            <p className="text-sm text-[#FDFBF7]/80 leading-relaxed max-w-sm pt-2">
              NEUVY Eco-Care is the medical hygiene ecosystem tailored for dermatology, aesthetic, and laser clinics. Establishing clinical authority, communicating patient safety, and empowering women’s health across MENA & Africa.
            </p>

            <div className="text-xs text-[#E8B4B8] pt-1">
              Clinical safety · Absolute trust · Female health protection
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A059] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-[#FDFBF7]/75">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/system')}
                  className="hover:text-white transition-colors"
                >
                  The System Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/standards')}
                  className="hover:text-white transition-colors"
                >
                  Clinical Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/impact')}
                  className="hover:text-white transition-colors"
                >
                  MENA & Africa Impact
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Hubs Column */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A059] mb-4">
              Regional Hubs
            </div>
            <ul className="space-y-2 text-xs text-[#FDFBF7]/75">
              <li>Dubai · United Arab Emirates</li>
              <li>Cairo · Egypt</li>
              <li>Riyadh · Saudi Arabia</li>
              <li>Casablanca · Morocco</li>
              <li>Nairobi · Kenya</li>
              <li>Amman · Jordan</li>
            </ul>
          </div>

          {/* Partnership Column */}
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A059] mb-4">
              Clinic Action
            </div>
            <p className="text-xs text-[#FDFBF7]/75 mb-4 leading-relaxed">
              Adopt the NEUVY hygiene workflow and obtain verified clinic certification.
            </p>
            <button
              onClick={onPartnerClick}
              className="w-full py-2.5 px-4 text-xs font-medium text-[#1E3A2B] bg-[#FFF2F4] hover:bg-[#E8B4B8] rounded-lg transition-colors font-sans"
            >
              Partner With Us
            </button>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFBF7]/60">
          <div>
            © {new Date().getFullYear()} NEUVY Eco-Care. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Women’s Health & Safety Standard</span>
            <span aria-hidden="true">·</span>
            <span>Clinical Confidentiality Charter</span>
            <span aria-hidden="true">·</span>
            <span>Outpatient Hygiene Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
