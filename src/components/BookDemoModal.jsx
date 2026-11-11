import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Building2,
  User,
  Phone,
  Mail,
  Users,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  Lock,
} from 'lucide-react';
import Button from './Button';

const INITIAL_FORM = {
  clinicName: '',
  contactPerson: '',
  phone: '',
  email: '',
  numDentists: '2–5 Dentists',
  numClinics: '1 Clinic Location',
  interestNote: '',
};

export default function BookDemoModal({ isOpen, onClose, initialContext = '', mode = 'demo' }) {
  const [activeMode, setActiveMode] = useState(mode); // 'demo' | 'login'
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    setActiveMode(mode);
    setSubmitted(false);
    setLoginSuccess(false);
    setErrors({});
    setLoginError('');
  }, [mode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.clinicName.trim()) {
      nextErrors.clinicName = 'Please enter your dental practice or clinic name.';
    }
    if (!formData.contactPerson.trim()) {
      nextErrors.contactPerson = 'Please enter the primary contact person or doctor name.';
    }
    if (!formData.phone.trim() || !/^[0-9+\-() ]{7,20}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitted(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.trim())) {
      setLoginError('Please enter your registered clinic email address.');
      return;
    }
    if (!loginPassword || loginPassword.length < 4) {
      setLoginError('Please enter your workspace password.');
      return;
    }
    setLoginError('');
    setLoginSuccess(true);
  };

  const handleResetAndClose = () => {
    setFormData(INITIAL_FORM);
    setSubmitted(false);
    setLoginSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-[#123D40]/60 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#F8F8F3] border border-[#123D40]/15 shadow-clinical-lg overflow-hidden z-10 my-8"
          >
            {/* Top Bar */}
            <div className="bg-[#123D40] px-6 py-5 text-[#F8F8F3] flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C8E6A0] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {activeMode === 'login'
                      ? 'Dento OS Clinician Workspace'
                      : initialContext
                      ? `Personalized Walkthrough • ${initialContext}`
                      : '1-on-1 Live Product Walkthrough'}
                  </span>
                </div>
                <h3 id="modal-title" className="text-xl font-heading font-bold text-white">
                  {activeMode === 'login'
                    ? 'Sign in to Your Dental Workspace'
                    : 'Book Your Free Dento OS Demo'}
                </h3>
                <p className="text-xs text-[#DFF2EA]/80 mt-1">
                  {activeMode === 'login'
                    ? 'Access your clinic schedule, digital odontograms, and imaging archive.'
                    : 'See how Dento OS connects patient records, scheduling, billing, and AI X-ray review.'}
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="p-1.5 rounded-lg text-[#DFF2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="px-6 pt-4 bg-[#F0F2EF] border-b border-[#123D40]/10 flex gap-2">
              <button
                type="button"
                onClick={() => setActiveMode('demo')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
                  activeMode === 'demo'
                    ? 'border-[#123D40] text-[#123D40]'
                    : 'border-transparent text-[#222B2B]/60 hover:text-[#123D40]'
                }`}
              >
                Schedule a Live Demo
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('login')}
                className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
                  activeMode === 'login'
                    ? 'border-[#123D40] text-[#123D40]'
                    : 'border-transparent text-[#222B2B]/60 hover:text-[#123D40]'
                }`}
              >
                Existing Clinic Login
              </button>
            </div>

            <div className="p-6">
              {activeMode === 'login' ? (
                loginSuccess ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#DFF2EA] text-[#247C70] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-[#123D40]">
                        Interactive Demo Environment
                      </h4>
                      <p className="text-sm text-[#222B2B]/75 max-w-md mx-auto mt-1">
                        We verified <span className="font-medium text-[#123D40]">{loginEmail}</span>. Since this is the public preview site, you can explore the live interactive dashboard and AI X-ray modules right on this page, or request a dedicated sandbox clinic.
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleResetAndClose();
                          const el = document.querySelector('#showcase');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Explore Interactive Dashboard
                      </Button>
                      <Button variant="secondary" onClick={() => setActiveMode('demo')}>
                        Request Dedicated Sandbox
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
                    {loginError && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{loginError}</span>
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="login-email"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Work Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#222B2B]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="login-email"
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="dr.vance@brightsmiledental.com"
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#123D40]/20 focus:outline-none focus:border-[#247C70] focus:ring-2 focus:ring-[#247C70]/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="login-password"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-[#222B2B]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="login-password"
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#123D40]/20 focus:outline-none focus:border-[#247C70] focus:ring-2 focus:ring-[#247C70]/20"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <label className="inline-flex items-center gap-2 text-[#222B2B]/70">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-[#123D40]/30 text-[#247C70] focus:ring-[#247C70]"
                        />
                        <span>Trust this operatory workstation</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setActiveMode('demo')}
                        className="text-[#247C70] font-medium hover:underline"
                      >
                        Need a clinic account?
                      </button>
                    </div>
                    <div className="pt-2">
                      <Button type="submit" variant="primary" size="lg" className="w-full">
                        Sign In to Clinic Portal
                      </Button>
                    </div>
                  </form>
                )
              ) : submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#DFF2EA] border border-[#247C70]/25 text-[#123D40] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#247C70]" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#DFF2EA] text-[#123D40]">
                      Demo Request Confirmed
                    </span>
                    <h4 className="text-xl font-heading font-bold text-[#123D40]">
                      Thank you, {formData.contactPerson}!
                    </h4>
                    <p className="text-sm text-[#222B2B]/75 max-w-md mx-auto">
                      We have reserved a tailored walkthrough for{' '}
                      <span className="font-semibold text-[#123D40]">{formData.clinicName}</span> (
                      {formData.numDentists}, {formData.numClinics}).
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-[#123D40]/10 text-left max-w-md mx-auto space-y-2 text-xs text-[#222B2B]/80">
                    <div className="flex items-center justify-between">
                      <span className="text-[#222B2B]/60">Confirmation sent to:</span>
                      <span className="font-semibold text-[#123D40]">{formData.email}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#222B2B]/60">Contact phone:</span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#222B2B]/60">Configuration profile:</span>
                      <span className="font-medium">
                        {formData.numDentists} • {formData.numClinics}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-center gap-3">
                    <Button variant="primary" onClick={handleResetAndClose}>
                      Return to Platform Overview
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Dentist / Clinic Name */}
                    <div>
                      <label
                        htmlFor="clinicName"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Dentist / Clinic Name <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-[#222B2B]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="clinicName"
                          type="text"
                          value={formData.clinicName}
                          onChange={(e) => {
                            setFormData({ ...formData, clinicName: e.target.value });
                            if (errors.clinicName) setErrors({ ...errors, clinicName: '' });
                          }}
                          placeholder="e.g., Apex Dental Studio"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white border ${
                            errors.clinicName
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-[#123D40]/20 focus:border-[#247C70] focus:ring-[#247C70]/20'
                          } focus:outline-none focus:ring-2`}
                        />
                      </div>
                      {errors.clinicName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.clinicName}</p>
                      )}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label
                        htmlFor="contactPerson"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Contact Person <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#222B2B]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="contactPerson"
                          type="text"
                          value={formData.contactPerson}
                          onChange={(e) => {
                            setFormData({ ...formData, contactPerson: e.target.value });
                            if (errors.contactPerson) setErrors({ ...errors, contactPerson: '' });
                          }}
                          placeholder="e.g., Dr. Amelia Vance"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white border ${
                            errors.contactPerson
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-[#123D40]/20 focus:border-[#247C70] focus:ring-[#247C70]/20'
                          } focus:outline-none focus:ring-2`}
                        />
                      </div>
                      {errors.contactPerson && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.contactPerson}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#222B2B]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="+1 (555) 234-5678"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white border ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-[#123D40]/20 focus:border-[#247C70] focus:ring-[#247C70]/20'
                          } focus:outline-none focus:ring-2`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#222B2B]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="amelia@apexdental.com"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white border ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-[#123D40]/20 focus:border-[#247C70] focus:ring-[#247C70]/20'
                          } focus:outline-none focus:ring-2`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Number of Dentists */}
                    <div>
                      <label
                        htmlFor="numDentists"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Number of Dentists
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[#222B2B]/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="numDentists"
                          value={formData.numDentists}
                          onChange={(e) =>
                            setFormData({ ...formData, numDentists: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white border border-[#123D40]/20 focus:outline-none focus:border-[#247C70] focus:ring-2 focus:ring-[#247C70]/20"
                        >
                          <option value="1 Independent Dentist">1 Independent Dentist</option>
                          <option value="2–5 Dentists">2–5 Dentists</option>
                          <option value="6–15 Dentists">6–15 Dentists</option>
                          <option value="15+ Dentists / Hospital">15+ Dentists / Hospital</option>
                        </select>
                      </div>
                    </div>

                    {/* Number of Clinics */}
                    <div>
                      <label
                        htmlFor="numClinics"
                        className="block text-xs font-semibold text-[#123D40] mb-1.5"
                      >
                        Number of Clinics
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[#222B2B]/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          id="numClinics"
                          value={formData.numClinics}
                          onChange={(e) =>
                            setFormData({ ...formData, numClinics: e.target.value })
                          }
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white border border-[#123D40]/20 focus:outline-none focus:border-[#247C70] focus:ring-2 focus:ring-[#247C70]/20"
                        >
                          <option value="1 Clinic Location">1 Clinic Location</option>
                          <option value="2–3 Clinic Locations">2–3 Clinic Locations</option>
                          <option value="4–10 Clinic Locations">4–10 Clinic Locations</option>
                          <option value="10+ Enterprise Dental Group">
                            10+ Enterprise Dental Group
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      icon={Calendar}
                    >
                      Confirm My Free Demo
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#222B2B]/60 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#247C70] shrink-0" />
                    <span>
                      No obligation. Includes a tailored walkthrough of workflows relevant to your practice size.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

