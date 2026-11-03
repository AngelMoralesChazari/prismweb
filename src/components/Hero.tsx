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
      es: '1. prnl — Ejercicio NL Canónico',
      en: '1. prnl — Canonical NL Exercise',
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
>>> Tabla: F|F→V, F|V→V, V|F→F, V|V→V
>>> Dictamen: contingency`,
  },
  {
    id: 2,
    filename: 'literal.pr',
    title: {
      es: '2. prnlit — Translate Literal',
      en: '2. prnlit — Literal Translate',
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
      es: '4. prinl — Expresión Directa / Inline',
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
>>> Tabla: F|F→V, F|V→V, V|F→F, V|V→V
>>> Dictamen: contingency`,
  },
  {
    id: 5,
    filename: 'de_morgan.pr',
    title: {
      es: '5. Equivalencias y Tautologías',
      en: '5. Equivalences & Tautologies',
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
      // 👇 AQUÍ SE CONTROLA EL ESPACIO DE CADA SALTO DE LÍNEA EN BLANCO (height: '8px') 👇
      if (line.trim() === '') {
        return <div key={i} style={{ height: '12px' }} />;
      }
      if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
        return (
          <div key={i} className="text-slate-400 italic whitespace-pre">
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
      <section className="bg-prism-hero text-white py-9 sm:py-11 border-b border-slate-800/30 overflow-x-hidden">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-10">

            {/* Left Column: Anchored on the left so it never shifts */}
            <div className="w-full lg:w-[420px] flex-shrink-0 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start mb-4">
                {/* 👇 AQUÍ AJUSTAS EL TAMAÑO DEL LOGO DEL HERO (en px) 👇 */}
                <PrismLogo
                  style={{ height: '92px', width: 'auto' }}
                  className="mb-2"
                  variant="onDark"
                />
              </div>

              <h2 className="text-xl sm:text-[24px] font-normal text-sky-50 leading-snug mb-3.5">
                {language === 'es'
                  ? 'Lenguaje declarativo de lógica proposicional para todos.'
                  : 'Declarative propositional logic language for everyone.'}
              </h2>

              <p className="text-xs sm:text-sm text-sky-100/85 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
                {t.hero.liveBadge}
              </p>

              {/* Main CTA Button */}
              <div className="flex flex-col items-center lg:items-start gap-2.5">
                <button
                  onClick={() => onNavigate('downloads')}
                  className="w-68 py-3 px-6 rounded bg-[#04add6] hover:bg-[#0396ba] text-white font-semibold text-sm shadow-lg transition-all text-center"
                >
                  <div>{language === 'es' ? 'Descargar Prism v1.0.0' : 'Download Prism v1.0.0'}</div>
                  <div className="text-xs font-normal text-sky-100 mt-0.5">
                    {language === 'es' ? 'Windows, macOS y Linux' : 'Windows, macOS & Linux'}
                  </div>
                </button>

                <button
                  onClick={() => onNavigate('docs')}
                  className="w-68 py-2 px-4 rounded bg-slate-900/85 hover:bg-slate-900 text-xs text-slate-200 border border-white/10 transition-colors text-center"
                >
                  <span className="text-[#04add6] font-medium">
                    {language === 'es' ? 'Documentación Oficial v1.0' : 'Official v1.0 Documentation'}
                  </span>{' '}
                  — {language === 'es' ? 'Manual y Playground' : 'Manual & Playground'}
                </button>
              </div>
            </div>

            {/* 👇 AQUÍ AJUSTAS QUÉ TAN LARGA ES LA VENTANA HACIA LA DERECHA (width: '770px') 👇 */}
            {/* Su borde izquierdo queda fijo y solo crece hacia la derecha al subir los px */}
            <div
              style={{ width: '770px', maxWidth: '100%' }}
              className="flex-shrink-0"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-900/60 bg-[#21252b]">
                {/* macOS Window Titlebar */}
                <div className="bg-[#e2e8f0] text-slate-700 px-3.5 py-2 flex items-center justify-between text-xs font-medium border-b border-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11.5px] text-slate-700">
                    <Terminal className="w-3.5 h-3.5 text-slate-600" />
                    <span>PRISM — {currentSlide.filename}</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* 👇 AQUÍ AJUSTAS LA PROPORCIÓN CÓDIGO vs PANEL AZUL (1.85fr_1fr) Y ALTURA (390px) 👇 */}
                <div className="grid grid-cols-1 md:grid-cols-[1.85fr_1fr] md:h-[390px]">
                  {/* Code & Output Pane (Wider, larger font, no scroll needed) */}
                  <div className="px-4 py-3 font-mono bg-[#1d222a] text-slate-100 border-b md:border-b-0 md:border-r border-slate-700/60 h-full flex flex-col justify-between overflow-hidden">
                    {/* 👇 AQUÍ AJUSTAS EL TAMAÑO DE LETRA DEL CÓDIGO (fontSize) 👇 */}
                    <div style={{ fontSize: '15px', lineHeight: '1.35' }}>
                      {renderHighlightedCode(currentSlide.code)}
                    </div>

                    {/* 👇 AQUÍ AJUSTAS EL TAMAÑO DE LETRA DE LA SALIDA VERDE (fontSize) 👇 */}
                    <div
                      style={{ fontSize: '14px', lineHeight: '1.35' }}
                      className="mt-1.5 pt-2 border-t border-slate-700/70 text-emerald-300 whitespace-pre-line"
                    >
                      {currentSlide.output}
                    </div>
                  </div>

                  {/* Right Info Pane with Python-style numbered buttons [1][2][3][4][5] */}
                  <div className="p-4 bg-[#162d47] h-full flex flex-col justify-between">
                    <div>
                      {/* 👇 AQUÍ AJUSTAS EL TAMAÑO DEL TÍTULO Y DESCRIPCIÓN DE LA DERECHA 👇 */}
                      <h3
                        style={{ fontSize: '17px' }}
                        className="text-amber-300 font-bold leading-snug mb-2"
                      >
                        {currentSlide.title[language]}
                      </h3>
                      <p
                        style={{ fontSize: '15px' }}
                        className="text-slate-200 leading-relaxed"
                      >
                        {currentSlide.desc[language]}
                      </p>
                      <button
                        onClick={() => onNavigate('demo')}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#04add6] hover:text-amber-300 underline underline-offset-4 transition-colors"
                      >
                        <span>
                          {language === 'es' ? 'Probar este código en vivo' : 'Try this code live'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Numbered slide buttons */}
                    <div className="pt-3 flex items-center justify-center md:justify-start gap-1.5">
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

            <button
              onClick={() => onNavigate('docs', 'semantica-vertauto')}
              className="flex flex-col items-center group focus:outline-none"
            >
              <GitBranch className="w-11 h-11 text-slate-500 group-hover:text-[#04add6] transition-colors mb-2 stroke-[1.5]" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
                {language === 'es' ? 'Deducción y Dictamen Formal' : 'Formal Deduction & Verdict'}
              </span>
            </button>

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
                onClick={() => onNavigate('docs', 'gramatica-ebnf')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-800 hover:underline"
              >
                {language === 'es' ? 'Ver tabla de operadores →' : 'View operators table →'}
              </button>
            </div>
          </div>

          {/* 2 Cards: Left = "Colaborar", Right = "Herramientas Nativas y Snippets" (Image 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-lg border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
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
              </div>
              <button
                onClick={() => onNavigate('docs')}
                className="text-xs font-semibold text-[#04add6] hover:text-sky-700 inline-flex items-center gap-1"
              >
                <span>{language === 'es' ? 'Explorar el Manual de PRISM' : 'Explore the PRISM Manual'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-lg border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 pb-2.5 border-b border-slate-200 flex items-center justify-between">
                  <span>
                    {language === 'es'
                      ? 'Herramientas Nativas y Snippets'
                      : 'Native Tooling & Snippets'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#04add6] bg-sky-50 border border-sky-200/80 px-2.5 py-0.5 rounded-full">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>prc & VS Code</span>
                  </span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {language === 'es'
                    ? 'Valida y ejecuta archivos .pr desde consola con prc o utiliza la extensión oficial publicada en Visual Studio Code:'
                    : 'Validate and run .pr files from the terminal with prc or use the official extension published on Visual Studio Code:'}
                </p>

                <pre className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 mb-4 overflow-x-auto">
{`$ prc check argumento.pr
✓ Sintaxis y átomos verificados (Two-Pass)

$ prc run argumento.pr
>>> Dictamen: tautology (2^2 = 4 estados)`}
                </pre>

                <div className="grid grid-cols-4 gap-2 text-center font-mono text-xs font-semibold mb-4">
                  <span className="py-1.5 px-2 rounded bg-sky-50/80 text-sky-700 border border-sky-200/80">prnl</span>
                  <span className="py-1.5 px-2 rounded bg-sky-50/80 text-sky-700 border border-sky-200/80">prnlit</span>
                  <span className="py-1.5 px-2 rounded bg-sky-50/80 text-sky-700 border border-sky-200/80">prform</span>
                  <span className="py-1.5 px-2 rounded bg-sky-50/80 text-sky-700 border border-sky-200/80">prinl</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('downloads')}
                  className="text-xs font-semibold text-[#04add6] hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>
                    {language === 'es' ? 'Descargar prc v1.0.0' : 'Download prc v1.0.0'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('docs', 'snippets-catalogo')}
                  className="text-xs font-semibold text-slate-600 hover:text-[#04add6] underline underline-offset-4"
                >
                  {language === 'es' ? 'Ver Snippets →' : 'View Snippets →'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
