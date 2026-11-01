import React, { useState } from 'react';
import { Terminal, Copy, Check, AlertCircle } from 'lucide-react';

interface TerminalOutputProps {
  output: string;
  className?: string;
  activeTab?: string;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  output,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'problems' | 'output' | 'debug'>('terminal');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format log lines with color coding for sections, true/false values, and tokens
  const formatTerminalLine = (line: string, index: number) => {
    if (!line.trim()) return <div key={index} className="h-4" />;

    // Section headers === ... ===
    if (line.startsWith('===')) {
      return (
        <div key={index} className="text-cyan-400 font-semibold mt-2 mb-1 flex items-center gap-1.5">
          <span>{line}</span>
        </div>
      );
    }

    // Formulas or emit lines
    if (line.startsWith('Fórmula emitida:') || line.startsWith('Emitted formula:')) {
      const [prefix, formula] = line.split(':');
      return (
        <div key={index} className="text-amber-300 font-medium my-0.5">
          <span className="text-slate-300">{prefix}:</span>{' '}
          <span className="font-bold text-amber-300 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40">
            {formula}
          </span>
        </div>
      );
    }

    // Dictamen final or classification
    if (line.includes('contingency') || line.includes('tautology') || line.includes('contradiction')) {
      return (
        <div key={index} className="text-emerald-300 font-semibold my-0.5">
          {line.split(' ').map((word, wIdx) => {
            if (word.includes('contingency')) {
              return (
                <span key={wIdx} className="text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/60 mr-1">
                  contingency
                </span>
              );
            }
            if (word.includes('tautology')) {
              return (
                <span key={wIdx} className="text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60 mr-1">
                  tautology
                </span>
              );
            }
            if (word.includes('contradiction')) {
              return (
                <span key={wIdx} className="text-rose-400 bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-800/60 mr-1">
                  contradiction
                </span>
              );
            }
            return <span key={wIdx}>{word} </span>;
          })}
        </div>
      );
    }

    // Truth table rows (containing | and V or F)
    if (line.includes('|')) {
      const parts = line.split('|');
      const isHeader = line.includes('resultado') || line.includes('result');
      return (
        <div key={index} className={`font-mono ${isHeader ? 'text-slate-400 font-semibold border-b border-slate-800/70 pb-0.5' : 'text-slate-200'}`}>
          {parts.map((p, pIdx) => {
            const clean = p.trim();
            let color = 'text-slate-300';
            if (clean === 'V') color = 'text-emerald-400 font-bold';
            if (clean === 'F') color = 'text-rose-400 font-bold';
            return (
              <span key={pIdx}>
                {pIdx > 0 && <span className="text-slate-600 px-1.5">|</span>}
                <span className={color}>{p}</span>
              </span>
            );
          })}
        </div>
      );
    }

    // Sub-items with dash
    if (line.trim().startsWith('-')) {
      return (
        <div key={index} className="text-slate-300 pl-3">
          <span className="text-slate-500 mr-1.5">-</span>
          <span>{line.trim().substring(1).trim()}</span>
        </div>
      );
    }

    return (
      <div key={index} className="text-slate-300">
        {line}
      </div>
    );
  };

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-800 bg-[#090d16] shadow-2xl flex flex-col font-mono text-xs ${className}`}>
      {/* VS Code Style Top Tabs Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#0d1220] border-b border-slate-800 text-[11px] select-none">
        <div className="flex items-center space-x-1 sm:space-x-3 overflow-x-auto">
          {/* Problems (4) */}
          <button
            onClick={() => setActiveTab('problems')}
            className={`flex items-center gap-1.5 py-1.5 px-2 font-medium transition-colors border-b-2 ${
              activeTab === 'problems'
                ? 'text-white border-cyan-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <span>Problems</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold">
              4
            </span>
          </button>

          {/* Output */}
          <button
            onClick={() => setActiveTab('output')}
            className={`py-1.5 px-2 font-medium transition-colors border-b-2 ${
              activeTab === 'output'
                ? 'text-white border-cyan-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            Output
          </button>

          {/* Debug Console */}
          <button
            onClick={() => setActiveTab('debug')}
            className={`hidden sm:block py-1.5 px-2 font-medium transition-colors border-b-2 ${
              activeTab === 'debug'
                ? 'text-white border-cyan-400'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            Debug Console
          </button>

          {/* Terminal (Active by default) */}
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 py-1.5 px-2 font-medium transition-colors border-b-2 ${
              activeTab === 'terminal'
                ? 'text-cyan-300 border-cyan-400 bg-slate-800/40 rounded-t'
                : 'text-slate-400 hover:text-slate-200 border-transparent'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal</span>
          </button>

          {/* Ports */}
          <button className="hidden md:block py-1.5 px-2 text-slate-500 hover:text-slate-400">
            Ports
          </button>
        </div>

        {/* Copy log button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 px-2 py-1 rounded hover:bg-slate-800/60 transition-colors"
          title="Copiar log de terminal"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="hidden sm:inline">Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 overflow-y-auto max-h-[380px] space-y-0.5 leading-relaxed bg-[#080c16]/95">
        {activeTab === 'terminal' && (
          <div>
            {output.trim().split('\n').map((line, idx) => formatTerminalLine(line, idx))}
            <div className="flex items-center gap-1 text-slate-500 mt-3 pt-2 border-t border-slate-800/40">
              <span className="text-cyan-400 font-bold">logicscript@runtime:~$</span>
              <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse"></span>
            </div>
          </div>
        )}

        {activeTab === 'problems' && (
          <div className="text-slate-400 text-xs py-2 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-medium">
              <AlertCircle className="w-4 h-4" />
              <span>4 Avisos / Diagnósticos de Análisis Semántico</span>
            </div>
            <div className="space-y-1 text-slate-400 pl-6">
              <p>• [LS-01] Átomo `p` enlazado con la etiqueta semántica "antecedente".</p>
              <p>• [LS-02] Átomo `q` enlazado con la etiqueta semántica "consecuente".</p>
              <p>• [LS-03] Traducción de lenguaje natural resuelta mediante patrón SI_ENTONCES.</p>
              <p>• [LS-04] La fórmula `(p → q)` es contingente (no tautológica).</p>
            </div>
          </div>
        )}

        {activeTab === 'output' && (
          <div className="text-slate-400 text-xs py-4 text-center font-mono">
            [LogicScript Language Server v0.2.0 initialized successfully]
          </div>
        )}

        {activeTab === 'debug' && (
          <div className="text-slate-400 text-xs py-4 text-center font-mono">
            [No active debug session. Use `vertauto` with `steps` for detailed execution trace.]
          </div>
        )}
      </div>
    </div>
  );
};
