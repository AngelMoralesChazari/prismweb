import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageView } from './Navbar';
import { Download, Terminal, CheckCircle2, FileCode, BookOpen } from 'lucide-react';

interface DownloadsProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

export const Downloads: React.FC<DownloadsProps> = ({ onNavigate }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white min-h-[82vh] pb-16">
      {/* Top Blue Banner (Exact style from reference image) */}
      <div className="bg-[#0e6eb8] py-8 text-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-normal tracking-tight">
            {language === 'es' ? 'Descarga' : 'Download'}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
            {language === 'es'
              ? 'Descarga la última versión de Prism'
              : 'Download the latest version of Prism'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-2">
            {language === 'es'
              ? 'Lenguaje de programación declarativo de código abierto para lógica proposicional y lenguaje natural.'
              : 'Open-source declarative programming language for propositional logic and natural language.'}
          </p>
          <p className="text-sm text-slate-800">
            <strong className="font-bold">Prism</strong> v1.0.0{' '}
            <span className="text-slate-400 mx-1.5">•</span>
            <span className="text-slate-600">VS Code Extension v0.3.2</span>
          </p>
        </div>

        {/* 3 Columns: Windows | VS Code Extension (.vsix) | Linux (.tar.gz) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center mb-16">
          
          {/* COLUMN 1: WINDOWS */}
          <div className="flex flex-col items-center">
            {/* Windows 4-Pane Perspective Icon */}
            <div className="h-28 flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 88 88"
                className="w-24 h-24 text-[#1572b6]"
                fill="currentColor"
              >
                <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203L0 12.402zm35.67 33.529l.028 34.453L.028 75.48.026 45.7l35.644.231zm4.326-39.025L87.314 0v41.527l-47.318.376V6.906zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739 47.395.077z" />
              </svg>
            </div>

            {/* Big Blue Download Button */}
            <a
              href="/downloads/prism-v1.0.0-windows.zip"
              download="prism-v1.0.0-windows.zip"
              className="w-full py-5 px-6 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
            >
              <span className="text-base font-bold tracking-wide flex items-center gap-2">
                <span>Windows</span>
                <Download className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="text-xs text-sky-100 mt-1 font-normal">
                Windows 10, 11 (prism-v1.0.0-windows.zip)
              </span>
            </a>

            {/* Footnotes */}
            <div className="mt-4 space-y-2 text-xs text-slate-500 max-w-xs">
              <p>*Solo para 64x bits (288 KB)</p>
              <p>
                *Incluye el intérprete y compilador <code className="text-slate-700 font-mono">prc</code> junto con el módulo base <code className="text-slate-700 font-mono">core.lgs</code>.
              </p>
            </div>
          </div>

          {/* COLUMN 2: EXTENSIÓN OFICIAL VS CODE / CURSOR (.vsix) */}
          <div className="flex flex-col items-center">
            {/* VS Code / Editor Emblem */}
            <div className="h-28 flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 text-[#007acc]"
                fill="currentColor"
              >
                <path d="M74.5 7.3L35.2 43.2 14.2 26.8 5.5 31.2v37.6l8.7 4.4 21-16.4 39.3 35.9 19.9-9.7V17L74.5 7.3zM14.2 58.6V41.4l11.5 8.6-11.5 8.6zm60.3 15.8L46.8 50l27.7-24.4v48.8z" />
              </svg>
            </div>

            {/* Big Blue Download Button */}
            <a
              href="/downloads/prism-0.3.2.vsix"
              download="prism-0.3.2.vsix"
              className="w-full py-5 px-6 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
            >
              <span className="text-base font-bold tracking-wide flex items-center gap-2">
                <span>VS Code / Cursor (.vsix)</span>
                <Download className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="text-xs text-sky-100 mt-1 font-normal">
                Extensión Oficial v0.3.2 (prism-0.3.2.vsix)
              </span>
            </a>

            {/* Footnotes */}
            <div className="mt-4 space-y-2 text-xs text-slate-500 max-w-xs">
              <p>*Multiplataforma: Windows, Linux y macOS (152 KB)</p>
              <p>
                *Incluye resaltado de sintaxis <code className="text-slate-700 font-mono">.pr</code> y autocompletado de snippets (<code className="text-slate-700 font-mono">prnl</code>, <code className="text-slate-700 font-mono">prform</code>, <code className="text-slate-700 font-mono">prinl</code>, <code className="text-slate-700 font-mono">prnlit</code>).
              </p>
            </div>
          </div>

          {/* COLUMN 3: LINUX */}
          <div className="flex flex-col items-center">
            {/* Tux Linux Icon */}
            <div className="h-28 flex items-center justify-center mb-6">
              <svg viewBox="0 0 64 64" className="w-24 h-24">
                {/* Body */}
                <ellipse cx="32" cy="37" rx="17" ry="21" fill="#1e293b" />
                {/* Head */}
                <circle cx="32" cy="18" r="12" fill="#1e293b" />
                {/* Belly */}
                <ellipse cx="32" cy="39" rx="11" ry="15" fill="#f8fafc" />
                {/* Eyes */}
                <ellipse cx="28.5" cy="16" rx="2.5" ry="3.2" fill="#ffffff" />
                <ellipse cx="35.5" cy="16" rx="2.5" ry="3.2" fill="#ffffff" />
                <circle cx="29" cy="16.5" r="1.2" fill="#0f172a" />
                <circle cx="35" cy="16.5" r="1.2" fill="#0f172a" />
                {/* Beak */}
                <path
                  d="M26 20.5 C26 18.5, 38 18.5, 38 20.5 L32 24.5 Z"
                  fill="#f59e0b"
                />
                {/* Feet */}
                <ellipse cx="22" cy="56" rx="6.5" ry="3.5" fill="#f59e0b" />
                <ellipse cx="42" cy="56" rx="6.5" ry="3.5" fill="#f59e0b" />
              </svg>
            </div>

            {/* Split or Main Linux Download Buttons (Like Reference Image) */}
            <div className="w-full grid grid-cols-2 gap-2">
              <a
                href="/downloads/prism-v1.0.0-linux.tar.gz"
                download="prism-v1.0.0-linux.tar.gz"
                className="py-5 px-3 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
              >
                <span className="text-sm font-bold flex items-center gap-1">
                  <span>.tar.gz</span>
                  <Download className="w-3.5 h-3.5 opacity-80" />
                </span>
                <span className="text-[11px] text-sky-100 mt-1">
                  Debian, Ubuntu
                </span>
              </a>

              <a
                href="/downloads/prism-v1.0.0-linux.tar.gz"
                download="prism-v1.0.0-linux.tar.gz"
                className="py-5 px-3 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
              >
                <span className="text-sm font-bold flex items-center gap-1">
                  <span>.tar.gz</span>
                  <Download className="w-3.5 h-3.5 opacity-80" />
                </span>
                <span className="text-[11px] text-sky-100 mt-1">
                  Fedora, Arch
                </span>
              </a>
            </div>

            {/* Consola Sub-buttons (Matching reference image layout) */}
            <div className="w-full mt-4">
              <div className="text-xs font-bold text-slate-800 mb-2">
                {language === 'es' ? 'Consola / Distribuciones' : 'Console / Distros'}
              </div>
              <div className="grid grid-cols-3 gap-1.5 mb-2">
                <a
                  href="/downloads/prism-v1.0.0-linux.tar.gz"
                  download="prism-v1.0.0-linux.tar.gz"
                  className="py-2.5 px-2 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
                >
                  Debian, Ubuntu
                </a>
                <a
                  href="/downloads/prism-v1.0.0-linux.tar.gz"
                  download="prism-v1.0.0-linux.tar.gz"
                  className="py-2.5 px-2 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
                >
                  Fedora
                </a>
                <a
                  href="/downloads/prism-v1.0.0-linux.tar.gz"
                  download="prism-v1.0.0-linux.tar.gz"
                  className="py-2.5 px-2 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
                >
                  RHEL, CentOS
                </a>
              </div>
              <a
                href="/downloads/prism-v1.0.0-linux.tar.gz"
                download="prism-v1.0.0-linux.tar.gz"
                className="block w-full py-2.5 px-3 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
              >
                ArchLinux, Manjaro (prism-v1.0.0-linux.tar.gz)
              </a>
            </div>
          </div>

        </div>

        {/* Quick Installation Instructions Card */}
        <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 sm:p-8">
          <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#0e6eb8]" />
            <span>
              {language === 'es'
                ? 'Guía Rápida de Instalación y Ejecución'
                : 'Quick Installation & Execution Guide'}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
            <div className="space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#04add6]" />
                <span>1. Compilador / Intérprete Prism (v1.0.0)</span>
              </div>
              <p className="leading-relaxed">
                Descomprime el paquete de tu sistema operativo (<code className="font-mono text-slate-800">prism-v1.0.0-windows.zip</code> o <code className="font-mono text-slate-800">prism-v1.0.0-linux.tar.gz</code>) y ejecuta tus programas <code className="font-mono text-slate-800">.pr</code> con <code className="font-mono text-slate-800">prc check</code> o <code className="font-mono text-slate-800">prc run</code>:
              </p>
              <pre className="p-3 rounded bg-[#1e2430] text-slate-100 font-mono text-[11px] overflow-x-auto">
{`# Validar sintaxis y coherencia semántica
prc check mi_ejercicio.pr

# Ejecutar evaluación y tabla de verdad
prc run mi_ejercicio.pr`}
              </pre>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-[#04add6]" />
                <span>2. Instalar Extensión en VS Code / Cursor (prism-0.3.2.vsix)</span>
              </div>
              <p className="leading-relaxed">
                Abre VS Code o Cursor, presiona <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 font-mono text-[10px]">Ctrl+Shift+P</kbd>, elige <strong>Extensions: Install from VSIX...</strong> y selecciona el archivo descargado <code className="font-mono text-slate-800">prism-0.3.2.vsix</code>:
              </p>
              <pre className="p-3 rounded bg-[#1e2430] text-slate-100 font-mono text-[11px] overflow-x-auto">
{`# O instálalo directamente desde terminal:
code --install-extension prism-0.3.2.vsix`}
              </pre>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('docs', 'vscode-extension')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0e6eb8] hover:underline pt-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ver guía completa de la extensión y snippets en la Documentación →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

