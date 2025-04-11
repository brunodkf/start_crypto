import type { Metadata } from "next";
import { Montserrat, Exo_2 } from "next/font/google";
import "./globals.css";
import { CryptoProvider } from "./context/CriptoContext";



const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

const exo2 = Exo_2({
  variable: "--font-exo-2-sans",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: 'StartCrypto | Seu primeiro passo no mundo das criptomoedas',
  description: 'Aprenda tudo o que precisa para começar a investir em criptomoedas com segurança e praticidade. Curso completo para iniciantes, do zero ao básico.',
  keywords: [
    'curso de criptomoedas',
    'criptomoedas para iniciantes',
    'investir em cripto',
    'blockchain',
    'bitcoin',
    'criptomoedas curso',
    'StartCrypto',
  ],
  authors: [{ name: 'Bruno Furtado', url: 'https://brunodkf.netlify.app' }],
  creator: 'Bruno Furtado',
  openGraph: {
    title: 'StartCrypto | Seu primeiro passo no mundo das criptomoedas',
    description: 'Curso completo e prático para quem quer começar a investir em criptomoedas com segurança.',
    url: 'https://startscrypto.com.br/',
    siteName: 'StartCrypto',
    images: [
      {
        url: 'https://start-crypto.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'StartCrypto - Curso de Criptomoedas para Iniciantes',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${exo2.variable} ${montserrat.variable} antialiased text-branco overflow-x-clip`}
      >
        <CryptoProvider>
          {children}
        </CryptoProvider>

      </body>
    </html>
  );
}
