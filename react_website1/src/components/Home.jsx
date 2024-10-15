import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

export default function HomeSection() {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='h-auto sm:h-[90vh] md:h-[100vh] bg-black'>
                <div className="relative h-full w-full">
                    <div className="after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#161616b3] h-full w-full">
                        <img src="../src/assets/img/carousel-1.jpg" alt="" className='h-full w-full bg-cover bg-center' />
                    </div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center space-y-[30px] w-full md:w-[700px] md:mx-auto px-5 xl:px-0">
                        <h1 className='font-roboto text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-[800] leading-[2.8rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]'>Best CCTV & Security Solution For You</h1>
                        <p className='font-open text-[1rem] sm:text-[1.2rem]'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-[20px]">
                            <button className='rounded-[30px] w-[160px] h-[50px] bg-[#65B530] font-open font-[500]'>Read More</button>
                            <button className='rounded-[30px] w-[160px] h-[50px] bg-white font-open text-black font-[500]'>Free Quote</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-[80vh] sm:h-[90vh] md:h-[100vh] bg-black'>
                <div className="relative h-full w-full">
                    <div className="after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#161616b3] h-full w-full">
                        <img src="../src/assets/img/carousel-2.jpg" alt="" className='h-full w-full bg-cover bg-center' />
                    </div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center space-y-[30px] w-full md:w-[700px] md:mx-auto px-5 xl:px-0">
                        <h1 className='font-roboto text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-[800] leading-[2.8rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]'>Smart Security Solution For All Business</h1>
                        <p className='font-open text-[1rem] sm:text-[1.2rem]'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-[20px]">
                            <button className='rounded-[30px] w-[160px] h-[50px] bg-[#65B530] font-open font-[500]'>Read More</button>
                            <button className='rounded-[30px] w-[160px] h-[50px] bg-white font-open text-black font-[500]'>Free Quote</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-[80vh] sm:h-[90vh] md:h-[100vh] bg-black'>
                <div className="relative h-full w-full">
                    <div className="after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#161616b3] h-full w-full">
                        <img src="../src/assets/img/carousel-3.jpg" alt="" className='h-full w-full bg-cover bg-center' />
                    </div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center space-y-[30px] w-full md:w-[700px] md:mx-auto px-5 xl:px-0">
                        <h1 className='font-roboto text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-[800] leading-[2.8rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]'>Innovative Solution For Security System</h1>
                        <p className='font-open text-[1rem] sm:text-[1.2rem]'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-[20px]">
                            <button className='rounded-[30px] w-[160px] h-[50px] bg-[#65B530] font-open font-[500]'>Read More</button>
                            <button className='rounded-[30px] w-[160px] h-[50px] bg-white font-open text-black font-[500]'>Free Quote</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
