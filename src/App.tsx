import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar, PageView } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsLogicScript } from './components/WhatIsLogicScript';
import { Downloads } from './components/Downloads';
import { Playground } from './components/Playground';
import { DocsHub } from './components/DocsHub';
import { Footer } from './components/Footer';

interface HistoryNavState {
  page: PageView;
  articleId?: string;
}

const VALID_PAGES: PageView[] = ['home', 'about', 'downloads', 'demo', 'docs'];

function getInitialHistoryState(): HistoryNavState {
  const existing = window.history.state as HistoryNavState | null;
  if (existing && VALID_PAGES.includes(existing.page)) {
    return {
      page: existing.page,
      articleId: existing.articleId,
    };
  }
  return { page: 'home' };
}

export function AppContent() {
  const initial = getInitialHistoryState();
  const [activePage, setActivePage] = useState<PageView>(initial.page);
  const [docArticleId, setDocArticleId] = useState<string | undefined>(initial.articleId);
  const [navVersion, setNavVersion] = useState<number>(0);

  // Initialize first history entry & listen to browser Back/Forward buttons
  useEffect(() => {
    const startState = getInitialHistoryState();
    window.history.replaceState(startState, '', '/');

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as HistoryNavState | null;
      if (state && VALID_PAGES.includes(state.page)) {
        setActivePage(state.page);
        setDocArticleId(state.articleId);
      } else {
        setActivePage('home');
        setDocArticleId(undefined);
      }
      setNavVersion((v) => v + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback(
    (page: PageView, articleId?: string) => {
      const normalizedArticle = page === 'docs' ? articleId : undefined;

      if (activePage !== page || docArticleId !== normalizedArticle) {
        const nextState: HistoryNavState = {
          page,
          articleId: normalizedArticle,
        };
        window.history.pushState(nextState, '', '/');
      }

      setActivePage(page);
      setDocArticleId(normalizedArticle);
      setNavVersion((v) => v + 1);
    },
    [activePage, docArticleId]
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {activePage === 'home' && <Hero onNavigate={handleNavigate} />}
        {activePage === 'about' && <WhatIsLogicScript onNavigate={handleNavigate} />}
        {activePage === 'downloads' && <Downloads onNavigate={handleNavigate} />}
        {activePage === 'demo' && <Playground />}
        {activePage === 'docs' && (
          <DocsHub
            initialArticleId={docArticleId}
            navVersion={navVersion}
            onNavigate={handleNavigate}
          />
        )}
      </main>
      {activePage !== 'docs' && <Footer onNavigate={handleNavigate} />}
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
