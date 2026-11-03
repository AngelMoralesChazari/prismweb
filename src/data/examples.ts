import { ExampleItem } from '../types';

export const examplesData: ExampleItem[] = [
  {
    id: 'prnl-canonico',
    category: 'nlp',
    title: {
      es: '1. prnl — Ejercicio NL Canónico',
      en: '1. prnl — Canonical NL Exercise',
    },
    naturalLanguage: {
      es: 'si p entonces q (Enunciado → Descomposición atómica → Traducción formal → Tabla de verdad)',
      en: 'if p then q (Statement → Atomic breakdown → Formal translation → Truth table)',
    },
    code: `module mi_archivo
use core

# 1. Enunciado en lenguaje natural
nl premisa = "si p entonces q"

# 2. Definición de átomos
atom p = "antecedente"
atom q = "consecuente"

# 3. Traducción formal
let equivalencia = translate(premisa)

# 4. Evaluación formal
vertauto equivalencia {
    steps
    table
    verdict
}`,
    formula: '(p → q)',
    classification: 'contingency',
    explanation: {
      es: 'Separa la entrada en una variable nl premisa y sigue el flujo en papel paso a paso: Enunciado → Descomposición atómica → Traducción formal → Tabla de verdad. Ideal para problemas de examen y enunciados largos.',
      en: 'Separates input into an nl premisa variable and follows the step-by-step paper workflow: Statement → Atomic breakdown → Formal translation → Truth table.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: false },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Traducción (NL → fórmula) ===
Entrada: si p entonces q
  - Entrada normalizada: si p entonces q
  - Lexemas LN: [SI("si"), LITERAL("p"), ENTONCES("entonces"), LITERAL("q")]
  - SemanticMapper: patrón SI_ENTONCES detectado.
Proposiciones: {antecedente=p, consecuente=q}
Fórmula emitida: (p → q)

=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p, q]
  - Formalización: (p → q)
  - Construcción del espacio de estados: 2^2 = 4 filas.
  - Fila 1: asignación {p=false, q=false} → V
  - Fila 2: asignación {p=false, q=true} → V
  - Fila 3: asignación {p=true, q=false} → F
  - Fila 4: asignación {p=true, q=true} → V
  - Dictamen final: contingency

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V

=== Dictamen ===
(p → q)  contingency
Clasificación: contingency`,
  },
  {
    id: 'prnlit-literal',
    category: 'nlp',
    title: {
      es: '2. prnlit — Lenguaje Natural con Translate Literal',
      en: '2. prnlit — Natural Language with Literal Translate',
    },
    naturalLanguage: {
      es: 'si estudio apruebo',
      en: 'if I study I pass',
    },
    code: `module mi_archivo
use core

atom p = "antecedente"
atom q = "consecuente"

let implicacion = translate("si estudio apruebo")

vertauto implicacion {
    steps
    table
    verdict
}`,
    formula: '(p → q)',
    classification: 'contingency',
    explanation: {
      es: 'No crea una variable nl. Pone el texto en español directamente entre comillas dentro de translate("..."). Úsalo cuando la frase es corta, solo la vas a traducir una vez y quieres ahorrarte una línea de código.',
      en: 'Does not create an nl variable. Places the natural language string directly inside translate("..."). Use it when the phrase is short and you only translate it once.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: false },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Traducción Literal (NL → fórmula) ===
Entrada: "si estudio apruebo"
  - SemanticMapper: detectado operador condicional implícito
  - Enlace semántico: p = "antecedente", q = "consecuente"
Fórmula emitida: (p → q)

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V

=== Dictamen ===
(p → q)  contingency
Clasificación: contingency`,
  },
  {
    id: 'prform-simbolica',
    category: 'implication',
    title: {
      es: '3. prform — Fórmula Simbólica Pura',
      en: '3. prform — Pure Symbolic Formula',
    },
    naturalLanguage: {
      es: 'Fórmula matemática directa: p → q',
      en: 'Direct mathematical formula: p → q',
    },
    code: `module mi_archivo
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

formula f = p impl q

vertauto f {
    steps
    table
    verdict
}`,
    formula: '(p → q)',
    classification: 'contingency',
    explanation: {
      es: 'No usa lenguaje natural ni translate. La fórmula se escribe directamente en matemática proposicional con conectores (impl, and, or, not, iff). Ideal cuando el ejercicio te da directamente una expresión simbólica.',
      en: 'Uses no natural language or translate. The formula is written directly in propositional mathematics with connectives (impl, and, or, not, iff).',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: false },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p, q]
  - Formalización directa: (p → q)
  - Construcción del espacio de estados: 2^2 = 4 filas.
  - Dictamen final: contingency

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V

=== Dictamen ===
(p → q)  contingency
Clasificación: contingency`,
  },
  {
    id: 'prinl-inline',
    category: 'implication',
    title: {
      es: '4. prinl — Expresión Directa / Inline (al vuelo)',
      en: '4. prinl — Direct / Inline Expression',
    },
    naturalLanguage: {
      es: 'Evaluación directa entre paréntesis: vertauto (p impl q)',
      en: 'Direct parenthesized evaluation: vertauto (p impl q)',
    },
    code: `module mi_archivo
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

vertauto (p impl q) {
    steps
    table
    verdict
}`,
    formula: '(p → q)',
    classification: 'contingency',
    explanation: {
      es: 'No crea variables intermedias con formula f = ... ni con let f = .... Evalúa la expresión directamente entre paréntesis dentro de vertauto (...). Ideal para pruebas ultra rápidas o comprobaciones al vuelo.',
      en: 'Creates no intermediate variables with formula or let. Evaluates the expression directly inside vertauto (...) for ultra-fast checks.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: false },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Evaluación Inline ===
  - Expresión al vuelo: (p → q)
  - Espacio de estados: 2^2 = 4 filas.

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V

=== Dictamen ===
(p → q)  contingency
Clasificación: contingency`,
  },
  {
    id: 'de-morgan-laws',
    category: 'tautology',
    title: {
      es: 'Equivalencia e Implicación Material (Tautología)',
      en: 'Equivalence & Material Implication (Tautology)',
    },
    naturalLanguage: {
      es: '(p → q) ↔ (¬p ∨ q)',
      en: '(p → q) ↔ (¬p ∨ q)',
    },
    code: `module equivalencia_implicacion
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

formula f = (p impl q) iff (not p or q)

vertauto f {
    steps
    table
    verdict
}`,
    formula: '(p → q) ↔ (¬p ∨ q)',
    classification: 'tautology',
    explanation: {
      es: 'Demuestra mediante fórmula simbólica pura (prform) que la implicación material (p → q) es lógicamente equivalente a (¬p ∨ q), obteniendo Verdadero en las 4 filas.',
      en: 'Proves via pure symbolic formula (prform) that material implication (p → q) is logically equivalent to (¬p ∨ q), evaluating to True across all 4 rows.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: true },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p, q]
  - Formalización: (p → q) ↔ (¬p ∨ q)
  - Espacio de estados: 2^2 = 4 filas.
  - Fila 1: {p=false, q=false} → V ↔ V → V
  - Fila 2: {p=false, q=true}  → V ↔ V → V
  - Fila 3: {p=true, q=false}  → F ↔ F → V
  - Fila 4: {p=true, q=true}   → V ↔ V → V
  - Dictamen final: tautology

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | V
V | V | V

=== Dictamen ===
(p → q) ↔ (¬p ∨ q)  tautology
Clasificación: tautology`,
  },
];
