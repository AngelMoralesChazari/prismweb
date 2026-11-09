import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CodeViewer } from './CodeViewer';
import { PageView, PrismIconLogo } from './Navbar';
import {
  CheckCircle2,
  BookOpen,
  Play,
  Sparkles,
  Scale,
  Compass,
  Layers,
  ShieldCheck,
  Terminal,
  ArrowRight,
  Download,
} from 'lucide-react';

interface AboutPrismProps {
  onNavigate?: (page: PageView, articleId?: string) => void;
}

export const WhatIsLogicScript: React.FC<AboutPrismProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedPattern, setSelectedPattern] = useState<number>(0);

  const codePatterns = [
    {
      id: 'prnl',
      badge: '1. prnl',
      title: 'Método en Papel Canónico',
      subtitle: 'Separa el enunciado en nl premisa y sigue el flujo completo paso a paso.',
      code: `module nombre # = nombre.pr
use core # carga core.pr

# 1. Enunciado en lenguaje natural
nl premisa = "si llueve llevo paraguas"

# 2. Definición de átomos proposicionales
atom p = "llueve"
atom q = "paraguas"

# 3. Traducción formal e inmutable
let f = translate(premisa)

# 4. Evaluación veritativa exhaustiva
vertauto f {
    steps
    table
    verdict
}`,
    },
    {
      id: 'prnlit',
      badge: '2. prnlit',
      title: 'Translate Literal Directo',
      subtitle: 'Traduce una oración corta directamente dentro de translate("...").',
      code: `module rapido
use core

atom p = "estudio"
atom q = "apruebo"

let implicacion = translate("si estudio apruebo")

vertauto implicacion {
    steps
    table
    verdict
}`,
    },
    {
      id: 'prform',
      badge: '3. prform',
      title: 'Fórmula Simbólica Pura',
      subtitle: 'Escribe álgebra proposicional directa con conectores (not, and, or, impl, iff).',
      code: `module simbolico
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

formula f = (p impl q) iff (not p or q)

vertauto f {
    steps
    table
    verdict
}`,
    },
    {
      id: 'prinl',
      badge: '4. prinl',
      title: 'Evaluación Inline al Vuelo',
      subtitle: 'Evalúa cualquier expresión directamente entre paréntesis dentro de vertauto.',
      code: `module al_vuelo
use core

atom p = "antecedente"
atom q = "consecuente"

vertauto (p and not p) {
    steps
    table
    verdict
}`,
    },
  ];

  const technicalPillars = [
    {
      tag: 'atom',
      title: t.whatIs.card1Title,
      desc: t.whatIs.card1Desc,
    },
    {
      tag: 'translate()',
      title: t.whatIs.card2Title,
      desc: t.whatIs.card2Desc,
    },
    {
      tag: 'formula',
      title: t.whatIs.card3Title,
      desc: t.whatIs.card3Desc,
    },
    {
      tag: 'vertauto',
      title: t.whatIs.card4Title,
      desc: t.whatIs.card4Desc,
    },
    {
      tag: '2^N Matriz',
      title: t.whatIs.card5Title,
      desc: t.whatIs.card5Desc,
    },
    {
      tag: 'verdict',
      title: t.whatIs.card6Title,
      desc: t.whatIs.card6Desc,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-[80vh] pb-16">
      {/* 1. HERO HEADER BANNER */}
      <div className="bg-prism-hero py-12 text-white border-b border-slate-800/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                {language === 'es'
                  ? 'PRISM: La Refracción Lógica del Pensamiento'
                  : 'PRISM: The Logical Refraction of Thought'}
              </h1>
              <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-2xl">
                {t.whatIs.subtitle}
              </p>
            </div>

            {/* Key Quick Specs Box */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-white/15 rounded-xl p-5 grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-sky-300/80 font-semibold">
                    Paradigma
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Declarativo Formal
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-sky-300/80 font-semibold">
                    Plataforma
                  </div>
                  <div className="text-sm font-bold text-[#04add6] mt-0.5">
                    Java VM (JVM 21+)
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-sky-300/80 font-semibold">
                    Arquitectura
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Two-Pass Compiler
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-sky-300/80 font-semibold">
                    Verificación
                  </div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">
                    100% Determinista
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-14">

        {/* 2. SECTION 1: LA METÁFORA DE NEWTON + DIAGRAMA VISUAL INTERACTIVO */}
        <section className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-7 sm:p-9">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#04add6] mb-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                1
              </span>
              <span>El Origen del Nombre</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              La Metáfora Óptica de Sir Isaac Newton (1666)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Narrative Left Column */}
              <div className="lg:col-span-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  En 1666, Sir Isaac Newton realizó uno de los experimentos más trascendentales en la historia de la física óptica: al hacer incidir un haz de luz blanca a través de un prisma de vidrio triangular, demostró que lo que a simple vista parecía un fenómeno indivisible, uniforme y homogéneo era, en realidad, la convergencia de un espectro continuo de colores fundamentales.
                </p>
                <p>
                  El prisma no alteraba la luz ni creaba nuevos colores; únicamente la <strong>refractaba</strong>, revelando sus componentes elementales más puros e irreducibles.
                </p>
                <div className="p-4 rounded-lg bg-sky-50/90 border-l-4 border-[#04add6] text-sky-950 font-medium">
                  <strong>PRISM nace inspirado exactamente en ese principio.</strong> En la experiencia humana, el lenguaje natural se comporta como la luz blanca: cuando leemos o redactamos un argumento, las premisas, implicaciones, disyunciones y excepciones se presentan de manera amalgamada, densa y en apariencia indivisible.
                </div>
                <p>
                  <strong>PRISM</strong> actúa como ese prisma óptico para la mente: toma la densidad del discurso humano, lo atraviesa mediante reglas semánticas y morfológicas rigurosas, y lo descompone en sus tres componentes fundamentales.
                </p>
              </div>

              {/* Visual Refraction Diagram Right Column (Light, sober style matching the page) */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-slate-50 text-slate-800 p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#04add6] flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <span>Proceso de Refracción Lógica</span>
                    <span className="text-slate-400 font-mono text-[11px]">Luz Blanca → Espectro Formal</span>
                  </div>

                  {/* Input Beam: White Light / Natural Language */}
                  <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                      <span>Haz de Entrada (Discurso en Lenguaje Natural)</span>
                    </div>
                    <div className="font-mono text-xs text-slate-800">
                      nl premisa = <span className="text-emerald-700 font-semibold">"si llueve llevo paraguas"</span>
                    </div>
                  </div>

                  {/* Center Prism Divider */}
                  <div className="flex items-center justify-center gap-3 py-0.5">
                    <div className="h-[1px] flex-1 bg-slate-200" />
                    <div className="px-3.5 py-1 rounded-full bg-white border border-sky-200 shadow-sm text-xs font-bold text-[#04add6] flex items-center gap-2">
                      <PrismIconLogo style={{ height: '14px', width: 'auto' }} variant="onLight" />
                      <span>PRISM COMPILER (prc)</span>
                    </div>
                    <div className="h-[1px] flex-1 bg-slate-200" />
                  </div>

                  {/* 3 Refracted Rays */}
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg bg-white border border-slate-200 border-l-4 border-l-sky-500 flex items-start gap-3 shadow-sm">
                      <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                        p, q, r
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          1. Átomos Proposicionales Puros
                        </div>
                        <div className="text-[11.5px] text-slate-600 leading-snug">
                          Desprovistos de ruido retórico o flexiones gramaticales accesorias.
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-slate-200 border-l-4 border-l-amber-500 flex items-start gap-3 shadow-sm">
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                        ¬ ∧ ∨ → ↔
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          2. Operadores de Enlace Exactos
                        </div>
                        <div className="text-[11.5px] text-slate-600 leading-snug">
                          Representan la estructura matemática invariable de las relaciones formales.
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-slate-200 border-l-4 border-l-emerald-500 flex items-start gap-3 shadow-sm">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                        2^N
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          3. Espectro Completo de Estados de Verdad
                        </div>
                        <div className="text-[11.5px] text-slate-600 leading-snug">
                          Dictamina si el pensamiento es certeza universal (<em>tautología</em>), falacia (<em>contradicción</em>) o posibilidad (<em>contingencia</em>).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION 2: ¿QUÉ ES PRISM? + TABLA COMPARATIVA CONTRA CAJAS NEGRAS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: ¿Qué es PRISM? */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#04add6] mb-2">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                  2
                </span>
                <span>Definición y Propósito</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                ¿Qué es PRISM?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <strong>PRISM</strong> es un lenguaje de programación declarativo especializado en la formalización, análisis y evaluación de la lógica proposicional.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                No fue concebido como un lenguaje de propósito general para manejar bases de datos o crear interfaces de usuario, sino como un <strong>entorno formal de precisión lógica</strong>. PRISM permite declarar hechos y relaciones en una sintaxis limpia y determinista, procesar enunciados en lenguaje natural, y verificar su validez con rigor matemático sobre la Máquina Virtual de Java (JVM).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#04add6]" />
                <span>Garantía Formal en Tiempo de Compilación</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Su arquitectura <strong>Two-Pass</strong> recolecta primero el universo atómico y valida la coherencia semántica antes de emitir las tablas de verdad.
              </p>
            </div>
          </div>

          {/* Right: Comparativa Epistemológica (Cajas Negras vs PRISM) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/90 p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#04add6] mb-2">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                  2.1
                </span>
                <span>Contraste Epistemológico</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Demostración Formal vs. "Cajas Negras" Estadísticas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                En una era dominada por modelos probabilísticos que predicen o "alucinan", PRISM representa la demostración matemática transparente y reproducible:
              </p>

              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3.5 font-bold">Criterio</th>
                      <th className="py-2.5 px-3.5 font-bold text-slate-500">Modelos Probabilísticos (Caja Negra)</th>
                      <th className="py-2.5 px-3.5 font-bold text-sky-700 bg-sky-50/60">Lenguaje Formal PRISM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Naturaleza</td>
                      <td className="py-2.5 px-3.5 text-slate-500">Aproximación estadística de palabras</td>
                      <td className="py-2.5 px-3.5 font-medium text-slate-800 bg-sky-50/30">Deducción matemática exacta (2^N)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Trazabilidad</td>
                      <td className="py-2.5 px-3.5 text-slate-500">Opaca (pesos internos no auditables)</td>
                      <td className="py-2.5 px-3.5 font-medium text-slate-800 bg-sky-50/30">Árbol paso a paso (`steps`, `table`)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Ambigüedad</td>
                      <td className="py-2.5 px-3.5 text-slate-500">Adivina o asume silenciosamente</td>
                      <td className="py-2.5 px-3.5 font-medium text-slate-800 bg-sky-50/30">Diagnóstico léxico y semántico exacto</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3.5 font-semibold text-slate-800">Reproducibilidad</td>
                      <td className="py-2.5 px-3.5 text-slate-500">Variable según el muestreo</td>
                      <td className="py-2.5 px-3.5 font-medium text-emerald-700 bg-sky-50/30">100% Determinista e Inmutable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION 3: LOS 4 PILARES FILOSÓFICOS Y EPISTEMOLÓGICOS */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#04add6] mb-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                3
              </span>
              <span>Cimientos del Lenguaje</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Pilares Filosóficos y Epistemológicos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pilar I */}
            <div className="bg-white rounded-xl border border-slate-200/90 border-t-4 border-t-[#04add6] p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#04add6]">
                  Pilar I • Análisis Elemental
                </span>
                <Scale className="w-5 h-5 text-[#04add6]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                La Verdad a través de la Descomposición
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ningún razonamiento complejo puede juzgarse si no se conocen con absoluta precisión los cimientos sobre los que descansa. PRISM sostiene que la lógica formal no debe ser un ejercicio oscuro reservado a especialistas en papel y lápiz, sino un proceso computable y reproducible: al aislar los átomos proposicionales de un enunciado, se elimina el sesgo retórico y emerge la arquitectura matemática del argumento.
              </p>
            </div>

            {/* Pilar II */}
            <div className="bg-white rounded-xl border border-slate-200/90 border-t-4 border-t-sky-600 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Pilar II • Rigor Demostrativo
                </span>
                <Compass className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Honestidad Epistemológica frente a las "Cajas Negras"
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                PRISM no predice lo que una frase "probablemente significa"; aplica un sistema formal de deducción transparente. Si un argumento es válido, genera la prueba matemática irrebatible; si el argumento contiene una ambigüedad o una contradicción, la señala con exactitud métrica en la línea y columna del código.
              </p>
            </div>

            {/* Pilar III */}
            <div className="bg-white rounded-xl border border-slate-200/90 border-t-4 border-t-amber-500 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Pilar III • Definición Ontológica
                </span>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Declaratividad: El Intelecto sobre el Algoritmo
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inspirado en sistemas lógicos como Prolog, en PRISM el desarrollador no programa bucles <code className="font-mono text-slate-800 bg-slate-100 px-1 rounded">for</code> ni cadenas de <code className="font-mono text-slate-800 bg-slate-100 px-1 rounded">if/else</code>. Programar en PRISM es un acto de definición ontológica en 4 pasos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 font-mono text-slate-700">
                  1. <span className="text-sky-700 font-bold">atom</span> p = "concepto"
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 font-mono text-slate-700">
                  2. <span className="text-sky-700 font-bold">nl</span> premisa = "principio"
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 font-mono text-slate-700">
                  3. <span className="text-sky-700 font-bold">let</span> f = translate(premisa)
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 font-mono text-slate-700">
                  4. <span className="text-purple-700 font-bold">vertauto</span> f &#123; ... &#125;
                </div>
              </div>
            </div>

            {/* Pilar IV */}
            <div className="bg-white rounded-xl border border-slate-200/90 border-t-4 border-t-emerald-500 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Pilar IV • Arquitectura en 3 Capas
                </span>
                <Layers className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Separación Estricta de Capas
              </h3>
              <div className="space-y-2.5 pt-1">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold text-[11px] flex-shrink-0">
                    Capa 1
                  </span>
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-800">El Lenguaje:</strong> Gramática universal, fija e inmutable (<code className="font-mono text-sky-700">module, atom, nl, formula, translate, vertauto</code>).
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px] flex-shrink-0">
                    Capa 2
                  </span>
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-800">Los Datos:</strong> La riqueza del lenguaje natural humano, tratada como literales entre comillas.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px] flex-shrink-0">
                    Capa 3
                  </span>
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-800">La Razón Formal:</strong> Representación intermedia (IR) y dictámenes lógicos independientes del idioma.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE CANONICAL CODE PATTERNS (THE 4 OFFICIAL PRISM WAYS) */}
        <section className="bg-white rounded-xl border border-slate-200/90 p-7 sm:p-9 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#04add6]">
                <Terminal className="w-4 h-4" />
                <span>Sintaxis Oficial v1.0 (.pr)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Las 4 Formas de Programar en PRISM
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Selecciona cualquiera de los 4 patrones oficiales de PRISM para explorar cómo se adapta desde problemas completos en español hasta demostraciones simbólicas directas:
              </p>

              {/* Interactive Selector Tabs */}
              <div className="space-y-2 pt-1">
                {codePatterns.map((pat, idx) => {
                  const isActive = selectedPattern === idx;
                  return (
                    <button
                      key={pat.id}
                      onClick={() => setSelectedPattern(idx)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all ${isActive
                        ? 'bg-sky-50/80 border-[#04add6] shadow-sm'
                        : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/80'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#04add6]">
                          {pat.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {pat.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{pat.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <CodeViewer
                code={codePatterns[selectedPattern].code}
                filename={`${codePatterns[selectedPattern].id}.pr`}
                showLineNumbers={true}
              />
              {onNavigate && (
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('demo')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#04add6] hover:bg-[#0396ba] text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Probar estos patrones en el Playground</span>
                  </button>
                  <button
                    onClick={() => onNavigate('docs', 'snippets-catalogo')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ver árbol de decisión de snippets en el Manual →</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 6. 6 TECHNICAL CAPABILITIES GRID */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            {t.whatIs.pillarsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalPillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#04add6] flex-shrink-0" />
                    <h3 className="font-bold text-sm text-slate-800">{pillar.title}</h3>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded">
                    {pillar.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. EVOLUTION TIMELINE + SECTION 4: LA MISIÓN DE PRISM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Evolution Phases */}
          <div className="lg:col-span-7 bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{t.history.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">{t.history.originText}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#04add6] mb-1">{t.history.phase1Title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.history.phase1Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#04add6] mb-1">{t.history.phase2Title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.history.phase2Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#04add6] mb-1">{t.history.phase3Title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.history.phase3Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#04add6] mb-1">{t.history.phase4Title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.history.phase4Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. La Misión de PRISM */}
          <div className="lg:col-span-5 bg-prism-hero text-white p-7 sm:p-8 rounded-xl shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#04add6] bg-white/10 px-3 py-1 rounded-full">
                <span>4 • La Misión de PRISM</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                El puente exacto entre el pensamiento humano y el cálculo formal
              </h3>
              <p className="text-sm text-sky-100/90 leading-relaxed">
                <strong>PRISM</strong> existe para responder a una necesidad crítica en las ciencias de la computación, la filosofía analítica y la educación matemática: tender un puente exacto y verificable entre el pensamiento humano y la exactitud del cálculo formal.
              </p>
              <blockquote className="p-4 rounded-lg bg-white/10 border-l-4 border-[#04add6] text-xs sm:text-sm text-white italic leading-relaxed">
                "Al igual que el cristal de Newton despojó a la luz de su misterio aparente para fundar la óptica moderna, PRISM despoja al discurso de su ambigüedad para devolverle al razonamiento su claridad formal más pura."
              </blockquote>
            </div>

            {onNavigate && (
              <div className="pt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('downloads')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#04add6] hover:bg-[#0396ba] text-white text-xs font-semibold shadow transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Prism</span>
                </button>
                <button
                  onClick={() => onNavigate('docs')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explorar Documentación</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};
