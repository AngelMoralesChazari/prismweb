import { DocArticle, OperatorSpec } from '../types';

export const operatorsReference: OperatorSpec[] = [
  {
    keyword: 'not',
    symbol: '¬',
    meaning: {
      es: 'Negación lógica',
      en: 'Logical negation',
    },
    precedence: 5,
    associativity: 'right',
    example: 'not p',
    description: {
      es: 'Invierte el valor de verdad de la proposición o subfórmula siguiente.',
      en: 'Inverts the truth value of the following proposition or subformula.',
    },
  },
  {
    keyword: 'and',
    symbol: '∧',
    meaning: {
      es: 'Conjunción lógica',
      en: 'Logical conjunction',
    },
    precedence: 4,
    associativity: 'left',
    example: 'p and q',
    description: {
      es: 'Verdadera únicamente si ambos operandos son simultáneamente verdaderos.',
      en: 'True if and only if both operands evaluate to true simultaneously.',
    },
  },
  {
    keyword: 'or',
    symbol: '∨',
    meaning: {
      es: 'Disyunción inclusiva',
      en: 'Inclusive disjunction',
    },
    precedence: 3,
    associativity: 'left',
    example: 'p or q',
    description: {
      es: 'Verdadera si al menos uno de los operandos es verdadero.',
      en: 'True if at least one of the operands evaluates to true.',
    },
  },
  {
    keyword: 'impl',
    symbol: '→',
    meaning: {
      es: 'Implicación condicional',
      en: 'Material implication',
    },
    precedence: 2,
    associativity: 'right',
    example: 'p impl q',
    description: {
      es: 'Falsa únicamente cuando el antecedente p es verdadero y el consecuente q es falso.',
      en: 'False only when antecedent p is true and consequent q is false.',
    },
  },
  {
    keyword: 'iff',
    symbol: '↔',
    meaning: {
      es: 'Bicondicional (si y solo si)',
      en: 'Biconditional (if and only if)',
    },
    precedence: 1,
    associativity: 'none',
    example: 'p iff q',
    description: {
      es: 'Verdadera si ambos operandos tienen el mismo valor veritativo.',
      en: 'True if both operands have identical truth values.',
    },
  },
];

