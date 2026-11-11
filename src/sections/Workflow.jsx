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
  Tablet,
  PenTool,
  ClipboardCheck,
  Smartphone,
} from 'lucide-react';
import Button from '../components/Button';

const IPAD_CAPABILITIES = [
  {
    icon: ClipboardCheck,
    title: 'Waiting Room iPad Check-In Kiosk',
    description:
      'Patients verify demographics, update medical histories, record allergies, and e-sign consent forms on a locked-down iPad kiosk—flowing straight into the EHR chart.',
  },
  {
    icon: PenTool,
    title: 'Touch Odontogram & Freehand Annotation',
    description:
      'Chart tooth surfaces, periodontal pocket depths, and draw directly over radiographs or intraoral photos chairside using touch or stylus.',
  },
  {
    icon: Smartphone,
    title: 'Chairside Treatment Presentation & Mobile Access',
    description:
      'Walk patients through phased treatment plans and X-rays on an iPad in the operatory, capture instant digital approval signatures, and check schedules from anywhere.',
  },
];

const WORKFLOW_STEPS = [
  {
    step: 'Step 01',
    title: 'Register Your Practice',
    description: 'Configure your clinic locations, dentists, operatory chairs, and appointment profiles.',
    icon: Building,
    previewChip: 'Custom Operatories • Provider Calendars',
  },
  {
    step: 'Step 02',
    title: 'Onboard & Check In Patients',
    description: 'Import existing records or let patients complete paperless digital intake on Web or iPad.',
    icon: UserPlus,
    previewChip: 'Medical Hx • Odontogram • Allergies',
  },
  {
    step: 'Step 03',
    title: 'Chart, Image & Prescribe',
    description:
      'Document consultations with SOAP macros or Ambient AI Scribe, review X-rays, and send eRx.',
    icon: CalendarClock,
    previewChip: 'SOAP Notes • AI Imaging • eRx',
  },
  {
    step: 'Step 04',
    title: 'Bill Claims & Engage Patients',
    description:
      'Scrub insurance claims automatically, collect Text-to-Pay balances, and automate hygiene recalls.',
    icon: TrendingUp,
    previewChip: 'Clean Claims • Patient Portal • Recall',
  },
];

const AUDIENCE_SEGMENTS = [
  {
    id: 'independent',
    badge: 'Solo Practitioners',
    title: 'Independent Dentists',
    subtitle: 'Run a calm, paperless single-chair or boutique dental practice with zero IT overhead.',
    icon: UserCheck,
    bullets: [
      'Manage patients, online booking, and appointments',
      'Maintain digital dental records and odontograms',
      'Track treatment plans, claims, and patient payments',
    ],
    workflowTag: 'Cloud & iPad Ready',
  },
  {
    id: 'growing-clinics',
    badge: 'Multi-Chair & Specialty Clinics',
    title: 'Growing Dental Clinics',
    subtitle: 'Synchronize associate dentists, orthodontists, oral surgeons, hygienists, and chairs.',
    icon: Users,
    featured: true,
    bullets: [
      'Manage multiple dentists and specialty SOAP templates',
      'Coordinate operatory chairs, iPad kiosks, and recalls',
      'Automate insurance eligibility and claim scrubbing',
    ],
    workflowTag: 'Multi-Provider Sync',
  },
  {
    id: 'multi-location',
    badge: 'Dental Groups & Hospitals',
    title: 'Multi-location Practices',
    subtitle: 'Unify clinical charting standards, imaging archives, and billing across all branches.',
    icon: Globe,
    bullets: [
      'Centralized cloud patient EHR across locations',
      'Standardized procedure codes and billing profiles',
      'Role-based access controls and unified RCM workflows',
    ],
    workflowTag: 'Enterprise Cloud Governance',
  },
];

