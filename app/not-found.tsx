import Link from 'next/link';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="relative">
        <Sparkles size={120} className="text-purple-300 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-purple-600">404</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-800">
          Stranica nije pronađena
        </h1>
        <p className="text-xl text-gray-600">
          Izgleda da si zalutao u astralnom planu... 🌌
        </p>
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <Home size={24} />
        Vrati se na početnu
      </Link>
    </div>
  );
}
