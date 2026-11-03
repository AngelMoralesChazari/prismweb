import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar, PageView } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsLogicScript } from './components/WhatIsLogicScript';
import { Downloads } from './components/Downloads';
import { Playground } from './components/Playground';
import { DocsHub } from './components/DocsHub';
import { Footer } from './components/Footer';

export function AppContent() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [docArticleId, setDocArticleId] = useState<string | undefined>(undefined);
  const [navVersion, setNavVersion] = useState<number>(0);

  const handleNavigate = (page: PageView, articleId?: string) => {
    setActivePage(page);
    setDocArticleId(articleId);
    setNavVersion((v) => v + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {activePage === 'home' && <Hero onNavigate={handleNavigate} />}
        {activePage === 'about' && <WhatIsLogicScript onNavigate={handleNavigate} />}
        {activePage === 'downloads' && <Downloads onNavigate={handleNavigate} />}
        {activePage === 'demo' && <Playground />}
        {activePage === 'docs' && (
          <DocsHub initialArticleId={docArticleId} navVersion={navVersion} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
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
