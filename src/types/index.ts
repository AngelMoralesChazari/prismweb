export type Language = 'es' | 'en';

export type ClassificationType = 'contingency' | 'tautology' | 'contradiction';

export interface TruthTableRow {
  assignments: Record<string, boolean>;
  result: boolean;
}

export interface ExampleItem {
  id: string;
  category: 'implication' | 'conjunction' | 'disjunction' | 'negation' | 'tautology' | 'contradiction' | 'contingency' | 'nlp';
  title: {
    es: string;
    en: string;
  };
  naturalLanguage: {
    es: string;
    en: string;
  };
  code: string;
  formula: string;
  classification: ClassificationType;
  explanation: {
    es: string;
    en: string;
  };
  truthTable: TruthTableRow[];
  terminalLog: string;
}

export interface DocArticle {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  category: 'getting-started' | 'language-basics' | 'logic-engine' | 'nlp' | 'advanced';
  categoryLabel: {
    es: string;
    en: string;
  };
  content: {
    es: {
      summary: string;
      sections: {
        heading: string;
        text: string;
        code?: string;
        filename?: string;
        tip?: string;
      }[];
    };
    en: {
      summary: string;
      sections: {
        heading: string;
        text: string;
        code?: string;
        filename?: string;
        tip?: string;
      }[];
    };
  };
}

export interface OperatorSpec {
  keyword: string;
  symbol: string;
  meaning: {
    es: string;
    en: string;
  };
  precedence: number;
  associativity: 'left' | 'right' | 'none';
  example: string;
  description: {
    es: string;
    en: string;
  };
}
