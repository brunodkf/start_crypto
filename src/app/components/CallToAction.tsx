import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
    return (
        <section className='calltoaction relative w-full h-svh max-h-[536px] flex flex-col items-center justify-center' id='cta'>
            <Image src='/group1.webp' alt="Logo Image" className=" absolute w-full h-2/3 -z-0 " width={1500} height={500} />
            <div className="container m-auto w-full text-center z-10">
                <h2 className='font-exo2 text-3xl'>Dê o Primeiro Passo Rumo à Liberdade Financeira !</h2>
                <p className='m-auto py-8'>Aprenda a investir com segurança e confiança no mercado de criptomoedas – mesmo começando do zero.</p>

                <Link href={"https://sun.eduzz.com/R9JJE8G89X"} className='bg-verde p-3 px-8 rounded text-branco hover:bg-green-800'>
                    Comece Agora – Inscreva-se Já!
                </Link>
            </div>
        </section>
    )
}

export default CallToAction