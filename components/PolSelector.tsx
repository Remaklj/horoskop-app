'use client';

import { useState, useEffect } from 'react';
import { Gender } from '@/lib/constants';
import { saveFavoriteGender, getFavoriteGender } from '@/lib/storage';
import { User, UserCircle } from 'lucide-react';

interface PolSelectorProps {
  onSelect?: (gender: Gender) => void;
}

export default function PolSelector({ onSelect }: PolSelectorProps) {
  const [selectedGender, setSelectedGender] = useState<Gender>('muski');

  useEffect(() => {
    const saved = getFavoriteGender();
    if (saved) {
      setSelectedGender(saved);
    }
  }, []);

  const handleGenderChange = (gender: Gender) => {
    setSelectedGender(gender);
    saveFavoriteGender(gender);
    onSelect?.(gender);
  };

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-white/50 rounded-full backdrop-blur-sm">
      <button
        onClick={() => handleGenderChange('muski')}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          selectedGender === 'muski'
            ? 'bg-blue-500 text-white shadow-lg scale-105'
            : 'bg-white/70 text-gray-700 hover:bg-white hover:scale-102'
        }`}
      >
        <User size={20} />
        Muški
      </button>
      
      <button
        onClick={() => handleGenderChange('zenski')}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          selectedGender === 'zenski'
            ? 'bg-pink-500 text-white shadow-lg scale-105'
            : 'bg-white/70 text-gray-700 hover:bg-white hover:scale-102'
        }`}
      >
        <UserCircle size={20} />
        Ženski
      </button>
    </div>
  );
}
