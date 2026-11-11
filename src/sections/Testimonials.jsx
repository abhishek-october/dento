import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const SAMPLE_TESTIMONIALS = [
  {
    id: 't-1',
    focusTag: '01 • Less Administrative Work',
    quote:
      'Consolidating our front-desk intake, clinical SOAP notes, and treatment invoicing into one workspace cut our end-of-day reconciliation time in half. Our clinicians finish their notes before the next patient sits down.',
    roleTitle: 'Principal General Dentist (Sample Persona)',
    practiceType: '2-Chair Independent Dental Practice • Placeholder Content',
    highlightMetric: 'Less Admin Work',
  },
  {
    id: 't-2',
    focusTag: '02 • Better Patient Record Management',
    quote:
      'Having the interactive odontogram, allergy alerts, past prescriptions, and bitewing X-rays unified on a single screen means we never have to switch between sensor software and paper charts chairside.',
    roleTitle: 'Clinical Director & Prosthodontist (Sample Persona)',
    practiceType: 'Multi-Chair Specialty Clinic • Placeholder Content',
    highlightMetric: 'Unified Records',
  },
  {
    id: 't-3',
    focusTag: '03 • Easier Appointment Tracking',
    quote:
      'Color-coded chair allocation and automated recall reminders transformed how we coordinate hygiene visits and multi-stage root canal follow-ups across four operatories.',
    roleTitle: 'Practice Operations Coordinator (Sample Persona)',
    practiceType: 'Multi-Dentist Family Clinic • Placeholder Content',
    highlightMetric: 'Smarter Scheduling',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-[#F0F2EF] border-b border-[#123D40]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-white px-3 py-1 rounded-full mb-3 border border-[#123D40]/10">
              Clinician Experience • Sample Content
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
              Designed around the rhythm of real dental practices.
            </h2>
          </div>

          <div className="text-xs text-[#222B2B]/65 bg-white px-3.5 py-2 rounded-xl border border-[#123D40]/10 max-w-md">
            <strong>Transparency Note:</strong> The cards below are clearly marked sample workflow testimonials illustrating target clinical outcomes until verified customer case studies are published.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

