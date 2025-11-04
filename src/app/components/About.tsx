"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-6"
        >
          Sobre Nós
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed space-y-5 max-w-3xl mx-auto"
        >
          <p>
            Em maio de 2025, o mestre Beiramar filiou-se ao grupo Capoeira Nagô, sob a coordenação do mestre Sapo, em busca de aperfeiçoamento do seu trabalho. <br /> Com longa dedicação à arte, foi responsável por trazer a Capoeira Nagô para Uberlândia em 2025, iniciando um novo capítulo na cidade.
          </p>


          <p className="text-lg  pt-4 text-gray-300">
            Hoje, somos{" "}
            <span className="text-lg text-green-400 font-bold">
              Capoeira Nagô Uberlândia
            </span>
            <br />
            <span className="text-gray-300 text-lg font-normal">
              com identidade fortalecida e um futuro que seguimos construindo juntos.
            </span>
          </p>

        </motion.div>


      </div>
    </section>
  );
}
