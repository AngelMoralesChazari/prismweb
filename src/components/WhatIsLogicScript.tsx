import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Atom, 
  MessageSquareCode, 
  Binary, 
  Cpu, 
  Table2, 
  Scale, 
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Check
} from 'lucide-react';

export const WhatIsLogicScript: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Atom,
      title: t.whatIs.card1Title,
      desc: t.whatIs.card1Desc,
      tag: 'atom',
      code: 'atom p = "el cielo está despejado"',
    },
    {
      icon: MessageSquareCode,
      title: t.whatIs.card2Title,
      desc: t.whatIs.card2Desc,
      tag: 'translate()',
      code: 'let f = translate("si llueve entonces moja")',
    },
    {
      icon: Binary,
      title: t.whatIs.card3Title,
      desc: t.whatIs.card3Desc,
      tag: 'formula',
      code: 'formula f = not p and (q or r)',
    },
    {
      icon: Cpu,
      title: t.whatIs.card4Title,
      desc: t.whatIs.card4Desc,
      tag: 'vertauto',
      code: 'vertauto f { steps table verdict }',
    },
    {
      icon: Table2,
      title: t.whatIs.card5Title,
      desc: t.whatIs.card5Desc,
      tag: '2^n filas',
      code: 'Espacio exhaustivo de asignaciones',
    },
    {
      icon: Scale,
      title: t.whatIs.card6Title,
      desc: t.whatIs.card6Desc,
      tag: 'Dictamen',
      code: 'Tautología | Contingencia | Contradicción',
    },
  ];

  return (
    <section id="what-is" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-3">
            <span>Visión General del Lenguaje</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            {t.whatIs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.whatIs.subtitle}
          </p>
        </div>

        {/* Narrative & Conceptual Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {t.whatIs.p1}
            </p>
            <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {t.whatIs.p2}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2 text-cyan-300">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Sin efectos secundarios imperativos</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Verificación formal de razonamientos</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>Diseñado para educación y computación</span>
              </div>
            </div>
          </div>

          {/* Pipeline Graphic */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Pipeline de Razonamiento Simbólico</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-[#0b0f19] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">1. Enunciado Verbal:</span>
                <span className="text-emerald-300 font-semibold">"si p entonces q"</span>
              </div>

              <div className="text-center text-slate-600">↓ translate()</div>

              <div className="p-2.5 rounded-lg bg-[#0b0f19] border border-cyan-800/60 flex items-center justify-between">
                <span className="text-slate-400">2. Fórmula Proposicional:</span>
                <span className="text-cyan-300 font-bold">(p → q)</span>
              </div>

              <div className="text-center text-slate-600">↓ vertauto</div>

              <div className="p-2.5 rounded-lg bg-[#0b0f19] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">3. Matriz Combinatoria:</span>
                <span className="text-amber-300 font-semibold">2^2 = 4 filas</span>
              </div>

              <div className="text-center text-slate-600">↓ Clasificador</div>

              <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-between text-cyan-300 font-bold">
                <span>4. Dictamen:</span>
                <span>contingency</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Feature Pillar Cards */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.whatIs.pillarsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-xl bg-[#0f1524] border border-slate-800/80 p-5 shadow-lg hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {card.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-white mb-2">
                      {card.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-2 pt-3 border-t border-slate-800/60">
                    <code className="text-[11px] font-mono text-cyan-300 block truncate">
                      {card.code}
                    </code>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
