"use client";

export default function ConhecaOsMovimentos() {
  return (
    <section className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold text-gold mb-8">
        Conheça os Movimentos
      </h2>

      <audio controls className="mx-auto mb-8">
        <source src="/audios/O_Nome_do_Meu_Povo.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <div className="w-[800px] h-[500px] mx-auto rounded-xl border border-gold overflow-hidden">
        <iframe
          src="/capoeira-girl/index.html"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </section>
  );
}
