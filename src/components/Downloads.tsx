import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageView } from './Navbar';
import { Download } from 'lucide-react';

interface DownloadsProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubLatestRelease {
  tag_name?: string;
  assets?: GitHubReleaseAsset[];
}

const GITHUB_RELEASE_BASE =
  'https://github.com/AngelMoralesChazari/prism/releases/latest/download';

export const Downloads: React.FC<DownloadsProps> = () => {
  const { language } = useLanguage();

  // Static fallback URLs (/releases/latest/download/...) updated automatically by GitHub API
  const [versionTag, setVersionTag] = useState<string>('v1.1.0');
  const [exeName, setExeName] = useState<string>('Prism-1.0.0-Setup.exe');
  const [macArmName, setMacArmName] = useState<string>('Prism-1.1.0-macOS-arm64.pkg');
  const [macIntelName, setMacIntelName] = useState<string>('Prism-1.1.0-macOS-Universal.pkg');

  const [winExeUrl, setWinExeUrl] = useState<string>(
    `${GITHUB_RELEASE_BASE}/Prism-1.0.0-Setup.exe`
  );
  const [winZipUrl, setWinZipUrl] = useState<string>(
    `${GITHUB_RELEASE_BASE}/prism-v1.0.0-windows.zip`
  );
  const [macArmUrl, setMacArmUrl] = useState<string>(
    `${GITHUB_RELEASE_BASE}/Prism-1.1.0-macOS-arm64.pkg`
  );
  const [macIntelUrl, setMacIntelUrl] = useState<string>(
    `${GITHUB_RELEASE_BASE}/Prism-1.1.0-macOS-Universal.pkg`
  );
  const [linuxTarUrl, setLinuxTarUrl] = useState<string>(
    `${GITHUB_RELEASE_BASE}/prism-v1.0.0-linux.tar.gz`
  );

  useEffect(() => {
    let isMounted = true;

    fetch('https://api.github.com/repos/AngelMoralesChazari/prism/releases/latest')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch latest release');
        return r.json() as Promise<GitHubLatestRelease>;
      })
      .then((release) => {
        if (!isMounted || !release) return;

        if (release.tag_name) {
          setVersionTag(
            release.tag_name.startsWith('v') ? release.tag_name : `v${release.tag_name}`
          );
        }

        if (Array.isArray(release.assets)) {
          const exe = release.assets.find((a) => a.name.endsWith('-Setup.exe') || a.name.endsWith('.exe'));
          const winZip = release.assets.find((a) => a.name.endsWith('-windows.zip') || a.name.endsWith('.zip'));
          const linux = release.assets.find((a) => a.name.endsWith('-linux.tar.gz'));
          const macArm = release.assets.find(
            (a) => a.name.endsWith('-macOS-arm64.pkg') || (a.name.includes('arm64') && a.name.endsWith('.pkg'))
          );
          const macIntel = release.assets.find(
            (a) => a.name.endsWith('-macOS-Universal.pkg') || ((a.name.includes('Universal') || a.name.includes('x64')) && a.name.endsWith('.pkg'))
          );

          if (exe) {
            setWinExeUrl(exe.browser_download_url);
            setExeName(exe.name);
          }
          if (winZip) {
            setWinZipUrl(winZip.browser_download_url);
          }
          if (linux) {
            setLinuxTarUrl(linux.browser_download_url);
          }
          if (macArm) {
            setMacArmUrl(macArm.browser_download_url);
            setMacArmName(macArm.name);
          }
          if (macIntel) {
            setMacIntelUrl(macIntel.browser_download_url);
            setMacIntelName(macIntel.name);
          }
        }
      })
      .catch(() => {
        /* Mantiene los enlaces estáticos /latest/download/ de respaldo */
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-white min-h-[82vh] pb-16">
      {/* Top Blue Banner */}
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
            <strong className="font-bold">Prism</strong> {versionTag}
          </p>
        </div>

        {/* 3 Columns: Windows (.exe + .zip) | Mac (.tar.gz) | Linux (.tar.gz) */}
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

            {/* Primary Blue Download Button: Graphical Installer (.exe with bundled Java) */}
            <a
              id="btn-download-windows"
              href={winExeUrl}
              className="w-full py-5 px-6 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
            >
              <span className="text-base font-bold tracking-wide flex items-center gap-2">
                <span>
                  {language === 'es'
                    ? 'Windows (.exe)'
                    : 'Windows (.exe)'}
                </span>
                <Download className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="text-xs text-sky-100 mt-1 font-normal">
                Windows 10, 11 (64 bits • Java integrado)
              </span>
            </a>

            {/* Alternative Windows Portable ZIP Button */}
            <a
              id="btn-download-win-zip"
              href={winZipUrl}
              className="w-full mt-2.5 py-2.5 px-4 rounded border border-[#0e6eb8]/30 bg-sky-50/60 hover:bg-sky-100/70 text-[#0e6eb8] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {language === 'es'
                  ? 'Descargar versión ZIP para Windows'
                  : 'Download ZIP version for Windows'}
              </span>
            </a>

            {/* Updated Windows Instructions */}

          </div>

          {/* COLUMN 2: MAC (Apple Logo + .pkg Graphical Installers) */}
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

            {/* Primary Blue Download Button: Apple Silicon (M1 / M2 / M3 / M4) */}
            <a
              id="btn-download-mac-arm"
              href={macArmUrl}
              className="w-full py-5 px-6 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
            >
              <span className="text-base font-bold tracking-wide flex items-center gap-2">
                <span>Mac (.pkg)</span>
                <Download className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="text-xs text-sky-100 mt-1 font-normal">
                Apple Silicon (M1, M2, M3, M4)
              </span>
            </a>

            {/* Secondary Button: Mac Intel (.pkg) */}
            <a
              id="btn-download-mac-intel"
              href={macIntelUrl}
              className="w-full mt-2.5 py-2.5 px-4 rounded border border-[#0e6eb8]/30 bg-sky-50/60 hover:bg-sky-100/70 text-[#0e6eb8] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {language === 'es'
                  ? 'Descargar para Mac Intel (.pkg)'
                  : 'Download for Mac Intel (.pkg)'}
              </span>
            </a>



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

            {/* Unified Linux Download Button (.tar.gz works across all distros) */}
            <a
              id="btn-download-linux"
              href={linuxTarUrl}
              className="w-full py-5 px-6 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center group"
            >
              <span className="text-base font-bold tracking-wide flex items-center gap-2">
                <span>Linux (.tar.gz)</span>
                <Download className="w-4 h-4 opacity-80 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <span className="text-xs text-sky-100 mt-1 font-normal">
                Debian, Ubuntu, Fedora, CentOS, Arch
              </span>
            </a>

            {/* Consola Sub-buttons */}
            <div className="w-full mt-4">
              <div className="text-xs font-bold text-slate-800 mb-2">
                {language === 'es' ? 'Consola' : 'Console'}
              </div>
              <div className="grid grid-cols-3 gap-1.5 mb-2">
                <a
                  href={linuxTarUrl}
                  className="py-2.5 px-2 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
                >
                  Debian, Ubuntu
                </a>
                <a
                  href={linuxTarUrl}
                  className="py-2.5 px-2 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
                >
                  Fedora
                </a>
                <a
                  href={linuxTarUrl}
                  className="py-2.5 px-2 rounded bg-[#0e6eb8] hover:bg-[#0b5a97] text-white text-[11px] font-medium transition-colors"
                >
                  Rhel, CentOS
                </a>
              </div>
              <a
                href={linuxTarUrl}
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
