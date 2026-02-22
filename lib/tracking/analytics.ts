// Analytics tracking functions
// Safely tracks events when Umami and/or GA4 scripts are loaded

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
    gtag?: (...args: any[]) => void;
  }
}

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('whatsapp_click', { location });
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { event_category: 'cta', event_label: location });
  }
}

export const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('phone_click', { location });
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', { event_category: 'cta', event_label: location });
  }
}
