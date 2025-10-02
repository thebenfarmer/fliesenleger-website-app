import type { Metadata, Viewport } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import { LocalBusinessSchema, WebsiteSchema } from "@/components/seo/StructuredData";
import { SkipLink } from "@/components/accessibility/SkipLink";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ChatBot from "@/components/features/ChatBot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#974C30' },
    { media: '(prefers-color-scheme: dark)', color: '#974C30' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://fliesenleger-muenchen.de'),
  title: {
    default: "Fliesenleger München | Meisterbetrieb seit 1998",
    template: "%s | Fliesenleger München",
  },
  description:
    "Ihr Meisterbetrieb für hochwertige Fliesenverlegung in München. Badezimmer, Naturstein, Mosaik. Kostenlose Beratung ✓ 5 Jahre Garantie ✓",
  keywords: [
    "Fliesenleger München",
    "Badezimmer Fliesen",
    "Naturstein verlegen",
    "Fliesenleger Meisterbetrieb",
  ],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Fliesenleger München',
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://fliesenleger-muenchen.de",
    siteName: "Fliesenleger München",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${crimsonPro.variable}`}>
      <head>
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SkipLink />
        {children}
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
