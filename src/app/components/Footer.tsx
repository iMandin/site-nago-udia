"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/animations";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-dark py-8 border-t border-gold text-center space-y-5">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          className="text-gray-400"
        >
          © {new Date().getFullYear()} Grupo Nagô Capoeira Uberlândia — Todos os direitos reservados.
        </motion.p>

        {/* Links empilhados */}
        <div className="flex flex-col items-center space-y-2">
          <motion.button
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            onClick={() => setPrivacyOpen(true)}
            className="text-gold hover:text-white transition-colors duration-300 underline"
          >
            Política de Privacidade
          </motion.button>
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
        </div>
      </footer>

      {/* Modal de Política de Privacidade */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-dark text-gray-100 rounded-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[80vh]"
          >
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-yellow-500 hover:text-white transition-colors"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-gold mb-4">Política de Privacidade</h2>

            <p className="mb-4">
              Esta Política de Privacidade descreve como o <strong>Grupo Nagô Capoeira Uberlândia</strong> coleta, utiliza, armazena e protege os dados pessoais de usuários do site.
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">1. Dados Coletados</h3>
            <p className="mb-4">
              Coletamos apenas os dados fornecidos voluntariamente pelos usuários através do formulário de contato: <strong>nome, email e mensagem</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">2. Finalidade da Coleta</h3>
            <p className="mb-4">
              Os dados são utilizados exclusivamente para responder às mensagens enviadas pelos usuários. Não compartilhamos, vendemos ou cedemos informações a terceiros.
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">3. Base Legal</h3>
            <p className="mb-4">
              A coleta de dados é realizada com base no <strong>consentimento do usuário</strong>, conforme previsto na Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">4. Armazenamento</h3>
            <p className="mb-4">
              Os dados são armazenados de forma segura e serão mantidos enquanto necessários para responder ao contato ou conforme exigido por lei. Os usuários podem solicitar a exclusão dos seus dados a qualquer momento.
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">5. Direitos dos Usuários</h3>
            <p className="mb-4">
              Você tem direito de acessar, corrigir, excluir ou revogar o consentimento para o tratamento dos seus dados. Para exercer seus direitos, entre em contato através do email: <strong>capoeiranagoudia@gmail.com</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">6. Cookies e Tecnologias de Rastreamento</h3>
            <p className="mb-4">
              Este site não utiliza cookies para fins de rastreamento ou publicidade. Caso utilize ferramentas de analytics ou pixels no futuro, esta política será atualizada.
            </p>

            <h3 className="text-xl font-semibold text-gold mb-2">7. Alterações na Política</h3>
            <p className="mb-4">
              Podemos atualizar esta política periodicamente. Recomendamos que consulte esta página regularmente para se manter informado sobre como protegemos seus dados.
            </p>

            <p className="text-gray-400 text-sm mt-6">
              Última atualização: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}
