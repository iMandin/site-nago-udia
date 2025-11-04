"use client";

export default function ConhecaOsMovimentos() {
  return (
    <section className="py-24 bg-black text-center px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-8">
        Conheça os Movimentos
      </h2>

      <audio controls className="mx-auto mb-8 max-w-md sm:max-w-lg">
        <source src="/audios/O_Nome_do_Meu_Povo.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <div className="mx-auto w-full max-w-4xl aspect-[16/9] rounded-xl border border-gold overflow-hidden">
        <iframe
          src="/capoeira-animation/index.html"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </section>
  );
}