export default function Workflow({ onOpenDemo }) {
  return (
    <div className="bg-[#F8F8F3]">
      {/* DrChrono-Style Mobile & iPad Point-of-Care Showcase Section */}
      <section
        id="ipad-mobility"
        className="py-20 sm:py-24 bg-[#F0F2EF] border-b border-[#123D40]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-white px-3 py-1 rounded-full border border-[#123D40]/10">
                <Tablet className="w-3.5 h-3.5" />
                Mobile-First Point-of-Care EHR
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40] leading-tight">
                Built for the Operatory Chair, Front Desk, and iPad.
              </h2>
              <p className="text-base text-[#222B2B]/75 leading-relaxed">
                Inspired by DrChrono&apos;s pioneering mobile EHR experience, DentoChrono gives clinicians complete freedom to check in patients, annotate dental radiographs, chart odontograms, and capture consent signatures on iPad or desktop web.
              </p>

              <div className="space-y-3.5 pt-2">
                {IPAD_CAPABILITIES.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="p-4 rounded-xl bg-white border border-[#123D40]/10 shadow-xs flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#DFF2EA] text-[#123D40] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#247C70]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-bold text-[#123D40]">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-[#222B2B]/75 mt-1 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: iPad Chairside & Check-In Kiosk Mockup Frame */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#123D40] p-4 sm:p-6 shadow-clinical-lg border-4 border-[#222B2B]">
                <div className="rounded-2xl bg-[#F8F8F3] overflow-hidden border border-white/15">
                  <div className="bg-[#123D40] text-white px-4 py-3 flex items-center justify-between text-xs">
                    <span className="font-heading font-bold flex items-center gap-2">
                      <Tablet className="w-4 h-4 text-[#C8E6A0]" />
                      iPad Chairside &amp; Kiosk Mode
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#247C70] text-[#C8E6A0] font-semibold">
                      Touch &amp; Stylus Ready
                    </span>
                  </div>

                  <div className="p-5 space-y-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-[#123D40]/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#247C70]">
                          Waiting Room Kiosk Check-In
                        </div>
                        <div className="text-sm font-heading font-bold text-[#123D40] mt-0.5">
                          Marcus Sterling • Digital Intake Completed
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#DFF2EA] text-[#123D40] font-semibold text-[10px]">
                        Synced to Chart
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#123D40]/10 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-[#123D40]">
                          Chairside Treatment Plan &amp; Stylus Consent
                        </span>
                        <span className="text-[10px] font-mono text-[#247C70]">Tooth #16 • Ceramic Crown</span>
                      </div>
                      <p className="text-[11px] text-[#222B2B]/75">
                        Patient reviewed Bitewing X-ray overlay and phased procedure breakdown chairside on iPad.
                      </p>
                      <div className="p-3 rounded-lg bg-[#F8F8F3] border border-dashed border-[#247C70]/40 flex items-center justify-between">
                        <span className="font-serif italic text-base text-[#123D40]">
                          Elena Rostova
                        </span>
                        <span className="text-[10px] font-semibold text-[#247C70]">
                          ✓ Digital Signature Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              From clinic setup to daily clinical flow in four connected steps.
            </h2>
            <p className="text-base text-[#222B2B]/75 mt-3">
              Cloud-native deployment means no local server maintenance or disruptive hardware installations.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* SECTION 8: Built for Every Dental Practice & Specialty */}
      <section
        id="solutions"
        className="py-20 sm:py-24 bg-[#F0F2EF] border-b border-[#123D40]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-white px-3 py-1 rounded-full mb-3 border border-[#123D40]/10">
                Practice Types &amp; Dental Specialties
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
                Customizable workflows for every dental specialty and clinic structure.
              </h2>
            </div>
            <p className="text-sm text-[#222B2B]/75 max-w-md">
              Whether you run a solo general dentistry studio, an orthodontic center, an oral surgery practice, or a multi-branch group, templates adapt to your clinical protocol.
            </p>
          </div>

          {/* Specialty Pills Bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              'General & Family Dentistry',
              'Orthodontics & Clear Aligners',
              'Oral & Maxillofacial Surgery',
              'Endodontics',
              'Periodontics & Implantology',
              'Pediatric Dentistry',
              'Prosthodontics',
            ].map((spec) => (
              <span
                key={spec}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white text-[#123D40] border border-[#123D40]/12 shadow-2xs"
              >
                {spec}
              </span>
            ))}
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
                        Architecture
                      </div>
                      <div
                        className={`text-xs font-heading font-bold ${
                          seg.featured ? 'text-[#C8E6A0]' : 'text-[#247C70]'
                        }`}
                      >
                        {seg.workflowTag}
                      </div>
                    </div>
                    <Button
                      variant={seg.featured ? 'accent' : 'secondary'}
                      size="sm"
                      icon={ArrowUpRight}
                      onClick={() => onOpenDemo(`${seg.title} Solution`)}
                    >
                      Schedule Demo
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
