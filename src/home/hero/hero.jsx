import React from "react";
import hero from "../../assets/hero.svg"
import hero1 from "../../assets/hero1.svg"
import hero2 from "../../assets/hero2.svg"
import hero3 from "../../assets/hero3.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export const Hero = () => {
    return (
        <div className='hero flex relative mt-[20px] bg-[#F2F0FF]'>
            <div className="hero-left absolute top-0 left-[-100px]">
                <img src={hero1} alt="" />
            </div>
            
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-[1180px] mx-auto absolute">

                <SwiperSlide className='mySlides  w-[10%] bg-cover bg-center h-[400px]'>
                    <img src={hero} alt="" className="w-[30%]" />
                </SwiperSlide>
                <SwiperSlide className='mySlides  w-[10%] bg-cover bg-center h-[400px]'>
                    <img src={hero2} alt="" className="w-[30%]" />
                </SwiperSlide>
                <SwiperSlide className='mySlides flex items-center bg-cover bg-center h-[400px]'>
                    <img src={hero3} alt="" className="w-[35%]" />
                </SwiperSlide>

            </Swiper>
            
        </div>
    )
}
