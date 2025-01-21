'use client';

import { useSearchParams } from 'next/navigation';

type AnswerDisplayProps = {
  question: string;
};

export default function AnswerDisplay({ question }: AnswerDisplayProps) {
  const searchParams = useSearchParams();
  const theme = searchParams.get('theme') || 'Thème inconnu';
  const difficulty = parseInt(searchParams.get('difficulty') || '1', 10);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Réponse à la question</h1>
      <p className="text-lg">
        Thème : <span className="font-semibold">{theme}</span>
      </p>
      <p className="text-xl">
        Question ({difficulty}/10) : {question}
      </p>
    </div>
  );
}
