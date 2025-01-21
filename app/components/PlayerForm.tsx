'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PlayerForm() {
  const [players, setPlayers] = useState<string[]>(['']);
  const router = useRouter();

  const handleAddPlayer = () => setPlayers([...players, '']);
  const handlePlayerChange = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const startGame = () => {
    router.push(`/game?players=${JSON.stringify(players.filter(Boolean))}`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Configurer la partie</h1>
      {players.map((player, index) => (
        <input
          key={index}
          value={player}
          onChange={(e) => handlePlayerChange(index, e.target.value)}
          placeholder={`Pseudo du joueur ${index + 1}`}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      ))}
      <div className="flex justify-between">
        <button
          onClick={handleAddPlayer}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Ajouter un joueur
        </button>
        <button
          onClick={startGame}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={players.length < 2}
        >
          Lancer la partie
        </button>
      </div>
    </div>
  );
}
