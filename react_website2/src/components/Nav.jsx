import React from 'react'

export default function NavSection() {
    return (
        <nav className=''>
            <div className="bg-[#F5F5F5] hidden lg:block">
                <div className="max-w-[1150px] mx-auto xl:px-0 px-5 py-3 text-[0.9rem]">
                    <div className="flex flex-row items-center justify-between">
                        <ul className='flex flex-row items-center'>
                            <li className='border-r border-[##1c1c1c] pr-6'><i class="fa fa-envelope mr-1"></i> hello@colorlib.com</li>
                            <li className='pl-6'>Free Shipping for all Order of $99</li>
                        </ul>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div class="flex flex-row items-center gap-[20px] border-r border-[##1c1c1c] pr-6">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="flex flex-row items-center border-r border-[##1c1c1c] pr-6">
                                <img src="../src/assets/img/language.png" alt="" />
                                <div className='ml-2'>English</div>
                                <span class=""></span>
                                <ul className='hidden'>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="">
                                <a href="#"><i class="fa fa-user mr-1"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="max-w-[1150px] mx-auto xl:px-0 px-5 py-3 text-[0.9rem]">
                    <div className="flex flex-row items-center justify-between">
                        <a href="#"><img src="../src/assets/img/logo.png" alt="" /></a>
                        <ul className='hidden lg:flex flex-row items-center gap-[3rem]'>
                            <li className='text-[0.85rem] font-[700] uppercase tracking-[2px] transition-all duration-500 hover:text-[#7FAD39]'><a href="#home">Home</a></li>
                            <li className='text-[0.85rem] font-[700] uppercase tracking-[2px] transition-all duration-500 hover:text-[#7FAD39]'><a href="#shop">Shop</a></li>
                            <li className='text-[0.85rem] font-[700] uppercase tracking-[2px] transition-all duration-500 hover:text-[#7FAD39]'><a href="#pages">Pages</a>
                                <ul className='hidden'>
                                    <li><a href="#">Shop Details</a></li>
                                    <li><a href="#">Shoping Cart</a></li>
                                    <li><a href="#">Check Out</a></li>
                                    <li><a href="#">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className='text-[0.85rem] font-[700] uppercase tracking-[2px] transition-all duration-500 hover:text-[#7FAD39]'><a href="#blog">Blog</a></li>
                            <li className='text-[0.85rem] font-[700] uppercase tracking-[2px] transition-all duration-500 hover:text-[#7FAD39]'><a href="#contact">Contact</a></li>
                        </ul>
                        <div class="hidden lg:flex flex-row items-center gap-[30px]">
                            <ul className='flex flex-row items-center gap-[20px]'>
                                <li className='relative'><a href="#"><i class="fa fa-heart text-[1.2rem]"></i> <span className='absolute top-[-5px] right-[-12px] bg-[#7FAD39] rounded-[50%] text-white text-[0.6rem] font-[800] h-[13px] w-[13px] flex items-center justify-center
                                '>1</span></a></li>
                                <li className='relative'><a href="#"><i class="fa fa-shopping-bag text-[1.2rem]"></i> <span className='absolute top-[-5px] right-[-12px] bg-[#7FAD39] rounded-[50%] text-white text-[0.6rem] font-[800] h-[13px] w-[13px] flex items-center justify-center
                                '>3</span></a></li>
                            </ul>
                            <div class="">item: <span className='font-[700]'>$150.00</span></div>
                        </div>
                        <div class="menu-btn inline-block lg:hidden absolute top-[50%] right-[20px] translate-y-[-50%]">
                            <div class="relative border border-black rounded-[5px] h-[45px] w-[45px]">
                                <i
                                    class="fas fa-bars absolute top-[50%] left-[50%] text-black text-[1.3rem] translate-x-[-50%] translate-y-[-50%]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
