"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

import { FaQuoteRight } from "react-icons/fa6";

interface Depoimento {
    name: string;
    text: string;
}

type DepoimentosProps = {
    depoimentos: Depoimento[]
}


export function Carrousel({ depoimentos }: DepoimentosProps) {

    console.log(depoimentos);

    return (
        <Swiper
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}

            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            className="testimonials w-full h-full mt-15 pt-12">

            {/* glass */}
            {
                depoimentos ? depoimentos.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-60 mb-4 p-4 flex flex-col items-center justify-center text-white rounded-xl shadow-lg">

                        <FaQuoteRight className="absolute -z-10 text-9xl right-2 opacity-10" />

                        <div className="text-start">
                            <h3 className="text-2xl font-exo2 font-semibold tracking-wide mb-2">
                                {item.name}
                            </h3>
                            <blockquote>
                                {item.text}
                            </blockquote>
                        </div>
                    </SwiperSlide>
                )) : null
            }

        </Swiper>
    )
}

export default Carrousel