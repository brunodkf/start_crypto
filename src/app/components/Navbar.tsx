"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useSmoothScroll } from '../hooks/useSmothScroll'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

import { motion } from 'framer-motion';

interface ItemMenu {
    name: string,
    link: string
}


export const Navbar = () => {

    const scrollToSection = useSmoothScroll(-60);


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

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)

    return (
        <nav className='w-full p-4 absolute z-50'>
            <div className="container flex items-center justify-between m-auto">

                <div className="flex items-center z-10">
                    <Image src='/logo.webp' alt="Logo Image" className="max-w-16 brightness-0 dark:filter-none" width={100} height={50} />
                    <p className='text-branco font-exo2 font-bold text-2xl'>StartCrypto</p>
                </div>


                <ul className='hidden lg:flex items-center gap-6 text-sm tracking-wide font-semibold'>
                    {
                        menuItems.map((item, index) => (
                            <li key={index} >
                                <Link href={item.link} onClick={(e) => scrollToSection(e, `${item.link}`)}>{item.name}</Link>
                            </li>
                        ))
                    }

                    <Link href={"#"} onClick={(e) => scrollToSection(e, `cta`)} className='bg-verde p-2 rounded text-branco hover:bg-green-800'> Inscreva-se Já!</Link>
                </ul>

                <FiMenu className='lg:hidden text-verde text-4xl cursor-pointer z-50' aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} />

                <motion.div
                    className={`fixed top-0 right-0 w-full h-screen dark:text-branco bg-[#01080e]
                        transform ${isOpen ? "-translate-x-0" : "translate-x-full"}
                        transition-transform duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium">
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="relative group"
                            >
                                <Link href={item.link} aria-label={`Ir para ${item.name}`} className='uppercase'
                                    onClick={(e) => {
                                        scrollToSection(e, `${item.link}`);
                                        setIsOpen(false)
                                    }} >
                                    {item.name}
                                </Link>

                            </motion.li>
                        ))}

                        <Link href={"#"} onClick={(e) => {
                            scrollToSection(e, `cta`);
                            setIsOpen(false)
                        }} className='bg-verde p-4 px-20 mt-6 rounded text-branco hover:bg-green-800'> Inscreva-se Já!</Link>
                    </ul>
                </motion.div>
            </div>
        </nav>
    )
}
