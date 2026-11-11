import React, { useState } from 'react';

export const RegionalHubs: React.FC<{ onPartnerClick: () => void }> = ({ onPartnerClick }) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const clinics = [
    {
      name: 'Aura Dermatology & Laser Institute',
      city: 'Dubai',
      country: 'United Arab Emirates',
      tier: 'Gold Verified Standard',
      procedures: 'Laser Resurfacing, Fractional RF, Dermatology',
      beds: '6 Treatment Suites',
      verifiedSince: '2024',
    },
    {
      name: 'Nile Valley Women’s Aesthetic Clinic',
      city: 'Cairo',
      country: 'Egypt',
      tier: 'Gold Verified Standard',
      procedures: 'Laser Hair Removal, Chemical Peels, Medical Facials',
      beds: '8 Treatment Suites',
      verifiedSince: '2024',
    },
    {
      name: 'Al-Noor Aesthetic Day Surgery',
      city: 'Riyadh',
      country: 'Kingdom of Saudi Arabia',
      tier: 'Gold Verified Standard',
      procedures: 'Cosmetic Dermatology, Laser Therapy, Body Contouring',
      beds: '10 Treatment Suites',
      verifiedSince: '2025',
    },
    {
      name: 'Sahara Medical Dermatology Center',
      city: 'Casablanca',
      country: 'Morocco',
      tier: 'Gold Verified Standard',
      procedures: 'Specialized Skin Care, Laser Surgery, Microneedling',
      beds: '5 Treatment Suites',
      verifiedSince: '2025',
    },
    {
      name: 'Savannah Aesthetic & Wellness Clinic',
      city: 'Nairobi',
      country: 'Kenya',
      tier: 'Certified Eco-Care Clinic',
      procedures: 'Melanin-Safe Laser Therapy, Aesthetic Dermatology',
      beds: '4 Treatment Suites',
      verifiedSince: '2025',
    },
    {
      name: 'Zeina Specialized Women’s Laser Clinic',
      city: 'Amman',
      country: 'Jordan',
      tier: 'Gold Verified Standard',
      procedures: 'Laser Hair Removal, Medical Skin Rejuvenation',
      beds: '6 Treatment Suites',
      verifiedSince: '2025',
    },
  ];

  const filteredClinics =
    selectedCity === 'All'
      ? clinics
      : clinics.filter((c) => c.city === selectedCity);

  const cities = ['All', 'Dubai', 'Cairo', 'Riyadh', 'Casablanca', 'Nairobi', 'Amman'];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#1E3A2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
            <span>Regional Presence</span>
            <span aria-hidden="true">·</span>
            <span>MENA & Africa</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1E3A2B]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Verified Clinic Network & Patient Safety Hubs
          </h2>

          <p className="text-base text-[#2C3E35]/80 leading-relaxed font-normal">
            Leading dermatology and aesthetic institutions across the Middle East and Africa that have integrated the NEUVY Eco-Care standard into their daily clinical operations.
          </p>

          {/* City Filter Tabs (Segmented buttons per frontend-design guidelines) */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCity === city
                    ? 'bg-[#1E3A2B] text-white shadow-xs'
                    : 'bg-[#FFF2F4] text-[#2C3E35] hover:bg-[#E8B4B8]/30 border border-[#E8B4B8]/60'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Clinic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E8B4B8]/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1E3A2B]">
                    {clinic.city}, {clinic.country}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#FFF2F4] text-[#C5A059] border border-[#E8B4B8]">
                    {clinic.tier}
                  </span>
                </div>

                <h3
                  className="text-xl font-serif font-semibold text-[#1E3A2B] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {clinic.name}
                </h3>

                <p className="text-xs text-[#2C3E35]/75 mb-4">
                  <strong className="text-[#1E3A2B]">Focus:</strong> {clinic.procedures}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E3A2B]/10 flex items-center justify-between text-xs text-[#2C3E35]/70">
                <span>{clinic.beds}</span>
                <span className="font-mono text-[#1E3A2B]">Certified since {clinic.verifiedSince}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Hub Statistics Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-[#FFF2F4] border border-[#1E3A2B]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#1E3A2B]">140+</div>
              <div className="text-xs text-[#2C3E35]/75 mt-1 font-medium">Accredited Aesthetic Suites</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#1E3A2B]">100%</div>
              <div className="text-xs text-[#2C3E35]/75 mt-1 font-medium">Zero Harsh Chemical Residue</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#1E3A2B]">6</div>
              <div className="text-xs text-[#2C3E35]/75 mt-1 font-medium">Regional MENA Hubs</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#C5A059]">90 sec</div>
              <div className="text-xs text-[#2C3E35]/75 mt-1 font-medium">Clinical Turnover Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
