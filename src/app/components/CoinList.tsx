"use client"
import React from 'react'
import { useCrypto } from '../context/CriptoContext';
import { motion } from 'framer-motion';
import { IoMdTrendingDown } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import Image from 'next/image';

const CoinList = () => {
    const { cryptos, isLoading } = useCrypto();

    if (isLoading) return <div>Carregando...</div>;

    const formatCurrency = (value: number, locale: string = 'en-US', currency: string = 'USD'): string => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).format(value);
    };

    return (
        <section className="" id='coins'>
            <div className="container flex justify-between flex-col lg:flex-row m-auto gap-6">
                {
                    cryptos.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, margin: "-100px" }}
                            key={index}
                            className='lg:w-full lg:max-w-[300px] flex flex-col items-center p-2 mx-2 lg:mx-0 rounded-xl glass'
                        >
                            <div className=" w-full flex items-center justify-between cardCoin relative">
                                <div className="flex items-center">
                                    <Image src={item.image} alt="Logo Image" className="max-w-[42px] h-fit" width={500} height={500} />
                                    <p className='uppercase ml-2 text-white'> {item.symbol}</p>
                                    <p className='bg-gray-400 text-preto text-[12px] font-bold px-1 ml-2 rounded'> {item.id}</p>
                                </div>
                                <p className='text-sm ml-2 opacity-50'>24h</p>
                            </div>

                            <div className="w-full mt-3 flex items-center justify-between">
                                <div className="">
                                    <p className='text-2xl'>{formatCurrency(item.current_price)}</p>
                                    <p>{`${(item.price_change_percentage_24h).toFixed(2)} %`}</p>
                                </div>

                                {
                                    item.price_change_percentage_24h >= 0 ? <IoMdTrendingUp className='text-green-400 text-4xl' /> : <IoMdTrendingDown className='text-red-600 text-4xl' />
                                }
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>

    )
}

export default CoinList