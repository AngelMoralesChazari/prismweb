import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GithubIcon } from './GithubIcon';
import { 
  Users, 
  FileCode2, 
  Bug, 
  MessageSquare, 
  ExternalLink,
  HeartHandshake
} from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="community" className="py-24 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-medium mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Ecosistema Abierto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.community.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.community.subtitle}
          </p>
        </div>

        {/* 4 Community Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. Official Repo */}
          <div className="rounded-2xl bg-[#0d1220] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t.community.repoTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.community.repoDesc}
              </p>
            </div>
            <div>
              <a
                href="https://github.com/logicscript/logicscript"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <span>github.com/logicscript</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 2. Contributing Guide */}
          <div className="rounded-2xl bg-[#0d1220] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 mb-4">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t.community.contribTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.community.contribDesc}
              </p>
            </div>
            <div>
              <a
                href="#docs"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <span>Guía CONTRIBUTING.md</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 3. Issue Reporting */}
          <div className="rounded-2xl bg-[#0d1220] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-4">
                <Bug className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t.community.issuesTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.community.issuesDesc}
              </p>
            </div>
            <div>
              <a
                href="https://github.com/logicscript/logicscript/issues"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <span>Reportar un Issue</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 4. Contact & Community */}
          <div className="rounded-2xl bg-[#0d1220] border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t.community.contactTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {t.community.contactDesc}
              </p>
            </div>
            <div>
              <a
                href="#docs"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <span>Foro de Discusión</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Notice bar for transparent placeholders */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
          <HeartHandshake className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>
            Los enlaces a repositorios y foros corresponden a los identificadores oficiales del proyecto <strong>LogicScript</strong> y están listos para asociarse al servidor y canal productivo.
          </span>
        </div>

      </div>
    </section>
  );
};
