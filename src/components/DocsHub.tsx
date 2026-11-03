import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { docsArticles, operatorsReference } from '../data/docs';
import { DocArticle } from '../types';
import { CodeViewer } from './CodeViewer';
import { PrismLogo } from './Navbar';
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';

interface DocsHubProps {
  initialArticleId?: string;
  navVersion?: number;
}

export const DocsHub: React.FC<DocsHubProps> = ({ initialArticleId, navVersion }) => {
  const { language, t } = useLanguage();
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    initialArticleId || docsArticles[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
    } else {
      setSelectedArticleId(docsArticles[0].id);
    }
  }, [initialArticleId, navVersion]);

  const categories = [
    { id: 'getting-started', label: { es: 'PRIMEROS PASOS', en: 'GETTING STARTED' } },
    { id: 'language-basics', label: { es: 'SINTAXIS Y CONCEPTOS', en: 'SYNTAX & CONCEPTS' } },
    { id: 'logic-engine', label: { es: 'MOTOR LÓGICO', en: 'LOGIC ENGINE' } },
    { id: 'nlp', label: { es: 'LENGUAJE NATURAL', en: 'NATURAL LANGUAGE' } },
    { id: 'advanced', label: { es: 'AVANZADO Y REFERENCIA', en: 'ADVANCED & REFERENCE' } },
  ];

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return docsArticles;
    const q = searchQuery.toLowerCase();
    return docsArticles.filter(
      (art) =>
        art.title[language].toLowerCase().includes(q) ||
        art.description[language].toLowerCase().includes(q) ||
        art.content[language].summary.toLowerCase().includes(q)
    );
  }, [searchQuery, language]);

  const currentArticle: DocArticle =
    docsArticles.find((art) => art.id === selectedArticleId) || docsArticles[0];

  const currentIndex = docsArticles.findIndex((art) => art.id === currentArticle.id);
  const prevArticle = currentIndex > 0 ? docsArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < docsArticles.length - 1 ? docsArticles[currentIndex + 1] : null;

  const openArticle = (id: string) => {
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Full Manual Layout: Dark Left Sidebar (Sticky, no scroll) + Clean White Reader
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row lg:items-start">
      {/* LEFT SIDEBAR: MANUAL | Lenguaje Prism (Sticky under h-14 navbar, stays fixed on scroll) */}
      <aside className="w-full lg:w-72 bg-[#252a30] text-slate-200 flex-shrink-0 flex flex-col lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] overflow-hidden">
        {/* Top Blue Manual Header */}
        <div className="bg-[#1b75bb] px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold tracking-wider text-white">
                MANUAL
              </span>
              <span className="text-white/40">|</span>
              <PrismLogo className="h-8 w-auto" variant="onDark" />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.docs.searchPlaceholder}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none shadow-inner"
            />
          </div>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="p-4 space-y-4 overflow-hidden flex-1 text-xs">
          {categories.map((cat) => {
            const articlesInCat = filteredArticles.filter((art) => art.category === cat.id);
            if (articlesInCat.length === 0) return null;

            return (
              <div key={cat.id}>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-2 px-2">
                  {cat.label[language]}
                </h4>
                <ul className="space-y-0.5">
                  {articlesInCat.map((art) => {
                    const isSelected = selectedArticleId === art.id;
                    return (
                      <li key={art.id}>
                        <button
                          onClick={() => openArticle(art.id)}
                          className={`w-full text-left px-2.5 py-1.5 rounded transition-colors ${
                            isSelected
                              ? 'bg-white/10 text-white font-semibold border-l-2 border-sky-400'
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {art.title[language]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* RIGHT CONTENT READER (Clean White Manual Page) */}
      <div className="flex-1 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-8 sm:py-10">
          {/* Article Content */}
          <article>
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded mb-2">
                {currentArticle.categoryLabel[language]}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {currentArticle.title[language]}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                {currentArticle.description[language]}
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200 text-base text-slate-700 leading-relaxed mb-8">
              {currentArticle.content[language].summary}
            </div>

            {/* Article Sections */}
            <div className="space-y-8">
              {currentArticle.content[language].sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                    {sec.heading}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed whitespace-pre-line">
                    {sec.text}
                  </p>
                  {sec.code && (
                    <div className="my-3">
                      <CodeViewer
                        code={sec.code}
                        filename={`${currentArticle.id}.pr`}
                        showLineNumbers={true}
                      />
                    </div>
                  )}
                  {sec.tip && (
                    <div className="p-4 rounded-lg bg-sky-50 border border-sky-200 text-sm text-sky-900 flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{sec.tip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* If viewing 'gramatica-ebnf' or 'especificacion-lexica', also show the clean Operators Table */}
            {(currentArticle.id === 'gramatica-ebnf' || currentArticle.id === 'especificacion-lexica') && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-base font-bold text-slate-800 mb-3">
                  {t.reference.operatorsTableTitle}
                </h3>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-bold">{t.reference.colKeyword}</th>
                        <th className="py-2.5 px-3 font-bold">{t.reference.colSymbol}</th>
                        <th className="py-2.5 px-3 font-bold">{t.reference.colMeaning}</th>
                        <th className="py-2.5 px-3 font-bold">{t.reference.colPrecedence}</th>
                        <th className="py-2.5 px-3 font-bold">{t.reference.colExample}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {operatorsReference.map((op) => (
                        <tr key={op.keyword} className="hover:bg-slate-50">
                          <td className="py-2 px-3 font-mono font-bold text-sky-700">{op.keyword}</td>
                          <td className="py-2 px-3 font-mono text-sm">{op.symbol}</td>
                          <td className="py-2 px-3 text-slate-700">{op.meaning[language]}</td>
                          <td className="py-2 px-3 font-mono text-slate-500">{op.precedence}</td>
                          <td className="py-2 px-3 font-mono text-slate-800">{op.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </article>

          {/* Previous / Next Footer Navigation */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
            {prevArticle ? (
              <button
                onClick={() => openArticle(prevArticle.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:border-sky-500 hover:text-sky-600 text-xs font-semibold text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{prevArticle.title[language]}</span>
              </button>
            ) : (
              <div />
            )}

            {nextArticle ? (
              <button
                onClick={() => openArticle(nextArticle.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 hover:border-sky-500 hover:text-sky-600 text-xs font-semibold text-slate-700 transition-colors ml-auto"
              >
                <span>{nextArticle.title[language]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
