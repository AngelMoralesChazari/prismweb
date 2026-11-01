import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { examplesData } from '../data/examples';
import { ExampleItem } from '../types';
import { CodeViewer } from './CodeViewer';
import { TerminalOutput } from './TerminalOutput';
import { 
  Play, 
  RotateCcw, 
  Table, 
  Terminal, 
  CheckCircle, 
  Info, 
  GitCommit, 
  Cpu, 
  Scale, 
  Check, 
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Playground: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedExampleId, setSelectedExampleId] = useState<string>(examplesData[0].id);
  const [activeTab, setActiveTab] = useState<'terminal' | 'table' | 'pipeline' | 'verdict'>('terminal');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const currentExample: ExampleItem = 
    examplesData.find(ex => ex.id === selectedExampleId) || examplesData[0];

  const handleSelectPreset = (id: string) => {
    setSelectedExampleId(id);
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 300);
  };

  const handleRun = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
    }, 400);
  };

  // Get keys of atomic propositions for truth table headers
  const atomKeys = currentExample.truthTable.length > 0 
    ? Object.keys(currentExample.truthTable[0].assignments) 
    : [];

  return (
    <section id="demo" className="py-20 relative bg-[#090d18] border-y border-slate-800/80">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs text-cyan-300 font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive IDE Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.demo.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.demo.subtitle}
          </p>

          {/* Technical disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{t.demo.notice}</span>
          </div>
        </div>

        {/* Preset Selector Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              {t.demo.selectPreset}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {examplesData.map((ex) => (
              <button
                key={ex.id}
                onClick={() => handleSelectPreset(ex.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedExampleId === ex.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                {ex.title[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Main IDE Container */}
        <div className="rounded-2xl border border-slate-800 bg-[#070a14] shadow-2xl overflow-hidden">
          
          {/* Top IDE Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#0a0f1d] border-b border-slate-800 gap-3">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono font-medium text-slate-200">
                demo_session.ls
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                Fórmula: {currentExample.formula}
              </span>
            </div>

            {/* Run Action */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleRun}
                disabled={isExecuting}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isExecuting ? t.hero.running : t.demo.runSimulation}</span>
              </button>
            </div>
          </div>

          {/* 2-Column Split: Code (Left) vs Visualizer/Console (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            
            {/* Left Column: Code Editor */}
            <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-slate-800 p-4 bg-[#0c101c] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800/80 text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    {t.demo.codeEditorTitle}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    Sintaxis LogicScript
                  </span>
                </div>

                <CodeViewer
                  code={currentExample.code}
                  filename={`${currentExample.id}.ls`}
                  showLineNumbers={true}
                  className="border-0 bg-transparent shadow-none"
                />
              </div>

              {/* Natural language summary box */}
              <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800/90 text-xs">
                <div className="text-slate-400 font-medium mb-1 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Enunciado en Lenguaje Natural:</span>
                </div>
                <p className="text-slate-200 font-serif italic text-sm">
                  "{currentExample.naturalLanguage[language]}"
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Results with Tabs */}
            <div className="lg:col-span-6 flex flex-col bg-[#080c16]">
              
              {/* Tabs Navigation */}
              <div className="flex items-center justify-between px-3 py-1 bg-[#0d1322] border-b border-slate-800 text-xs overflow-x-auto">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-2 font-medium rounded-t border-b-2 transition-all ${
                      activeTab === 'terminal'
                        ? 'text-cyan-300 border-cyan-400 bg-slate-800/50'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{t.demo.tabTerminal}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('table')}
                    className={`flex items-center gap-1.5 px-3 py-2 font-medium rounded-t border-b-2 transition-all ${
                      activeTab === 'table'
                        ? 'text-cyan-300 border-cyan-400 bg-slate-800/50'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <Table className="w-3.5 h-3.5" />
                    <span>{t.demo.tabTable}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`flex items-center gap-1.5 px-3 py-2 font-medium rounded-t border-b-2 transition-all ${
                      activeTab === 'pipeline'
                        ? 'text-cyan-300 border-cyan-400 bg-slate-800/50'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <GitCommit className="w-3.5 h-3.5" />
                    <span>{t.demo.tabPipeline}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('verdict')}
                    className={`flex items-center gap-1.5 px-3 py-2 font-medium rounded-t border-b-2 transition-all ${
                      activeTab === 'verdict'
                        ? 'text-cyan-300 border-cyan-400 bg-slate-800/50'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>{t.demo.tabVerdict}</span>
                  </button>
                </div>
              </div>

              {/* Tab Panels */}
              <div className="p-4 flex-1 overflow-y-auto">
                {isExecuting ? (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                    <p className="text-xs font-mono text-cyan-300">
                      Evaluando espacio booleano de {currentExample.formula}...
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Tab 1: Terminal Console */}
                    {activeTab === 'terminal' && (
                      <TerminalOutput output={currentExample.terminalLog} className="border-0 shadow-none bg-transparent" />
                    )}

                    {/* Tab 2: Truth Table Grid */}
                    {activeTab === 'table' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                          <span>
                            Fórmula Formal: <strong className="text-cyan-300 font-mono">{currentExample.formula}</strong>
                          </span>
                          <span>
                            {t.demo.stateSpace} <strong className="text-white font-mono">{currentExample.truthTable.length}</strong> {t.demo.rowsCount}
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-lg border border-slate-800 bg-[#0b0f19]">
                          <table className="w-full text-xs font-mono">
                            <thead>
                              <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                                <th className="py-2.5 px-4 text-left font-semibold">#</th>
                                {atomKeys.map(atom => (
                                  <th key={atom} className="py-2.5 px-4 text-center font-semibold text-cyan-300">
                                    {atom}
                                  </th>
                                ))}
                                <th className="py-2.5 px-4 text-center font-semibold text-amber-300 bg-slate-800/60">
                                  {currentExample.formula}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                              {currentExample.truthTable.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                                  <td className="py-2.5 px-4 text-slate-500">{idx + 1}</td>
                                  {atomKeys.map(atom => {
                                    const val = row.assignments[atom];
                                    return (
                                      <td key={atom} className="py-2.5 px-4 text-center">
                                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold ${
                                          val 
                                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' 
                                            : 'bg-rose-950/80 text-rose-400 border border-rose-800/60'
                                        }`}>
                                          {val ? 'V' : 'F'}
                                        </span>
                                      </td>
                                    );
                                  })}
                                  <td className="py-2.5 px-4 text-center bg-slate-900/40">
                                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded text-xs font-bold ${
                                      row.result
                                        ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-600/40 shadow-sm'
                                        : 'bg-rose-900/40 text-rose-300 border border-rose-600/40 shadow-sm'
                                    }`}>
                                      {row.result ? 'V (Verdadero)' : 'F (Falso)'}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Truth table explanation footer */}
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                          <p>{currentExample.explanation[language]}</p>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Pipeline Flow */}
                    {activeTab === 'pipeline' && (
                      <div className="space-y-4 py-2">
                        <div className="text-xs text-slate-400">
                          Flujo paso a paso del compilador e intérprete de LogicScript:
                        </div>

                        <div className="space-y-3">
                          {/* Step 1 */}
                          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                              1
                            </span>
                            <div className="text-xs">
                              <h4 className="font-semibold text-white mb-0.5">Entrada en Lenguaje Natural</h4>
                              <p className="text-slate-400 mb-1">Normalización de caracteres y extracción léxica.</p>
                              <code className="px-2 py-0.5 rounded bg-slate-950 text-emerald-300 font-mono">
                                "{currentExample.naturalLanguage[language]}"
                              </code>
                            </div>
                          </div>

                          {/* Step 2 */}
                          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                              2
                            </span>
                            <div className="text-xs">
                              <h4 className="font-semibold text-white mb-0.5">SemanticMapper (PLN)</h4>
                              <p className="text-slate-400 mb-1">
                                Identificación de conectores lógicos de control y vinculación con átomos:
                              </p>
                              <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                                {atomKeys.map(a => (
                                  <span key={a} className="px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                                    Átomo {a}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Step 3 */}
                          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                              3
                            </span>
                            <div className="text-xs">
                              <h4 className="font-semibold text-white mb-0.5">Formalización Simbólica</h4>
                              <p className="text-slate-400 mb-1">Construcción del AST proposicional determinista:</p>
                              <code className="px-2 py-0.5 rounded bg-slate-950 text-amber-300 font-mono font-bold">
                                {currentExample.formula}
                              </code>
                            </div>
                          </div>

                          {/* Step 4 */}
                          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                              4
                            </span>
                            <div className="text-xs">
                              <h4 className="font-semibold text-white mb-0.5">Evaluación veritativa exhaustiva</h4>
                              <p className="text-slate-400">
                                Resolución de {currentExample.truthTable.length} filas combinatorias booleanas ($2^{atomKeys.length}$).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Verdict */}
                    {activeTab === 'verdict' && (
                      <div className="space-y-5 py-4">
                        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center text-center">
                          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                            {t.demo.verdictLabel}
                          </span>

                          {currentExample.classification === 'contingency' && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-lg font-bold shadow-lg shadow-cyan-500/10 mb-3">
                              <Scale className="w-5 h-5 text-cyan-400" />
                              <span>CONTINGENCY</span>
                            </div>
                          )}

                          {currentExample.classification === 'tautology' && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-lg font-bold shadow-lg shadow-emerald-500/10 mb-3">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>TAUTOLOGY (Tautología)</span>
                            </div>
                          )}

                          {currentExample.classification === 'contradiction' && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-950 border border-rose-500/50 text-rose-300 text-lg font-bold shadow-lg shadow-rose-500/10 mb-3">
                              <X className="w-5 h-5 text-rose-400" />
                              <span>CONTRADICTION (Contradicción)</span>
                            </div>
                          )}

                          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                            {currentExample.classification === 'contingency' && t.demo.contingencyDesc}
                            {currentExample.classification === 'tautology' && t.demo.tautologyDesc}
                            {currentExample.classification === 'contradiction' && t.demo.contradictionDesc}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                          <h4 className="font-semibold text-white">Análisis Semántico del Razonamiento</h4>
                          <p className="text-slate-300">{currentExample.explanation[language]}</p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
