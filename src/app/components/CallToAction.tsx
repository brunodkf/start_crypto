import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FiTarget } from "react-icons/fi";
import { PiMedalLight } from "react-icons/pi";

const CallToAction = () => {
    return (
        <section className='calltoaction relative w-full h-svh flex flex-col items-center justify-center mt-8' id='cta'>

            <Image src='/group1.webp' alt="Logo Image" className=" absolute w-full h-2/3 -z-0 " width={1500} height={500} />

            <div className="container m-auto w-full text-center z-10">

                <h2 className='font-exo2 text-5xl font-semibold'>Sua <span className='text-yellow-300'>Liberdade Financeira</span>  começa AGORA!</h2>

                <p className='m-auto py-8 text-lg lg:w-2/3'>Não deixe para amanhã a decisão que pode mudar sua vida para sempre. <br /> <b>Centenas já transformaram suas vidas</b>  - agora é a SUA vez!</p>

                <div className="lg:w-3/4 m-auto py-10">

                    <ul className='flex justify-evenly items-center p-4 mb-10'>
                        
                        <li className='flex flex-col items-center gap-3'>
                            <FiTarget className='text-3xl lg:text-5xl text-yellow-300' />
                            <h3 className='lg:text-xl font-semibold '>Método Comprovado</h3>
                        </li>

                        <li className='flex flex-col items-center gap-3'>
                            <PiMedalLight className='text-3xl lg:text-5xl text-yellow-300'/>
                            <h3 className='lg:text-xl font-semibold '>Acesso vitalício</h3>
                        </li>

                        <li className='flex flex-col items-center gap-3'>
                            <p className='text-3xl lg:text-5xl text-yellow-300'>$</p>
                            <h3 className='lg:text-xl font-semibold '>Resultados Garantidos</h3>
                        </li>
                    </ul>

                    <Link href={"https://pay.kiwify.com.br/VcRA5uz"}            
                    className=" bg-yellow-400 w-8/9 lg:w-1/2 inline-block py-3  text-[#0d1b2a] font-semibold  rounded-lg text-lg tracking-wide hover:bg-yellow-300 transition-all shadow-md">
                          Quero começar agora mesmo!
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default CallToAction