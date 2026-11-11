import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scan, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import XrayAnalysisPreview from '../components/XrayAnalysisPreview';
import Button from '../components/Button';

const OBSERVATION_TAGS = [
  'Possible caries',
  'Suspected bone loss',
  'Potential periapical radiolucency',
  'Areas requiring further clinical review',
];

export default function AIAnalysis({ onOpenDemo }) {
  return (
    <section
      id="ai-diagnostics"
      className="py-20 sm:py-28 bg-[#123D40] text-[#F8F8F3] bg-clinical-grid-dark relative overflow-hidden border-b border-white/10"
    >
      {/* Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[48rem] h-[24rem] rounded-full bg-[#247C70]/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#247C70]/40 border border-[#C8E6A0]/30 text-xs font-semibold text-[#C8E6A0]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Assisted Dental X-Ray Analysis • Interactive Simulation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              See Beyond the X-ray.
            </h2>

            <p className="text-base sm:text-lg text-[#DFF2EA]/85 leading-relaxed">
              Bring intelligent imaging assistance into your dental workflow. Upload dental X-rays and receive AI-generated observations that help clinicians review images more efficiently.
            </p>
          </div>

          {/* Right Pill List of Illustrative Observations */}
          <div className="lg:max-w-md space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C8E6A0]">
              Illustrative AI-Generated Observations
            </div>
            <div className="flex flex-wrap gap-2">
              {OBSERVATION_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/8 text-[#DFF2EA] border border-white/12 inline-flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8E6A0]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Interactive Dental X-ray Interface Preview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <XrayAnalysisPreview />
        </motion.div>

        {/* Bottom Clinical Credibility Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#DFF2EA]/75">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <Layers className="w-4 h-4 text-[#C8E6A0]" />
              Supports Bitewing, Periapical &amp; Panoramic OPG Workflows
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C8E6A0]" />
              Clinician-in-the-loop architecture: Dentist retains full diagnostic authority
            </span>
          </div>

          <Button
            variant="accent"
            size="sm"
            icon={ArrowUpRight}
            onClick={() => onOpenDemo('AI Diagnostics Section')}
          >
            Request AI Imaging Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

