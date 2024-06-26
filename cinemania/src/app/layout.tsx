import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Hydrah tec | cinemania',
  description: 'acervo com os melhores filmes já lançados!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
