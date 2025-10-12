// Umami Analytics tracking functions
// Safely tracks events only when Umami script is loaded

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('whatsapp_click', { location });
    console.log('✅ Umami tracked: whatsapp_click', { location });
  } else {
    console.log('⏳ Umami not loaded yet - waiting for Website ID');
  }
}

export const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('phone_click', { location });
    console.log('✅ Umami tracked: phone_click', { location });
  } else {
    console.log('⏳ Umami not loaded yet - waiting for Website ID');
  }
}
