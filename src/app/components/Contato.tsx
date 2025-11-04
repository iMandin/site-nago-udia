"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp } from "@/app/utils/animations";
import { useForm, ValidationError } from "@formspree/react";

export default function Contato() {
  const [state, handleSubmit] = useForm("xdkwljre"); 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 4000);
    }
  }, [state.succeeded]);

  return (
    <section id="contato" className="py-24 bg-dark relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gold mb-8"
        >
          Fale Conosco
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="p-3 rounded-md bg-black border border-greenCapoeira focus:outline-none"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="p-3 rounded-md bg-black border border-greenCapoeira focus:outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Sua mensagem"
            rows={5}
            required
            className="p-3 rounded-md bg-black border border-greenCapoeira focus:outline-none"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-greenCapoeira text-black font-semibold py-3 rounded-md hover:bg-gold transition"
          >
            {state.submitting ? "Enviando..." : "Enviar"}
          </button>
        </motion.form>

        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-dark text-gold p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg font-semibold">
                Mensagem enviada com sucesso! 🎉
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
