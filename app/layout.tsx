import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Jeu de Soirée',
  description: 'Un jeu amusant pour vos soirées !',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white py-4">
          <h1 className="text-center text-2xl font-bold">PPAP</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
