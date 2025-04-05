"use client"

import React from 'react'
import { Navbar } from './Navbar'
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Image from 'next/image';
import CoinList from './CoinList';

import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export const Banner = () => {


    return (
        <section className='banner relative w-full h-svh flex flex-col '>

            <Image src='/group1.png' alt="Logo Image" className=" absolute w-full h-full -z-0 " width={1500} height={500} />

            <div className="container relative m-auto flex items-center justify-between z-0 p-2">
                {/* <div className="w-1/2 pb-10"> */}
                <div className="w-full pb-10 text-center">
                    <h1 className='font-exo2 text-[3em] leading-12'>Comece Sua Jornada nas Criptomoedas</h1>
                    <p className='py-4 w-2/3 m-auto'>Aprenda os conceitos essenciais, descubra as melhores práticas de segurança e dê os primeiros passos para investir com confiança no mercado de criptomoedas.</p>
                    <button className='bg-verde p-2 px-6 rounded text-branco'>Inscreva-se Já!</button>
                </div>
                {/* <Image src='/crypto_banner.png' alt="Logo Image" className="w-1/2 mt-3" width={500} height={500} /> */}
                {/* <Image src='/' alt="Logo Image" className="w-1/2" width={500} height={500} /> */}
            </div>

            <div className="flex items-center justify-center absolute bottom-12 w-full">
                <HiOutlineChevronDoubleDown className='text-4xl border p-2 rounded-full'/>
            </div>

            {/* <CoinList /> */}
        </section>
    )
}
