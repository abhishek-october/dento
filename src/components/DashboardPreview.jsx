import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  Activity,
  TrendingUp,
  Clock,
  CheckCircle2,
  Scan,
  Sparkles,
  FileText,
  ChevronRight,
  Stethoscope,
  Bell,
} from 'lucide-react';
import { HERO_APPOINTMENTS } from '../assets/dentalData';

export default function DashboardPreview({ onSelectXrayDemo }) {
  const [selectedChairFilter, setSelectedChairFilter] = useState('All');
  const [activePatientId, setActivePatientId] = useState('APT-1042');

  const filteredAppointments =
    selectedChairFilter === 'All'
      ? HERO_APPOINTMENTS
      : HERO_APPOINTMENTS.filter((item) => item.chair.includes(selectedChairFilter));

  return (
    <div className="relative w-full">
      {/* Main High-Fidelity SaaS Window */}
      <div className="rounded-2xl bg-white border border-[#123D40]/15 shadow-clinical-lg overflow-hidden">
        {/* Top Window Chrome & Clinic Status Bar */}
        <div className="bg-[#123D40] text-[#F8F8F3] px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8E6A0]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#247C70]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
            </div>
            <div className="h-3.5 w-[1px] bg-white/15" />
            <div className="flex items-center gap-2 text-xs font-medium">
              <Stethoscope className="w-3.5 h-3.5 text-[#C8E6A0]" />
              <span>Apex Dental Studio • Main Operatory Wing</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-md bg-[#247C70]/50 text-[#DFF2EA] border border-[#C8E6A0]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8E6A0] animate-pulse" />
              3 Chairs Active
            </span>
            <div className="w-6 h-6 rounded-full bg-[#DFF2EA] text-[#123D40] text-[10px] font-bold flex items-center justify-center">
              AV
            </div>
          </div>
        </div>

        {/* Workspace Content */}
        <div className="p-4 sm:p-5 bg-[#F8F8F3]/60 space-y-4">
          {/* 4 Metric Cards Row: Today's appointments, Total patients, Pending treatments, Revenue overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-white p-3 rounded-xl border border-[#123D40]/10 shadow-sm">
              <div className="flex items-center justify-between text-[11px] text-[#222B2B]/60 mb-1">
                <span>Today&apos;s Appts</span>
                <Calendar className="w-3.5 h-3.5 text-[#247C70]" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-heading font-bold text-[#123D40]">24</span>
                <span className="text-[10px] font-semibold text-[#247C70] bg-[#DFF2EA] px-1.5 py-0.5 rounded">
                  4 In Clinic
                </span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#123D40]/10 shadow-sm">
              <div className="flex items-center justify-between text-[11px] text-[#222B2B]/60 mb-1">
                <span>Total Patients</span>
                <Users className="w-3.5 h-3.5 text-[#247C70]" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-heading font-bold text-[#123D40]">1,842</span>
                <span className="text-[10px] font-semibold text-[#247C70]">+18 wk</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#123D40]/10 shadow-sm">
              <div className="flex items-center justify-between text-[11px] text-[#222B2B]/60 mb-1">
                <span>Pending Plans</span>
                <Activity className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-heading font-bold text-[#123D40]">19</span>
                <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                  7 Awaiting Sign
                </span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#123D40]/10 shadow-sm">
              <div className="flex items-center justify-between text-[11px] text-[#222B2B]/60 mb-1">
                <span>Daily Revenue</span>
                <TrendingUp className="w-3.5 h-3.5 text-[#247C70]" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-heading font-bold text-[#123D40]">$6,480</span>
                <span className="text-[10px] font-semibold text-[#247C70]">92% Coll.</span>
              </div>
            </div>
          </div>

          {/* Middle Section: Upcoming Appointments & Chair Filter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
            {/* Left 7 cols: Upcoming Appointments List */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-[#123D40]/10 p-3.5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xs font-heading font-bold text-[#123D40] uppercase tracking-wider">
                    Upcoming Appointments
                  </h4>
                  <p className="text-[11px] text-[#222B2B]/60">
                    Click a patient to inspect clinical preparation status
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-[#F0F2EF] p-0.5 rounded-lg text-[10px] font-medium">
                  {['All', 'Chair 01', 'Chair 02'].map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setSelectedChairFilter(filter)}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        selectedChairFilter === filter
                          ? 'bg-[#123D40] text-white'
                          : 'text-[#222B2B]/70 hover:text-[#123D40]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {filteredAppointments.map((apt) => {
                  const isSelected = activePatientId === apt.id;
                  return (
                    <div
                      key={apt.id}
                      onClick={() => setActivePatientId(apt.id)}
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#DFF2EA]/45 border-[#247C70]/40'
                          : 'bg-[#F8F8F3]/60 border-[#123D40]/10 hover:bg-[#F0F2EF]/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="text-[11px] font-mono font-semibold text-[#123D40] bg-white px-2 py-1 rounded border border-[#123D40]/10 shrink-0">
                          {apt.time}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-[#123D40] truncate">
                              {apt.patient}
                            </span>
                            {apt.xrayAttached && (
                              <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-[#123D40]/10 text-[#123D40]">
                                X-Ray
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-[#222B2B]/65 truncate">
                            {apt.procedure} • <span className="text-[#247C70]">{apt.chair}</span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                          apt.statusTone === 'emerald'
                            ? 'bg-[#DFF2EA] text-[#123D40]'
                            : apt.statusTone === 'teal'
                            ? 'bg-[#247C70]/15 text-[#247C70]'
                            : apt.statusTone === 'amber'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-[#F0F2EF] text-[#222B2B]/70'
                        }`}
                      >
                        {apt.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 cols: Revenue Overview & Recent X-ray Uploads & Patient Activity */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Revenue Overview Mini Chart */}
              <div className="bg-white rounded-xl border border-[#123D40]/10 p-3.5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-heading font-bold text-[#123D40]">
                    Revenue Overview
                  </span>
                  <span className="text-[10px] font-semibold text-[#247C70]">Mon – Sat</span>
                </div>
                <div className="flex items-end gap-2 h-16 pt-2 px-1">
                  {[
                    { day: 'M', h: '55%', val: '$4.2k' },
                    { day: 'T', h: '72%', val: '$5.4k' },
                    { day: 'W', h: '88%', val: '$6.5k', active: true },
                    { day: 'T', h: '65%', val: '$4.9k' },
                    { day: 'F', h: '94%', val: '$7.1k' },
                    { day: 'S', h: '48%', val: '$3.6k' },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        title={bar.val}
                        style={{ height: bar.h }}
                        className={`w-full rounded-t-md transition-all ${
                          bar.active ? 'bg-[#123D40]' : 'bg-[#DFF2EA] hover:bg-[#247C70]/60'
                        }`}
                      />
                      <span className="text-[9px] font-medium text-[#222B2B]/60">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent X-ray Uploads & Patient Activity */}
              <div className="bg-white rounded-xl border border-[#123D40]/10 p-3.5 shadow-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-bold text-[#123D40]">
                    Recent X-ray Uploads & Activity
                  </span>
                  <Scan className="w-3.5 h-3.5 text-[#247C70]" />
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#247C70] shrink-0" />
                      <span className="truncate font-medium text-[#123D40]">
                        Rostova, E. • Bitewing #16
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#247C70] shrink-0">
                      AI Reviewed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#C8E6A0] shrink-0" />
                      <span className="truncate font-medium text-[#123D40]">
                        Sterling, M. • Panoramic OPG
                      </span>
                    </div>
                    <span className="text-[10px] text-[#222B2B]/60 shrink-0">12m ago</span>
                  </div>

                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#F8F8F3] border border-[#123D40]/10">
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle2 className="w-3 h-3 text-[#247C70] shrink-0" />
                      <span className="truncate text-[#222B2B]/80">
                        Treatment Plan #TP-409 signed
                      </span>
                    </div>
                    <span className="text-[10px] text-[#222B2B]/60 shrink-0">24m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Floating Card: AI-Assisted Dental X-Ray Analysis Preview */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.25 },
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="mt-4 sm:mt-0 sm:absolute sm:-bottom-7 sm:-left-6 lg:-left-8 z-20 w-full sm:w-80 rounded-2xl bg-[#123D40] text-[#F8F8F3] p-4 shadow-clinical-dark border border-[#C8E6A0]/30"
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#247C70] flex items-center justify-center text-[#C8E6A0]">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-xs font-heading font-bold text-white flex items-center gap-1.5">
                <span>AI X-ray Assistant</span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#C8E6A0]/20 text-[#C8E6A0]">
                  Demo
                </span>
              </div>
              <div className="text-[10px] text-[#DFF2EA]/70">
                Elena Rostova • Bitewing #16–#17
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onSelectXrayDemo}
            className="text-[11px] font-semibold text-[#C8E6A0] hover:underline inline-flex items-center gap-0.5"
          >
            <span>Inspect</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Simulated Mini Radiograph Visual with Bounding Box */}
        <div className="relative rounded-xl bg-[#0B2224] border border-white/10 p-2.5 flex items-center gap-3">
          <div className="relative w-20 h-16 rounded-lg bg-[#071618] border border-white/10 overflow-hidden shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 80" className="w-full h-full">
              {/* Synthetic Molar Teeth Crowns & Roots */}
              <path
                d="M18 18 C15 10, 34 10, 34 18 L32 45 C30 56, 26 56, 25 44 L23 55 C21 62, 17 55, 18 42 Z"
                fill="rgba(223,242,234,0.68)"
              />
              <path
                d="M50 16 C46 8, 72 8, 70 18 L68 48 C66 60, 61 58, 59 44 L56 58 C53 64, 49 56, 50 42 Z"
                fill="rgba(223,242,234,0.75)"
              />
              {/* Simulated Carious Radiolucency on Distal #16 */}
              <circle cx="66" cy="24" r="5" fill="rgba(11,34,36,0.85)" />
            </svg>
            {/* Bounding box overlay */}
            <div className="absolute top-2.5 right-3 w-6 h-6 rounded border-2 border-[#C8E6A0] bg-[#C8E6A0]/15 animate-pulse" />
          </div>

          <div className="min-w-0 flex-1 space-y-1 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#C8E6A0]">Region 16 (Distal)</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-[#DFF2EA]">
                Review
              </span>
            </div>
            <p className="text-[#DFF2EA]/85 leading-snug text-[10px]">
              Possible interproximal radiolucency detected. Flagged for clinician review.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

