import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Pill,
  FileText,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { CORE_FEATURES_DATA } from '../assets/dentalData';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All 6 Core Modules' },
  { id: 'clinical', label: 'Clinical & Charting', ids: ['digital-records', 'treatment-planning', 'dental-imaging'] },
  { id: 'operations', label: 'Front Desk & Billing', ids: ['patient-management', 'appointment-management', 'billing-payments'] },
];

export default function Features() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleFeatures =
    activeFilter === 'all'
      ? CORE_FEATURES_DATA
      : CORE_FEATURES_DATA.filter((f) => {
          const cat = FILTER_CATEGORIES.find((c) => c.id === activeFilter);
          return cat?.ids?.includes(f.id);
        });

  return (
    <section
      id="features"
      className="py-20 sm:py-24 bg-[#F8F8F3] border-b border-[#123D40]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
              Core Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40] tracking-tight">
              Purpose-built tools for every chair, clinician, and coordinator.
            </h2>
            <p className="text-base text-[#222B2B]/75 mt-3">
              Every module is natively engineered for dental workflows—combining tooth-level clinical precision with effortless daily practice operations.
            </p>
          </div>

          {/* Interactive Feature Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F0F2EF] p-1.5 rounded-xl border border-[#123D40]/10 self-start">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#123D40] text-white shadow-sm'
                    : 'text-[#222B2B]/70 hover:text-[#123D40]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Core Features Grid with Interface Mockups */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>

        {/* Additional Integrated Clinical & Practice Modules Strip (Prescriptions, Clinical Notes, Analytics, AI Analysis) */}
        <div className="mt-10 rounded-2xl bg-[#F0F2EF] border border-[#123D40]/12 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#123D40]/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#247C70]">
                Complete 10-Module Dental Operating System
              </span>
              <h3 className="text-xl font-heading font-bold text-[#123D40] mt-0.5">
                Plus built-in e-Prescriptions, Clinical SOAP Notes, and Practice Analytics
              </h3>
            </div>
            <a
              href="#showcase"
              className="text-xs font-semibold text-[#123D40] bg-white px-4 py-2.5 rounded-lg border border-[#123D40]/15 hover:bg-[#DFF2EA]/50 transition-colors self-start md:self-auto"
            >
              Launch Interactive 6-Tab Workspace →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-4 border border-[#123D40]/10 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#DFF2EA] text-[#123D40] flex items-center justify-center shrink-0">
                <Pill className="w-4 h-4 text-[#247C70]" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-[#123D40]">
                  Prescription Management
                </h4>
                <p className="text-xs text-[#222B2B]/75 mt-1 leading-relaxed">
                  Generate standardized dental prescriptions with pre-configured antibiotic, analgesic, and rinse dosages—automatically cross-checked against patient allergy alerts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#123D40]/10 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#DFF2EA] text-[#123D40] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-[#247C70]" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-[#123D40]">
                  Structured Clinical Notes
                </h4>
                <p className="text-xs text-[#222B2B]/75 mt-1 leading-relaxed">
                  Document chairside consultations in seconds with customizable endodontic, restorative, surgical, and orthodontic SOAP note templates.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#123D40]/10 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#DFF2EA] text-[#123D40] flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4 text-[#247C70]" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-[#123D40]">
                  Practice Analytics &amp; Reporting
                </h4>
                <p className="text-xs text-[#222B2B]/75 mt-1 leading-relaxed">
                  Track chair utilization, case acceptance rates, doctor production, hygiene recall retention, and daily collections in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

