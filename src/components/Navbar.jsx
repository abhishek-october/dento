import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Button from './Button';

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'AI Diagnostics', href: '#ai-diagnostics', badge: 'AI' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar({ onOpenDemo, onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F8F3]/85 backdrop-blur-md border-b border-[#123D40]/10 shadow-sm py-3'
          : 'bg-[#F8F8F3]/60 backdrop-blur-sm border-b border-transparent py-4'
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
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-bold text-xl tracking-tight text-[#123D40]">
                Dento
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#DFF2EA] text-[#123D40] border border-[#247C70]/20">
                OS
              </span>
            </div>
          </a>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[#222B2B]/80 hover:text-[#123D40] hover:bg-[#123D40]/5 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-[#123D40] text-[#C8E6A0]">
                    <Sparkles className="w-2.5 h-2.5" />
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Right: Login & Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenLogin}
              className="text-sm font-medium text-[#222B2B] hover:text-[#123D40] px-3 py-2 rounded-lg hover:bg-[#123D40]/5 transition-colors"
            >
              Login
            </button>
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenDemo('Navbar CTA')}
              icon={ArrowUpRight}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-[#F8F8F3] border-b border-[#123D40]/15 shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium text-[#222B2B] hover:bg-[#DFF2EA]/60 hover:text-[#123D40] transition-colors"
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
                  Clinic Portal Login
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo('Mobile Menu');
                  }}
                  icon={ArrowUpRight}
                >
                  Book a Demo
                </Button>
              </div>
              <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#222B2B]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#247C70]" />
                <span>Encrypted Cloud Workspace for Modern Dental Practices</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

