import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CodeViewer } from './CodeViewer';
import { PageView } from './Navbar';
import {
  CheckCircle2,
  BookOpen,
  Play,
  Sparkles,
  Scale,
  Compass,
  Layers,
} from 'lucide-react';

interface AboutPrismProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

export const WhatIsLogicScript: React.FC<AboutPrismProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const canonicalCode = `module nombre # = nombre.pr
use core # carga core.pr

# 1. Enunciado en lenguaje natural
nl premisa = "si llueve llevo paraguas"

# 2. Definición de átomos
atom p = "llueve"
atom q = "paraguas"

# 3. Traducción o formalización
let f = translate(premisa)
formula h = p impl q

# 4. Evaluación formal
vertauto f { steps table verdict }`;

  const pillars = [
    { title: t.whatIs.card1Title, desc: t.whatIs.card1Desc },
    { title: t.whatIs.card2Title, desc: t.whatIs.card2Desc },
    { title: t.whatIs.card3Title, desc: t.whatIs.card3Desc },
    { title: t.whatIs.card4Title, desc: t.whatIs.card4Desc },
    { title: t.whatIs.card5Title, desc: t.whatIs.card5Desc },
    { title: t.whatIs.card6Title, desc: t.whatIs.card6Desc },
  ];

  return (
    <div className="bg-slate-50 min-h-[80vh]">
      {/* Top Blue Banner */}
      <div className="bg-prism-hero py-10 text-white border-b border-slate-800/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#04add6] bg-white/10 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'es'
                ? 'PRISM: La Refracción Lógica del Pensamiento'
                : 'PRISM: The Logical Refraction of Thought'}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t.whatIs.title}</h1>
          <p className="text-sm sm:text-base text-sky-100/90 max-w-2xl">
            {t.whatIs.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* SECTION: PRISM — LA REFRACCIÓN LÓGICA DEL PENSAMIENTO */}
        <div className="bg-white p-7 sm:p-9 rounded-lg border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              {language === 'es'
                ? 'PRISM: La Refracción Lógica del Pensamiento'
                : 'PRISM: The Logical Refraction of Thought'}
            </h2>
          </div>

          {/* 1. El Origen del Nombre: La Metáfora de Newton */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                1
              </span>
              <span>
                {language === 'es'
                  ? 'El Origen del Nombre: La Metáfora de Newton'
                  : '1. The Origin of the Name: Newton’s Metaphor'}
              </span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              En 1666, Sir Isaac Newton realizó uno de los experimentos más trascendentales en la historia de la física óptica: al hacer incidir un haz de luz blanca a través de un prisma de vidrio triangular, demostró que lo que a simple vista parecía un fenómeno indivisible, uniforme y homogéneo era, en realidad, la convergencia de un espectro continuo de colores fundamentales. El prisma no alteraba la luz ni creaba nuevos colores; únicamente la refractaba, revelando sus componentes elementales más puros e irreducibles.
            </p>

            <blockquote className="text-sm font-medium text-sky-900 bg-sky-50/80 border-l-4 border-[#04add6] px-4 py-3 rounded-r">
              <strong>PRISM</strong> nace inspirado exactamente en ese principio.
            </blockquote>

            <p className="text-sm text-slate-600 leading-relaxed">
              En la experiencia humana, el lenguaje natural se comporta como la luz blanca: cuando leemos o redactamos un argumento, un problema o una ley, las premisas, las implicaciones, las disyunciones y las excepciones se presentan de manera amalgamada, densa y en apariencia indivisible.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>PRISM</strong> actúa como ese prisma óptico para la mente: toma la densidad del discurso humano, lo atraviesa mediante reglas semánticas y morfológicas rigurosas, y lo descompone en sus componentes más fundamentales:
            </p>

            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#04add6] flex-shrink-0" />
                <span>
                  <strong>Átomos proposicionales puros (<code className="font-mono text-sky-700">p, q, r</code>)</strong>, desprovistos de ruido retórico o flexiones gramaticales accesorias.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#04add6] flex-shrink-0" />
                <span>
                  <strong>Operadores de enlace exactos (<code className="font-mono text-sky-700">¬, ∧, ∨, →, ↔</code>)</strong>, que representan la estructura invariable de las relaciones formales.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#04add6] flex-shrink-0" />
                <span>
                  <strong>El espectro completo de estados de verdad (<code className="font-mono text-sky-700">2^N</code>)</strong>, analizado exhaustivamente para dictaminar si un pensamiento es una certeza universal (<em>tautología</em>), una falacia destructiva (<em>contradicción</em>) o una posibilidad fáctica (<em>contingencia</em>).
                </span>
              </li>
            </ul>
          </div>

          {/* 2. ¿Qué es PRISM? */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                2
              </span>
              <span>{language === 'es' ? '¿Qué es PRISM?' : 'What is PRISM?'}</span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>PRISM</strong> es un lenguaje de programación declarativo especializado en la formalización, análisis y evaluación de la lógica proposicional.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              No fue concebido como un lenguaje de propósito general para manejar bases de datos o crear interfaces de usuario, sino como un entorno formal de precisión lógica. PRISM permite que un programador o investigador declare hechos y relaciones en una sintaxis limpia y determinista, procese enunciados complejos formulados en lenguaje natural, y delegue en su motor formal la tarea de verificar su validez con rigor matemático sobre la Máquina Virtual de Java (JVM).
            </p>
          </div>

          {/* 3. Pilares Filosóficos y Epistemológicos */}
          <div className="space-y-5 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                3
              </span>
              <span>
                {language === 'es'
                  ? 'Pilares Filosóficos y Epistemológicos'
                  : 'Philosophical and Epistemological Pillars'}
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* I. La Verdad a través de la Descomposición */}
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Scale className="w-4 h-4 flex-shrink-0" />
                  <span>I. La Verdad a través de la Descomposición</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ningún razonamiento complejo puede juzgarse si no se conocen con absoluta precisión los cimientos sobre los que descansa. PRISM sostiene que la lógica formal no debe ser un ejercicio oscuro reservado a especialistas en papel y lápiz, sino un proceso computable y reproducible: al aislar los átomos proposicionales de un enunciado, se elimina el sesgo retórico y emerge la arquitectura matemática del argumento.
                </p>
              </div>

              {/* II. Honestidad Epistemológica frente a las "Cajas Negras" */}
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Compass className="w-4 h-4 flex-shrink-0" />
                  <span>II. Honestidad Epistemológica frente a las "Cajas Negras"</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  En una era dominada por modelos probabilísticos y sistemas estadísticos que a menudo adivinan o "alucinan", PRISM representa la antítesis reflexiva: la demostración formal paso a paso. PRISM no predice lo que una frase "probablemente significa"; aplica un sistema formal de deducción transparente. Si un argumento es válido, genera la prueba matemática irrebatible; si el argumento contiene una ambigüedad o una contradicción, la señala con exactitud métrica en el código.
                </p>
              </div>

              {/* III. Declaratividad: El Intelecto sobre el Algoritmo */}
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>III. Declaratividad: El Intelecto sobre el Algoritmo</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Inspirado en la elegancia de los sistemas basados en reglas lógicas como Prolog, en PRISM el desarrollador no programa algoritmos procedurales, bucles <code className="font-mono text-slate-800">for</code> ni cadenas interminables de bifurcaciones <code className="font-mono text-slate-800">if/else</code>. El acto de programar en PRISM es un acto de definición ontológica:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 pl-3 list-disc">
                  <li>Se nombran los conceptos (<code className="font-mono text-sky-700">atom p = "el sistema se suspende"</code>).</li>
                  <li>Se enuncian los principios del problema (<code className="font-mono text-sky-700">nl premisa = "..."</code>).</li>
                  <li>Se ordena la demostración formal (<code className="font-mono text-sky-700">let f = translate(premisa)</code>, <code className="font-mono text-sky-700">vertauto f</code>).</li>
                  <li>El compilador y su motor interno construyen la deducción, el espacio de estados y la tabla de verdad.</li>
                </ul>
              </div>

              {/* IV. Separación Estricta de Capas */}
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Layers className="w-4 h-4 flex-shrink-0" />
                  <span>IV. Separación Estricta de Capas</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pt-1">
                  <li>
                    <strong className="text-slate-800">El Lenguaje:</strong> Una gramática universal, fija e inmutable (<code className="font-mono text-sky-700">module</code>, <code className="font-mono text-sky-700">atom</code>, <code className="font-mono text-sky-700">nl</code>, <code className="font-mono text-sky-700">formula</code>, <code className="font-mono text-sky-700">translate</code>, <code className="font-mono text-sky-700">vertauto</code>).
                  </li>
                  <li>
                    <strong className="text-slate-800">Los Datos:</strong> La riqueza del lenguaje natural humano, tratado como contenido entre comillas.
                  </li>
                  <li>
                    <strong className="text-slate-800">La Razón Formal:</strong> La representación intermedia (IR) y los dictámenes lógicos, completamente independientes del idioma en que se exprese el problema.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. La Misión de PRISM */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                4
              </span>
              <span>{language === 'es' ? 'La Misión de PRISM' : 'The Mission of PRISM'}</span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>PRISM</strong> existe para responder a una necesidad crítica en las ciencias de la computación, la filosofía analítica y la educación matemática: tender un puente exacto y verificable entre el pensamiento humano y la exactitud del cálculo formal.
            </p>
            <p className="text-sm text-slate-700 font-medium leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
              Al igual que el cristal de Newton despojó a la luz de su misterio aparente para fundar la óptica moderna, <strong>PRISM</strong> despoja al discurso de su ambigüedad para devolverle al razonamiento su claridad formal más pura.
            </p>
          </div>
        </div>

        {/* EXISTING SECTION: Intro + Code Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-7 rounded-lg border border-slate-200 shadow-sm">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">
              {language === 'es' ? 'Estructura Canónica en Código' : 'Canonical Code Structure'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">{t.whatIs.p1}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{t.whatIs.p2}</p>

            {/* Three-Tier Comparison */}
            <div className="pt-2 space-y-2.5">
              <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-0.5">
                  1. {t.philosophy.nlLabel}
                </span>
                <span className="italic text-slate-600">{t.philosophy.nlExample}</span>
              </div>
              <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-700 block mb-0.5">
                  2. {t.philosophy.symbolicLabel}
                </span>
                <code className="font-mono text-sky-700 font-semibold">
                  {t.philosophy.symbolicExample}
                </code>
              </div>
            </div>

            {onNavigate && (
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('docs')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Ir al Manual' : 'Read Manual'}</span>
                </button>
                <button
                  onClick={() => onNavigate('demo')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Probar en Playground' : 'Try in Playground'}</span>
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
            <CodeViewer code={canonicalCode} filename="nombre.pr" />
          </div>
        </div>

        {/* EXISTING SECTION: 6 Clean Pillars */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-5">
            {t.whatIs.pillarsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <h3 className="font-bold text-sm text-slate-800">{pillar.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXISTING SECTION: Clean Evolution / Roadmap Card */}
        <div className="bg-white p-7 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-2">{t.history.title}</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">{t.history.originText}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase1Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase1Desc}</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase2Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase2Desc}</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase3Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase3Desc}</p>
            </div>
            <div className="p-4 rounded bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-sky-700 mb-1">{t.history.phase4Title}</div>
              <p className="text-xs text-slate-600">{t.history.phase4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
