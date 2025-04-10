"use client"

import React from 'react'
import Image from 'next/image';


import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from 'next/link';
import { useSmoothScroll } from '../hooks/useSmothScroll';

export const Banner = () => {

    const scrollToSection = useSmoothScroll(-120);

    return (
        <section className='banner relative w-full h-svh flex flex-col ' id='home'>

            <Image src='/group1.png' alt="Logo Image" className=" absolute w-full h-full -z-0 " width={1500} height={500} />

            <div className="container relative m-auto flex items-center justify-between z-0 p-2">
              
                <div
                    className="w-full pb-10 text-center"
                >
                    <h1 className='font-exo2 text-[3em] leading-12'>
                        Comece Sua Jornada nas Criptomoedas
                    </h1>

                    <p className='py-4 w-2/3 m-auto'>
                        Aprenda os conceitos essenciais, descubra as melhores práticas de segurança e dê os primeiros passos para investir com confiança no mercado de criptomoedas.
                    </p>

                    <Link href={"#"} onClick={(e) => scrollToSection(e, `cta`)} className='bg-verde p-2 px-6 rounded text-branco hover:bg-green-800'>
                        Inscreva-se Já!
                    </Link>
                </div>

            </div>

            <div className="flex items-center justify-center absolute bottom-12 w-full">
                <Link href={"#"} onClick={(e) => scrollToSection(e, `coins`)}>
                    <HiOutlineChevronDoubleDown className='text-4xl border p-2 rounded-full' />
                </Link>
            </div>

        </section>
    )
}
