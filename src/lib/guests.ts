import { v4 as uuidv4 } from "uuid";

export interface Guest {
  id: string;
  name: string;
  whatsappMessage: string;
}

export const guests: Record<string, Guest> = {
  "f47ac10b-58cc-4372-a567-0e02b2c3d479": {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Familia Pérez Mancera",
    whatsappMessage: "Hola, Familia Pérez Mancera confirmamos asistencia",
  },
  "6ba7b810-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Murillo Castillo",
    whatsappMessage:
      "Hola Natalia, Familia Murillo Castillo confirmamos asistencia",
  },
  "6ba7b811-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    name: "Paola e hijo",
    whatsappMessage: "Hola Natalia, Paola e hijo confirmamos asistencia",
  },
  "6ba7b812-9dad-11d1-80b4-00c04fd430c7": {
    id: "6ba7b812-9dad-11d1-80b4-00c04fd430c7",
    name: "Familia Pérez Clavijo",
    whatsappMessage:
      "Hola Natalia, Familia Pérez Clavijo confirmamos asistencia",
  },
  "6ba7b813-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b813-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Clavijo López",
    whatsappMessage:
      "Hola Natalia, Familia Clavijo López confirmamos asistencia",
  },
  "6ba7b814-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Murillo Castillo",
    whatsappMessage:
      "Hola Natalia, Familia Murillo Castillo confirmamos asistencia",
  },
  "6ba7b815-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b815-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Castiblanco Coudrain",
    whatsappMessage:
      "Hola Natalia, Familia Castiblanco Coudrain confirmamos asistencia",
  },
  "6ba7b816-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b816-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia López Clavijo",
    whatsappMessage:
      "Hola Natalia, Familia López Clavijo confirmamos asistencia",
  },
  "6ba7b817-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b817-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Hernández Ayala",
    whatsappMessage:
      "Hola Natalia, Familia Hernández Ayala confirmamos asistencia",
  },
  "6ba7b818-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b818-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Murillo Reyes",
    whatsappMessage:
      "Hola Natalia, Familia Murillo Reyes confirmamos asistencia",
  },
  "6ba7b819-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b819-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Murillo Martínez",
    whatsappMessage:
      "Hola Natalia, Familia Murillo Martínez confirmamos asistencia",
  },
  "6ba7b820-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b820-9dad-11d1-80b4-00c04fd430c8",
    name: "Laura Puentes",
    whatsappMessage: "Hola Natalia, Laura Puentes confirmo asistencia",
  },
  "6ba7b821-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b821-9dad-11d1-80b4-00c04fd430c8",
    name: "Daniela Tovar",
    whatsappMessage: "Hola Natalia, Daniela Tovar confirmo asistencia",
  },
  "6ba7b822-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b822-9dad-11d1-80b4-00c04fd430c8",
    name: "Max Murillo",
    whatsappMessage: "Hola Natalia, Max Murillo confirmo asistencia",
  },
};

export function getGuestById(id: string): Guest | null {
  return guests[id] || null;
}

export function generateGuestLink(guestId: string): string {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://your-domain.com"
      : "http://localhost:3000";
  return `${baseUrl}?id=${guestId}`;
}
