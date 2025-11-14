// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import Blobs from '@/components/Blobs';
import '../styles/globals.css'; // <--- THIS LINE IS CRITICAL

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'A production-ready portfolio built with Next.js and Tailwind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Blobs />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}