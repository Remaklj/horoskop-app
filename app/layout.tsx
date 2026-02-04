import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Sparkles, Users, Star, History } from "lucide-react";
import MobileNav from "@/components/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dnevni Horoskop - Tvoje Zvezde",
  description: "Otkri šta ti zvezde poručuju danas! Personalizovani horoskop za tvoj znak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                  <Sparkles size={32} className="text-purple-600 group-hover:rotate-12 transition-transform" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Dnevni Horoskop
                  </h1>
                </Link>
                
                <nav className="hidden md:flex items-center gap-6">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    <Star size={20} />
                    Horoskop
                  </Link>
                  <Link 
                    href="/kompatibilnost" 
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    <Users size={20} />
                    Kompatibilnost
                  </Link>
                  <Link 
                    href="/natalna-karta" 
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    <Sparkles size={20} />
                    Natalna karta
                  </Link>
                  <Link 
                    href="/istorija" 
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    <History size={20} />
                    Istorija
                  </Link>
                </nav>

                {/* Mobile Navigation */}
                <MobileNav />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white/80 backdrop-blur-md mt-16 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-600">
                ✨ Napravljeno sa ljubavlju za ljubitelje astrologije ✨
              </p>
              <p className="text-gray-500 text-sm mt-2">
                © 2026 Dnevni Horoskop. Sve lične interpretacije.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
