"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Galeria() {
  const midias = [
    { tipo: "imagem", src: "/images/1.jpg" },
    { tipo: "imagem", src: "/images/2.jpg" },
    { tipo: "video", src: "/videos/1.mp4" },
    { tipo: "imagem", src: "/images/6.jpg" },
    { tipo: "video", src: "/videos/2.mp4" },
    { tipo: "imagem", src: "/images/duo.png" },
    { tipo: "imagem", src: "/images/4.jpeg" },
    { tipo: "imagem", src: "/images/5.png" },
    { tipo: "video", src: "/videos/mestre1.mp4" },
    { tipo: "video", src: "/videos/todos1.mp4" },
    { tipo: "video", src: "/videos/treino1.mp4" },
    { tipo: "imagem", src: "/images/3.jpeg" },
  ];

  const [indexSelecionado, setIndexSelecionado] = useState<number | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const itensPorPagina = 6;
  const totalPaginas = Math.ceil(midias.length / itensPorPagina);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndexSelecionado(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const proximaMidia = () => {
    if (indexSelecionado === null) return;
    setIndexSelecionado((prev) => (prev! + 1) % midias.length);
  };

  const midiaAnterior = () => {
    if (indexSelecionado === null) return;
    setIndexSelecionado((prev) => (prev! - 1 + midias.length) % midias.length);
  };

  const midiasVisiveis = midias.slice(
    paginaAtual * itensPorPagina,
    paginaAtual * itensPorPagina + itensPorPagina
  );

  const proximaPagina = () => {
    setPaginaAtual((prev) => (prev + 1) % totalPaginas);
  };

  const paginaAnterior = () => {
    setPaginaAtual((prev) => (prev - 1 + totalPaginas) % totalPaginas);
  };

  return (
    <section id="galeria" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-12"
        >
          Galeria
        </motion.h2>

        <div className="relative flex items-center">
          <button
            onClick={paginaAnterior}
            className="absolute -left-6 md:-left-10 text-white hover:text-gold transition bg-black/50 rounded-full p-2 z-20"
          >
            <ChevronLeft size={40} />
          </button>

          <motion.div
            key={paginaAtual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full"
          >
            {midiasVisiveis.map((m, i) =>
              m.tipo === "imagem" ? (
                <motion.img
                  key={i}
                  src={m.src}
                  alt={`Galeria ${i + 1}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg object-cover h-56 w-full cursor-pointer border border-gold/20 shadow-md hover:shadow-gold/40 transition-all"
                  onClick={() =>
                    setIndexSelecionado(
                      paginaAtual * itensPorPagina + i 
                    )
                  }
                />
              ) : (
                <motion.video
                  key={i}
                  src={m.src}
                  className="rounded-lg object-cover h-56 w-full cursor-pointer border border-gold/20 shadow-md hover:shadow-gold/40 transition-all"
                  onClick={() =>
                    setIndexSelecionado(
                      paginaAtual * itensPorPagina + i 
                    )
                  }
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )
            )}
          </motion.div>

          <button
            onClick={proximaPagina}
            className="absolute -right-6 md:-right-10 text-white hover:text-gold transition bg-black/50 rounded-full p-2 z-20"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {indexSelecionado !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndexSelecionado(null)}
          >
            <div className="relative max-w-5xl w-[90%] flex items-center justify-center z-[110]">
              <button
                className="absolute top-4 right-4 z-[120] text-white hover:text-gold transition bg-black/50 rounded-full p-2"
                onClick={() => setIndexSelecionado(null)}
              >
                <X size={30} />
              </button>

              <button
                className="absolute left-4 z-[120] text-white hover:text-gold transition bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  midiaAnterior();
                }}
              >
                <ChevronLeft size={40} />
              </button>

              <button
                className="absolute right-4 z-[120] text-white hover:text-gold transition bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  proximaMidia();
                }}
              >
                <ChevronRight size={40} />
              </button>

              {midias[indexSelecionado].tipo === "imagem" ? (
                <motion.img
                  key={midias[indexSelecionado].src}
                  src={midias[indexSelecionado].src}
                  alt="Imagem ampliada"
                  className="max-h-[80vh] rounded-lg shadow-lg cursor-pointer z-[100]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.video
                  key={midias[indexSelecionado].src}
                  src={midias[indexSelecionado].src}
                  className="max-h-[80vh] rounded-lg shadow-lg z-[100]"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
