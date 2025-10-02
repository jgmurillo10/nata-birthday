# Vuelo 30 - Invitación de Cumpleaños ✈️

Una invitación web moderna con temática de boarding pass para el cumpleaños de Natalia Pérez.

## 🎯 Características

- **Diseño de Boarding Pass**: Estética inspirada en pases de abordar de aerolíneas internacionales
- **Invitaciones Personalizadas**: Cada invitado tiene un UUID único con su nombre personalizado
- **Contador Regresivo**: Tiempo en tiempo real hasta el evento (25 octubre 2025, 3:00 PM UTC-5)
- **Confirmación WhatsApp**: Botón directo para confirmar asistencia via WhatsApp
- **Google Maps**: Ubicación integrada de Casua Malúa, Tocaima
- **Responsive Design**: Optimizado para móviles y escritorio
- **Paleta Cálida**: Colores beige arena, terracota suave y dorado cálido

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3001`

### URLs Personalizadas
Cada invitado tiene un enlace único:
```
http://localhost:3001?id=f47ac10b-58cc-4372-a567-0e02b2c3d479
```

### Generar Enlaces
```bash
node generate-links.js
```

## 📋 Invitados Configurados

- **Familia Pérez Mancera**: `f47ac10b-58cc-4372-a567-0e02b2c3d479`
- **Familia Murillo Castillo**: `6ba7b810-9dad-11d1-80b4-00c04fd430c8`
- **Paola e hijo**: `6ba7b811-9dad-11d1-80b4-00c04fd430c8`

## 🎨 Detalles del Evento

- **Cumpleañera**: Natalia Pérez
- **Fecha**: 25 de octubre de 2025
- **Hora**: 3:00 PM (UTC-5 Bogotá)
- **Lugar**: Casua Malúa, Tocaima
- **Dress Code**: Una prenda blanca en la parte superior
- **WhatsApp**: +573107647755

## 🛠️ Tecnologías

- Next.js 15 con App Router
- TypeScript
- Tailwind CSS
- Componentes React
- UUID para identificadores únicos

## 📱 Funcionalidades

1. **Portada con branding "Vuelo 30"**
2. **Contador regresivo en tiempo real**
3. **Botón de confirmación vía WhatsApp**
4. **Información del evento y dress code**
5. **Mapa interactivo de la ubicación**
6. **Diseño responsive y accesible**

## 🔧 Configuración para Producción

1. Actualizar la `baseUrl` en `src/lib/guests.ts`
2. Configurar dominio personalizado
3. Deploy en Vercel, Netlify o similar

¡Vuelo 30 listo para despegar! ✈️🎉
