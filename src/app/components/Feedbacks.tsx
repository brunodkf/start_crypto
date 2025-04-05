import React from 'react'
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Carrousel from './Carrousel';

const testimonials = [
  {
    name: "Ana Souza",
    text: "O curso do professor Rodrigo foi um divisor de águas para mim. Em poucas semanas, compreendi os fundamentos das criptomoedas e já iniciei meus investimentos com confiança.",
  },
  {
    name: "Carlos Lima",
    text: "Graças às aulas claras e objetivas do Rodrigo, consegui entender o mercado de criptomoedas e identificar boas oportunidades de investimento."
  },
  {
    name: "Mariana Oliveira",
    text: "O professor Rodrigo tornou simples um assunto complexo. Agora, me sinto preparado para explorar o universo das criptomoedas e expandir meu portfólio."
  },
  {
    name: "Mariana Oliveira",
    text: "O professor Rodrigo tornou simples um assunto complexo. Agora, me sinto preparado para explorar o universo das criptomoedas e expandir meu portfólio."
  }
]

const Feedbacks = () => {
  return (
    <section className='w-full h-svh relative mt-40'>
        <ParticlesBackground/>
        <div className="container text-center m-auto pt-10">
            <h2 className='font-exo2 text-3xl'>O que nossos alunos dizem</h2>

            <Carrousel depoimentos={testimonials}/>
        </div>
    </section>
  )
}

export default Feedbacks