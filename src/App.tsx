/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { SystemPage } from './components/SystemPage';
import { RegionalHubs } from './components/RegionalHubs';
import { ClinicalStandards } from './components/ClinicalStandards';
import { PartnerForm } from './components/PartnerForm';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');

  // Synchronize browser history / URL path
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/system' || path === '/standards' || path === '/impact') {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPartner = () => {
    const el = document.getElementById('partner-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C3E35]">
      {/* Sticky Header compliant with Top Bar Contract & PRD */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onPartnerClick={scrollToPartner}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPath === '/' && (
          <>
            <HomePage
              onExploreSystem={() => navigateTo('/system')}
              onGetInTouch={scrollToPartner}
            />
            {/* Embedded Regional Presence on Home Page for MENA & Africa context */}
            <RegionalHubs onPartnerClick={scrollToPartner} />
            <ClinicalStandards onPartnerClick={scrollToPartner} />
          </>
        )}

        {currentPath === '/system' && (
          <>
            <SystemPage
              onPartnerClick={scrollToPartner}
              onHomeClick={() => navigateTo('/')}
            />
            <ClinicalStandards onPartnerClick={scrollToPartner} />
          </>
        )}

        {currentPath === '/standards' && (
          <div className="pt-6">
            <ClinicalStandards onPartnerClick={scrollToPartner} />
            <RegionalHubs onPartnerClick={scrollToPartner} />
          </div>
        )}

        {currentPath === '/impact' && (
          <div className="pt-6">
            <RegionalHubs onPartnerClick={scrollToPartner} />
            <ClinicalStandards onPartnerClick={scrollToPartner} />
          </div>
        )}

        {/* PRD Page 2 Section 4: Call-to-Action Footer Banner */}
        <PartnerForm id="partner-section" />
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} onPartnerClick={scrollToPartner} />
    </div>
  );
}
