'use client';

import { useEffect, useState } from 'react';
import { getHistory, HoroscopeHistoryEntry } from '@/lib/storage';
import { ZODIAC_SIGNS } from '@/lib/constants';
import { Calendar, TrendingUp } from 'lucide-react';

export default function HistorijaList() {
  const [history, setHistory] = useState<HoroscopeHistoryEntry[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const filteredHistory = filter === 'all' 
    ? history 
    : history.filter(h => h.sign === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sr-RS', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Filter */}
      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Filtriraj po znaku:
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="all">Svi znaci</option>
          {ZODIAC_SIGNS.map(sign => (
            <option key={sign.id} value={sign.id}>
              {sign.symbol} {sign.name}
            </option>
          ))}
        </select>
      </div>

      {/* Lista */}
      {filteredHistory.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
          <TrendingUp size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">
            Još nemaš istoriju horoskopa. Počni da čitaš horoskope i oni će se pojaviti ovde!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredHistory.map((entry, index) => {
            const zodiacSign = ZODIAC_SIGNS.find(z => z.id === entry.sign);
            if (!zodiacSign) return null;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ borderLeft: `6px solid ${zodiacSign.color}` }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: zodiacSign.color + '22' }}
                  >
                    {zodiacSign.symbol}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold" style={{ color: zodiacSign.color }}>
                        {zodiacSign.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={16} />
                        {formatDate(entry.date)}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {entry.description}
                    </p>
                    
                    <div className="flex gap-4 text-sm">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                        Raspoloženje: {entry.mood}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        Boja: {entry.color}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        Broj: {entry.lucky_number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
