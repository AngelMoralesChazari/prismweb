import { ExampleItem } from '../types';

export const examplesData: ExampleItem[] = [
  {
    id: 'implication-canonical',
    category: 'implication',
    title: {
      es: 'Implicación y Traducción NL (Canónico)',
      en: 'Implication & NL Translation (Canonical)',
    },
    naturalLanguage: {
      es: 'Si p entonces q (ej. "Si llueve, entonces la calle se moja")',
      en: 'If p then q (e.g., "If it rains, then the street gets wet")',
    },
    code: `module test

use core

atom p = "antecedente"
atom q = "consecuente"

nl linea = "si p entonces q"
let implicacion = translate(linea)

vertauto implicacion {
    steps
    table
    verdict
}`,
    formula: '(p → q)',
    classification: 'contingency',
    explanation: {
      es: 'La implicación material (p → q) solo es falsa cuando el antecedente p es verdadero y el consecuente q es falso. Al haber combinaciones verdaderas y falsas, es una contingencia.',
      en: 'Material implication (p → q) is false only when antecedent p is true and consequent q is false. Having both true and false evaluations, it is a contingency.',
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
  - Bloque 1: si p entonces q
  - Tokens bloque: [SI("si"), LITERAL("p"), ENTONCES("entonces"), LITERAL("q")]
  - SemanticMapper: patrón SI_ENTONCES detectado.
  - Nueva proposición: p = "p"
  - Nueva proposición: q = "q"
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
    id: 'law-excluded-middle',
    category: 'tautology',
    title: {
      es: 'Principio del Tercero Excluido (Tautología)',
      en: 'Law of Excluded Middle (Tautology)',
    },
    naturalLanguage: {
      es: 'O bien llueve, o bien no llueve.',
      en: 'Either it rains, or it does not rain.',
    },
    code: `module tercero_excluido

use core

atom p = "llueve"

formula f = p or not p

vertauto f {
    steps
    table
    verdict
}`,
    formula: '(p ∨ ¬p)',
    classification: 'tautology',
    explanation: {
      es: 'Una proposición disyuntiva entre una variable y su propia negación siempre es verdadera, independientemente del valor de p. Constituye una tautología lógica universal.',
      en: 'A disjunction between a proposition and its own negation is always true, regardless of p’s value. It represents a universal logical tautology.',
    },
    truthTable: [
      { assignments: { p: false }, result: true },
      { assignments: { p: true }, result: true },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p]
  - Formalización: (p ∨ ¬p)
  - Construcción del espacio de estados: 2^1 = 2 filas.
  - Fila 1: asignación {p=false} → ¬p es V → (F ∨ V) → V
  - Fila 2: asignación {p=true} → ¬p es F → (V ∨ F) → V
  - Dictamen final: tautology

=== Tabla de verdad ===
p | resultado
F | V
V | V

=== Dictamen ===
(p ∨ ¬p)  tautology
Clasificación: tautology`,
  },
  {
    id: 'non-contradiction',
    category: 'contradiction',
    title: {
      es: 'Principio de No Contradicción',
      en: 'Principio of Non-Contradiction',
    },
    naturalLanguage: {
      es: 'Es imposible que llueva y no llueva al mismo tiempo.',
      en: 'It is impossible for it to rain and not rain simultaneously.',
    },
    code: `module contradiccion_base

use core

atom p = "llueve"

// Intentar afirmar ambos simultáneamente
formula f = p and not p

vertauto f {
    steps
    table
    verdict
}`,
    formula: '(p ∧ ¬p)',
    classification: 'contradiction',
    explanation: {
      es: 'La afirmación conjunta de una proposición y su negación nunca puede ser satisfecha. Es falsa en todas las asignaciones del espacio booleano: una contradicción.',
      en: 'Joint affirmation of a proposition and its negation can never be satisfied. It is false in every state space assignment: a contradiction.',
    },
    truthTable: [
      { assignments: { p: false }, result: false },
      { assignments: { p: true }, result: false },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p]
  - Formalización: (p ∧ ¬p)
  - Construcción del espacio de estados: 2^1 = 2 filas.
  - Fila 1: asignación {p=false} → ¬p es V → (F ∧ V) → F
  - Fila 2: asignación {p=true} → ¬p es F → (V ∧ F) → F
  - Dictamen final: contradiction

=== Tabla de verdad ===
p | resultado
F | F
V | F

=== Dictamen ===
(p ∧ ¬p)  contradiction
Clasificación: contradiction`,
  },
  {
    id: 'de-morgan-laws',
    category: 'tautology',
    title: {
      es: 'Leyes de De Morgan (Equivalencia)',
      en: 'De Morgan’s Laws (Equivalence)',
    },
    naturalLanguage: {
      es: 'Negar que "p y q" ocurren a la vez equivale a decir que "no p o no q".',
      en: 'Denying that "p and q" happen together is equivalent to saying "not p or not q".',
    },
    code: `module de_morgan

use core

atom p = "estudio"
atom q = "trabajo"

// ¬(p ∧ q) ↔ (¬p ∨ ¬q)
formula izquierda = not (p and q)
formula derecha = not p or not q
formula equivalencia = izquierda iff derecha

vertauto equivalencia {
    steps
    table
    verdict
}`,
    formula: '¬(p ∧ q) ↔ (¬p ∨ ¬q)',
    classification: 'tautology',
    explanation: {
      es: 'El bicondicional (iff) entre ambas expresiones resulta siempre en Verdadero en las 4 filas de la tabla de verdad, demostrando que son lógicamente equivalentes.',
      en: 'The biconditional (iff) between both expressions always evaluates to True across all 4 rows of the truth table, proving logical equivalence.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: true },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p, q]
  - Formalización: ¬(p ∧ q) ↔ (¬p ∨ ¬q)
  - Espacio de estados: 2^2 = 4 filas.
  - Fila 1: {p=false, q=false} → ¬(F) ↔ (V ∨ V) → V ↔ V → V
  - Fila 2: {p=false, q=true}  → ¬(F) ↔ (V ∨ F) → V ↔ V → V
  - Fila 3: {p=true, q=false}  → ¬(F) ↔ (F ∨ V) → V ↔ V → V
  - Fila 4: {p=true, q=true}   → ¬(V) ↔ (F ∨ F) → F ↔ F → V
  - Dictamen final: tautology

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | V
V | V | V

=== Dictamen ===
¬(p ∧ q) ↔ (¬p ∨ ¬q)  tautology
Clasificación: tautology`,
  },
  {
    id: 'modus-ponens',
    category: 'tautology',
    title: {
      es: 'Regla de Inferencia: Modus Ponens',
      en: 'Inference Rule: Modus Ponens',
    },
    naturalLanguage: {
      es: 'Si sabemos que "p implica q", y además ocurre "p", entonces necesariamente se deduce "q".',
      en: 'If we know that "p implies q", and "p" occurs, then "q" necessarily follows.',
    },
    code: `module modus_ponens

use core

atom p = "premisa_mayor"
atom q = "conclusion"

// ((p → q) ∧ p) → q
formula regla = ((p impl q) and p) impl q

vertauto regla {
    steps
    table
    verdict
}`,
    formula: '((p → q) ∧ p) → q',
    classification: 'tautology',
    explanation: {
      es: 'El Modus Ponens es la regla deductiva fundamental por excelencia. En Prism, su estructura condicional se verifica como una tautología perfecta en todas las asignaciones.',
      en: 'Modus Ponens is the canonical deductive rule. In Prism, its conditional structure verifies as a tautology in every state assignment.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: true },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Identificación de proposiciones atómicas: [p, q]
  - Formalización: ((p → q) ∧ p) → q
  - Espacio de estados: 2^2 = 4 filas.
  - Fila 1: {p=F, q=F} → ((V) ∧ F) → F → F → V
  - Fila 2: {p=F, q=V} → ((V) ∧ F) → F → V → V
  - Fila 3: {p=V, q=F} → ((F) ∧ V) → F → F → V
  - Fila 4: {p=V, q=V} → ((V) ∧ V) → V → V → V
  - Dictamen final: tautology

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | V
V | V | V

=== Dictamen ===
((p → q) ∧ p) → q  tautology
Clasificación: tautology`,
  },
  {
    id: 'disjunctive-syllogism',
    category: 'disjunction',
    title: {
      es: 'Silogismo Disyuntivo',
      en: 'Disjunctive Syllogism',
    },
    naturalLanguage: {
      es: 'O bien el culpable es A o es B. Se demuestra que no es A, por tanto es B.',
      en: 'Either the suspect is A or B. It is proven not A, therefore it is B.',
    },
    code: `module silogismo_disyuntivo

use core

atom p = "sospechoso_A"
atom q = "sospechoso_B"

formula premisas = (p or q) and not p
formula deduccion = premisas impl q

vertauto deduccion {
    steps
    table
    verdict
}`,
    formula: '((p ∨ q) ∧ ¬p) → q',
    classification: 'tautology',
    explanation: {
      es: 'El silogismo disyuntivo garantiza que al descartar una de las dos alternativas de una disyunción verdadera, la otra se vuelve indudablemente cierta.',
      en: 'Disjunctive syllogism guarantees that discarding one option in a true disjunction forces the remaining option to be true.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: true },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Evaluación lógica ===
  - Proposiciones atómicas: [p, q]
  - Formalización: ((p ∨ q) ∧ ¬p) → q
  - Espacio de estados: 2^2 = 4 filas evaluadas.
  - Dictamen final: tautology

=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | V
V | V | V

=== Dictamen ===
((p ∨ q) ∧ ¬p) → q  tautology
Clasificación: tautology`,
  },
  {
    id: 'nlp-weather-contingency',
    category: 'nlp',
    title: {
      es: 'Traducción PLN: Razonamiento Meteorológico',
      en: 'NLP Translation: Weather Reasoning',
    },
    naturalLanguage: {
      es: 'si llueve entonces llevo paraguas',
      en: 'if it rains then I carry an umbrella',
    },
    code: `module clima

use core

atom p = "llueve"
atom q = "llevo paraguas"

nl oracion = "si llueve entonces llevo paraguas"
let f = translate(oracion)

vertauto f {
    steps
    table
    verdict
}`,
    formula: '(p → q)',
    classification: 'contingency',
    explanation: {
      es: 'El analizador de lenguaje natural identifica la cláusula condicional "si ... entonces ..." y enlaza automáticamente las frases atómicas con las proposiciones declaradas.',
      en: 'The natural language analyzer identifies the conditional clause "if ... then ..." and maps the atomic clauses into declared propositions.',
    },
    truthTable: [
      { assignments: { p: false, q: false }, result: true },
      { assignments: { p: false, q: true }, result: true },
      { assignments: { p: true, q: false }, result: false },
      { assignments: { p: true, q: true }, result: true },
    ],
    terminalLog: `=== Traducción (NL → fórmula) ===
Entrada: si llueve entonces llevo paraguas
  - Normalización de entrada: si llueve entonces llevo paraguas
  - SemanticMapper: detectado operador SI_ENTONCES
  - Enlace semántico: "llueve" → átomo p
  - Enlace semántico: "llevo paraguas" → átomo q
Fórmula emitida: (p → q)

=== Evaluación lógica ===
  - Espacio de estados: 2^2 = 4 filas.
  - Fila 3: {p=true, q=false} → F
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
];
