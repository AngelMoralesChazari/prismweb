import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, Play, BookOpen } from 'lucide-react';

export type PageView = 'home' | 'about' | 'demo' | 'docs';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView, articleId?: string) => void;
}

/**
 * Icon-only mark from `public/Prismv1.svg` (the double chevron `>>`)
 * with tight viewBox so it has zero empty margin.
 */
export const PrismIconLogo: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  variant?: 'onLight' | 'onDark';
}> = ({ className = 'h-7 w-auto', style, variant = 'onLight' }) => {
  const primaryColor = variant === 'onDark' ? '#ffffff' : '#0f172a';
  const normalizedStyle: React.CSSProperties = {
    ...style,
    ...(typeof style?.height === 'string'
      ? { height: style.height.replace(/\s+/g, '') }
      : {}),
  };

  return (
    <svg
      viewBox="240 2240 11550 7620"
      className={className}
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
        ...normalizedStyle,
      }}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PRISM Icon"
    >
      <path
        d="M2410.877,2248.827L5259.959,2248.827L7955.404,4974.369L3118.058,9846.205L246.395,9849.968L5088.399,4981.344L2410.877,2248.827Z"
        style={{ fill: primaryColor, stroke: primaryColor, strokeWidth: '1px' }}
      />
      <path
        d="M6254.084,2248.827L9091.873,2248.827L11778.046,4983.941L9061.407,7718.418L6205.741,7723.123L8920.27,4985.071L6254.084,2248.827Z"
        style={{ fill: 'rgb(4,173,214)', stroke: 'rgb(4,173,214)', strokeWidth: '1px' }}
      />
    </svg>
  );
};

/**
 * Exact official full logo from `public/BannerPrismVSinFOndo1.svg`
 * used in the Hero banner and Footer.
 */
export const PrismFullLogo: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  variant?: 'onLight' | 'onDark';
}> = ({ className = 'h-10 w-auto', style, variant = 'onLight' }) => {
  const primaryColor = variant === 'onDark' ? '#ffffff' : '#0f172a';
  const normalizedStyle: React.CSSProperties = {
    ...style,
    ...(typeof style?.height === 'string'
      ? { height: style.height.replace(/\s+/g, '') }
      : {}),
  };

  return (
    <svg
      viewBox="140 285 1345 370"
      className={className}
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
        ...normalizedStyle,
      }}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PRISM Logic Language"
    >
      {/* LOGIC LANGUAGE subtitle */}
      <g transform="matrix(1.086587,0,0,1.086587,719.792,581.408)">
        <text
          x="68.118px"
          y="0px"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            fontSize: '66.263px',
            fill: 'rgb(4,173,214)',
          }}
        >
          L<tspan x="103.171px" y="0px">O</tspan>GIC LANGU<tspan x="474.506px 515.39px" y="0px 0px">AG</tspan>E
        </text>
      </g>

      {/* PRISM main wordmark paths */}
      <g transform="matrix(0.925278,0,0,0.925278,225.183668,373.77447)">
        <path
          d="M542.411,134.046L566.603,134.046L566.603,52.83L619.595,52.83C655.019,52.83 682.955,31.23 682.955,-5.346L682.955,-9.09C682.955,-45.954 655.595,-67.554 619.595,-67.554L542.411,-67.554L542.411,134.046ZM566.603,30.942L566.603,-45.666L617.003,-45.666C643.211,-45.666 658.763,-32.13 658.763,-8.802L658.763,-5.922C658.763,17.694 642.635,30.942 617.003,30.942L566.603,30.942Z"
          style={{ fill: primaryColor, fillRule: 'nonzero' }}
        />
        <path
          d="M715.499,134.046L739.691,134.046L739.691,51.39L809.387,51.39C822.347,51.39 828.395,57.726 828.395,69.246L828.395,134.046L852.299,134.046L852.299,66.366C852.299,49.086 842.219,40.734 828.395,40.158L828.395,36.126C845.675,30.654 860.363,15.678 860.363,-10.818L860.363,-13.986C860.363,-47.394 834.155,-67.554 797.003,-67.554L715.499,-67.554L715.499,134.046ZM739.691,29.502L739.691,-45.666L794.699,-45.666C821.483,-45.666 836.171,-32.418 836.171,-9.09L836.171,-7.074C836.171,15.966 820.907,29.502 794.699,29.502L739.691,29.502Z"
          style={{ fill: primaryColor, fillRule: 'nonzero' }}
        />
        <rect
          x="897.227"
          y="-67.554"
          width="24.192"
          height="201.6"
          style={{ fill: primaryColor, fillRule: 'nonzero' }}
        />
        <path
          d="M1034.603,138.078C1078.379,138.078 1106.891,114.75 1106.891,79.038C1106.891,43.614 1079.531,30.366 1044.683,22.302L1029.707,18.558C1002.923,11.934 987.083,4.734 987.083,-16.866C987.083,-38.466 1004.363,-50.562 1031.147,-50.562C1058.795,-50.562 1078.955,-38.466 1078.955,-9.378L1078.955,2.718L1102.859,2.718L1102.859,-9.378C1102.859,-50.562 1071.755,-71.586 1031.147,-71.586C990.539,-71.586 963.179,-50.562 963.179,-16.578C963.179,17.406 987.371,31.23 1023.083,39.87L1038.059,43.614C1065.131,49.95 1082.987,57.438 1082.987,79.614C1082.987,101.214 1065.995,117.054 1034.603,117.054C1003.787,117.054 982.187,101.214 982.187,67.518L982.187,61.47L958.283,61.47L958.283,67.518C958.283,114.75 990.539,138.078 1034.603,138.078Z"
          style={{ fill: primaryColor, fillRule: 'nonzero' }}
        />
        <path
          d="M1144.043,134.046L1167.371,134.046L1167.371,-51.714L1171.403,-51.714L1224.683,134.046L1266.443,134.046L1319.723,-51.714L1323.755,-51.714L1323.755,134.046L1347.083,134.046L1347.083,-67.554L1301.003,-67.554L1247.435,118.782L1243.691,118.782L1190.123,-67.554L1144.043,-67.554L1144.043,134.046Z"
          style={{ fill: primaryColor, fillRule: 'nonzero' }}
        />
      </g>

      {/* Left Chevron */}
      <g transform="matrix(0.045857,0,0,0.045857,139.806362,193.091087)">
        <path
          d="M2410.877,2248.827L5259.959,2248.827L7955.404,4974.369L3118.058,9846.205L246.395,9849.968L5088.399,4981.344L2410.877,2248.827Z"
          style={{ fill: primaryColor, stroke: primaryColor, strokeWidth: '21.81px' }}
        />
      </g>

      {/* Right Cyan Chevron */}
      <g transform="matrix(0.045857,0,0,0.045857,139.806362,193.091087)">
        <path
          d="M6254.084,2248.827L9091.873,2248.827L11778.046,4983.941L9061.407,7718.418L6205.741,7723.123L8920.27,4985.071L6254.084,2248.827Z"
          style={{
            fill: 'rgb(4,173,214)',
            stroke: 'rgb(4,173,214)',
            strokeWidth: '21.81px',
          }}
        />
      </g>
    </svg>
  );
};

