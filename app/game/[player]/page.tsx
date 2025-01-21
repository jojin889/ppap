export type Question = {
  question: string;
  answer: string;
  difficulty: number;
};

export type Theme = {
  theme: string;
  questions: Question[];
};

export const questions: Theme[] = [
  {
    theme: "Science",
    questions: [
      { question: "Quelle est la capitale de la France ?", answer: "Paris", difficulty: 2 },
      { question: "Quelle est la formule chimique de l'eau ?", answer: "H2O", difficulty: 1 },
    ],
  },
  {
    theme: "Histoire",
    questions: [
      { question: "Qui a découvert l'Amérique ?", answer: "Christophe Colomb", difficulty: 3 },
    ],
  },
];
