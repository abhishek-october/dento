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
  Pill,
  FileText,
  Download,
} from 'lucide-react';

const SHOWCASE_TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'patients', label: 'Patients & EHR', icon: Users },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'treatments', label: 'Treatment Plans', icon: ClipboardList },
  { id: 'imaging', label: 'Imaging', icon: Scan },
  { id: 'reports', label: 'RCM & Billing', icon: BarChart3 },
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
            Interactive Cloud EHR Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#123D40]">
            Experience the unified dental EHR and practice workspace.
          </h2>
          <p className="text-base text-[#222B2B]/75 mt-3">
            Switch between modules below to inspect how clinical charting, multi-chair scheduling, dental imaging, and revenue cycle billing work together.
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

        {/* Full-Width Application Window Mockup (Zero Numeric Metrics) */}
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
                cloud.dentochrono.health/workspace/{activeTab}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs text-[#DFF2EA]">
                <Search className="w-3.5 h-3.5 text-[#C8E6A0]" />
                <span>Search patients, odontograms, claims, or eRx...</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#247C70] text-white">
                Dr. Amelia Vance • Lead Clinician
              </span>
            </div>
          </div>

          {/* Tab Panel Body */}
          <div className="p-5 sm:p-8 bg-[#F8F8F3]/70 min-h-[400px]">
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
                  {/* Top Workflow Readiness Row (Qualitative Statuses Only) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: 'Operatory Schedule', value: 'Multi-Chair Sync', sub: 'Restorative, Implant & Hygiene', badge: 'Live Flow' },
                      { label: 'iPad Check-In Kiosk', value: 'Digital Intake', sub: 'Medical Hx & HIPAA Consents', badge: 'Paperless' },
                      { label: 'Clinical Documentation', value: 'Ambient AI Scribe', sub: 'SOAP Notes & Odontograms', badge: 'Auto-Draft' },
                      { label: 'Revenue Cycle & Claims', value: 'Eligibility Verified', sub: 'Rule-Aware Claim Scrubber', badge: 'RCM Active' },
                    ].map((card, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-[#123D40]/10 shadow-sm">
                        <div className="text-xs text-[#222B2B]/60 font-medium">{card.label}</div>
                        <div className="text-lg font-heading font-bold text-[#123D40] mt-1">
                          {card.value}
                        </div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#123D40]/8 text-[11px]">
                          <span className="text-[#222B2B]/65">{card.sub}</span>
                          <span className="font-semibold text-[#247C70]">{card.badge}</span>
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
                          Active Clinic Session
                        </span>
                      </div>
                      <table className="w-full text-left border-collapse text-xs min-w-[520px]">
                        <thead>
                          <tr className="border-b border-[#123D40]/10 text-[#222B2B]/60 uppercase text-[10px]">
                            <th className="py-2.5 pr-3">Operatory</th>
                            <th className="py-2.5 px-3">Patient</th>
                            <th className="py-2.5 px-3">Procedure &amp; Tooth</th>
                            <th className="py-2.5 px-3">Imaging / Chart</th>
                            <th className="py-2.5 pl-3 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#123D40]/8">
                          {[
                            { chair: 'Operatory 01 • Dr. Vance', pt: 'Elena Rostova', proc: 'Ceramic Crown Prep (#16)', img: 'Bitewing Attached', status: 'In Procedure' },
                            { chair: 'Operatory 02 • Dr. Patel', pt: 'Marcus Sterling', proc: 'Implant Consult (#26)', img: 'Panoramic OPG', status: 'Checked In via iPad' },
                            { chair: 'Operatory 03 • Dr. Chen', pt: 'Hannah Lindqvist', proc: 'Clear Aligner Progress Check', img: 'Intraoral Scan', status: 'Ready for Doctor' },
                            { chair: 'Operatory 01 • Next Slot', pt: 'Devon Brooks', proc: 'Root Canal Obturation (#36)', img: 'Periapical PA', status: 'Eligibility Verified' },
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
                            <span className="text-[10px] text-[#247C70]">Signed</span>
                          </div>
                          <p className="text-[11px] text-[#222B2B]/75 mt-1">
                            Local infiltration administered. Digital impression captured. Provisional crown seated and occlusion verified.
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-[#DFF2EA]/40 border border-[#247C70]/25">
                          <div className="flex items-center justify-between font-semibold text-[#123D40]">
                            <span className="flex items-center gap-1.5">
                              <Pill className="w-3.5 h-3.5 text-[#247C70]" />
                              Electronic Prescription (eRx)
                            </span>
                            <span className="text-[10px] text-[#247C70] font-semibold">Allergy Checked</span>
                          </div>
                          <p className="text-[11px] text-[#222B2B]/80 mt-1">
                            Analgesic &amp; antimicrobial oral rinse transmitted electronically to patient&apos;s preferred pharmacy.
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
                      { name: 'Elena Rostova', id: '#PT-8841', alert: 'Penicillin Allergy', portal: 'Portal Active', status: 'Eligibility Verified' },
                      { name: 'Marcus Sterling', id: '#PT-9014', alert: 'No Known Allergies', portal: 'iPad Check-In Done', status: 'Eligibility Verified' },
                      { name: 'Devon Brooks', id: '#PT-7429', alert: 'Controlled Hypertension', portal: 'Consents Signed', status: 'Pre-Auth Approved' },
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
                            {pt.name}
                          </span>
                          <span className="text-[11px] font-mono text-[#247C70]">{pt.id}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs mt-1.5 text-[#222B2B]/70">
                          <span>Alert: {pt.alert}</span>
                          <span className="text-[#247C70] font-medium">{pt.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-7 bg-white rounded-xl border border-[#123D40]/10 p-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#123D40]/10">
                      <div>
                        <h4 className="text-lg font-heading font-bold text-[#123D40]">
                          Longitudinal Dental EHR &amp; Odontogram Summary
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
                        <div className="text-[#222B2B]/60">Periodontal Chart</div>
                        <div className="font-bold text-[#123D40] mt-0.5">Full-Mouth Probing Recorded</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                        <div className="text-[#222B2B]/60">Restorative History</div>
                        <div className="font-bold text-[#123D40] mt-0.5">#16 Crown Prep • #24 MOD Composite</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                        <div className="text-[#222B2B]/60">Patient Portal &amp; Docs</div>
                        <div className="font-bold text-[#247C70] mt-0.5">Digital Consents &amp; X-Rays Linked</div>
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
                        Drag-and-drop chair allocation with automated SMS, email, and portal confirmation tracking
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#DFF2EA] text-[#123D40]">
                      Online Booking &amp; Recall Sync Active
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 min-w-[600px] text-xs">
                    {[
                      {
                        chair: 'Operatory 01 • Restorative & Endo (Dr. Vance)',
                        slots: [
                          { time: 'Morning Session', pt: 'Elena Rostova', proc: 'Ceramic Crown Prep (#16)', tag: 'In Chair' },
                          { time: 'Mid-Morning', pt: 'Samuel Cho', proc: 'Composite Restoration (#25)', tag: 'Confirmed' },
                          { time: 'Late Morning', pt: 'Devon Brooks', proc: 'Root Canal Obturation (#36)', tag: 'Confirmed' },
                        ],
                      },
                      {
                        chair: 'Operatory 02 • Implants & Surgery (Dr. Patel)',
                        slots: [
                          { time: 'Morning Session', pt: 'Clara Meyer', proc: 'Post-Op Suture Check (#46)', tag: 'Completed' },
                          { time: 'Mid-Morning', pt: 'Marcus Sterling', proc: 'Implant Consult + OPG (#26)', tag: 'Checked In' },
                          { time: 'Late Morning', pt: 'Arthur Pendelton', proc: 'Surgical Extraction (#38)', tag: 'Confirmed' },
                        ],
                      },
                      {
                        chair: 'Operatory 03 • Ortho & Hygiene (Dr. Chen)',
                        slots: [
                          { time: 'Morning Session', pt: 'Nadia Karim', proc: 'Periodontal Maintenance & Polish', tag: 'Completed' },
                          { time: 'Mid-Morning', pt: 'Hannah Lindqvist', proc: 'Clear Aligner Progress Check', tag: 'Checked In' },
                          { time: 'Late Morning', pt: 'Leo Vance', proc: 'Preventive Sealants (#16, #26)', tag: 'Reminder Sent' },
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
                        Phased clinical sequencing with CDT procedure mapping and chairside iPad patient approval
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DFF2EA] text-[#123D40]">
                      e-Signed by Patient on iPad
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    {[
                      {
                        phase: 'Phase 1 • Urgent Endodontics',
                        status: 'In Progress',
                        items: [
                          { code: 'CDT D3330', name: 'Molar Root Canal Therapy (#36)', state: 'Charted' },
                          { code: 'CDT D2950', name: 'Core Buildup Including Pins (#36)', state: 'Charted' },
                        ],
                      },
                      {
                        phase: 'Phase 2 • Full Coverage Restoration',
                        status: 'Scheduled Next Visit',
                        items: [
                          { code: 'CDT D2740', name: 'Crown - Porcelain/Ceramic (#36)', state: 'Lab Ordered' },
                        ],
                      },
                      {
                        phase: 'Phase 3 • Preventive Maintenance',
                        status: 'Recall Queued',
                        items: [
                          { code: 'CDT D4910', name: 'Periodontal Maintenance Recall', state: 'Auto-Reminder' },
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
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#DFF2EA] text-[#123D40]">
                                {it.state}
                              </span>
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
                      { type: 'Right Bitewing (BW-2)', tooth: 'Teeth #15–#17, #45–#47', session: 'Current Visit', note: 'AI Flag: Region #16 Distal Caries Review' },
                      { type: 'Periapical PA (#36)', tooth: 'Mandibular Left Molar', session: 'Endodontic Session', note: 'Periradicular & Root Canal Morphology View' },
                      { type: 'Panoramic OPG Survey', tooth: 'Full Maxillo-Mandibular Arch', session: 'Baseline Exam', note: 'Attached to Longitudinal EHR Chart' },
                    ].map((scan, idx) => (
                      <div key={idx} className="rounded-xl bg-[#123D40] text-[#F8F8F3] p-4 space-y-2 border border-[#247C70]">
                        <div className="flex items-center justify-between text-[10px] text-[#C8E6A0] font-mono">
                          <span>{scan.session}</span>
                          <span>DICOM / Cloud</span>
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
                        Revenue Cycle Management (RCM), Eligibility &amp; Claims Center
                      </h4>
                      <p className="text-xs text-[#222B2B]/65">
                        Automated insurance verification, AI claim scrubbing, ERA auto-posting, and patient billing
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-[#F0F2EF] text-[#123D40]">
                      <Download className="w-3.5 h-3.5 text-[#247C70]" />
                      Export Practice Ledger (CSV / PDF)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10">
                      <div className="text-[#222B2B]/60">Pre-Visit Insurance Verification</div>
                      <div className="text-lg font-heading font-bold text-[#123D40] mt-1">
                        Automated Batch Eligibility
                      </div>
                      <div className="text-[11px] text-[#247C70] font-semibold mt-1">
                        Verifies active coverage, deductibles &amp; co-pays prior to arrival
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10">
                      <div className="text-[#222B2B]/60">AI Claim Scrubber &amp; Clearinghouse</div>
                      <div className="text-lg font-heading font-bold text-[#123D40] mt-1">
                        Pre-Submission Validation
                      </div>
                      <div className="text-[11px] text-[#222B2B]/70 mt-1">
                        Checks CDT codes, tooth numbers &amp; required X-ray attachments
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F8F8F3] border border-[#123D40]/10">
                      <div className="text-[#222B2B]/60">Patient Payments &amp; Portal Billing</div>
                      <div className="text-lg font-heading font-bold text-[#123D40] mt-1">
                        Text-to-Pay &amp; Payment Plans
                      </div>
                      <div className="text-[11px] text-[#247C70] font-semibold mt-1">
                        Supports chairside card, HSA/FSA &amp; online portal statements
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
