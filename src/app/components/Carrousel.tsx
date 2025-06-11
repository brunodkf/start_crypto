"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

import { FaQuoteRight } from "react-icons/fa6";
import { MdOutlineFormatQuote } from "react-icons/md";

interface Depoimento {
    name: string;
    role: string;
    text: string;
}

type DepoimentosProps = {
    depoimentos: Depoimento[];
};

export function Carrousel({ depoimentos }: DepoimentosProps) {
    return (
        <Swiper
            // effect={'coverflow'}
            // coverflowEffect={{
            //     rotate: 50,
            //     stretch: 0,
            //     depth: 100,
            //     modifier: 1,
            //     slideShadows: true,
            // }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            className="testimonials w-full h-full mt-5 pt-12"
        >
            {depoimentos.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className="w-full min-h-[320px] mb-4 p-4 flex flex-col items-center  text-start text-white rounded-xl shadow-lg relative "
                >

                    <MdOutlineFormatQuote className='text-yellow-300 text-6xl' />

                    <p>⭐⭐⭐⭐⭐</p>

                    <blockquote className='text-base py-4'>" {item.text} "</blockquote>

                    <div className=' flex items-center gap-4'>
                        <div className="bg-amarelo p-2 px-3 rounded-4xl">
                            <h3 className='text-2xl font-extrabold uppercase'>{item.name[0]}</h3>
                        </div>

                        <div className="">
                            <h3 className="text-2xl font-exo2 font-semibold tracking-wide">
                                {item.name}
                            </h3>
                            <p> {item.role}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carrousel;
