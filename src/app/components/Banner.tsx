"use client"

import React from 'react'
import Image from 'next/image';

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from 'next/link';
import { useSmoothScroll } from '../hooks/useSmothScroll';

export const Banner = () => {

    const scrollToSection = useSmoothScroll(-120);

    return (
        <section className='banner relative w-full flex flex-col' id='home'>
            {/* <section className='banner relative w-full flex items-center' id='home'> */}

            <Image src='/group1.webp' alt="Logo Image" className="absolute w-full h-full -z-0  " width={1500} height={500} priority />

            {/* <Image src='/bg2.png' alt="Logo Image" className="absolute w-full h-full -z-0  " width={1500} height={1500} priority/> */}

            <div className="w-2/2 h-1/2 absolute bottom-0 bg-gradient-to-t from-[#04152B] to-transparent"></div>

            <div className="container relative flex flex-col lg:flex-row m-auto pt-[20%] mt-15 sm:mt-0 xl:pt-[8%] items-center justify-between z-0 p-2">

                <div className="w-full pb-10 md:flex flex-col items-center lg:items-start" >

                    <h1 className='font-exo2 text-center text-[2.5em] lg:text-start lg:text-[4em] font-semibold leading-12 lg:leading-16'>
                        Comece Sua Jornada nas <span className='text-yellow-500'>Criptomoedas</span> 
                    </h1>

                    <p className="py-10 lg:py-8 max-w-2xl w-full min-h-[100px] text-center lg:text-start">
                        Aprenda os conceitos essenciais, descubra as melhores práticas de segurança e dê os primeiros passos para investir com confiança no mercado de criptomoedas.
                    </p>

                    <div className="flex flex-col text-center md:flex-row gap-5">
                        <Link
                            href="#"
                            onClick={(e) => scrollToSection(e, `price`)}
                            className="bg-green-800 p-4 px-20 lg:p-4 lg:px-10 rounded text-white text-sm uppercase font-semibold tracking-wider transition-all hover:bg-green-900 hover:scale-105 hover:shadow-lg"
                        >
                            compre agora 
                        </Link>

                        <Link
                            href="#"
                            onClick={(e) => scrollToSection(e, `about`)}
                            className="border p-4 px-20 lg:p-4 lg:px-10 rounded text-white text-sm uppercase font-semibold tracking-wider transition-all hover:border-verde hover:text-green-400 hover:scale-105 hover:shadow-lg"
                        >
                           saiba mais
                        </Link>
                    </div>

                </div>

                <Image src='/teste3.webp' alt="Hero Image" className="w-4/4 lg:w-2/4" width={1500} height={500} priority />

            </div>

            <div className="hidden lg:flex items-center justify-center absolute bottom-12 w-full ">
                <Link href={"#"} onClick={(e) => scrollToSection(e, `coins`)}>
                    <HiOutlineChevronDoubleDown className='text-4xl border p-2 rounded-full' />
                </Link>
            </div>

        </section>
    )
}
