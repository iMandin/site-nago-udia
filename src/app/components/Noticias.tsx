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
const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dzddat4gm/video/upload/q_auto,f_auto,vc_auto";

const videosConexao = [
  `${CLOUDINARY_BASE}/v1768058712/Evento10_hrtfk6.mp4`,
  `${CLOUDINARY_BASE}/v1768058723/Evento5_s4tt2i.mp4`,
  `${CLOUDINARY_BASE}/v1768058747/Evento8_kuqsnd.mp4`,
  `${CLOUDINARY_BASE}/v1768058753/Evento1_lfkknx.mp4`,
  `${CLOUDINARY_BASE}/v1768058770/Evento7_yyebmm.mp4`,
  `${CLOUDINARY_BASE}/v1768058766/Evento2_yhefmr.mp4`,
  `${CLOUDINARY_BASE}/v1768058731/Evento9_wreyvs.mp4`,
  `${CLOUDINARY_BASE}/v1768058680/Evento4_k1wwbw.mp4`,
  `${CLOUDINARY_BASE}/v1768058666/Evento3_tdwgyr.mp4`,
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

  const swipeConfidenceThreshold = 80;

  const onDragEnd = (
    _: any,
    info: { offset: { x: number } }
  ) => {
    const offsetX = info.offset.x;

    if (offsetX < -swipeConfidenceThreshold) {
      // arrastou para esquerda → próximo
      proximoVideo();
    } else if (offsetX > swipeConfidenceThreshold) {
      // arrastou para direita → anterior
      videoAnterior();
    }
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
          {/* Selo de notícia */}
          {/* Selo de notícia */}
          <span
            className="
    inline-block mb-5 px-3 py-1
    text-xs sm:text-sm font-semibold
    bg-gold text-black rounded-full tracking-widest
  "
          >
            ÚLTIMA NOTÍCIA
          </span>

          {/* Manchete chamativa */}
          <h4
            className="
    text-3xl sm:text-3xl md:text-4xl
    font-extrabold text-gold mb-4
    leading-tight
  "
          >
            🔥 VEJA O QUE ACONTECEU NO CONEXÃO NAGÔ 🔥
          </h4>

          {/* Título principal (mantido, menor no mobile) */}
          <h3
            className="
    text-xl sm:text-2xl md:text-3xl
    font-bold text-gold mb-4
  "
          >
            🎉 O evento foi um sucesso 🎉
          </h3>

          {/* Texto estilo notícia */}
          <p
            className="
    text-gray-200 max-w-3xl mx-auto mb-10
    text-base sm:text-lg
    leading-relaxed
  "
          >
            Roda cheia, energia lá em cima, graduação emocionante e muita capoeira de verdade.
            O <strong>Conexão Nagô</strong> mostrou que tradição não se perde — se fortalece.
            <br />
            <span className="block mt-3 text-gold text-sm sm:text-base">
              👀 Aperta o play e confere tudo.
            </span>
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
                preload="none"
                playsInline

                /* 👉 swipe */
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}

                className={`
      rounded-xl border border-greenCapoeira shadow-xl object-cover
      touch-pan-y
      ${[0, 1].includes(videoAtivo)
                    ? "mx-auto w-[220px] h-[390px] sm:w-[240px] sm:h-[430px]"
                    : "w-full h-[300px] sm:h-[400px]"
                  }
    `}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
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
                  className={`w-3 h-3 rounded-full transition-all ${index === videoAtivo
                    ? "bg-gold scale-125"
                    : "bg-gray-500"
                    }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <p className="text-gray-200 max-w-3xl mx-auto mb-4 text-base sm:text-lg leading-relaxed">
              📸 Quer ver <strong>todas</strong> as fotos e vídeos completos do evento?🎥
            </p>

            <a
              href="https://drive.google.com/drive/folders/1dpEIwtvKewD0U_s3pbAlCyHaxLpY1R5A?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center gap-2
      px-6 py-3
      bg-gold text-black font-bold
      rounded-full
      shadow-lg
      hover:bg-greenCapoeira hover:text-black
      transition-all
      text-sm sm:text-base
    "
            >
              👉 Acessar drive do evento
            </a>
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
