// Konstante za horoskopske znakove
export const ZODIAC_SIGNS = [
  { id: 'ovan', name: 'Ovan', english: 'aries', dates: 'Mar 21 - Apr 19', symbol: '♈', color: '#FF6B6B' },
  { id: 'bik', name: 'Bik', english: 'taurus', dates: 'Apr 20 - May 20', symbol: '♉', color: '#4ECDC4' },
  { id: 'blizanci', name: 'Blizanci', english: 'gemini', dates: 'May 21 - Jun 20', symbol: '♊', color: '#FFE66D' },
  { id: 'rak', name: 'Rak', english: 'cancer', dates: 'Jun 21 - Jul 22', symbol: '♋', color: '#95E1D3' },
  { id: 'lav', name: 'Lav', english: 'leo', dates: 'Jul 23 - Aug 22', symbol: '♌', color: '#F38181' },
  { id: 'devica', name: 'Devica', english: 'virgo', dates: 'Aug 23 - Sep 22', symbol: '♍', color: '#AA96DA' },
  { id: 'vaga', name: 'Vaga', english: 'libra', dates: 'Sep 23 - Oct 22', symbol: '♎', color: '#FCBAD3' },
  { id: 'skorpija', name: 'Škorpija', english: 'scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏', color: '#A8D8EA' },
  { id: 'strelac', name: 'Strelac', english: 'sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐', color: '#AA4465' },
  { id: 'jarac', name: 'Jarac', english: 'capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑', color: '#6C5B7B' },
  { id: 'vodolija', name: 'Vodolija', english: 'aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒', color: '#C06C84' },
  { id: 'ribe', name: 'Ribe', english: 'pisces', dates: 'Feb 19 - Mar 20', symbol: '♓', color: '#F8B500' },
] as const;

export type ZodiacSignId = typeof ZODIAC_SIGNS[number]['id'];
export type Gender = 'muski' | 'zenski';

// Kompatibilnost matrica (pojednostavljeno)
export const COMPATIBILITY_MATRIX: Record<string, Record<string, number>> = {
  ovan: { ovan: 75, bik: 55, blizanci: 85, rak: 60, lav: 90, devica: 50, vaga: 80, skorpija: 70, strelac: 95, jarac: 55, vodolija: 85, ribe: 65 },
  bik: { ovan: 55, bik: 70, blizanci: 60, rak: 90, lav: 65, devica: 95, vaga: 80, skorpija: 85, strelac: 50, jarac: 90, vodolija: 55, ribe: 85 },
  blizanci: { ovan: 85, bik: 60, blizanci: 75, rak: 65, lav: 90, devica: 70, vaga: 95, skorpija: 60, strelac: 90, jarac: 55, vodolija: 95, ribe: 70 },
  rak: { ovan: 60, bik: 90, blizanci: 65, rak: 80, lav: 70, devica: 85, vaga: 75, skorpija: 95, strelac: 60, jarac: 85, vodolija: 60, ribe: 95 },
  lav: { ovan: 90, bik: 65, blizanci: 90, rak: 70, lav: 80, devica: 60, vaga: 85, skorpija: 75, strelac: 95, jarac: 65, vodolija: 85, ribe: 70 },
  devica: { ovan: 50, bik: 95, blizanci: 70, rak: 85, lav: 60, devica: 75, vaga: 80, skorpija: 85, strelac: 55, jarac: 95, vodolija: 65, ribe: 80 },
  vaga: { ovan: 80, bik: 80, blizanci: 95, rak: 75, lav: 85, devica: 80, vaga: 80, skorpija: 70, strelac: 85, jarac: 70, vodolija: 90, ribe: 75 },
  skorpija: { ovan: 70, bik: 85, blizanci: 60, rak: 95, lav: 75, devica: 85, vaga: 70, skorpija: 85, strelac: 60, jarac: 90, vodolija: 65, ribe: 95 },
  strelac: { ovan: 95, bik: 50, blizanci: 90, rak: 60, lav: 95, devica: 55, vaga: 85, skorpija: 60, strelac: 80, jarac: 60, vodolija: 90, ribe: 65 },
  jarac: { ovan: 55, bik: 90, blizanci: 55, rak: 85, lav: 65, devica: 95, vaga: 70, skorpija: 90, strelac: 60, jarac: 80, vodolija: 70, ribe: 85 },
  vodolija: { ovan: 85, bik: 55, blizanci: 95, rak: 60, lav: 85, devica: 65, vaga: 90, skorpija: 65, strelac: 90, jarac: 70, vodolija: 80, ribe: 70 },
  ribe: { ovan: 65, bik: 85, blizanci: 70, rak: 95, lav: 70, devica: 80, vaga: 75, skorpija: 95, strelac: 65, jarac: 85, vodolija: 70, ribe: 85 },
};
