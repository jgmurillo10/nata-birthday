"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getGuestById } from "@/lib/guests";
import CountdownTimer from "@/components/CountdownTimer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundElements from "@/components/BackgroundElements";
import GoogleMap from "@/components/GoogleMap";
import Barcode from "@/components/Barcode";

function InvitationContent() {
  const searchParams = useSearchParams();
  const guestId = searchParams.get("id");
  const guest = guestId ? getGuestById(guestId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      <BackgroundElements />
      {/* Boarding Pass Header */}
      <div className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-orange-100/30" />
        <div className="relative max-w-4xl mx-auto px-6 py-12">
          {/* Flight Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl border border-amber-200/50">
              <div className="text-4xl">✈️</div>
              <div>
                <h1 className="text-4xl font-bold text-amber-900 tracking-wide">
                  VUELO 30
                </h1>
                <p className="text-amber-700 text-sm uppercase tracking-widest">
                  Boarding Pass
                </p>
              </div>
            </div>
          </div>

          {/* Boarding Pass Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-amber-100 overflow-hidden">
            {/* Main Boarding Pass */}
            <div className="bg-white p-8">
              {/* Passenger Info */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-amber-700 uppercase tracking-wide font-medium">
                    Pasajero
                  </p>
                  <p className="text-2xl font-bold text-amber-900">
                    {guest?.name || "Invitado Especial"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-amber-700 uppercase tracking-wide font-medium">
                    Vuelo
                  </p>
                  <p className="text-2xl font-bold text-amber-900">VL30</p>
                </div>
              </div>

              {/* Flight Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-amber-700 uppercase tracking-wide font-medium">
                    Origen
                  </p>
                  <p className="text-xl font-bold text-amber-900">Tu Casa</p>
                  <p className="text-sm text-amber-600">Donde estés</p>
                </div>
                <div className="text-center flex items-center justify-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border-2 border-amber-300">
                      ✈️
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-amber-700 uppercase tracking-wide font-medium">
                    Destino
                  </p>
                  <p className="text-xl font-bold text-amber-900">
                    Casua Malúa
                  </p>
                  <p className="text-sm text-amber-600">Tocaima</p>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <p className="text-sm text-amber-700 uppercase tracking-wide font-medium">
                    Fecha de Salida
                  </p>
                  <p className="text-lg font-bold text-amber-900">
                    25 Octubre 2025
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-amber-700 uppercase tracking-wide font-medium">
                    Hora
                  </p>
                  <p className="text-lg font-bold text-amber-900">3:00 PM</p>
                  <p className="text-sm text-amber-600">UTC-5 (Bogotá)</p>
                </div>
              </div>

              {/* Special Occasion */}
              <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-2">
                  🎉 ¡Celebro mis 30!
                </h2>
                <p className="text-amber-700 text-lg font-medium mb-1">
                  Te invito a compartir este día especial
                </p>
                <p className="text-amber-600 text-base italic">
                  - Natalia Pérez
                </p>
              </div>
            </div>

            {/* Barcode Section - Integrated with Perforated Edge */}
            <div className="relative">
              <Barcode guestId={guestId || undefined} />
            </div>

            {/* Perforated Edge Effect */}
            <div className="relative -mt-3">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 h-6">
                <div
                  className="flex justify-center space-x-4 pt-1"
                  style={{ marginTop: "-10px" }}
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-white rounded-full shadow-inner"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 pt-12">
              {/* Countdown */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  ⏰ Tiempo para el Vuelo
                </h3>
                <CountdownTimer />
              </div>

              {/* WhatsApp Button */}
              <div className="mb-8">
                <WhatsAppButton guest={guest} />
              </div>

              {/* Dress Code */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-200">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    👕 Dress Code
                  </h3>
                  <p className="text-amber-800 text-lg">
                    Una prenda blanca en la parte superior
                  </p>
                  <p className="text-amber-600 text-sm mt-1">
                    ¡Vamos a brillar juntos!
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4 text-center">
                  📍 Ubicación del Evento
                </h3>
                <GoogleMap />
                <div className="text-center mt-4">
                  <p className="text-amber-900 text-lg font-semibold">
                    Casa Malúa
                  </p>
                  <p className="text-amber-700">
                    Cl. 4 # 13-30, Tocaima, Cundinamarca
                  </p>
                  <a
                    href="https://maps.app.goo.gl/XC1DARuMCn7RS51U9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-green-700 hover:text-green-800 underline"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center text-amber-600 text-sm">
                <p>
                  ¡Espero verte ahí para compartir este momento especial! ✨
                </p>
                <p className="mt-2"> • Vuelo 30 • </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">✈️</div>
        <p className="text-amber-700 text-xl">Preparando tu vuelo...</p>
      </div>
    </div>
  );
}

export default function InvitationWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <InvitationContent />
    </Suspense>
  );
}
