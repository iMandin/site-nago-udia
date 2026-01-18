"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import { useState } from "react";

/* =======================
   READ MORE
======================= */
type ReadMoreProps = {
  text: string;
  fullText?: string;
};

function ReadMore({ text, fullText }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-gray-200 text-base leading-relaxed">
      <p className="whitespace-pre-line">
        {expanded ? fullText : text}
      </p>

      {fullText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-gold font-semibold hover:underline"
        >
          {expanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
}

/* =======================
   DADOS
======================= */
const mestres = [
  {
    nome: "Mestre Sapo",
    imagem: "/images/Mestre Sapo.jpg",
    descricao:
      "Coordenador geral do grupo em Sorriso - MT e aluno do Mestre Pequinês.",
    textoCompleto: `Wanderson Wagner de Campos, conhecido como Mestre Sapo,
é praticante de capoeira desde os 11 anos.

Aluno do Mestre Pequinês, integrante do Grupo Internacional Capoeira Nagô desde 2014
e formado Mestre em 2024.

Ministra aulas desde 1997 e é gestor cultural desde 2001.`,
  },
  {
    nome: "Mestre Beiramar",
    imagem: "/images/beiramar.png",
    descricao:
      "Responsável pelo grupo em Uberlândia, preservando a tradição e a ginga da capoeira.",
  },
];

const professores = [
  {
    nome: "Professor Lua",
    imagem: "/images/LuaNovo.jpg",
    descricao:
      "Professor Lua é responsável pela coordenação do grupo em Uberlândia na ausência do Mestre Beiramar.",
  },
  {
    nome: "Professor Capitão",
    imagem: "/images/capitao.jpeg",
    descricao:
      "Professor Capitão integra o grupo, fortalecendo a capoeira em Uberlândia.",
  },
];

const graduados = [
  {
    nome: "Graduado Foguin",
    imagem: "/images/foguinho.jpg",
    descricao:
      "Contribui para o fortalecimento da base de graduados da coordenação.",
  },
  {
    nome: "Graduado Gil",
    imagem: "/images/Gil.jpg",
    descricao:
      "Atua ativamente no apoio e crescimento do grupo.",
  },
];

const alunos = [
  {
    nome: "Caracol",
    imagem: "/images/caracol.jpg",
    descricao:
      "Responsável pela parte técnica e de TI do grupo.",
  },
  {
    nome: "Dandara",
    imagem: "/images/dandara.jpg",
    descricao:
      "Responsável pela tesouraria e organização financeira.",
  },
  {
    nome: "Sossego",
    imagem: "/images/sossego.jpg",
    descricao:
      "Sempre disposto a ajudar, com calma e espírito de união.",
  },
  {
    nome: "Soneca",
    imagem: "/images/soneca.png",
    descricao:
      "Traz tranquilidade e leveza para o grupo.",
  },
  {
    nome: "Titanium",
    imagem: "/images/titanium.png",
    descricao:
      "Determinado e focado na evolução constante.",
  },
  {
    nome: "Feijão",
    imagem: "/images/feijao.jpg",
    descricao:
      "O caçula do grupo, cheio de energia e alegria.",
  },
];

/* =======================
   CARD REUTILIZÁVEL
======================= */
function CardPessoa({ nome, imagem, descricao }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gold/20 hover:scale-105 transition-transform"
    >
      <div className="h-72 w-full overflow-hidden bg-dark/60">
        <img
          src={imagem}
          alt={nome}
          className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-gold mb-2">{nome}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">{descricao}</p>
      </div>
    </motion.div>
  );
}

/* =======================
   COMPONENTE PRINCIPAL
======================= */
export default function Mestres() {
  return (
    <section
      id="mestres"
      className="py-20 bg-gradient-to-br from-dark via-dark/90 to-greenCapoeira"
    >
      <div className="container mx-auto px-4 text-center">

        {/* TÍTULO */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gold"
        >
          Mestres
        </motion.h2>

        {/* MESTRE SAPO */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16 bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gold/30"
        >
          <div className="h-80 bg-dark/60">
            <img
              src={mestres[0].imagem}
              alt={mestres[0].nome}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-3xl font-bold text-gold mb-3">
              {mestres[0].nome}
            </h3>
            <ReadMore
              text={mestres[0].descricao}
              fullText={mestres[0].textoCompleto}
            />
          </div>
        </motion.div>

        {/* MESTRE BEIRAMAR */}
        <div className="max-w-md mx-auto mb-24">
          <CardPessoa {...mestres[1]} />
        </div>

        {/* PROFESSORES */}
        <h3 className="text-3xl font-bold mb-10 text-gold">Professores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
          {professores.map((p, i) => (
            <CardPessoa key={i} {...p} />
          ))}
        </div>

        {/* GRADUADOS */}
        <h3 className="text-3xl font-bold mb-10 text-gold">Graduados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
          {graduados.map((g, i) => (
            <CardPessoa key={i} {...g} />
          ))}
        </div>

        {/* ALUNOS */}
        <h3 className="text-3xl font-bold mb-10 text-gold">Alunos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {alunos.map((a, i) => (
            <CardPessoa key={i} {...a} />
          ))}
        </div>

      </div>
    </section>
  );
}
