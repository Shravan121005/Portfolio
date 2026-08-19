/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Courier_Prime, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ShaderBackground from "../components/ShaderBackground";
import BootSequence from "../components/BootSequence";
import PageTransition from "../components/PageTransition";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shravanjain.me"),
  title: {
    default: "Shravan Jain — ML Engineer & Full-Stack Developer",
    template: "%s | Shravan Jain",
  },
  description:
    "Computer Science undergraduate at VIT Bhopal focused on Machine Learning, full-stack development, data structures, and building practical software systems.",
  keywords: [
    "Shravan Jain",
    "Software Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "VIT",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Shravan Jain", url: "https://shravanjain.me" }],
  creator: "Shravan Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shravanjain.me",
    siteName: "Shravan Jain Portfolio",
    title: "Shravan Jain — ML Engineer & Full-Stack Developer",
    description:
      "Computer Science undergraduate at VIT Bhopal focused on Machine Learning, full-stack development, data structures, and building practical software systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shravan Jain — ML Engineer & Full-Stack Developer",
    description:
      "Computer Science undergraduate at VIT Bhopal focused on Machine Learning, full-stack development, data structures, and building practical software systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      style={{ overflowX: "hidden" }}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shravan Jain",
              url: "https://shravanjain.me",
              jobTitle: "ML Engineer & Full-Stack Developer",
              description:
                "Computer Science undergraduate at VIT Bhopal focused on Machine Learning, full-stack development, data structures, and building practical software systems.",
              affiliation: {
                "@type": "Organization",
                name: "VIT Bhopal University",
              },
              sameAs: [
                "https://github.com/Shravan121005",
                "https://www.linkedin.com/in/shravan-jain-630009280/",
              ],
            }),
          }}
        />
      </head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZE62NZPWLP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZE62NZPWLP');
        `}
      </Script>
      <body
        className="bg-background text-on-background min-h-full relative flex flex-col"
        style={{ overflowX: "hidden" }}
      >
        <BootSequence />
        <ShaderBackground />

        {/* Scanlines */}
        <div className="fixed inset-0 scanlines w-full h-full pointer-events-none z-40" />

        {/* Watermark */}
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
          <div className="font-headline-lg text-[150px] md:text-[300px] text-surface-container opacity-10 rotate-[-45deg] whitespace-nowrap select-none font-bold">
            PORTFOLIO
          </div>
        </div>

        <NavBar />

        {/*
          Content wrapper:
          - pt-32 clears the fixed navbar
          - pb-24 clears the mobile bottom dock pill
          - On md+: pl-[88px] reserves space for the fixed left pill (56px pill + ~32px gap)
          - max-w-7xl centers content on wide screens
        */}
        <div
          className="flex-grow flex flex-col z-10 pt-32 pb-24 md:pb-16 px-4 sm:px-6 md:pl-[88px] md:pr-8 lg:pr-12 max-w-[1400px] w-full relative"
          style={{ marginLeft: 0, marginRight: "auto" }}
        >
          <PageTransition>{children}</PageTransition>
        </div>

        <Footer />
      </body>
    </html>
  );
}
