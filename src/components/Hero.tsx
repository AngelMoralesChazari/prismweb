import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageView, PrismLogo } from './Navbar';
import {
  Play,
  Terminal,
  GitBranch,
  Layers,
  Cpu,
  FileText,
  Compass,
  Code2,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView, articleId?: string) => void;
}

const heroSlides = [
  {
    id: 1,
    filename: 'mi_archivo.pr',
    title: {
      es: '1. prnl — Ejercicio NL Canónico (Método en Papel)',
      en: '1. prnl — Canonical NL Exercise (Paper Method)',
    },
    desc: {
      es: 'Separa la entrada en nl premisa y sigue el flujo en papel paso a paso: Enunciado → Descomposición atómica → Traducción formal → Tabla de verdad.',
      en: 'Separates input into nl premisa and follows the step-by-step paper workflow: Statement → Atomic breakdown → Formal translation → Truth table.',
    },
    code: `# 1. prnl (o nlex) — Ejercicio NL Canónico
module mi_archivo
use core

nl premisa = "si p entonces q"

atom p = "antecedente"
atom q = "consecuente"

let equivalencia = translate(premisa)

vertauto equivalencia {
    steps
    table
    verdict
}`,
    output: `>>> Fórmula emitida: (p → q)
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V
>>> Dictamen: contingency`,
  },
  {
    id: 2,
    filename: 'literal.pr',
    title: {
      es: '2. prnlit — Lenguaje Natural con Translate Literal',
      en: '2. prnlit — Natural Language with Literal Translate',
    },
    desc: {
      es: 'No crea una variable nl: pasa el texto en español directamente entre comillas dentro de translate("...") para frases cortas.',
      en: 'Skips the nl variable: passes the natural language string directly inside translate("...") for concise one-off translations.',
    },
    code: `# 2. prnlit — Translate Literal directo
module mi_archivo
use core

atom p = "antecedente"
atom q = "consecuente"

let implicacion = translate("si estudio apruebo")

vertauto implicacion {
    steps
    table
    verdict
}`,
    output: `>>> Entrada literal: "si estudio apruebo"
>>> Enlace: p="antecedente", q="consecuente"
>>> Fórmula emitida: (p → q)
>>> Dictamen: contingency`,
  },
  {
    id: 3,
    filename: 'simbolica.pr',
    title: {
      es: '3. prform — Fórmula Simbólica Pura',
      en: '3. prform — Pure Symbolic Formula',
    },
    desc: {
      es: 'No usa lenguaje natural ni translate. La fórmula se escribe directamente en matemática proposicional con conectores (impl, and, or, not, iff).',
      en: 'No natural language or translate. The formula is written directly in propositional math using connectives (impl, and, or, not, iff).',
    },
    code: `# 3. prform — Fórmula Simbólica Pura
module mi_archivo
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

formula f = p impl q

vertauto f {
    steps
    table
    verdict
}`,
    output: `>>> Formalización directa: (p → q)
>>> Espacio de estados: 2^2 = 4 filas
>>> Dictamen: (p → q)  [contingency]`,
  },
  {
    id: 4,
    filename: 'inline.pr',
    title: {
      es: '4. prinl — Expresión Directa / Inline (al vuelo)',
      en: '4. prinl — Direct / Inline Expression',
    },
    desc: {
      es: 'No crea variables intermedias con formula ni let. Evalúa la expresión directamente entre paréntesis dentro de vertauto (...) para pruebas rápidas.',
      en: 'No intermediate formula or let variables. Evaluates the expression directly inside vertauto (...) for ultra-fast checks.',
    },
    code: `# 4. prinl — Expresión Directa / Inline
module mi_archivo
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

vertauto (p impl q) {
    steps
    table
    verdict
}`,
    output: `>>> Evaluación al vuelo: (p → q)
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V
>>> Dictamen: contingency`,
  },
  {
    id: 5,
    filename: 'de_morgan.pr',
    title: {
      es: '5. Equivalencias y Tautologías (Álgebra de Boole)',
      en: '5. Equivalences & Tautologies (Boolean Algebra)',
    },
    desc: {
      es: 'Ideal para probar leyes de De Morgan, tautologías como (p → q) ↔ (¬p ∨ q) o reglas de inferencia directamente en código.',
      en: 'Ideal for proving De Morgan laws, tautologies like (p → q) ↔ (¬p ∨ q), or inference rules directly in code.',
    },
    code: `# Demostración: (p → q) ↔ (¬p ∨ q)
module de_morgan
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

vertauto ((p impl q) iff (not p or q)) {
    steps
    table
    verdict
}`,
    output: `>>> Fórmula: (p → q) ↔ (¬p ∨ q)
>>> Resultado: V en las 4 combinaciones
>>> Dictamen: tautology (Equivalencia demostrada)`,
  },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const currentSlide = heroSlides[activeSlideIndex];

  const renderHighlightedCode = (code: string) => {
    return code.split('\n').map((line, i) => {
      if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
        return (
          <div key={i} className="text-slate-400 italic">
            {line}
          </div>
        );
      }
      const regex = /(#.*$|"(?:\\.|[^"\\])*"|\b(?:module|use|core|atom|nl|let|formula|vertauto|steps|table|verdict|translate|not|and|or|impl|iff)\b)/g;
      const parts = line.split(regex);
      return (
        <div key={i} className="whitespace-pre">
          {parts.map((part, idx) => {
            if (!part) return null;
            if (part.startsWith('#')) return <span key={idx} className="text-slate-400 italic">{part}</span>;
            if (part.startsWith('"')) return <span key={idx} className="text-emerald-300">{part}</span>;
            if (['module', 'use', 'core'].includes(part)) return <span key={idx} className="text-amber-300 font-semibold">{part}</span>;
            if (['atom', 'nl', 'let', 'formula'].includes(part)) return <span key={idx} className="text-sky-400 font-semibold">{part}</span>;
            if (['vertauto', 'steps', 'table', 'verdict'].includes(part)) return <span key={idx} className="text-purple-300 font-semibold">{part}</span>;
            if (part === 'translate') return <span key={idx} className="text-cyan-300">{part}</span>;
            if (['not', 'and', 'or', 'impl', 'iff'].includes(part)) return <span key={idx} className="text-orange-300 font-semibold">{part}</span>;
            return <span key={idx} className="text-slate-100">{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <div>
      {/* 1. CLEAN HERO BANNER WITH OFFICIAL PRISMv1.svg & SPACE GROTESK */}
      <section className="bg-prism-hero text-white py-14 sm:py-18 border-b border-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Official Full Banner Logo (`BannerPrismVSinFOndo1.svg`) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start mb-5">
                {/* 👇 AQUÍ AJUSTAS EL TAMAÑO DEL LOGO DEL HERO (en px) 👇 */}
                <PrismLogo
                  style={{ height: '96px', width: 'auto' }}
                  className="mb-2.5"
                  variant="onDark"
                />
              </div>

              <h2 className="text-2xl sm:text-[26px] font-normal text-sky-50 leading-snug mb-4">
                {language === 'es'
                  ? 'Lenguaje declarativo de lógica proposicional para todos.'
                  : 'Declarative propositional logic language for everyone.'}
              </h2>

              <p className="text-sm text-sky-100/85 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                {t.hero.liveBadge}
              </p>

              {/* Main CTA Button */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <button
                  onClick={() => onNavigate('docs')}
                  className="w-72 py-3.5 px-6 rounded bg-[#04add6] hover:bg-[#0396ba] text-white font-semibold text-sm shadow-lg transition-all text-center"
                >
                  <div>{language === 'es' ? 'Explorar Documentación' : 'Explore Documentation'}</div>
                  <div className="text-xs font-normal text-sky-100 mt-0.5">
                    {language === 'es' ? 'Manual oficial y referencia' : 'Official manual & reference'}
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('demo')}
                  className="w-72 py-2.5 px-4 rounded bg-slate-900/85 hover:bg-slate-900 text-xs text-slate-200 border border-white/10 transition-colors text-center"
                >
                  <span className="text-[#04add6] font-medium">
                    {language === 'es' ? 'Playground interactivo' : 'Interactive Playground'}
                  </span>{' '}
                  {language === 'es' ? 'disponible' : 'available'}
                </button>
              </div>
            </div>

            {/* Right Column: Clean macOS Terminal Window + Python-style [1..5] Slides */}
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-900/60 bg-[#21252b]">
                {/* macOS Window Titlebar */}
                <div className="bg-[#e2e8f0] text-slate-700 px-4 py-2.5 flex items-center justify-between text-xs font-medium border-b border-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-700">
                    <Terminal className="w-3.5 h-3.5 text-slate-600" />
                    <span>PRISM — {currentSlide.filename}</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Terminal + Explanation Split (Python.org inspired) */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Code & Output Pane */}
                  <div className="md:col-span-7 p-5 font-mono text-[13px] leading-relaxed bg-[#1d222a] text-slate-100 border-b md:border-b-0 md:border-r border-slate-700/60 min-h-[300px] flex flex-col justify-between">
                    <div>{renderHighlightedCode(currentSlide.code)}</div>
                    <div className="mt-3.5 pt-3 border-t border-slate-700/70 text-xs text-emerald-300 whitespace-pre-line">
                      {currentSlide.output}
                    </div>
                  </div>

                  {/* Right Info Pane with Python-style numbered buttons [1][2][3][4][5] */}
                  <div className="md:col-span-5 p-5 bg-[#162d47] flex flex-col justify-between">
                    <div>
                      <h3 className="text-amber-300 font-bold text-base mb-2.5">
                        {currentSlide.title[language]}
                      </h3>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {currentSlide.desc[language]}
                      </p>
                      <button
                        onClick={() => onNavigate('demo')}
                        className="mt-4 inline-flex items-center gap-1 text-xs text-[#04add6] hover:text-amber-300 underline underline-offset-4 transition-colors"
                      >
                        <span>
                          {language === 'es' ? 'Probar este código en vivo' : 'Try this code live'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Numbered slide buttons */}
                    <div className="pt-5 flex items-center justify-center md:justify-start gap-1.5">
                      {heroSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => setActiveSlideIndex(idx)}
                          className={`w-7 h-7 rounded text-xs font-semibold transition-all ${activeSlideIndex === idx
                            ? 'bg-[#04add6] text-white shadow'
                            : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white border border-white/10'
                            }`}
                        >
                          {slide.id}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MINIMAL 3-PILLAR ICON BAR */}
      <section className="bg-white border-b border-slate-200 shadow-sm py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <button
              onClick={() => onNavigate('about')}
              className="flex flex-col items-center group focus:outline-none"
            >
              <Cpu className="w-11 h-11 text-slate-500 group-hover:text-[#04add6] transition-colors mb-2 stroke-[1.5]" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
                {language === 'es' ? 'Lenguaje Natural a Lógica' : 'Natural Language to Logic'}
              </span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center group"
            >
              <GitBranch className="w-11 h-11 text-slate-500 group-hover:text-[#04add6] transition-colors mb-2 stroke-[1.5]" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
                {language === 'es' ? 'Repositorio Abierto' : 'Open Repository'}
              </span>
            </a>

            <button
              onClick={() => onNavigate('demo')}
              className="flex flex-col items-center group focus:outline-none"
            >
              <Layers className="w-11 h-11 text-slate-500 group-hover:text-[#04add6] transition-colors mb-2 stroke-[1.5]" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
                {language === 'es' ? 'Tablas de Verdad 2^n' : '2^n Truth Tables'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. PYTHON.ORG-STYLE 4 CLEAN COLUMNS + 2 SUMMARY CARDS */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* 4 Columns with top #04add6 accent line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-[3px] border-[#04add6] pt-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#04add6]" />
                <span>{language === 'es' ? 'Empezar' : 'Get Started'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {language === 'es'
                  ? 'Tanto si estás aprendiendo lógica proposicional como si desarrollas modelos formales, PRISM es fácil de aprender y utilizar.'
                  : 'Whether you are new to formal logic or an experienced developer, PRISM is easy to learn and use.'}
              </p>
              <button
                onClick={() => onNavigate('docs', 'first-program')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-800 hover:underline"
              >
                {language === 'es' ? 'Comienza con Tu Primer Programa →' : 'Start with Your First Program →'}
              </button>
            </div>

            <div className="border-t-[3px] border-[#04add6] pt-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-2">
                <Play className="w-4 h-4 text-[#04add6]" />
                <span>Playground</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {language === 'es'
                  ? 'Prueba el intérprete de PRISM directamente desde el navegador. Inspecciona tablas de verdad, pasos y dictámenes.'
                  : 'Test the PRISM interpreter directly in your browser. Inspect truth tables, steps, and formal verdicts.'}
              </p>
              <button
                onClick={() => onNavigate('demo')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-800 hover:underline"
              >
                {language === 'es' ? 'Abrir Playground Interactivo →' : 'Open Interactive Playground →'}
              </button>
            </div>

            <div className="border-t-[3px] border-[#04add6] pt-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#04add6]" />
                <span>{language === 'es' ? 'Documentación' : 'Docs'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {language === 'es'
                  ? 'Documentación completa para las primitivas de PRISM, operadores lógicos, traducción PLN y evaluación con vertauto.'
                  : 'Complete documentation for PRISM primitives, logical operators, NLP translation, and vertauto evaluation.'}
              </p>
              <button
                onClick={() => onNavigate('docs')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-800 hover:underline"
              >
                {language === 'es' ? 'Ir al Manual de PRISM →' : 'Go to PRISM Manual →'}
              </button>
            </div>

            <div className="border-t-[3px] border-[#04add6] pt-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-[#04add6]" />
                <span>{language === 'es' ? 'Referencia Sintáctica' : 'Syntax Reference'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {language === 'es'
                  ? 'Consulta rápidamente la precedencia de operadores (not, and, or, impl, iff) y las palabras reservadas del lenguaje.'
                  : 'Quickly look up operator precedence (not, and, or, impl, iff) and reserved language keywords.'}
              </p>
              <button
                onClick={() => onNavigate('docs', 'syntax-reference')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-800 hover:underline"
              >
                {language === 'es' ? 'Ver tabla de operadores →' : 'View operators table →'}
              </button>
            </div>
          </div>

          {/* 2 Clean Cards ("Sobre PRISM" & "Colaborar") */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 pb-2.5 border-b border-slate-200">
                {language === 'es' ? 'Sobre PRISM' : 'About PRISM'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {t.whatIs.p1}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {t.whatIs.p2}
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-700 inline-flex items-center gap-1"
              >
                <span>{language === 'es' ? 'Conocer más sobre la filosofía de PRISM' : 'Learn more about PRISM philosophy'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-lg border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3 pb-2.5 border-b border-slate-200">
                {language === 'es' ? 'Colaborar' : 'Collaborate'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {language === 'es'
                  ? 'PRISM es un proyecto abierto enfocado en acercar el razonamiento lógico formal a estudiantes, docentes y desarrolladores de software mediante herramientas claras y modernas.'
                  : 'PRISM is an open project focused on bringing formal logical reasoning closer to students, educators, and software developers through clear, modern tooling.'}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {language === 'es'
                  ? 'Puedes contribuir probando ejemplos en el Playground, reportando casos de análisis en lenguaje natural o consultando el manual técnico.'
                  : 'You can contribute by testing examples in the Playground, reporting natural language parsing cases, or exploring the technical manual.'}
              </p>
              <button
                onClick={() => onNavigate('docs')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-700 inline-flex items-center gap-1"
              >
                <span>{language === 'es' ? 'Explorar el Manual de PRISM' : 'Explore the PRISM Manual'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
