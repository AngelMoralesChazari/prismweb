import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Code2, Shield, Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-[#070a13] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0b0f19] rounded-[6.5px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                LogicScript
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300">
                v0.2.0
              </span>
            </div>

            <p className="text-slate-300 text-xs max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Extensión .ls</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Licencia MIT</span>
              </span>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase">
              {t.nav.whatIs}
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#what-is" className="hover:text-cyan-400 transition-colors">{t.nav.whatIs}</a></li>
              <li><a href="#demo" className="hover:text-cyan-400 transition-colors">{t.nav.demo}</a></li>
              <li><a href="#philosophy" className="hover:text-cyan-400 transition-colors">{t.nav.philosophy}</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">{t.nav.features}</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase">
              Recursos
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#docs" className="hover:text-cyan-400 transition-colors">{t.nav.docs}</a></li>
              <li><a href="#examples" className="hover:text-cyan-400 transition-colors">{t.nav.examples}</a></li>
              <li><a href="#reference" className="hover:text-cyan-400 transition-colors">{t.nav.reference}</a></li>
              <li><a href="#history" className="hover:text-cyan-400 transition-colors">{t.nav.history}</a></li>
            </ul>
          </div>

          {/* Quick Links Column 3: Community & Language */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase">
              {t.nav.community} & Idioma
            </h4>
            <ul className="space-y-1.5 mb-3">
              <li>
                <a 
                  href="https://github.com/logicscript/logicscript" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li><a href="#community" className="hover:text-cyan-400 transition-colors">{t.community.contribTitle}</a></li>
            </ul>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-slate-400 text-[11px]">Idioma:</span>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                  language === 'es' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                  language === 'en' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'
                }`}
              >
                English
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>LogicScript</strong> Project. {t.footer.rights}
          </div>
          <div className="text-center sm:text-right">
            <span>{t.footer.license}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
