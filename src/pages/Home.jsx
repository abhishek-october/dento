import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import ProblemSolution from '../sections/ProblemSolution';
import Features from '../sections/Features';
import AIAnalysis from '../sections/AIAnalysis';
import Workflow from '../sections/Workflow';
import DashboardShowcase from '../sections/DashboardShowcase';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';
import BookDemoModal from '../components/BookDemoModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('');
  const [modalMode, setModalMode] = useState('demo');

  const handleOpenDemo = (context = '') => {
    setModalContext(context);
    setModalMode('demo');
    setModalOpen(true);
  };

  const handleOpenLogin = () => {
    setModalContext('Clinic Portal Login');
    setModalMode('login');
    setModalOpen(true);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F8F8F3] text-[#222B2B] overflow-x-hidden">
      <Navbar onOpenDemo={handleOpenDemo} onOpenLogin={handleOpenLogin} />

      <main className="flex-1">
        <Hero onOpenDemo={handleOpenDemo} />
        <TrustBar />
        <ProblemSolution />
        <Features />
        <AIAnalysis onOpenDemo={handleOpenDemo} />
        <Workflow onOpenDemo={handleOpenDemo} />
        <DashboardShowcase />
        <Testimonials />
        <Pricing onOpenDemo={handleOpenDemo} />
        <FAQ onOpenDemo={handleOpenDemo} />
        <CTA onOpenDemo={handleOpenDemo} />
      </main>

      <Footer onOpenDemo={handleOpenDemo} />

      <BookDemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialContext={modalContext}
        mode={modalMode}
      />
    </div>
  );
}

