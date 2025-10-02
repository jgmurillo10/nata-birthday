import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vuelo 30 - Cumpleaños de Natalia Pérez",
  description:
    "Te invito a celebrar mi cumpleaños número 30. Aborda el Vuelo 30 y compartamos juntos un día especial en Casua Malúa, Tocaima.",
  openGraph: {
    title: "Vuelo 30 - Cumpleaños de Natalia Pérez",
    description:
      "Te invito a celebrar mi cumpleaños número 30. ¡Aborda el Vuelo 30!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
