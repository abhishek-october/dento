import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderX,
  CalendarOff,
  FileWarning,
  Unplug,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';

const PROBLEMS = [
  {
    number: '01',
    icon: FolderX,
    title: 'Patient information scattered across multiple records.',
    detail:
      'Paper charts, intake PDFs, and separate billing spreadsheets force clinicians to hunt for allergies and past procedures before every appointment.',
    fragmentTag: 'Legacy Filing / Spreadsheets',
  },
  {
    number: '02',
    icon: CalendarOff,
    title: 'Appointment scheduling and follow-ups handled manually.',
    detail:
      'Phone tag, unconfirmed recalls, and uncoordinated chair assignments leave costly gaps in operatory schedules.',
    fragmentTag: 'Manual Calendar / WhatsApp',
  },
  {
    number: '03',
    icon: FileWarning,
    title: 'Treatment histories difficult to track.',
    detail:
      'Multi-visit root canals, crown deliveries, and phased estimates get lost without a tooth-specific clinical timeline.',
    fragmentTag: 'Disconnected Notes',
  },
  {
    number: '04',
    icon: Unplug,
    title: 'Dental imaging disconnected from patient records.',
    detail:
      'Bitewings and panoramic X-rays live on a single desktop sensor PC instead of being accessible chairside inside the patient chart.',
    fragmentTag: 'Local Sensor Workstation',
  },
];

const UNIFIED_MODULES = [
  'Longitudinal Patient Chart',
  'Multi-Chair Smart Calendar',
  'Interactive 32-Tooth Odontogram',
  'Phased Treatment Estimates',
  'Cloud Dental Imaging & AI Review',
  'Itemized Billing & Prescriptions',
];

export default function ProblemSolution() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F8F3] border-b border-[#123D40]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
            The Problem &amp; The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40] leading-tight">
            Running a dental clinic shouldn&apos;t feel like running five different systems.
          </h2>
          <p className="text-base text-[#222B2B]/75 mt-3">
            Most dental practices stitch together disconnected tools for scheduling, paper charting, X-ray viewing, and invoicing—creating friction at the front desk and in the operatory.
          </p>
        </div>

        {/* Visual Transition Container: Disconnected Workflows -> Unified Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 6 Cols: The 4 Disconnected Problems */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#222B2B]/60">
                Before: Fragmented Clinic Workflow
              </span>
              <span className="text-[11px] font-medium text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                4 Disconnected Silos
              </span>
            </div>

            {PROBLEMS.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  key={prob.number}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-[#123D40]/12 shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0F2EF] text-[#123D40] flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                    <Icon className="w-5 h-5 text-[#222B2B]/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#222B2B]/50">
                        Friction Point {prob.number}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F0F2EF] text-[#222B2B]/65">
                        {prob.fragmentTag}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-heading font-bold text-[#123D40]">
                      {prob.title}
                    </h3>
                    <p className="text-xs text-[#222B2B]/70 mt-1 leading-relaxed">
                      {prob.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Connector Arrow (Desktop) / Divider */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between px-1 mb-2.5">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#247C70]">
                After: The Dento OS Solution
              </span>
              <span className="text-[11px] font-semibold text-[#123D40] bg-[#DFF2EA] px-2.5 py-0.5 rounded-full">
                Single Source of Truth
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex-1 rounded-2xl bg-[#123D40] text-[#F8F8F3] p-6 sm:p-8 border border-[#247C70]/40 shadow-clinical-lg flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#247C70]/40 border border-[#C8E6A0]/30 text-xs font-semibold text-[#C8E6A0]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Unified Clinical &amp; Operational Architecture</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
                  One connected workspace for your entire practice.
                </h3>

                <p className="text-sm text-[#DFF2EA]/80 leading-relaxed">
                  When a patient checks in, their medical history, digital odontogram, bitewing X-rays, multi-stage treatment plan, prescription log, and invoice ledger update in real time across every operatory chair and the front desk.
                </p>

                {/* Connected Hub Visual Diagram */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {UNIFIED_MODULES.map((mod) => (
                    <div
                      key={mod}
                      className="p-3 rounded-xl bg-white/8 border border-white/12 flex items-center gap-2.5 text-xs font-medium text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8E6A0] shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Synchronization Bar */}
              <div className="mt-8 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#DFF2EA]/85 relative z-10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C8E6A0]" />
                  <span>
                    Zero duplicate data entry between reception, operatory chairs, and billing.
                  </span>
                </div>
                <a
                  href="#features"
                  className="inline-flex items-center gap-1 font-semibold text-[#C8E6A0] hover:underline shrink-0"
                >
                  <span>See all 10 capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

