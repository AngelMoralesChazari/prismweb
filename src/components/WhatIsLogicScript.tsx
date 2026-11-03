import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CodeViewer } from './CodeViewer';
import { PageView } from './Navbar';
import {
  Cpu,
  Layers,
  CheckCircle2,
  BookOpen,
  Play,
  ArrowRight,
} from 'lucide-react';

interface AboutPrismProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

export const WhatIsLogicScript: React.FC<AboutPrismProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const canonicalCode = `module nombre # = nombre.pr
use core # carga core.pr

# 1. Enunciado en lenguaje natural
nl premisa = "si llueve llevo paraguas"

# 2. Definición de átomos
atom p = "llueve"
atom q = "paraguas"

# 3. Traducción o formalización
let f = translate(premisa)
formula h = p impl q

# 4. Evaluación formal
vertauto f { steps table verdict }`;

  const pillars = [
    { title: t.whatIs.card1Title, desc: t.whatIs.card1Desc },
    { title: t.whatIs.card2Title, desc: t.whatIs.card2Desc },
    { title: t.whatIs.card3Title, desc: t.whatIs.card3Desc },
    { title: t.whatIs.card4Title, desc: t.whatIs.card4Desc },
    { title: t.whatIs.card5Title, desc: t.whatIs.card5Desc },
    { title: t.whatIs.card6Title, desc: t.whatIs.card6Desc },
  ];

  return (
    <div className="bg-slate-50 min-h-[80vh]">
      {/* Top Blue Banner */}
      <div className="bg-prism-hero py-10 text-white border-b border-slate-800/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t.whatIs.title}</h1>
          <p className="text-sm sm:text-base text-sky-100/90 max-w-2xl">
            {t.whatIs.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro + Code Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-7 rounded-lg border border-slate-200 shadow-sm">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">
              {language === 'es' ? '¿Qué es el Lenguaje Prism?' : 'What is the Prism Language?'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">{t.whatIs.p1}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{t.whatIs.p2}</p>

            {/* Three-Tier Comparison */}
            <div className="pt-2 space-y-2.5">
              <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-0.5">
                  1. {t.philosophy.nlLabel}
                </span>
                <span className="italic text-slate-600">{t.philosophy.nlExample}</span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-0.5">
                  2. {t.philosophy.symbolicLabel}
                </span>
                <code className="font-mono text-sky-700 font-semibold">
                  {t.philosophy.symbolicExample}
                </code>
              </div>
            </div>

            {onNavigate && (
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('docs')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Ir al Manual' : 'Read Manual'}</span>
                </button>
                <button
                  onClick={() => onNavigate('demo')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Probar en Playground' : 'Try in Playground'}</span>
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <CodeViewer code={canonicalCode} filename="nombre.pr" />
          </div>
        </div>

        {/* 6 Clean Pillars */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-5">
            {t.whatIs.pillarsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <h3 className="font-bold text-sm text-slate-800">{pillar.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Evolution / Roadmap Card */}
        <div className="bg-white p-7 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-2">{t.history.title}</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">{t.history.originText}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase1Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase1Desc}</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase2Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase2Desc}</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase3Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase3Desc}</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase4Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
