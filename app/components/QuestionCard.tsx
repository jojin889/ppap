'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type QuestionCardProps = {
  theme: string;
};

export default function QuestionCard({ theme }: QuestionCardProps) {
  const [difficulty, setDifficulty] = useState<number | null>(null);
  const router = useRouter();

  const handleSelectQuestion = (difficulty: number) => {
    router.push(`/game/answer?theme=${theme}&difficulty=${difficulty}`);
  };

  useEffect(() => {
    setDifficulty(null); // Reset difficulty when theme changes
  }, [theme]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Thème : {theme}</h2>
      <div className="grid grid-cols-5 gap-2">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelectQuestion(i + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
