import React from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  UserPlus,
  CalendarClock,
  TrendingUp,
  UserCheck,
  Users,
  Globe,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import Button from '../components/Button';

const WORKFLOW_STEPS = [
  {
    step: 'Step 01',
    title: 'Register Your Practice',
    description: 'Set up your clinic, dentists, chairs and operating hours.',
    icon: Building,
    previewChip: '3 Chairs • 4 Clinicians • 8am–7pm',
  },
  {
    step: 'Step 02',
    title: 'Add Your Patients',
    description: 'Create patient profiles and digitize their dental records.',
    icon: UserPlus,
    previewChip: 'Medical Hx • Odontogram • Allergies',
  },
  {
    step: 'Step 03',
    title: 'Manage Daily Operations',
    description:
      'Schedule appointments, document consultations and prepare treatment plans.',
    icon: CalendarClock,
    previewChip: 'Smart Calendar • SOAP Notes • Invoices',
  },
  {
    step: 'Step 04',
    title: 'Review and Grow',
    description:
      'Use imaging assistance, follow-up tracking and practice analytics.',
    icon: TrendingUp,
    previewChip: 'AI X-ray Review • Recall • Analytics',
  },
];

const AUDIENCE_SEGMENTS = [
  {
    id: 'independent',
    badge: 'Solo Practitioners',
    title: 'Independent Dentists',
    subtitle: 'Run a calm, paperless single-chair or boutique dental office.',
    icon: UserCheck,
    bullets: [
      'Manage patients and appointments',
      'Maintain digital dental records',
      'Track treatments and payments',
    ],
    metricLabel: 'Setup Time',
    metricValue: 'Same-Day Onboarding',
  },
  {
    id: 'growing-clinics',
    badge: 'Multi-Chair Practices',
    title: 'Growing Dental Clinics',
    subtitle: 'Synchronize associate dentists, specialists, hygienists, and chairs.',
    icon: Users,
    featured: true,
    bullets: [
      'Manage multiple dentists',
      'Coordinate chairs and appointments',
      'Track clinic performance',
    ],
    metricLabel: 'Operatory Flow',
    metricValue: 'Multi-Provider Sync',
  },
  {
    id: 'multi-location',
    badge: 'Dental Groups & Hospitals',
    title: 'Multi-location Practices',
    subtitle: 'Unify clinical standards and financial visibility across branches.',
    icon: Globe,
    bullets: [
      'Centralized patient management',
      'Location-wise reporting',
      'Standardized workflows',
    ],
    metricLabel: 'Enterprise Control',
    metricValue: 'Cross-Branch Ledger',
  },
];

export default function Workflow({ onOpenDemo }) {
  return (
    <div className="bg-[#F8F8F3]">
      {/* SECTION 7: How It Works */}
      <section
        id="workflow"
        className="py-20 sm:py-24 border-b border-[#123D40]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
              From clinic setup to daily clinical excellence in four steps.
            </h2>
            <p className="text-base text-[#222B2B]/75 mt-3">
              Dento OS is engineered for busy dental teams—no complicated server installations or weeks of disruptive staff retraining.
            </p>
          </div>

          {/* 4 Connected Workflow Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Desktop Horizontal Connector Line */}
            <div
              className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-[#123D40]/15 via-[#247C70]/40 to-[#123D40]/15 z-0"
              aria-hidden="true"
            />

            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="relative z-10 rounded-2xl bg-white border border-[#123D40]/12 p-6 shadow-clinical flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#123D40] text-[#C8E6A0] flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F0F2EF] text-[#123D40]">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[#123D40] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#222B2B]/75 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#123D40]/10">
                    <div className="text-[11px] font-mono font-medium text-[#247C70] bg-[#DFF2EA]/50 px-2.5 py-1.5 rounded-lg border border-[#247C70]/15">
                      {item.previewChip}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Built for Every Dental Practice */}
      <section
        id="solutions"
        className="py-20 sm:py-24 bg-[#F0F2EF] border-b border-[#123D40]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-white px-3 py-1 rounded-full mb-3 border border-[#123D40]/10">
                Built for Every Dental Practice
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
                Scales seamlessly from a single operatory chair to multi-location groups.
              </h2>
            </div>
            <p className="text-sm text-[#222B2B]/75 max-w-md">
              Whether you are an independent general dentist, an orthodontic specialist, or a growing multi-clinic group, Dento OS adapts to your clinical structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {AUDIENCE_SEGMENTS.map((seg) => {
              const Icon = seg.icon;
              return (
                <div
                  key={seg.id}
                  className={`rounded-2xl p-7 transition-all flex flex-col justify-between ${
                    seg.featured
                      ? 'bg-[#123D40] text-[#F8F8F3] border border-[#247C70] shadow-clinical-lg'
                      : 'bg-white text-[#222B2B] border border-[#123D40]/12 shadow-clinical'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          seg.featured
                            ? 'bg-[#247C70]/50 text-[#C8E6A0] border border-[#C8E6A0]/30'
                            : 'bg-[#DFF2EA] text-[#123D40]'
                        }`}
                      >
                        {seg.badge}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          seg.featured
                            ? 'bg-white/10 text-[#C8E6A0]'
                            : 'bg-[#F0F2EF] text-[#123D40]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3
                      className={`text-2xl font-heading font-bold mb-2 ${
                        seg.featured ? 'text-white' : 'text-[#123D40]'
                      }`}
                    >
                      {seg.title}
                    </h3>
                    <p
                      className={`text-sm mb-6 leading-relaxed ${
                        seg.featured ? 'text-[#DFF2EA]/80' : 'text-[#222B2B]/75'
                      }`}
                    >
                      {seg.subtitle}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {seg.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              seg.featured
                                ? 'bg-[#247C70] text-[#C8E6A0]'
                                : 'bg-[#DFF2EA] text-[#123D40]'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span
                            className={
                              seg.featured ? 'text-white font-medium' : 'text-[#123D40] font-medium'
                            }
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`pt-4 border-t flex items-center justify-between ${
                      seg.featured ? 'border-white/15' : 'border-[#123D40]/10'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-wider opacity-65">
                        {seg.metricLabel}
                      </div>
                      <div
                        className={`text-xs font-heading font-bold ${
                          seg.featured ? 'text-[#C8E6A0]' : 'text-[#247C70]'
                        }`}
                      >
                        {seg.metricValue}
                      </div>
                    </div>
                    <Button
                      variant={seg.featured ? 'accent' : 'secondary'}
                      size="sm"
                      icon={ArrowUpRight}
                      onClick={() => onOpenDemo(`${seg.title} Solution`)}
                    >
                      Explore Setup
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

