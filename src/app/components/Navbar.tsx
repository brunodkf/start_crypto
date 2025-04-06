"use client"

import Image from 'next/image'
import Link from 'next/link'

interface ItemMenu {
    name: string,
    link: string
}


export const Navbar = () => {

    const handleScroll = (e: React.MouseEvent, sectionId: string): void => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };


    const menuItems: ItemMenu[] = [
        {
            name: 'Início',
            link: 'home'
        },
        {
            name: 'Benefícios',
            link: 'benefit'
        },
        {
            name: 'Sobre',
            link: 'about'
        },
        {
            name: 'Depoimentos',
            link: 'feedbacks'
        },
    ]


    return (
        <nav className='w-full p-4 absolute z-50'>
            <div className="container flex items-center justify-between m-auto">

                <div className="flex items-center">
                    <Image src='/logo.webp' alt="Logo Image" className="max-w-16 brightness-0 dark:filter-none" width={100} height={50} />
                    <p className='text-branco font-exo2 font-bold text-2xl'>StartCrypto</p>
                </div>


                <ul className='hidden lg:flex items-center gap-6 text-sm tracking-wide font-semibold'>
                    {
                        menuItems.map((item, index) => (
                            <li key={index} >
                                <Link href={item.link} onClick={(e) => handleScroll(e, `${item.link}`)}>{item.name}</Link>
                            </li>
                        ))
                    }

                    <Link href={"#"} className='bg-verde p-2 rounded text-branco'> Inscreva-se Já!</Link>
                </ul>
            </div>
        </nav>
    )
}
