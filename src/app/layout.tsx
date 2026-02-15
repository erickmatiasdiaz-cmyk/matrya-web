import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/**
 * Fuente profesional para MATRYA
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MATRYA | Arquitectura Digital Estratégica",
  description:
    "Consultora digital estratégica especializada en desarrollo web y automatización para pymes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
