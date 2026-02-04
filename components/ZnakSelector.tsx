'use client';

import { ZODIAC_SIGNS } from '@/lib/constants';
import { saveFavoriteSign } from '@/lib/storage';
import { useRouter } from 'next/navigation';

export default function ZnakSelector() {
  const router = useRouter();

  const handleSignClick = (signId: string) => {
    saveFavoriteSign(signId as any);
    router.push(`/horoskop/${signId}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {ZODIAC_SIGNS.map((sign) => (
        <button
          key={sign.id}
          onClick={() => handleSignClick(sign.id)}
          className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${sign.color}dd, ${sign.color}66)`,
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
              {sign.symbol}
            </span>
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              {sign.name}
            </h3>
            <p className="text-sm text-white/90 font-medium">
              {sign.dates}
            </p>
          </div>
          
          {/* Hover efekat */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
        </button>
      ))}
    </div>
  );
}
