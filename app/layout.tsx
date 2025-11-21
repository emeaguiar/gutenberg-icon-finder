import type { Metadata } from "next";
import Script from "next/script";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
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

export const metadata: Metadata = {
  title: "Gutenberg Icon Finder",
  description: "Un buscador de íconos utilizados en @wordpress/icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={ { enableCssLayer: true } }>
          {children}
        </AppRouterCacheProvider>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y2WQZJBC5P" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y2WQZJBC5P');`}
      </Script>
    </html>
  );
}
