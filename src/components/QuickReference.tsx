import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { operatorsReference } from '../data/docs';
import { CodeViewer } from './CodeViewer';
import { 
  Bookmark, 
  Table, 
  Key, 
  Sliders, 
  HelpCircle,
  Hash
} from 'lucide-react';

const canonicalReferenceCode = `module nombre

use core

atom p = "proposición"
formula f = p impl q
nl texto = "enunciado en lenguaje natural"

let resultado = translate(texto)

vertauto resultado`;

export const QuickReference: React.FC = () => {
  const { language, t } = useLanguage();

  const reservedKeywords = [
    { word: 'module', role: 'Declaración del espacio de nombres del archivo' },
    { word: 'use', role: 'Importación de módulos estándar (core)' },
    { word: 'atom', role: 'Declaración de proposición elemental atómica' },
    { word: 'formula', role: 'Declaración de expresión lógica proposicional' },
    { word: 'nl', role: 'Tipo de dato para enunciados en lenguaje natural' },
    { word: 'let', role: 'Asignación de resultados computados' },
    { word: 'translate', role: 'Función de análisis y traducción semántica' },
    { word: 'vertauto', role: 'Directiva de evaluación exhaustiva de verdad' },
    { word: 'steps', role: 'Modificador: imprime pasos de resolución' },
    { word: 'table', role: 'Modificador: imprime matriz de verdad' },
    { word: 'verdict', role: 'Modificador: imprime dictamen y clasificación' },
    { word: 'rule', role: 'Definición de regla de inferencia (roadmap)' },
    { word: 'run', role: 'Ejecución de motor de deducción (roadmap)' },
  ];

  return (
    <section id="reference" className="py-24 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-3">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Guía Rápida & Cheat Sheet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.reference.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.reference.subtitle}
          </p>
        </div>

        {/* 2-Column: Canonical Template & Vertauto modifiers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Canonical Template */}
          <div className="lg:col-span-7">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Hash className="w-4 h-4 text-cyan-400" />
              <span>{t.reference.canonicalSnippetTitle}</span>
            </h3>
            <CodeViewer
              code={canonicalReferenceCode}
              filename="referencia_rapida.ls"
              showLineNumbers={true}
              className="border border-slate-800 bg-[#0d1220]"
            />
          </div>

          {/* Vertauto Modifiers */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0d1220] border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>{t.reference.vertautoBlocksTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Dentro de un bloque <code className="text-pink-400 font-mono">vertauto f {'{ ... }'}</code>, puedes combinar cualquiera de los siguientes modificadores:
            </p>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#070a14] border border-slate-800">
                <span className="text-pink-400 font-bold block mb-1">steps</span>
                <p className="text-slate-300 font-sans">
                  Imprime el desglose y la evaluación lógica paso a paso para cada una de las asignaciones de estado ($2^n$).
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#070a14] border border-slate-800">
                <span className="text-pink-400 font-bold block mb-1">table</span>
                <p className="text-slate-300 font-sans">
                  Renderiza la matriz de verdad completa en formato de columnas limpias (<code className="text-cyan-300">p | q | resultado</code>).
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#070a14] border border-slate-800">
                <span className="text-pink-400 font-bold block mb-1">verdict</span>
                <p className="text-slate-300 font-sans">
                  Emite la clasificación formal de la fórmula: <strong className="text-emerald-400">tautology</strong>, <strong className="text-cyan-400">contingency</strong> o <strong className="text-rose-400">contradiction</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Operators Table (Directly from User Specification) */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1220] p-6 shadow-xl mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Table className="w-5 h-5 text-cyan-400" />
                <span>{t.reference.operatorsTableTitle}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Conectores proposicionales con precedencia matemática decreciente (5 a 1).
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left font-mono">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                  <th className="py-3 px-4 font-semibold">{t.reference.colKeyword}</th>
                  <th className="py-3 px-4 font-semibold text-center">{t.reference.colSymbol}</th>
                  <th className="py-3 px-4 font-semibold">{t.reference.colMeaning}</th>
                  <th className="py-3 px-4 font-semibold text-center">{t.reference.colPrecedence}</th>
                  <th className="py-3 px-4 font-semibold">{t.reference.colExample}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {operatorsReference.map((op) => (
                  <tr key={op.keyword} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-orange-400">
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {op.keyword}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-cyan-300 text-base">
                      {op.symbol}
                    </td>
                    <td className="py-3.5 px-4 font-sans text-slate-200">
                      <div>{op.meaning[language]}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {op.description[language]}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-300 font-bold border border-slate-800 text-xs">
                        Nivel {op.precedence}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-emerald-300 font-mono">
                      {op.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reserved Keywords Grid */}
        <div className="rounded-2xl border border-slate-800 bg-[#0d1220] p-6 shadow-xl">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Key className="w-4 h-4 text-cyan-400" />
            <span>{t.reference.reservedKeywordsTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {reservedKeywords.map((item) => (
              <div 
                key={item.word}
                className="p-3 rounded-lg bg-[#070a14] border border-slate-800/80 flex items-start gap-2.5"
              >
                <code className="text-purple-400 font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800 flex-shrink-0">
                  {item.word}
                </code>
                <span className="text-[11px] text-slate-400 font-sans leading-tight">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
