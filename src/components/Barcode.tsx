"use client";

interface BarcodeProps {
  value?: string;
  guestId?: string;
}

export default function Barcode({ value, guestId }: BarcodeProps) {
  // Generar un patrón de código de barras basado en el ID del invitado
  const generateBarcodePattern = (id?: string) => {
    const basePattern = [
      3, 1, 2, 1, 4, 1, 2, 1, 3, 2, 1, 3, 1, 2, 4, 1, 3, 1, 2, 1, 4, 2, 1, 3, 1,
      2, 1, 4, 3, 1, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2,
    ];

    // Si hay un ID, modificar el patrón basado en los caracteres del ID
    if (id) {
      const modified = basePattern.map((width, idx) => {
        const charCode = id.charCodeAt(idx % id.length);
        return (width + (charCode % 3)) % 5 || 1;
      });
      return modified;
    }

    return basePattern;
  };

  const pattern = generateBarcodePattern(guestId);
  const barcodeValue =
    value || `VL30-${guestId?.slice(0, 8).toUpperCase() || "GUEST"}`;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Código de barras */}
      <div className="w-full py-4">
        {/* Barras del código */}
        <div className="flex items-center justify-center h-24 gap-px overflow-hidden px-8">
          {pattern.map((width, idx) => (
            <div
              key={idx}
              className="bg-black h-full transition-all"
              style={{
                width: `${width * 3}px`,
                minWidth: `${width}px`,
              }}
            />
          ))}
        </div>

        {/* Número del código de barras */}
        <div className="text-center mt-2 font-mono text-xs text-amber-900 tracking-widest">
          {barcodeValue}
        </div>
      </div>

      {/* Texto adicional típico de boarding pass */}
      <div className="text-center mt-3 mb-6 text-amber-700 text-xs uppercase tracking-wider">
        <p>Scan at gate • Zone A • Seat: 30A</p>
      </div>
    </div>
  );
}
