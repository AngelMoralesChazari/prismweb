import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { docsArticles, operatorsReference } from '../data/docs';
import { DocArticle } from '../types';
import { CodeViewer } from './CodeViewer';
import { PrismLogo } from './Navbar';
import {
  BookOpen,
  Code2,
  Search,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  LayoutGrid,
} from 'lucide-react';

interface DocsHubProps {
  initialArticleId?: string;
}

export const DocsHub: React.FC<DocsHubProps> = ({ initialArticleId }) => {
  const { language, t } = useLanguage();
  const [viewMode, setViewMode] = useState<'hub' | 'manual'>(initialArticleId ? 'manual' : 'manual');
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    initialArticleId || docsArticles[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
      setViewMode('manual');
    }
  }, [initialArticleId]);

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
    setViewMode('manual');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // VIEW 1: Clean 2-Card Portal (Like Screenshot 3)
  if (viewMode === 'hub') {
    return (
      <div className="min-h-[80vh] bg-slate-50 flex flex-col justify-between">
        <div>
          {/* Top Blue Banner */}
          <div className="bg-prism-hero py-10 text-white border-b border-slate-800/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {language === 'es' ? 'Documentación' : 'Documentation'}
              </h1>
            </div>
          </div>

          {/* 2 Clean Cards (Manual Prism & Referencia Sintáctica) */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Manual Prism */}
              <div
                onClick={() => openArticle('intro')}
                className="bg-white rounded-lg border border-slate-200/90 p-10 text-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center text-slate-400 group-hover:text-sky-600 transition-colors">
                  <BookOpen className="w-14 h-14 stroke-[1.5]" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  {language === 'es' ? 'Manual Prism' : 'Prism Manual'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'La documentación oficial de Prism se encuentra en línea y cubre desde la instalación y primeros pasos hasta traducción de lenguaje natural y tablas de verdad.'
                    : 'The official Prism documentation is available online, covering installation, getting started, natural language translation, and truth tables.'}
                </p>
                <span className="text-xs font-bold text-slate-800 group-hover:text-sky-600 underline underline-offset-4">
                  {language === 'es' ? 'Ver Manual' : 'View Manual'}
                </span>
              </div>

              {/* Card 2: Referencia Sintáctica & Operadores */}
              <div
                onClick={() => openArticle('syntax-reference')}
                className="bg-white rounded-lg border border-slate-200/90 p-10 text-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center text-slate-400 group-hover:text-sky-600 transition-colors">
                  <Code2 className="w-14 h-14 stroke-[1.5]" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  {language === 'es' ? 'Gramática y Operadores' : 'Grammar & Operators'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  {language === 'es'
                    ? 'Referencia rápida de conectores lógicos (not, and, or, impl, iff), precedencia formal, palabras reservadas y bloques vertauto.'
                    : 'Quick reference for logical connectives (not, and, or, impl, iff), formal precedence, reserved keywords, and vertauto blocks.'}
                </p>
                <span className="text-xs font-bold text-slate-800 group-hover:text-sky-600 underline underline-offset-4">
                  {language === 'es' ? 'Ver Referencia' : 'View Reference'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // VIEW 2: Full Manual Layout (Like Screenshot 4: Dark Left Sidebar + Clean White Reader)
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* LEFT SIDEBAR: MANUAL | Lenguaje Prism */}
      <aside className="w-full lg:w-72 bg-[#252a30] text-slate-200 flex-shrink-0 flex flex-col">
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

            <button
              onClick={() => setViewMode('hub')}
              title={language === 'es' ? 'Vista de tarjetas' : 'Hub view'}
              className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          {/* Search Input (Rounded pill like Screenshot 4) */}
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
        <nav className="p-4 space-y-5 overflow-y-auto flex-1 text-xs">
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
                          onClick={() => setSelectedArticleId(art.id)}
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
          {/* Top Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setViewMode('hub')}
                className="text-sky-600 hover:underline font-medium"
              >
                Docs
              </button>
              <span>»</span>
              <button
                onClick={() => setSelectedArticleId('intro')}
                className="text-sky-600 hover:underline font-medium"
              >
                Manual Prism 0.2
              </button>
              <span>»</span>
              <span className="text-slate-700 font-medium">{currentArticle.title[language]}</span>
            </div>

            <button
              onClick={() => setViewMode('hub')}
              className="text-xs text-slate-500 hover:text-sky-600 inline-flex items-center gap-1"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Portal de Documentación' : 'Documentation Portal'}</span>
            </button>
          </div>

          {/* Special Manual Overview Header when on 'intro' (Inspired by Screenshot 4) */}
          {currentArticle.id === 'intro' && (
            <div className="mb-10 pb-8 border-b border-slate-200">
              <blockquote className="text-xs sm:text-sm italic text-slate-600 bg-slate-50 border-l-4 border-sky-500 p-4 rounded-r mb-6">
                "La lógica formal es el cimiento del pensamiento riguroso; Prism la convierte en código claro, verificable y accesible desde el lenguaje humano."
              </blockquote>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                Manual Prism 0.2.0
              </h1>
              <p className="text-sm text-slate-600 mb-4">
                {language === 'es'
                  ? 'Bienvenidos al manual oficial de Prism, un lenguaje declarativo para lógica proposicional y traducción de lenguaje natural.'
                  : 'Welcome to the official manual of Prism, a declarative language for propositional logic and natural language translation.'}
              </p>

              <div className="grid grid-cols-2 sm:w-72 text-xs gap-y-1.5 mb-8">
                <span className="font-bold text-slate-700">
                  {language === 'es' ? 'Lenguaje:' : 'Language:'}
                </span>
                <span className="text-sky-600 font-medium">Prism</span>
                <span className="font-bold text-slate-700">
                  {language === 'es' ? 'Versión:' : 'Version:'}
                </span>
                <span className="text-sky-600 font-medium">Prism 0.2.0</span>
                <span className="font-bold text-slate-700">
                  {language === 'es' ? 'Extensión:' : 'Extension:'}
                </span>
                <span className="font-mono text-slate-700">.prism / .ls</span>
              </div>

              {/* Empezando Quick Links */}
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                {language === 'es' ? 'Empezando' : 'Getting Started'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm mb-8">
                <button
                  onClick={() => setSelectedArticleId('installation')}
                  className="text-left text-sky-600 hover:underline font-medium"
                >
                  {language === 'es' ? 'Instalación y Entorno' : 'Installation & Setup'}
                </button>
                <button
                  onClick={() => setSelectedArticleId('first-program')}
                  className="text-left text-sky-600 hover:underline font-medium"
                >
                  {language === 'es' ? 'Mi Primer Programa' : 'My First Program'}
                </button>
                <button
                  onClick={() => setSelectedArticleId('file-structure')}
                  className="text-left text-sky-600 hover:underline font-medium"
                >
                  {language === 'es' ? 'Estructura de un Programa' : 'Program Structure'}
                </button>
                <button
                  onClick={() => setSelectedArticleId('atomic-propositions')}
                  className="text-left text-sky-600 hover:underline font-medium"
                >
                  {language === 'es' ? 'Proposiciones Atómicas (atom)' : 'Atomic Propositions (atom)'}
                </button>
              </div>

              {/* Categorías Cards (Like Screenshot 4) */}
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                {language === 'es' ? 'Categorías Principales' : 'Core Categories'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div
                  onClick={() => setSelectedArticleId('operators')}
                  className="rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
                >
                  <div className="h-24 bg-gradient-to-r from-sky-600 to-blue-700 flex items-center justify-center text-white font-mono text-2xl font-bold tracking-widest">
                    ¬ ∧ ∨ → ↔
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sky-600 text-base mb-1">
                      {language === 'es' ? 'Operadores Lógicos' : 'Logical Operators'}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {language === 'es'
                        ? 'Conectores proposicionales not, and, or, impl e iff con precedencia formal.'
                        : 'Propositional connectives not, and, or, impl, and iff with formal precedence.'}
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedArticleId('translate-function')}
                  className="rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
                >
                  <div className="h-24 bg-[#1e2430] flex items-center justify-center text-emerald-400 font-mono text-xs px-4">
                    nl linea = "si p entonces q"
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sky-600 text-base mb-1">
                      {language === 'es' ? 'Lenguaje Natural (PLN)' : 'Natural Language (NLP)'}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {language === 'es'
                        ? 'Traducción automática de enunciados en español/inglés hacia fórmulas simbólicas.'
                        : 'Automatic translation of verbal statements into symbolic formulas.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <article>
            <div className="mb-6">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded mb-2">
                {currentArticle.categoryLabel[language]}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {currentArticle.title[language]}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentArticle.description[language]}
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed mb-8">
              {currentArticle.content[language].summary}
            </div>

            {/* Article Sections */}
            <div className="space-y-8">
              {currentArticle.content[language].sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-1.5">
                    {sec.heading}
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {sec.text}
                  </p>
                  {sec.code && (
                    <div className="my-3">
                      <CodeViewer
                        code={sec.code}
                        filename={`${currentArticle.id}.prism`}
                        showLineNumbers={true}
                      />
                    </div>
                  )}
                  {sec.tip && (
                    <div className="p-3.5 rounded-lg bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{sec.tip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* If viewing 'operators' or 'syntax-reference', also show the clean Operators Table */}
            {(currentArticle.id === 'operators' || currentArticle.id === 'syntax-reference') && (
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
