import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import SpaceBackground from "@/components/SpaceBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Musthaba S M",
  description:
    "Software Developer specializing in Java, AI/ML, Blockchain and Full Stack Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="bg-grid" />
        <BackgroundDecorations />
        <SpaceBackground />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}