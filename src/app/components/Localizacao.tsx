"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 bg-gradient-to-b from-dark to-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-8"
        >
          Localização
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="text-gray-300 mb-6"
        >
          Av. Ubirajara Zacharias, 45 - Novo Mundo, Uberlândia - MG, 38409-057
        </motion.p>

        <div className="w-full h-96 rounded-xl overflow-hidden border border-gold shadow-lg">
          <iframe
            title="Mapa Nagô Capoeira Uberlândia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.155501295993!2d-48.216417026282784!3d-18.9245099822491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44fc6d8263fa9%3A0x7865e20462021daa!2sAv.%20Ubirajara%20Zacharias%2C%2045%20-%20Novo%20Mundo%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038409-057!5e0!3m2!1spt-BR!2sbr!4v1759974965686!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
