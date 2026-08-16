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
    "Fast, free and privacy-friendly developer tools that run directly in your browser.",

  applicationName: "SontuCode Json Formatter",

  authors: [
    {
      name: "SontuCode",
      url: "https://sontucode.dev",
    },
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
    card: "summary",
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
      <body>{children}</body>
    </html>
  );
} 