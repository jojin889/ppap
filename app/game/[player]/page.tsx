'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questions, Theme } from '../../data/questions';

export default function PlayerTurnPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const playersParam = searchParams.get('players'); // Récupérer la liste des joueurs depuis l'URL
  const currentPlayer = searchParams.get('name'); // Récupérer le joueur actuel depuis l'URL
  
  // Si les joueurs ne sont pas présents, renvoyer une erreur
  if (!playersParam || !currentPlayer) {
    return <div>Erreur : Liste des joueurs ou joueur manquant dans l&apos;URL.</div>;
  }

  const players = JSON.parse(playersParam); // Décoder la liste des joueurs
  const currentPlayerIndex = players.indexOf(currentPlayer); // Trouver l'index du joueur actuel

  const [theme, setTheme] = useState<Theme | null>(null); // L'état est initialisé à null
  const [currentQuestion, setCurrentQuestion] = useState<any | null>(null); // Question actuelle

  // Choisir un thème aléatoire et une question lorsque le composant est monté
  useEffect(() => {
    const themeIndex = Math.floor(Math.random() * questions.length);
    const selectedTheme = questions[themeIndex];
    setTheme(selectedTheme);

    // Sélectionner une question aléatoire pour ce thème
    const questionIndex = Math.floor(Math.random() * selectedTheme.questions.length);
    setCurrentQuestion(selectedTheme.questions[questionIndex]);
  }, []);

  // Vérifier que le thème et la question sont définis
  if (!theme || !currentQuestion) {
    console.log('Chargement en cours...');
    return <div>Chargement en cours...</div>;
  }

  // Calculer le nombre de gorgées en fonction de la difficulté
  const numberOfDrinks = currentQuestion.difficulty; // Par exemple, utiliser la difficulté comme nombre de gorgées

  // Passer au joueur suivant
  // const goToNextPlayer = () => {
  //   const nextPlayerIndex = (currentPlayerIndex + 1) % players.length; // On fait une rotation entre les joueurs
  //   const nextPlayer = players[nextPlayerIndex];

  //   // Rediriger vers la page du joueur suivant avec son nom dans l'URL
  //   router.push(`/game/player?name=${encodeURIComponent(nextPlayer)}&players=${encodeURIComponent(playersParam)}`);
  // };

  // Rediriger vers la page de réponse
  const goToAnswerPage = () => {
    router.push(`/game/answer?player=${currentPlayer}&answer=${encodeURIComponent(currentQuestion.answer)}&gorgées=${numberOfDrinks}&players=${encodeURIComponent(playersParam)}`);
  };

  // Fonction pour revenir à la page d'accueil
  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="space-y-6">
      {/* Affichage du joueur et du thème */}
      <h1 className="text-2xl font-bold">Tour de {currentPlayer} !</h1>
      <p className="text-lg">
        Thème : <span className="font-semibold">{theme.theme}</span>
      </p>

      {/* Affichage de la question */}
      <div>
        <p className="text-lg">Question : {currentQuestion.question}</p>
        <p className="text-sm text-gray-500">Difficulté : {currentQuestion.difficulty}</p>
      </div>

      {/* Affichage de la réponse et de l'option pour répondre */}
      <div>
        <button
          onClick={goToAnswerPage}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Répondre
        </button>
      </div>

      {/* Bouton pour revenir à la page d'accueil */}
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
