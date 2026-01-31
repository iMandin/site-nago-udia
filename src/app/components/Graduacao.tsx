"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import Image from "next/image";
import cordas from "../../../public/images/cordas.jpeg";

export default function Graduacao() {
  return (
    <section id="graduacao" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-6"
        >
          Sistema de Graduação Oficial Nagô
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg"
        >
          O sistema de graduação Nagô representa a evolução técnica,
          histórica e espiritual do capoeirista, respeitando a tradição,
          a ancestralidade e o compromisso com a arte.
        </motion.p>

        {/* Conteúdo */}
        <div className="flex justify-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-xl max-w-xl w-full group"
          >
            <Image
              src={cordas}
              alt="Cordas de graduação Nagô"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              priority
            />

            {/* Overlay opcional */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
