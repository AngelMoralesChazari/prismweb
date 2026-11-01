import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { examplesData } from '../data/examples';
import { ExampleItem } from '../types';
import { CodeViewer } from './CodeViewer';
import { 
  FolderGit2, 
  ExternalLink, 
  Play, 
  CheckCircle2, 
  Scale, 
  XCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ExamplesGallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.examples.filterAll },
    { id: 'implication', label: t.examples.filterImplication },
    { id: 'tautology', label: t.examples.filterTautology },
    { id: 'contradiction', label: t.examples.filterContradiction },
    { id: 'disjunction', label: t.examples.filterDisjunction },
    { id: 'nlp', label: t.examples.filterNLP },
  ];

  const filteredExamples = activeCategory === 'all'
    ? examplesData
    : examplesData.filter(ex => ex.category === activeCategory);

  const handleLoadInDemo = (exampleId: string) => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
      // Trigger selection by emitting custom event or clicking tab
      const button = document.querySelector(`button[data-example-id="${exampleId}"]`) as HTMLButtonElement;
      if (button) button.click();
    }
  };

  return (
    <section id="examples" className="py-24 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase & Modelos Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.examples.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.examples.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExamples.map((ex) => (
            <div
              key={ex.id}
              className="rounded-2xl border border-slate-800 bg-[#0d1220] p-6 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Header: Title & Classification Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {ex.title[language]}
                  </h3>

                  {ex.classification === 'contingency' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Contingencia</span>
                    </span>
                  )}
                  {ex.classification === 'tautology' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Tautología</span>
                    </span>
                  )}
                  {ex.classification === 'contradiction' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-950/80 border border-rose-800/60 text-rose-300 text-xs font-semibold">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Contradicción</span>
                    </span>
                  )}
                </div>

                {/* 1. Problem / Natural Language */}
                <div className="mb-4 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs">
                  <span className="font-semibold text-slate-400 block mb-1">
                    {t.examples.problemLabel}
                  </span>
                  <p className="text-slate-200 font-serif italic text-sm">
                    "{ex.naturalLanguage[language]}"
                  </p>
                </div>

                {/* 2. LogicScript Code */}
                <div className="mb-4">
                  <span className="font-semibold text-slate-400 text-xs block mb-1.5">
                    {t.examples.codeLabel}
                  </span>
                  <CodeViewer
                    code={ex.code}
                    filename={`${ex.id}.ls`}
                    showLineNumbers={false}
                    className="border border-slate-800 bg-[#070a14]"
                  />
                </div>

                {/* 3. Resulting Formula Badge */}
                <div className="mb-4 flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="text-slate-400 font-medium">
                    {t.examples.formulaLabel}
                  </span>
                  <code className="text-amber-300 font-mono font-bold text-sm bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {ex.formula}
                  </code>
                </div>

                {/* 4. Explanation */}
                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300 leading-relaxed mb-4">
                  <span className="font-semibold text-slate-400 block mb-1">
                    {t.examples.explanationLabel}
                  </span>
                  <p>{ex.explanation[language]}</p>
                </div>
              </div>

              {/* Action: Load into Demo */}
              <div className="pt-2">
                <a
                  href="#demo"
                  onClick={() => handleLoadInDemo(ex.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-cyan-300 hover:text-cyan-200 transition-all group"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t.examples.loadInDemo}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
