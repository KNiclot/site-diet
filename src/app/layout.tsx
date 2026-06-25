import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'NutriVie — Votre programme diet personnalisé',
  description: 'Programme alimentaire équilibré, recettes saines et suivi personnalisé pour atteindre vos objectifs de santé.',
  keywords: 'régime, diet, nutrition, recettes saines, programme alimentaire, perte de poids',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif', backgroundColor: '#FAF7F2' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-[#4A6741] text-white px-4 py-2 rounded z-50">
          Aller au contenu
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
