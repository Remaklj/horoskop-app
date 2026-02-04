'use client';

import { useState, useEffect } from 'react';
import { fetchWeeklyHoroscope, fetchMonthlyHoroscope } from '@/lib/horoscope-api';
import { Calendar, CalendarDays } from 'lucide-react';

interface NedeljniMesecniProps {
  sign: string;
  signColor: string;
}

type Tab = 'weekly' | 'monthly';

export default function NedeljniMesecni({ sign, signColor }: NedeljniMesecniProps) {
  const [activeTab, setActiveTab] = useState<Tab>('weekly');
  const [weeklyContent, setWeeklyContent] = useState('');
  const [monthlyContent, setMonthlyContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadContent();
  }, [sign]);

  const loadContent = async () => {
    setLoading(true);
    const weekly = await fetchWeeklyHoroscope(sign);
    const monthly = await fetchMonthlyHoroscope(sign);
    setWeeklyContent(weekly);
    setMonthlyContent(monthly);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Tab buttons */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold transition-all duration-300 ${
            activeTab === 'weekly'
              ? 'text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          style={{
            backgroundColor: activeTab === 'weekly' ? signColor : 'transparent',
          }}
        >
          <Calendar size={20} />
          Nedeljni horoskop
        </button>
        
        <button
          onClick={() => setActiveTab('monthly')}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold transition-all duration-300 ${
            activeTab === 'monthly'
              ? 'text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          style={{
            backgroundColor: activeTab === 'monthly' ? signColor : 'transparent',
          }}
        >
          <CalendarDays size={20} />
          Mesečni horoskop
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4" style={{ borderColor: signColor }}></div>
          </div>
        ) : (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {activeTab === 'weekly' ? weeklyContent : monthlyContent}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
