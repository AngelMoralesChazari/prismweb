import { DocArticle, OperatorSpec } from '../types';

export const operatorsReference: OperatorSpec[] = [
  {
    keyword: 'not',
    symbol: '¬',
    meaning: {
      es: 'Negación lógica (no)',
      en: 'Logical negation (not)',
    },
    precedence: 5,
    associativity: 'right',
    example: 'not p',
    description: {
      es: 'Prefijo unario de mayor precedencia. Invierte el valor de verdad de la proposición o subfórmula.',
      en: 'Highest precedence unary prefix. Inverts the truth value of the proposition or subformula.',
    },
  },
  {
    keyword: 'and',
    symbol: '∧',
    meaning: {
      es: 'Conjunción lógica (y, además)',
      en: 'Logical conjunction (and)',
    },
    precedence: 4,
    associativity: 'left',
    example: 'p and q',
    description: {
      es: 'Asociatividad izquierda. Verdadera únicamente si ambos operandos son simultáneamente verdaderos.',
      en: 'Left-associative. True if and only if both operands evaluate to true simultaneously.',
    },
  },
  {
    keyword: 'or',
    symbol: '∨',
    meaning: {
      es: 'Disyunción inclusiva (o, o bien)',
      en: 'Inclusive disjunction (or)',
    },
    precedence: 3,
    associativity: 'left',
    example: 'p or q',
    description: {
      es: 'Asociatividad izquierda. Verdadera si al menos uno de los operandos es verdadero.',
      en: 'Left-associative. True if at least one of the operands evaluates to true.',
    },
  },
  {
    keyword: 'impl',
    symbol: '→',
    meaning: {
      es: 'Implicación condicional (si… entonces)',
      en: 'Material implication (if… then)',
    },
    precedence: 2,
    associativity: 'right',
    example: 'p impl q',
    description: {
      es: 'Asociatividad derecha. Falsa únicamente cuando el antecedente p es verdadero y el consecuente q es falso.',
      en: 'Right-associative. False only when antecedent p is true and consequent q is false.',
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
    associativity: 'left',
    example: 'p iff q',
    description: {
      es: 'Menor precedencia (nivel 1). Verdadera si ambos operandos tienen el mismo valor veritativo.',
      en: 'Lowest precedence (level 1). True if both operands have identical truth values.',
    },
  },
];

export const docsArticles: DocArticle[] = [
  {
    id: 'intro',
    title: {
      es: 'Manual Oficial y Las 3 Formas de Evaluar',
      en: 'Official Manual & The 3 Evaluation Forms',
    },
    description: {
      es: 'Introducción al lenguaje Prism v1.0 (.pr) y las 3 formas canónicas de evaluar proposiciones lógicas.',
      en: 'Introduction to the Prism v1.0 (.pr) language and the 3 canonical ways to evaluate logical propositions.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Esta es la documentación oficial de uso del lenguaje Prism v1.0, dirigida a desarrolladores, estudiantes, profesores y usuarios que deseen escribir, compilar y evaluar programas lógicos en Prism (.pr).',
        sections: [
          {
            heading: 'Resumen Rápido: Las 3 Formas de Evaluar en Prism',
            text: 'Prism permite expresar y evaluar razonamientos lógicos mediante tres formas principales según el punto de partida de tu ejercicio:\n\n1. **Forma 1: Lenguaje Natural Canónico (`nl` + `atom` + `translate` + `vertauto`)**\nPara enunciados discursivos en español, problemas de examen o razonamientos del mundo real procesados por el motor NLP.',
            code: `module ejercicio1
use core

nl premisa = "Si el procesador se suspende entonces la tarea se reintenta."
atom p = "el procesador se suspende"
atom q = "la tarea se reintenta"

let equivalencia = translate(premisa)

vertauto equivalencia {
    steps
    table
    verdict
}`,
          },
          {
            heading: 'Forma 2: Fórmula Simbólica con Nombre (`formula`)',
            text: 'Para ejercicios de álgebra booleana y teoremas puros con conectores (`and`, `or`, `not`, `impl`, `iff`) donde quieres asignar un identificador a la fórmula.',
            code: `module ejercicio2
use core

atom p = "el procesador se suspende"
atom q = "la tarea se reintenta"

formula f = p impl q

vertauto f {
    table
    verdict
}`,
          },
          {
            heading: 'Forma 3: Expresión Simbólica Directa / Inline (`vertauto (expr)`)',
            text: 'Para evaluación inmediata al vuelo sin declarar identificadores temporales de fórmula (`let` o `formula`).',
            code: `module ejercicio3
use core

atom p = "el procesador se suspende"
atom q = "la tarea se reintenta"

vertauto (p and not q) {
    table
    verdict
}`,
          },
        ],
      },
      en: {
        summary: 'Official documentation for the Prism v1.0 language, designed for developers, students, and educators writing, compiling, and evaluating logical programs in Prism (.pr).',
        sections: [
          {
            heading: 'Quick Summary: The 3 Ways to Evaluate in Prism',
            text: 'Prism lets you express and evaluate logical arguments through three main patterns:\n\n1. **Form 1: Canonical Natural Language (`nl` + `atom` + `translate` + `vertauto`)**',
            code: `module ejercicio1
use core

nl premisa = "Si el procesador se suspende entonces la tarea se reintenta."
atom p = "el procesador se suspende"
atom q = "la tarea se reintenta"

let equivalencia = translate(premisa)

vertauto equivalencia {
    steps
    table
    verdict
}`,
          },
          {
            heading: 'Form 2: Named Symbolic Formula (`formula`)',
            text: 'For Boolean algebra exercises and pure theorems using connectives (`and`, `or`, `not`, `impl`, `iff`).',
            code: `module ejercicio2
use core

atom p = "el procesador se suspende"
atom q = "la tarea se reintenta"

formula f = p impl q

vertauto f {
    table
    verdict
}`,
          },
          {
            heading: 'Form 3: Direct / Inline Symbolic Expression (`vertauto (expr)`)',
            text: 'For immediate on-the-fly evaluation without declaring intermediate formula variables.',
            code: `module ejercicio3
use core

atom p = "el procesador se suspende"
atom q = "la tarea se reintenta"

vertauto (p and not q) {
    table
    verdict
}`,
          },
        ],
      },
    },
  },
  {
    id: 'first-program',
    title: {
      es: 'Guía Rápida de Ejercicios y Método en Papel',
      en: 'Quick Exercise Guide & Paper Method',
    },
    description: {
      es: 'Flujo de trabajo con prc check / prc run, Orden Canónico en Papel y errores frecuentes.',
      en: 'Workflow with prc check / prc run, Canonical Paper Order, and common pitfalls.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Guía práctica paso a paso para programar ejercicios lógicos, ejecutar comandos del compilador (prc check, prc run) y aplicar el Orden Canónico de Declaraciones (Método en Papel).',
        sections: [
          {
            heading: '1. Flujo de Trabajo y Comandos CLI',
            text: 'Convención obligatoria: el identificador `module` en la primera línea debe coincidir con el nombre del archivo sin `.pr` (por ejemplo, `mi_ejercicio.pr` debe iniciar con `module mi_ejercicio`).',
            code: `# Una vez por sesión (o tras cambiar Java)
.\\compile.ps1

# Validar sintaxis y referencias (sin ejecutar)
java -cp out prism.pr.PrcCli check examples/mi_ejercicio.pr

# Ejecutar programa .pr
java -cp out prism.pr.PrcCli run examples/mi_ejercicio.pr`,
          },
          {
            heading: '2. Orden Canónico de Declaraciones (Método en Papel)',
            text: 'Sigue el flujo exacto con el que resolverías un problema en papel:\n1. Enunciado en lenguaje natural (`nl`)\n2. Definición de átomos (`atom`)\n3. Traducción o formalización (`let` / `formula`)\n4. Evaluación formal (`vertauto`)',
            code: `module nombre          # = nombre.pr
use core               # carga core.pr

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
          {
            heading: '3. Operadores Lógicos y Errores Frecuentes',
            text: 'Equivalencias entre lenguaje natural y conectores de Prism:\n- **y, además** → `and` (∧)\n- **o, o bien** → `or` (∨)\n- **si… entonces** → `impl` (→)\n- **si y solo si** → `iff` (↔)\n- **no** → `not` (¬)\n\n**Errores frecuentes al formalizar:**\n- «Estudio **o** no estudio» → Correcto: `p or not p` (tautology) | Incorrecto: `p and not p` (contradiction).\n- «Estudio **y** apruebo» → Correcto: `p and q` | Incorrecto: `p or q`.',
            tip: 'Usa nl t = "..." + translate(t) cuando reutilices el mismo texto o sigas el método en papel, y translate("...") cuando sea una sola frase corta.',
          },
        ],
      },
      en: {
        summary: 'Step-by-step guide to writing logical exercises, running compiler commands (prc check, prc run), and following the Canonical Paper Order.',
        sections: [
          {
            heading: '1. Workflow & CLI Commands',
            text: 'Mandatory convention: the `module` identifier on the first line must match the filename without `.pr` (e.g., `mi_ejercicio.pr` starts with `module mi_ejercicio`).',
            code: `# Compile once per session
.\\compile.ps1

# Validate syntax and references (without executing)
java -cp out prism.pr.PrcCli check examples/mi_ejercicio.pr

# Execute .pr program
java -cp out prism.pr.PrcCli run examples/mi_ejercicio.pr`,
          },
          {
            heading: '2. Canonical Order of Declarations (Paper Method)',
            text: 'Follows the exact sequence used when solving an exercise on paper:\n1. Natural language statement (`nl`)\n2. Atom definitions (`atom`)\n3. Translation or formalization (`let` / `formula`)\n4. Formal evaluation (`vertauto`)',
            code: `module nombre          # = nombre.pr
use core               # carga core.pr

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
    id: 'snippets-catalogo',
    title: {
      es: 'Autocompletado y Snippets (prnl, prnlit, prform, prinl)',
      en: 'Autocomplete & Snippets (prnl, prnlit, prform, prinl)',
    },
    description: {
      es: 'Árbol de decisión, comparativa de los 5 snippets principales y bloques de una línea.',
      en: 'Decision tree, comparison of the 5 main snippets, and single-line building blocks.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'En un archivo .pr vacío dentro de VS Code o Cursor, escribe cualquiera de los prefijos oficiales (prnl, prnlit, prform, prinl, prog) y pulsa Tab para generar la estructura completa del ejercicio.',
        sections: [
          {
            heading: 'Árbol de Decisión: ¿Qué snippet usar?',
            text: 'Elige la plantilla exacta según el tipo de ejercicio que vas a resolver:',
            code: `¿Qué tipo de ejercicio vas a resolver?
│
├─► 1. Enunciado en Español / Lenguaje Natural
│    │
│    ├─ ¿Quieres seguir el flujo formal de examen en papel (Recomendado)?
│    │    └─► prnl (o nlex)     ──  nl + atom + let translate(premisa) + vertauto
│    │
│    └─ ¿Es una sola frase corta y quieres ahorrar código?
│         └─► prnlit            ──  atom + let translate("literal") + vertauto
│
├─► 2. Lógica Simbólica Pura (Álgebra de Boole, sin texto en español)
│    │
│    ├─ ¿Quieres darle un nombre a la fórmula para reutilizarla?
│    │    └─► prform            ──  atom + formula f = expr + vertauto f
│    │
│    └─ ¿Es una prueba rápida / cálculo al vuelo sin nombres intermedios?
│         └─► prinl (vainline)  ──  atom + vertauto (expr inline)
│
└─► 3. Estructura Libre desde Cero
     └─► prog (o prprog)        ──  Solo module + use core (sin plantillas fijas)`,
          },
          {
            heading: 'Detalle Comparativo de los Snippets Principales',
            text: '• **`prnl` (o `nlex`) — NL Canónico (Método en Papel):** Es el snippet principal por defecto. Genera `module` + `use core` + `nl premisa` + `atom` + `let equivalencia = translate(premisa)` + `vertauto`. Permite ver el texto original, los átomos identificados y la fórmula resultante paso a paso.\n\n• **`prnlit` — NL con Translate Literal:** Genera `atom` + `let implicacion = translate("si estudio apruebo")` + `vertauto`. Ideal cuando la frase en español es corta y no necesitas reutilizar la variable `nl`.\n\n• **`prform` — Fórmula Simbólica Pura:** Genera `atom` + `formula f = p impl q` + `vertauto f`. Úsalo cuando no hay texto en español y te dan directamente una expresión matemática como `(p → q) ↔ (¬p ∨ q)`.\n\n• **`prinl` (o `vainline`) — Simbólico Directo / Inline:** Genera `atom` + `vertauto (p impl q) { steps table verdict }`. Evalúa directamente entre paréntesis sin crear variables intermedias.\n\n• **`tauto` y `contra`:** Generan plantillas rápidas para probar tautologías (`p or not p`) y contradicciones (`p and not p`).',
          },
          {
            heading: 'Snippets de Una Línea (Bloques Sueltos)',
            text: 'Para ampliar un programa ya iniciado con `prog`:\n- `use` / `usecore` → `use core`\n- `atom` → `atom p = "etiqueta"`\n- `nl` → `nl nombre = "texto natural"`\n- `lettr` / `translate` → `let f = translate(variable_nl)`\n- `lettrl` / `translatelit` → `let f = translate("si estudio apruebo")`\n- `formula` / `form` → `formula f = p impl q`\n- `va` / `vertauto` → `vertauto f` (modo corto)\n- `vax` / `vertautoext` → `vertauto f { steps table verdict }` (modo extendido)',
          },
        ],
      },
      en: {
        summary: 'In an empty .pr file in VS Code or Cursor, type any official prefix (prnl, prnlit, prform, prinl, prog) and press Tab to scaffold the full exercise.',
        sections: [
          {
            heading: 'Decision Tree: Which Snippet to Use?',
            text: 'Choose the right template based on the exercise type:',
            code: `1. Natural Language Statement:
   - Full Paper Method (Recommended) -> prnl (or nlex)
   - Short inline string literal     -> prnlit

2. Pure Symbolic Logic (Boolean Algebra):
   - Named reusable formula          -> prform
   - Fast inline evaluation          -> prinl (or vainline)

3. Empty Program Structure:
   - Module header + use core only   -> prog (or prprog)`,
          },
        ],
      },
    },
  },
  {
    id: 'vscode-extension',
    title: {
      es: 'Extensión VS Code / Cursor (prism-0.3.2.vsix)',
      en: 'VS Code / Cursor Extension (prism-0.3.2.vsix)',
    },
    description: {
      es: 'Instalación de la extensión oficial de Prism, resaltado léxico .pr y tareas integradas.',
      en: 'Installing the official Prism extension, .pr syntax highlighting, and editor tasks.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'La extensión oficial de Prism para VS Code y Cursor (v0.3.2) proporciona resaltado de sintaxis para archivos .pr, autocompletado de todos los snippets del lenguaje y ejecución mediante tareas.',
        sections: [
          {
            heading: '1. Instalar desde el paquete .vsix (Recomendado)',
            text: 'Puedes descargar el archivo `prism-0.3.2.vsix` desde la sección de Descarga de esta web e instalarlo en segundos:\n1. En VS Code o Cursor, abre la paleta de comandos con **Ctrl+Shift+P**.\n2. Ejecuta **Extensions: Install from VSIX...**\n3. Selecciona `prism-0.3.2.vsix` y recarga la ventana.',
            code: `# También puedes instalarla desde la terminal:
code --install-extension prism-0.3.2.vsix`,
            tip: 'Si estás desarrollando desde el repositorio fuente, también puedes usar Developer: Install Extension from Location... apuntando a la carpeta extensions/logicscript.',
          },
          {
            heading: '2. Configurar Tareas de Compilación y Ejecución (.vscode)',
            text: 'Para habilitar los atajos de ejecución rápida (`prc check` y `prc run` sobre el archivo `.pr` actual), copia los archivos de configuración en `.vscode/`:',
            code: `New-Item -ItemType Directory -Force .vscode
Copy-Item tooling/vscode/tasks.json .vscode/
Copy-Item tooling/vscode/settings.json.example .vscode/settings.json`,
          },
          {
            heading: '3. Gramática y Palabras Resaltadas',
            text: '- **Control:** `module`, `use`, `atom`, `formula`, `nl`, `let`, `translate`, `vertauto`, `steps`, `table`, `verdict`\n- **Operadores:** `not`, `and`, `or`, `impl`, `iff`\n- **Comentarios:** `#` hasta fin de línea\n- **Cadenas:** `"..."`',
          },
        ],
      },
      en: {
        summary: 'The official Prism extension for VS Code and Cursor (v0.3.2) provides syntax highlighting for .pr files, code snippets, and integrated runner tasks.',
        sections: [
          {
            heading: '1. Install from the .vsix Package',
            text: 'Download `prism-0.3.2.vsix` from the Download page and install it via **Ctrl+Shift+P** → **Extensions: Install from VSIX...**',
            code: `code --install-extension prism-0.3.2.vsix`,
          },
        ],
      },
    },
  },
  {
    id: 'especificacion-lexica',
    title: {
      es: 'Especificación v1.0: Léxico, Archivos .pr y Two-Pass',
      en: 'Specification v1.0: Lexing, .pr Files & Two-Pass',
    },
    description: {
      es: 'Tokens, reglas de identificadores, compilador en Dos Pasadas y diagnóstico semántico.',
      en: 'Tokens, identifier rules, Two-Pass compiler architecture, and semantic diagnostics.',
    },
    category: 'language-basics',
    categoryLabel: {
      es: 'Especificación v1.0',
      en: 'Specification v1.0',
    },
    content: {
      es: {
        summary: 'Definición formal de los elementos léxicos de Prism v1.0, reglas para nombres de archivos .pr y capacidades de validación semántica del compilador.',
        sections: [
          {
            heading: '1. Elementos Léxicos e Identificadores (§2)',
            text: '- **Caracteres ignorables:** espacios, tabulaciones y saltos de línea (`\\n`, `\\r\\n`).\n- **Comentarios:** desde `#` hasta el final de la línea.\n- **Literales de cadena:** `"..."` codificados en **UTF-8**.\n- **Identificadores (`letter { letter | digit | \'_\' }`):**\n  - Son **case-sensitive** (`ejercicio1` y `Ejercicio1` son distintos).\n  - El **primer carácter** debe ser una letra (`a`–`z`, `A`–`Z`). **No** puede empezar con dígito (`1ejercicio`) ni con guión bajo (`_privado`).\n  - El resto puede contener letras, dígitos o `_` (no se permite guión `-` ni espacios).\n  - Prohibido usar palabras reservadas como identificadores.',
            code: `# Ejemplos de identificadores válidos:
module ejercicio_1
atom p = "llueve"
atom proposicion_A = "hace frío"

# Inválidos: _privado, 1ejercicio, ejercicio-1, let, atom`,
          },
          {
            heading: '2. Flexibilidad Declarativa: Compilador en Dos Pasadas (Two-Pass)',
            text: 'Aunque el orden canónico recomendado es el método en papel (`nl` → `atom` → `let` → `vertauto`), el compilador de Prism procesa los programas en **dos pasadas** (*Two-Pass Symbol Collection*). Esto otorga plena libertad al programador para organizar sus declaraciones (por ejemplo, declarando los `atom` arriba como variables globales, o abajo como glosario) sin provocar errores de referencia hacia adelante (*forward references*).',
          },
          {
            heading: '3. Diagnóstico de Coherencia Semántica ("Did you mean...?")',
            text: 'Al utilizar `let f = translate(premisa)`, Prism analiza automáticamente que las etiquetas de tus declaraciones `atom` coincidan fielmente con las proposiciones identificadas en el texto natural. Si declaras una frase no coincidente, el compilador emite un aviso formativo inmediato en consola (`prc run` y `prc check`) sugiriendo la proposición exacta detectada:',
            code: `[Aviso Semántico] El átomo declarado 'p' ("el procesador se apaga") no coincide con ninguna cláusula de 'premisa'.
   Sugerencia: Se detectó una cláusula no enlazada en el texto: "procesador se suspende" (asignada automáticamente al símbolo 'v').
   --> ¿Quisiste decir: atom p = "procesador se suspende"?`,
            tip: 'Esto evita la trampa de los diccionarios de sinónimos abiertos, garantizando rigor formal y guiando al estudiante a modelar la proposición canónica correcta.',
          },
        ],
      },
      en: {
        summary: 'Formal lexical specification of Prism v1.0, .pr file conventions, Two-Pass symbol collection, and semantic coherence diagnostics.',
        sections: [
          {
            heading: '1. Lexical Tokens & Identifiers (§2)',
            text: '- Comments start with `#` until the end of the line.\n- Strings `"..."` are UTF-8 encoded.\n- Identifiers must start with a letter (`a-z`, `A-Z`) followed by letters, digits, or `_`.',
          },
          {
            heading: '2. Two-Pass Compiler & Semantic Diagnostics',
            text: 'Prism processes declarations in two passes (*Two-Pass Symbol Collection*) and verifies that `atom` labels match clauses extracted from `nl` statements, offering helpful *"Did you mean...?"* suggestions.',
          },
        ],
      },
    },
  },
  {
    id: 'gramatica-ebnf',
    title: {
      es: 'Gramática EBNF y Precedencia de Operadores',
      en: 'EBNF Grammar & Operator Precedence',
    },
    description: {
      es: 'Palabras reservadas, especificación EBNF completa v1.0 y niveles de precedencia.',
      en: 'Reserved keywords, full v1.0 EBNF grammar specification, and precedence levels.',
    },
    category: 'language-basics',
    categoryLabel: {
      es: 'Especificación v1.0',
      en: 'Specification v1.0',
    },
    content: {
      es: {
        summary: 'Especificación formal de la gramática EBNF de Prism v1.0, conjunto completo de palabras reservadas y jerarquía de precedencia de operadores.',
        sections: [
          {
            heading: '1. Palabras Reservadas y Puntuación (§2.5–§2.6)',
            text: 'Palabras reservadas oficiales de Prism v1.0 y símbolos de puntuación (`= ( ) { } , :`):',
            code: `module  use  atom  formula  nl  let  rule  run
translate  vertauto
when  and  then  means  is  module
not  or  impl  iff
steps  table  verdict`,
          },
          {
            heading: '2. Gramática del Programa en EBNF (§3)',
            text: 'Definición formal de la estructura sintáctica de un archivo `.pr`:',
            code: `program        ::= module_decl { use_decl } { top_level_stmt }
module_decl    ::= 'module' identifier
use_decl       ::= 'use' identifier

top_level_stmt ::= atom_decl
                 | formula_decl
                 | nl_decl
                 | let_decl
                 | rule_decl
                 | run_stmt
                 | vertauto_stmt

atom_decl      ::= 'atom' identifier '=' string_literal
formula_decl   ::= 'formula' identifier '=' formula_expr
nl_decl        ::= 'nl' identifier '=' string_literal
let_decl       ::= 'let' identifier '=' expression
expression     ::= translate_call
translate_call ::= 'translate' '(' text_expr { ',' 'module' ':' identifier } ')'
text_expr      ::= identifier | string_literal

vertauto_stmt  ::= 'vertauto' formula_ref vertauto_suffix?
formula_ref    ::= identifier | '(' formula_expr ')'
vertauto_suffix ::= '{' vertauto_option { vertauto_option } '}'
vertauto_option ::= 'steps' | 'table' | 'verdict'`,
          },
          {
            heading: '3. Gramática de Expresiones de Fórmula (§4)',
            text: 'Jerarquía de precedencia de menor a mayor binding:\n- **Nivel 1:** `iff` (asociatividad izquierda)\n- **Nivel 2:** `impl` (asociatividad derecha)\n- **Nivel 3:** `or` (asociatividad izquierda)\n- **Nivel 4:** `and` (asociatividad izquierda)\n- **Nivel 5:** `not` (prefijo unario)\n- **Nivel 6:** átomo o `( ... )`',
            code: `formula_expr   ::= iff_expr
iff_expr       ::= impl_expr { 'iff' impl_expr }
impl_expr      ::= or_expr { 'impl' or_expr }
or_expr        ::= and_expr { 'or' and_expr }
and_expr       ::= not_expr { 'and' not_expr }
not_expr       ::= 'not' not_expr | primary_expr
primary_expr   ::= identifier | '(' formula_expr ')'`,
          },
        ],
      },
      en: {
        summary: 'Formal EBNF grammar specification of Prism v1.0, reserved words, and operator precedence hierarchy.',
        sections: [
          {
            heading: '1. Reserved Keywords (§2.5)',
            text: 'Official reserved words in Prism v1.0:',
            code: `module  use  atom  formula  nl  let  rule  run
translate  vertauto
when  and  then  means  is  module
not  or  impl  iff
steps  table  verdict`,
          },
        ],
      },
    },
  },
  {
    id: 'semantica-vertauto',
    title: {
      es: 'Semántica: module, use, translate, vertauto y Tipos',
      en: 'Semantics: module, use, translate, vertauto & Types',
    },
    description: {
      es: 'Funcionamiento semántico de las declaraciones, modos de vertauto y sistema de tipos v1.0.',
      en: 'Semantic behavior of declarations, vertauto modes, and the v1.0 static type system.',
    },
    category: 'logic-engine',
    categoryLabel: {
      es: 'Motor Lógico',
      en: 'Logic Engine',
    },
    content: {
      es: {
        summary: 'Semántica operativa de los constructos de Prism v1.0: módulos léxicos .lgs, evaluación con vertauto en modo corto y extendido, y modelo estático de tipos.',
        sections: [
          {
            heading: '1. `module` y `use` (Módulos de Conocimiento `.lgs`)',
            text: '- **`module <identificador>`:** Declara el nombre lógico del programa contenido en el archivo `.pr`. Debe ser la primera sentencia del archivo (exactamente uno por archivo).\n- **`use <identificador>`:** Carga el recurso léxico `logicscript/<identificador>.lgs` (por ejemplo, `use core` carga `core.lgs`). Nota: `use core` referencia un módulo de datos léxicos `.lgs`, no otro archivo `.pr`.',
          },
          {
            heading: '2. `vertauto`: Modo Corto vs Modo Extendido',
            text: '`vertauto` evalúa una **Formula** y emite uno de los tres dictámenes formales (`tautology`, `contingency`, `contradiction`):\n\n- **Modo corto:** `vertauto f` o `vertauto (p impl q)` → Imprime en una sola línea la fórmula y su clasificación: `(p → q)  contingency`.\n- **Modo extendido:** `vertauto f { steps table verdict }` (o cualquier subconjunto como `{ table verdict }`).\n  - `steps`: Pasos pedagógicos (identificación, formalización y evaluación fila por fila).\n  - `table`: Tabla de verdad completa ($2^n$ combinaciones).\n  - `verdict`: Dictamen formal con explicación.',
            code: `# Modo corto (salida mínima de 1 línea)
vertauto (p impl q)

# Modo extendido completo
vertauto f {
    steps
    table
    verdict
}`,
          },
          {
            heading: '3. Sistema de Tipos Estático (v1.0)',
            text: 'Prism valida en compilación cuatro tipos conceptuales:\n- **Text:** originado por `nl` o un literal en `translate`, consumido por `translate`.\n- **Formula:** originado por `formula`, `let` + `translate` o `formula_expr`, consumido por `vertauto`.\n- **Atom:** originado por `atom`, consumido en `formula_expr`.\n- **ModuleRef:** originado por `use`, consumido en `translate(..., module: ...)`.\n\nPasar un **Text** directamente a `vertauto` sin `translate` (por ejemplo, `vertauto premisa`) o usar un átomo no declarado produce un error de compilación.',
          },
        ],
      },
      en: {
        summary: 'Operational semantics of Prism v1.0 constructs: .lgs lexical modules, short vs extended vertauto modes, and static type checking.',
        sections: [
          {
            heading: '1. Short vs Extended `vertauto` Modes',
            text: '`vertauto` supports both single-line short mode (`vertauto f`) and block mode (`vertauto f { steps table verdict }`).',
            code: `vertauto (p impl q)
vertauto f { steps table verdict }`,
          },
        ],
      },
    },
  },
  {
    id: 'reglas-identificadores',
    title: {
      es: 'Reglas de Identificadores, `let`, `nl` y Ejemplos',
      en: 'Identifier Rules, `let`, `nl` & Examples Breakdown',
    },
    description: {
      es: 'Qué forma parte oficial del lenguaje vs nombres libres, inmutabilidad de let y estilos de translate.',
      en: 'Official language syntax vs user-chosen identifiers, let immutability, and translate styles.',
    },
    category: 'advanced',
    categoryLabel: {
      es: 'Avanzado y Referencia',
      en: 'Advanced & Reference',
    },
    content: {
      es: {
        summary: 'Aclaración oficial sobre qué palabras forman parte estricta de Prism v1.0 y cuáles son identificadores libres elegidos por el programador (como f1, phi, psi o linea1).',
        sections: [
          {
            heading: '1. ¿Por qué `let` y cómo funciona su inmutabilidad?',
            text: '`let <identificador> = <expresión>` crea un enlace local (*binding*) inmutable en el ámbito del módulo al resultado de una expresión (típicamente una `Formula` devuelta por `translate`).\n- Se asigna **una sola vez**; redeclarar el mismo nombre en el mismo archivo `.pr` es un error de compilación.\n- Nombres como `f1`, `phi`, `psi` o `equivalencia` no tienen significado especial interno: son nombres libres elegidos por el autor del programa.',
            code: `let f_implicacion = translate(linea_lluvia)
let f_directa     = translate("si llueve llevo paraguas")
let f_ingles      = translate("if it rains I carry an umbrella", module: core_en)

vertauto f_implicacion`,
          },
          {
            heading: '2. Los 3 Estilos de `translate` Comparados',
            text: 'Las tres formas siguientes obtienen una `Formula` desde lenguaje natural:\n1. **Variable intermedia (`nl` + `translate(linea1)`):** Ideal para el método en papel o reutilizar el enunciado.\n2. **Literal inline (`translate("...")`):** Ideal para frases cortas de un solo uso.\n3. **Con módulo léxico explícito (`translate("...", module: core_en)`):** Fuerza un módulo `.lgs` específico previamente importado con `use`.',
            code: `nl linea1 = "si llueve llevo paraguas"
let f1 = translate(linea1)

let phi = translate("si llueve llevo paraguas")
let psi = translate("if it rains I carry an umbrella", module: core_en)`,
          },
          {
            heading: '3. Qué NO está definido en v1.0',
            text: 'Para evitar confusiones, los siguientes elementos **no** forman parte de Prism v1.0:\n- Asignación mutable (`set`, `:=`, reasignación de variables).\n- Anotaciones explícitas de tipo (`let f: Formula = ...`).\n- Funciones definidas por el usuario (`fn`, `def`).\n- Importación entre archivos `.pr` (en v1.0 `use` solo importa módulos léxicos `.lgs`).',
          },
        ],
      },
      en: {
        summary: 'Official clarification on reserved syntax versus user-chosen identifiers (such as f1, phi, psi), let immutability, and the 3 styles of translate.',
        sections: [
          {
            heading: '1. `let` Bindings & Immutability',
            text: '`let <id> = <expression>` creates an immutable binding within the module scope.',
            code: `nl linea1 = "si llueve llevo paraguas"
let f1 = translate(linea1)
let phi = translate("si llueve llevo paraguas")`,
          },
        ],
      },
    },
  },
];
