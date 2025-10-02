import { v4 as uuidv4 } from 'uuid';

export interface Guest {
  id: string;
  name: string;
  whatsappMessage: string;
}

export const guests: Record<string, Guest> = {
  'f47ac10b-58cc-4372-a567-0e02b2c3d479': {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'Familia Pérez Mancera',
    whatsappMessage: 'Hola, Familia Pérez Mancera confirmamos asistencia'
  },
  '6ba7b810-9dad-11d1-80b4-00c04fd430c8': {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    name: 'Familia Murillo Castillo',
    whatsappMessage: 'Hola, Familia Murillo Castillo confirmamos asistencia'
  },
  '6ba7b811-9dad-11d1-80b4-00c04fd430c8': {
    id: '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
    name: 'Paola e hijo',
    whatsappMessage: 'Hola, Paola e hijo confirmamos asistencia'
  }
};

export function getGuestById(id: string): Guest | null {
  return guests[id] || null;
}

export function generateGuestLink(guestId: string): string {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://your-domain.com'
    : 'http://localhost:3000';
  return `${baseUrl}?id=${guestId}`;
}