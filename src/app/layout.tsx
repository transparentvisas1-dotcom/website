import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk, Cinzel_Decorative, Kaisei_Decol } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const kaiseiDecol = Kaisei_Decol({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-kaisei-decol",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transparent Visas | Trusted Visa Services & Immigration Consulting",
  description: "Get expert visa assistance for UK, USA, Canada, Australia, Schengen, GCC & more. 93% success rate, 4+ years experience. Experienced visa expert. Contact us today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${ebGaramond.variable} ${hankenGrotesk.variable} ${cinzelDecorative.variable} ${kaiseiDecol.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-obsidian-deep text-on-surface antialiased overflow-x-hidden selection:bg-burnished-gold selection:text-obsidian-deep min-h-screen flex flex-col max-w-full">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
