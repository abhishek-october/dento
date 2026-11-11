import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderX,
  CalendarOff,
  FileWarning,
  Unplug,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  FileCheck2,
  Calendar,
  CreditCard,
  Tablet,
  Pill,
  ShieldCheck,
} from 'lucide-react';
import { DRCHRONO_PILLARS } from '../assets/dentalData';
import Button from '../components/Button';

const PROBLEMS = [
  {
    number: '01',
    icon: FolderX,
    title: 'Patient information scattered across multiple records.',
    detail:
      'Paper charts, intake PDFs, and separate billing tools force clinicians to hunt for allergies and past procedures before every appointment.',
    fragmentTag: 'Legacy Filing / Siloed Charts',
  },
  {
    number: '02',
    icon: CalendarOff,
    title: 'Appointment scheduling and follow-ups handled manually.',
    detail:
      'Phone tag, unconfirmed recalls, and uncoordinated chair assignments create administrative friction at the front desk.',
    fragmentTag: 'Manual Calendar / Phone Tag',
  },
  {
    number: '03',
    icon: FileWarning,
    title: 'Treatment histories and claims difficult to track.',
    detail:
      'Multi-visit root canals, crown deliveries, and insurance pre-authorizations get delayed without a tooth-specific clinical-to-billing pipeline.',
    fragmentTag: 'Disconnected Billing',
  },
  {
    number: '04',
    icon: Unplug,
    title: 'Dental imaging disconnected from patient records.',
    detail:
      'Bitewings and panoramic X-rays remain trapped on a single desktop sensor PC instead of syncing across operatories and iPads.',
    fragmentTag: 'Isolated Sensor PC',
  },
];

