import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  ChevronDown,
  Stethoscope,
  Layers,
  Tablet,
  FileCheck2,
  Calendar,
  Scan,
} from 'lucide-react';
import Button from './Button';
import { NAV_SOLUTIONS_MENU, NAV_SPECIALTIES_MENU } from '../assets/dentalData';

export default function Navbar({ onOpenDemo, onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'solutions' | 'specialties' | null

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 z-50">
      {/* DrChrono-Style Top Product Announcement Bar */}
      <div className="bg-[#123D40] text-[#F8F8F3] text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C8E6A0] text-[#123D40]">
              <Sparkles className="w-2.5 h-2.5" />
              New Release
            </span>
            <span className="text-[#DFF2EA]/90 font-medium">
              Introducing Ambient AI Clinical Scribe &amp; Chairside X-Ray Diagnostics for Cloud &amp; iPad EHR
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#DFF2EA]/80">
            <a
              href="#ai-diagnostics"
              onClick={(e) => handleNavClick(e, '#ai-diagnostics')}
              className="text-[#C8E6A0] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Explore AI Suite</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-white/20">|</span>
            <button
              type="button"
              onClick={onOpenLogin}
              className="hover:text-white transition-colors"
            >
              Patient &amp; Provider Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar with DrChrono-style Mega Menus */}
      <header
        onMouseLeave={() => setOpenDropdown(null)}
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F8F3]/95 backdrop-blur-md border-b border-[#123D40]/12 shadow-sm py-3'
            : 'bg-[#F8F8F3]/85 backdrop-blur-sm border-b border-[#123D40]/8 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Left: Brand Logo & Name */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-[#123D40] flex items-center justify-center shadow-sm group-hover:bg-[#247C70] transition-colors">
                <svg
                  className="w-5 h-5 text-[#C8E6A0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.5 4.5C5.2 4.5 3.5 6.4 3.5 9.2C3.5 13 5.4 17.7 7.1 20.8C7.8 22 9.5 22 10.1 20.6L11.7 17C12.3 15.6 14.7 15.6 15.3 17L16.9 20.6C17.5 22 19.2 22 19.9 20.8C21.6 17.7 23.5 13 23.5 9.2C23.5 6.4 21.8 4.5 19.5 4.5C17.4 4.5 15.8 5.7 13.5 5.7C11.2 5.7 9.6 4.5 7.5 4.5Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading font-extrabold text-xl tracking-tight text-[#123D40]">
                    DentoChrono
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.2 rounded bg-[#DFF2EA] text-[#123D40] border border-[#247C70]/25">
                    Cloud EHR
                  </span>
                </div>
                <span className="text-[10px] text-[#222B2B]/60 leading-none">
                  AI-Powered Dental EHR &amp; RCM
                </span>
              </div>
            </a>

            {/* Center: Desktop Mega-Menu Links */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Solutions Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('solutions')}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')
                  }
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/85 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors inline-flex items-center gap-1"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === 'solutions' ? 'rotate-180 text-[#247C70]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Specialties Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('specialties')}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'specialties' ? null : 'specialties')
                  }
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/85 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors inline-flex items-center gap-1"
                >
                  <span>Specialties</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      openDropdown === 'specialties' ? 'rotate-180 text-[#247C70]' : ''
                    }`}
                  />
                </button>
              </div>

              <a
                href="#features"
                onMouseEnter={() => setOpenDropdown(null)}
                onClick={(e) => handleNavClick(e, '#features')}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/85 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors"
              >
                EHR &amp; Features
              </a>

              <a
                href="#ai-diagnostics"
                onMouseEnter={() => setOpenDropdown(null)}
                onClick={(e) => handleNavClick(e, '#ai-diagnostics')}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/85 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors inline-flex items-center gap-1.5"
              >
                <span>AI Diagnostics &amp; Scribe</span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-[#123D40] text-[#C8E6A0]">
                  <Sparkles className="w-2.5 h-2.5" />
                  AI
                </span>
              </a>

              <a
                href="#ipad-mobility"
                onMouseEnter={() => setOpenDropdown(null)}
                onClick={(e) => handleNavClick(e, '#ipad-mobility')}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/85 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors"
              >
                iPad &amp; Mobile
              </a>

              <a
                href="#pricing"
                onMouseEnter={() => setOpenDropdown(null)}
                onClick={(e) => handleNavClick(e, '#pricing')}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/85 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors"
              >
                Pricing
              </a>
            </div>

            {/* Right: Login & Schedule a Demo CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenLogin}
                className="text-sm font-semibold text-[#123D40] hover:text-[#247C70] px-3 py-2 rounded-lg hover:bg-[#123D40]/5 transition-colors"
              >
                Login
              </button>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenDemo('Navbar - Schedule a Demo')}
                icon={ArrowUpRight}
              >
                Schedule a Demo
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#123D40] hover:bg-[#123D40]/10 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Desktop Mega-Menu Panels */}
        <AnimatePresence>
          {openDropdown === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.16 }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-[#123D40]/15 shadow-clinical-lg"
            >
              <div className="max-w-7xl mx-auto px-8 py-6 grid grid-cols-12 gap-6">
                <div className="col-span-4 bg-[#F8F8F3] p-5 rounded-xl border border-[#123D40]/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#247C70]">
                      All-in-One Cloud Platform
                    </span>
                    <h4 className="text-lg font-heading font-bold text-[#123D40] mt-1">
                      Unite Clinical EHR, Practice Management &amp; Billing
                    </h4>
                    <p className="text-xs text-[#222B2B]/75 mt-2 leading-relaxed">
                      Built on DrChrono&apos;s unified cloud architecture—eliminating disconnected silos across the front desk, operatory chairs, and billing office.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(null);
                      onOpenDemo('Solutions Mega-Menu');
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#123D40] hover:text-[#247C70]"
                  >
                    <span>Schedule a Personalized Platform Tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="col-span-8 grid grid-cols-2 gap-3">
                  {NAV_SOLUTIONS_MENU.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="p-3.5 rounded-xl hover:bg-[#F8F8F3] border border-transparent hover:border-[#123D40]/10 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-heading font-bold text-[#123D40] group-hover:text-[#247C70]">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#DFF2EA] text-[#123D40]">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#222B2B]/70 leading-snug">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {openDropdown === 'specialties' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.16 }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-[#123D40]/15 shadow-clinical-lg"
            >
              <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#123D40]/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#247C70]">
                      Tailored Clinical Workflows by Specialty
                    </span>
                    <p className="text-xs text-[#222B2B]/70">
                      Pre-configured SOAP templates, odontograms, consent forms, and procedure codes for every dental discipline
                    </p>
                  </div>
                  <a
                    href="#solutions"
                    onClick={(e) => handleNavClick(e, '#solutions')}
                    className="text-xs font-semibold text-[#123D40] hover:text-[#247C70]"
                  >
                    View All Practice Types →
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {NAV_SPECIALTIES_MENU.map((spec) => (
                    <a
                      key={spec.title}
                      href={spec.href}
                      onClick={(e) => handleNavClick(e, spec.href)}
                      className="p-3.5 rounded-xl bg-[#F8F8F3]/60 hover:bg-[#DFF2EA]/40 border border-[#123D40]/10 transition-colors"
                    >
                      <div className="text-sm font-heading font-bold text-[#123D40]">
                        {spec.title}
                      </div>
                      <div className="text-xs text-[#222B2B]/70 mt-0.5">{spec.sub}</div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden overflow-hidden bg-[#F8F8F3] border-b border-[#123D40]/15 shadow-lg"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5">
                {[
                  { label: 'Core EHR & Practice Pillars', href: '#pillars' },
                  { label: 'All Platform Features', href: '#features' },
                  { label: 'AI Scribe & X-Ray Diagnostics', href: '#ai-diagnostics', badge: 'AI' },
                  { label: 'iPad & Mobile Point-of-Care', href: '#ipad-mobility' },
                  { label: 'Specialties & Practice Types', href: '#solutions' },
                  { label: 'Interactive Workspace Showcase', href: '#showcase' },
                  { label: 'Pricing Plans', href: '#pricing' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#222B2B] hover:bg-[#DFF2EA]/60 hover:text-[#123D40] transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#123D40] text-[#C8E6A0]">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}

                <div className="pt-4 mt-3 border-t border-[#123D40]/10 flex flex-col gap-2.5">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLogin();
                    }}
                  >
                    Provider &amp; Patient Portal Login
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDemo('Mobile Menu - Schedule a Demo');
                    }}
                    icon={ArrowUpRight}
                  >
                    Schedule a Demo
                  </Button>
                </div>
                <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#222B2B]/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#247C70]" />
                  <span>HIPAA-Ready Cloud EHR for Desktop, iPad &amp; Mobile</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
