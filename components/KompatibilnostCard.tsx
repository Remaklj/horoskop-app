'use client';

import { ZODIAC_SIGNS, COMPATIBILITY_MATRIX } from '@/lib/constants';
import { Heart } from 'lucide-react';

interface KompatibilnostCardProps {
  sign1: string;
  sign2: string;
}

export default function KompatibilnostCard({ sign1, sign2 }: KompatibilnostCardProps) {
  const zodiacSign1 = ZODIAC_SIGNS.find(z => z.id === sign1);
  const zodiacSign2 = ZODIAC_SIGNS.find(z => z.id === sign2);

  if (!zodiacSign1 || !zodiacSign2) {
    return null;
  }

  const compatibility = COMPATIBILITY_MATRIX[sign1]?.[sign2] || 50;

  const getCompatibilityLevel = (score: number) => {
    if (score >= 90) return { text: 'Savršena hemija! 💕', color: '#FF1493' };
    if (score >= 80) return { text: 'Odlična kompatibilnost! ❤️', color: '#FF6B6B' };
    if (score >= 70) return { text: 'Dobra veza! 💗', color: '#F38181' };
    if (score >= 60) return { text: 'Solidna veza! 💖', color: '#F8B500' };
    return { text: 'Potreban je trud! 💛', color: '#FFE66D' };
  };

  const level = getCompatibilityLevel(compatibility);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
      {/* Znaci */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="text-center">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-3 shadow-lg"
            style={{ backgroundColor: zodiacSign1.color + '33', border: `3px solid ${zodiacSign1.color}` }}
          >
            {zodiacSign1.symbol}
          </div>
          <p className="font-bold text-lg" style={{ color: zodiacSign1.color }}>
            {zodiacSign1.name}
          </p>
        </div>

        <Heart size={40} className="text-pink-500" fill="#ec4899" />

        <div className="text-center">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-3 shadow-lg"
            style={{ backgroundColor: zodiacSign2.color + '33', border: `3px solid ${zodiacSign2.color}` }}
          >
            {zodiacSign2.symbol}
          </div>
          <p className="font-bold text-lg" style={{ color: zodiacSign2.color }}>
            {zodiacSign2.name}
          </p>
        </div>
      </div>

      {/* Procenat */}
      <div className="text-center mb-6">
        <div className="inline-block relative">
          <svg className="w-48 h-48" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="20"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke={level.color}
              strokeWidth="20"
              strokeDasharray={`${compatibility * 5.03} 503`}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-5xl font-bold" style={{ color: level.color }}>
              {compatibility}%
            </p>
          </div>
        </div>
      </div>

      {/* Opis */}
      <div className="text-center">
        <p className="text-2xl font-bold mb-4" style={{ color: level.color }}>
          {level.text}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {compatibility >= 80 
            ? 'Ova kombinacija horoskopskih znakova pokazuje izuzetnu kompatibilnost. Vaši elementi se savršeno uklapaju i dopunjuju.'
            : compatibility >= 60
            ? 'Ova veza ima dobar potencijal. Sa razumevanjem i komunikacijom možete izgraditi sjajnu vezu.'
            : 'Ova kombinacija može biti izazovna, ali nije nemoguća. Potrebno je više truda i kompromisa.'}
        </p>
      </div>
    </div>
  );
}