function PillarMockupView({ previewType }) {
  if (previewType === 'pm') {
    return (
      <div className="bg-[#0D2B2E] rounded-xl p-5 border border-white/15 space-y-3 text-xs text-[#F8F8F3]">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span className="font-heading font-bold text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C8E6A0]" />
            Multi-Chair Flow &amp; Automated Intake
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#247C70] text-[#C8E6A0]">
            Front-Office Sync
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {[
            { stage: '1. Digital Intake', status: 'Medical History & Consent Signed on iPad' },
            { stage: '2. Operatory Chair', status: 'Roomed in Chair 01 • Assistant Notified' },
            { stage: '3. Recall & Follow-Up', status: 'Next Hygiene & Crown Seat Auto-Queued' },
          ].map((card) => (
            <div key={card.stage} className="p-3 rounded-lg bg-white/8 border border-white/10">
              <div className="text-[11px] font-bold text-[#C8E6A0]">{card.stage}</div>
              <div className="text-[11px] text-[#DFF2EA]/85 mt-1">{card.status}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (previewType === 'rcm') {
    return (
      <div className="bg-[#0D2B2E] rounded-xl p-5 border border-white/15 space-y-3 text-xs text-[#F8F8F3]">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span className="font-heading font-bold text-white flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#C8E6A0]" />
            Integrated Dental RCM &amp; Claim Scrubber
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#247C70] text-[#C8E6A0]">
            Eligibility Active
          </span>
        </div>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-white/8 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-semibold text-white">Pre-Visit Insurance Eligibility Check</div>
              <div className="text-[11px] text-[#DFF2EA]/75">Active coverage verified automatically before check-in</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#C8E6A0] text-[#123D40] font-bold text-[10px]">
              Verified
            </span>
          </div>
          <div className="p-3 rounded-lg bg-white/8 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-semibold text-white">AI Claim Scrubber • CDT D2740 (#16)</div>
              <div className="text-[11px] text-[#DFF2EA]/75">Pre-op Bitewing X-ray &amp; periodontal chart attached</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#247C70] text-white font-semibold text-[10px]">
              Ready to Submit
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (previewType === 'engagement') {
    return (
      <div className="bg-[#0D2B2E] rounded-xl p-5 border border-white/15 space-y-3 text-xs text-[#F8F8F3]">
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <span className="font-heading font-bold text-white flex items-center gap-2">
            <Tablet className="w-4 h-4 text-[#C8E6A0]" />
            Patient Portal, Online Booking &amp; iPad Kiosk
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#247C70] text-[#C8E6A0]">
            Paperless Experience
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 rounded-lg bg-white/8 border border-white/10">
            <div className="font-bold text-[#C8E6A0]">Self-Service Patient Portal</div>
            <p className="text-[11px] text-[#DFF2EA]/80 mt-1">
              Patients book visits online, review treatment plans, message their dentist, and sign consent forms from any device.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-white/8 border border-white/10">
            <div className="font-bold text-[#C8E6A0]">Waiting Room iPad Kiosk</div>
            <p className="text-[11px] text-[#DFF2EA]/80 mt-1">
              Guided tap-to-complete medical history, allergy verification, and privacy signatures synced directly to the chart.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default: EHR
  return (
    <div className="bg-[#0D2B2E] rounded-xl p-5 border border-white/15 space-y-3 text-xs text-[#F8F8F3]">
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <span className="font-heading font-bold text-white flex items-center gap-2">
          <FileCheck2 className="w-4 h-4 text-[#C8E6A0]" />
          Customizable Dental EHR, Odontogram &amp; eRx
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-[#247C70] text-[#C8E6A0]">
          Point-of-Care Charting
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="p-3 rounded-lg bg-white/8 border border-white/10 space-y-1">
          <div className="font-bold text-[#C8E6A0]">Specialty SOAP &amp; Macros</div>
          <p className="text-[11px] text-[#DFF2EA]/80">
            One-click restorative, endodontic, surgical, and hygiene templates with interactive 32-tooth surface charting.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-white/8 border border-white/10 space-y-1">
          <div className="font-bold text-[#C8E6A0] flex items-center gap-1.5">
            <Pill className="w-3.5 h-3.5" />
            Integrated e-Prescribing (eRx)
          </div>
          <p className="text-[11px] text-[#DFF2EA]/80">
            Send prescriptions directly to pharmacies with automated allergy and medication cross-checks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSolution({ onOpenDemo }) {
  const [activePillarId, setActivePillarId] = useState('ehr');
  const activePillar =
    DRCHRONO_PILLARS.find((p) => p.id === activePillarId) || DRCHRONO_PILLARS[0];

  return (
    <section
      id="pillars"
      className="py-20 sm:py-24 bg-[#F8F8F3] border-b border-[#123D40]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PART 1: DrChrono-Inspired Interactive 4-Pillar Platform Deep Dive */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
              Four Unified Platform Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40] leading-tight">
              Built to handle every stage of the dental patient lifecycle.
            </h2>
            <p className="text-base text-[#222B2B]/75 mt-3">
              Explore how our cloud platform unites Electronic Dental Records, Practice Management, Revenue Cycle Billing, and Patient Engagement.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {DRCHRONO_PILLARS.map((pillar) => {
              const active = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-[#123D40] text-white shadow-sm'
                      : 'bg-white text-[#222B2B]/80 border border-[#123D40]/12 hover:bg-[#F0F2EF]'
                  }`}
                >
                  {pillar.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="rounded-2xl bg-[#123D40] text-[#F8F8F3] p-6 sm:p-10 border border-[#247C70]/40 shadow-clinical-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8E6A0] bg-[#247C70]/40 px-3 py-1 rounded-full border border-[#C8E6A0]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activePillar.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
                  {activePillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#DFF2EA]/85 leading-relaxed">
                  {activePillar.description}
                </p>
                <div className="pt-2">
                  <Button
                    variant="accent"
                    size="md"
                    icon={ArrowRight}
                    onClick={() => onOpenDemo(`Pillar Demo: ${activePillar.shortLabel}`)}
                  >
                    Schedule a {activePillar.shortLabel} Demo
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <ul className="space-y-2.5 bg-white/6 p-5 rounded-xl border border-white/10">
                  {activePillar.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#C8E6A0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <PillarMockupView previewType={activePillar.previewType} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PART 2: Disconnected Silos vs. One Connected Workspace */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
              Why Practices Switch
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#123D40]">
              Running a dental clinic shouldn&apos;t feel like running five different systems.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 6 Cols: The 4 Disconnected Problems */}
            <div className="lg:col-span-6 space-y-3">
              {PROBLEMS.map((prob) => {
                const Icon = prob.icon;
                return (
                  <div
                    key={prob.number}
                    className="p-4 rounded-xl bg-white border border-[#123D40]/12 shadow-sm flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F0F2EF] text-[#123D40] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#222B2B]/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-heading font-bold text-[#123D40]">
                          {prob.title}
                        </h4>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F0F2EF] text-[#222B2B]/65 shrink-0">
                          {prob.fragmentTag}
                        </span>
                      </div>
                      <p className="text-xs text-[#222B2B]/70 mt-1 leading-relaxed">
                        {prob.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 6 Cols: Unified Cloud Workspace Summary */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 rounded-2xl bg-white border-2 border-[#247C70]/35 p-6 sm:p-8 shadow-clinical flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF2EA] text-xs font-semibold text-[#123D40]">
                    <Layers className="w-3.5 h-3.5 text-[#247C70]" />
                    <span>One Connected Workspace for Your Entire Practice</span>
                  </div>

                  <h4 className="text-2xl font-heading font-bold text-[#123D40]">
                    From iPad check-in to chairside charting and claim submission—without switching screens.
                  </h4>

                  <p className="text-sm text-[#222B2B]/75 leading-relaxed">
                    When a patient completes digital intake, their medical alerts, interactive odontogram, radiographs, treatment plan, e-prescriptions, and billing ledger stay synchronized across every workstation and iPad in your clinic.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {[
                      'Longitudinal Patient EHR Chart',
                      'Multi-Chair Smart Calendar',
                      'Interactive Digital Odontograms',
                      'Phased Treatment Plans & e-Sign',
                      'Cloud X-Ray & AI Diagnostics',
                      'Automated Eligibility & RCM Billing',
                    ].map((mod) => (
                      <div
                        key={mod}
                        className="p-2.5 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10 flex items-center gap-2 text-xs font-semibold text-[#123D40]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#247C70] shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#123D40]/10 flex items-center justify-between text-xs text-[#222B2B]/70">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#247C70]" />
                    Single cloud database across reception, operatory &amp; billing
                  </span>
                  <a
                    href="#features"
                    className="font-bold text-[#123D40] hover:text-[#247C70] inline-flex items-center gap-1"
                  >
                    <span>Explore Modules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
