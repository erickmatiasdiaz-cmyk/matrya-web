import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MATRYA | Arquitectura Digital Estrategica",
    template: "%s | MATRYA",
  },
  description:
    "Consultora digital especializada en desarrollo web, automatización y transformación digital para pymes. Creamos sistemas que generan clientes y crecimiento.",
  keywords: [
    "transformacion digital",
    "desarrollo web",
    "automatizacion",
    "consultoria digital",
    "pymes",
    "arquitectura digital",
    "sitios web",
    "sistema de reservas",
  ],
  authors: [{ name: "MATRYA" }],
  creator: "MATRYA",
  publisher: "MATRYA",
  metadataBase: new URL("https://matrya.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://matrya.cl",
    title: "MATRYA | Arquitectura Digital Estrategica",
    description:
      "Consultora digital especializada en desarrollo web, automatizacion y transformacion digital para pymes.",
    siteName: "MATRYA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MATRYA - Arquitectura Digital Estrategica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MATRYA | Arquitectura Digital Estrategica",
    description:
      "Consultora digital especializada en desarrollo web y automatizacion para pymes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05080f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased bg-[#05080f] text-white`}>
        {children}
      </body>
    </html>
  );
}
