import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

export default function CTA({ onOpenDemo }) {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl bg-[#123D40] text-[#F8F8F3] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 overflow-hidden border border-[#247C70]/40 shadow-clinical-lg"
        >
          {/* Subtle decorative radial glow */}
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#247C70]/35 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#247C70]/40 border border-[#C8E6A0]/30 text-xs font-semibold text-[#C8E6A0]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Everything your dental practice needs, intelligently connected.</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Build a Smarter Dental Practice.
            </h2>

            <p className="text-base sm:text-lg text-[#DFF2EA]/85 max-w-xl mx-auto leading-relaxed">
              Spend less time managing systems and more time caring for patients.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
              <Button
                variant="accent"
                size="lg"
                icon={Calendar}
                onClick={() => onOpenDemo('Final CTA - Book Your Free Demo')}
              >
                Book Your Free Demo
              </Button>
              <Button
                variant="outlineDark"
                size="lg"
                icon={MessageSquare}
                onClick={() => onOpenDemo('Final CTA - Talk to Our Team')}
              >
                Talk to Our Team
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#DFF2EA]/75">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8E6A0]" />
                Tailored 1-on-1 Live Walkthrough
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8E6A0]" />
                Zero-Downtime Record Migration
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8E6A0]" />
                Built for Solo Dentists &amp; Multi-Chair Clinics
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

