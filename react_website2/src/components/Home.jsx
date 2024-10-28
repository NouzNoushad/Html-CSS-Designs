import React from 'react'

export default function HomeSection() {
    return (
        <section id='home'>
            <div className="max-w-[1150px] mx-auto xl:px-0 px-5 mb-5">
                <div className="flex flex-col lg:flex-row gap-[30px] lg:h-[500px] h-auto w-full">
                    <div className="w-full lg:w-1/4">
                        <div className="h-[50px] flex flex-row items-center justify-between px-[20px] md:px-[30px] bg-[#7FAD39] text-white">
                            <div className="">
                                <i class="fa fa-bars mr-3"></i>
                                <span className='font-[700] text-[1rem] md:text-[1.1rem]'>All departments</span>
                            </div>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="h-[450px] border border-gray-300 px-[20px] md:px-[30px] py-[10px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-[#7FAD39]">
                            <li className='py-[8px]'><a href="#">Fresh Meat</a></li>
                            <li className='py-[8px]'><a href="#">Vegetables</a></li>
                            <li className='py-[8px]'><a href="#">Fruit & Nut Gifts</a></li>
                            <li className='py-[8px]'><a href="#">Fresh Berries</a></li>
                            <li className='py-[8px]'><a href="#">Ocean Foods</a></li>
                            <li className='py-[8px]'><a href="#">Butter & Eggs</a></li>
                            <li className='py-[8px]'><a href="#">Fastfood</a></li>
                            <li className='py-[8px]'><a href="#">Fresh Onion</a></li>
                            <li className='py-[8px]'><a href="#">Papayaya & Crisps</a></li>
                            <li className='py-[8px]'><a href="#">Oatmeal</a></li>
                            <li className='py-[8px]'><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-3/4 h-[500px]">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-[30px]">
                            <div className="grow flex flex-row items-center w-full md:w-auto">
                                <div className="border border-gray-100 px-[5px] sm:px-[15px] py-[15px] grow">
                                    <span className='font-[800] pr-6 border-r border-gray-300 hidden md:inline-block'>All Categories <i class="fa-solid fa-caret-down ml-1"></i></span>
                                    <input type="text" placeholder="What do yo u need?" className='pl-6 grow' />
                                </div>
                                <button className='border border-[#7FAD39] bg-[#7FAD39]  px-[20px] sm:px-[30px] py-[15px] text-white uppercase font-bold text-[0.9rem]'>Search</button>
                            </div>
                            <div className="flex flex-row items-center gap-[20px]">
                                <div className="h-[50px] w-[50px] bg-[#F5F5F5] rounded-[50%] flex items-center justify-center text-[#7FAD39]">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="">
                                    <h5 className='font-bold text-[1.1rem]'>+65 11.188.888</h5>
                                    <span className='text-[0.9rem] text-[#7d7d7d]'>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
