// Osnovni kalkulator za natalnu kartu
import { ZODIAC_SIGNS } from './constants';

interface NatalChartInput {
  dateOfBirth: Date;
  timeOfBirth: string; // HH:MM format
  placeOfBirth: string;
}

interface NatalChartResult {
  sunSign: string;
  moonSign: string;
  risingSign: string;
  description: string;
}

// Funkcija za određivanje Sunčevog znaka na osnovu datuma
export function calculateSunSign(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Ovan';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Bik';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Blizanci';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Rak';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Lav';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Devica';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Vaga';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Škorpija';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Strelac';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Jarac';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Vodolija';
  return 'Ribe';
}

// Pojednostavljena funkcija za Moon Sign (trebalo bi koristiti efemeride)
function calculateMoonSign(date: Date): string {
  // Ovo je pojednostavljena verzija - pravi kalkulator bi koristio astronomske podatke
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const moonCycle = dayOfYear % 12;
  return ZODIAC_SIGNS[moonCycle].name;
}

// Pojednostavljena funkcija za Rising Sign (Ascendent)
function calculateRisingSign(date: Date, time: string): string {
  // Ovo je pojednostavljena verzija - pravi kalkulator bi koristio vreme i lokaciju
  const [hour] = time.split(':').map(Number);
  const risingIndex = (hour * 2) % 12;
  return ZODIAC_SIGNS[risingIndex].name;
}

// Glavna funkcija za kalkulaciju natalne karte
export function calculateNatalChart(input: NatalChartInput): NatalChartResult {
  const sunSign = calculateSunSign(input.dateOfBirth);
  const moonSign = calculateMoonSign(input.dateOfBirth);
  const risingSign = calculateRisingSign(input.dateOfBirth, input.timeOfBirth);

  const description = `
    **Sunčev znak (${sunSign})**: Predstavlja tvoju suštinu, ego i osnovnu ličnost. 
    
    **Mesečev znak (${moonSign})**: Otkriva tvoje emocije, instinkte i podsvest.
    
    **Ascendent (${risingSign})**: Pokazuje kako te drugi vide i kako se predstavljaš svetu.
  `;

  return {
    sunSign,
    moonSign,
    risingSign,
    description,
  };
}

// Export za tip
export type { NatalChartInput, NatalChartResult };
