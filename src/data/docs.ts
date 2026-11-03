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
            text: '1. Sintaxis declarativa libre de efectos secundarios.\n2. Procesamiento de lenguaje natural mediante la instrucción `translate`.\n3. Generación y renderizado automático de tablas de verdad en espacio de estados 2^n.\n4. Clasificación formal de expresiones en Tautología, Contingencia o Contradicción.',
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
            text: '1. Declarative syntax with zero side effects.\n2. Built-in Natural Language Processing with `translate`.\n3. Automatic truth table rendering across the full 2^n state space.\n4. Formal automated classification into Tautology, Contingency, or Contradiction.',
          },
        ],
      },
    },
  },
  {
    id: 'installation',
    title: {
      es: 'Instalación y Entorno',
      en: 'Installation & Setup',
    },
    description: {
      es: 'Cómo configurar el entorno de ejecución de Prism y soporte para editores.',
      en: 'Setting up the Prism runtime environment and editor tooling.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Aprende a ejecutar el compilador/intérprete de Prism en tu sistema y configurar tu editor de texto.',
        sections: [
          {
            heading: 'Requisitos Previos',
            text: 'El intérprete de Prism está diseñado para operar en entornos multiplataforma (Linux, macOS, Windows). Utiliza archivos fuente con extensión `.prism` (o `.ls`).',
          },
          {
            heading: 'Uso mediante CLI',
            text: 'Puedes ejecutar programas de Prism directamente desde la línea de comandos:',
            code: `# Ejecutar un script de Prism
prism run test.pr

# Inspección estricta de sintaxis sin evaluar tablas
prism check test.pr`,
            tip: 'En VS Code y editores modernos puedes asociar la extensión .prism para contar con resaltado léxico claro.',
          },
        ],
      },
      en: {
        summary: 'Learn how to run the Prism compiler/interpreter and configure your text editor.',
        sections: [
          {
            heading: 'Prerequisites',
            text: 'The Prism interpreter runs cross-platform (Linux, macOS, Windows) using `.prism` (or `.ls`) source files.',
          },
          {
            heading: 'CLI Execution',
            text: 'Execute Prism files directly from your terminal:',
            code: `# Run a Prism program
prism run hello.prism

# Strict syntax checking without evaluation
prism check hello.prism`,
            tip: 'Configure your editor to associate .prism files for clean syntax highlighting.',
          },
        ],
      },
    },
  },
  {
    id: 'first-program',
    title: {
      es: 'Mi Primer Programa',
      en: 'My First Program',
    },
    description: {
      es: 'Escribe, analiza y ejecuta tu primer programa en Prism paso a paso.',
      en: 'Write, analyze, and execute your first Prism program step by step.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Un recorrido guiado por el programa canónico de bienvenida en Prism.',
        sections: [
          {
            heading: 'El código de test.pr',
            text: 'Crea un archivo llamado `test.pr` y añade el siguiente contenido:',
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
          },
          {
            heading: '¿Qué sucede durante la ejecución?',
            text: '1. El módulo `hola` importa el conjunto de primitivas lógicas `core`.\n2. Se declaran dos átomos proposicionales: `p` y `q`.\n3. Se define una oración en lenguaje natural con la palabra clave `nl`.\n4. La función `translate()` identifica el patrón "si ... entonces ..." y emite la fórmula `(p → q)`.\n5. El bloque `vertauto` evalúa las 4 combinaciones booleanas y dictamina una `contingency`.',
          },
        ],
      },
      en: {
        summary: 'A guided walkthrough of the canonical greeting program in Prism.',
        sections: [
          {
            heading: 'Code in hello.prism',
            text: 'Create a file named `hello.prism` with the following content:',
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
          },
          {
            heading: 'What happens during execution?',
            text: '1. Module `hola` imports basic logical primitives from `core`.\n2. Two atomic propositions are declared: `p` and `q`.\n3. A natural language sentence is declared with the `nl` keyword.\n4. `translate()` recognizes the "if ... then ..." pattern and outputs `(p → q)`.\n5. The `vertauto` block evaluates the 4 boolean combinations and yields `contingency`.',
          },
        ],
      },
    },
  },
  {
    id: 'file-structure',
    title: {
      es: 'Estructura de un Programa',
      en: 'Program Structure',
    },
    description: {
      es: 'Organización canónica, secciones y convenciones de código en Prism.',
      en: 'Canonical organization, sections, and naming conventions in Prism.',
    },
    category: 'language-basics',
    categoryLabel: {
      es: 'Sintaxis y Conceptos',
      en: 'Syntax & Concepts',
    },
    content: {
      es: {
        summary: 'Los archivos de código fuente de Prism siguen una secuencia de declaraciones clara, minimalista y predecible.',
        sections: [
          {
            heading: 'Partes Fundamentales',
            text: 'Un programa bien formado se divide en cuatro zonas:\n1. **Encabezado de Módulo:** Define el identificador del archivo con `module`.\n2. **Importaciones:** Declaraciones `use` de librerías del sistema.\n3. **Declaraciones Atómicas y Fórmulas:** Definición de proposiciones y variables.\n4. **Directivas de Evaluación:** Bloques `vertauto` para calcular resultados.',
            code: `// 1. Declaración de Módulo
module razonamiento_uno

// 2. Importación del núcleo
use core

// 3. Dominio atómico
atom p = "el sol brilla"
atom q = "hace calor"

// 4. Expresión formal y evaluación
formula f = p and q

vertauto f {
    table
    verdict
}`,
          },
        ],
      },
      en: {
        summary: 'Prism source files follow a clean, minimal, and predictable declaration order.',
        sections: [
          {
            heading: 'Fundamental Sections',
            text: 'A well-structured Prism program contains four typical zones:\n1. **Module Header:** Defines the file identifier via `module`.\n2. **Imports:** System library `use` directives.\n3. **Atomic Domain & Formulas:** Propositions and variable bindings.\n4. **Evaluation Directives:** `vertauto` blocks computing results.',
            code: `// 1. Module Header
module reasoning_one

// 2. Core Import
use core

// 3. Atomic Domain
atom p = "sun is shining"
atom q = "it is warm"

// 4. Formal Expression and Evaluation
formula f = p and q

vertauto f {
    table
    verdict
}`,
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
        summary: 'El sistema de módulos de Prism organiza los espacios de nombres y aísla las proposiciones atómicas de diferentes modelos.',
        sections: [
          {
            heading: 'La palabra clave `module`',
            text: 'Cada archivo debe comenzar con la declaración de su módulo correspondiente. El nombre debe ser un identificador válido en minúsculas y sin caracteres especiales.',
            code: `module logica_deductiva`,
          },
          {
            heading: 'Importaciones con `use`',
            text: 'La directiva `use core` enlaza el conjunto de reglas de inferencia estándar, el mapeador semántico de lenguaje natural y los algoritmos veritativos del runtime.',
            code: `use core`,
          },
        ],
      },
      en: {
        summary: 'The Prism module system structures namespaces and isolates atomic propositions across models.',
        sections: [
          {
            heading: 'The `module` Keyword',
            text: 'Every file must begin with its module declaration. The name must be a valid lower-case identifier without special characters.',
            code: `module deductive_logic`,
          },
          {
            heading: 'Imports via `use`',
            text: 'The `use core` directive links the standard inference rule set, natural language semantic mapper, and truth algorithms from the runtime.',
            code: `use core`,
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
            text: 'Se declaran especificando un identificador simple y una cadena descriptiva entre comillas dobles que documenta su significado semántico:',
            code: `atom p = "la alarma está activada"
atom q = "se detecta movimiento"
atom r = "se notifica a la seguridad"`,
            tip: 'Los identificadores de átomos son comúnmente letras simples como p, q, r, o nombres descriptivos breves como lluvia, frio.',
          },
        ],
      },
      en: {
        summary: 'In propositional logic, an atom is an elemental statement that can only be True or False, without internal connectives.',
        sections: [
          {
            heading: 'Declaring Atoms via `atom`',
            text: 'Declare atoms by specifying a simple identifier and a descriptive string in double quotes explaining its real-world semantic meaning:',
            code: `atom p = "alarm is activated"
atom q = "movement detected"
atom r = "security is notified"`,
            tip: 'Atom identifiers are traditionally single letters like p, q, r, or concise descriptive names like rain, cold.',
          },
        ],
      },
    },
  },
  {
    id: 'logical-formulas',
    title: {
      es: 'Fórmulas Lógicas y `let`',
      en: 'Logical Formulas & `let`',
    },
    description: {
      es: 'Construcción de proposiciones compuestas mediante `formula` y asignaciones con `let`.',
      en: 'Building compound propositions via `formula` and binding with `let`.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: 'Prism permite almacenar expresiones lógicas estáticas con la palabra clave `formula` o ligar resultados de expresiones dinámicas mediante `let`.',
        sections: [
          {
            heading: 'Declaración explícita con `formula`',
            text: 'Utiliza `formula` para construir expresiones combinando átomos y operadores lógicos:',
            code: `atom p = "estudio"
atom q = "apruebo"

formula f1 = p impl q
formula f2 = (p and q) or not p`,
          },
          {
            heading: 'Asignaciones dinámicas con `let`',
            text: 'La palabra clave `let` se emplea comúnmente para capturar el valor retornado por funciones como `translate()`:',
            code: `nl frase = "si llueve entonces me mojo"
let formula_traducida = translate(frase)`,
          },
        ],
      },
      en: {
        summary: 'Prism allows storing static logical expressions using `formula` or binding dynamic expression results using `let`.',
        sections: [
          {
            heading: 'Explicit Declaration via `formula`',
            text: 'Use `formula` to compose expressions combining atomic propositions and logical operators:',
            code: `atom p = "study"
atom q = "pass"

formula f1 = p impl q
formula f2 = (p and q) or not p`,
          },
          {
            heading: 'Dynamic Bindings via `let`',
            text: 'The `let` keyword is widely used to capture values returned by functions like `translate()`:',
            code: `nl sentence = "if it rains then I get wet"
let translated_formula = translate(sentence)`,
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
        summary: 'Prism implementa los cinco conectores fundamentales de la lógica clásica con palabras clave de alta legibilidad.',
        sections: [
          {
            heading: 'Lista de Operadores',
            text: '1. `not`: Negación (¬). Mayor precedencia.\n2. `and`: Conjunción (∧).\n3. `or`: Disyunción (∨).\n4. `impl`: Implicación condicional (→).\n5. `iff`: Bicondicional o doble implicación (↔).',
            code: `formula compleja = not p and (q or r) impl s iff t`,
            tip: 'Se recomienda el uso explícito de paréntesis para maximizar la legibilidad humana en razonamientos extensos.',
          },
        ],
      },
      en: {
        summary: 'Prism implements the five core connectives of classical propositional logic with clean, readable keywords.',
        sections: [
          {
            heading: 'Operator List',
            text: '1. `not`: Negation (¬). Highest precedence.\n2. `and`: Conjunction (∧).\n3. `or`: Disjunction (∨).\n4. `impl`: Conditional implication (→).\n5. `iff`: Biconditional (↔).',
            code: `formula complex_expr = not p and (q or r) impl s iff t`,
            tip: 'Explicit use of parentheses is strongly encouraged to ensure clarity in large reasoning structures.',
          },
        ],
      },
    },
  },
  {
    id: 'nlp-processing',
    title: {
      es: 'Lenguaje Natural (`nl`)',
      en: 'Natural Language (`nl`)',
    },
    description: {
      es: 'Declaración de sentencias verbales y el tipo de dato nativo nl.',
      en: 'Declaring verbal sentences and the native nl data type.',
    },
    category: 'nlp',
    categoryLabel: {
      es: 'Lenguaje Natural',
      en: 'Natural Language',
    },
    content: {
      es: {
        summary: 'La palabra clave `nl` introduce un enunciado en lenguaje natural como un objeto de análisis semántico dentro del código.',
        sections: [
          {
            heading: 'Uso del tipo `nl`',
            text: 'A diferencia de una cadena de texto ordinaria, las variables declaradas con `nl` son analizadas por el subsistema semántico de Prism:',
            code: `nl enunciado = "si p entonces q"
nl regla_clima = "si llueve o hace viento entonces no salgo"`,
          },
        ],
      },
      en: {
        summary: 'The `nl` keyword introduces a natural language sentence as a semantic entity ready for formal translation.',
        sections: [
          {
            heading: 'Using the `nl` Type',
            text: 'Unlike standard strings, variables declared with `nl` are prepared for Prism’s semantic mapping subsystem:',
            code: `nl statement = "si p entonces q"
nl weather_rule = "if it rains or is windy then I stay home"`,
          },
        ],
      },
    },
  },
  {
    id: 'translate-function',
    title: {
      es: 'Traducción mediante `translate`',
      en: 'Translation via `translate`',
    },
    description: {
      es: 'Mapeo algorítmico de oraciones en lenguaje natural a fórmulas proposicionales.',
      en: 'Algorithmic mapping from natural language sentences into propositional formulas.',
    },
    category: 'nlp',
    categoryLabel: {
      es: 'Lenguaje Natural',
      en: 'Natural Language',
    },
    content: {
      es: {
        summary: 'La función nativa `translate()` ejecuta el lexer semántico (SemanticMapper) para transformar enunciados en fórmulas proposicionales.',
        sections: [
          {
            heading: 'Pipeline de Traducción',
            text: 'Cuando se invoca `translate(linea)`, el intérprete de Prism realiza:\n1. Normalización de caracteres y minúsculas.\n2. Detección de lexemas de control: "si ... entonces", "o", "y", "no".\n3. Asociación con átomos existentes en el ámbito o inferencia de nuevas variables.\n4. Construcción del Árbol de Sintaxis Abstracta (AST) de la fórmula resultante.',
            code: `atom p = "hago ejercicio"
atom q = "tengo salud"

nl meta = "si hago ejercicio entonces tengo salud"
let formula_salud = translate(meta)

// formula_salud contiene internamente: (p → q)`,
          },
        ],
      },
      en: {
        summary: 'The built-in `translate()` function triggers the SemanticMapper to transform verbal statements into propositional formulas.',
        sections: [
          {
            heading: 'Translation Pipeline',
            text: 'When calling `translate(line)`, the Prism runtime executes:\n1. Character normalization and case folding.\n2. Control lexeme extraction: "if ... then", "or", "and", "not".\n3. Semantic association with existing scoped atoms or inferred propositions.\n4. Emitting the formal Abstract Syntax Tree (AST) representing the formula.',
            code: `atom p = "exercise"
atom q = "healthy"

nl goal = "if exercise then healthy"
let health_formula = translate(goal)

// health_formula internally contains: (p → q)`,
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
      es: 'El comando maestro para inspeccionar fórmulas y emitir dictámenes formales.',
      en: 'The master directive for inspecting formulas and computing formal verdicts.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: '`vertauto` es la instrucción insignia de Prism para evaluar una fórmula lógica de forma exhaustiva.',
        sections: [
          {
            heading: 'Bloques de Configuración',
            text: '`vertauto` recibe como argumento la fórmula a evaluar y un bloque con las opciones deseadas:\n- `steps`: Muestra el desglose de evaluación fila por fila en la consola.\n- `table`: Renderiza la tabla de verdad completa en formato matricial.\n- `verdict`: Emite la clasificación definitiva (tautología, contingencia o contradicción).',
            code: `vertauto implicacion {
    steps
    table
    verdict
}`,
          },
        ],
      },
      en: {
        summary: '`vertauto` is the flagship instruction in Prism for exhaustive evaluation of logical formulas.',
        sections: [
          {
            heading: 'Configuration Blocks',
            text: '`vertauto` accepts the target formula and a block specifying required outputs:\n- `steps`: Displays step-by-step row evaluations in console.\n- `table`: Renders the formatted truth matrix.\n- `verdict`: Computes the final classification (tautology, contingency, contradiction).',
            code: `vertauto implication {
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
    id: 'truth-tables',
    title: {
      es: 'Tablas de Verdad y Espacio 2^n',
      en: 'Truth Tables & 2^n State Space',
    },
    description: {
      es: 'Cálculo combinatorio de 2^n filas y asignación veritativa determinista.',
      en: 'Combinatorial calculation of 2^n rows and deterministic truth assignments.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: 'Para n proposiciones atómicas independientes, Prism genera un espacio de estados finito de tamaño exacto 2^n.',
        sections: [
          {
            heading: 'Ejemplo de Espacio de Estados',
            text: 'Para una fórmula con 2 variables (p, q), el espacio contiene 2^2 = 4 filas:\n- Fila 1: {p=false, q=false}\n- Fila 2: {p=false, q=true}\n- Fila 3: {p=true, q=false}\n- Fila 4: {p=true, q=true}',
            code: `=== Tabla de verdad ===
p | q | resultado
F | F | V
F | V | V
V | F | F
V | V | V`,
          },
        ],
      },
      en: {
        summary: 'For n independent atomic propositions, Prism builds an exact state space of size 2^n.',
        sections: [
          {
            heading: 'State Space Example',
            text: 'For a formula with 2 variables (p, q), the space comprises 2^2 = 4 rows:\n- Row 1: {p=false, q=false}\n- Row 2: {p=false, q=true}\n- Row 3: {p=true, q=false}\n- Row 4: {p=true, q=true}',
            code: `=== Truth Table ===
p | q | result
F | F | V
F | V | V
V | F | F
V | V | V`,
          },
        ],
      },
    },
  },
  {
    id: 'practical-examples',
    title: {
      es: 'Ejemplos Prácticos de Razonamiento',
      en: 'Practical Reasoning Examples',
    },
    description: {
      es: 'Casos de estudio: Modus Tollens, Leyes de De Morgan y Silogismos.',
      en: 'Case studies: Modus Tollens, De Morgan Laws, and Syllogisms.',
    },
    category: 'advanced',
    categoryLabel: {
      es: 'Avanzado',
      en: 'Advanced',
    },
    content: {
      es: {
        summary: 'Modelando problemas de razonamiento real y verificando argumentos deductivos clásicos en Prism.',
        sections: [
          {
            heading: 'Modus Tollens',
            text: 'Si sabemos que "p implica q" y se constata la falsedad de "q", entonces necesariamente "no p":',
            code: `module modus_tollens

use core

atom p = "llueve"
atom q = "el suelo está mojado"

formula premisa_1 = p impl q
formula premisa_2 = not q
formula deduccion = (premisa_1 and premisa_2) impl not p

vertauto deduccion {
    verdict
}`,
          },
        ],
      },
      en: {
        summary: 'Modeling real-world reasoning and validating classical deductive arguments in Prism.',
        sections: [
          {
            heading: 'Modus Tollens',
            text: 'If "p implies q" and "not q" holds, then "not p" must follow logically:',
            code: `module modus_tollens

use core

atom p = "it rains"
atom q = "ground is wet"

formula premise_1 = p impl q
formula premise_2 = not q
formula deduction = (premise_1 and premise_2) impl not p

vertauto deduction {
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
      es: 'Guía condensada de gramática, tipos y palabras reservadas en una sola página.',
      en: 'Condensed cheat sheet for grammar, types, and keywords in one page.',
    },
    category: 'advanced',
    categoryLabel: {
      es: 'Avanzado',
      en: 'Advanced',
    },
    content: {
      es: {
        summary: 'Todo lo que necesitas para consultar la sintaxis formal de Prism de un solo vistazo.',
        sections: [
          {
            heading: 'Palabras Clave Reservadas',
            text: '- `module`: Declara el nombre del módulo.\n- `use`: Importa bibliotecas como `core`.\n- `atom`: Define una proposición atómica.\n- `formula`: Declara una fórmula lógica explícita.\n- `nl`: Declara un enunciado en lenguaje natural.\n- `let`: Asigna el resultado de una expresión o traducción.\n- `translate`: Función de procesamiento semántico de lenguaje natural.\n- `vertauto`: Evalúa exhaustivamente una fórmula lógica.\n- `steps`, `table`, `verdict`: Modificadores de salida de `vertauto`.\n- `rule`, `run`: Palabras clave reservadas para el motor deductivo.',
          },
        ],
      },
      en: {
        summary: 'Everything you need to consult Prism syntax at a glance.',
        sections: [
          {
            heading: 'Reserved Keywords',
            text: '- `module`: Declares the module namespace.\n- `use`: Imports standard libraries like `core`.\n- `atom`: Declares an atomic proposition.\n- `formula`: Declares an explicit logical formula.\n- `nl`: Declares a natural language sentence.\n- `let`: Binds an expression or translation result.\n- `translate`: Natural language semantic parsing function.\n- `vertauto`: Exhaustively evaluates a logical formula.\n- `steps`, `table`, `verdict`: Evaluation display directives.\n- `rule`, `run`: Reserved keywords for the deductive engine.',
          },
        ],
      },
    },
  },
];
