"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

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
            className="w-full h-full mt-30">

            {
                depoimentos ? depoimentos.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-60 glass mb-4 p-4 flex flex-col items-center justify-center text-white rounded-xl shadow-lg">
                        <div className="">
                            <h3 className="text-2xl font-title text-laranja">
                                {item.name}
                            </h3>
                            <p className="font-title text-laranja">{item.text}</p>
                        </div>
                    </SwiperSlide>
                )) : null
            }

        </Swiper>
    )
}

export default Carrousel