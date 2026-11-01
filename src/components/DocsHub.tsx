import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { docsArticles } from '../data/docs';
import { DocArticle } from '../types';
import { CodeViewer } from './CodeViewer';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  Bookmark, 
  Lightbulb, 
  CheckCircle2,
  FolderOpen
} from 'lucide-react';

export const DocsHub: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedArticleId, setSelectedArticleId] = useState<string>(docsArticles[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Group articles by category
  const categories = [
    { id: 'getting-started', label: { es: 'Primeros Pasos', en: 'Getting Started' } },
    { id: 'language-basics', label: { es: 'Conceptos del Lenguaje', en: 'Language Basics' } },
    { id: 'logic-engine', label: { es: 'Motor Lógico & Fórmulas', en: 'Logic Engine & Formulas' } },
    { id: 'nlp', label: { es: 'Procesamiento de Lenguaje Natural', en: 'Natural Language (NLP)' } },
    { id: 'advanced', label: { es: 'Avanzado & Referencia', en: 'Advanced & Reference' } },
  ];

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return docsArticles;
    const q = searchQuery.toLowerCase();
    return docsArticles.filter(art => 
      art.title[language].toLowerCase().includes(q) ||
      art.description[language].toLowerCase().includes(q) ||
      art.content[language].summary.toLowerCase().includes(q)
    );
  }, [searchQuery, language]);

  const currentArticle: DocArticle = 
    docsArticles.find(art => art.id === selectedArticleId) || docsArticles[0];

  const currentIndex = docsArticles.findIndex(art => art.id === currentArticle.id);
  const prevArticle = currentIndex > 0 ? docsArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < docsArticles.length - 1 ? docsArticles[currentIndex + 1] : null;

  return (
    <section id="docs" className="py-24 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs text-cyan-300 font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Centro Oficial de Aprendizaje</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.docs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.docs.subtitle}
          </p>
        </div>

        {/* Documentation Layout: Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Sidebar Navigation */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0c111e] border border-slate-800 p-4 shadow-xl lg:sticky lg:top-24 max-h-[85vh] overflow-y-auto">
            
            {/* Search Input */}
            <div className="relative mb-5">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.docs.searchPlaceholder}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Category Groups */}
            <div className="space-y-6">
              {categories.map((cat) => {
                const articlesInCat = filteredArticles.filter(art => art.category === cat.id);
                if (articlesInCat.length === 0) return null;

                return (
                  <div key={cat.id}>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 px-2 flex items-center gap-1.5">
                      <FolderOpen className="w-3 h-3 text-cyan-400" />
                      <span>{cat.label[language]}</span>
                    </h4>

                    <div className="space-y-1">
                      {articlesInCat.map((art) => (
                        <button
                          key={art.id}
                          onClick={() => {
                            setSelectedArticleId(art.id);
                            // On mobile, scroll down to content
                            if (window.innerWidth < 1024) {
                              document.getElementById('docs-content')?.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
                            selectedArticleId === art.id
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                          }`}
                        >
                          <span className="truncate">{art.title[language]}</span>
                          <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                            selectedArticleId === art.id ? 'text-slate-950' : 'text-slate-600 group-hover:text-slate-400'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Main Article Reader */}
          <div id="docs-content" className="lg:col-span-8 rounded-2xl bg-[#0c111e] border border-slate-800 p-6 sm:p-8 shadow-xl min-h-[600px] flex flex-col justify-between">
            
            {/* Article Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-medium">
                  {currentArticle.categoryLabel[language]}
                </span>
                <span className="text-slate-600 text-xs">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  doc_id: {currentArticle.id}.ls
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {currentArticle.title[language]}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 pb-6 border-b border-slate-800/80">
                {currentArticle.description[language]}
              </p>

              {/* Summary Callout */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-900/30 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                <p>{currentArticle.content[language].summary}</p>
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-8">
                {currentArticle.content[language].sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-cyan-400 rounded-full inline-block"></span>
                      <span>{sec.heading}</span>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {sec.text}
                    </p>

                    {sec.code && (
                      <div className="my-3">
                        <CodeViewer
                          code={sec.code}
                          filename={`${currentArticle.id}_snippet.ls`}
                          showLineNumbers={false}
                          className="border border-slate-800 bg-[#070a14]"
                        />
                      </div>
                    )}

                    {sec.tip && (
                      <div className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-800/50 text-xs text-indigo-200 flex items-start gap-2.5">
                        <Lightbulb className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{sec.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Article Footer: Previous & Next Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              {prevArticle ? (
                <button
                  onClick={() => setSelectedArticleId(prevArticle.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-500 font-mono">{t.docs.previousArticle}</div>
                    <div>{prevArticle.title[language]}</div>
                  </div>
                </button>
              ) : <div />}

              {nextArticle ? (
                <button
                  onClick={() => setSelectedArticleId(nextArticle.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-cyan-300 transition-colors ml-auto"
                >
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 font-mono">{t.docs.nextArticle}</div>
                    <div>{nextArticle.title[language]}</div>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : <div />}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
