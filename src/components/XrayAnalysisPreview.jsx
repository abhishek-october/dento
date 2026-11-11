import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scan,
  Upload,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertTriangle,
  Info,
  RefreshCw,
  Sliders,
  ShieldAlert,
  Layers,
} from 'lucide-react';
import { XRAY_MODALITIES } from '../assets/dentalData';

function SyntheticRadiographSVG({ modalityId, highContrast }) {
  const filterClass = highContrast ? 'contrast-125 brightness-110' : '';

  if (modalityId === 'panoramic') {
    return (
      <svg
        viewBox="0 0 800 420"
        className={`w-full h-full object-cover select-none ${filterClass}`}
        aria-label="Synthetic Dental Panoramic OPG Radiograph Demonstration"
      >
        <defs>
          <radialGradient id="opgGlow" cx="50%" cy="48%" r="58%">
            <stop offset="0%" stopColor="#264347" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#0C1C1E" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#050D0E" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="enamelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ECF7F3" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#B8D5CD" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#6D948D" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Radiograph dark background */}
        <rect width="800" height="420" fill="url(#opgGlow)" />

        {/* Subtle Anatomical Arch Curves (Maxilla & Mandible) */}
        <path
          d="M 90 120 Q 400 215 710 120"
          fill="none"
          stroke="rgba(223,242,234,0.14)"
          strokeWidth="44"
          strokeLinecap="round"
        />
        <path
          d="M 75 215 Q 400 370 725 215"
          fill="none"
          stroke="rgba(223,242,234,0.18)"
          strokeWidth="58"
          strokeLinecap="round"
        />

        {/* Upper Arch Teeth (Maxillary #18 to #28) */}
        {[
          { x: 165, w: 26, num: '17' },
          { x: 200, w: 28, num: '16', lesion: true },
          { x: 236, w: 22, num: '15' },
          { x: 266, w: 22, num: '14' },
          { x: 296, w: 20, num: '13' },
          { x: 325, w: 18, num: '12' },
          { x: 352, w: 22, num: '11' },
          { x: 384, w: 22, num: '21' },
          { x: 414, w: 18, num: '22' },
          { x: 440, w: 20, num: '23' },
          { x: 468, w: 22, num: '24' },
          { x: 498, w: 22, num: '25' },
          { x: 528, w: 28, num: '26', apical: true },
          { x: 564, w: 26, num: '27' },
        ].map((t, i) => (
          <g key={`u-${i}`}>
            {/* Roots */}
            <path
              d={`M ${t.x + 4} 165 L ${t.x + t.w / 2 - 3} 122 L ${t.x + t.w / 2 + 2} 165 Z`}
              fill="rgba(205, 230, 222, 0.45)"
            />
            <path
              d={`M ${t.x + t.w / 2} 165 L ${t.x + t.w / 2 + 6} 124 L ${t.x + t.w - 3} 165 Z`}
              fill="rgba(205, 230, 222, 0.42)"
            />
            {/* Crown */}
            <rect
              x={t.x}
              y={162}
              width={t.w}
              height={28}
              rx={6}
              fill="url(#enamelGrad)"
            />
            {t.lesion && (
              <circle cx={t.x + 6} cy={174} r={5.5} fill="#0A181A" opacity="0.88" />
            )}
            {t.apical && (
              <circle cx={t.x + 12} cy={122} r={8} fill="#081315" opacity="0.85" />
            )}
          </g>
        ))}

        {/* Lower Arch Teeth (Mandibular #47 to #37) */}
        {[
          { x: 170, w: 27, num: '47' },
          { x: 205, w: 29, num: '46' },
          { x: 242, w: 21, num: '45' },
          { x: 270, w: 21, num: '44' },
          { x: 298, w: 19, num: '43' },
          { x: 325, w: 17, num: '42' },
          { x: 350, w: 18, num: '41' },
          { x: 382, w: 18, num: '31' },
          { x: 408, w: 17, num: '32' },
          { x: 433, w: 19, num: '33' },
          { x: 460, w: 21, num: '34' },
          { x: 489, w: 21, num: '35' },
          { x: 518, w: 29, num: '36', endo: true },
          { x: 555, w: 27, num: '37' },
        ].map((t, i) => (
          <g key={`l-${i}`}>
            {/* Roots */}
            <path
              d={`M ${t.x + 4} 236 L ${t.x + 7} 285 L ${t.x + t.w / 2} 236 Z`}
              fill="rgba(205, 230, 222, 0.45)"
            />
            <path
              d={`M ${t.x + t.w / 2} 236 L ${t.x + t.w - 6} 285 L ${t.x + t.w - 3} 236 Z`}
              fill="rgba(205, 230, 222, 0.45)"
            />
            {/* Crown */}
            <rect
              x={t.x}
              y={212}
              width={t.w}
              height={27}
              rx={6}
              fill={t.endo ? '#F2FBF7' : 'url(#enamelGrad)'}
            />
          </g>
        ))}

        {/* Radiographic Calibration Grid Lines */}
        <line x1="400" y1="30" x2="400" y2="390" stroke="rgba(200,230,160,0.12)" strokeDasharray="4 4" />
        <line x1="60" y1="200" x2="740" y2="200" stroke="rgba(200,230,160,0.12)" strokeDasharray="4 4" />
      </svg>
    );
  }

  if (modalityId === 'periapical') {
    return (
      <svg
        viewBox="0 0 800 420"
        className={`w-full h-full object-cover select-none ${filterClass}`}
        aria-label="Synthetic Periapical Dental Radiograph Demonstration"
      >
        <defs>
          <radialGradient id="paBack" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#1E383B" />
            <stop offset="100%" stopColor="#061012" />
          </radialGradient>
        </defs>
        <rect width="800" height="420" fill="url(#paBack)" />

        {/* Alveolar Trabecular Bone Band */}
        <path
          d="M 80 185 Q 400 175 720 190 L 720 395 L 80 395 Z"
          fill="rgba(223, 242, 234, 0.14)"
        />

        {/* Tooth #35 (Second Premolar) */}
        <g>
          <path d="M 185 170 L 200 315 L 235 315 L 245 170 Z" fill="rgba(215, 236, 228, 0.52)" />
          <rect x="170" y="105" width="85" height="72" rx="18" fill="rgba(236, 248, 243, 0.86)" />
          <path d="M 205 140 L 218 300" stroke="#0B191B" strokeWidth="7" strokeLinecap="round" opacity="0.65" />
        </g>

        {/* Tooth #36 (First Molar with Periapical Radiolucency at Apex) */}
        <g>
          {/* Periapical Radiolucency Shadow */}
          <circle cx="435" cy="318" r="32" fill="#050D0E" opacity="0.92" />
          {/* Mesial & Distal Roots */}
          <path d="M 335 175 L 348 312 L 382 310 L 395 175 Z" fill="rgba(215, 236, 228, 0.55)" />
          <path d="M 400 175 L 420 315 L 452 312 L 462 175 Z" fill="rgba(215, 236, 228, 0.55)" />
          {/* Molar Crown */}
          <rect x="320" y="98" width="155" height="82" rx="22" fill="rgba(238, 250, 245, 0.9)" />
          {/* Deep Occlusal Caries + Pulp Chamber */}
          <ellipse cx="412" cy="118" rx="24" ry="16" fill="#0A181A" opacity="0.82" />
          <path d="M 365 150 L 430 150 L 435 302 M 365 150 L 362 300" stroke="#081416" strokeWidth="8" fill="none" opacity="0.7" />
        </g>

        {/* Tooth #37 (Second Molar - Healthy Baseline) */}
        <g>
          <path d="M 555 175 L 568 308 L 600 308 L 608 175 Z" fill="rgba(215, 236, 228, 0.55)" />
          <path d="M 612 175 L 626 308 L 656 306 L 665 175 Z" fill="rgba(215, 236, 228, 0.55)" />
          <rect x="540" y="104" width="140" height="78" rx="20" fill="rgba(238, 250, 245, 0.88)" />
        </g>
      </svg>
    );
  }

  // Default: Bitewing X-ray
  return (
    <svg
      viewBox="0 0 800 420"
      className={`w-full h-full object-cover select-none ${filterClass}`}
      aria-label="Synthetic Bitewing Dental Radiograph Demonstration"
    >
      <defs>
        <radialGradient id="bwBack" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#203B3E" />
          <stop offset="100%" stopColor="#071214" />
        </radialGradient>
      </defs>
      <rect width="800" height="420" fill="url(#bwBack)" />

      {/* Upper Alveolar Bone */}
      <rect x="70" y="20" width="660" height="110" fill="rgba(223,242,234,0.12)" />
      {/* Lower Alveolar Bone with Mild Crestal Drop at #46 */}
      <path
        d="M 70 295 L 430 295 L 495 318 L 730 302 L 730 400 L 70 400 Z"
        fill="rgba(223,242,234,0.13)"
      />

      {/* Maxillary Posterior Crowns & Roots (#15, #16, #17) */}
      <g>
        {/* #15 */}
        <path d="M 140 35 L 155 125 L 210 125 L 220 35 Z" fill="rgba(215,236,228,0.48)" />
        <rect x="130" y="115" width="98" height="68" rx="16" fill="rgba(238,250,245,0.88)" />

        {/* #16 (With Distal Interproximal Caries Radiolucency) */}
        <path d="M 275 30 L 290 125 L 395 125 L 415 30 Z" fill="rgba(215,236,228,0.52)" />
        <rect x="265" y="112" width="155" height="72" rx="18" fill="rgba(240,252,247,0.92)" />
        {/* Carious Lesion on Distal #16 */}
        <circle cx="408" cy="148" r="16" fill="#091618" opacity="0.9" />

        {/* #17 */}
        <path d="M 465 32 L 480 125 L 585 125 L 600 32 Z" fill="rgba(215,236,228,0.5)" />
        <rect x="455" y="115" width="150" height="70" rx="18" fill="rgba(238,250,245,0.86)" />
      </g>

      {/* Bitewing Sensor Tab Line */}
      <rect x="60" y="202" width="680" height="10" rx="4" fill="rgba(223,242,234,0.22)" />

      {/* Mandibular Posterior Crowns & Roots (#45, #46, #47) */}
      <g>
        {/* #45 */}
        <path d="M 145 290 L 160 385 L 210 385 L 222 290 Z" fill="rgba(215,236,228,0.48)" />
        <rect x="132" y="232" width="96" height="66" rx="16" fill="rgba(238,250,245,0.86)" />

        {/* #46 */}
        <path d="M 285 295 L 300 390 L 405 390 L 420 295 Z" fill="rgba(215,236,228,0.52)" />
        <rect x="270" y="230" width="158" height="70" rx="18" fill="rgba(240,252,247,0.9)" />

        {/* #47 */}
        <path d="M 475 298 L 490 390 L 590 390 L 605 298 Z" fill="rgba(215,236,228,0.5)" />
        <rect x="460" y="232" width="152" height="68" rx="18" fill="rgba(238,250,245,0.86)" />
      </g>
    </svg>
  );
}

