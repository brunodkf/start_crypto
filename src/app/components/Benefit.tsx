import Image from 'next/image'
import React from 'react'

const Benefit = () => {

    const benefitList = [
        "Conteúdo acessível para iniciantes.",
        "Passo a passo para criar sua conta em corretoras.",
        "Dicas de segurança e melhores práticas.",
        "Acesso vitalício ao material."
    ]

    return (
        <section className='benefits w-full mt-30 relative flex'>

            <Image src='/waves2.png' alt="Logo Image" className=" absolute w-full h-full -z-0 " width={1500} height={500} />

            <div className="container m-auto flex items-center justify-around flex-wrap">
                <div className="w-1/2">
                    <h2 className='font-exo2 text-3xl'>
                        Por que aprender com a gente ?
                    </h2>

                    
                    <ul className='benefits__list'>
                        {
                            benefitList.map((item, index) => (
                                <li key={index} className='benefits__list--item relative  mt-8 py-3 bg-gradient-to-r from-gray-800'>
                                    <p className='pl-3'>{item}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <Image src='/bitcoinGold.webp' alt="Logo Image" className="w-1/3 -z-0 opacity-80 " width={1500} height={500} />
            </div>
        </section>
    )
}

export default Benefit