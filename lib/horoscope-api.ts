// API klijent za horoskope
export interface HoroscopeData {
  date_range: string;
  current_date: string;
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
}

type Period = 'today' | 'yesterday' | 'tomorrow';

// Aztro API - besplatan API za horoskope
export async function fetchHoroscope(
  sign: string,
  day: Period = 'today'
): Promise<HoroscopeData> {
  try {
    const response = await fetch(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch horoscope');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    // Fallback - vraćamo dummy podatke ako API ne radi
    return {
      date_range: 'N/A',
      current_date: new Date().toLocaleDateString('sr-RS'),
      description: 'Horoskop trenutno nije dostupan. Pokušajte ponovo kasnije.',
      compatibility: 'N/A',
      mood: 'Neutralno',
      color: 'Plava',
      lucky_number: '7',
      lucky_time: '12:00',
    };
  }
}

// Funkcija za dobijanje nedeljnog horoskopa (mock - treba pronaći drugi API ili generisati)
export async function fetchWeeklyHoroscope(sign: string): Promise<string> {
  // Za sada koristimo dummy podatke
  // U budućnosti možemo koristiti drugi API ili GPT za generisanje
  return `Ova nedelja donosi vam mnogo pozitivnih promena. Očekuje vas uspeh u poslovnim aktivnostima i harmonija u odnosima sa voljenim osobama. Budite otvoreni za nove prilike koje će se pojaviti sredinom nedelje.`;
}

// Funkcija za dobijanje mesečnog horoskopa
export async function fetchMonthlyHoroscope(sign: string): Promise<string> {
  return `Ovaj mesec je period rasta i transformacije. Fokusirajte se na svoje ciljeve i ne dozvolite da vas sitnice odvrate od puta. Kraj meseca donosi prijatna iznenađenja u ljubavi.`;
}
