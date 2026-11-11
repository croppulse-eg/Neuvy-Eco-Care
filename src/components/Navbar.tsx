import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onPartnerClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onPartnerClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'The System', path: '/system' },
    { label: 'Clinical Standards', path: '/standards' },
    { label: 'MENA & Africa Impact', path: '/impact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#E8B4B8]/30 py-3.5'
          : 'bg-[#FDFBF7] border-b border-[#1E3A2B]/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Emblem & Wordmark (Left-aligned) */}
        <button
          onClick={() => onNavigate('/')}
          className="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm text-left transition-opacity hover:opacity-90"
          aria-label="NEUVY Eco-Care Home"
        >
          <BrandLogo size="md" variant="forest" />
        </button>

        {/* Zone 2: Single-line navigation links with subtle hover underlines */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#2C3E35]">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#1E3A2B] focus:outline-hidden ${
                  isActive
                    ? 'text-[#1E3A2B] font-semibold'
                    : 'text-[#2C3E35]/80 hover:text-[#1E3A2B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Styled in Soft Rose Gold / Green, anchor scroll to contact footer) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onPartnerClick}
            className="px-5 py-2.5 text-xs sm:text-sm font-medium text-[#1E3A2B] bg-[#FFF2F4] hover:bg-[#E8B4B8]/40 border border-[#E8B4B8] hover:border-[#1E3A2B] rounded-lg shadow-2xs transition-all duration-200 whitespace-nowrap shrink-0 active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A2B]"
          >
            Partner With Us
          </button>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C3E35] hover:text-[#1E3A2B] focus:outline-hidden rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8B4B8]/40 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 text-sm font-medium transition-colors ${
                  currentPath === item.path
                    ? 'text-[#1E3A2B] font-semibold border-l-2 border-[#C5A059] pl-3'
                    : 'text-[#2C3E35]/80 hover:text-[#1E3A2B] pl-3'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onPartnerClick();
                setMobileMenuOpen(false);
              }}
              className="mt-3 w-full py-2.5 text-center text-sm font-medium text-[#1E3A2B] bg-[#FFF2F4] border border-[#E8B4B8] rounded-lg"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
