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
  "6ba7b823-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b823-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Mancera León",
    whatsappMessage:
      "Hola Natalia, Familia Mancera León confirmamos asistencia",
  },
  "6ba7b824-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b824-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Mancera Aldana",
    whatsappMessage:
      "Hola Natalia, Familia Mancera Aldana confirmamos asistencia",
  },
  "6ba7b825-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b825-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Mancera Pardo",
    whatsappMessage:
      "Hola Natalia, Familia Mancera Pardo confirmamos asistencia",
  },
  "6ba7b826-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b826-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Mancera Romero",
    whatsappMessage:
      "Hola Natalia, Familia Mancera Romero confirmamos asistencia",
  },
  "6ba7b827-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b827-9dad-11d1-80b4-00c04fd430c8",
    name: "Felipe Ramírez",
    whatsappMessage: "Hola Natalia, Felipe Ramírez confirmo asistencia",
  },
  "6ba7b828-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b828-9dad-11d1-80b4-00c04fd430c8",
    name: "Maicol Díaz",
    whatsappMessage: "Hola Natalia, Maicol Díaz confirmo asistencia",
  },
  "6ba7b829-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b829-9dad-11d1-80b4-00c04fd430c8",
    name: "Sebastian López",
    whatsappMessage: "Hola Natalia, Sebastian López confirmo asistencia",
  },
  "6ba7b830-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b830-9dad-11d1-80b4-00c04fd430c8",
    name: "David Medina & Sol Castro",
    whatsappMessage:
      "Hola Natalia, David Medina & Sol Castro confirmamos asistencia",
  },
  "6ba7b831-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b831-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Marentes Aponte",
    whatsappMessage:
      "Hola Natalia, Familia Marentes Aponte confirmamos asistencia",
  },
  "6ba7b832-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b832-9dad-11d1-80b4-00c04fd430c8",
    name: "Camila Forero",
    whatsappMessage: "Hola Natalia, Camila Forero confirmo asistencia",
  },
  "6ba7b833-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b833-9dad-11d1-80b4-00c04fd430c8",
    name: "Rafael Pérez",
    whatsappMessage: "Hola Natalia, Rafael Pérez confirmo asistencia",
  },
  "6ba7b834-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b834-9dad-11d1-80b4-00c04fd430c8",
    name: "Patricia Pérez",
    whatsappMessage: "Hola Natalia, Patricia Pérez confirmo asistencia",
  },
  "6ba7b835-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b835-9dad-11d1-80b4-00c04fd430c8",
    name: "Alejandra Pérez",
    whatsappMessage: "Hola Natalia, Alejandra Pérez confirmo asistencia",
  },
  "6ba7b836-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b836-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Pérez Rodríguez",
    whatsappMessage:
      "Hola Natalia, Familia Pérez Rodríguez confirmamos asistencia",
  },
  "6ba7b837-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b837-9dad-11d1-80b4-00c04fd430c8",
    name: "Argemiro Pérez",
    whatsappMessage: "Hola Natalia, Argemiro Pérez confirmo asistencia",
  },
  "6ba7b838-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b838-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Albarracín Pérez",
    whatsappMessage:
      "Hola Natalia, Familia Albarracín Pérez confirmamos asistencia",
  },
  "6ba7b839-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b839-9dad-11d1-80b4-00c04fd430c8",
    name: "Familia Mancera Luján",
    whatsappMessage:
      "Hola Natalia, Familia Mancera Luján confirmamos asistencia",
  },
  "6ba7b840-9dad-11d1-80b4-00c04fd430c8": {
    id: "6ba7b840-9dad-11d1-80b4-00c04fd430c8",
    name: "Jorge Aldana & Familia",
    whatsappMessage:
      "Hola Natalia, Jorge Aldana & Familia confirmamos asistencia",
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
