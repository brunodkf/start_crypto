'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

const Benefit = () => {

    const benefitList = [
        "Como abrir sua conta em uma corretora confiável e começar com segurança.",
        "Como funciona o mercado de criptomoedas e por que ele é tão promissor.",
        "O método que permite lucrar tanto na alta quanto na queda das moedas.",
        "Como investir com pouco (a partir de R$100) sem cair em armadilhas comuns.",
        "Como identificar as principais oportunidades e saber a hora certa de agir.",
        "O passo a passo pra transformar esse conhecimento em uma nova fonte de renda.",
    ]

    return (
        <section className='benefits w-full mt-30 relative flex' id='benefit'>

            <Image src='/waves2.webp' alt="Logo Image" className=" absolute w-full h-full -z-0 " width={1500} height={500} />

            <div className="container m-auto flex flex-col lg:flex-row items-center justify-around flex-wrap">
                <div className="w-7/8 lg:w-1/2">

                    <p className='text-yellow-300 uppercase font-semibold tracking-wider'>O que você vai aprender</p>

                    <h2 className='font-exo2 text-3xl'>
                        Mesmo que você nunca tenha investido antes, em poucas horas você entende:
                    </h2>

                    <ul className='benefits__list overflow-clip'>
                        {
                            benefitList.map((item, index) => (
                                <motion.li
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    key={index} className='benefits__list--item relative  mt-6 py-3 bg-gradient-to-r from-gray-800'>
                                    <p className='pl-3'>{item}</p>
                                </motion.li>
                            ))
                        }
                    </ul>

                    <p className='flex items-center uppercase text-sm gap-1 mt-4'><FaWhatsapp className='text-green-500' /> Suporte individual via whatsapp ! ! !</p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="mt-4 sm:w-1/2 lg:mt-0 lg:w-1/3 -z-0 opacity-80 ">

                    <Image src='/benefitHero.webp' alt="Logo Image" width={1500} height={500} />
                    {/* <Image src='/bitcoinGold.webp' alt="Logo Image" width={1500} height={500} /> */}
                </motion.div>

            </div>
        </section>
    )
}

export default Benefit