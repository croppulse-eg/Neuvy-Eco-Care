import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface PartnerFormProps {
  id?: string;
  onSuccess?: () => void;
}

export const PartnerForm: React.FC<PartnerFormProps> = ({ id = 'partner-section' }) => {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    location: '',
    phoneNumber: '',
    email: '',
    clinicType: 'Aesthetic & Laser Clinic',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const locations = [
    'United Arab Emirates (Dubai, Abu Dhabi)',
    'Kingdom of Saudi Arabia (Riyadh, Jeddah)',
    'Egypt (Cairo, Alexandria)',
    'Morocco (Casablanca, Rabat)',
    'Kenya (Nairobi, Mombasa)',
    'Nigeria (Lagos, Abuja)',
    'Jordan (Amman)',
    'Qatar (Doha)',
    'Kuwait (Kuwait City)',
    'Other MENA & Africa Region',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clinical onboarding submission
    setTimeout(() => {
      const generatedRef = `NEUVY-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      clinicName: '',
      location: '',
      phoneNumber: '',
      email: '',
      clinicType: 'Aesthetic & Laser Clinic',
      notes: '',
    });
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: 'linear-gradient(135deg, #1E3A2B 0%, #2A4838 52%, #FFF2F4 100%)',
      }}
    >
      {/* Decorative ambient elements */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: '#E8B4B8' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: '#C5A059' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: PRD Headline, Subheadline & Regional Value */}
          <div className="lg:col-span-5 text-[#FDFBF7]">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8B4B8]">
              <span>Clinic Partnership</span>
              <span aria-hidden="true">·</span>
              <span>MENA & Africa</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#FDFBF7] mb-5 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Ready to Elevate Your Clinic’s Safety Standard?
            </h2>

            <p className="text-base text-[#FDFBF7]/85 font-normal leading-relaxed mb-8">
              Join leading aesthetic clinics in adopting the NEUVY Eco-Care standard.
              Protect female patients, establish verified hygiene credentials, and lead the regional movement for female-centric clinical trust.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-[#FDFBF7]/90">
              <div className="flex items-start gap-3">
                <span className="text-[#C5A059] font-serif text-lg">01.</span>
                <div>
                  <strong className="block text-white font-medium">Rapid Protocol Integration</strong>
                  <span className="text-white/70 text-xs">Seamless transition into daily dermatology and aesthetic routines.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C5A059] font-serif text-lg">02.</span>
                <div>
                  <strong className="block text-white font-medium">Verified Safe Clinic Badge</strong>
                  <span className="text-white/70 text-xs">Auditable patient trust mark displayed at reception and treatment rooms.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C5A059] font-serif text-lg">03.</span>
                <div>
                  <strong className="block text-white font-medium">Sustainable Clinical Hygiene</strong>
                  <span className="text-white/70 text-xs">Formulated for delicate skin and zero harsh airborne residues.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-[#E8B4B8]">
              <span>Regional Clinical Liaisons</span>
              <span aria-hidden="true">/</span>
              <span>Cairo · Dubai · Riyadh · Nairobi · Casablanca</span>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#FDFBF7] text-[#2C3E35] rounded-2xl p-7 sm:p-9 shadow-xl border border-[#E8B4B8]/40">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#1E3A2B]/10 pb-4 mb-2">
                    <h3
                      className="text-2xl font-semibold text-[#1E3A2B]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      Request Clinic Partnership & Safety Audit
                    </h3>
                    <p className="text-xs text-[#2C3E35]/70 mt-1">
                      Complete your clinic information below to receive the official NEUVY Eco-Care integration dossier.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Laila El-Sayed"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                      />
                    </div>

                    {/* Clinic Name */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                        Clinic / Facility Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        placeholder="Aura Dermatology & Laser Center"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                        Location / Country <span className="text-rose-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                      >
                        <option value="">Select Clinic Location...</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                        Work / Medical Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="director@auraclinic.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                      />
                    </div>

                    {/* Clinic Type */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                        Clinic Focus
                      </label>
                      <select
                        value={formData.clinicType}
                        onChange={(e) => setFormData({ ...formData, clinicType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                      >
                        <option value="Dermatology & Laser Center">Dermatology & Laser Center</option>
                        <option value="Aesthetic & Cosmetic Clinic">Aesthetic & Cosmetic Clinic</option>
                        <option value="Specialized Women's Healthcare">Specialized Women's Healthcare</option>
                        <option value="Multi-Specialty Medical Day Surgery">Multi-Specialty Medical Day Surgery</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-medium text-[#1E3A2B] mb-1">
                      Clinical Inquiries or Current Hygiene Challenge (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., Inquiring about laser treatment bed protocols and patient certification materials..."
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#2C3E35]/20 rounded-lg focus:outline-hidden focus:border-[#1E3A2B] focus:ring-1 focus:ring-[#1E3A2B] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#1E3A2B] hover:bg-[#2A523D] active:bg-[#152B20] rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                    >
                      {loading ? (
                        <span>Processing Clinical Request...</span>
                      ) : (
                        <span>Submit Partnership Application</span>
                      )}
                    </button>
                    <p className="text-[11px] text-[#2C3E35]/60 text-center mt-2">
                      Strict privacy assurance. Clinical data handled under regional patient confidentiality charters.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#FFF2F4] border border-[#E8B4B8] flex items-center justify-center text-[#1E3A2B]">
                    <svg className="w-7 h-7 text-[#1E3A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h4
                    className="text-2xl font-semibold text-[#1E3A2B]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Partnership Request Received
                  </h4>

                  <p className="text-sm text-[#2C3E35]/80 max-w-md mx-auto">
                    Thank you, <strong className="text-[#1E3A2B]">{formData.name}</strong>. Your clinic partnership request for <strong className="text-[#1E3A2B]">{formData.clinicName}</strong> ({formData.location}) has been routed to our regional clinical director.
                  </p>

                  <div className="inline-block p-3 bg-[#FFF2F4] border border-[#E8B4B8] rounded-lg text-xs text-[#1E3A2B] font-mono">
                    Official Reference: {referenceId}
                  </div>

                  <p className="text-xs text-[#2C3E35]/65">
                    A clinical hygiene coordinator will reach out to <strong>{formData.email}</strong> within 24 business hours to arrange sample protocol integration kits.
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 text-xs font-medium text-[#1E3A2B] bg-white border border-[#1E3A2B]/20 rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      Submit Another Clinic Location
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
