import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsLogicScript } from './components/WhatIsLogicScript';
import { Playground } from './components/Playground';
import { Philosophy } from './components/Philosophy';
import { Features } from './components/Features';
import { ExamplesGallery } from './components/ExamplesGallery';
import { DocsHub } from './components/DocsHub';
import { QuickReference } from './components/QuickReference';
import { HistorySection } from './components/HistorySection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';

export function AppContent() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <WhatIsLogicScript />
        <Playground />
        <Philosophy />
        <Features />
        <ExamplesGallery />
        <DocsHub />
        <QuickReference />
        <HistorySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
