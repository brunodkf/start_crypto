"use client"

import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <section className='about w-full lg:h-svh lg:max-h-[636px]' id='about'>
            <div className="container m-auto w-full h-full flex flex-col-reverse justify-around lg:flex-row items-center gap-20 md:gap-3 ">
                <div className="relative w-3/4 lg:w-1/2 flex items-center justify-center">
                    <Image src='/esfera2.webp' alt="Logo Image" className="opacity-60 absolute -z-0" width={500} height={500} />
                    <Image src='/rage.webp' alt="Logo Image" className="z-10" width={500} height={500} />
                </div>
                <div className="lg:w-1/2 text-center lg:text-start flex flex-col gap-4">
                    <h2 className='font-exo2 text-4xl mb-3 text-yellow-300'>Sobre o Curso</h2>
                    <p>Este curso foi criado para quem quer começar no mercado de criptomoedas da forma mais simples e prática possível.</p>
                    <p>Você vai aprender, passo a passo, tudo o que precisa para dar seus primeiros passos com segurança: como criar conta em corretoras, fazer depósitos, comprar e vender criptomoedas, sacar para sua conta bancária e até realizar transferências entre diferentes corretoras.</p>
                    <p>Além disso, o curso também te ajuda a entender como escolher as melhores criptomoedas para investir, evitando erros comuns de quem está começando.</p>
                    <p>É um conteúdo direto ao ponto, pensado para iniciantes que querem entrar no mercado cripto com clareza e confiança.</p>
                </div>
            </div>
    
        </section>
    )
}

export default About