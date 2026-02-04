import ZnakSelector from '@/components/ZnakSelector';
import PolSelector from '@/components/PolSelector';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero sekcija */}
      <div className="text-center space-y-4 py-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles size={48} className="text-purple-600 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Tvoj Dnevni Horoskop
          </h1>
          <Sparkles size={48} className="text-pink-600 animate-pulse" />
        </div>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Otkri šta ti zvezde poručuju danas! Izaberi svoj horoskopski znak i pol.
        </p>
      </div>

      {/* Selektor pola */}
      <div className="flex justify-center">
        <PolSelector />
      </div>

      {/* Naslov za znakove */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Izaberi svoj znak
        </h2>
        <p className="text-gray-600">
          Klikni na svoj horoskopski znak da vidiš dnevni horoskop
        </p>
      </div>

      {/* Selektor znakova */}
      <ZnakSelector />
    </div>
  );
}
