import React from 'react';
import PricingCard from '../components/PricingCard';
import { ShieldCheck, HelpCircle } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'STARTER',
    subtitle: 'For independent dentists.',
    idealChairs: '1–2 Operatory Chairs',
    description:
      'Essential digital practice management for solo practitioners transitioning to a modern, paperless clinical workflow.',
    pricingLabel: 'Tailored to Practice Size',
    pricingNote: 'Guided setup & patient data migration included',
    ctaText: 'Get a Demo',
    featured: false,
    features: [
      'Patient management',
      'Appointment scheduling',
      'Digital records & odontograms',
      'Basic reporting',
      'Clinical notes & prescription templates',
    ],
  },
  {
    name: 'PROFESSIONAL',
    subtitle: 'For growing dental clinics.',
    idealChairs: '3–8 Operatory Chairs',
    description:
      'Full-featured clinical, financial, and imaging workspace for multi-dentist clinics coordinating multiple chairs.',
    pricingLabel: 'Custom Clinic Quote',
    pricingNote: 'Includes multi-provider calendars & AI imaging preview',
    ctaText: 'Get a Demo',
    featured: true,
    features: [
      'Everything in Starter',
      'Multiple dentists & provider schedules',
      'Multi-stage treatment planning',
      'Billing and payments',
      'Dental imaging & AI X-ray assistant',
    ],
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'For multi-location dental groups.',
    idealChairs: 'Multi-Branch / Hospitals',
    description:
      'Centralized governance, cross-clinic patient records, and executive analytics for dental groups and hospitals.',
    pricingLabel: 'Enterprise Agreement',
    pricingNote: 'Dedicated onboarding manager & SLA support',
    ctaText: 'Contact Sales',
    featured: false,
    features: [
      'Everything in Professional',
      'Multi-location management',
      'Advanced analytics & custom exports',
      'Granular role-based access control',
      'Priority support & custom onboarding',
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
            Flexible plans built for practices of every scale.
          </h2>
          <p className="text-base text-[#222B2B]/75 mt-3">
            Every plan includes encrypted cloud hosting, automated daily backups, and live onboarding for your clinical and front-desk team.
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
              <strong>Need help migrating from Dentrix, Open Dental, or paper records?</strong> Our onboarding engineers handle historical patient &amp; X-ray imports at no extra software fee.
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

