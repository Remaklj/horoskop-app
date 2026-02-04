'use client';

import { useState, useEffect } from 'react';
import { 
  requestNotificationPermission, 
  isNotificationSupported, 
  getNotificationPermission,
  scheduleDailyReminder 
} from '@/lib/notifications';
import { setNotificationEnabled, isNotificationEnabled } from '@/lib/storage';
import { Bell, BellOff, Check } from 'lucide-react';

export default function NotifikacijeSetup() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [enabled, setEnabled] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isNotificationSupported());
    setPermission(getNotificationPermission());
    setEnabled(isNotificationEnabled());
  }, []);

  const handleEnable = async () => {
    if (permission === 'granted') {
      const newState = !enabled;
      setEnabled(newState);
      setNotificationEnabled(newState);
      
      if (newState) {
        scheduleDailyReminder(9); // 9 AM
      }
    } else {
      const result = await requestNotificationPermission();
      setPermission(result);
      
      if (result === 'granted') {
        setEnabled(true);
        setNotificationEnabled(true);
        scheduleDailyReminder(9);
      }
    }
  };

  if (!supported) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 text-center">
        <BellOff size={40} className="mx-auto text-yellow-600 mb-3" />
        <p className="text-yellow-800 font-medium">
          Tvoj browser ne podržava notifikacije.
        </p>
      </div>
    );
  }

  if (permission === 'denied') {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
        <BellOff size={40} className="mx-auto text-red-600 mb-3" />
        <p className="text-red-800 font-medium mb-2">
          Notifikacije su blokirane
        </p>
        <p className="text-red-600 text-sm">
          Omogući notifikacije u podešavanjima browser-a da bi dobijao dnevna podsetnika.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Bell size={32} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Dnevna podsetnika
            </h3>
            <p className="text-gray-600">
              Dobijaj notifikacije svakog dana u 9:00 da pročitaš svoj horoskop
            </p>
          </div>
        </div>

        <button
          onClick={handleEnable}
          className={`px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg ${
            enabled
              ? 'bg-green-500 text-white'
              : 'bg-purple-500 text-white hover:bg-purple-600'
          }`}
        >
          {enabled ? (
            <span className="flex items-center gap-2">
              <Check size={20} />
              Uključeno
            </span>
          ) : (
            'Uključi notifikacije'
          )}
        </button>
      </div>
    </div>
  );
}
