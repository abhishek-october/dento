import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Tablet,
  Mic,
  FileCheck2,
  CreditCard,
} from 'lucide-react';
import Button from '../components/Button';
import DashboardPreview from '../components/DashboardPreview';

export default function Hero({ onOpenDemo }) {
  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="product"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28 bg-clinical-grid border-b border-[#123D40]/10"
    >
      {/* Subtle ambient radial highlight */}
      <div
        className="pointer-events-none absolute -top-36 right-1/4 w-[36rem] h-[36rem] rounded-full bg-[#DFF2EA]/65 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: DrChrono-Style Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF2EA] border border-[#247C70]/25 text-xs font-semibold text-[#123D40]">
              <Sparkles className="w-3.5 h-3.5 text-[#247C70]" />
              <span>AI-Powered Cloud-Based EHR &amp; Practice Platform</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-heading font-extrabold text-[#123D40] leading-[1.08] tracking-tight">
                Streamline Your Dental Practice with{' '}
                <span className="text-[#247C70]">AI-Powered Cloud EHR.</span>
              </h1>
              <p className="text-xs sm:text-sm font-heading font-bold text-[#123D40]/75 tracking-wide uppercase">
                Unite Scheduling, Clinical Charting, Imaging &amp; Billing in One System
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#222B2B]/80 leading-relaxed">
              Manage patient intake, multi-chair scheduling, customizable SOAP notes, interactive odontograms, AI-assisted X-ray diagnostics, and revenue cycle billing from one unified workspace—on desktop and iPad.
            </p>

            {/* Quick Pillar Badges (DrChrono Style) */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#123D40]/10 font-medium text-[#123D40]">
                <FileCheck2 className="w-4 h-4 text-[#247C70] shrink-0" />
                <span>Customizable Dental EHR</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#123D40]/10 font-medium text-[#123D40]">
                <Mic className="w-4 h-4 text-[#247C70] shrink-0" />
                <span>Ambient AI Clinical Scribe</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#123D40]/10 font-medium text-[#123D40]">
                <CreditCard className="w-4 h-4 text-[#247C70] shrink-0" />
                <span>Integrated Billing &amp; RCM</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#123D40]/10 font-medium text-[#123D40]">
                <Tablet className="w-4 h-4 text-[#247C70] shrink-0" />
                <span>iPad Kiosk &amp; Patient Portal</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onOpenDemo('Hero - Schedule a Demo')}
              >
                Schedule a Free Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Compass}
                iconPosition="left"
                onClick={() => scrollToSection('#pillars')}
              >
                Explore Platform Pillars
              </Button>
            </div>

            {/* Small Trust Statement (Zero Metrics) */}
            <div className="pt-3 border-t border-[#123D40]/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#222B2B]/70">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#123D40]">
                <ShieldCheck className="w-4 h-4 text-[#247C70] shrink-0" />
                Built for independent dentists, specialists, and multi-location groups
              </span>
            </div>
          </motion.div>

          {/* Right Column: High-Fidelity Cloud EHR & iPad Companion Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 pb-6 sm:pb-8"
          >
            <DashboardPreview
              onSelectXrayDemo={() => scrollToSection('#ai-diagnostics')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
