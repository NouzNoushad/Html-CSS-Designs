import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';

export default function LatestProducts() {
    return (
        <section className='py-[4rem]'>
            <div className="max-w-[1150px] mx-auto xl:px-0 px-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="">
                        <div className="mb-[2rem] flex flex-row items-center justify-between">
                            <h3 className='font-bold text-[1.5rem]'>Latest Products</h3>
                            <div className="flex flex-row gap-[10px]">
                                <div className='border border-gray-200 text-[0.9rem] bg-[#F3F6FA] h-[30px] w-[30px] flex items-center justify-center text-gray-400'>
                                    <i class="fa-solid fa-arrow-left"></i>
                                </div>
                                <div className='z-50 border border-gray-200 px-[10px] py-[5px] text-[0.9rem] bg-[#F3F6FA] h-[30px] w-[30px] flex items-center justify-center text-gray-400'>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
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
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                            <SwiperSlide className='space-y-[20px]'>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-1.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-2.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-3.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='space-y-[20px]'>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-1.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-2.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-3.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="">
                        <div className="mb-[2rem] flex flex-row items-center justify-between">
                            <h3 className='font-bold text-[1.5rem]'>Top Rated Products</h3>
                            <div className="flex flex-row gap-[10px]">
                                <div className='border border-gray-200 text-[0.9rem] bg-[#F3F6FA] h-[30px] w-[30px] flex items-center justify-center text-gray-400'>
                                    <i class="fa-solid fa-arrow-left"></i>
                                </div>
                                <div className='z-50 border border-gray-200 px-[10px] py-[5px] text-[0.9rem] bg-[#F3F6FA] h-[30px] w-[30px] flex items-center justify-center text-gray-400'>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
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
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                            <SwiperSlide className='space-y-[20px]'>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-1.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-2.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-3.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='space-y-[20px]'>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-1.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-2.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-3.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="">
                        <div className="mb-[2rem] flex flex-row items-center justify-between">
                            <h3 className='font-bold text-[1.5rem]'>Review Products</h3>
                            <div className="flex flex-row gap-[10px]">
                                <div className='border border-gray-200 text-[0.9rem] bg-[#F3F6FA] h-[30px] w-[30px] flex items-center justify-center text-gray-400'>
                                    <i class="fa-solid fa-arrow-left"></i>
                                </div>
                                <div className='z-50 border border-gray-200 px-[10px] py-[5px] text-[0.9rem] bg-[#F3F6FA] h-[30px] w-[30px] flex items-center justify-center text-gray-400'>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
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
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                            <SwiperSlide className='space-y-[20px]'>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-1.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-2.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-3.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='space-y-[20px]'>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-1.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-2.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[20px]">
                                    <img src="../src/assets/img/latest-product/lp-3.jpg" alt="" />
                                    <div className="space-y-[5px]">
                                        <h6>Crab Pool Security</h6>
                                        <h4 className='font-bold text-[1.2rem]'>$30.00</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

