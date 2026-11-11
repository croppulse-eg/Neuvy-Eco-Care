import React, { useState } from 'react';
import heroAestheticSuite from '../assets/images/hero_aesthetic_suite_1794411799684.jpg';
import clinicalCareTrust from '../assets/images/clinical_care_trust_1794411802200.jpg';
import womenHealthEmpowerment from '../assets/images/women_health_empowerment_1794411802571.jpg';

interface HomePageProps {
  onExploreSystem: () => void;
  onGetInTouch: () => void;
  onOpenAuditModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onExploreSystem,
  onGetInTouch,
  onOpenAuditModal,
}) => {
  // Interactive Clinic Hygiene Assessment State
  const [dailyPatients, setDailyPatients] = useState(35);
  const [treatmentBeds, setTreatmentBeds] = useState(4);
  const [activeTab, setActiveTab] = useState<'comparison' | 'calculator'>('comparison');

  return (
    <div className="w-full">
      {/* ----------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER (PRD Page 1 Section 1)              */}
      {/* ----------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1E3A2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E3A2B]">
                <span className="text-[#C5A059]">✦</span>
                <span>Female-Centric Medical Hygiene</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2C3E35]/70">MENA & Africa</span>
              </div>

              {/* Exact PRD Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1E3A2B] leading-[1.08] text-balance"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Redefining Medical Safety & Trust in Aesthetic Clinics
              </h1>

              {/* Exact PRD Subheadline */}
              <p className="text-base sm:text-lg text-[#2C3E35]/85 leading-relaxed font-normal max-w-xl">
                NEUVY Eco-Care delivers uncompromising hygiene solutions designed to protect women and guarantee absolute safety during clinical and aesthetic procedures.
              </p>

              {/* CTAs per PRD */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Primary Button: "Explore Our System" -> links to /system (Forest Green bg with Gold/Rose hover) */}
                <button
                  onClick={onExploreSystem}
                  className="px-7 py-3.5 text-sm font-medium text-white bg-[#1E3A2B] hover:bg-[#2A523D] hover:shadow-lg hover:shadow-[#C5A059]/20 hover:border-[#C5A059] border border-transparent rounded-lg transition-all duration-200 text-center whitespace-nowrap cursor-pointer active:scale-98 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                >
                  Explore Our System →
                </button>

                {/* Secondary Button: "Get in Touch" -> scrolls to Contact Form */}
                <button
                  onClick={onGetInTouch}
                  className="px-6 py-3.5 text-sm font-medium text-[#1E3A2B] bg-[#FFF2F4] hover:bg-[#E8B4B8]/30 border border-[#E8B4B8] rounded-lg transition-colors text-center whitespace-nowrap cursor-pointer active:scale-98 focus:outline-hidden focus:ring-2 focus:ring-[#1E3A2B]"
                >
                  Get in Touch
                </button>
              </div>

              {/* Clean Unboxed Regional Trust Strip */}
              <div className="pt-6 border-t border-[#1E3A2B]/10 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#2C3E35]/70">
                <span className="font-medium text-[#1E3A2B]">Accredited Clinics in:</span>
                <span>Dubai</span>
                <span aria-hidden="true">·</span>
                <span>Cairo</span>
                <span aria-hidden="true">·</span>
                <span>Riyadh</span>
                <span aria-hidden="true">·</span>
                <span>Casablanca</span>
                <span aria-hidden="true">·</span>
                <span>Nairobi</span>
              </div>
            </div>

            {/* Right Column: Visual Asset (PRD: High-resolution clinical aesthetic suite featuring soft rose and warm gold ambient lighting) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8B4B8]/40 bg-[#FFF2F4]/60 group">
                <img
                  src={heroAestheticSuite}
                  alt="High-resolution clinical aesthetic suite featuring soft rose and warm gold ambient lighting, combining clinical perfection with feminine elegance"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle scrim & soft rose gold accent badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/70 via-transparent to-black/10 pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E8B4B8]/60 shadow-lg flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-[#1E3A2B]">
                      Verified Aesthetic Hygiene Suite
                    </span>
                    <span className="text-xs text-[#2C3E35]/75">
                      Dermatology, Laser & Cosmetic Clinical Protocols
                    </span>
                  </div>
                  <span className="text-xs font-serif italic text-[#C5A059] shrink-0 font-medium">
                    Zero Harsh Residue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 2: THE HEALTHCARE CHALLENGE (PRD Page 1 Section 2) */}
      {/* ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#FFF2F4]/50 border-b border-[#1E3A2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              <span>Clinical Reality</span>
              <span aria-hidden="true">/</span>
              <span>Patient Safety Imperative</span>
            </div>

            {/* Exact PRD Header */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E3A2B]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Invisible Risks in Modern Aesthetics
            </h2>

            {/* Exact PRD Body Text */}
            <p className="text-base sm:text-lg text-[#2C3E35]/85 leading-relaxed">
              Millions of women visit aesthetic and laser clinics annually trusting their care providers. However, traditional surface sanitization often leaves behind invisible, resistant viral risks. We bridge this critical gap between high-end care and verified patient safety.
            </p>
          </div>

          {/* Interactive Comparison & Bridge Diagnostic */}
          <div className="max-w-5xl mx-auto">
            {/* Filter/View switcher tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-[#FDFBF7] rounded-xl border border-[#E8B4B8]/50 shadow-2xs">
                <button
                  onClick={() => setActiveTab('comparison')}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'comparison'
                      ? 'bg-[#1E3A2B] text-white shadow-xs'
                      : 'text-[#2C3E35] hover:text-[#1E3A2B]'
                  }`}
                >
                  The Hygiene Gap vs. The NEUVY Standard
                </button>
                <button
                  onClick={() => setActiveTab('calculator')}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'calculator'
                      ? 'bg-[#1E3A2B] text-white shadow-xs'
                      : 'text-[#2C3E35] hover:text-[#1E3A2B]'
                  }`}
                >
                  Interactive Clinic Exposure Estimator
                </button>
              </div>
            </div>

            {activeTab === 'comparison' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Traditional Method Box */}
                <div className="p-7 sm:p-8 rounded-2xl bg-white border border-rose-200/80 shadow-xs relative">
                  <div className="text-xs uppercase tracking-widest font-semibold text-rose-800 mb-2">
                    Traditional Surface Cleaning
                  </div>
                  <h3
                    className="text-2xl font-serif text-[#2C3E35] mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    The Overlooked Vulnerabilities
                  </h3>
                  <p className="text-sm text-[#2C3E35]/75 leading-relaxed mb-6">
                    Aesthetic outpatient spaces experience rapid room turnover. Standard wipes and generic surface sprays leave microscopic blind spots and lingering odors.
                  </p>

                  <div className="space-y-3.5 text-sm text-[#2C3E35]/85">
                    <div className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>Inconsistent contact dwell times during packed clinic schedules</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>Harsh chemical odors that trigger patient discomfort or skin reactions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>No auditable proof of safety for patients receiving laser or peel treatments</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>Wear and surface clouding on high-value aesthetic laser treatment beds</span>
                    </div>
                  </div>
                </div>

                {/* The NEUVY Standard Box */}
                <div className="p-7 sm:p-8 rounded-2xl bg-[#FFF2F4] border border-[#1E3A2B] shadow-sm relative">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#1E3A2B] mb-2 flex items-center justify-between">
                    <span>The NEUVY Eco-Care Standard</span>
                    <span className="text-[#C5A059] font-normal text-xs font-serif">Verified Safe</span>
                  </div>
                  <h3
                    className="text-2xl font-serif text-[#1E3A2B] mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Closed-Loop Clinical Safety
                  </h3>
                  <p className="text-sm text-[#2C3E35]/75 leading-relaxed mb-6">
                    Designed explicitly for high-end aesthetic medicine, delivering non-disruptive, clinical-grade protection that patients can visibly trust.
                  </p>

                  <div className="space-y-3.5 text-sm text-[#1E3A2B]">
                    <div className="flex items-start gap-3">
                      <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                      <span>Active protection against cross-contamination between patient sessions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                      <span>Zero harsh chemical residue; gentle for post-laser and sensitized skin</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                      <span>Visible hygiene reassurance that builds patient loyalty and reputation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                      <span>Fast room readiness preserving high clinical operational efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Interactive Clinic Exposure Estimator */
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E8B4B8]/60 shadow-md">
                <div className="max-w-xl mx-auto text-center mb-8">
                  <h3
                    className="text-2xl sm:text-3xl font-medium text-[#1E3A2B]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Clinical Exposure & Hygiene Impact Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C3E35]/70 mt-1">
                    Calculate monthly high-touch clinical contacts across your dermatology or laser treatment rooms.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center text-sm font-medium text-[#1E3A2B] mb-2">
                        <span>Daily Patients per Clinic:</span>
                        <span className="font-mono text-base font-bold text-[#1E3A2B]">{dailyPatients}</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="120"
                        value={dailyPatients}
                        onChange={(e) => setDailyPatients(Number(e.target.value))}
                        className="w-full accent-[#1E3A2B] h-2 bg-neutral-200 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#2C3E35]/60 mt-1 font-mono">
                        <span>10 (Boutique)</span>
                        <span>60 (Multi-Room)</span>
                        <span>120 (Hub Center)</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-sm font-medium text-[#1E3A2B] mb-2">
                        <span>Active Treatment Beds / Suites:</span>
                        <span className="font-mono text-base font-bold text-[#1E3A2B]">{treatmentBeds} Suites</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={treatmentBeds}
                        onChange={(e) => setTreatmentBeds(Number(e.target.value))}
                        className="w-full accent-[#1E3A2B] h-2 bg-neutral-200 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#2C3E35]/60 mt-1 font-mono">
                        <span>1 Suite</span>
                        <span>6 Suites</span>
                        <span>12 Suites</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFF2F4] p-6 rounded-xl border border-[#E8B4B8] space-y-4">
                    <div className="text-xs uppercase tracking-wider text-[#1E3A2B] font-semibold">
                      Monthly Safety Benchmark
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold font-mono text-[#1E3A2B]">
                          {(dailyPatients * 26).toLocaleString()}
                        </div>
                        <div className="text-xs text-[#2C3E35]/70 mt-1">
                          Monthly Patient Sessions Protected
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold font-mono text-[#C5A059]">
                          {(dailyPatients * treatmentBeds * 8).toLocaleString()}
                        </div>
                        <div className="text-xs text-[#2C3E35]/70 mt-1">
                          Critical Touchpoints Sanitized
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E8B4B8]/60 text-xs text-[#1E3A2B]">
                      <strong>Clinical Advantage:</strong> With NEUVY Eco-Care, 100% of these sessions achieve verified microbial peace of mind with zero harsh chemical residue.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 3: CORE VALUE PILLARS (PRD Page 1 Section 3)        */}
      {/* ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A2B]">
              <span>Core Value Pillars</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E3A2B]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              The Three Pillars of Clinical Hygiene
            </h2>
            <p className="text-sm sm:text-base text-[#2C3E35]/75">
              Engineered to elevate safety protocols for women’s wellness, aesthetic laser treatments, and dermatological care.
            </p>
          </div>

          {/* Cards designed with subtle Soft Blush Pink backgrounds (#FFF2F4) and Forest Green borders/typography per PRD */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Uncompromising Patient Safety */}
            <div className="bg-[#FFF2F4] border border-[#1E3A2B] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B4B8] flex items-center justify-center text-[#1E3A2B] mb-6 shadow-2xs">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                  Pillar 01
                </div>

                {/* PRD Exact Title */}
                <h3
                  className="text-2xl font-serif font-semibold text-[#1E3A2B] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Uncompromising Patient Safety
                </h3>

                {/* PRD Exact Description */}
                <p className="text-sm text-[#2C3E35] leading-relaxed mb-6 font-normal">
                  Active protection against cross-contamination during specialized clinical procedures.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E3A2B]/15 text-xs text-[#1E3A2B]/85 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>Safeguards sensitized, post-laser skin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>Protects high-touch treatment suites</span>
                </div>
              </div>
            </div>

            {/* Card 2: Guaranteed Clinical Trust */}
            <div className="bg-[#FFF2F4] border border-[#1E3A2B] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B4B8] flex items-center justify-center text-[#1E3A2B] mb-6 shadow-2xs">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                  Pillar 02
                </div>

                {/* PRD Exact Title */}
                <h3
                  className="text-2xl font-serif font-semibold text-[#1E3A2B] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Guaranteed Clinical Trust
                </h3>

                {/* PRD Exact Description */}
                <p className="text-sm text-[#2C3E35] leading-relaxed mb-6 font-normal">
                  Transforming invisible hygiene into a verifiable asset for forward-thinking clinics.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E3A2B]/15 text-xs text-[#1E3A2B]/85 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>Official clinic verification badge</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>Transparent peace of mind for every visitor</span>
                </div>
              </div>
            </div>

            {/* Card 3: Sustainable Medical Hygiene */}
            <div className="bg-[#FFF2F4] border border-[#1E3A2B] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8B4B8] flex items-center justify-center text-[#1E3A2B] mb-6 shadow-2xs">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                  Pillar 03
                </div>

                {/* PRD Exact Title */}
                <h3
                  className="text-2xl font-serif font-semibold text-[#1E3A2B] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Sustainable Medical Hygiene
                </h3>

                {/* PRD Exact Description */}
                <p className="text-sm text-[#2C3E35] leading-relaxed mb-6 font-normal">
                  Formulated for high-frequency clinical use with zero harsh chemical residue.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E3A2B]/15 text-xs text-[#1E3A2B]/85 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>Safe for recurrent daily clinical turnover</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>Clean ambient air quality in treatment suites</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 4: SOCIAL & WOMEN'S HEALTH IMPACT (PRD Page 1 Sec 4)*/}
      {/* ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#FFF2F4]/70 border-t border-b border-[#1E3A2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Assets with Dual Framing */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8B4B8]/50">
                <img
                  src={womenHealthEmpowerment}
                  alt="Dignified woman in an elegant modern medical aesthetic clinic reception lounge, feeling secure and valued"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#E8B4B8] font-semibold block">
                    Women-Centric Clinical Respect
                  </span>
                  <span className="text-sm font-serif italic text-[#FDFBF7]">
                    "When healthcare environments prioritize invisible hygiene, women experience profound clinical peace of mind."
                  </span>
                </div>
              </div>

              {/* Secondary Clinical Consultation Image */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-[#E8B4B8]/50 shadow-xs">
                  <img
                    src={clinicalCareTrust}
                    alt="Female dermatologist consulting with patient"
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#FDFBF7] p-5 rounded-xl border border-[#E8B4B8]/50 flex flex-col justify-center">
                  <div className="text-2xl font-serif font-bold text-[#1E3A2B]">100%</div>
                  <div className="text-xs text-[#2C3E35]/70 mt-1">
                    Dedication to outpatient safety standards across MENA & Africa
                  </div>
                  <div className="mt-3 text-[11px] text-[#C5A059] font-medium">
                    Egypt · UAE · Saudi · Kenya · Morocco
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: PRD Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A2B]">
                <span className="text-[#C5A059]">✦</span>
                <span>Social & Women's Health Impact</span>
              </div>

              {/* Exact PRD Header */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E3A2B] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Empowering Women Through Safe Healthcare
              </h2>

              {/* Exact PRD Content */}
              <p className="text-base sm:text-lg text-[#2C3E35]/85 leading-relaxed">
                Dedicated to raising clinical safety standards across regional healthcare hubs, ensuring every woman feels protected, valued, and completely safe during every treatment.
              </p>

              <div className="space-y-4 pt-4 text-sm text-[#2C3E35]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1E3A2B] block">Preventive Healthcare Culture</strong>
                    <span className="text-[#2C3E35]/75 text-xs">
                      Shifting outpatient clinics from reactive disinfection to guaranteed, continuous microbial barrier protocols.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1E3A2B] block">Protection for Female Doctors & Aesthetic Practitioners</strong>
                    <span className="text-[#2C3E35]/75 text-xs">
                      Providing healthcare workers with a safe, non-toxic, non-irritating clinical working atmosphere during all shifts.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center text-xs mt-0.5 shrink-0">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#1E3A2B] block">Regional Health Equity Across MENA & Africa</strong>
                    <span className="text-[#2C3E35]/75 text-xs">
                      Equipping metropolitan aesthetic hubs and emerging regional medical day-surgeries with equal, gold-standard hygiene.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreSystem}
                  className="px-6 py-3 text-sm font-medium text-white bg-[#1E3A2B] hover:bg-[#2A523D] rounded-lg transition-colors"
                >
                  Discover The System Workflow
                </button>
                <button
                  onClick={onGetInTouch}
                  className="px-6 py-3 text-sm font-medium text-[#1E3A2B] bg-white hover:bg-neutral-50 border border-[#E8B4B8] rounded-lg transition-colors"
                >
                  Join Regional Safety Movement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
