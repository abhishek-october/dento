import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-2xl bg-white border border-[#123D40]/12 p-6 shadow-clinical flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-xl bg-[#DFF2EA] text-[#123D40] flex items-center justify-center">
            <Quote className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F2EF] text-[#222B2B]/70 border border-[#123D40]/10">
            Sample Workflow Feedback
          </span>
        </div>

        <div className="inline-block text-xs font-semibold text-[#247C70] mb-2">
          {testimonial.focusTag}
        </div>

        <blockquote className="text-sm sm:text-base text-[#123D40] font-medium leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="pt-4 border-t border-[#123D40]/10 flex items-center justify-between">
        <div>
          <div className="text-xs font-heading font-bold text-[#123D40]">
            {testimonial.roleTitle}
          </div>
          <div className="text-[11px] text-[#222B2B]/65">{testimonial.practiceType}</div>
        </div>
        <span className="text-[10px] font-mono text-[#247C70] bg-[#DFF2EA]/60 px-2 py-0.5 rounded">
          {testimonial.highlightMetric}
        </span>
      </div>
    </div>
  );
}

