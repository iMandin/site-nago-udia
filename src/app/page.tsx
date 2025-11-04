"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mestres from "./components/Mestre";
import Eventos from "./components/Eventos";
import Noticias from "./components/Noticias";
import Galeria from "./components/Galeria";
import Localizacao from "./components/Localizacao";
import ConhecaOsMovimentos from "./components/ConhecaOsMovimentos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Wpp from "../../public/images/whatsapp1.png";

export default function Page() {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const startRandomShake = () => {
      const nextShake = Math.random() * (3000 - 1000) + 1000;

      setTimeout(() => {
        setIsShaking(true);
        setTimeout(() => {
          setIsShaking(false);
          startRandomShake();
        }, 400);
      }, nextShake);
    };

    startRandomShake();

    // Forçar scroll top várias vezes
    const interval = setInterval(() => window.scrollTo(0, 0), 5);
    setTimeout(() => clearInterval(interval), 100); // parar após 100ms
  }, []);



  return (
    <main className="text-white overflow-x-hidden">
      <a
        href="https://wa.me/553492129701?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20%2F%20Nag%C3%B4%20Uberl%C3%A2ndia%20%F0%9F%A4%B8"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-greenCapoeira rounded-full shadow-lg hover:bg-green transition-all z-50 flex items-center justify-center"
        aria-label="Contato WhatsApp"
      >
        <img
          src={Wpp.src}
          alt="WhatsApp"
          className="w-16 h-16 object-contain"
        />
      </a>

      <Navbar />
      <Hero />
      <About />
      <Mestres />
      <Eventos />
      <Noticias />
      <Galeria />
      <Localizacao />
      <ConhecaOsMovimentos />
      <Contato />
      <Footer />
    </main>
  );
}
