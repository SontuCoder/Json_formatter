import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sontucode.dev"),

  title: {
    default: "Json Formatter - Free Developer Tools",
    template: "%s | SontuCode",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}