"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <FAQ />
        </main> 
      <Footer />
    </>
  );
}
