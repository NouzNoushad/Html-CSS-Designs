import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';

export default function CategoriesSection() {
    return (
        <div className="max-w-[1150px] mx-auto xl:px-0 px-5 py-5 relative">
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='flex flex-col items-center relative'>
                    <img src="../src/assets/img/categories/cat-1.jpg" alt="" className='w-full h-full bg-cover' />
                    <h5 className='absolute bottom-0 left-0 flex items-center justify-center bg-white mx-[10px] my-[10px] sm:mx-[20px] sm:my-[20px] py-[10px] px-[10px] uppercase font-bold tracking-[2px] text-[0.8rem] sm:text-[1.1rem] w-[calc(100%-20px)] sm:w-[calc(100%-40px)]'><a href="#">Fresh Fruit</a></h5>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center relative'>
                    <img src="../src/assets/img/categories/cat-2.jpg" alt="" className='w-full h-full bg-cover' />
                    <h5 className='absolute bottom-0 left-0 flex items-center justify-center bg-white mx-[10px] my-[10px] sm:mx-[20px] sm:my-[20px] py-[10px] px-[10px] uppercase font-bold tracking-[2px] text-[0.8rem] sm:text-[1.1rem] w-[calc(100%-20px)] sm:w-[calc(100%-40px)]'><a href="#">Dried Fruit</a></h5>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center relative'>
                    <img src="../src/assets/img/categories/cat-3.jpg" alt="" className='w-full h-full bg-cover' />
                    <h5 className='absolute bottom-0 left-0 flex items-center justify-center bg-white mx-[10px] my-[10px] sm:mx-[20px] sm:my-[20px] py-[10px] px-[10px] uppercase font-bold tracking-[2px] text-[0.8rem] sm:text-[1.1rem] w-[calc(100%-20px)] sm:w-[calc(100%-40px)]'><a href="#">Vegetables</a></h5>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center relative'>
                    <img src="../src/assets/img/categories/cat-4.jpg" alt="" className='w-full h-full bg-cover' />
                    <h5 className='absolute bottom-0 left-0 flex items-center justify-center bg-white mx-[10px] my-[10px] sm:mx-[20px] sm:my-[20px] py-[10px] px-[10px] uppercase font-bold tracking-[2px] text-[0.8rem] sm:text-[1.1rem] w-[calc(100%-20px)] sm:w-[calc(100%-40px)]'><a href="#">Drink Fruit</a></h5>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col items-center relative'>
                    <img src="../src/assets/img/categories/cat-5.jpg" alt="" className='w-full h-full bg-cover' />
                    <h5 className='absolute bottom-0 left-0 flex items-center justify-center bg-white mx-[10px] my-[10px] sm:mx-[20px] sm:my-[20px] py-[10px] px-[10px] uppercase font-bold tracking-[2px] text-[0.8rem] sm:text-[1.1rem] w-[calc(100%-20px)] sm:w-[calc(100%-40px)]'><a href="#">Meat</a></h5>
                </SwiperSlide>
                <div className='swiper-button-prev absolute top-[40%] left-0 z-50 border border-gray-200 px-[15px] py-[40px] text-[0.5rem]'></div>
                <div className='swiper-button-next absolute top-[40%] right-0 z-50 border border-gray-200 px-[15px] py-[40px]'></div>
            </Swiper>
        </div>
    )
}
