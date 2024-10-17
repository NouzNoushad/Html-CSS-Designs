import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

export default function TestimonialsSection() {
  return (
    <section className='py-[5rem]'>
          <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
              <h1 className='text-center pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:w-[60px] before:bg-[#65B530]'>Testimonials</h1>
              <div className="mt-[3rem]">
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
                      <SwiperSlide className='flex flex-col items-center justify-center gap-[15px]'>
                          <div className="flex flex-col items-center justify-center relative">
                              <img src="../src/assets/img/testimonial-1.jpg" alt="" className='w-full h-full rounded-[50%] z-10' />
                              <a className="absolute bottom-[-20px] z-20 h-[38px] w-[38px] bg-white text-[1.2rem] text-[#65B530] rounded-[50%] flex items-center justify-center" href=""><i class="fa-solid fa-quote-left"></i></a>
                          </div>
                          <p className='mt-[1rem] font-open text-[1.2rem] text-[#9B9B9B] text-center md:w-[650px] md:mx-auto'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                          <h2 className='font-open font-bold text-[1.2rem]'>Client Name</h2>
                          <h4 className='font-open text-[#65B530]'>Profession</h4>
                      </SwiperSlide>
                      <SwiperSlide className='flex flex-col items-center justify-center gap-[15px]'>
                          <div className="flex flex-col items-center justify-center relative">
                              <img src="../src/assets/img/testimonial-2.jpg" alt="" className='w-full h-full rounded-[50%] z-10' />
                              <a className="absolute bottom-[-20px] z-20 h-[38px] w-[38px] bg-white text-[1.2rem] text-[#65B530] rounded-[50%] flex items-center justify-center" href=""><i class="fa-solid fa-quote-left"></i></a>
                          </div>
                          <p className='mt-[1rem] font-open text-[1.2rem] text-[#9B9B9B] text-center md:w-[650px] md:mx-auto'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                          <h2 className='font-open font-bold text-[1.2rem]'>Client Name</h2>
                          <h4 className='font-open text-[#65B530]'>Profession</h4>
                      </SwiperSlide>
                      <SwiperSlide className='flex flex-col items-center justify-center gap-[15px]'>
                          <div className="flex flex-col items-center justify-center relative">
                              <img src="../src/assets/img/testimonial-3.jpg" alt="" className='w-full h-full rounded-[50%] z-10' />
                              <a className="absolute bottom-[-20px] z-20 h-[38px] w-[38px] bg-white text-[1.2rem] text-[#65B530] rounded-[50%] flex items-center justify-center" href=""><i class="fa-solid fa-quote-left"></i></a>
                          </div>
                          <p className='mt-[1rem] font-open text-[1.2rem] text-[#9B9B9B] text-center md:w-[650px] md:mx-auto'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                          <h2 className='font-open font-bold text-[1.2rem]'>Client Name</h2>
                          <h4 className='font-open text-[#65B530]'>Profession</h4>
                      </SwiperSlide>
                  </Swiper>
              </div>
          </div>
    </section>
  )
}
