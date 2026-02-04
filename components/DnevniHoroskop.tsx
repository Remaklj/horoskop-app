'use client';

import { useEffect, useState } from 'react';
import { fetchHoroscope, HoroscopeData } from '@/lib/horoscope-api';
import { addToHistory } from '@/lib/storage';
import { ZODIAC_SIGNS } from '@/lib/constants';
import { Calendar, Heart, Sparkles } from 'lucide-react';
import SrecniElementi from './SrecniElementi';

interface DnevniHoroskopProps {
  sign: string;
}

export default function DnevniHoroskop({ sign }: DnevniHoroskopProps) {
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(true);

  const zodiacSign = ZODIAC_SIGNS.find(z => z.id === sign);

  useEffect(() => {
    async function loadHoroscope() {
      setLoading(true);
      const englishSign = zodiacSign?.english || 'aries';
      const data = await fetchHoroscope(englishSign);
      setHoroscope(data);
      
      // Dodaj u istoriju
      if (data && zodiacSign) {
        addToHistory({
          sign: sign as any,
          date: new Date().toISOString().split('T')[0],
          description: data.description,
          mood: data.mood,
          color: data.color,
          lucky_number: data.lucky_number,
        });
      }
      
      setLoading(false);
    }

    loadHoroscope();
  }, [sign, zodiacSign]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  if (!horoscope || !zodiacSign) {
    return <div className="text-center p-8">Greška pri učitavanju horoskopa.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Glavni karton sa horoskopom */}
      <div 
        className="rounded-3xl p-8 shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${zodiacSign.color}22, ${zodiacSign.color}11)`,
          border: `2px solid ${zodiacSign.color}44`,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-7xl">{zodiacSign.symbol}</span>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: zodiacSign.color }}>
                {zodiacSign.name}
              </h2>
              <p className="text-gray-600">{zodiacSign.dates}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={20} />
            <span className="font-medium">{horoscope.current_date}</span>
          </div>
        </div>

        {/* Opis */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={24} style={{ color: zodiacSign.color }} />
            <h3 className="text-xl font-bold text-gray-800">Tvoj dnevni horoskop</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {horoscope.description}
          </p>
        </div>

        {/* Mood i kompatibilnost */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={20} style={{ color: zodiacSign.color }} />
              <span className="font-semibold text-gray-700">Raspoloženje</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: zodiacSign.color }}>
              {horoscope.mood}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={20} style={{ color: zodiacSign.color }} fill={zodiacSign.color} />
              <span className="font-semibold text-gray-700">Kompatibilnost</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: zodiacSign.color }}>
              {horoscope.compatibility}
            </p>
          </div>
        </div>
      </div>

      {/* Srećni elementi */}
      <SrecniElementi 
        color={horoscope.color}
        luckyNumber={horoscope.lucky_number}
        luckyTime={horoscope.lucky_time}
        signColor={zodiacSign.color}
      />
    </div>
  );
}
