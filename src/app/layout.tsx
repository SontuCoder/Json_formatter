import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sontucode.dev"),

  title: {
    default: "JSON Formatter - Format, Validate & Beautify JSON Online",
    template: "%s | SontuCode",
  },

  alternates: {
    canonical: "/json-formatter",
  },

  description:
    "Free online JSON formatter and validator. Format, beautify, validate, and minify JSON instantly in your browser. No upload or account required.",

  applicationName: "SontuCode Json Formatter",

  authors: [
    {
      name: "SontuCode",
      url: "https://sontucode.dev",
    },
  ],
  
  keywords: [
  "JSON formatter",
  "JSON validator",
  "JSON beautifier",
  "JSON minifier",
  "format JSON online",
  "validate JSON online",
],

  creator: "SontuCode",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SontuCode",
    title: "JSON Formatter - Format, Validate & Beautify JSON Online",
    images: ["/og-image.png"],
    description: "Format, beautify, validate and minify JSON online for free.",
    url: "https://sontucode.dev/json-formatter",
  },

  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter - SontuCode",
    description: "Format, beautify, validate and minify JSON online for free.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[scrollbar-gutter-stable]">
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
    />
      <body>
    {children}</body>
    </html>
  );
} 