"use client";

export default function GoogleMap() {
  // Prefer Google Maps Embed API when an API key is available (supports place/search)
  // Fallback to coordinates embed to avoid X-Frame-Options errors from place pages
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const placeQuery = "Casa Malúa, Cl. 4 # 13-30, Tocaima, Cundinamarca";
  const lat = 4.4584032;
  const lng = -74.6389103;

  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        placeQuery
      )}&zoom=17`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=17&hl=es&output=embed`;

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
