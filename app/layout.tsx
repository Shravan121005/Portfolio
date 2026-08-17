import type { Metadata } from "next";
import { Courier_Prime, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ShaderBackground from "../components/ShaderBackground";
import BootSequence from "../components/BootSequence";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "CASE FILE: SHRAVAN JAIN",
  description: "Subject Overview - Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${courierPrime.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background min-h-full relative overflow-x-hidden flex flex-col">
        <BootSequence />
        <ShaderBackground />

        <div className="fixed inset-0 scanlines w-full h-full pointer-events-none z-40"></div>

        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
          <div className="font-headline-lg text-[150px] md:text-[300px] text-surface-container opacity-10 rotate-[-45deg] whitespace-nowrap select-none font-bold">
            TOP SECRET
          </div>
        </div>

        <NavBar />

        <div className="flex-grow flex flex-col z-10 pt-32 pb-24 px-margin-page max-w-7xl mx-auto w-full relative">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
