import { track } from '@vercel/analytics';

export const trackWhatsAppClick = (location: string) => {
  track('whatsapp_click', { location });
}

export const trackPhoneClick = (location: string) => {
  track('phone_click', { location });
}
