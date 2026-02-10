import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "SavCalc - Free Financial Calculators 2026",
    template: "%s | SavCalc"
  },
  description: "Free online financial calculators for SIP, EMI, FD, RD, SWP, and Lumpsum investments. Plan your finances with accurate, easy-to-use tools.",
  keywords: ["SIP calculator", "EMI calculator", "FD calculator", "RD calculator", "financial planning", "investment calculator", "loan calculator"],
  authors: [{ name: "SavCalc" }],
  creator: "SavCalc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://savcalc.vercel.app",
    siteName: "SavCalc",
    title: "SavCalc - Free Financial Calculators 2026",
    description: "Free online financial calculators for SIP, EMI, FD, RD, SWP, and Lumpsum investments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavCalc - Free Financial Calculators",
    description: "Free online financial calculators for SIP, EMI, FD, RD, SWP, and Lumpsum investments.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const adsensePubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;
const hasAdsense = Boolean(adsensePubId && adsensePubId.length > 5 && !adsensePubId.includes('XXXX'));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {hasAdsense && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePubId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CurrencyProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </CurrencyProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-8JSH9RNL3T" />
      </body>
    </html>
  );
}
