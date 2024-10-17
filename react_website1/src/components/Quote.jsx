import React from 'react'

export default function QuoteSection() {
    return (
        <section className='h-auto lg:h-[calc(100vh-12vh)] bg-[#F5F5F5]'>
            <div className="flex flex-col lg:flex-row items-center h-full px-5 md:px-0">
                <div className="h-full w-full md:w-[70%] lg:w-[50%]">
                    <img src="../src/assets/img/quote.jpg" alt="" className='h-full w-full bg-cover' />
                </div>
                <div className="w-full md:w-[70%] lg:w-[50%] px-0 lg:px-[3rem] py-[2rem] space-y-[1.2rem]">
                    <h1 className='pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-0 before:h-[2px] before:w-[60px] before:bg-[#65B530]'>Free Quote</h1>
                    <p className='font-open text-[#9B9B9B]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <form action="" className='space-y-[15px]'>
                        <div className="flex flex-col md:flex-row items-center gap-[15px]">
                            <input type="text" placeholder='Your Name' className='w-full bg-white outline-none px-[10px] py-[12px] rounded-[5px] placeholder:text-[#6C757D] font-roboto' />
                            <input type="email" placeholder='Your Email' className='w-full bg-white outline-none px-[10px] py-[12px] rounded-[5px] placeholder:text-[#6C757D] font-roboto' />
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-[15px]">
                            <input type="text" placeholder='Your Mobile' className='w-full bg-white outline-none px-[10px] py-[12px] rounded-[5px] placeholder:text-[#6C757D] font-roboto' />
                            <select name="" id="" className='w-full bg-white outline-none block px-[10px] py-[12px] rounded-[5px] text-[#9B9B9B] font-roboto'>
                                <option value="" selected>Select A Service</option>
                                <option value="1">Service 1</option>
                                <option value="2">Service 2</option>
                                <option value="3">Service 3</option>
                            </select>
                        </div>
                        <textarea name="" id="" placeholder='Special Note' className='w-full bg-white outline-none px-[10px] py-[12px] rounded-[5px] placeholder:text-[#6C757D] font-roboto' ></textarea>
                    </form>
                    <button className='w-full rounded-[5px] h-[55px] text-white font-open bg-[#65B530] font-[500]'>Get A Free Quote</button>

                </div>
            </div>
        </section>
    )
}
