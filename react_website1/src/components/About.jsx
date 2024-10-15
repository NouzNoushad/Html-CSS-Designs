import React from 'react'

export default function AboutSection() {
    return (
        <section className='h-auto lg:h-[calc(100vh-12vh)] bg-[#F5F5F5]'>
            <div className="flex flex-col lg:flex-row items-center h-full px-5 md:px-0">
                <div className="h-full w-full md:w-[70%] lg:w-[50%]">
                    <img src="../src/assets/img/about.jpg" alt="" className='h-full w-full bg-cover' />
                </div>
                <div className="w-full md:w-[70%] lg:w-[50%] px-0 lg:px-[3rem] py-[2rem] space-y-[1.2rem]">
                    <h1 className='pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-0 before:h-[2px] before:w-[60px] before:bg-[#65B530]'>About Us</h1>
                    <p className='font-open text-[#9B9B9B]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <div className="flex flex-col sm:flex-row items-start gap-[50px]">
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-white before:rounded-[50%]">
                                <img src="../src/assets/img/icon/icon-1.png" alt="" className='relative' />
                            </div>
                            <div className="">
                                <h3 className='font-roboto font-[600] text-[1.6rem] md:text-[1.9rem]'>1234</h3>
                                <h4 className='font-open font-[500] text-[#65B530]'>Happy Clients</h4>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-white before:rounded-[50%]">
                                <img src="../src/assets/img/icon/icon-5.png" alt="" className='relative' />
                            </div>
                            <div className="">
                                <h3 className='font-roboto font-[600] text-[1.6rem] md:text-[1.9rem]'>1234</h3>
                                <h4 className='font-open font-[500] text-[#65B530]'>Projects Done</h4>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[1.2rem]">
                        <button className='rounded-[30px] w-[190px] h-[55px] text-white font-open bg-[#65B530] font-[500]'>Explore More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
