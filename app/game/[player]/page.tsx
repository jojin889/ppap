'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questions, Theme, Question } from '../../data/questions'; // Assurez-vous que "questions" et ses types sont bien définis

export default function PlayerTurnPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Récupération des paramètres d'URL
  const playersParam = searchParams.get('players');
  const currentPlayer = searchParams.get('name');

  // États pour le thème et la question
  const [theme, setTheme] = useState<Theme | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  // Initialiser les données du jeu lors du premier rendu
  useEffect(() => {
    if (!playersParam || !currentPlayer) {
      return; // Rien à faire si les données nécessaires ne sont pas disponibles
    }

    const themeIndex = Math.floor(Math.random() * questions.length);
    const selectedTheme = questions[themeIndex];
    setTheme(selectedTheme);

    const questionIndex = Math.floor(Math.random() * selectedTheme.questions.length);
    setCurrentQuestion(selectedTheme.questions[questionIndex]);
  }, [playersParam, currentPlayer]);

  // Si les paramètres sont absents, afficher une erreur
  if (!playersParam || !currentPlayer) {
    return <div>Erreur : Liste des joueurs ou joueur manquant dans l&apos;URL.</div>;
  }

  // Si les données sont en cours de chargement, afficher un indicateur
  if (!theme || !currentQuestion) {
    return <div>Chargement en cours...</div>;
  }
  // Gestion des actions
  const numberOfDrinks = currentQuestion.difficulty; // Déterminer le nombre de gorgées

  const goToAnswerPage = () => {
    router.push(
      `/game/answer?player=${encodeURIComponent(currentPlayer)}&answer=${encodeURIComponent(
        currentQuestion.answer
      )}&gorgées=${numberOfDrinks}&players=${encodeURIComponent(playersParam)}`
    );
  };

  const goToHome = () => {
    router.push('/');
  };

  // Rendu du composant
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tour de {currentPlayer} !</h1>
      <p className="text-lg">
        Thème : <span className="font-semibold">{theme.theme}</span>
      </p>

      <div>
        <p className="text-lg">Question : {currentQuestion.question}</p>
        <p className="text-sm text-gray-500">Difficulté : {currentQuestion.difficulty}</p>
      </div>

      <div>
        <button
          onClick={goToAnswerPage}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Répondre
        </button>
      </div>

      <div className="mt-4">
        <button
          onClick={goToHome}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Retour à l&apos;accueil
        </button>
      </div>
    </div>
  );
}
