"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/app/utils/animations";

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
      "Conexão Nagô acontecerá na cidade de Uberlândia - MG, na data de 14 e 15 de novembro, onde haverá graduações e troca de cordas.",
    img: "/images/conexao.jpg",
  },
];

export default function Noticias() {
  const [imagemExpandida, setImagemExpandida] = useState<string | null>(null);

  return (
    <section id="noticias" className="py-24 bg-gradient-to-b from-black to-dark relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-12"
        >
          Notícias
        </motion.h2>

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
      </div>

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
