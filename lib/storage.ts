// LocalStorage helper funkcije
import { ZodiacSignId, Gender } from './constants';

const STORAGE_KEYS = {
  FAVORITE_SIGN: 'favorite_sign',
  FAVORITE_GENDER: 'favorite_gender',
  HOROSCOPE_HISTORY: 'horoscope_history',
  NOTIFICATION_ENABLED: 'notification_enabled',
} as const;

export interface HoroscopeHistoryEntry {
  sign: ZodiacSignId;
  date: string;
  description: string;
  mood: string;
  color: string;
  lucky_number: string;
}

// Čuvanje omiljenog znaka
export function saveFavoriteSign(sign: ZodiacSignId): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.FAVORITE_SIGN, sign);
  }
}

// Dobijanje omiljenog znaka
export function getFavoriteSign(): ZodiacSignId | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEYS.FAVORITE_SIGN) as ZodiacSignId | null;
  }
  return null;
}

// Čuvanje omiljenog pola
export function saveFavoriteGender(gender: Gender): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.FAVORITE_GENDER, gender);
  }
}

// Dobijanje omiljenog pola
export function getFavoriteGender(): Gender | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEYS.FAVORITE_GENDER) as Gender | null;
  }
  return null;
}

// Dodavanje horoskopa u istoriju
export function addToHistory(entry: HoroscopeHistoryEntry): void {
  if (typeof window !== 'undefined') {
    const history = getHistory();
    const today = new Date().toISOString().split('T')[0];
    
    // Proveravamo da li već postoji unos za ovaj znak danas
    const existingIndex = history.findIndex(
      h => h.sign === entry.sign && h.date === today
    );
    
    if (existingIndex >= 0) {
      history[existingIndex] = { ...entry, date: today };
    } else {
      history.unshift({ ...entry, date: today });
    }
    
    // Čuvamo samo poslednjih 30 dana
    const limitedHistory = history.slice(0, 30);
    localStorage.setItem(STORAGE_KEYS.HOROSCOPE_HISTORY, JSON.stringify(limitedHistory));
  }
}

// Dobijanje istorije
export function getHistory(): HoroscopeHistoryEntry[] {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEYS.HOROSCOPE_HISTORY);
    return stored ? JSON.parse(stored) : [];
  }
  return [];
}

// Brisanje istorije
export function clearHistory(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.HOROSCOPE_HISTORY);
  }
}

// Notifikacije - čuvanje statusa
export function setNotificationEnabled(enabled: boolean): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATION_ENABLED, enabled.toString());
  }
}

export function isNotificationEnabled(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEYS.NOTIFICATION_ENABLED) === 'true';
  }
  return false;
}
