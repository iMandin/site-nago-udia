"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/animations";

export default function Footer() {
  return (
    <footer className="bg-dark py-8 border-t border-gold text-center space-y-5">
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        className="text-gray-400"
      >
        © {new Date().getFullYear()} Grupo Nagô Capoeira Uberlândia — Todos os direitos reservados.
      </motion.p>

      <motion.a
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        href="https://www.linkedin.com/in/amandavieirabrito/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:text-white transition-colors duration-300"
      >
        Site desenvolvido por <span className="font-semibold">Amanda Brito</span>
      </motion.a>
    </footer>
  );
}
