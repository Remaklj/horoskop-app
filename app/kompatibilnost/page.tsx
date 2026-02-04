'use client';

import { useState } from 'react';
import { ZODIAC_SIGNS } from '@/lib/constants';
import KompatibilnostCard from '@/components/KompatibilnostCard';
import { Heart } from 'lucide-react';

export default function KompatibilnostPage() {
  const [sign1, setSign1] = useState('ovan');
  const [sign2, setSign2] = useState('lav');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Heart size={48} className="text-pink-600" fill="#ec4899" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            Kompatibilnost Znakova
          </h1>
        </div>
        <p className="text-xl text-gray-700">
          Otkri koliko si kompatibilan sa drugim horoskopskim znacima!
        </p>
      </div>

      {/* Selektori */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Prvi znak:
          </label>
          <select
            value={sign1}
            onChange={(e) => setSign1(e.target.value)}
            className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
          >
            {ZODIAC_SIGNS.map(sign => (
              <option key={sign.id} value={sign.id}>
                {sign.symbol} {sign.name}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Drugi znak:
          </label>
          <select
            value={sign2}
            onChange={(e) => setSign2(e.target.value)}
            className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
          >
            {ZODIAC_SIGNS.map(sign => (
              <option key={sign.id} value={sign.id}>
                {sign.symbol} {sign.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rezultat */}
      <KompatibilnostCard sign1={sign1} sign2={sign2} />
    </div>
  );
}
