"use client"

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { to: "sobre", label: "Sobre Nós" },
  { to: "mestres", label: "Mestres" },
  { to: "eventos", label: "Eventos" },
  { to: "noticias", label: "Notícias" },
  { to: "galeria", label: "Galeria" },
  { to: "localizacao", label: "Localização" },
  { to: "contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-gold/20"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.img
          src="/images/logo.png"
          alt="Nagô Capoeira"
          className="h-16 w-auto cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-80}
              spy={true}
              activeClass="text-gold"
              className="cursor-pointer text-gray-200 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <motion.img
            src="/images/Insta.png"
            alt="Instagram"
            className="h-7 w-7 cursor-pointer ml-4"
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              window.open("https://www.instagram.com/capoeira_nago.udia/", "_blank")
            }
          />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold focus:outline-none"
        >
          ☰
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden flex flex-col items-center bg-dark border-t border-gold/20 py-4 space-y-4"
        >
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-80}
              spy={true}
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-200 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <motion.img
            src="/images/Insta.png"
            alt="Instagram"
            className="h-8 w-8 cursor-pointer mt-2"
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              window.open("https://www.instagram.com/capoeira_nago.udia/", "_blank")
            }
          />
        </motion.div>
      )}
    </motion.nav>
  );
}
