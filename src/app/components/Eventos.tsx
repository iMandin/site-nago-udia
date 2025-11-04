"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";

const eventos = [
  { titulo: "Roda de abertura", data: "14 de Novembro às 20 horas - Sede Clube da Luta", descricao: "Roda de capoeira para a abertura do evento." },
  { titulo: "Batizado 2025", data: "15 de Novembro", descricao: "Workshops de capoeira e cerimônia de graduação com convidados especiais." },
];

export default function Eventos() {
  return (
    <section id="eventos" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-12"
        >
          Agenda e Eventos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {eventos.map((evento, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-black/50 border border-gold rounded-2xl p-6 hover:shadow-lg hover:shadow-gold/20 transition"
            >
              <h3 className="text-2xl font-semibold text-greenCapoeira mb-2">{evento.titulo}</h3>
              <p className="text-gold text-sm mb-3">{evento.data}</p>
              <p className="text-gray-300">{evento.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
