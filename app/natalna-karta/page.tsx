'use client';

import { useState } from 'react';
import { calculateNatalChart, NatalChartResult } from '@/lib/natal-chart';
import { Sparkles, MapPin, Clock, Calendar } from 'lucide-react';

export default function NatalnaKartaPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '12:00',
    place: '',
  });
  const [result, setResult] = useState<NatalChartResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const dateOfBirth = new Date(formData.date);
    const natalChart = calculateNatalChart({
      dateOfBirth,
      timeOfBirth: formData.time,
      placeOfBirth: formData.place,
    });
    
    setResult(natalChart);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={48} className="text-purple-600 animate-pulse" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Natalna Karta
          </h1>
        </div>
        <p className="text-xl text-gray-700">
          Otkrij svoju astrolšku kartu rođenja
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-3xl p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Calendar size={20} className="text-purple-600" />
              Datum rođenja:
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Clock size={20} className="text-purple-600" />
              Vreme rođenja:
            </label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
              className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <MapPin size={20} className="text-purple-600" />
              Mesto rođenja:
            </label>
            <input
              type="text"
              value={formData.place}
              onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              placeholder="npr. Beograd, Srbija"
              required
              className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Izračunaj Natalnu Kartu
          </button>
        </form>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Tvoja Natalna Karta
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Sunčev Znak</h3>
              <p className="text-3xl font-bold text-purple-600">{result.sunSign}</p>
              <p className="text-sm text-gray-600 mt-2">Tvoja suština</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Mesečev Znak</h3>
              <p className="text-3xl font-bold text-blue-600">{result.moonSign}</p>
              <p className="text-sm text-gray-600 mt-2">Tvoje emocije</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Ascendent</h3>
              <p className="text-3xl font-bold text-pink-600">{result.risingSign}</p>
              <p className="text-sm text-gray-600 mt-2">Kako te drugi vide</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Interpretacija</h3>
            <div className="prose prose-lg text-gray-700 whitespace-pre-line">
              {result.description}
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
            <p className="text-yellow-800 text-sm">
              <strong>Napomena:</strong> Ova natalna karta je pojednostavljena verzija. 
              Za detaljniju analizu preporučujemo konsultaciju sa profesionalnim astrologom.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
