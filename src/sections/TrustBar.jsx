import React, { useState } from 'react';
import { Building2, Users, CalendarCheck, Clock, SlidersHorizontal } from 'lucide-react';

const INITIAL_METRICS = [
  {
    id: 'practices',
    label: 'Practices onboarded',
    value: '[ 250+ ]',
    note: 'Editable Placeholder • Independent & Multi-Chair Clinics',
    icon: Building2,
  },
  {
    id: 'patients',
    label: 'Patients managed',
    value: '[ 180,000+ ]',
    note: 'Editable Placeholder • Longitudinal Dental Profiles',
    icon: Users,
  },
  {
    id: 'appointments',
    label: 'Appointments scheduled',
    value: '[ 640,000+ ]',
    note: 'Editable Placeholder • Automated Recall & Chair Flow',
    icon: CalendarCheck,
  },
  {
    id: 'hours',
    label: 'Hours saved',
    value: '[ 12+ hrs / wk ]',
    note: 'Editable Placeholder • Per Practice Administrative Reduction',
    icon: Clock,
  },
];

export default function TrustBar() {
  const [metrics, setMetrics] = useState(INITIAL_METRICS);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (id, nextVal) => {
    setMetrics((prev) =>
      prev.map((m) => (m.id === id ? { ...m, value: nextVal } : m))
    );
  };

  return (
    <section
      aria-label="Platform Metrics and Trust Overview"
      className="py-12 bg-[#F0F2EF] border-b border-[#123D40]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#247C70] mb-1">
              Unified Dental Operating System
            </p>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#123D40]">
              Everything your dental practice needs. In one place.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white text-[#222B2B]/70 border border-[#123D40]/12">
              Metrics shown as editable placeholders until live clinic telemetry is connected
            </span>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs font-semibold text-[#123D40] hover:text-[#247C70] bg-white px-3 py-1.5 rounded-lg border border-[#123D40]/15 inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Done Editing' : 'Customize Placeholders'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 border border-[#123D40]/10 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#222B2B]/75">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#DFF2EA]/70 text-[#123D40] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#247C70]" />
                  </div>
                </div>

                {isEditing ? (
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    aria-label={item.label}
                    className="w-full px-2.5 py-1 text-xl font-heading font-bold text-[#123D40] bg-[#F8F8F3] border border-[#247C70] rounded-md focus:outline-none"
                  />
                ) : (
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#123D40] tracking-tight">
                    {item.value}
                  </div>
                )}

                <div className="mt-2 pt-2 border-t border-[#123D40]/8 flex items-center justify-between text-[10px] text-[#222B2B]/55">
                  <span>{item.note}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

