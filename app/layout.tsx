'use client'
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ Next.js uchun Script komponenti
import { useEffect, useState } from "react"; // ✅ Faqat client tomonda ishlash uchun
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ Component faqat client tomonida ishlashini ta’minlaymiz
  }, []);

  return (
    <html lang="en">
      <head>
        {isClient && (
          <Script
            src="https://telegram.org/js/telegram-web-app.js"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
