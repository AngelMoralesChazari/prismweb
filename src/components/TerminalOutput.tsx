import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface TerminalOutputProps {
  output: string;
  className?: string;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  output,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTerminalLine = (line: string, index: number) => {
    if (!line.trim()) return <div key={index} className="h-3" />;

    if (line.startsWith('===')) {
      return (
        <div key={index} className="text-sky-400 font-semibold mt-2 mb-1">
          {line}
        </div>
      );
    }

    if (line.startsWith('Fórmula emitida:') || line.startsWith('Emitted formula:')) {
      const [prefix, formula] = line.split(':');
      return (
        <div key={index} className="text-amber-300 font-medium my-0.5">
          <span className="text-slate-300">{prefix}:</span>{' '}
          <span className="font-bold text-amber-300">{formula}</span>
        </div>
      );
    }

    if (line.includes('contingency') || line.includes('tautology') || line.includes('contradiction')) {
      return (
        <div key={index} className="text-emerald-300 font-semibold my-0.5">
          {line}
        </div>
      );
    }

    if (line.includes('|')) {
      const parts = line.split('|');
      const isHeader = line.includes('resultado') || line.includes('result');
      return (
        <div key={index} className={`font-mono ${isHeader ? 'text-slate-400 font-semibold border-b border-slate-700 pb-0.5' : 'text-slate-200'}`}>
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

    return (
      <div key={index} className="text-slate-300">
        {line}
      </div>
    );
  };

  return (
    <div className={`rounded-lg overflow-hidden border border-slate-700/80 bg-[#161b24] shadow-xl flex flex-col font-mono text-xs ${className}`}>
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#202734] border-b border-slate-700/80 text-xs select-none">
        <div className="flex items-center gap-2 text-slate-200 font-medium">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>Prism — Consola de Salida</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2 py-0.5 rounded hover:bg-slate-700/60 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-[360px] space-y-0.5 leading-relaxed">
        {output.trim().split('\n').map((line, idx) => formatTerminalLine(line, idx))}
        <div className="flex items-center gap-1 text-slate-400 mt-3 pt-2 border-t border-slate-800">
          <span className="text-sky-400 font-bold">prism &gt;&gt;&gt;</span>
          <span className="w-2 h-4 bg-sky-400 inline-block animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};
