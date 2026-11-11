import React, { useState } from 'react';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform Overview', href: '#product' },
      { label: 'Interactive Showcase', href: '#showcase' },
      { label: 'How It Works', href: '#workflow' },
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'Book a Live Demo', action: 'demo' },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Patient Management', href: '#features' },
      { label: 'Smart Scheduling', href: '#features' },
      { label: 'Digital Odontograms', href: '#features' },
      { label: 'Treatment Planning', href: '#features' },
      { label: 'Billing & Payments', href: '#features' },
      { label: 'AI X-ray Diagnostics', href: '#ai-diagnostics' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Independent Dentists', href: '#solutions' },
      { label: 'Growing Dental Clinics', href: '#solutions' },
      { label: 'Multi-Chair Practices', href: '#solutions' },
      { label: 'Multi-Location Groups', href: '#solutions' },
      { label: 'Orthodontists & Specialists', href: '#solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Frequently Asked Questions', href: '#faq' },
      { label: 'AI Clinical Disclaimer', href: '#ai-diagnostics' },
      { label: 'Data Migration Guide', modalInfo: 'migration' },
      { label: 'Security & Encryption', modalInfo: 'security' },
      { label: 'Clinician Training', modalInfo: 'training' },
    ],
  },
];

const INFO_DRAWER_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Clinical Data Stewardship & Patient Privacy',
    body: 'Dento OS processes patient health information strictly under clinic controller instructions. All demographic, clinical charting, and radiographic records are isolated per tenant, encrypted in transit (TLS 1.3) and at rest (AES-256), and never sold or shared with third-party advertisers.',
  },
  terms: {
    title: 'Terms and Conditions',
    subtitle: 'Software-as-a-Service Subscription & Clinical Responsibility',
    body: 'Dento OS provides practice management, clinical documentation, and illustrative AI-assisted radiographic review tools. Licensed dental professionals retain sole responsibility for clinical diagnosis, treatment planning, and patient care decisions.',
  },
  migration: {
    title: 'Data Migration Guide',
    subtitle: 'Seamless Transition from Legacy PMS or Paper Charts',
    body: 'Our onboarding team extracts and maps patient demographics, appointment schedules, tooth-level treatment histories, ledger balances, and DICOM/JPEG radiographs into your Dento OS workspace with zero clinic downtime.',
  },
  security: {
    title: 'Security & Cloud Architecture',
    subtitle: 'Enterprise-Grade Protection for Dental Records',
    body: 'Built with role-based access control (RBAC), immutable clinical audit trails, automated multi-region backups, and strict workstation session controls for multi-chair operatories.',
  },
  training: {
    title: 'Clinician & Front-Desk Onboarding',
    subtitle: 'Dedicated Live Walkthroughs for Every Role',
    body: 'Every clinic receives structured onboarding sessions tailored to principal dentists, associate clinicians, dental hygienists, and reception coordinators.',
  },
};

export default function Footer({ onOpenDemo }) {
  const [activeInfoKey, setActiveInfoKey] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleLinkClick = (e, link) => {
    if (link.action === 'demo') {
      e.preventDefault();
      onOpenDemo('Footer Link');
      return;
    }
    if (link.modalInfo) {
      e.preventDefault();
      setActiveInfoKey(link.modalInfo);
      return;
    }
    if (link.href) {
      e.preventDefault();
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterDone(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#123D40] text-[#F8F8F3] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#247C70] flex items-center justify-center border border-[#C8E6A0]/30">
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
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Dento <span className="text-[#C8E6A0] font-normal text-sm">OS</span>
              </span>
            </div>

            <p className="text-sm text-[#DFF2EA]/80 leading-relaxed max-w-sm">
              The intelligent operating system for modern dental clinics. Unifying patient records, multi-chair scheduling, digital odontograms, treatment plans, billing, and AI-assisted X-ray diagnostics.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 text-xs text-[#DFF2EA]/80 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8E6A0]" />
                <a
                  href="mailto:hello@dento.health"
                  className="hover:text-white transition-colors"
                >
                  hello@dento.health
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8E6A0]" />
                <a href="tel:+18005553368" className="hover:text-white transition-colors">
                  +1 (800) 555-DENT • Mon–Sat 8am–7pm
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8E6A0]" />
                <span>San Francisco • Boston • London</span>
              </div>
            </div>

            {/* Product Updates Mini Form */}
            <form onSubmit={handleNewsletter} className="pt-2 max-w-sm">
              <label htmlFor="footer-email" className="block text-xs font-medium text-[#DFF2EA] mb-1.5">
                Subscribe to clinical release notes
              </label>
              {newsletterDone ? (
                <div className="flex items-center gap-2 text-xs text-[#C8E6A0] bg-white/5 px-3 py-2 rounded-lg border border-[#C8E6A0]/30">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed to monthly clinical product updates.</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="doctor@clinic.com"
                    className="flex-1 min-w-0 px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C8E6A0]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#C8E6A0] text-[#123D40] hover:bg-[#b8dc8a] transition-colors shrink-0"
                  >
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#C8E6A0] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href || '#'}
                        onClick={(e) => handleLinkClick(e, link)}
                        className="text-sm text-[#DFF2EA]/75 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        {link.action === 'demo' && <ArrowUpRight className="w-3.5 h-3.5 text-[#C8E6A0]" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Info Modal Box when Privacy/Terms/Resources clicked */}
        {activeInfoKey && INFO_DRAWER_CONTENT[activeInfoKey] && (
          <div className="my-6 p-5 rounded-xl bg-white/10 border border-[#C8E6A0]/30 flex items-start justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C8E6A0]">
                {INFO_DRAWER_CONTENT[activeInfoKey].subtitle}
              </div>
              <h5 className="text-base font-heading font-bold text-white">
                {INFO_DRAWER_CONTENT[activeInfoKey].title}
              </h5>
              <p className="text-xs text-[#DFF2EA]/90 leading-relaxed">
                {INFO_DRAWER_CONTENT[activeInfoKey].body}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveInfoKey(null)}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              aria-label="Close information panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Legal & Social Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFF2EA]/65">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Dento Health Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <button
              type="button"
              onClick={() => setActiveInfoKey('privacy')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveInfoKey('terms')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Terms and Conditions
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                onOpenDemo('LinkedIn Connect');
              }}
              aria-label="Dento OS on LinkedIn"
              className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-[#DFF2EA] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                onOpenDemo('X / Twitter Connect');
              }}
              aria-label="Dento OS on X"
              className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-[#DFF2EA] transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                onOpenDemo('YouTube Product Tours');
              }}
              aria-label="Dento OS on YouTube"
              className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-[#DFF2EA] transition-colors"
            >
              YouTube
            </a>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#247C70]/30 text-[#C8E6A0] border border-[#C8E6A0]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Clinical-Grade Cloud</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

