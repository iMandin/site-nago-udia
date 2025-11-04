"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-gold"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gold tracking-wide">
          Nagô Capoeira <span className="text-greenCapoeira">Uberlândia</span>
        </h1>

        <nav className="hidden md:flex gap-6 text-sm uppercase">
          <a href="#sobre" className="hover:text-greenCapoeira transition">Sobre</a>
          <a href="#mestres" className="hover:text-greenCapoeira transition">Mestres</a>
          <a href="#eventos" className="hover:text-greenCapoeira transition">Eventos</a>
          <a href="#noticias" className="hover:text-greenCapoeira transition">Notícias</a>
          <a href="#galeria" className="hover:text-greenCapoeira transition">Galeria</a>
          <a href="#contato" className="hover:text-greenCapoeira transition">Contato</a>
        </nav>

        <div className="flex gap-4 text-gold">
          <a href="#"><FaInstagram className="hover:text-greenCapoeira text-xl transition" /></a>
          <a href="#"><FaYoutube className="hover:text-greenCapoeira text-xl transition" /></a>
        </div>
      </div>
    </motion.header>
  );
}
