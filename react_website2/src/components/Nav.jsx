import React from 'react'

export default function NavSection() {
    return (
        <nav className='bg-[#F5F5F5] hidden md:block'>
            <div className="max-w-[1150px] mx-auto xl:px-0 px-5 py-3 text-[0.9rem] ">
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
        </nav>
    )
}
