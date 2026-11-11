import React from 'react';
import PricingCard from '../components/PricingCard';
import { ShieldCheck, HelpCircle } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'FOUNDATION • STARTER',
    subtitle: 'For independent dentists.',
    idealChairs: 'Solo & Boutique Practices',
    description:
      'Essential cloud EHR, scheduling, and patient engagement tools for solo practitioners transitioning to a modern, paperless workflow.',
    pricingLabel: 'Tailored Practice Plan',
    pricingNote: 'Guided setup & patient data migration included',
    ctaText: 'Schedule a Demo',
    featured: false,
    features: [
      'Cloud Dental EHR & customizable SOAP notes',
      'Interactive digital odontograms & eRx',
      'Multi-chair appointment scheduling & reminders',
      'Waiting room iPad check-in kiosk & Patient Portal',
      'Standard practice & billing reports',
    ],
  },
  {
    name: 'GROWTH • PROFESSIONAL',
    subtitle: 'For growing dental clinics.',
    idealChairs: 'Multi-Dentist Practices',
    description:
      'Full-featured clinical EHR, automated insurance eligibility, treatment planning, and dental imaging for multi-provider clinics.',
    pricingLabel: 'Custom Clinic Quote',
    pricingNote: 'Includes RCM automation & AI imaging assistant',
    ctaText: 'Schedule a Demo',
    featured: true,
    features: [
      'Everything in Foundation / Starter',
      'Multiple dentists & specialty templates',
      'Multi-stage treatment planning & iPad e-signatures',
      'Automated insurance eligibility & claims billing',
      'Cloud dental imaging & AI X-ray review assistant',
    ],
  },
  {
    name: 'PREMIUM • ENTERPRISE',
    subtitle: 'For multi-location dental groups.',
    idealChairs: 'Multi-Branch & Hospitals',
    description:
      'Centralized cloud EHR governance, Ambient AI Scribe, dedicated RCM workflows, and open API access for dental groups.',
    pricingLabel: 'Enterprise Agreement',
    pricingNote: 'Dedicated onboarding manager & SLA support',
    ctaText: 'Contact Sales',
    featured: false,
    features: [
      'Everything in Growth / Professional',
      'Multi-location management & cross-branch EHR',
      'Ambient AI Clinical Scribe & AI Claim Scrubber',
      'Granular role-based access & audit logs',
      'Open API access & priority onboarding support',
    ],
  },
];

export default function Pricing({ onOpenDemo }) {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 bg-[#F8F8F3] border-b border-[#123D40]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
            Plans &amp; Packaging
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
            Flexible EHR &amp; Practice Management plans built around your clinic.
          </h2>
          <p className="text-base text-[#222B2B]/75 mt-3">
            Every plan includes encrypted cloud hosting, native iPad &amp; web access, automated backups, and live onboarding for your clinical and front-desk team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              onSelectTier={(ctx) => onOpenDemo(ctx)}
            />
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-[#F0F2EF] border border-[#123D40]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#222B2B]/80">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#247C70] shrink-0" />
            <span>
              <strong>Switching from a legacy EHR or paper charts?</strong> Our onboarding specialists handle structured patient demographics, appointment history, and radiograph migration.
            </span>
          </div>
          <button
            type="button"
            onClick={() => onOpenDemo('Migration & Pricing Consultation')}
            className="font-semibold text-[#123D40] hover:text-[#247C70] underline underline-offset-4 shrink-0 inline-flex items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Talk to Onboarding Team</span>
          </button>
        </div>
      </div>
    </section>
  );
}
