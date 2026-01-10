"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeInUp } from "@/app/utils/animations";

/* =========================
   Dados das notícias
========================= */
const noticias = [
  {
    titulo: "Viagem Chile",
    texto:
      "Recentemente o Mestre Beiramar realizou a viagem para o Chile onde aconteceu o evento 'Eu vim pra Vadiar' na organização do professor Nikimba sob a coordenação do Mestre Fagulha (Capoeira Nagô).",
    img: "/images/Chile.jpg",
  },
  {
    titulo: "Conexão Nagô",
    texto:
      "O Conexão Nagô aconteceu na cidade de Uberlândia - MG, reunindo capoeiristas em um evento marcado por troca de experiências, graduação e fortalecimento da tradição da Capoeira Nagô.",
    img: "/images/conexao.jpg",
  },
];

/* =========================
   Vídeos do Conexão Nagô
========================= */
const videosConexao = [
  "/videos/Evento10.mp4",
  "/videos/Evento5.mp4",
  "/videos/Evento3.mp4",
  "/videos/Evento2.mp4",
  "/videos/Evento1.mp4",
  "/videos/Evento4.mp4",
  "/videos/Evento6.mp4",
  "/videos/Evento7.mp4",
  "/videos/Evento8.mp4",
  "/videos/Evento9.mp4",
];

export default function Noticias() {
  const [imagemExpandida, setImagemExpandida] = useState<string | null>(null);
  const [videoAtivo, setVideoAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);

  /* =========================
     Autoplay do carrossel
  ========================= */
  useEffect(() => {
    if (pausado) return;

    const interval = setInterval(() => {
      setVideoAtivo((prev) => (prev + 1) % videosConexao.length);
    }, 90000); // 90 segundos

    return () => clearInterval(interval);
  }, [pausado]);

  /* =========================
     Navegação manual
  ========================= */
  const proximoVideo = () => {
    setPausado(true);
    setVideoAtivo((prev) => (prev + 1) % videosConexao.length);
  };

  const videoAnterior = () => {
    setPausado(true);
    setVideoAtivo((prev) =>
      prev === 0 ? videosConexao.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="noticias"
      className="py-24 bg-gradient-to-b from-black to-dark relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-12"
        >
          Notícias
        </motion.h2>

        {/* Cards de notícias */}
        <div className="grid md:grid-cols-2 gap-10">
          {noticias.map((noticia, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-dark border border-greenCapoeira rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform"
            >
              <motion.img
                src={noticia.img}
                alt={noticia.titulo}
                className="w-full h-72 object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setImagemExpandida(noticia.img)}
                whileHover={{ scale: 1.02 }}
              />

              <div className="p-6 text-left">
                <h3 className="text-2xl text-gold font-semibold mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {noticia.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            Conexão Nagô - Carrossel
        ========================= */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-gold mb-6">
            🎉 O evento "Conexão Nagô" foi um sucesso 🎉
          </h3>

          <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Um encontro marcado por energia, respeito e tradição. O Conexão Nagô
            mostrou a força da nossa capoeira através da troca, da música e da
            união. Veja alguns momentos desse evento especial.
          </p>

          {/* Carrossel */}
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={videoAtivo}
                src={videosConexao[videoAtivo]}
                autoPlay
                muted
                loop
                controls
                className={`
                  rounded-xl border border-greenCapoeira shadow-xl object-cover
                  ${[0, 1].includes(videoAtivo)
                    ? "mx-auto w-[240px] h-[430px]"
                    : "w-full h-[400px]"
                  }
                `}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Setas */}
            <button
              onClick={videoAnterior}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2
                bg-black/60 hover:bg-gold text-white hover:text-black
                w-10 h-10 rounded-full flex items-center justify-center
                transition-all shadow-lg"
              aria-label="Vídeo anterior"
            >
              ‹
            </button>

            <button
              onClick={proximoVideo}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2
                bg-black/60 hover:bg-gold text-white hover:text-black
                w-10 h-10 rounded-full flex items-center justify-center
                transition-all shadow-lg"
              aria-label="Próximo vídeo"
            >
              ›
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-3 mt-6">
              {videosConexao.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPausado(true);
                    setVideoAtivo(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === videoAtivo
                      ? "bg-gold scale-125"
                      : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal imagem expandida */}
      <AnimatePresence>
        {imagemExpandida && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImagemExpandida(null)}
          >
            <motion.img
              src={imagemExpandida}
              alt="Imagem expandida"
              className="max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
