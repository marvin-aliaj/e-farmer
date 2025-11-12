import { Geist, Geist_Mono, Amatic_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amaticSC = Amatic_SC({
  variable: "--font-amatic-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "E-Farmer Albania - Platforma për Fermerët",
  description: "Platforma e parë në Shqipëri për lidhjen e fermerëve me klientët dhe shitësit me shumicë",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amaticSC.variable} antialiased bg-gray-50`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
