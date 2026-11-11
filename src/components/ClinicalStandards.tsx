import React, { useState } from 'react';

export const ClinicalStandards: React.FC<{ onPartnerClick: () => void }> = ({ onPartnerClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why do aesthetic and laser clinics require specialized hygiene formulations?',
      a: 'Aesthetic and dermatology procedures (such as laser resurfacing, chemical peels, and microneedling) deliberately sensitize the skin barrier. Standard commercial disinfectants leave lingering harsh residues and volatile odors that irritate compromised skin and cause contact discomfort. NEUVY Eco-Care is specifically formulated for high-frequency clinical contact with zero harsh chemical residue.',
    },
    {
      q: 'How does the NEUVY protocol integrate into rapid clinic turnovers?',
      a: 'The workflow is calibrated for clinical pace: under 90 seconds from patient departure to complete suite readiness. Nursing staff and laser technicians execute a standardized 3-step closed-loop process that guarantees complete microbial safety without creating operational delays.',
    },
    {
      q: 'How do female patients know their treatment room is verified safe?',
      a: 'Participating clinics receive official physical and digital NEUVY Eco-Care verification seals. An assurance marker is placed directly on the treatment bed and reception desk, giving women verifiable visual proof of clean room preparation before their procedure begins.',
    },
    {
      q: 'Does NEUVY Eco-Care harm expensive medical equipment and laser handpieces?',
      a: 'No. NEUVY Eco-Care is engineered to be non-corrosive and safe on medical-grade leather, acrylics, and delicate optical treatment handpieces, prolonging equipment lifespan while delivering total clinical safety.',
    },
    {
      q: 'What is the Women’s Healthcare Safety Charter?',
      a: 'It is our commitment to patient empowerment across MENA and Africa. It ensures every outpatient facility provides verified, transparent hygiene standards, treating women’s health, dignity, and bodily safety with uncompromising clinical care.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF2F4]/50 border-b border-[#1E3A2B]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A2B]">
            <span className="text-[#C5A059]">✦</span>
            <span>Clinical Standards & Patient Safety Charter</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E3A2B]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Clinical Transparency & Standards
          </h2>

          <p className="text-base text-[#2C3E35]/80 leading-relaxed max-w-2xl mx-auto">
            Addressing common clinical questions for aesthetic clinic directors, dermatologists, and female patients across the region.
          </p>
        </div>

        {/* Clinical Charter Box */}
        <div className="bg-white rounded-2xl p-8 border border-[#E8B4B8] shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pb-6 border-b border-[#1E3A2B]/10">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-1">
                Regional Safety Framework
              </span>
              <h3
                className="text-2xl font-serif font-bold text-[#1E3A2B]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                The 4 Commitments of NEUVY Eco-Care
              </h3>
            </div>
            <button
              onClick={onPartnerClick}
              className="px-5 py-2.5 text-xs font-medium text-white bg-[#1E3A2B] hover:bg-[#2A523D] rounded-lg transition-colors whitespace-nowrap"
            >
              Request Accreditation Dossier
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-sm text-[#2C3E35]">
            <div className="space-y-1">
              <strong className="text-[#1E3A2B] block font-semibold">1. Zero Harsh Chemical Residue</strong>
              <p className="text-xs text-[#2C3E35]/75 leading-relaxed">
                Guaranteed safe for sensitive, inflamed, or freshly treated skin barriers post-laser and peeling.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1E3A2B] block font-semibold">2. Multi-Pathogen Cross-Contamination Defense</strong>
              <p className="text-xs text-[#2C3E35]/75 leading-relaxed">
                Active protection against resistant viral and bacterial risks across treatment beds and handpieces.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1E3A2B] block font-semibold">3. Verifiable Patient Peace of Mind</strong>
              <p className="text-xs text-[#2C3E35]/75 leading-relaxed">
                Physical accreditation seals and room assurance markers that confirm a freshly sterilized suite.
              </p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1E3A2B] block font-semibold">4. Sustainable Healthcare Responsibility</strong>
              <p className="text-xs text-[#2C3E35]/75 leading-relaxed">
                Clean indoor clinic air, non-corrosive properties, and reduced ecological footprints.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E8B4B8]/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-sm font-semibold text-[#1E3A2B]">
                    {faq.q}
                  </span>
                  <span className="text-[#C5A059] text-lg font-mono">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#2C3E35]/80 leading-relaxed border-t border-[#1E3A2B]/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
