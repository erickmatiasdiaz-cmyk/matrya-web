"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Impact from "@/components/Impact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import Solutions from "@/components/Solutions";
import Cases from "@/components/Cases";
import Pricing from "@/components/Pricing";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className="overflow-x-hidden bg-[#05080f] text-white">
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />

      <Solutions />
      <Cases />
      <Method />
      <Impact />
      <Pricing />
      <FinalCTA onOpen={openModal} />
      <Footer />

      <DiagnosisModal isOpen={isOpen} onClose={closeModal} />
      <WhatsappFloat />
    </main>
  );
}
