'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GamePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const players = JSON.parse(searchParams.get('players') || '[]'); // Liste des joueurs

  useEffect(() => {
    if (players.length > 0) {
      // Ajout de la liste des joueurs dans l'URL pour la première redirection
      router.push(`/game/player?name=${encodeURIComponent(players[0])}&players=${encodeURIComponent(JSON.stringify(players))}`);
    }
  }, [players, router]); // Utiliser `router` comme dépendance pour la redirection

  return (
    <div className="p-4">
      <p>Chargement en cours...</p>
    </div>
  );
}
