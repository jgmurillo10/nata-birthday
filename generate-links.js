const { guests } = require('./src/lib/guests.ts');

console.log('🎉 Enlaces de invitación personalizados para Vuelo 30:');
console.log('=' .repeat(60));
console.log();

const baseUrl = 'http://localhost:3001';

Object.values(guests).forEach(guest => {
  const url = `${baseUrl}?id=${guest.id}`;
  console.log(`👤 ${guest.name}`);
  console.log(`🔗 ${url}`);
  console.log();
});

console.log('🌐 Para producción, actualiza la baseUrl en src/lib/guests.ts');
console.log('📱 Cada enlace mostrará el nombre del invitado y su mensaje personalizado de WhatsApp');