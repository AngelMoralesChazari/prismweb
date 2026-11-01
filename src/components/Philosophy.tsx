import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CodeViewer } from './CodeViewer';
import { 
  Lightbulb, 
  ArrowRight, 
  FileText, 
  Binary, 
  Code2, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const philosophyCode = `atom p = "llueve"
atom q = "llevo paraguas"

formula f = p impl q

vertauto f`;

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-300 font-medium mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Fundamentos & Visión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.philosophy.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* Introduction text */}
        <div className="max-w-4xl mx-auto mb-14 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
          <p>{t.philosophy.intro}</p>
        </div>

        {/* 3 Conceptual Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Step 1 */}
          <div className="p-6 rounded-xl bg-[#0d1322] border border-slate-800 relative group hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              {t.philosophy.step1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.philosophy.step1Desc}
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl bg-[#0d1322] border border-slate-800 relative group hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 mb-4">
              <Binary className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              {t.philosophy.step2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.philosophy.step2Desc}
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl bg-[#0d1322] border border-cyan-800/60 relative group hover:border-cyan-600/80 transition-colors shadow-lg shadow-cyan-950/20">
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-cyan-300 mb-2">
              {t.philosophy.step3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.philosophy.step3Desc}
            </p>
          </div>
        </div>

        {/* 3-Tier Side-by-Side Comparison Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#070a14] p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t.philosophy.comparisonHeadline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Observa cómo un enunciado real pasa de la intuición humana a la verificación formal computable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* 1. Lenguaje Natural */}
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Nivel 1: {t.philosophy.nlLabel}
                </span>
                <div className="p-4 rounded-lg bg-[#0b0f19] border border-slate-800 text-slate-200 font-serif italic text-base my-3">
                  {t.philosophy.nlExample}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Comprensible para humanos, pero sujeto a ambigüedad y dependiente del contexto situacional.
              </p>
            </div>

            {/* 2. Representación Simbólica */}
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Nivel 2: {t.philosophy.symbolicLabel}
                </span>
                <div className="p-4 rounded-lg bg-[#0b0f19] border border-indigo-900/40 text-indigo-300 font-mono text-lg font-bold my-3 flex items-center justify-center">
                  {t.philosophy.symbolicExample}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Notación matemática exacta que formaliza la relación condicional entre dos proposiciones independientes.
              </p>
            </div>

            {/* 3. Código LogicScript */}
            <div className="rounded-xl bg-slate-900/90 border border-cyan-800/60 p-5 flex flex-col justify-between shadow-lg shadow-cyan-950/20">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-semibold block mb-2">
                  Nivel 3: {t.philosophy.lsLabel}
                </span>
                <div className="my-2">
                  <CodeViewer
                    code={philosophyCode}
                    filename="paraguas.ls"
                    showLineNumbers={false}
                    className="border border-slate-800 bg-[#090d18]"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Código declarativo limpio, tipado y directamente computable por el motor de inferencia de LogicScript.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
            En LogicScript, no programas bucles ni estructuras booleanas imperativas: declaras proposiciones y el lenguaje computa el espacio de verdad por ti.
          </div>
        </div>

      </div>
    </section>
  );
};