export const PrismLogo = PrismFullLogo;

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.whatIs },
    { id: 'demo', label: t.nav.demo },
    { id: 'docs', label: t.nav.docs },
  ];

  const handleNav = (id: PageView) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/90 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Desktop & Mobile Header: Icon close to navigation links, centered & balanced */}
        <div className="flex items-center justify-between md:justify-center md:gap-10 h-14">
          {/* 1. Icon-only Logo from Prismv1.svg */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 text-left group focus:outline-none flex-shrink-0"
            title="PRISM — Inicio"
          >
            {/* 👇 AQUÍ AJUSTAS EL TAMAÑO DEL ICONO DEL HEADER (en px) 👇 */}
            <PrismIconLogo
              style={{ height: '26px', width: 'auto' }}
              className="transition-transform group-hover:scale-105"
              variant="onLight"
            />
          </button>

          {/* 2. Navigation Links + Actions right next to it without big empty gap */}
          <div className="hidden md:flex items-center gap-5 h-full">
            <nav className="flex items-center gap-1 h-full">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`relative h-14 px-3.5 text-[13px] font-medium transition-colors flex items-center ${
                      isActive
                        ? 'text-[#04add6] font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#04add6] rounded-t" />
                    )}
                  </button>
                );
              })}
            </nav>

            <span className="h-4 w-[1px] bg-slate-200" />

            {/* Language Switcher & Primary CTA Button */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center bg-slate-100 border border-slate-200 rounded-md p-0.5 text-xs">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    language === 'es'
                      ? 'bg-white text-slate-900 font-semibold shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    language === 'en'
                      ? 'bg-white text-slate-900 font-semibold shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => handleNav('docs')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#04add6] hover:bg-[#0396ba] text-white shadow-sm transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Manual PRISM' : 'PRISM Manual'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center justify-end gap-2">
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded p-0.5 text-xs">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded ${
                  language === 'es' ? 'bg-white text-slate-900 font-semibold shadow-sm' : 'text-slate-500'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded ${
                  language === 'en' ? 'bg-white text-slate-900 font-semibold shadow-sm' : 'text-slate-500'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                activePage === item.id
                  ? 'bg-sky-50 text-[#04add6] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNav('demo')}
              className="w-full py-2.5 rounded-md text-xs font-semibold bg-[#04add6] text-white flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.tryDemo}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
