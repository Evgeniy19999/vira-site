import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Footer from '@/shared/components/footer';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'ВИРА',
  description: 'ВИРА строительная компания',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${montserrat.className} antialiased min-w-90`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
