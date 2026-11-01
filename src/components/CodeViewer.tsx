import React, { useState } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';

interface CodeViewerProps {
  code: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  filename = 'main.ls',
  showLineNumbers = true,
  highlightLines = [],
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // LogicScript syntax tokenizer
  const highlightLine = (line: string): React.ReactNode => {
    if (!line.trim()) return <span>&nbsp;</span>;

    // Check if whole line is comment
    if (line.trim().startsWith('//')) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    // Split tokenization while preserving separators
    const regex = /(\/\/.*$|"(?:\\.|[^"\\])*"|\b(?:module|use|core|atom|nl|let|formula|vertauto|steps|table|verdict|rule|run|translate|not|and|or|impl|iff)\b|[{}()=])/g;
    const parts = line.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.startsWith('//')) {
        return <span key={index} className="text-slate-500 italic">{part}</span>;
      }
      if (part.startsWith('"') && part.endsWith('"')) {
        return <span key={index} className="text-emerald-300 font-normal">{part}</span>;
      }
      if (['module', 'use', 'core', 'rule', 'run'].includes(part)) {
        return <span key={index} className="text-purple-400 font-semibold">{part}</span>;
      }
      if (['atom', 'nl', 'let', 'formula'].includes(part)) {
        return <span key={index} className="text-sky-400 font-medium">{part}</span>;
      }
      if (['vertauto', 'steps', 'table', 'verdict'].includes(part)) {
        return <span key={index} className="text-pink-400 font-semibold">{part}</span>;
      }
      if (part === 'translate') {
        return <span key={index} className="text-amber-300 font-medium">{part}</span>;
      }
      if (['not', 'and', 'or', 'impl', 'iff'].includes(part)) {
        return <span key={index} className="text-orange-400 font-semibold">{part}</span>;
      }
      if (['{', '}', '(', ')', '='].includes(part)) {
        return <span key={index} className="text-slate-400">{part}</span>;
      }

      return <span key={index} className="text-slate-200">{part}</span>;
    });
  };

  const lines = code.trim().split('\n');

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-800/90 bg-[#0d1220] shadow-2xl ${className}`}>
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090d18] border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          {/* Window control dots */}
          <div className="flex items-center space-x-1.5 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <FileCode className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono text-slate-300 font-medium">{filename}</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800/70 text-slate-400 font-mono">
            LogicScript
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 px-2 py-1 rounded transition-colors"
          title="Copiar código"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = highlightLines.includes(lineNum);
              return (
                <tr
                  key={idx}
                  className={`${isHighlighted ? 'bg-cyan-950/30 -mx-4 px-4 block border-l-2 border-cyan-400' : ''}`}
                >
                  {showLineNumbers && (
                    <td className="pr-4 text-right select-none text-slate-600 font-mono text-xs w-8 align-top">
                      {lineNum}
                    </td>
                  )}
                  <td className="whitespace-pre font-mono text-slate-200">
                    {highlightLine(line)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
