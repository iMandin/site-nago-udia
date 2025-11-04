"use client";

import { motion } from "framer-motion";
import { fadeInUp, ginga } from "../../app/utils/animations";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-greenCapoeira via-dark to-gold relative overflow-hidden bg-dark">

      {/* 🔥 Animação de fundo */}
      {/* Primeiro GIF */}
      <motion.img
        src="/images/capoeira.gif"
        alt="Capoeira animation"
        initial={{ x: "-100%", opacity: 0.22 }}
        animate={{ x: "100%", opacity: 0.22 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ filter: "invert(100%) contrast(300%) brightness(100%)" }}
        className="absolute bottom-0 w-[350px] md:w-[480px]"
      />

      {/* Segundo GIF */}
      <motion.img
        src="/images/capoeira2.gif"
        alt="Segundo movimento"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "100%", opacity: 0.22 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          delay: 6, // ajuste para entrar no meio do primeiro
          ease: "linear",
        }}
        style={{ filter: "invert(100%) contrast(300%) brightness(100%)" }}
        className="absolute bottom-0 w-[350px] md:w-[480px]"
      />

      {/* Terceiro GIF */}
      {/* <motion.img
        src="/images/capoeira3.gif"
        alt="Terceiro movimento"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "100%", opacity: 0.22 }}
        transition={{
          duration: 10, // mais rápido
          repeat: Infinity,
          delay: 13,
          ease: "linear",
        }}
        style={{ filter: "invert(100%) contrast(300%) brightness(100%)" }}
        className="absolute bottom-0 w-[350px] md:w-[480px]"
      /> */}





      {/* Conteúdo */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-center px-4 relative z-10"
      >
        <motion.h1
          variants={ginga}
          animate="animate"
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Ginga, Cultura e Tradição
        </motion.h1>

        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Grupo Nagô Capoeira Uberlândia — preservando a arte e a alma da capoeira.
        </p>
      </motion.div>
    </section>
  );
}
