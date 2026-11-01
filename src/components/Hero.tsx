import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CodeViewer } from './CodeViewer';
import { TerminalOutput } from './TerminalOutput';
import { 
  ArrowRight, 
  BookOpen, 
  Play, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu
} from 'lucide-react';

const heroCode = `module hola

use core

atom p = "antecedente"
atom q = "consecuente"

nl linea = "si p entonces q"
let implicacion = translate(linea)

vertauto implicacion {
    steps
    table
    verdict
}`;

const heroTerminalLog = `=== Traducción (NL → fórmula) ===
Entrada: si p entonces q
  - Entrada normalizada: si p entonces q
  - Lexemas LN: [SI("si"), LITERAL("p"), ENTONCES("entonces"), LITERAL("q")]
  - Bloque 1: si p entonces q
  - Tokens bloque: [SI("si"), LITERAL("p"), ENTONCES("entonces"), LITERAL("q")]
  - SemanticMapper: patrón SI_ENTONCES detectado.
  - Nueva proposición: p = "p"
  - Nueva proposición: q = "q"
Proposiciones: {antecedente=p, consecuente=q}
Fórmula emitida: (p → q)

=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p, q]
  - Formalización: (p → q)
  - Construcción del espacio de estados: 2^2 = 4 filas.
  - Fila 1: asignación {p=false, q=false} → V
  - Fila 2: asignación {p=false, q=true} → V
  - Fila 3: asignación {p=true, q=false} → F
  - Fila 4: asignación {p=true, q=true} → V
  - Dictamen final: contingency

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V

=== Dictamen ===
(p → q)  contingency
Clasificación: contingency`;

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [activeHeroView, setActiveHeroView] = useState<'both' | 'code' | 'terminal'>('both');
  const [isRunning, setIsRunning] = useState(false);
  const [showLog, setShowLog] = useState(true);

  const handleSimulateRun = () => {
    setIsRunning(true);
    setShowLog(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowLog(true);
    }, 450);
  };

  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden bg-radial-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Text */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-cyan-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#docs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.hero.exploreDocs}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#what-is"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{t.hero.startLearning}</span>
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-indigo-950/60 hover:bg-indigo-900/70 border border-indigo-700/50 text-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-current" />
              <span>{t.hero.interactiveDemo}</span>
            </a>
          </div>

          {/* Quick value props */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Traductor semántico PLN nativo
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Tablas de verdad en espacio $2^n$
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Clasificación Tautología / Contingencia
            </span>
          </div>
        </div>

        {/* IDE Showcase (Inspired by the Reference Screenshot) */}
        <div className="rounded-2xl border border-slate-800 bg-[#070a14]/90 p-2 sm:p-4 shadow-2xl backdrop-blur-xl">
          
          {/* Top IDE Toolbar */}
          <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-800/80 gap-3 px-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>LogicScript IDE Preview</span>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">
                hola.ls — Entorno de Razonamiento Lógico
              </span>
            </div>

            {/* View toggles & Run button */}
            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => setActiveHeroView('both')}
                  className={`px-2.5 py-1 rounded ${
                    activeHeroView === 'both' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Editor + Terminal
                </button>
                <button
                  onClick={() => setActiveHeroView('code')}
                  className={`px-2.5 py-1 rounded ${
                    activeHeroView === 'code' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Solo Código
                </button>
                <button
                  onClick={() => setActiveHeroView('terminal')}
                  className={`px-2.5 py-1 rounded ${
                    activeHeroView === 'terminal' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Solo Terminal
                </button>
              </div>

              <button
                onClick={handleSimulateRun}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? t.hero.running : t.hero.runCode}</span>
              </button>
            </div>
          </div>

          {/* Editor and Terminal grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Left: Code Viewer */}
            {(activeHeroView === 'both' || activeHeroView === 'code') && (
              <div className={activeHeroView === 'both' ? 'lg:col-span-5' : 'lg:col-span-12'}>
                <CodeViewer
                  code={heroCode}
                  filename="hola.ls"
                  highlightLines={[8, 9, 11]}
                  className="h-full"
                />
              </div>
            )}

            {/* Right: Terminal Output (Exact output from reference image) */}
            {(activeHeroView === 'both' || activeHeroView === 'terminal') && (
              <div className={activeHeroView === 'both' ? 'lg:col-span-7' : 'lg:col-span-12'}>
                {showLog ? (
                  <TerminalOutput output={heroTerminalLog} className="h-full" />
                ) : (
                  <div className="h-[380px] rounded-xl border border-slate-800 bg-[#090d16] flex items-center justify-center font-mono text-cyan-400 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>Evaluando proposiciones y generando tabla de verdad...</span>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Caption underneath IDE */}
          <div className="mt-3 pt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-[11px] text-slate-400 px-2">
            <span>
              Entrada: <code className="text-cyan-300 font-mono">"si p entonces q"</code> → Fórmula: <code className="text-amber-300 font-mono">(p → q)</code>
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              Clasificación resultante: <strong className="text-cyan-300">contingency</strong>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
