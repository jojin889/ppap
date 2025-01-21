"use client"

import Link from 'next/link';

export default function HomePage() {
  
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Bienvenue dans le jeu !</h1>
      <p className="text-lg text-gray-700 mb-8">
        Un jeu d'ambiance où les questions sont aussi faciles que difficiles !
      </p>
      <Link href="/setup">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Commencer
        </button>
      </Link>
    </div>
  );
}
