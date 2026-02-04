'use client';

import { Clock, Hash, Palette, Gem } from 'lucide-react';

interface SrecniElementiProps {
  color: string;
  luckyNumber: string;
  luckyTime: string;
  signColor: string;
}

// Mapiranje boja na srpski
const colorMap: Record<string, string> = {
  'Red': 'Crvena',
  'Blue': 'Plava',
  'Green': 'Zelena',
  'Yellow': 'Žuta',
  'Purple': 'Ljubičasta',
  'Orange': 'Narandžasta',
  'Pink': 'Roze',
  'Gold': 'Zlatna',
  'Silver': 'Srebrna',
  'White': 'Bela',
  'Black': 'Crna',
};

// Mapiranje kamenja po bojama
const gemstoneMap: Record<string, string> = {
  'Crvena': 'Rubin',
  'Plava': 'Sapfir',
  'Zelena': 'Smaragd',
  'Žuta': 'Citrin',
  'Ljubičasta': 'Ametist',
  'Narandžasta': 'Karneol',
  'Roze': 'Roze kvarc',
  'Zlatna': 'Topaz',
  'Srebrna': 'Mesečev kamen',
  'Bela': 'Dijamant',
  'Crna': 'Oniks',
};

export default function SrecniElementi({ color, luckyNumber, luckyTime, signColor }: SrecniElementiProps) {
  const translatedColor = colorMap[color] || color;
  const gemstone = gemstoneMap[translatedColor] || 'Kvarc';

  const elements = [
    { icon: Palette, label: 'Srećna boja', value: translatedColor },
    { icon: Hash, label: 'Srećan broj', value: luckyNumber },
    { icon: Clock, label: 'Srećno vreme', value: luckyTime },
    { icon: Gem, label: 'Srećno kamenje', value: gemstone },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {elements.map((element, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div 
              className="p-3 rounded-full"
              style={{ backgroundColor: `${signColor}22` }}
            >
              <element.icon size={28} style={{ color: signColor }} />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                {element.label}
              </p>
              <p className="text-xl font-bold" style={{ color: signColor }}>
                {element.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
