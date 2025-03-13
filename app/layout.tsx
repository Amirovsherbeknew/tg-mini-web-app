import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {ScrollArea} from '@/app/components/ui/scroll-area'
import { MenubarDemo } from "./components/layouts/MenuList";
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
  return (
    <html lang="en">
      <head>
      <Script
            src="https://telegram.org/js/telegram-web-app.js"
            strategy="beforeInteractive"
          />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-svh`}>
        <ScrollArea className="dark:text-white bg-[--main-bg] text-white  h-full">
          <div className="px-[15px] py-[30px]">
          <MenubarDemo/>
            {children}
          </div>
        </ScrollArea>
      </body>
    </html>
  );
}