export const docsArticles: DocArticle[] = [
  {
    id: 'intro',
    title: {
      es: 'Introducción a Prism',
      en: 'Introduction to Prism',
    },
    description: {
      es: 'Fundamentos, propósitos y arquitectura declarativa de Prism.',
      en: 'Foundations, purpose, and declarative architecture of Prism.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Prism es un lenguaje de programación declarativo diseñado para modelar, traducir y evaluar proposiciones lógicas formales a partir de descripciones verbales y simbólicas.',
        sections: [
          {
            heading: '¿Por qué Prism?',
            text: 'En la educación formal y el modelado computacional, los estudiantes y desarrolladores suelen lidiar con una separación entre las fórmulas matemáticas en papel (¬, ∧, ∨, →) y el código imperativo lleno de estructuras condicionales. Prism ofrece una sintaxis limpia, intuitiva y rigurosa donde la lógica proposicional es nativa.',
          },
          {
            heading: 'Características Clave',
            text: '1. Sintaxis declarativa libre de efectos secundarios en archivos `.pr`.\n2. Procesamiento de lenguaje natural mediante `nl` y `translate()`.\n3. Generación y renderizado automático de tablas de verdad en espacio de estados 2^n.\n4. Clasificación formal de expresiones en Tautología, Contingencia o Contradicción.',
          },
        ],
      },
      en: {
        summary: 'Prism is a declarative programming language engineered to model, translate, and verify formal logical propositions from verbal and symbolic descriptions.',
        sections: [
          {
            heading: 'Why Prism?',
            text: 'In formal education and computational modeling, practitioners often face a divide between paper formulas (¬, ∧, ∨, →) and imperative if/else chains. Prism provides a clean, rigorous, and readable declarative syntax where propositional logic is a first-class language feature.',
          },
          {
            heading: 'Key Features',
            text: '1. Declarative syntax with zero side effects in `.pr` files.\n2. Built-in Natural Language Processing with `nl` and `translate()`.\n3. Automatic truth table rendering across the full 2^n state space.\n4. Formal automated classification into Tautology, Contingency, or Contradiction.',
          },
        ],
      },
    },
  },
  {
    id: 'file-structure',
    title: {
      es: 'Orden Canónico de Declaraciones',
      en: 'Canonical Order of Declarations',
    },
    description: {
      es: 'El Método en Papel de Prism: estructura de un archivo .pr paso a paso.',
      en: 'The Paper Method in Prism: step-by-step .pr file structure.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Los programas en Prism llevan la extensión `.pr` y siguen el Orden Canónico de Declaraciones (Método en Papel): Enunciado → Descomposición atómica → Traducción o formalización → Evaluación formal.',
        sections: [
          {
            heading: 'Orden Canónico de Declaraciones (Método en Papel)',
            text: 'Un archivo `.pr` sigue el mismo orden lógico que resolverías en una hoja de examen:\n1. **Enunciado en lenguaje natural (`nl`):** Se declara primero la premisa u oración de partida.\n2. **Definición de átomos (`atom`):** Se descompone el enunciado en sus proposiciones atómicas elementales.\n3. **Traducción o formalización (`let` / `formula`):** Se traduce con `translate()` o se expresa con conectores simbólicos.\n4. **Evaluación formal (`vertauto`):** Se solicita el desglose (`steps`), tabla (`table`) y dictamen (`verdict`).',
            code: `module nombre # = nombre.pr
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
vertauto f { steps table verdict }`,
          },
        ],
      },
      en: {
        summary: 'Prism programs use the `.pr` extension and follow the Canonical Order of Declarations (Paper Method): Statement → Atomic breakdown → Translation or formalization → Formal evaluation.',
        sections: [
          {
            heading: 'Canonical Order of Declarations (Paper Method)',
            text: 'A `.pr` file follows the exact logical flow you would use on paper:\n1. **Natural Language Statement (`nl`):** Declare the starting premise first.\n2. **Atom Definitions (`atom`):** Break down the statement into atomic propositions.\n3. **Translation or Formalization (`let` / `formula`):** Translate via `translate()` or write symbolic formulas.\n4. **Formal Evaluation (`vertauto`):** Compute `steps`, `table`, and `verdict`.',
            code: `module nombre # = nombre.pr
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
vertauto f { steps table verdict }`,
          },
        ],
      },
    },
  },
  {
    id: 'first-program',
    title: {
      es: 'Patrones y Snippets (prnl, prnlit, prform, prinl)',
      en: 'Patterns & Snippets (prnl, prnlit, prform, prinl)',
    },
    description: {
      es: 'Detalle de las 4 formas de escribir programas en Prism: diferencias y cuándo usar cada una.',
      en: 'Detailed guide to the 4 ways of writing Prism programs: differences and use cases.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Prism cuenta con 4 estructuras o snippets principales según el tipo de problema que estés resolviendo: desde el método completo en papel con lenguaje natural hasta evaluaciones simbólicas al vuelo.',
        sections: [
          {
            heading: '1. prnl (o nlex) — Ejercicio NL Canónico (Método en Papel)',
            text: '**Diferencia:** Separa la entrada en una variable `nl premisa` y sigue el flujo en papel paso a paso: Enunciado → Descomposición atómica → Traducción formal → Tabla de verdad.\n**¿Cuándo usarlo? (Snippet Principal):** Para problemas de examen, enunciados largos o razonamientos en español donde quieres tener el texto original identificado y ver cómo Prism deduce cada proposición paso a paso.',
            code: `module mi_archivo
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
          },
          {
            heading: '2. prnlit — Lenguaje Natural con Translate Literal',
            text: '**Diferencia:** No crea una variable `nl`. Pone el texto en español directamente entre comillas dentro de `translate("...")`.\n**¿Cuándo usarlo?:** Cuando la frase en español es corta, solo la vas a traducir una vez y quieres ahorrarte una línea de código.',
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
          },
          {
            heading: '3. prform — Fórmula Simbólica Pura',
            text: '**Diferencia:** No usa lenguaje natural ni `translate`. La fórmula se escribe directamente en matemática proposicional con conectores (`impl`, `and`, `or`, `not`, `iff`).\n**¿Cuándo usarlo?:** Cuando el ejercicio no tiene texto en español: te dan directamente una fórmula matemática (e.g. `(p → q) ↔ (¬p ∨ q)`) para probar leyes de De Morgan, tautologías o propiedades de álgebra de Boole.',
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
          },
          {
            heading: '4. prinl — Expresión Directa / Inline (al vuelo)',
            text: '**Diferencia:** No crea variables intermedias con `formula f = ...` ni con `let f = ...`. Evalúa la expresión directamente entre paréntesis dentro de `vertauto (...)`.\n**¿Cuándo usarlo?:** Para pruebas ultra rápidas o comprobaciones al vuelo donde no quieres inventar nombres temporales de fórmulas.',
            code: `module mi_archivo
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

vertauto (p impl q) {
    steps
    table
    verdict
}`,
          },
        ],
      },
      en: {
        summary: 'Prism provides 4 core patterns/snippets depending on the problem you are solving: from the full paper method with natural language to inline symbolic evaluations.',
        sections: [
          {
            heading: '1. prnl (or nlex) — Canonical NL Exercise (Paper Method)',
            text: '**Difference:** Separates the input into an `nl premisa` variable and follows the step-by-step paper workflow: Statement → Atomic breakdown → Formal translation → Truth table.\n**When to use it (Primary Snippet):** For exam problems, long statements, or verbal arguments where you want the original text clearly identified.',
            code: `module mi_archivo
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
          },
          {
            heading: '2. prnlit — Natural Language with Literal Translate',
            text: '**Difference:** Does not create an `nl` variable. Passes the string literal directly inside `translate("...")`.\n**When to use it:** When the verbal phrase is short, only translated once, and you want to save a line of code.',
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
          },
          {
            heading: '3. prform — Pure Symbolic Formula',
            text: '**Difference:** Does not use natural language or `translate`. The formula is written directly in propositional mathematics with connectives (`impl`, `and`, `or`, `not`, `iff`).\n**When to use it:** When the exercise gives you a mathematical formula directly (e.g. `(p → q) ↔ (¬p ∨ q)`) to test De Morgan laws, tautologies, or Boolean algebra properties.',
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
          },
          {
            heading: '4. prinl — Direct / Inline Expression',
            text: '**Difference:** Does not create intermediate variables with `formula` or `let`. Evaluates the expression directly inside parentheses in `vertauto (...)`.\n**When to use it:** For ultra-fast checks where you do not need temporary formula names.',
            code: `module mi_archivo
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

vertauto (p impl q) {
    steps
    table
    verdict
}`,
          },
        ],
      },
    },
  },
  {
    id: 'installation',
    title: {
      es: 'Instalación y Entorno (.pr)',
      en: 'Installation & Setup (.pr)',
    },
    description: {
      es: 'Cómo configurar el entorno de ejecución de Prism y soporte para archivos .pr.',
      en: 'Setting up the Prism runtime environment and tooling for .pr files.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Aprende a ejecutar el compilador/intérprete de Prism con archivos `.pr` y usar los snippets integrados.',
        sections: [
          {
            heading: 'Archivos fuente `.pr`',
            text: 'Cada programa de Prism se guarda con la extensión `.pr` y comienza declarando el nombre del módulo (que coincide con el nombre del archivo) seguido de `use core`.',
            code: `module mi_archivo # = mi_archivo.pr
use core # carga core.pr`,
            tip: 'En VS Code puedes usar los snippets prnl, prnlit, prform y prinl para generar automáticamente las plantillas de código.',
          },
        ],
      },
      en: {
        summary: 'Learn how to run the Prism compiler/interpreter with `.pr` files and use built-in editor snippets.',
        sections: [
          {
            heading: '`.pr` Source Files',
            text: 'Every Prism program is saved with the `.pr` extension and starts by declaring the module name matching the file name, followed by `use core`.',
            code: `module mi_archivo # = mi_archivo.pr
use core # carga core.pr`,
            tip: 'In VS Code you can use the snippets prnl, prnlit, prform, and prinl to automatically scaffold code templates.',
          },
        ],
      },
    },
  },
  {
    id: 'modules',
    title: {
      es: 'Módulos y Declaraciones',
      en: 'Modules & Declarations',
    },
    description: {
      es: 'Cómo modularizar razonamientos usando `module` y `use core`.',
      en: 'Modularizing logical models using `module` and `use core`.',
    },
    category: 'language-basics',
    categoryLabel: {
      es: 'Sintaxis y Conceptos',
      en: 'Syntax & Concepts',
    },
    content: {
      es: {
        summary: 'El sistema de módulos de Prism organiza los espacios de nombres y enlaza la librería base `core.pr`.',
        sections: [
          {
            heading: 'Encabezado `module` y `use core`',
            text: 'Todo archivo `.pr` inicia con `module nombre` (correspondiente a `nombre.pr`) y `use core` (que carga `core.pr` con las primitivas de traducción y evaluación).',
            code: `module nombre # = nombre.pr
use core # carga core.pr`,
          },
        ],
      },
      en: {
        summary: 'The Prism module system structures namespaces and links the core library `core.pr`.',
        sections: [
          {
            heading: '`module` and `use core` Header',
            text: 'Every `.pr` file begins with `module name` (matching `name.pr`) and `use core` (which loads `core.pr` with translation and evaluation primitives).',
            code: `module nombre # = nombre.pr
use core # carga core.pr`,
          },
        ],
      },
    },
  },
  {
    id: 'atomic-propositions',
    title: {
      es: 'Proposiciones Atómicas (`atom`)',
      en: 'Atomic Propositions (`atom`)',
    },
    description: {
      es: 'Definición de variables proposicionales elementales y semántica asociada.',
      en: 'Defining elemental propositional variables and attached semantic labels.',
    },
    category: 'language-basics',
    categoryLabel: {
      es: 'Sintaxis y Conceptos',
      en: 'Syntax & Concepts',
    },
    content: {
      es: {
        summary: 'En lógica proposicional, un átomo es una afirmación elemental que solo puede ser Verdadera o Falsa, sin subdivisiones conectivas.',
        sections: [
          {
            heading: 'Declarando átomos con `atom`',
            text: 'En el método en papel (`prnl`), después de escribir el enunciado `nl`, descomponemos la oración definiendo cada átomo con `atom`:',
            code: `nl premisa = "si llueve llevo paraguas"

atom p = "llueve"
atom q = "paraguas"`,
            tip: 'Cuando usas translate(premisa), Prism enlaza las palabras clave de los átomos ("llueve", "paraguas") con el enunciado en lenguaje natural.',
          },
        ],
      },
      en: {
        summary: 'In propositional logic, an atom is an elemental statement that can only be True or False, without internal connectives.',
        sections: [
          {
            heading: 'Declaring Atoms via `atom`',
            text: 'In the paper method (`prnl`), after writing the `nl` statement, break down the sentence by defining each atom with `atom`:',
            code: `nl premisa = "si llueve llevo paraguas"

atom p = "llueve"
atom q = "paraguas"`,
            tip: 'When calling translate(premisa), Prism links the atom keywords ("llueve", "paraguas") against the natural language statement.',
          },
        ],
      },
    },
  },
  {
    id: 'logical-formulas',
    title: {
      es: 'Fórmulas (`formula` vs `let`)',
      en: 'Formulas (`formula` vs `let`)',
    },
    description: {
      es: 'Construcción de proposiciones mediante `formula`, asignaciones con `let` y evaluación inline.',
      en: 'Building propositions via `formula`, bindings with `let`, and inline evaluation.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: 'Prism distingue claramente entre capturar el resultado de una traducción (`let`), declarar una fórmula simbólica (`formula`) o evaluar una expresión directamente al vuelo.',
        sections: [
          {
            heading: 'Traducción con `let` vs Formalización con `formula`',
            text: '- Usa `let f = translate(...)` cuando partes de lenguaje natural (`prnl` o `prnlit`).\n- Usa `formula h = p impl q` cuando escribes conectores lógicos directamente (`prform`).\n- O evalúa directamente `vertauto (p impl q)` sin variables intermedias (`prinl`).',
            code: `# 1. Capturando traducción NL con let
let f = translate(premisa)

# 2. Declarando fórmula matemática explícita
formula h = p impl q

# 3. Evaluación directa inline sin variable intermedia
vertauto (p impl q) { steps table verdict }`,
          },
        ],
      },
      en: {
        summary: 'Prism cleanly distinguishes between binding a translation result (`let`), declaring a symbolic formula (`formula`), or evaluating inline.',
        sections: [
          {
            heading: 'Translation via `let` vs Formalization via `formula`',
            text: '- Use `let f = translate(...)` when starting from natural language (`prnl` or `prnlit`).\n- Use `formula h = p impl q` when writing logical connectives directly (`prform`).\n- Or evaluate `vertauto (p impl q)` inline without intermediate variables (`prinl`).',
            code: `# 1. Binding NL translation with let
let f = translate(premisa)

# 2. Explicit mathematical formula
formula h = p impl q

# 3. Inline evaluation without intermediate variable
vertauto (p impl q) { steps table verdict }`,
          },
        ],
      },
    },
  },
  {
    id: 'operators',
    title: {
      es: 'Operadores Lógicos',
      en: 'Logical Operators',
    },
    description: {
      es: 'Sintaxis y precedencia matemática de not, and, or, impl y iff.',
      en: 'Syntax and mathematical precedence of not, and, or, impl, and iff.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: 'Prism implementa los cinco conectores fundamentales de la lógica proposicional con palabras clave legibles.',
        sections: [
          {
            heading: 'Lista de Operadores',
            text: '1. `not`: Negación (¬). Mayor precedencia.\n2. `and`: Conjunción (∧).\n3. `or`: Disyunción (∨).\n4. `impl`: Implicación condicional (→).\n5. `iff`: Bicondicional o doble implicación (↔).',
            code: `module leyes_boole
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

formula equivalencia = (p impl q) iff (not p or q)

vertauto equivalencia {
    steps
    table
    verdict
}`,
          },
        ],
      },
      en: {
        summary: 'Prism implements the five core connectives of classical propositional logic with clean, readable keywords.',
        sections: [
          {
            heading: 'Operator List',
            text: '1. `not`: Negation (¬). Highest precedence.\n2. `and`: Conjunction (∧).\n3. `or`: Disjunction (∨).\n4. `impl`: Conditional implication (→).\n5. `iff`: Biconditional (↔).',
            code: `module leyes_boole
use core

atom p = "proposicion_a"
atom q = "proposicion_b"

formula equivalencia = (p impl q) iff (not p or q)

vertauto equivalencia {
    steps
    table
    verdict
}`,
          },
        ],
      },
    },
  },
  {
    id: 'nlp-processing',
    title: {
      es: 'Lenguaje Natural (`nl` y `translate`)',
      en: 'Natural Language (`nl` & `translate`)',
    },
    description: {
      es: 'Uso de nl premisa vs translate literal en archivos .pr.',
      en: 'Using nl premisa vs literal translate in .pr files.',
    },
    category: 'nlp',
    categoryLabel: {
      es: 'Lenguaje Natural',
      en: 'Natural Language',
    },
    content: {
      es: {
        summary: 'Prism permite trabajar con lenguaje natural de dos maneras: declarando la variable `nl premisa` al inicio (Método en Papel `prnl`) o pasando el texto directamente a `translate("...")` (`prnlit`).',
        sections: [
          {
            heading: 'Método en Papel (`prnl`) vs Literal (`prnlit`)',
            text: 'En el método canónico en papel (`prnl`), declaras primero `nl premisa`, luego defines los átomos `atom` y finalmente traduces con `let f = translate(premisa)`. Si la oración es corta y directa, puedes usar `translate("...")` sin variable `nl`.',
            code: `module ejemplo_nl
use core

# Método en Papel (prnl)
nl premisa = "si llueve llevo paraguas"
atom p = "llueve"
atom q = "paraguas"
let f = translate(premisa)

vertauto f { steps table verdict }`,
          },
        ],
      },
      en: {
        summary: 'Prism supports two ways of working with natural language: declaring `nl premisa` at the top (Paper Method `prnl`) or passing a string literal directly to `translate("...")` (`prnlit`).',
        sections: [
          {
            heading: 'Paper Method (`prnl`) vs Literal (`prnlit`)',
            text: 'In the canonical paper method (`prnl`), declare `nl premisa` first, then define the `atom` propositions, and finally translate with `let f = translate(premisa)`.',
            code: `module ejemplo_nl
use core

# Paper Method (prnl)
nl premisa = "si llueve llevo paraguas"
atom p = "llueve"
atom q = "paraguas"
let f = translate(premisa)

vertauto f { steps table verdict }`,
          },
        ],
      },
    },
  },
  {
    id: 'vertauto-evaluation',
    title: {
      es: 'Evaluación mediante `vertauto`',
      en: 'Evaluation via `vertauto`',
    },
    description: {
      es: 'Evaluación de variables de fórmula o expresiones inline entre paréntesis.',
      en: 'Evaluating formula variables or inline parenthesized expressions.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: '`vertauto` evalúa tanto identificadores de fórmulas (`vertauto f`) como expresiones directas entre paréntesis (`vertauto (p impl q)`).',
        sections: [
          {
            heading: 'Opciones de Salida: `steps`, `table`, `verdict`',
            text: 'Puedes escribir las directivas en bloque o en una sola línea (`vertauto f { steps table verdict }`).',
            code: `# Evaluando una variable (let o formula)
vertauto f { steps table verdict }

# Evaluando una expresión al vuelo (prinl)
vertauto (p impl q) {
    steps
    table
    verdict
}`,
          },
        ],
      },
      en: {
        summary: '`vertauto` evaluates both formula identifiers (`vertauto f`) and inline parenthesized expressions (`vertauto (p impl q)`).',
        sections: [
          {
            heading: 'Output Directives: `steps`, `table`, `verdict`',
            text: 'Directives can be written on a single line (`vertauto f { steps table verdict }`) or across multiple lines.',
            code: `# Evaluating a variable (let or formula)
vertauto f { steps table verdict }

# Evaluating an inline expression (prinl)
vertauto (p impl q) {
    steps
    table
    verdict
}`,
          },
        ],
      },
    },
  },
  {
    id: 'syntax-reference',
    title: {
      es: 'Referencia Rápida de Sintaxis',
      en: 'Syntax Quick Reference',
    },
    description: {
      es: 'Resumen del Orden Canónico, los 4 snippets y palabras reservadas.',
      en: 'Summary of the Canonical Order, the 4 snippets, and reserved keywords.',
    },
    category: 'advanced',
    categoryLabel: {
      es: 'Avanzado',
      en: 'Advanced',
    },
    content: {
      es: {
        summary: 'Referencia condensada de la sintaxis oficial de Prism (`.pr`).',
        sections: [
          {
            heading: 'Resumen de los 4 Snippets Oficiales',
            text: '- **`prnl` (o `nlex`)**: Ejercicio NL Canónico (`nl premisa` → `atom` → `let equivalencia = translate(premisa)` → `vertauto`).\n- **`prnlit`**: Lenguaje Natural con Translate Literal (`atom` → `let implicacion = translate("...")` → `vertauto`).\n- **`prform`**: Fórmula Simbólica Pura (`atom` → `formula f = p impl q` → `vertauto f`).\n- **`prinl`**: Expresión Directa / Inline (`atom` → `vertauto (p impl q)`).',
          },
        ],
      },
      en: {
        summary: 'Condensed reference for official Prism (`.pr`) syntax.',
        sections: [
          {
            heading: 'Summary of the 4 Official Snippets',
            text: '- **`prnl` (or `nlex`)**: Canonical NL Exercise (`nl premisa` → `atom` → `let equivalencia = translate(premisa)` → `vertauto`).\n- **`prnlit`**: Natural Language with Literal Translate (`atom` → `let implicacion = translate("...")` → `vertauto`).\n- **`prform`**: Pure Symbolic Formula (`atom` → `formula f = p impl q` → `vertauto f`).\n- **`prinl`**: Direct / Inline Expression (`atom` → `vertauto (p impl q)`).',
          },
        ],
      },
    },
  },
];
