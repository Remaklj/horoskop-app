// Web Notifications API helper
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    console.warn('Ovaj browser ne podržava notifikacije');
    return 'denied';
  }

  return await Notification.requestPermission();
}

export function isNotificationSupported(): boolean {
  return 'Notification' in window;
}

export function getNotificationPermission(): NotificationPermission {
  if (!isNotificationSupported()) {
    return 'denied';
  }
  return Notification.permission;
}

export function showNotification(title: string, body: string, icon?: string): void {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: icon || '/favicon.ico',
      badge: icon || '/favicon.ico',
    });
  }
}

// Funkcija za postavljanje dnevnog podsetnika
export function scheduleDailyReminder(hour: number = 9): void {
  if (!isNotificationSupported() || Notification.permission !== 'granted') {
    return;
  }

  // Računamo vreme do sledećeg podsetnika
  const now = new Date();
  const scheduledTime = new Date();
  scheduledTime.setHours(hour, 0, 0, 0);

  if (scheduledTime < now) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  const timeUntilNotification = scheduledTime.getTime() - now.getTime();

  setTimeout(() => {
    showNotification(
      '🌟 Dnevni Horoskop',
      'Tvoj dnevni horoskop te čeka! Klikni da vidiš šta ti zvezde poručuju danas.'
    );
    
    // Postavljamo ponovo za sutra
    scheduleDailyReminder(hour);
  }, timeUntilNotification);
}
