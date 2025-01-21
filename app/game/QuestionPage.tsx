'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { questions, Question } from '../data/questions'; // Assure-toi d'importer le type Question

export default function QuestionPage() {
  const searchParams = useSearchParams();
  const players = JSON.parse(searchParams.get('players') || '[]');
  
  // Utilisation correcte du type Question ou null
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  // Récupère le thème et la question en fonction de la difficulté sélectionnée
  useEffect(() => {
    if (selectedDifficulty !== null) {
      const themeIndex = Math.floor(Math.random() * questions.length); // Choisir un thème au hasard
      const theme = questions[themeIndex];
      const question = theme.questions.find((q) => q.difficulty === selectedDifficulty);
      
      if (question) {
        setCurrentQuestion(question); // Mise à jour avec un objet de type Question
      }
    }
  }, [selectedDifficulty]);

  // Passer au joueur suivant
  const nextPlayer = () => {
    if (currentPlayerIndex + 1 < players.length) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      setAnswered(false); // Réinitialiser la réponse
    } else {
      // Recommencer si tous les joueurs ont joué
      setCurrentPlayerIndex(0);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Tour de {players[currentPlayerIndex]}</h1>

      {currentQuestion && !answered ? (
        <div className="space-y-4">
          <p className="text-lg">{currentQuestion.question}</p>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(10)].map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedDifficulty(i + 1)} // Lorsque le joueur choisit une difficulté
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={() => setAnswered(true)} // Lorsque le joueur clique sur "Répondre"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Répondre
            </button>
          </div>
        </div>
      ) : currentQuestion ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Réponse :</h2>
          <p>{currentQuestion.answer}</p>
          <button
            onClick={nextPlayer}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Joueur suivant
          </button>
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
}