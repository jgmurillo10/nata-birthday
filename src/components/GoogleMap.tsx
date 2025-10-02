"use client";

export default function GoogleMap() {
  // Embed using the exact Google Maps Place link provided
  const mapUrl =
    "https://www.google.com/maps/place/Casa+Mal%C3%BAa/@4.4584032,-74.6414852,17z/data=!3m1!4b1!4m12!1m5!8m4!1e4!2s109368321504705025448!3m1!1e1!3m5!1s0x8e3f3d0018007c2b:0x2bc5f8dab499d5c4!8m2!3d4.4584032!4d-74.6389103!16s%2Fg%2F11y0cyfjwh?entry=ttu&output=embed";

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border-2 border-amber-100">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del evento - Casa Malúa, Tocaima"
      />
    </div>
  );
}
