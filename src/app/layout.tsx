import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://json-formatter.sontucode.dev"),

  title: {
    default: "JSON Formatter - Format, Validate & Beautify JSON Online",
    template: "%s | SontuCode",
  },

  alternates: {
    canonical: "/",
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
    icon: "https://res.cloudinary.com/sontucoder/image/upload/v1787411157/favicon_pdmdqp.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SontuCode",
    title: "JSON Formatter - Format, Validate & Beautify JSON Online",
    description: "Format, beautify, validate and minify JSON online for free.",
    url: "https://json-formatter.sontucode.dev",
    images: [{
      url: "https://res.cloudinary.com/sontucoder/image/upload/v1787411159/og-image_megsli.png",
      width: 1200,
      height: 630,
      alt: "SontuCode JSON Formatter",
  }],
  },

  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter - SontuCode",
    description: "Format, beautify, validate and minify JSON online for free.",
    images: ["https://res.cloudinary.com/sontucoder/image/upload/v1787411159/og-image_megsli.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en" className="[scrollbar-gutter-stable]">
      {/* <head>
      {adsenseClient && (<script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
    /> )}
    </head> */}
      <body>
         {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
    {children}</body>
    </html>
  );
} 