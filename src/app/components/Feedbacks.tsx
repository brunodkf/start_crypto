import React from 'react'
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Carrousel from './Carrousel';

const testimonials = [
  {
    name: "Ana Souza",
    role: "Empreendedora Digital",
    text: "O curso foi um divisor de águas para mim. Em poucas semanas, compreendi os fundamentos das criptomoedas e já iniciei meus investimentos com confiança.",
  },
  {
    name: "Carlos Lima",
    role: "Analista Financeiro",
    text: "Graças às aulas claras e objetivas do Rodrigo, consegui entender o mercado de criptomoedas e identificar boas oportunidades de investimento."
  },
  {
    name: "Mariana Oliveira",
    role: "Consultora de Negócios",
    text: "O professor Rodrigo tornou simples um assunto complexo. Agora, me sinto preparado para explorar o universo das criptomoedas e expandir meu portfólio."
  },
  {
    name: "Ricardo Mendes",
    role: "Investidor Iniciante",
    text: "Nunca imaginei que entender criptomoedas seria tão acessível. O Rodrigo explica tudo de forma didática e prática."
  }
]

const Feedbacks = () => {
  return (
    <section className='w-full h-auto relative mt-20 py-20' id='feedbacks'>

      <ParticlesBackground />

      <div className="container text-center m-auto ">

        <h2 className='font-exo2 text-4xl text-yellow-300 font-semibold'>O que nossos alunos dizem</h2>

        <p className='mt-3'>Descubra como nosso curso transformou a vida financeira de centenas de pessoas</p>

        <Carrousel depoimentos={testimonials} />

      </div>

      
    </section>
  )
}

export default Feedbacks