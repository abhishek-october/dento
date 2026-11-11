import React from 'react';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ tier, onSelectTier }) {
  const isHighlighted = tier.featured;

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
        isHighlighted
          ? 'bg-[#123D40] text-[#F8F8F3] border-2 border-[#247C70] shadow-clinical-lg lg:-translate-y-2'
          : 'bg-white text-[#222B2B] border border-[#123D40]/15 shadow-clinical hover:border-[#247C70]/40 hover:shadow-clinical-lg'
      }`}
    >
      {isHighlighted && (
        <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#C8E6A0] text-[#123D40] shadow-sm">
          <Sparkles className="w-3 h-3" />
          <span>Most Popular for Clinics</span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs font-heading font-bold uppercase tracking-widest ${
              isHighlighted ? 'text-[#C8E6A0]' : 'text-[#247C70]'
            }`}
          >
            {tier.name}
          </span>
          <span
            className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
              isHighlighted
                ? 'bg-white/10 text-[#DFF2EA]'
                : 'bg-[#F0F2EF] text-[#123D40]'
            }`}
          >
            {tier.idealChairs}
          </span>
        </div>

        <h3
          className={`text-xl font-heading font-bold mb-2 ${
            isHighlighted ? 'text-white' : 'text-[#123D40]'
          }`}
        >
          {tier.subtitle}
        </h3>

        <p
          className={`text-xs leading-relaxed mb-6 ${
            isHighlighted ? 'text-[#DFF2EA]/80' : 'text-[#222B2B]/70'
          }`}
        >
          {tier.description}
        </p>

        {/* Tailored Pricing Box */}
        <div
          className={`p-4 rounded-xl mb-6 border ${
            isHighlighted
              ? 'bg-white/5 border-white/10'
              : 'bg-[#F8F8F3] border-[#123D40]/10'
          }`}
        >
          <div className="text-[11px] uppercase tracking-wider font-semibold opacity-75">
            Subscription Model
          </div>
          <div
            className={`text-lg font-heading font-bold mt-0.5 ${
              isHighlighted ? 'text-white' : 'text-[#123D40]'
            }`}
          >
            {tier.pricingLabel}
          </div>
          <div className="text-[11px] opacity-70 mt-0.5">{tier.pricingNote}</div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          <div
            className={`text-xs font-semibold uppercase tracking-wider ${
              isHighlighted ? 'text-[#DFF2EA]/90' : 'text-[#123D40]'
            }`}
          >
            Included Capabilities
          </div>
          <ul className="space-y-2.5">
            {tier.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isHighlighted
                      ? 'bg-[#247C70] text-[#C8E6A0]'
                      : 'bg-[#DFF2EA] text-[#123D40]'
                  }`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className={isHighlighted ? 'text-[#F8F8F3]/90' : 'text-[#222B2B]/85'}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        variant={isHighlighted ? 'accent' : 'primary'}
        size="lg"
        className="w-full justify-center"
        icon={ArrowUpRight}
        onClick={() => onSelectTier(`${tier.name} Plan Inquiry`)}
      >
        {tier.ctaText}
      </Button>
    </div>
  );
}

