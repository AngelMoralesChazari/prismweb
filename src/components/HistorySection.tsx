import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  History, 
  GitBranch, 
  Cpu, 
  Target, 
  Milestone, 
  ArrowUpRight, 
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export const HistorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="history" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Trayectoria de Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.history.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.history.subtitle}
          </p>
        </div>

        {/* 3 Origin Cards: Idea, Problem, Motivation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Origin of Idea */}
          <div className="rounded-2xl bg-[#0e1424] border border-slate-800 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.history.originTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.history.originText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400">
              // Hipótesis pedagógica y formal
            </div>
          </div>

          {/* 2. Problem Solved */}
          <div className="rounded-2xl bg-[#0e1424] border border-slate-800 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.history.problemTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.history.problemText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-indigo-400">
              // Ausencia de tipos proposicionales nativos
            </div>
          </div>

          {/* 3. Design Motivation */}
          <div className="rounded-2xl bg-[#0e1424] border border-slate-800 p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.history.motivationTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.history.motivationText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
              // Claridad, sobriedad y rigor sintáctico
            </div>
          </div>

        </div>

        {/* Technical Evolution Timeline */}
        <div className="rounded-2xl bg-[#0d1220] border border-slate-800 p-6 sm:p-8 shadow-xl mb-16">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Milestone className="w-5 h-5 text-cyan-400" />
            <span>{t.history.timelineTitle}</span>
          </h3>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
            
            {/* Phase 1 */}
            <div className="relative flex items-start gap-4 pl-10">
              <span className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 absolute left-0 text-xs font-bold">
                1
              </span>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 w-full">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {t.history.phase1Title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    Completado
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.history.phase1Desc}
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-start gap-4 pl-10">
              <span className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 absolute left-0 text-xs font-bold">
                2
              </span>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 w-full">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {t.history.phase2Title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    Completado
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.history.phase2Desc}
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-start gap-4 pl-10">
              <span className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 absolute left-0 text-xs font-bold">
                3
              </span>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 w-full">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {t.history.phase3Title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    Completado
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.history.phase3Desc}
                </p>
              </div>
            </div>

            {/* Phase 4 (Current) */}
            <div className="relative flex items-start gap-4 pl-10">
              <span className="w-8 h-8 rounded-full bg-cyan-500 border border-cyan-300 flex items-center justify-center text-slate-950 absolute left-0 text-xs font-extrabold shadow-lg shadow-cyan-500/40">
                4
              </span>
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/80 w-full">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-cyan-300 text-sm sm:text-base">
                    {t.history.phase4Title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700 animate-pulse">
                    Estado Actual
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.history.phase4Desc}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Future Roadmap */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1322] to-[#080d18] border border-indigo-900/40 p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-indigo-400" />
              <span>{t.history.futureTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Las metas técnicas en diseño activo para las próximas etapas del ecosistema LogicScript.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded bg-indigo-950 text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                •
              </span>
              <div>
                <strong className="text-white block mb-1">Motor de Inferencia y Reglas</strong>
                <span className="text-slate-300 leading-relaxed">{t.history.future1}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded bg-indigo-950 text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                •
              </span>
              <div>
                <strong className="text-white block mb-1">Lógica de Predicados (Primer Orden)</strong>
                <span className="text-slate-300 leading-relaxed">{t.history.future2}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded bg-indigo-950 text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                •
              </span>
              <div>
                <strong className="text-white block mb-1">Integración con SAT Solvers</strong>
                <span className="text-slate-300 leading-relaxed">{t.history.future3}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <span className="w-5 h-5 rounded bg-indigo-950 text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                •
              </span>
              <div>
                <strong className="text-white block mb-1">Extensión Multilingüe de PLN</strong>
                <span className="text-slate-300 leading-relaxed">{t.history.future4}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
