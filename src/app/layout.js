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

export const metadata = {
  title: "Авто Выкуп 48 - выкуп авто в Липецке и Липецкой области",
  description:
    "Выкуп автомобилей в Липецке и Липецкой области, работаем по всему Черноземью",
  keywords: [
    "выкуп авто",
    "Липецк",
    "авто выкуп",
    "срочный выкуп",
    "выкуп битых авто",
    "выкуп залоговых авто",
    "выкупаем автомобили в залоге",
    "Липецкая область",
    "выкуп в Липецкой области",
    "выкуп Черноземье",
    "выкуп авто Воронеж",
    "снимаем авто с учета",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://av48.ru/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "yandex-verification": "39ec386e45f1906b",
    "google-site-verification": "iM_a-g_NQfKkRg7LdHMoHjr_rDLj0bZxz6QR56iOSBs",
  },
  openGraph: {
    title: "Авто Выкуп 48",
    description:
      "Выкуп автомобилей в Липецке и Липецкой области, выкуп в день обращения. Предложим больше, чем другие. Снимаем авто с учета в день выкупа",
    url: "https://av48.ru",
    images: [
      {
        url: "https://av48.ru/ogImage.jpeg",
        width: 1200,
        height: 630,
        alt: "Авто Выкуп 48 — срочный выкуп авто в Липецке и Липецкой области",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
