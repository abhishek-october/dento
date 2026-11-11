import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
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
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-clinical-grid border-b border-[#123D40]/10"
    >
      {/* Subtle ambient radial highlight */}
      <div
        className="pointer-events-none absolute -top-36 right-1/4 w-[36rem] h-[36rem] rounded-full bg-[#DFF2EA]/65 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF2EA] border border-[#247C70]/25 text-xs font-semibold text-[#123D40]">
              <Sparkles className="w-3.5 h-3.5 text-[#247C70]" />
              <span>Intelligent Operating System for Modern Dental Clinics</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-heading font-extrabold text-[#123D40] leading-[1.08] tracking-tight">
                Your Dental Practice.{' '}
                <span className="text-[#247C70]">Beautifully Connected.</span>
              </h1>
              <p className="text-sm font-heading font-semibold text-[#123D40]/75 tracking-wide uppercase">
                Less Practice Administration. More Confident Dentistry.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#222B2B]/80 leading-relaxed">
              Manage patients, appointments, clinical records, treatment plans and dental imaging from one intelligent platform. Built to make running a dental practice simpler.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onOpenDemo('Hero Primary CTA')}
              >
                Book a Free Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Compass}
                iconPosition="left"
                onClick={() => scrollToSection('#showcase')}
              >
                Explore the Platform
              </Button>
            </div>

            {/* Small Trust Statement */}
            <div className="pt-3 border-t border-[#123D40]/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#123D40]">
                <ShieldCheck className="w-4 h-4 text-[#247C70] shrink-0" />
                <span>Designed for independent dentists and growing dental practices.</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#222B2B]/65">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#247C70]" />
                  Digital Odontograms & SOAP Notes
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#247C70]" />
                  Multi-Chair Scheduling
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#247C70]" />
                  AI X-ray Review Assistant
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Fidelity Dental Practice Dashboard Mockup */}
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

