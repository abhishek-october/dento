import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../assets/dentalData';
import Button from '../components/Button';

export default function FAQ({ onOpenDemo }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-[#F0F2EF] border-b border-[#123D40]/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-white px-3 py-1 rounded-full mb-3 border border-[#123D40]/10">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
            Answers for dentists, clinic owners, and practice managers.
          </h2>
          <p className="text-sm sm:text-base text-[#222B2B]/75 mt-3">
            Everything you need to know about setting up Dento OS, migrating records, and using AI-assisted X-ray review.
          </p>
        </div>

        {/* 10 Accordion Questions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#247C70]/40 shadow-sm'
                    : 'bg-white/80 border-[#123D40]/12 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-heading font-bold text-[#123D40] flex items-center gap-3">
                    <span className="text-xs font-mono text-[#247C70] bg-[#DFF2EA] px-2 py-0.5 rounded">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#123D40] text-[#C8E6A0]'
                        : 'bg-[#F0F2EF] text-[#123D40]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#222B2B]/80 leading-relaxed border-t border-[#123D40]/8">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Prompt */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white px-5 py-3.5 rounded-2xl border border-[#123D40]/12 shadow-xs">
            <span className="text-xs sm:text-sm text-[#222B2B]/80">
              Have a specific workflow or sensor compatibility question?
            </span>
            <Button
              variant="secondary"
              size="sm"
              icon={MessageSquare}
              onClick={() => onOpenDemo('FAQ Specialist Question')}
            >
              Ask a Dental Workflow Specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

