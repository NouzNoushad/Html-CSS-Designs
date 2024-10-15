import React from 'react'

export default function NavSection() {
    return (
        <nav>
            <div className="hidden lg:block bg-[#161616] text-white">
                <div className="max-w-[1250px] mx-auto px-5 xl:px-0 py-[1rem]">
                    <div className="flex flex-row items-center justify-between font-open text-[0.9rem] text-[#9B9B9B]">
                        <div className="flex flex-row items-center gap-[20px]">
                            <span className='flex flex-row items-center'>
                                <a href='#' className="h-[32px] w-[32px] bg-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] text-white">
                                    <i class="fa-solid fa-location-dot"></i>
                                </a>
                                123 Street, New York, USA
                            </span>
                            <span className='flex flex-row items-center'>
                                <a href='#' className="h-[32px] w-[32px] bg-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] text-white">
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                                info@example.com
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <span className='flex flex-row items-center'>
                                <a href='#' className="h-[32px] w-[32px] bg-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] text-white">
                                    <i class="fa-solid fa-phone"></i>
                                </a>
                                +012 345 6789
                            </span>
                            <span className='flex flex-row items-center'>
                                <a href='#' className="h-[32px] w-[32px] bg-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] text-white">
                                    <i class="fa-solid fa-clock"></i>
                                </a>
                                Mon - Fri : 9AM - 9PM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[12vh] ">
                <div className="max-w-[1250px] mx-auto px-5 xl:px-0 py-[1.2rem]">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className='text-[1.6rem] text-[#65B530] font-roboto font-[600]'>Securex</h1>
                        <div className="hidden lg:flex flex-row gap-[30px] links font-open">
                            <ul className='flex flex-row items-center gap-[30px] font-[500]'>
                                <li><a href="#home" className='transition-all duration-500 hover:text-[#65B530]'>Home</a></li>
                                <li><a href="#about" className='transition-all duration-500 hover:text-[#65B530]'>About</a></li>
                                <li><a href="#service" className='transition-all duration-500 hover:text-[#65B530]'>Service</a></li>
                                <li><a href="#project" className='transition-all duration-500 hover:text-[#65B530]'>Project</a></li>
                                <li><a href="#pages" className='transition-all duration-500 hover:text-[#65B530]'>Pages</a></li>
                                <li><a href="#contact" className='transition-all duration-500 hover:text-[#65B530]'>Contact</a></li>
                            </ul>
                            <div className="flex flex-row items-center">
                                <a href="#" className="h-[35px] w-[35px] bg-[#F5F5F5] text-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] transition-all duration-500 hover:text-white hover:bg-[#65B530]"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#F5F5F5] text-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] transition-all duration-500 hover:text-white hover:bg-[#65B530]"><i class="fab fa-twitter"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#F5F5F5] text-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] transition-all duration-500 hover:text-white hover:bg-[#65B530]"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#F5F5F5] text-[#65B530] rounded-[50%] flex items-center justify-center mr-[10px] transition-all duration-500 hover:text-white hover:bg-[#65B530]"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
