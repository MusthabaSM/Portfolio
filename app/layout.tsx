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

const siteUrl = "https://musthaba.tech";
const siteTitle = "Mohamed Musthaba S M | Software Developer";
const siteDescription =
  "Explore the portfolio of Mohamed Musthaba S M, showcasing software development projects, technical skills, and interests in web development, AI/ML, and Web3.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Mohamed Musthaba S M",
  },
  description: siteDescription,
  applicationName: "Mohamed Musthaba S M Portfolio",
  authors: [{ name: "Mohamed Musthaba S M", url: siteUrl }],
  creator: "Mohamed Musthaba S M",
  publisher: "Mohamed Musthaba S M",
  keywords: [
    "Mohamed Musthaba S M",
    "Musthaba",
    "Software Developer",
    "Web Developer",
    "Full Stack Development",
    "AI/ML",
    "Web3",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Mohamed Musthaba S M",
    images: [
      {
        url: "/profile2_nobg.png",
        width: 800,
        height: 800,
        alt: "Mohamed Musthaba S M - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile2_nobg.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mohamed Musthaba S M",
      alternateName: ["Musthaba", "Mohamed Musthaba"],
      jobTitle: "Software Developer",
      description: "Software Developer specializing in web development, AI/ML, and Web3.",
      url: siteUrl,
      image: `${siteUrl}/profile2_nobg.png`,
      sameAs: [
        "https://github.com/MusthabaSM",
        "https://linkedin.com/in/mohamed-musthaba",
      ],
      knowsAbout: [
        "Software Development",
        "Web Development",
        "Full Stack Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Explainable AI",
        "Web3",
        "Blockchain",
        "Java",
        "Python",
        "TypeScript",
        "Next.js",
        "React",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <div className="bg-grid" />
        <BackgroundDecorations />
        <SpaceBackground />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
