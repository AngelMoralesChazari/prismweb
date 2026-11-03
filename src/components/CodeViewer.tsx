import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeViewerProps {
  code: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  filename = 'test.pr',
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

  // Prism syntax tokenizer
  const highlightLine = (line: string): React.ReactNode => {
    if (!line.trim()) return <span>&nbsp;</span>;

    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return <span className="text-slate-400 italic">{line}</span>;
    }

    const regex = /(\/\/.*$|"(?:\\.|[^"\\])*"|\b(?:module|use|core|atom|nl|let|formula|vertauto|steps|table|verdict|rule|run|translate|not|and|or|impl|iff)\b|[{}()=])/g;
    const parts = line.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.startsWith('//')) {
        return <span key={index} className="text-slate-400 italic">{part}</span>;
      }
      if (part.startsWith('"') && part.endsWith('"')) {
        return <span key={index} className="text-emerald-300 font-normal">{part}</span>;
      }
      if (['module', 'use', 'core', 'rule', 'run'].includes(part)) {
        return <span key={index} className="text-amber-300 font-semibold">{part}</span>;
      }
      if (['atom', 'nl', 'let', 'formula'].includes(part)) {
        return <span key={index} className="text-sky-400 font-semibold">{part}</span>;
      }
      if (['vertauto', 'steps', 'table', 'verdict'].includes(part)) {
        return <span key={index} className="text-purple-300 font-semibold">{part}</span>;
      }
      if (part === 'translate') {
        return <span key={index} className="text-cyan-300 font-medium">{part}</span>;
      }
      if (['not', 'and', 'or', 'impl', 'iff'].includes(part)) {
        return <span key={index} className="text-orange-300 font-semibold">{part}</span>;
      }
      if (['{', '}', '(', ')', '='].includes(part)) {
        return <span key={index} className="text-slate-400">{part}</span>;
      }

      return <span key={index} className="text-slate-100">{part}</span>;
    });
  };

  const lines = code.trim().split('\n');

  return (
    <div className={`rounded-lg overflow-hidden border border-slate-700/80 bg-[#1e2430] shadow-xl ${className}`}>
      {/* Clean macOS-style Window Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#283040] border-b border-slate-700/80">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 mr-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs font-mono text-slate-200 font-medium">{filename}</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2 py-0.5 rounded hover:bg-slate-700/60 transition-colors"
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
      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = highlightLines.includes(lineNum);
              return (
                <tr
                  key={idx}
                  className={`${isHighlighted ? 'bg-sky-500/15 -mx-4 px-4' : ''}`}
                >
                  {showLineNumbers && (
                    <td className="pr-4 text-right select-none text-slate-500 font-mono text-xs w-7 align-top">
                      {lineNum}
                    </td>
                  )}
                  <td className="whitespace-pre font-mono text-slate-100">
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
