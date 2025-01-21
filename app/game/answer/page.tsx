'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function AnswerPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const player = searchParams.get('player'); // Récupérer le joueur actuel
  const answer = searchParams.get('answer'); // Récupérer la réponse
  const gorgées = searchParams.get('gorgées'); // Récupérer les gorgées en jeu
  const players = searchParams.get('players');  // Liste des joueurs

  if (!players) {
    return <div>Erreur : Liste des joueurs manquante dans l'URL.</div>;
  }

  const parsedPlayers = JSON.parse(players || '[]');

  if (parsedPlayers.length === 0 || !player) {
    return <div>Erreur : Aucune donnée sur les joueurs ou joueur non défini.</div>;
  }

  const currentPlayerIndex = parsedPlayers.indexOf(player);

  if (currentPlayerIndex === -1) {
    return <div>Erreur : Joueur inconnu dans la liste.</div>;
  }

  const nextPlayer = parsedPlayers[(currentPlayerIndex + 1) % parsedPlayers.length];
  
  const goToHome = () => {
    router.push('/');
  };

  const handleNextPlayer = () => {
    router.push(`/game/player?name=${nextPlayer}&players=${encodeURIComponent(JSON.stringify(parsedPlayers))}`);  // Redirection vers le joueur suivant
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Réponse de {player}</h1>
      <p className="text-lg">
        <span className="font-semibold">Réponse :</span> {answer}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Gorgées en jeu :</span> {gorgées}
      </p>

      <div className="mt-4">
        <button
          onClick={handleNextPlayer}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Joueur suivant
        </button>
      </div>

            {/* Bouton pour revenir à la page d'accueil */}
            <div className="mt-4">
        <button
          onClick={goToHome}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
