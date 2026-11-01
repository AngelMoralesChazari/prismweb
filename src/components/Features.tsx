import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CodeViewer } from './CodeViewer';
import { 
  Sparkles, 
  MessageSquare, 
  Atom, 
  Binary, 
  Cpu, 
  Table2, 
  Workflow, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const featuresList = [
    {
      id: 'nlp',
      icon: MessageSquare,
      title: t.features.f1Title,
      desc: t.features.f1Desc,
      badge: 'Nativo',
      code: `nl linea = "si p entonces q"
let implicacion = translate(linea)`,
    },
    {
      id: 'atom',
      icon: Atom,
      title: t.features.f2Title,
      desc: t.features.f2Desc,
      badge: 'Primitiva',
      code: `atom p = "el sistema está activo"
atom q = "la base de datos responde"`,
    },
    {
      id: 'formula',
      icon: Binary,
      title: t.features.f3Title,
      desc: t.features.f3Desc,
      badge: 'Sintaxis',
      code: `// Operadores: not, and, or, impl, iff
formula ley = not (p and q) iff (not p or not q)`,
    },
    {
      id: 'vertauto',
      icon: Cpu,
      title: t.features.f4Title,
      desc: t.features.f4Desc,
      badge: 'Motor Formal',
      code: `vertauto implicacion {
    steps
    table
    verdict
}`,
    },
    {
      id: 'table',
      icon: Table2,
      title: t.features.f5Title,
      desc: t.features.f5Desc,
      badge: '2^n Estados',
      code: `p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V`,
    },
    {
      id: 'rules',
      icon: Workflow,
      title: t.features.f6Title,
      desc: t.features.f6Desc,
      badge: 'En Evolución (Roadmap)',
      isEvolution: true,
      code: `// Diseño arquitectónico de reglas deductivas
rule modus_tollens {
    when (p impl q) and not q
    then not p
}
// run modus_tollens`,
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs text-cyan-300 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capacidades Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all group ${
                  item.isEvolution
                    ? 'bg-[#0f1422] border-indigo-900/50 hover:border-indigo-700'
                    : 'bg-[#0d1220] border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      item.isEvolution
                        ? 'bg-indigo-950/80 border border-indigo-800 text-indigo-400'
                        : 'bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      item.isEvolution
                        ? 'bg-indigo-950 text-indigo-300 border-indigo-800 font-semibold'
                        : 'bg-slate-900 text-cyan-300 border-slate-800'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-2">
                  <CodeViewer
                    code={item.code}
                    filename={`${item.id}.ls`}
                    showLineNumbers={false}
                    className="border border-slate-800/80 bg-[#070a14]"
                  />
                  {item.isEvolution && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-indigo-300">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Característica en especificación y desarrollo activo.</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
