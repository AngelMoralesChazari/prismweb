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
      es: 'Palabras Reservadas y su Función',
      en: 'Reserved Keywords & Their Function',
    },
    description: {
      es: 'Referencia completa de todas las palabras reservadas de Prism v1.0 y la función exacta que cumple cada una dentro de un programa .pr.',
      en: 'Complete reference of all Prism v1.0 reserved words and the exact role each one plays in a .pr program.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Prism cuenta con un conjunto cerrado e inmutable de palabras reservadas. Ninguna de estas palabras puede utilizarse como nombre de módulo, átomo o variable. A continuación se detalla cada palabra reservada y la función que cumple en el lenguaje.',
        sections: [
          {
            heading: '1. Estructura del Programa y Módulos (module, use)',
            text: '• module: Declara el nombre lógico del archivo .pr actual. Debe ser obligatoriamente la primera instrucción del archivo y su identificador debe coincidir con el nombre del archivo sin la extensión .pr.\n\n• use: Importa un módulo léxico de conocimiento (por ejemplo, use core), el cual habilita el reconocimiento de conectores gramaticales en lenguaje natural para el motor de traducción.',
            code: `module mi_programa   # El archivo debe llamarse mi_programa.pr
use core             # Carga el módulo léxico base`,
          },
          {
            heading: '2. Declaración de Proposiciones y Enunciados (atom, nl, formula, let)',
            text: '• atom: Declara una proposición atómica elemental (como p, q, r) asociada a su significado en texto entre comillas dobles. Representa una variable booleana pura.\n\n• nl: Declara una variable que almacena un enunciado completo en lenguaje natural entre comillas dobles para ser analizado posteriormente.\n\n• formula: Declara una fórmula proposicional simbólica explícita construida directamente con átomos y operadores lógicos.\n\n• let: Crea una variable inmutable (de asignación única) que guarda la fórmula simbólica generada por la función translate(...).',
            code: `nl premisa = "si llueve llevo paraguas"
atom p = "llueve"
atom q = "paraguas"

let f_traducida = translate(premisa)
formula f_simbolica = p impl q`,
          },
          {
            heading: '3. Traducción y Evaluación Veritativa (translate, vertauto, steps, table, verdict)',
            text: '• translate: Función nativa que recibe una variable nl (o un texto literal entre comillas) y lo convierte de forma determinista en una fórmula lógica simbólica.\n\n• vertauto: Instrucción principal del motor de evaluación veritativa. Evalúa una fórmula en sus 2^n combinaciones posibles de valores de verdad.\n\n• steps: Opción dentro del bloque vertauto que muestra paso a paso la identificación de átomos y la evaluación de cada subfórmula.\n\n• table: Opción dentro del bloque vertauto que genera e imprime la tabla de verdad completa.\n\n• verdict: Opción dentro del bloque vertauto que emite el dictamen lógico final: tautology (tautología), contradiction (contradicción) o contingency (contingencia).',
            code: `vertauto f_traducida {
    steps
    table
    verdict
}`,
          },
          {
            heading: '4. Operadores Lógicos Proposicionales (not, and, or, impl, iff)',
            text: '• not (¬): Negación lógica unaria ("no"). Invierte el valor de verdad de la proposición. Tiene la precedencia más alta (nivel 5).\n\n• and (∧): Conjunción lógica ("y", "además"). Es verdadera únicamente cuando ambos operandos son verdaderos (precedencia 4).\n\n• or (∨): Disyunción lógica inclusiva ("o", "o bien"). Es verdadera cuando al menos uno de los operandos es verdadero (precedencia 3).\n\n• impl (→): Implicación condicional ("si... entonces"). Solo es falsa cuando el antecedente es verdadero y el consecuente es falso (precedencia 2, asociatividad derecha).\n\n• iff (↔): Bicondicional o equivalencia lógica ("si y solo si"). Es verdadera cuando ambos operandos tienen el mismo valor de verdad (precedencia 1).',
            code: `formula ley_contraposicion = (p impl q) iff (not q impl not p)`,
          },
          {
            heading: '5. Palabras Reservadas de Reglas e Inferencia (rule, when, then, means, is, run)',
            text: '• rule, when, then, means, is, run: Palabras reservadas de la gramática oficial de Prism destinadas a la declaración de reglas formales de inferencia, condiciones de activación y ejecución declarativa.',
            code: `# Conjunto completo de palabras reservadas de Prism v1.0:
module  use  atom  formula  nl  let  rule  run
translate  vertauto
when  and  then  means  is
not  or  impl  iff
steps  table  verdict`,
          },
        ],
      },
      en: {
        summary: 'Prism has a closed, immutable set of reserved keywords. Below is the complete list of reserved keywords and the function each one fulfills in a .pr program.',
        sections: [
          {
            heading: '1. Program Structure & Modules (module, use)',
            text: '• module: Declares the logical name of the .pr file.\n• use: Loads a lexical knowledge module such as core.',
            code: `module my_program
use core`,
          },
          {
            heading: '2. Declarations & Evaluation (atom, nl, formula, let, translate, vertauto)',
            text: '• atom: Declares an elementary propositional variable.\n• nl: Stores a natural language statement.\n• formula: Declares a symbolic formula.\n• let: Binds the result of translate(...).\n• vertauto: Evaluates a formula with optional steps, table, and verdict.',
            code: `module7
use core
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
    id: 'first-program',
    title: {
      es: 'Orden Recomendado de Programación',
      en: 'Recommended Programming Order',
    },
    description: {
      es: 'Orden Canónico de Declaraciones y equivalencias de operadores lógicos con errores frecuentes.',
      en: 'Canonical Order of Declarations and logical operator equivalences with common pitfalls.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Guía práctica del orden recomendado para estructurar tus programas en Prism siguiendo el flujo natural de resolución en papel, junto con las equivalencias de conectores y errores frecuentes al formalizar.',
        sections: [
          {
            heading: '1. Orden Canónico de Declaraciones',
            text: 'Sigue el flujo exacto con el que resolverías un problema de lógica en papel:\n1. Enunciado en lenguaje natural (nl)\n2. Definición de átomos (atom)\n3. Traducción o formalización (let / formula)\n4. Evaluación formal (vertauto)',
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
            heading: '2. Operadores Lógicos y Errores Frecuentes',
            text: 'Equivalencias entre lenguaje natural y conectores de Prism:\n- y, además → and (∧)\n- o, o bien → or (∨)\n- si… entonces → impl (→)\n- si y solo si → iff (↔)\n- no → not (¬)\n\nErrores frecuentes al formalizar:\n- «Estudio o no estudio» → Correcto: p or not p (tautology) | Incorrecto: p and not p (contradiction).\n- «Estudio y apruebo» → Correcto: p and q | Incorrecto: p or q.',
            tip: 'Usa nl t = "..." + translate(t) cuando reutilices el mismo texto o sigas el método en papel, y translate("...") cuando sea una sola frase corta.',
          },
          {
            heading: '3. Jerarquía de Precedencia de Operadores',
            text: 'Cuando combinas varios operadores sin paréntesis, Prism los agrupa de mayor a menor prioridad:\n- Nivel 5 (mayor prioridad): not (prefijo unario)\n- Nivel 4: and (asociatividad izquierda)\n- Nivel 3: or (asociatividad izquierda)\n- Nivel 2: impl (asociatividad derecha)\n- Nivel 1 (menor prioridad): iff (asociatividad izquierda)',
            code: `# not tiene mayor prioridad que and, y and mayor que impl:
# not p and q impl r  equivale a:  ((not p) and q) impl r
formula f1 = not p and q impl r

# Usa paréntesis para cambiar el orden de agrupación:
formula f2 = not (p and q) impl r`,
          },
        ],
      },
      en: {
        summary: 'Practical guide to the recommended declaration order, logical operator equivalences, and common formalization mistakes.',
        sections: [
          {
            heading: '1. Canonical Order of Declarations',
            text: 'Follows the exact sequence used when solving an exercise on paper:\n1. Natural language statement (nl)\n2. Atom definitions (atom)\n3. Translation or formalization (let / formula)\n4. Formal evaluation (vertauto)',
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
    id: 'formas-programacion',
    title: {
      es: 'Formas de Programar y Evaluar en Prism',
      en: 'Ways to Program & Evaluate in Prism',
    },
    description: {
      es: 'Las 3 modalidades principales de programación en Prism según el tipo de problema lógico.',
      en: 'The 3 main programming modalities in Prism depending on the logical problem type.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'Prism permite expresar y evaluar razonamientos lógicos mediante tres formas principales de programación según el punto de partida de tu ejercicio: desde un enunciado en lenguaje natural hasta una expresión simbólica directa.',
        sections: [
          {
            heading: '1. Forma 1: Lenguaje Natural Canónico (nl + atom + translate + vertauto)',
            text: 'Diseñada para enunciados discursivos en español, problemas de examen o argumentos del mundo real procesados por el motor de lenguaje natural de Prism.',
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
            heading: '2. Forma 2: Fórmula Simbólica con Nombre (formula)',
            text: 'Diseñada para ejercicios de álgebra booleana y teoremas puros con conectores (and, or, not, impl, iff) donde deseas asignar un identificador a la fórmula para evaluarla o documentarla.',
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
            heading: '3. Forma 3: Expresión Simbólica Directa / Inline (vertauto (expr))',
            text: 'Diseñada para evaluación inmediata al vuelo entre paréntesis dentro de vertauto, sin necesidad de declarar variables intermedias de fórmula (let o formula).',
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
        summary: 'Prism lets you express and evaluate logical arguments through three main programming patterns.',
        sections: [
          {
            heading: '1. Form 1: Canonical Natural Language (nl + atom + translate + vertauto)',
            text: 'For natural language statements processed by the Prism NLP engine.',
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
            heading: '2. Form 2: Named Symbolic Formula (formula)',
            text: 'For Boolean algebra exercises and pure theorems using connectives (and, or, not, impl, iff).',
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
            heading: '3. Form 3: Direct / Inline Symbolic Expression (vertauto (expr))',
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
    id: 'snippets-catalogo',
    title: {
      es: 'Autocompletado y Snippets (prnl, prnlit, prform, prinl)',
      en: 'Autocomplete & Snippets (prnl, prnlit, prform, prinl)',
    },
    description: {
      es: 'Árbol de decisión, comparativa de los snippets principales y bloques de una línea.',
      en: 'Decision tree, comparison of the main snippets, and single-line building blocks.',
    },
    category: 'getting-started',
    categoryLabel: {
      es: 'Primeros Pasos',
      en: 'Getting Started',
    },
    content: {
      es: {
        summary: 'En un archivo .pr vacío dentro de tu editor, escribe cualquiera de los prefijos oficiales (prnl, prnlit, prform, prinl, prog) y pulsa Tab para generar automáticamente la estructura completa del ejercicio.',
        sections: [
          {
            heading: '1. Árbol de Decisión: ¿Qué snippet usar?',
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
            heading: '2. Detalle Comparativo de los Snippets Principales',
            text: '• prnl (o nlex) — NL Canónico: Es el snippet principal por defecto. Genera module + use core + nl premisa + atom + let equivalencia = translate(premisa) + vertauto. Permite ver el texto original, los átomos identificados y la fórmula resultante paso a paso.\n\n• prnlit — NL con Translate Literal: Genera atom + let implicacion = translate("si estudio apruebo") + vertauto. Ideal cuando la frase en español es corta y no necesitas reutilizar la variable nl.\n\n• prform — Fórmula Simbólica Pura: Genera atom + formula f = p impl q + vertauto f. Úsalo cuando no hay texto en español y te dan directamente una expresión matemática como (p → q) ↔ (¬p ∨ q).\n\n• prinl (o vainline) — Simbólico Directo / Inline: Genera atom + vertauto (p impl q) { steps table verdict }. Evalúa directamente entre paréntesis sin crear variables intermedias.\n\n• tauto y contra: Generan plantillas rápidas para probar tautologías (p or not p) y contradicciones (p and not p).',
          },
          {
            heading: '3. Snippets de Una Línea (Bloques Sueltos)',
            text: 'Para ampliar un programa ya iniciado con prog:\n- use / usecore → use core\n- atom → atom p = "etiqueta"\n- nl → nl nombre = "texto natural"\n- lettr / translate → let f = translate(variable_nl)\n- lettrl / translatelit → let f = translate("si estudio apruebo")\n- formula / form → formula f = p impl q\n- va / vertauto → vertauto f (modo corto)\n- vax / vertautoext → vertauto f { steps table verdict } (modo extendido)',
          },
        ],
      },
      en: {
        summary: 'In an empty .pr file, type any official prefix (prnl, prnlit, prform, prinl, prog) and press Tab to scaffold the full exercise.',
        sections: [
          {
            heading: '1. Decision Tree: Which Snippet to Use?',
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
      es: 'Sintaxis y Conceptos',
      en: 'Syntax & Concepts',
    },
    content: {
      es: {
        summary: 'Definición formal de los elementos léxicos de Prism v1.0, reglas para nombres de archivos .pr y capacidades de validación semántica del compilador.',
        sections: [
          {
            heading: '1. Elementos Léxicos e Identificadores',
            text: '- Caracteres ignorables: espacios, tabulaciones y saltos de línea (\\n, \\r\\n).\n- Comentarios: desde # hasta el final de la línea.\n- Literales de cadena: "..." codificados en UTF-8.\n- Identificadores (letter { letter | digit | \'_\' }):\n  • Son sensibles a mayúsculas y minúsculas (ejercicio1 y Ejercicio1 son distintos).\n  • El primer carácter debe ser una letra (a–z, A–Z). No puede empezar con dígito (1ejercicio) ni con guión bajo (_privado).\n  • El resto puede contener letras, dígitos o guión bajo _ (no se permite guión medio - ni espacios).\n  • Prohibido usar palabras reservadas como identificadores.',
            code: `# Ejemplos de identificadores válidos:
module ejercicio_1
atom p = "llueve"
atom proposicion_A = "hace frío"

# Inválidos: _privado, 1ejercicio, ejercicio-1, let, atom`,
          },
          {
            heading: '2. Flexibilidad Declarativa: Compilador en Dos Pasadas (Two-Pass)',
            text: 'Aunque el orden canónico recomendado es el método en papel (nl → atom → let → vertauto), el compilador de Prism procesa los programas en dos pasadas (Two-Pass Symbol Collection). Esto otorga plena libertad al programador para organizar sus declaraciones (por ejemplo, declarando los atom arriba como variables globales, o abajo como glosario) sin provocar errores de referencia hacia adelante.',
          },
          {
            heading: '3. Diagnóstico de Coherencia Semántica',
            text: 'Al utilizar let f = translate(premisa), Prism analiza automáticamente que las etiquetas de tus declaraciones atom coincidan fielmente con las proposiciones identificadas en el texto natural. Si declaras una frase no coincidente, el compilador emite un aviso formativo inmediato en consola sugiriendo la proposición exacta detectada:',
            code: `[Aviso Semántico] El átomo declarado 'p' ("el procesador se apaga") no coincide con ninguna cláusula de 'premisa'.
   Sugerencia: Se detectó una cláusula no enlazada en el texto: "procesador se suspende" (asignada automáticamente al símbolo 'v').
   --> ¿Quisiste decir: atom p = "procesador se suspende"?`,
            tip: 'Esto evita la trampa de los diccionarios de sinónimos abiertos, garantizando rigor formal y guiando al usuario a modelar la proposición canónica correcta.',
          },
        ],
      },
      en: {
        summary: 'Formal lexical specification of Prism v1.0, .pr file conventions, Two-Pass symbol collection, and semantic coherence diagnostics.',
        sections: [
          {
            heading: '1. Lexical Tokens & Identifiers',
            text: '- Comments start with # until the end of the line.\n- Strings "..." are UTF-8 encoded.\n- Identifiers must start with a letter (a-z, A-Z) followed by letters, digits, or _.',
          },
          {
            heading: '2. Two-Pass Compiler & Semantic Diagnostics',
            text: 'Prism processes declarations in two passes (Two-Pass Symbol Collection) and verifies that atom labels match clauses extracted from nl statements.',
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
            heading: '1. module y use (Módulos de Conocimiento .lgs)',
            text: '- module <identificador>: Declara el nombre lógico del programa contenido en el archivo .pr. Debe ser la primera sentencia del archivo (exactamente uno por archivo).\n- use <identificador>: Carga el recurso léxico logicscript/<identificador>.lgs (por ejemplo, use core carga core.lgs). Nota: use core referencia un módulo de datos léxicos .lgs, no otro archivo .pr.',
          },
          {
            heading: '2. vertauto: Modo Corto vs Modo Extendido',
            text: 'vertauto evalúa una Fórmula y emite uno de los tres dictámenes formales (tautology, contingency, contradiction):\n\n- Modo corto: vertauto f o vertauto (p impl q) → Imprime en una sola línea la fórmula y su clasificación: (p → q)  contingency.\n- Modo extendido: vertauto f { steps table verdict } (o cualquier subconjunto como { table verdict }).\n  • steps: Pasos pedagógicos (identificación, formalización y evaluación fila por fila).\n  • table: Tabla de verdad completa (2^n combinaciones).\n  • verdict: Dictamen formal con explicación.',
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
            text: 'Prism valida en tiempo de compilación cuatro tipos conceptuales:\n- Text: originado por nl o un literal en translate, consumido por translate.\n- Formula: originado por formula, let + translate o una expresión lógica, consumido por vertauto.\n- Atom: originado por atom, consumido en expresiones de fórmula.\n- ModuleRef: originado por use, consumido en translate(..., module: ...).\n\nPasar un Text directamente a vertauto sin translate (por ejemplo, vertauto premisa) o usar un átomo no declarado produce un error de compilación.',
          },
        ],
      },
      en: {
        summary: 'Operational semantics of Prism v1.0 constructs: .lgs lexical modules, short vs extended vertauto modes, and static type checking.',
        sections: [
          {
            heading: '1. Short vs Extended vertauto Modes',
            text: 'vertauto supports both single-line short mode (vertauto f) and block mode (vertauto f { steps table verdict }).',
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
      es: 'Reglas de Identificadores, let, nl y Ejemplos',
      en: 'Identifier Rules, let, nl & Examples Breakdown',
    },
    description: {
      es: 'Qué forma parte oficial del lenguaje frente a nombres libres, inmutabilidad de let y estilos de translate.',
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
            heading: '1. ¿Por qué let y cómo funciona su inmutabilidad?',
            text: 'let <identificador> = <expresión> crea un enlace local inmutable en el ámbito del módulo al resultado de una expresión (típicamente una Fórmula devuelta por translate).\n- Se asigna una sola vez; redeclarar el mismo nombre en el mismo archivo .pr es un error de compilación.\n- Nombres como f1, phi, psi o equivalencia no tienen significado especial interno: son nombres libres elegidos por el autor del programa.',
            code: `let f_implicacion = translate(linea_lluvia)
let f_directa     = translate("si llueve llevo paraguas")
let f_ingles      = translate("if it rains I carry an umbrella", module: core_en)

vertauto f_implicacion`,
          },
          {
            heading: '2. Los 3 Estilos de translate Comparados',
            text: 'Las tres formas siguientes obtienen una Fórmula desde lenguaje natural:\n1. Variable intermedia (nl + translate(linea1)): Ideal para el método en papel o reutilizar el enunciado.\n2. Literal inline (translate("...")): Ideal para frases cortas de un solo uso.\n3. Con módulo léxico explícito (translate("...", module: core_en)): Fuerza un módulo .lgs específico previamente importado con use.',
            code: `nl linea1 = "si llueve llevo paraguas"
let f1 = translate(linea1)

let phi = translate("si llueve llevo paraguas")
let psi = translate("if it rains I carry an umbrella", module: core_en)`,
          },
          {
            heading: '3. Qué NO está definido en v1.0',
            text: 'Para evitar confusiones, los siguientes elementos no forman parte de Prism v1.0:\n- Asignación mutable (set, :=, reasignación de variables).\n- Anotaciones explícitas de tipo (let f: Formula = ...).\n- Funciones definidas por el usuario (fn, def).\n- Importación entre archivos .pr (en v1.0 la instrucción use solo importa módulos léxicos .lgs).',
          },
        ],
      },
      en: {
        summary: 'Official clarification on reserved syntax versus user-chosen identifiers (such as f1, phi, psi), let immutability, and the 3 styles of translate.',
        sections: [
          {
            heading: '1. let Bindings & Immutability',
            text: 'let <id> = <expression> creates an immutable binding within the module scope.',
            code: `nl linea1 = "si llueve llevo paraguas"
let f1 = translate(linea1)
let phi = translate("si llueve llevo paraguas")`,
          },
        ],
      },
    },
  },
  {
    id: 'fundamentos-logica',
    title: {
      es: 'Fundamentos: Tautología, Contradicción y Contingencia',
      en: 'Foundations: Tautology, Contradiction & Contingency',
    },
    description: {
      es: 'Significado formal de los 3 dictámenes de vertauto y cómo interpretar steps, table y verdict.',
      en: 'Formal meaning of the 3 vertauto verdicts and how to read steps, table, and verdict.',
    },
    category: 'nlp',
    categoryLabel: {
      es: 'Guía de Lógica y Ejemplos',
      en: 'Logic Guide & Examples',
    },
    content: {
      es: {
        summary: 'En Prism, vertauto evalúa todas las interpretaciones posibles (2^n filas para n átomos distintos) y clasifica toda fórmula o argumento en exactamente uno de tres dictámenes formales: tautology, contradiction o contingency. Cada archivo .pr debe coincidir con el nombre del module para su ejecución.',
        sections: [
          {
            heading: '1. Ejecución de Ejemplos en Consola',
            text: 'Cada bloque de código de esta guía representa un archivo .pr completo e independiente. El nombre del archivo al guardar debe coincidir con el nombre del module (por ejemplo, module fundamentos -> guardar como fundamentos.pr):\n\nprc check fundamentos.pr\nprc run fundamentos.pr',
          },
          {
            heading: '2. Ejemplo Autocontenido: fundamentos.pr',
            text: 'Guarda este código como fundamentos.pr para comparar los tres dictámenes en un mismo archivo:',
            filename: 'fundamentos.pr',
            code: `module fundamentos

use core

atom p = "llueve"
atom q = "la calle se moja"

formula tautologia = p or not p
formula contradiccion = p and not p
formula contingencia = p impl q

vertauto tautologia { steps table verdict }
vertauto contradiccion { table verdict }
vertauto contingencia { steps table verdict }

# Salida esperada:
# (p ∨ ¬p)  tautology        -> Verdadera en todas las filas
# (p ∧ ¬p)  contradiction    -> Falsa en todas las filas
# (p → q)   contingency      -> Falla en Fila 3: {p=true, q=false} → F`,
          },
          {
            heading: '3. Cómo Leer la Salida de vertauto',
            text: '• steps: Muestra los átomos identificados, la fórmula formalizada y el resultado booleano fila por fila en las 2^n asignaciones.\n• table: Presenta la tabla de verdad completa (F = falso, V = verdadero).\n• verdict: Resume si la fórmula o argumento es tautology (ley lógica / argumento válido), contradiction (inconsistente) o contingency (depende de los valores; en un argumento deductivo indica invalidez o falacia mostrando el contraejemplo exacto).',
          },
        ],
      },
      en: {
        summary: 'In Prism, vertauto evaluates all 2^n truth assignments and classifies every formula or argument as tautology, contradiction, or contingency. Each .pr file name must match its module name.',
        sections: [
          {
            heading: '1. Running Examples via CLI',
            text: 'Each code block is a complete, standalone .pr file. Save with the exact module name:\n\nprc check fundamentos.pr\nprc run fundamentos.pr',
          },
          {
            heading: '2. Standalone Example: fundamentos.pr',
            text: 'Save this code as fundamentos.pr to compare all three verdicts:',
            filename: 'fundamentos.pr',
            code: `module fundamentos

use core

atom p = "llueve"
atom q = "la calle se moja"

formula tautologia = p or not p
formula contradiccion = p and not p
formula contingencia = p impl q

vertauto tautologia { steps table verdict }
vertauto contradiccion { table verdict }
vertauto contingencia { steps table verdict }

# Salida esperada:
# (p ∨ ¬p)  tautology        -> Verdadera en todas las filas
# (p ∧ ¬p)  contradiction    -> Falsa en todas las filas
# (p → q)   contingency      -> Falla en Fila 3: {p=true, q=false} → F`,
          },
          {
            heading: '3. Reading vertauto Output',
            text: '• steps: Shows identified atomic propositions, formalized formula, and step-by-step evaluations across 2^n assignments.\n• table: Displays truth table (F = false, V = true).\n• verdict: Reports if the formula is a tautology (law / valid argument), contradiction, or contingency (revealing counterexamples).',
          },
        ],
      },
    },
  },
  {
    id: 'reglas-inferencia',
    title: {
      es: 'Recetario de Leyes Lógicas y Reglas de Inferencia',
      en: 'Logical Laws & Inference Rules Cookbook',
    },
    description: {
      es: 'Demostración de Modus Ponens, Modus Tollens, Contraposición, De Morgan y Silogismos en archivos autocontenidos.',
      en: 'Demonstrating Modus Ponens, Modus Tollens, Contraposition, De Morgan, and Syllogisms in standalone files.',
    },
    category: 'nlp',
    categoryLabel: {
      es: 'Guía de Lógica y Ejemplos',
      en: 'Logic Guide & Examples',
    },
    content: {
      es: {
        summary: 'Colección de leyes lógicas y reglas de inferencia clásicas listas para ejecutar con Prism v1.1.0. Cada ejemplo está estructurado como un archivo autocontenido listo para copiar y probar.',
        sections: [
          {
            heading: '1. Modus Ponens: ((p → q) ∧ p) → q',
            text: 'Puedes combinar variables let dentro de formula (enfoque modular) o escribir el argumento completo en una sola oración en español con "por lo tanto". En ambos casos el dictamen es tautology:\n\nArchivo sugerido: modus_ponens.pr',
            filename: 'modus_ponens.pr',
            code: `module modus_ponens

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Modular (combinando variables let dentro de formula)
nl texto_regla = "Si llueve entonces la calle se moja."
let regla = translate(texto_regla)
let hecho = translate("Llueve.")

formula mp_modular = (regla and hecho) impl q
vertauto mp_modular { steps table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja; llueve; por lo tanto la calle se moja."
let mp_nl = translate(arg_es)
vertauto mp_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ p) → q)  tautology`,
          },
          {
            heading: '2. Modus Tollens: ((p → q) ∧ ¬q) → ¬p',
            text: 'Si una implicación es verdadera y su consecuente es falso, se deduce formalmente la negación del antecedente. Funciona tanto en modo modular como directo en español (; ...; por lo tanto ... o . ..., luego ...):\n\nArchivo sugerido: modus_tollens.pr',
            filename: 'modus_tollens.pr',
            code: `module modus_tollens

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Modular autocontenido
let regla = translate("Si llueve entonces la calle se moja.")
let calle_seca = translate("La calle no se moja.")

formula mt_modular = (regla and calle_seca) impl not p
vertauto mt_modular { steps table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja; la calle no se moja; por lo tanto no llueve."
let mt_nl = translate(arg_es)
vertauto mt_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ ¬q) → ¬p)  tautology`,
          },
          {
            heading: '3. Ley de Contraposición: (p → q) ↔ (¬q → ¬p)',
            text: 'Demuestra que una implicación es lógicamente equivalente a invertir y negar ambos extremos:\n\nArchivo sugerido: contraposicion.pr',
            filename: 'contraposicion.pr',
            code: `module contraposicion

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Simbólico modular
let regla = translate("Si llueve entonces la calle se moja.")
formula contra_simbolica = regla iff (not q impl not p)
vertauto contra_simbolica { table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja si y solo si si la calle no se moja entonces no llueve."
let contra_nl = translate(arg_es)
vertauto contra_nl { verdict }

# Salida en ambos casos:
# ((p → q) ↔ (¬q → ¬p))  tautology`,
          },
          {
            heading: '4. Leyes de De Morgan',
            text: 'Ambas leyes verificadas en español puro, tanto en forma de regla conclusiva (por lo tanto) como de equivalencia bicondicional (si y solo si):\n\nArchivo sugerido: leyes_de_morgan.pr',
            filename: 'leyes_de_morgan.pr',
            code: `module leyes_de_morgan

use core

atom p = "llueve"
atom q = "la calle se moja"

# Primera ley: !(p \\/ q) -> (!p /\\ !q)
nl ley_1 = "No es verdad que llueva o la calle se moje; por lo tanto no llueve y la calle no se moja."
let de_morgan_1 = translate(ley_1)
vertauto de_morgan_1 { table verdict }

# Segunda ley: !(p /\\ q) <-> (!p \\/ !q)
nl ley_2 = "No es verdad que llueva y la calle se moje si y solo si no llueve o la calle no se moja."
let de_morgan_2 = translate(ley_2)
vertauto de_morgan_2 { verdict }

# Salidas esperadas:
# (¬((p ∨ q)) → (¬p ∧ ¬q))  tautology
# (¬((p ∧ q)) ↔ (¬p ∨ ¬q))  tautology`,
          },
          {
            heading: '5. Silogismo Hipotético: ((p → q) ∧ (q → r)) → (p → r)',
            text: 'Encadena dos implicaciones para deducir la transitividad. En el enfoque modular ni siquiera es obligatorio declarar atom: Prism unifica las proposiciones repetidas automáticamente entre múltiples llamadas translate:\n\nArchivo sugerido: silogismo_hipotetico.pr',
            filename: 'silogismo_hipotetico.pr',
            code: `module silogismo_hipotetico

use core

# Enfoque 1: Modular sin declarar atom previos (unificación automática)
let p1 = translate("Si estudio entonces aprendo.")
let p2 = translate("Si aprendo entonces apruebo.")
let conclusion = translate("Si estudio entonces apruebo.")

formula sh_modular = (p1 and p2) impl conclusion
vertauto sh_modular { table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si estudio entonces aprendo; si aprendo entonces apruebo; por lo tanto si estudio entonces apruebo."
let sh_nl = translate(arg_es)
vertauto sh_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ (q → r)) → (p → r))  tautology`,
          },
          {
            heading: '6. Silogismo Disyuntivo: ((p ∨ q) ∧ ¬p) → q',
            text: 'Si una disyunción es verdadera y se descarta una de sus alternativas, la otra es necesariamente verdadera (soporta "o", "o ... o ..." y "o bien ... o bien ..."):\n\nArchivo sugerido: silogismo_disyuntivo.pr',
            filename: 'silogismo_disyuntivo.pr',
            code: `module silogismo_disyuntivo

use core

# Enfoque 1: Modular con translate
let disyuncion = translate("Estudio o trabajo.")
let negacion = translate("No estudio.")
let conclusion = translate("Trabajo.")

formula sd_modular = (disyuncion and negacion) impl conclusion
vertauto sd_modular { table verdict }

# Enfoque 2: En una sola oración en español (con o correlativa)
nl arg_es = "O estudio o trabajo; no estudio; en consecuencia trabajo."
let sd_nl = translate(arg_es)
vertauto sd_nl { verdict }

# Salida en ambos casos:
# (((p ∨ q) ∧ ¬p) → q)  tautology`,
          },
        ],
      },
      en: {
        summary: 'Collection of classic logical laws and inference rules ready to run with Prism v1.1.0 in standalone files.',
        sections: [
          {
            heading: '1. Modus Ponens: ((p → q) ∧ p) → q',
            text: 'Suggested file: modus_ponens.pr',
            filename: 'modus_ponens.pr',
            code: `module modus_ponens

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Modular (combinando variables let dentro de formula)
nl texto_regla = "Si llueve entonces la calle se moja."
let regla = translate(texto_regla)
let hecho = translate("Llueve.")

formula mp_modular = (regla and hecho) impl q
vertauto mp_modular { steps table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja; llueve; por lo tanto la calle se moja."
let mp_nl = translate(arg_es)
vertauto mp_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ p) → q)  tautology`,
          },
          {
            heading: '2. Modus Tollens: ((p → q) ∧ ¬q) → ¬p',
            text: 'Suggested file: modus_tollens.pr',
            filename: 'modus_tollens.pr',
            code: `module modus_tollens

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Modular autocontenido
let regla = translate("Si llueve entonces la calle se moja.")
let calle_seca = translate("La calle no se moja.")

formula mt_modular = (regla and calle_seca) impl not p
vertauto mt_modular { steps table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja; la calle no se moja; por lo tanto no llueve."
let mt_nl = translate(arg_es)
vertauto mt_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ ¬q) → ¬p)  tautology`,
          },
          {
            heading: '3. Hypothetical Syllogism: ((p → q) ∧ (q → r)) → (p → r)',
            text: 'Suggested file: silogismo_hipotetico.pr',
            filename: 'silogismo_hipotetico.pr',
            code: `module silogismo_hipotetico

use core

# Enfoque 1: Modular sin declarar atom previos (unificación automática)
let p1 = translate("Si estudio entonces aprendo.")
let p2 = translate("Si aprendo entonces apruebo.")
let conclusion = translate("Si estudio entonces apruebo.")

formula sh_modular = (p1 and p2) impl conclusion
vertauto sh_modular { table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si estudio entonces aprendo; si aprendo entonces apruebo; por lo tanto si estudio entonces apruebo."
let sh_nl = translate(arg_es)
vertauto sh_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ (q → r)) → (p → r))  tautology`,
          },
        ],
      },
    },
  },
  {
    id: 'deteccion-falacias',
    title: {
      es: 'Cómo Detectar Falacias Comunes con Prism',
      en: 'Detecting Common Formal Fallacies with Prism',
    },
    description: {
      es: 'Identificación de argumentos inválidos y contraejemplos exactos en archivos autocontenidos.',
      en: 'Identifying invalid arguments and exact counterexamples in standalone files.',
    },
    category: 'nlp',
    categoryLabel: {
      es: 'Guía de Lógica y Ejemplos',
      en: 'Logic Guide & Examples',
    },
    content: {
      es: {
        summary: 'Un argumento inválido puede parecer verdadero en lenguaje cotidiano, pero al evaluarlo con vertauto Prism devuelve contingency y muestra exactamente la asignación que lo refuta en la tabla de verdad.',
        sections: [
          {
            heading: '1. Falacia de Afirmación del Consecuente: ((p → q) ∧ q) → p',
            text: 'Enunciado cotidiano: "Si llueve entonces la calle se moja; la calle se moja; por lo tanto llueve."\n\nArchivo sugerido: falacia_consecuente.pr',
            filename: 'falacia_consecuente.pr',
            code: `module falacia_consecuente

use core

atom p = "llueve"
atom q = "la calle se moja"

nl arg_es = "Si llueve entonces la calle se moja; la calle se moja; por lo tanto llueve."
let falacia = translate(arg_es)

vertauto falacia {
    steps
    table
    verdict
}

# Salida:
# (((p → q) ∧ q) → p)  contingency
# Contraejemplo en Fila 2: {p=false, q=true} -> F
# (La calle puede estar mojada aunque no haya llovido).`,
          },
          {
            heading: '2. Falacia de Negación del Antecedente: ((p → q) ∧ ¬p) → ¬q',
            text: 'Enunciado cotidiano: "Si llueve entonces la calle se moja; no llueve; por lo tanto la calle no se moja."\n\nArchivo sugerido: falacia_antecedente.pr',
            filename: 'falacia_antecedente.pr',
            code: `module falacia_antecedente

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Modular autocontenido
let regla = translate("Si llueve entonces la calle se moja.")
let no_llueve = translate("No llueve.")
let no_moja = translate("La calle no se moja.")

formula falacia_mod = (regla and no_llueve) impl no_moja
vertauto falacia_mod { table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja; no llueve; por lo tanto la calle no se moja."
let falacia_nl = translate(arg_es)
vertauto falacia_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ ¬p) → ¬q)  contingency
# Contraejemplo en Fila 2: {p=false, q=true} -> F`,
          },
          {
            heading: '3. Falsa Conversión de la Implicación: (p → q) → (q → p)',
            text: 'Enunciado cotidiano: "Si estudio entonces apruebo; por lo tanto si apruebo entonces estudio."\n\nArchivo sugerido: falsa_conversion.pr',
            filename: 'falsa_conversion.pr',
            code: `module falsa_conversion

use core

nl arg_es = "Si estudio entonces apruebo; por lo tanto si apruebo entonces estudio."
let falacia = translate(arg_es)

vertauto falacia {
    steps
    table
    verdict
}

# Salida:
# ((p → q) → (q → p))  contingency
# Contraejemplo en Fila 2: {p=false, q=true} -> F`,
          },
        ],
      },
      en: {
        summary: 'Prism exposes formal fallacies by showing that arguments evaluate to contingency and pinpointing the exact counterexample row in standalone files.',
        sections: [
          {
            heading: '1. Affirming the Consequent: ((p → q) ∧ q) → p',
            text: 'Suggested file: falacia_consecuente.pr',
            filename: 'falacia_consecuente.pr',
            code: `module falacia_consecuente

use core

atom p = "llueve"
atom q = "la calle se moja"

nl arg_es = "Si llueve entonces la calle se moja; la calle se moja; por lo tanto llueve."
let falacia = translate(arg_es)

vertauto falacia {
    steps
    table
    verdict
}

# Salida:
# (((p → q) ∧ q) → p)  contingency
# Contraejemplo en Fila 2: {p=false, q=true} -> F`,
          },
          {
            heading: '2. Denying the Antecedent: ((p → q) ∧ ¬p) → ¬q',
            text: 'Suggested file: falacia_antecedente.pr',
            filename: 'falacia_antecedente.pr',
            code: `module falacia_antecedente

use core

atom p = "llueve"
atom q = "la calle se moja"

# Enfoque 1: Modular autocontenido
let regla = translate("Si llueve entonces la calle se moja.")
let no_llueve = translate("No llueve.")
let no_moja = translate("La calle no se moja.")

formula falacia_mod = (regla and no_llueve) impl no_moja
vertauto falacia_mod { table verdict }

# Enfoque 2: En una sola oración en español
nl arg_es = "Si llueve entonces la calle se moja; no llueve; por lo tanto la calle no se moja."
let falacia_nl = translate(arg_es)
vertauto falacia_nl { verdict }

# Salida en ambos casos:
# (((p → q) ∧ ¬p) → ¬q)  contingency
# Contraejemplo en Fila 2: {p=false, q=true} -> F`,
          },
          {
            heading: '3. False Conversion: (p → q) → (q → p)',
            text: 'Suggested file: falsa_conversion.pr',
            filename: 'falsa_conversion.pr',
            code: `module falsa_conversion

use core

nl arg_es = "Si estudio entonces apruebo; por lo tanto si apruebo entonces estudio."
let falacia = translate(arg_es)

vertauto falacia {
    steps
    table
    verdict
}

# Salida:
# ((p → q) → (q → p))  contingency
# Contraejemplo en Fila 2: {p=false, q=true} -> F`,
          },
        ],
      },
    },
  },
];
