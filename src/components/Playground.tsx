import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { examplesData } from '../data/examples';
import { ExampleItem } from '../types';
import { CodeViewer } from './CodeViewer';
import { TerminalOutput } from './TerminalOutput';
import {
  Play,
  Table,
  Terminal,
  CheckCircle,
  Scale,
  X,
} from 'lucide-react';

export const Playground: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedExampleId, setSelectedExampleId] = useState<string>(examplesData[0].id);
  const [activeTab, setActiveTab] = useState<'terminal' | 'table' | 'verdict'>('terminal');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const currentExample: ExampleItem =
    examplesData.find((ex) => ex.id === selectedExampleId) || examplesData[0];

  const handleSelectPreset = (id: string) => {
    setSelectedExampleId(id);
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 200);
  };

  const handleRun = () => {
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 250);
  };

  const atomKeys =
    currentExample.truthTable.length > 0
      ? Object.keys(currentExample.truthTable[0].assignments)
      : [];

  return (
    <div className="bg-slate-50 min-h-[80vh]">
      {/* Top Blue Banner */}
      <div className="bg-prism-hero py-10 text-white border-b border-slate-800/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t.demo.title}</h1>
          <p className="text-sm sm:text-base text-sky-100/90 max-w-2xl">
            {t.demo.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Preset Selector Bar */}
        <div className="mb-6 bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.demo.selectPreset}
          </span>
          <div className="flex flex-wrap gap-2">
            {examplesData.map((ex) => (
              <button
                key={ex.id}
                onClick={() => handleSelectPreset(ex.id)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  selectedExampleId === ex.id
                    ? 'bg-sky-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {ex.title[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Split Editor + Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Code & Enunciado */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm">
              <div className="text-xs font-semibold text-slate-700">
                {currentExample.id}.prism — <span className="font-mono text-sky-600">{currentExample.formula}</span>
              </div>
              <button
                onClick={handleRun}
                disabled={isExecuting}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isExecuting ? t.hero.running : t.demo.runSimulation}</span>
              </button>
            </div>

            <CodeViewer
              code={currentExample.code}
              filename={`${currentExample.id}.prism`}
              showLineNumbers={true}
            />

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm text-xs">
              <span className="font-bold text-slate-700 block mb-1">
                {language === 'es' ? 'Enunciado en Lenguaje Natural:' : 'Natural Language Statement:'}
              </span>
              <p className="text-slate-600 italic text-sm">
                "{currentExample.naturalLanguage[language]}"
              </p>
            </div>
          </div>

          {/* Right: Output Tabs (Terminal, Truth Table, Verdict) */}
          <div className="lg:col-span-6 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            {/* Tabs Header */}
            <div className="flex items-center border-b border-slate-200 bg-slate-50 px-3 pt-2 gap-1 text-xs">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-t font-semibold border-b-2 transition-colors ${
                  activeTab === 'terminal'
                    ? 'bg-white text-sky-600 border-sky-600'
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{t.demo.tabTerminal}</span>
              </button>

              <button
                onClick={() => setActiveTab('table')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-t font-semibold border-b-2 transition-colors ${
                  activeTab === 'table'
                    ? 'bg-white text-sky-600 border-sky-600'
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>{t.demo.tabTable}</span>
              </button>

              <button
                onClick={() => setActiveTab('verdict')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-t font-semibold border-b-2 transition-colors ${
                  activeTab === 'verdict'
                    ? 'bg-white text-sky-600 border-sky-600'
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>{t.demo.tabVerdict}</span>
              </button>
            </div>

            <div className="p-5">
              {activeTab === 'terminal' && (
                <TerminalOutput output={currentExample.terminalLog} />
              )}

              {activeTab === 'table' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>
                      Fórmula: <strong className="font-mono text-sky-700">{currentExample.formula}</strong>
                    </span>
                    <span>
                      {t.demo.stateSpace} <strong>{currentExample.truthTable.length}</strong> {t.demo.rowsCount}
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded border border-slate-200">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                          <th className="py-2 px-3 text-left">#</th>
                          {atomKeys.map((atom) => (
                            <th key={atom} className="py-2 px-3 text-center font-bold text-sky-700">
                              {atom}
                            </th>
                          ))}
                          <th className="py-2 px-3 text-center font-bold bg-slate-200/60">
                            {currentExample.formula}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {currentExample.truthTable.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2 px-3 text-slate-400">{idx + 1}</td>
                            {atomKeys.map((atom) => {
                              const val = row.assignments[atom];
                              return (
                                <td key={atom} className="py-2 px-3 text-center">
                                  <span
                                    className={`inline-block w-6 py-0.5 rounded font-bold ${
                                      val
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                                    }`}
                                  >
                                    {val ? 'V' : 'F'}
                                  </span>
                                </td>
                              );
                            })}
                            <td className="py-2 px-3 text-center bg-slate-50/70">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded font-bold ${
                                  row.result
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {row.result ? 'V (Verdadero)' : 'F (Falso)'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
                    {currentExample.explanation[language]}
                  </p>
                </div>
              )}

              {activeTab === 'verdict' && (
                <div className="space-y-4 py-3 text-center">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    {t.demo.verdictLabel}
                  </div>

                  {currentExample.classification === 'contingency' && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 text-base font-bold">
                      <Scale className="w-5 h-5" />
                      <span>CONTINGENCY (Contingencia)</span>
                    </div>
                  )}

                  {currentExample.classification === 'tautology' && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-base font-bold">
                      <CheckCircle className="w-5 h-5" />
                      <span>TAUTOLOGY (Tautología)</span>
                    </div>
                  )}

                  {currentExample.classification === 'contradiction' && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-base font-bold">
                      <X className="w-5 h-5" />
                      <span>CONTRADICTION (Contradicción)</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {currentExample.classification === 'contingency' && t.demo.contingencyDesc}
                    {currentExample.classification === 'tautology' && t.demo.tautologyDesc}
                    {currentExample.classification === 'contradiction' && t.demo.contradictionDesc}
                  </p>

                  <div className="text-left p-4 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-800 block mb-1">
                      {language === 'es' ? 'Explicación:' : 'Explanation:'}
                    </strong>
                    {currentExample.explanation[language]}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
