export type Question = {
  difficulty: number;
  question: string;
  answer: string;
};

export type Theme = {
  theme: string;
  questions: Question[];
};

export const questions: Theme[] = [
  {
    theme: "Généralités",
    questions: [
      { difficulty: 1, question: "Quel est le nom de la capitale de la France ?", answer: "Paris" },
      { difficulty: 2, question: "Quel est le plus grand océan de la Terre ?", answer: "Océan Pacifique" },
      { difficulty: 3, question: "Combien de continents y a-t-il sur Terre ?", answer: "7" },
      { difficulty: 4, question: "Quel est l'élément chimique avec le symbole 'O' ?", answer: "Oxygène" },
      { difficulty: 5, question: "Quel est le plus grand pays du monde par superficie ?", answer: "Russie" },
      { difficulty: 6, question: "Qui a écrit 'Les Misérables' ?", answer: "Victor Hugo" },
      { difficulty: 7, question: "Quel est le plus grand désert du monde ?", answer: "Désert de l'Antarctique" },
      { difficulty: 8, question: "En quelle année a été fondée la NASA ?", answer: "1958" },
      { difficulty: 9, question: "Quel est le nom de l'inventeur de l'électricité ?", answer: "Thomas Edison" },
      { difficulty: 10, question: "Quel est le nom complet du fondateur de Facebook ?", answer: "Mark Elliot Zuckerberg" }
    ]
  },
  {
    theme: "Histoire",
    questions: [
      { difficulty: 1, question: "Qui a découvert l'Amérique ?", answer: "Christophe Colomb" },
      { difficulty: 2, question: "Quel est le nom de la première civilisation connue ?", answer: "Les Sumériens" },
      { difficulty: 3, question: "Qui a été le dernier roi de France ?", answer: "Charles X" },
      { difficulty: 4, question: "En quelle année la Première Guerre mondiale a-t-elle commencé ?", answer: "1914" },
      { difficulty: 5, question: "Qui a été le chef de l'Empire romain à sa plus grande expansion ?", answer: "Trajan" },
      { difficulty: 6, question: "Quel pays a été le principal adversaire des États-Unis durant la Guerre Froide ?", answer: "Union soviétique" },
      { difficulty: 7, question: "Qui a fondé l'Empire Mongol ?", answer: "Gengis Khan" },
      { difficulty: 8, question: "Quel pays a été le berceau de la démocratie ?", answer: "Grèce" },
      { difficulty: 9, question: "Qui était le dernier empereur de Chine ?", answer: "Puyi" },
      { difficulty: 10, question: "Quel est le nom de l'assassin de l'archiduc François-Ferdinand, dont la mort a été l'un des facteurs déclencheurs de la Première Guerre mondiale ?", answer: "Gavrilo Princip" }
    ]
  },
  {
    theme: "Science",
    questions: [
      { difficulty: 1, question: "De quel gaz respirons-nous pour vivre ?", answer: "Oxygène" },
      { difficulty: 2, question: "Quel est le plus grand mammifère terrestre ?", answer: "Éléphant d'Afrique" },
      { difficulty: 3, question: "Quel est l'organe responsable de la production d'insuline ?", answer: "Le pancréas" },
      { difficulty: 4, question: "Quel est le nom du processus par lequel les plantes fabriquent leur propre nourriture ?", answer: "Photosynthèse" },
      { difficulty: 5, question: "Quel est l'élément chimique dont le symbole est 'H' ?", answer: "Hydrogène" },
      { difficulty: 6, question: "Qui a formulé la théorie de la relativité ?", answer: "Albert Einstein" },
      { difficulty: 7, question: "Quel est l'atome le plus léger ?", answer: "Hydrogène" },
      { difficulty: 8, question: "Quel est le nom de l'instrument utilisé pour mesurer la température ?", answer: "Thermomètre" },
      { difficulty: 9, question: "Quelle est la formule chimique de l'eau ?", answer: "H2O" },
      { difficulty: 10, question: "Qui a découvert la loi de la gravité ?", answer: "Isaac Newton" }
    ]
  }
];