export default function XrayAnalysisPreview() {
  const [selectedModalityId, setSelectedModalityId] = useState('bitewing');
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [activeFindingId, setActiveFindingId] = useState('f-16');
  const [customUploadName, setCustomUploadName] = useState('');

  const currentModality =
    XRAY_MODALITIES.find((m) => m.id === selectedModalityId) || XRAY_MODALITIES[0];

  const triggerSimulatedScan = (nextModalityId, uploadedLabel = '') => {
    setIsScanning(true);
    if (nextModalityId) {
      setSelectedModalityId(nextModalityId);
      const nextMod = XRAY_MODALITIES.find((m) => m.id === nextModalityId);
      if (nextMod && nextMod.findings[0]) {
        setActiveFindingId(nextMod.findings[0].id);
      }
    }
    if (uploadedLabel) {
      setCustomUploadName(uploadedLabel);
    }
    setTimeout(() => {
      setIsScanning(false);
    }, 650);
  };

  const handleSimulatedFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      triggerSimulatedScan(selectedModalityId, file.name);
    }
  };

  return (
    <div className="rounded-2xl bg-[#0D2B2E] border border-white/15 shadow-clinical-dark overflow-hidden text-[#F8F8F3]">
      {/* Top Toolbar: Modality Switcher + Upload + Overlay Controls */}
      <div className="px-4 sm:px-6 py-4 bg-[#091F21] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        {/* Modality Tabs: Bitewing, Panoramic, Periapical */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#123D40]/80 p-1 rounded-xl border border-white/10">
          {XRAY_MODALITIES.map((mod) => {
            const active = mod.id === selectedModalityId;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => {
                  setCustomUploadName('');
                  triggerSimulatedScan(mod.id);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  active
                    ? 'bg-[#C8E6A0] text-[#123D40] shadow-sm'
                    : 'text-[#DFF2EA]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <Scan className="w-3.5 h-3.5" />
                <span>{mod.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Contrast, Toggle Overlays, Simulated Upload */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setHighContrast(!highContrast)}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors inline-flex items-center gap-1.5 ${
              highContrast
                ? 'bg-[#247C70] text-white border-[#C8E6A0]/40'
                : 'bg-white/5 text-[#DFF2EA]/80 border-white/10 hover:bg-white/10'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Enhance Contrast</span>
          </button>

          <button
            type="button"
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors inline-flex items-center gap-1.5 ${
              showAnnotations
                ? 'bg-[#DFF2EA]/15 text-[#C8E6A0] border-[#C8E6A0]/40'
                : 'bg-white/5 text-[#DFF2EA]/70 border-white/10'
            }`}
          >
            {showAnnotations ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>{showAnnotations ? 'AI Overlays On' : 'AI Overlays Hidden'}</span>
          </button>

          {/* Image Upload Interface (Frontend Simulation) */}
          <label className="cursor-pointer px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#247C70] hover:bg-[#1e685e] text-white border border-[#C8E6A0]/30 transition-colors inline-flex items-center gap-1.5">
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Sample X-ray</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleSimulatedFileUpload}
              className="sr-only"
            />
          </label>
        </div>
      </div>

      {/* Main Split Workspace: X-ray Canvas (Left 7 cols) + AI Imaging Assistant Panel (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Radiograph Viewer */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[#071719] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Patient & Sensor Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs">
            <div>
              <div className="font-semibold text-white flex items-center gap-2">
                <span>{currentModality.patientName}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#C8E6A0]">
                  {customUploadName ? `Demo File: ${customUploadName}` : currentModality.sublabel}
                </span>
              </div>
              <div className="text-[11px] text-[#DFF2EA]/60 mt-0.5">
                {currentModality.sensorInfo} • {currentModality.captureDate}
              </div>
            </div>

            <button
              type="button"
              onClick={() => triggerSimulatedScan(selectedModalityId)}
              className="text-[11px] text-[#C8E6A0] hover:underline inline-flex items-center gap-1"
            >
              <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
              <span>Re-run Demo Scan</span>
            </button>
          </div>

          {/* Interactive Radiograph Canvas */}
          <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#050D0E] aspect-[16/9] shadow-inner">
            <SyntheticRadiographSVG
              modalityId={selectedModalityId}
              highContrast={highContrast}
            />

            {/* Simulated Scanning Laser Line */}
            <AnimatePresence>
              {isScanning && (
                <motion.div
                  initial={{ top: '0%', opacity: 0.9 }}
                  animate={{ top: '100%', opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: 'linear' }}
                  className="absolute inset-x-0 h-1 bg-[#C8E6A0] shadow-[0_0_20px_4px_rgba(200,230,160,0.65)] z-30 pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Bounding Boxes & Region of Interest Overlays */}
            {showAnnotations &&
              !isScanning &&
              currentModality.findings.map((finding) => {
                const isSelected = activeFindingId === finding.id;
                const isClear = finding.severity === 'Clear';
                return (
                  <motion.button
                    key={finding.id}
                    type="button"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setActiveFindingId(finding.id)}
                    style={{
                      left: `${finding.coords.x}%`,
                      top: `${finding.coords.y}%`,
                      width: `${finding.coords.w}%`,
                      height: `${finding.coords.h}%`,
                    }}
                    className={`absolute rounded-lg border-2 transition-all focus:outline-none group ${
                      isClear
                        ? 'border-[#247C70] bg-[#247C70]/15'
                        : isSelected
                        ? 'border-[#C8E6A0] bg-[#C8E6A0]/20 shadow-[0_0_0_3px_rgba(200,230,160,0.25)]'
                        : 'border-amber-300/80 bg-amber-300/10 hover:border-[#C8E6A0]'
                    }`}
                    aria-label={`${finding.region}: ${finding.title}`}
                  >
                    <span
                      className={`absolute -top-6 left-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold whitespace-nowrap shadow ${
                        isClear
                          ? 'bg-[#247C70] text-white'
                          : 'bg-[#C8E6A0] text-[#123D40]'
                      }`}
                    >
                      #{finding.toothNumber} • {finding.severity}
                    </span>
                  </motion.button>
                );
              })}

            {/* Watermark Badge inside Radiograph */}
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none text-[10px] text-[#DFF2EA]/70 bg-black/45 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
              <span>SYNTHETIC DEMONSTRATION RADIOGRAPH • NON-DIAGNOSTIC</span>
              <span className="font-mono text-[#C8E6A0]">FDI NOTATION</span>
            </div>
          </div>

          {/* Bottom Summary Bar */}
          <div className="pt-3 mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#DFF2EA]/75">
            <span>{currentModality.summaryNote}</span>
            <span className="text-[11px] font-mono text-[#C8E6A0]">
              Click any highlighted region to inspect annotation
            </span>
          </div>
        </div>

        {/* Right: Annotated Findings Panel ("AI Imaging Assistant") */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-[#123D40] flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#247C70] flex items-center justify-center text-[#C8E6A0] border border-[#C8E6A0]/30">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    AI Imaging Assistant
                  </h4>
                  <p className="text-[11px] text-[#DFF2EA]/70">
                    Illustrative Computer-Aided Radiographic Observations
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#247C70]/50 text-[#C8E6A0] border border-[#C8E6A0]/30">
                { isScanning ? 'Analyzing...' : 'Simulation Ready' }
              </span>
            </div>

            {/* Canonical Quick Reference Findings Summary */}
            <div className="rounded-xl bg-[#0D2B2E] p-3.5 border border-white/10 space-y-1.5 text-xs">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#C8E6A0] mb-1">
                Standardized Region Summary (Illustrative Data)
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="font-mono text-[#DFF2EA]">Region 16:</span>
                <span className="font-medium text-amber-300">Possible carious lesion</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="font-mono text-[#DFF2EA]">Region 26 / 46:</span>
                <span className="font-medium text-[#C8E6A0]">Requires further evaluation</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[#DFF2EA]">Region 36 / 15:</span>
                <span className="font-medium text-[#DFF2EA]/80">
                  No significant finding identified
                </span>
              </div>
            </div>

            {/* Interactive Annotated Findings List */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold text-[#DFF2EA]/80 flex items-center justify-between">
                <span>Annotated Regions of Interest</span>
                <span className="text-[10px] text-[#C8E6A0]">Demo Sample Data</span>
              </div>

              {currentModality.findings.map((finding) => {
                const isSelected = activeFindingId === finding.id;
                return (
                  <div
                    key={finding.id}
                    onClick={() => setActiveFindingId(finding.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/12 border-[#C8E6A0] shadow-sm'
                        : 'bg-white/5 border-white/10 hover:bg-white/8'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-heading font-bold text-white flex items-center gap-1.5">
                        {finding.severity === 'Clear' ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C8E6A0]" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                        )}
                        {finding.region}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-black/30 text-[#C8E6A0]">
                        {finding.confidence}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#C8E6A0] mb-1">
                      {finding.title}
                    </div>
                    <p className="text-[11px] text-[#DFF2EA]/80 leading-relaxed">
                      {finding.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mandatory Clinical Disclaimer Box */}
          <div className="p-3.5 rounded-xl bg-[#091F21] border border-white/15 flex items-start gap-2.5 text-[11px] text-[#DFF2EA]/80 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-[#C8E6A0] shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Clinical Decision Support Disclaimer:</strong>{' '}
              AI-generated observations are intended to support clinical review and do not replace professional diagnosis. All findings must be interpreted and validated by a qualified dental professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

