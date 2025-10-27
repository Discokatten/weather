import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What to wear today?",
  description:
    "Weather-app that helps you choose what clothes is best suited for todays weather",
};

export default function RootLayout({
  children,
  weather,
  clothes,
}: Readonly<{
  children: React.ReactNode;
  weather: React.ReactNode;
  clothes: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        {children}
        <main className="flex wrap gap-4 text-white justify-center">
          {weather}
          {clothes}
        </main>
      </body>
    </html>
  );
}
