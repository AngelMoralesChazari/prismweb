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

const PAGE_TO_PATH: Record<PageView, string> = {
  home: '/',
  about: '/sobre-prism',
  downloads: '/descarga',
  demo: '/playground',
  docs: '/documentacion',
};

function parseLocationToState(): HistoryNavState {
  const rawPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (rawPath === '/sobre-prism' || rawPath === '/about') {
    return { page: 'about' };
  }
  if (rawPath === '/descarga' || rawPath === '/downloads') {
    return { page: 'downloads' };
  }
  if (rawPath === '/playground' || rawPath === '/demo') {
    return { page: 'demo' };
  }
  if (rawPath === '/documentacion' || rawPath === '/docs') {
    return { page: 'docs' };
  }
  if (rawPath.startsWith('/documentacion/') || rawPath.startsWith('/docs/')) {
    const parts = rawPath.split('/').filter(Boolean);
    return { page: 'docs', articleId: parts[1] };
  }

  return { page: 'home' };
}

function buildPath(page: PageView, articleId?: string): string {
  if (page === 'docs' && articleId && articleId !== 'intro') {
    return `/documentacion/${articleId}`;
  }
  return PAGE_TO_PATH[page] || '/';
}

export function AppContent() {
  const initial = parseLocationToState();
  const [activePage, setActivePage] = useState<PageView>(initial.page);
  const [docArticleId, setDocArticleId] = useState<string | undefined>(initial.articleId);
  const [navVersion, setNavVersion] = useState<number>(0);

  // Initialize first history entry & listen to browser Back/Forward buttons
  useEffect(() => {
    const currentState = parseLocationToState();
    window.history.replaceState(
      currentState,
      '',
      buildPath(currentState.page, currentState.articleId)
    );

    const handlePopState = (event: PopStateEvent) => {
      const state: HistoryNavState = event.state || parseLocationToState();
      setActivePage(state.page);
      setDocArticleId(state.articleId);
      setNavVersion((v) => v + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback(
    (page: PageView, articleId?: string) => {
      const normalizedArticle = page === 'docs' ? articleId : undefined;
      const nextPath = buildPath(page, normalizedArticle);
      const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

      if (currentPath !== nextPath || activePage !== page || docArticleId !== normalizedArticle) {
        window.history.pushState(
          { page, articleId: normalizedArticle } satisfies HistoryNavState,
          '',
          nextPath
        );
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
