import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageView, PrismLogo } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const handleLink = (page: PageView, articleId?: string) => {
    if (onNavigate) {
      onNavigate(page, articleId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 text-xs py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Clean horizontal links & copyright (Like Lenguaje Latino footer) */}
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-slate-600 font-medium">
              <button
                onClick={() => handleLink('home')}
                className="hover:text-sky-600 transition-colors"
              >
                {t.nav.home}
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => handleLink('docs')}
                className="hover:text-sky-600 transition-colors"
              >
                {language === 'es' ? 'Manual Prism' : 'Prism Manual'}
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => handleLink('docs', 'syntax-reference')}
                className="hover:text-sky-600 transition-colors"
              >
                {language === 'es' ? 'Referencia Sintáctica' : 'Syntax Reference'}
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => handleLink('demo')}
                className="hover:text-sky-600 transition-colors"
              >
                Playground
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => handleLink('about')}
                className="hover:text-sky-600 transition-colors"
              >
                {language === 'es' ? 'Sobre Prism' : 'About Prism'}
              </button>
            </div>

            <div className="text-[11px] text-slate-400 space-y-0.5">
              <p>
                Lenguaje Prism, {new Date().getFullYear()} — {t.footer.license}
              </p>
              <p>{t.footer.tagline}</p>
            </div>
          </div>

          {/* Right: Official Full Brand Emblem */}
          <button
            onClick={() => handleLink('home')}
            className="flex items-center focus:outline-none group"
          >
            <PrismLogo
              className="h-8 w-auto transition-transform group-hover:scale-105"
              variant="onLight"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
