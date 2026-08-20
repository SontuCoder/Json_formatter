"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import AdSection from "@/components/AdSense";
import FeaturesSection from "@/components/Features";
import JsonFormatter from "@/components/Formatter";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
    <JsonLd/>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-between">
        <JsonFormatter />
        <FeaturesSection />
        <AdSection />
        <FAQ />
      </main> 
      <Footer />
    </>
  );
}
