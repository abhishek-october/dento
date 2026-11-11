import React, { useState } from 'react';
import {
  Check,
  AlertTriangle,
  Calendar,
  Clock,
  CreditCard,
  Scan,
  FileText,
  Pill,
  Layers,
} from 'lucide-react';

function FeatureVisualMockup({ featureId }) {
  const [selectedTooth, setSelectedTooth] = useState(16);

  switch (featureId) {
    case 'patient-management':
      return (
        <div className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2.5 text-xs">
          <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#123D40]/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#123D40] text-[#C8E6A0] font-bold flex items-center justify-center text-xs">
                ER
              </div>
              <div>
                <div className="font-semibold text-[#123D40]">Elena Rostova • 34F</div>
                <div className="text-[10px] text-[#222B2B]/60">ID #PT-8841 • Last Visit: 14 Oct</div>
              </div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Penicillin Allergy
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px]">
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10">
              <div className="text-[#222B2B]/55">Medical Hx</div>
              <div className="font-semibold text-[#123D40] mt-0.5">Controlled BP</div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10">
              <div className="text-[#222B2B]/55">Documents</div>
              <div className="font-semibold text-[#123D40] mt-0.5">4 Signed PDFs</div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10">
              <div className="text-[#222B2B]/55">Recall Status</div>
              <div className="font-semibold text-[#247C70] mt-0.5">6-Mo Hygiene</div>
            </div>
          </div>
        </div>
      );

    case 'appointment-management':
      return (
        <div className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#123D40] pb-1">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#247C70]" />
              Multi-Chair Allocation
            </span>
            <span className="text-[10px] text-[#247C70] bg-[#DFF2EA] px-2 py-0.5 rounded">
              SMS Reminders Active
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-white p-2.5 rounded-lg border-l-4 border-l-[#123D40] border border-[#123D40]/10">
              <div className="font-bold text-[#123D40]">Chair 01 • Dr. Vance</div>
              <div className="text-[#222B2B]/70 mt-0.5">09:00 Crown Prep (#16)</div>
              <div className="text-[#247C70] font-medium mt-1">In Operatory</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border-l-4 border-l-[#247C70] border border-[#123D40]/10">
              <div className="font-bold text-[#123D40]">Chair 02 • Dr. Patel</div>
              <div className="text-[#222B2B]/70 mt-0.5">09:45 Implant Consult</div>
              <div className="text-[#222B2B]/60 font-medium mt-1">Confirmed via SMS</div>
            </div>
          </div>
        </div>
      );

    case 'digital-records':
      return (
        <div className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2.5 text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#123D40]">
              Interactive Adult Odontogram (Q1)
            </span>
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#123D40]/15 text-[#247C70]">
              Tooth #{selectedTooth} Selected
            </span>
          </div>
          <div className="grid grid-cols-8 gap-1 bg-white p-2 rounded-lg border border-[#123D40]/10">
            {[18, 17, 16, 15, 14, 13, 12, 11].map((tooth) => {
              const active = selectedTooth === tooth;
              const flagged = tooth === 16 || tooth === 14;
              return (
                <button
                  key={tooth}
                  type="button"
                  onClick={() => setSelectedTooth(tooth)}
                  className={`py-1.5 rounded flex flex-col items-center gap-1 transition-colors ${
                    active
                      ? 'bg-[#123D40] text-white'
                      : flagged
                      ? 'bg-[#DFF2EA] text-[#123D40]'
                      : 'hover:bg-[#F0F2EF] text-[#222B2B]'
                  }`}
                >
                  <span className="w-3.5 h-4 rounded-sm border border-current opacity-80" />
                  <span className="text-[9px] font-mono font-bold">{tooth}</span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between text-[10px] bg-white px-2.5 py-1.5 rounded-lg border border-[#123D40]/10">
            <span className="text-[#222B2B]/75">
              <strong>#{selectedTooth} Note:</strong>{' '}
              {selectedTooth === 16
                ? 'Disto-occlusal ceramic inlay planned • Rx Amoxicillin logged'
                : 'Sound enamel structure • Pocket depth 2mm'}
            </span>
            <Pill className="w-3.5 h-3.5 text-[#247C70] shrink-0" />
          </div>
        </div>
      );

    case 'treatment-planning':
      return (
        <div className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#123D40]">Phased Plan #TP-208</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#DFF2EA] text-[#123D40]">
              Patient Approved
            </span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10 flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#123D40]">Stage 1: Root Canal #36</span>
                <div className="text-[10px] text-[#247C70]">Completed • 04 Nov</div>
              </div>
              <span className="font-mono font-semibold text-[#123D40]">$820</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10 flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#123D40]">Stage 2: Zirconia Crown #36</span>
                <div className="text-[10px] text-amber-700">Scheduled • Next Tuesday</div>
              </div>
              <span className="font-mono font-semibold text-[#123D40]">$1,150</span>
            </div>
          </div>
        </div>
      );

    case 'billing-payments':
      return (
        <div className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2 text-xs">
          <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#123D40]/10">
            <div>
              <div className="text-[10px] text-[#222B2B]/60">Invoice #INV-9402</div>
              <div className="font-bold text-[#123D40] text-sm">$1,420.00</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#DFF2EA] text-[#123D40]">
                Paid $1,100
              </span>
              <div className="text-[10px] text-[#222B2B]/60 mt-0.5">Bal: $320.00</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10 flex items-center justify-between">
              <span className="text-[#222B2B]/70">Family Discount</span>
              <span className="font-semibold text-[#247C70]">-10% Applied</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#123D40]/10 flex items-center justify-between">
              <span className="text-[#222B2B]/70">Card / Split</span>
              <CreditCard className="w-3.5 h-3.5 text-[#123D40]" />
            </div>
          </div>
        </div>
      );

    case 'dental-imaging':
    default:
      return (
        <div className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#123D40]">Visit Comparison Mode</span>
            <span className="text-[10px] text-[#247C70] font-medium">Pre-Op vs Post-Op</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-[#123D40] p-2.5 text-[#DFF2EA] flex flex-col justify-between h-20">
              <div className="flex items-center justify-between text-[9px] text-[#C8E6A0]">
                <span>SCAN 01 • MAY</span>
                <Scan className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-mono">Bitewing #16 Baseline</div>
            </div>
            <div className="rounded-lg bg-[#0d2d30] p-2.5 text-[#DFF2EA] border border-[#C8E6A0]/40 flex flex-col justify-between h-20">
              <div className="flex items-center justify-between text-[9px] text-[#C8E6A0]">
                <span>SCAN 02 • NOV</span>
                <Layers className="w-3 h-3" />
              </div>
              <div className="text-[10px] font-mono">Post-Inlay Fit Verified</div>
            </div>
          </div>
        </div>
      );
  }
}

export default function FeatureCard({ feature }) {
  return (
    <div className="group rounded-2xl bg-white border border-[#123D40]/12 p-6 shadow-clinical hover:shadow-clinical-lg hover:border-[#247C70]/35 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#247C70] bg-[#DFF2EA]/70 px-3 py-1 rounded-full mb-4">
          <span>{feature.badge}</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-heading font-bold text-[#123D40] mb-2.5">
          {feature.title}
        </h3>
        <p className="text-sm text-[#222B2B]/75 leading-relaxed mb-5">
          {feature.description}
        </p>

        {/* Interactive Visual Interface Preview */}
        <div className="mb-5">
          <FeatureVisualMockup featureId={feature.id} />
        </div>
      </div>

      {/* Capabilities Checklist */}
      <ul className="space-y-2 pt-4 border-t border-[#123D40]/10">
        {feature.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#222B2B]/85">
            <span className="w-4 h-4 rounded-full bg-[#DFF2EA] text-[#123D40] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

