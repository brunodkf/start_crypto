import Link from "next/link";

export const Price = () => {
  return (
    <section className="w-full py-24 text-white" >
      <div className="container mx-auto max-w-3xl px-6 text-center">

        <span className="inline-block bg-gradient-to-r from-verde to-azul/80 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-6 shadow-lg backdrop-blur-sm">
          ⌚ Oferta Limitada
        </span>

        <h2 className="font-exo2 text-4xl md:text-5xl font-bold uppercase text-white mb-3 leading-tight" id="price">
          Não perca a oportunidade!
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-10">
          A jornada da sua vida começa agora !
        </p>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-10 shadow-2xl" >
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold uppercase px-4 py-1 rounded-full shadow-md">
            75% de desconto
          </span>

          <p className="text-gray-400 line-through text-sm mt-6">De R$ 599,00</p>
          <p className="uppercase text-sm text-gray-300">Por apenas</p>

          <p className="text-6xl font-bold text-yellow-400 my-4">R$ 147</p>

          <ul className="text-sm text-gray-200 space-y-1 mb-6">
            <li>✔️ Acesso vitalício</li>
            <li>✔️ Sem mensalidades</li>
            <li>✔️ Resultado Garantido</li>
          </ul>

          <Link href={"https://pay.kiwify.com.br/VcRA5uz"}
              className="inline-block w-full bg-yellow-400 text-[#0d1b2a] font-semibold py-3 rounded-lg text-lg tracking-wide hover:bg-yellow-300 transition-all shadow-md">
            Quero começar agora mesmo!
          </Link>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-400 mt-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Compra 100% segura
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Garantia de 7 dias
            </span>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-300 mb-3">Formas de pagamento aceitas:</p>
          <ul className="flex justify-center gap-4 text-sm">
            <li className="bg-white/10 px-4 py-2 rounded-md shadow-inner hover:bg-white/20 transition-all">Cartão</li>
            <li className="bg-white/10 px-4 py-2 rounded-md shadow-inner hover:bg-white/20 transition-all">PIX</li>
            <li className="bg-white/10 px-4 py-2 rounded-md shadow-inner hover:bg-white/20 transition-all">Boleto</li>
          </ul>
        </div>

        <p className="text-red-300 text-xs bg-red-900/30 border border-red-600 rounded-md py-3 px-4 mt-8">
          ⚠️ Esta oferta especial é válida apenas por tempo limitado. Garanta já sua vaga com desconto exclusivo!
        </p>
      </div>
    </section>
  );
};
