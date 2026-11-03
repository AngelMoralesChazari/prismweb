import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageView } from './Navbar';
import { Download } from 'lucide-react';

interface DownloadsProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

export const Downloads: React.FC<DownloadsProps> = () => {
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
            <strong className="font-bold">Prism</strong> v1.0.0
          </p>
        </div>

        {/* 3 Columns: Windows | Mac (.tar.gz) | Linux (.tar.gz) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center mb-16">

          {/* COLUMN 1: WINDOWS */}
          <div className="flex flex-col items-center">
            {/* Windows 4-Pane Perspective Icon */}
            <div className="h-28 flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 88 88"
                className="w-24 h-24 text-[#1572b6]"
                fill="currentColor"
                aria-label="Windows"
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
                Windows 10, 11
              </span>
            </a>

            {/* Footnotes */}
            <div className="mt-4 space-y-2 text-xs text-slate-500 max-w-xs">
              <p>Solo para 64x bits</p>
              <p>
                Paquete <code className="text-slate-700 font-mono">prism-v1.0.0-windows.zip</code> con el ejecutable <code className="text-slate-700 font-mono">prc</code> y módulo base <code className="text-slate-700 font-mono">core.pr</code>.
              </p>
            </div>
          </div>

          {/* COLUMN 2: MAC (Apple Logo + prism-v1.0.0.tar.gz) */}
          <div className="flex flex-col items-center">
            {/* Classic Black Apple Logo */}
            <div className="h-28 flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 384 512"
                className="w-24 h-24 text-black"
                fill="currentColor"
                aria-label="Mac"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </div>

            {/* Big Blue Download Button */}
            <a
              href="/downloads/prism-v1.0.0.tar.gz"
              download="prism-v1.0.0.tar.gz"
              className="w-full py-5 px-6 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
            >
              <span className="text-base font-bold tracking-wide flex items-center gap-2">
                <span>Mac</span>
                <Download className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="text-xs text-sky-100 mt-1 font-normal">
                macOS 11+ (.tar.gz)
              </span>
            </a>

            {/* Footnotes */}
            <div className="mt-4 space-y-2 text-xs text-slate-500 max-w-xs">
              <p>Compatible con Apple Silicon e Intel (<code className="text-slate-700 font-mono">prism-v1.0.0.tar.gz</code>)</p>
            </div>
          </div>

          {/* COLUMN 3: LINUX (Tux + prism-v1.0.0-linux.tar.gz) */}
          <div className="flex flex-col items-center">
            {/* Official Tux Linux Icon from public/linux.webp */}
            <div className="h-28 flex items-center justify-center mb-6">
              <img
                src="/linux.webp"
                alt="Linux Tux"
                className="h-24 w-auto object-contain"
              />
            </div>

            {/* Split Linux Download Buttons (Like Reference Image) */}
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
                  Fedora, CentOS
                </span>
              </a>
            </div>

            {/* Consola Sub-buttons (Matching reference image layout) */}
            <div className="w-full mt-4">
              <div className="text-xs font-bold text-slate-800 mb-2">
                {language === 'es' ? 'Consola' : 'Console'}
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
                  Rhel, CentOS
                </a>
              </div>
              <a
                href="/downloads/prism-v1.0.0-linux.tar.gz"
                download="prism-v1.0.0-linux.tar.gz"
                className="block w-full py-2.5 px-3 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
              >
                ArchLinux, Manjaro
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
