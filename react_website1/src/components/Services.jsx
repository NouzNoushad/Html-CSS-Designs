import React from 'react'

export default function ServicesSection() {
    return (
        <section className='py-[5rem]'>
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
                <h1 className='text-center pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:w-[60px] before:bg-[#65B530]'>Our Services</h1>
                <div className="shadow-[0_0_45px_rgba(0,0,0,.08)] mt-[3rem] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div className="px-[50px] py-[50px] border border-[rgba(0,0,0,.03)] space-y-[20px] group">
                        <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-[#F5F5F5] before:rounded-[50%]">
                            <img src="../src/assets/img/icon/icon-6.png" alt="" className='relative' />
                        </div>
                        <h2 className='font-roboto font-[600] text-[1.3rem] md:text-[1.5rem] leading-tight'>Commercial CCTV System</h2>
                        <p className='font-open text-[#9B9B9B]'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="inline-flex items-center overflow-hidden text-white bg-[#65B530] h-[38px] w-[38px] font-roboto rounded-[38px] whitespace-nowrap transition-all duration-500 px-[12px] group-hover:w-[140px]" href=""><i className="fa-solid fa-arrow-right mr-[15px]"></i>Read More</a>
                    </div>
                    <div className="px-[50px] py-[50px] border border-[rgba(0,0,0,.03)] space-y-[20px] group">
                        <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-[#F5F5F5] before:rounded-[50%]">
                            <img src="../src/assets/img/icon/icon-8.png" alt="" className='relative' />
                        </div>
                        <h2 className='font-roboto font-[600] text-[1.3rem] md:text-[1.5rem] leading-tight'>Finger Print Access</h2>
                        <p className='font-open text-[#9B9B9B]'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="inline-flex items-center overflow-hidden text-white bg-[#65B530] h-[38px] w-[38px] font-roboto rounded-[38px] whitespace-nowrap transition-all duration-500 px-[12px] group-hover:w-[140px]" href=""><i className="fa-solid fa-arrow-right mr-[15px]"></i>Read More</a>
                    </div>
                    <div className="px-[50px] py-[50px] border border-[rgba(0,0,0,.03)] space-y-[20px] group">
                        <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-[#F5F5F5] before:rounded-[50%]">
                            <img src="../src/assets/img/icon/icon-9.png" alt="" className='relative' />
                        </div>
                        <h2 className='font-roboto font-[600] text-[1.3rem] md:text-[1.5rem] leading-tight'>Fire Detection And Safety</h2>
                        <p className='font-open text-[#9B9B9B]'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="inline-flex items-center overflow-hidden text-white bg-[#65B530] h-[38px] w-[38px] font-roboto rounded-[38px] whitespace-nowrap transition-all duration-500 px-[12px] group-hover:w-[140px]" href=""><i className="fa-solid fa-arrow-right mr-[15px]"></i>Read More</a>
                    </div>
                    <div className="px-[50px] py-[50px] border border-[rgba(0,0,0,.03)] space-y-[20px] group">
                        <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-[#F5F5F5] before:rounded-[50%]">
                            <img src="../src/assets/img/icon/icon-3.png" alt="" className='relative' />
                        </div>
                        <h2 className='font-roboto font-[600] text-[1.3rem] md:text-[1.5rem] leading-tight'>Smart Home Security</h2>
                        <p className='font-open text-[#9B9B9B]'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="inline-flex items-center overflow-hidden text-white bg-[#65B530] h-[38px] w-[38px] font-roboto rounded-[38px] whitespace-nowrap transition-all duration-500 px-[12px] group-hover:w-[140px]" href=""><i className="fa-solid fa-arrow-right mr-[15px]"></i>Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
