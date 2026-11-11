import React, { useState } from 'react';
import verifiedTreatmentRoom from '../assets/images/verified_treatment_room_1794411802041.jpg';
import clinicalCareTrust from '../assets/images/clinical_care_trust_1794411802200.jpg';

interface SystemPageProps {
  onPartnerClick: () => void;
  onHomeClick: () => void;
}

export const SystemPage: React.FC<SystemPageProps> = ({
  onPartnerClick,
  onHomeClick,
}) => {
  // Step 1, 2, 3 Interactive Process State
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeProtocolTab, setActiveProtocolTab] = useState<'laser' | 'derma' | 'aesthetic'>('laser');

  const steps = [
    {
      step: 1,
      title: 'Seamless Clinic Integration',
      description:
        'Blends into daily clinic protocols before and after patient sessions without slowing down operations.',
      details: [
        'Rapid turn-around workflow calibrated to high-volume aesthetic appointments',
        'Standardized clinical checklist for nurses and treatment technicians',
        'Non-abrasive formulation protecting luxury medical upholstery & laser surfaces',
        'Eliminates downtime between laser, peel, and dermatological procedures',
      ],
      timeframe: 'Under 90 Seconds',
      focusArea: 'Staff Operations & Turnaround',
    },
    {
      step: 2,
      title: 'Verified Surface Protection',
      description:
        'Ensures treatment beds, equipment, and shared contact areas achieve rapid, thorough microbial safety.',
      details: [
        'Complete barrier coverage against viral and bacterial surface risks',
        'Formulated specifically for aesthetic procedure beds, handpieces, and trays',
        'Zero toxic fumes or harsh chemical residue left behind on contact zones',
        'Guaranteed biocompatibility for patients receiving micro-needling and peels',
      ],
      timeframe: 'Immediate Barrier Formation',
      focusArea: 'Microbial Safety & High-Touch Zones',
    },
    {
      step: 3,
      title: 'Patient Peace of Mind',
      description:
        'Provides visible proof of safety, building long-term trust between patients and practitioners.',
      details: [
        'Physical and digital Verified Safe Clinic seals for reception & suites',
        'Visible assurance card presented to female patients prior to procedure start',
        'Empowers women to demand gold-standard hygiene wherever they seek care',
        'Demonstrates elite institutional commitment to patient well-being',
      ],
      timeframe: 'Continuous Trust Assurance',
      focusArea: 'Patient Relationship & Clinical Authority',
    },
  ];

  return (
    <div className="w-full">
      {/* ----------------------------------------------------------- */}
      {/* SECTION 1: PAGE HERO (PRD Page 2 Section 1)                 */}
      {/* ----------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#1E3A2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A2B]">
                <span className="text-[#C5A059]">✦</span>
                <span>The System & Product Overview</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2C3E35]/70">Dermatology & Aesthetic Focus</span>
              </div>

              {/* Exact PRD Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1E3A2B] leading-[1.08]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                The NEUVY Eco-Care Ecosystem
              </h1>

              {/* Exact PRD Subheadline */}
              <p className="text-base sm:text-lg text-[#2C3E35]/85 leading-relaxed font-normal max-w-xl">
                An integrated, closed-loop hygiene workflow built specifically for modern dermatology, laser, and aesthetic centers.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onPartnerClick}
                  className="px-7 py-3.5 text-sm font-medium text-white bg-[#1E3A2B] hover:bg-[#2A523D] hover:shadow-lg hover:border-[#C5A059] border border-transparent rounded-lg transition-all duration-200 text-center whitespace-nowrap cursor-pointer active:scale-98 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                >
                  Adopt the NEUVY Ecosystem →
                </button>
                <button
                  onClick={onHomeClick}
                  className="px-6 py-3.5 text-sm font-medium text-[#1E3A2B] bg-[#FFF2F4] hover:bg-[#E8B4B8]/30 border border-[#E8B4B8] rounded-lg transition-colors text-center whitespace-nowrap cursor-pointer active:scale-98"
                >
                  Back to Mission
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[#2C3E35]/75">
                <div className="flex items-center gap-2">
                  <span className="text-[#1E3A2B] font-bold">✓</span>
                  <span>Non-disruptive timing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#1E3A2B] font-bold">✓</span>
                  <span>Zero harsh residue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#1E3A2B] font-bold">✓</span>
                  <span>Auditable patient trust</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Suite */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8B4B8]/40 bg-[#FFF2F4]/60">
                <img
                  src={verifiedTreatmentRoom}
                  alt="Pristine luxury aesthetic clinic laser treatment room, immaculate sanitized treatment bed with fresh soft linens, warm brass lighting accents"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FDFBF7]/95 backdrop-blur-md border border-[#E8B4B8]/60 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-[#1E3A2B]">
                      Closed-Loop Hygiene Protocol
                    </span>
                    <span className="text-xs text-[#2C3E35]/75">
                      Tailored for Laser, Peels, & Medical Dermatology
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#C5A059] bg-[#FFF2F4] px-2.5 py-1 rounded-md border border-[#E8B4B8]">
                    Verified Clean
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 2: CLINICAL WORKFLOW (3-STEP INTERACTIVE PROCESS)  */}
      {/* PRD Page 2 Section 2                                        */}
      {/* ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#FFF2F4]/40 border-b border-[#1E3A2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              <span>Clinical Workflow</span>
              <span aria-hidden="true">/</span>
              <span>3-Step Interactive Process</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E3A2B]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              The 3-Step Clinical Protocol
            </h2>
            <p className="text-base text-[#2C3E35]/80 leading-relaxed">
              Engineered to operate seamlessly during rapid patient handoffs in high-end aesthetic, laser, and dermatological clinics.
            </p>
          </div>

          {/* Interactive Step Switcher (Segmented Control per Frontend Guidelines) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {steps.map((s) => {
              const isSelected = activeStep === s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-6 rounded-2xl text-left transition-all duration-200 border cursor-pointer focus:outline-hidden ${
                    isSelected
                      ? 'bg-[#1E3A2B] text-white border-[#1E3A2B] shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-[#FFF2F4]/80 text-[#2C3E35] border-[#E8B4B8]/60 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-[#C5A059] text-[#1E3A2B]'
                          : 'bg-[#FFF2F4] text-[#1E3A2B] border border-[#E8B4B8]'
                      }`}
                    >
                      STEP 0{s.step}
                    </span>
                    <span
                      className={`text-xs ${
                        isSelected ? 'text-[#E8B4B8]' : 'text-[#2C3E35]/60'
                      }`}
                    >
                      {s.timeframe}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-serif font-semibold mb-2 ${
                      isSelected ? 'text-[#FDFBF7]' : 'text-[#1E3A2B]'
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-[#FDFBF7]/85' : 'text-[#2C3E35]/75'
                    }`}
                  >
                    {s.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Box */}
          {(() => {
            const current = steps.find((s) => s.step === activeStep) || steps[0];
            return (
              <div className="bg-white rounded-2xl border border-[#E8B4B8]/80 shadow-lg p-8 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                      <span>Active Protocol Focus</span>
                      <span aria-hidden="true">·</span>
                      <span>{current.focusArea}</span>
                    </div>

                    <h4
                      className="text-2xl sm:text-3xl font-medium text-[#1E3A2B]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {current.title}
                    </h4>

                    <p className="text-base text-[#2C3E35]/85 leading-relaxed font-normal">
                      {current.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      {current.details.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-[#2C3E35]">
                          <span className="text-[#1E3A2B] font-bold mt-0.5">✦</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={onPartnerClick}
                        className="px-5 py-2.5 text-xs font-medium text-white bg-[#1E3A2B] hover:bg-[#2A523D] rounded-lg transition-colors"
                      >
                        Request Integration Guide
                      </button>
                      <button
                        onClick={() => setActiveStep((prev) => (prev % 3) + 1)}
                        className="px-4 py-2.5 text-xs font-medium text-[#1E3A2B] bg-[#FFF2F4] hover:bg-[#E8B4B8]/30 border border-[#E8B4B8] rounded-lg transition-colors"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#FFF2F4] rounded-xl p-6 border border-[#E8B4B8] space-y-4">
                    <div className="text-xs uppercase tracking-wider text-[#1E3A2B] font-semibold border-b border-[#E8B4B8] pb-2">
                      Clinical Operational Parameters
                    </div>

                    <div className="space-y-3 text-xs text-[#2C3E35]">
                      <div className="flex justify-between py-1 border-b border-[#1E3A2B]/10">
                        <span className="text-[#2C3E35]/70">Dwell & Contact Speed:</span>
                        <strong className="text-[#1E3A2B]">Immediate & Ultra-Fast</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1E3A2B]/10">
                        <span className="text-[#2C3E35]/70">Surface Compatibility:</span>
                        <strong className="text-[#1E3A2B]">Laser lenses, leather, acrylics</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1E3A2B]/10">
                        <span className="text-[#2C3E35]/70">Odor Profile:</span>
                        <strong className="text-[#1E3A2B]">Zero harsh airborne fragrance</strong>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1E3A2B]/10">
                        <span className="text-[#2C3E35]/70">Patient Reassurance Mark:</span>
                        <strong className="text-[#C5A059]">Verified Eco-Care Seal</strong>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-white rounded-lg border border-[#E8B4B8]/60 text-[11px] text-[#1E3A2B]">
                      <strong>Notice:</strong> High-frequency procedures such as laser hair removal, microneedling, and fractional resurfacing produce increased surface vulnerability. The NEUVY protocol restores total sterility without damaging delicate medical machinery.
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 3: SOCIETAL IMPACT SPOTLIGHT (PRD Page 2 Section 3) */}
      {/* ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Documentary */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8B4B8]/60 shadow-xl bg-white">
                <img
                  src={clinicalCareTrust}
                  alt="Dermatology consultation in modern aesthetic clinic"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#E8B4B8] font-semibold">
                    Regional Clinical Solidarity
                  </div>
                  <div className="text-sm font-serif italic text-[#FDFBF7] mt-1">
                    "Clinics adopting the NEUVY protocol transform invisible standards into an undeniable bond of trust with female patients."
                  </div>
                  <div className="text-xs text-[#E8B4B8] mt-2">
                    — Regional Advisory Board for Aesthetic Safety
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: PRD Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                <span>Societal Impact Spotlight</span>
                <span aria-hidden="true">·</span>
                <span>Women's Wellness Leadership</span>
              </div>

              {/* Exact PRD Header */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E3A2B] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Elevating Public Health Standards for Women
              </h2>

              {/* Exact PRD Content */}
              <p className="text-base sm:text-lg text-[#2C3E35]/85 leading-relaxed font-normal">
                Focused on reducing cross-contamination risks in outpatient facilities, building a culture of preventive health, and giving women complete confidence during every visit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
                <div className="p-5 rounded-xl bg-[#FFF2F4] border border-[#E8B4B8]">
                  <span className="text-2xl font-serif font-bold text-[#1E3A2B] block">
                    Zero Compromise
                  </span>
                  <span className="text-xs text-[#2C3E35]/80 mt-1 block">
                    Protection for outpatient laser, peel, and aesthetic treatments across Egypt, the UAE, Saudi Arabia, and Kenya.
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-[#FFF2F4] border border-[#E8B4B8]">
                  <span className="text-2xl font-serif font-bold text-[#1E3A2B] block">
                    Patient Transparency
                  </span>
                  <span className="text-xs text-[#2C3E35]/80 mt-1 block">
                    Clear physical verification indicators that allow women to verify the room sanitization cycle before stepping onto the treatment bed.
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm text-[#2C3E35]">
                <div className="flex items-start gap-3">
                  <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                  <span>Building an uncompromising standard across private aesthetic and dermatological clinics.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                  <span>Eliminating toxic respiratory burdens on aesthetic clinic nursing and cleaning staff.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#1E3A2B] font-bold shrink-0">✓</span>
                  <span>Promoting clinical safety education tailored to regional medical centers.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
