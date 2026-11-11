import React from 'react';
import {
  FileCheck2,
  CalendarCheck,
  Receipt,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

const PLATFORM_PILLARS_NAV = [
  {
    id: 'ehr-pillar',
    title: 'Electronic Dental Record (EHR)',
    subtitle: 'Custom SOAP notes, odontograms, eRx & labs',
    icon: FileCheck2,
    href: '#pillars',
  },
  {
    id: 'pm-pillar',
    title: 'Practice Management',
    subtitle: 'Multi-chair scheduling, intake & task routing',
    icon: CalendarCheck,
    href: '#pillars',
  },
  {
    id: 'rcm-pillar',
    title: 'Dental Billing & RCM',
    subtitle: 'Eligibility checks, clean claims & Text-to-Pay',
    icon: Receipt,
    href: '#pillars',
  },
  {
    id: 'portal-pillar',
    title: 'Patient Engagement & iPad',
    subtitle: 'Online booking, iPad kiosk & telehealth',
    icon: Smartphone,
    href: '#pillars',
  },
];

export default function TrustBar() {
  const handleJump = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Core Platform Architecture Pillars"
      className="py-10 bg-[#F0F2EF] border-b border-[#123D40]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#247C70]">
              All-in-One Cloud Ecosystem
            </p>
            <h2 className="text-lg sm:text-xl font-heading font-bold text-[#123D40]">
              Everything your dental practice needs. Connected in one cloud platform.
            </h2>
          </div>
          <span className="text-xs font-medium text-[#222B2B]/70">
            Web Browser • Native iPad Kiosk • Chairside Mobile Access
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORM_PILLARS_NAV.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleJump(e, item.href)}
                className="group bg-white rounded-xl p-4.5 border border-[#123D40]/10 hover:border-[#247C70]/40 shadow-sm hover:shadow-clinical transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DFF2EA]/80 text-[#123D40] group-hover:bg-[#123D40] group-hover:text-[#C8E6A0] transition-colors flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm font-heading font-bold text-[#123D40] group-hover:text-[#247C70] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-3.5 h-3.5 text-[#247C70] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-xs text-[#222B2B]/70 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
