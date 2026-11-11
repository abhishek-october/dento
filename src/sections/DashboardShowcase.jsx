import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardList,
  Scan,
  BarChart3,
  Search,
  Plus,
  CheckCircle2,
  AlertCircle,
  Clock,
  Pill,
  FileText,
  Download,
} from 'lucide-react';

const SHOWCASE_TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'patients', label: 'Patients', icon: Users },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'treatments', label: 'Treatment Plans', icon: ClipboardList },
  { id: 'imaging', label: 'Imaging', icon: Scan },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
];

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPatientRow, setSelectedPatientRow] = useState(0);

  return (
    <section
      id="showcase"
      className="py-20 sm:py-24 bg-[#F8F8F3] border-b border-[#123D40]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#247C70] bg-[#DFF2EA] px-3 py-1 rounded-full mb-3">
            Interactive Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
            Experience the unified dental workspace.
          </h2>
          <p className="text-base text-[#222B2B]/75 mt-3">
            Switch between modules below to inspect how Dento OS connects clinical charting, chair scheduling, imaging, and financial reporting.
          </p>
        </div>

        {/* Interactive Tab Selector Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto clinical-scroll pb-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#F0F2EF] p-1.5 rounded-2xl border border-[#123D40]/12">
            {SHOWCASE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#123D40] text-white shadow-sm'
                      : 'text-[#222B2B]/75 hover:text-[#123D40] hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C8E6A0]' : 'text-[#247C70]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-Width Application Window Mockup */}
        <div className="rounded-2xl bg-white border border-[#123D40]/15 shadow-clinical-lg overflow-hidden">
          {/* App Top Bar */}
          <div className="bg-[#123D40] text-[#F8F8F3] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8E6A0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#247C70]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
              </div>
              <span className="text-xs font-mono text-[#DFF2EA]/80">
                app.dento.health/clinic/{activeTab}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs text-[#DFF2EA]">
                <Search className="w-3.5 h-3.5 text-[#C8E6A0]" />
                <span>Search patients, teeth (#11–#48), or invoices...</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#247C70] text-white">
                Dr. Amelia Vance • Lead Clinician
              </span>
            </div>
          </div>

          {/* Tab Panel Body */}
          <div className="p-5 sm:p-8 bg-[#F8F8F3]/70 min-h-[420px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Top KPI Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: "Today's Scheduled Production", value: '$8,940', sub: '24 Appointments across 3 chairs', badge: '+14% vs avg' },
                      { label: 'Patients Checked In / Seen', value: '16 / 24', sub: 'Avg wait time: 4 mins', badge: 'On Schedule' },
                      { label: 'Treatment Plans Accepted', value: '86.4%', sub: '11 of 13 cases signed this week', badge: '$24.8k Pipeline' },
                      { label: 'AI X-Ray Scans Reviewed', value: '38 Scans', sub: '14 Bitewings • 18 PAs • 6 OPGs', badge: '100% Validated' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-[#123D40]/10 shadow-sm">
                        <div className="text-xs text-[#222B2B]/60 font-medium">{kpi.label}</div>
                        <div className="text-2xl font-heading font-bold text-[#123D40] mt-1">
                          {kpi.value}
                        </div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#123D40]/8 text-[11px]">
                          <span className="text-[#222B2B]/65">{kpi.sub}</span>
                          <span className="font-semibold text-[#247C70]">{kpi.badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Morning Huddle & Operatory Status Table */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-8 bg-white rounded-xl border border-[#123D40]/10 p-5 shadow-sm overflow-x-auto clinical-scroll">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-sm font-heading font-bold text-[#123D40]">
                            Live Operatory Chair Status &amp; Clinical Queue
                          </h3>
                          <p className="text-xs text-[#222B2B]/60">
                            Real-time synchronization between front desk, dental assistants, and doctors
                          </p>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DFF2EA] text-[#123D40]">
                          Wednesday Morning Session
                        </span>
                      </div>
                      <table className="w-full text-left border-collapse text-xs min-w-[520px]">
                        <thead>
                          <tr className="border-b border-[#123D40]/10 text-[#222B2B]/60 uppercase text-[10px]">
                            <th className="py-2.5 pr-3">Operatory</th>
                            <th className="py-2.5 px-3">Patient</th>
                            <th className="py-2.5 px-3">Procedure &amp; Tooth</th>
                            <th className="py-2.5 px-3">Imaging</th>
                            <th className="py-2.5 pl-3 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#123D40]/8">
                          {[
                            { chair: 'Chair 01 • Dr. Vance', pt: 'Elena Rostova (34F)', proc: 'Ceramic Crown Prep (#16)', img: 'BW-2 Attached', status: 'In Procedure' },
                            { chair: 'Chair 02 • Dr. Patel', pt: 'Marcus Sterling (42M)', proc: 'Implant Consult (#26)', img: 'Panoramic OPG', status: 'Checked In' },
                            { chair: 'Chair 03 • Dr. Chen', pt: 'Hannah Lindqvist (28F)', proc: 'Clear Aligner Stage 8', img: 'Intraoral Scan', status: 'Ready for Doctor' },
                            { chair: 'Chair 01 • 11:15 AM', pt: 'Devon Brooks (51M)', proc: 'Root Canal Obturation (#36)', img: 'Periapical PA', status: 'Confirmed' },
                          ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-[#F8F8F3]">
                              <td className="py-3 pr-3 font-semibold text-[#123D40]">{row.chair}</td>
                              <td className="py-3 px-3 font-medium">{row.pt}</td>
                              <td className="py-3 px-3 text-[#222B2B]/80">{row.proc}</td>
                              <td className="py-3 px-3">
                                <span className="px-2 py-0.5 rounded bg-[#F0F2EF] text-[#123D40] font-mono text-[10px]">
                                  {row.img}
                                </span>
                              </td>
                              <td className="py-3 pl-3 text-right">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#DFF2EA] text-[#123D40] font-semibold text-[10px]">
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Right 4 cols: Clinical Notes & Prescription Feed */}
                    <div className="lg:col-span-4 bg-white rounded-xl border border-[#123D40]/10 p-5 shadow-sm space-y-4">
                      <h3 className="text-sm font-heading font-bold text-[#123D40]">
                        Recent Clinical Notes &amp; e-Rx
                      </h3>
                      <div className="space-y-3 text-xs">
                        <div className="p-3 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                          <div className="flex items-center justify-between font-semibold text-[#123D40]">
                            <span className="flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-[#247C70]" />
                              SOAP Note • #16 Prep
                            </span>
                            <span className="text-[10px] text-[#222B2B]/55">09:20 AM</span>
                          </div>
                          <p className="text-[11px] text-[#222B2B]/75 mt-1">
                            Local infiltration 2% Lidocaine w/ 1:100k epi. Digital impression captured. Temp crown cemented with TempBond NE.
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-[#DFF2EA]/40 border border-[#247C70]/25">
                          <div className="flex items-center justify-between font-semibold text-[#123D40]">
                            <span className="flex items-center gap-1.5">
                              <Pill className="w-3.5 h-3.5 text-[#247C70]" />
                              Prescription Issued
                            </span>
                            <span className="text-[10px] text-[#247C70] font-semibold">Allergy Checked</span>
                          </div>
                          <p className="text-[11px] text-[#222B2B]/80 mt-1">
                            Rx: Ibuprofen 400mg TID PRN pain (3 days) + Chlorhexidine Gluconate 0.12% Oral Rinse BID.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'patients' && (
                <motion.div
                  key="patients"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                >
                  <div className="lg:col-span-5 bg-white rounded-xl border border-[#123D40]/10 p-4 space-y-2.5">
                    <div className="text-xs font-heading font-bold text-[#123D40] uppercase tracking-wider mb-2">
                      Active Patient Directory
                    </div>
                    {[
                      { name: 'Elena Rostova', id: '#PT-8841', age: '34F', alert: 'Penicillin Allergy', recall: '14 May 2027', bal: '$0.00' },
                      { name: 'Marcus Sterling', id: '#PT-9014', age: '42M', alert: 'No Known Allergies', recall: '02 Apr 2027', bal: '$320.00' },
                      { name: 'Devon Brooks', id: '#PT-7429', age: '51M', alert: 'Hypertension (Controlled)', recall: '19 Feb 2027', bal: '$410.00' },
                    ].map((pt, i) => (
                      <div
                        key={pt.id}
                        onClick={() => setSelectedPatientRow(i)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedPatientRow === i
                            ? 'bg-[#DFF2EA]/50 border-[#247C70]'
                            : 'bg-[#F8F8F3] border-[#123D40]/10 hover:bg-[#F0F2EF]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-sm text-[#123D40]">
                            {pt.name} ({pt.age})
                          </span>
                          <span className="text-[11px] font-mono text-[#247C70]">{pt.id}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs mt-1.5 text-[#222B2B]/70">
                          <span>Alert: {pt.alert}</span>
                          <span>Balance: {pt.bal}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-7 bg-white rounded-xl border border-[#123D40]/10 p-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#123D40]/10">
                      <div>
                        <h4 className="text-lg font-heading font-bold text-[#123D40]">
                          Longitudinal Dental Record &amp; Odontogram Summary
                        </h4>
                        <p className="text-xs text-[#222B2B]/65">
                          Includes medical history, allergies, tooth-wise procedures, signed consents, and family links
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                        Medical Alert: Penicillin Allergy
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                        <div className="text-[#222B2B]/60">Periodontal Baseline</div>
                        <div className="font-bold text-[#123D40] mt-0.5">Generalized 2–3mm • Localized 4mm (#46)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                        <div className="text-[#222B2B]/60">Restorative History</div>
                        <div className="font-bold text-[#123D40] mt-0.5">#16 Crown Prep • #24 MOD Composite</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                        <div className="text-[#222B2B]/60">Patient Attachments</div>
                        <div className="font-bold text-[#247C70] mt-0.5">4 X-Rays • 2 Signed Consents</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'appointments' && (
                <motion.div
                  key="appointments"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl border border-[#123D40]/10 p-5 overflow-x-auto clinical-scroll"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-base font-heading font-bold text-[#123D40]">
                        Multi-Chair Operatory Schedule
                      </h4>
                      <p className="text-xs text-[#222B2B]/65">
                        Drag-and-drop chair allocation with automated SMS/WhatsApp confirmation tracking
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#DFF2EA] text-[#123D40]">
                      96% Chair Utilization Today
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 min-w-[600px] text-xs">
                    {[
                      {
                        chair: 'Chair 01 • Restorative & Endo (Dr. Vance)',
                        slots: [
                          { time: '09:00 – 10:15', pt: 'Elena Rostova', proc: 'Ceramic Crown Prep (#16)', tag: 'In Chair' },
                          { time: '10:30 – 11:15', pt: ' Samuel Cho', proc: 'Composite Restoration (#25)', tag: 'Confirmed' },
                          { time: '11:15 – 12:30', pt: 'Devon Brooks', proc: 'Root Canal Obturation (#36)', tag: 'Confirmed' },
                        ],
                      },
                      {
                        chair: 'Chair 02 • Implants & Surgery (Dr. Patel)',
                        slots: [
                          { time: '09:00 – 09:45', pt: 'Clara Meyer', proc: 'Suture Removal (#46)', tag: 'Completed' },
                          { time: '09:45 – 11:00', pt: 'Marcus Sterling', proc: 'Implant Consult + CBCT (#26)', tag: 'Checked In' },
                          { time: '11:15 – 12:30', pt: 'Arthur Pendelton', proc: 'Surgical Extraction (#38)', tag: 'Confirmed' },
                        ],
                      },
                      {
                        chair: 'Chair 03 • Ortho & Hygiene (Dr. Chen)',
                        slots: [
                          { time: '09:15 – 10:15', pt: 'Nadia Karim', proc: 'Ultrasonic Scaling & Polish', tag: 'Completed' },
                          { time: '10:30 – 11:15', pt: 'Hannah Lindqvist', proc: 'Clear Aligner Check (Stage 8)', tag: 'Checked In' },
                          { time: '11:30 – 12:15', pt: 'Leo Vance', proc: 'Pediatric Sealants (#16, #26)', tag: 'SMS Sent' },
                        ],
                      },
                    ].map((col, idx) => (
                      <div key={idx} className="bg-[#F8F8F3] rounded-xl p-3.5 border border-[#123D40]/10 space-y-2.5">
                        <div className="font-heading font-bold text-[#123D40] pb-2 border-b border-[#123D40]/10">
                          {col.chair}
                        </div>
                        {col.slots.map((slot, sIdx) => (
                          <div key={sIdx} className="bg-white p-3 rounded-lg border border-[#123D40]/10 shadow-xs space-y-1">
                            <div className="flex items-center justify-between text-[10px] font-mono text-[#247C70]">
                              <span>{slot.time}</span>
                              <span className="px-1.5 py-0.2 rounded bg-[#DFF2EA] text-[#123D40] font-sans font-semibold">
                                {slot.tag}
                              </span>
                            </div>
                            <div className="font-bold text-[#123D40]">{slot.pt}</div>
                            <div className="text-[#222B2B]/70 text-[11px]">{slot.proc}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'treatments' && (
                <motion.div
                  key="treatments"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl border border-[#123D40]/10 p-5 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#123D40]/10">
                    <div>
                      <h4 className="text-base font-heading font-bold text-[#123D40]">
                        Multi-Stage Treatment Plan #TP-409 • Devon Brooks
                      </h4>
                      <p className="text-xs text-[#222B2B]/65">
                        Phased clinical sequencing with transparent procedure estimates and digital patient approval
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DFF2EA] text-[#123D40]">
                      e-Signed by Patient • Total Estimate: $2,320
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    {[
                      {
                        phase: 'Phase 1 • Urgent Endodontics',
                        status: 'In Progress',
                        items: [
                          { code: 'D3330', name: 'Molar Root Canal Therapy (#36)', fee: '$980' },
                          { code: 'D2950', name: 'Core Buildup Including Pins (#36)', fee: '$290' },
                        ],
                      },
                      {
                        phase: 'Phase 2 • Full Coverage Restoration',
                        status: 'Scheduled Next Week',
                        items: [
                          { code: 'D2740', name: 'Crown - Porcelain/Ceramic (#36)', fee: '$1,050' },
                        ],
                      },
                      {
                        phase: 'Phase 3 • Preventive Maintenance',
                        status: 'Planned (3 Months)',
                        items: [
                          { code: 'D4910', name: 'Periodontal Maintenance Recall', fee: 'Included / Recall' },
                        ],
                      },
                    ].map((p, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-[#123D40]">{p.phase}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-[#247C70] border border-[#123D40]/10">
                            {p.status}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {p.items.map((it, i) => (
                            <div key={i} className="bg-white p-2.5 rounded-lg border border-[#123D40]/10 flex items-center justify-between gap-2">
                              <div>
                                <span className="text-[10px] font-mono text-[#247C70]">{it.code}</span>
                                <div className="font-medium text-[#123D40]">{it.name}</div>
                              </div>
                              <span className="font-mono font-bold text-[#123D40]">{it.fee}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'imaging' && (
                <motion.div
                  key="imaging"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl border border-[#123D40]/10 p-5 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#123D40]/10">
                    <div>
                      <h4 className="text-base font-heading font-bold text-[#123D40]">
                        Patient Radiographic Archive &amp; Visit Comparison
                      </h4>
                      <p className="text-xs text-[#222B2B]/65">
                        Organize panoramic OPGs, bitewings, and periapicals chronologically by visit
                      </p>
                    </div>
                    <a
                      href="#ai-diagnostics"
                      className="text-xs font-semibold text-[#247C70] hover:underline"
                    >
                      Open Full AI X-Ray Diagnostics Studio ↑
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    {[
                      { type: 'Right Bitewing (BW-2)', tooth: 'Teeth #15–#17, #45–#47', date: 'Today, 08:52 AM', note: 'AI Flag: Region #16 Distal Caries Review' },
                      { type: 'Periapical PA (#36)', tooth: 'Mandibular Left 1st Molar', date: '04 Nov 2026', note: 'Working Length Confirmation • 21.5mm' },
                      { type: 'Panoramic OPG Survey', tooth: 'Full Maxillo-Mandibular Arch', date: '12 May 2026', note: 'Baseline New Patient Examination' },
                    ].map((scan, idx) => (
                      <div key={idx} className="rounded-xl bg-[#123D40] text-[#F8F8F3] p-4 space-y-2 border border-[#247C70]">
                        <div className="flex items-center justify-between text-[10px] text-[#C8E6A0] font-mono">
                          <span>{scan.date}</span>
                          <span>DICOM / HD</span>
                        </div>
                        <div className="font-heading font-bold text-sm text-white">{scan.type}</div>
                        <div className="text-[11px] text-[#DFF2EA]/75">{scan.tooth}</div>
                        <div className="pt-2 border-t border-white/10 text-[11px] text-[#C8E6A0]">
                          {scan.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'reports' && (
                <motion.div
                  key="reports"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl border border-[#123D40]/10 p-5 space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#123D40]/10">
                    <div>
                      <h4 className="text-base font-heading font-bold text-[#123D40]">
                        Practice Financial Analytics &amp; Provider Production
                      </h4>
                      <p className="text-xs text-[#222B2B]/65">
                        Track gross production, net collections, outstanding balances, and chair utilization
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-[#F0F2EF] text-[#123D40]">
                      <Download className="w-3.5 h-3.5 text-[#247C70]" />
                      Export Monthly Ledger (CSV / PDF)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10">
                      <div className="text-[#222B2B]/60">Monthly Gross Production</div>
                      <div className="text-2xl font-heading font-bold text-[#123D40] mt-1">$142,800</div>
                      <div className="text-[11px] text-[#247C70] font-semibold mt-1">
                        94.2% Collection Ratio ($134,517 Collected)
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10">
                      <div className="text-[#222B2B]/60">Treatment Case Acceptance</div>
                      <div className="text-2xl font-heading font-bold text-[#123D40] mt-1">84.6%</div>
                      <div className="text-[11px] text-[#222B2B]/70 mt-1">
                        Up from 68% prior to visual odontogram plans
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10">
                      <div className="text-[#222B2B]/60">Outstanding Patient Balances</div>
                      <div className="text-2xl font-heading font-bold text-[#123D40] mt-1">$8,283</div>
                      <div className="text-[11px] text-[#247C70] font-semibold mt-1">
                        Automated SMS payment links active
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

