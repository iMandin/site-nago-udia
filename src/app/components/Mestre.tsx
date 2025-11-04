"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import { useState } from "react";


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

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-gold font-semibold hover:underline"
      >
        {expanded ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
}


const mestres = [
  {
    nome: "Mestre Sapo",
    imagem: "/images/Mestre Sapo.jpg",
    descricao:
      "Coordenador geral do grupo em Sorriso - MT e aluno do Mestre Pequinês, integrante do Grupo Capoeira Nagô desde 2014 e formado Mestre em 2024.",
    textoCompleto: `Wanderson Wagner de Campos, nascido em 13 de julho de 1981, praticante de capoeira desde os 11 anos iniciou sua jornada na rua com colegas e depois ingressou no Grupo FICAG em Ouro Branco - MG.

Atualmente conhecido como Mestre Sapo, é aluno do renomado Mestre Pequinês, integrante do Grupo Internacional Capoeira Nagô desde 2014 e formado Mestre em 2024.

Ministra aulas desde 1997, realizou diversos eventos culturais e tornou-se gestor cultural em 2001 ao fundar a ACAFRO.

Projetos aprovados:
1) Capoeiragem Online — PROMIC Sorriso-MT (2020)
2) Reconhecimento ao Mestre Jarbas — SECEL/MT (2020)
3) Festival Pé na Lua — SECEL/MT (2020)
4) Festa na Aldeia — PROMIC Sorriso (2021–2022)
5) Festival Pé na Lua 2ª edição — SECEL/MT (2022)
6) Semana da Consciência Negra — Ouro Branco/MG (2022)
7) Coordenador de oficinas de capoeira em Sorriso - MT`
  },
  {
    nome: "Mestre Beiramar",
    descricao:
      "Responsável pelo grupo em Uberlândia. Com quase 30 anos de dedicação à capoeira, trabalha pela preservação da tradição e da ginga brasileira.",
    imagem: "/images/beiramar.png",
  },
  {
    nome: "Professor Lua",
    descricao:
      "Responsável pelo grupo em Uberlândia na ausência do Mestre Beiramar, atuando quando este se encontra em viagem ou a trabalho com a capoeira.",
    imagem: "/images/LuaNovo.jpg",
  },
  {
    nome: "Graduado Foguin",
    descricao:
      "Graduado Foguin tem contribuído para o fortalecimento da base de graduados da coordenação do Mestre Beiramar.",
    imagem: "/images/foguinho.jpg",
  },
  {
    nome: "Graduado Gil",
    descricao:
      "Graduado Gil colabora ativamente com o fortalecimento da base de graduados da coordenação do Mestre Beiramar.",
    imagem: "/images/Gil.jpg",
  },
];

// 🟢 Alunos
const alunos = [
  {
    nome: "Caracol",
    imagem: "/images/caracol.jpg",
    descricao:
      "Caracol é responsável pela parte técnica e de TI, cuidando das plataformas e recursos digitais do grupo unindo tecnologia e capoeira.",
  },
  {
    nome: "Dandara",
    imagem: "/images/dandara.jpg",
    descricao:
      "Dandara é responsável pela tesouraria e organização financeira do grupo, administra o orçamento e garante a transparência e o bom uso dos recursos.",
  },
  {
    nome: "Sossego",
    imagem: "/images/sossego.jpg",
    descricao:
      "Sossego é conhecido por sua calma e postura centrada. Sempre disposto a ajudar, contribuindo com dedicação e espírito de união.",
  },
  {
    nome: "Soneca",
    imagem: "/images/soneca.png",
    descricao:
      "Soneca tem um jeito tranquilo e sereno, sempre trazendo um clima leve para o grupo.",
  },
  {
    nome: "Titanium",
    imagem: "/images/titanium.png",
    descricao:
      "Titanium é dedicado e determinado, sempre em busca de evolução com energia e foco.",
  },
  {
    nome: "Feijão",
    imagem: "/images/feijao.jpg",
    descricao:
      "Feijão é o caçulinha do grupo, cheio de energia e curiosidade. Traz alegria aos treinos, aprendendo e crescendo com todos.",
  },
];

export default function Mestres() {
  return (
    <section
      id="mestres"
      className="py-20 bg-gradient-to-br from-dark via-dark/90 to-greenCapoeira relative overflow-hidden"
    >
      <div className="container mx-auto px-3 md:px-12 text-center">

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gold"
        >
          Mestres e Instrutores
        </motion.h2>

        {/* Mestre Sapo */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16 bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gold/30 hover:scale-105 transition-transform"
        >
          <div className="h-80 w-full overflow-hidden flex justify-center items-center bg-dark/60">
            <img
              src={mestres[0].imagem}
              alt={mestres[0].nome}
              className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-gold mb-3">{mestres[0].nome}</h3>
            <ReadMore text={mestres[0].descricao} fullText={mestres[0].textoCompleto} />
          </div>
        </motion.div>

        {/* Mestre Beiramar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16 bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gold/30 hover:scale-105 transition-transform"
        >
          <div className="h-80 w-full overflow-hidden flex justify-center items-center bg-dark/60">
            <img
              src={mestres[1].imagem}
              alt={mestres[1].nome}
              className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-gold mb-3">{mestres[1].nome}</h3>
            <p className="text-gray-200 text-base leading-relaxed">{mestres[1].descricao}</p>
          </div>
        </motion.div>

        {/* Professores e Graduados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mb-16">
          {mestres.slice(2).map((mestre, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gold/20 hover:scale-105 transition-transform"
            >
              <div className="h-72 w-full overflow-hidden flex justify-center items-center bg-dark/60">
                <img
                  src={mestre.imagem}
                  alt={mestre.nome}
                  className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gold mb-2">{mestre.nome}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{mestre.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alunos */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-gold"
        >
          Alunos
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {alunos.map((aluno, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-gold/20 hover:scale-105 transition-transform"
            >
              <div className="h-60 w-full overflow-hidden flex justify-center items-center bg-dark/60">
                <img
                  src={aluno.imagem}
                  alt={aluno.nome}
                  className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h4 className="text-xl font-semibold text-gold mb-2">{aluno.nome}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{aluno.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
