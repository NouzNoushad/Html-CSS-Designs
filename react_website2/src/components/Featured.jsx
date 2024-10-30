import React, { useState } from 'react'

export default function FeaturedSection() {
    const [tab, setTab] = useState(0)
    const featuredProducts = ['All', 'Oranges', 'Fresh Meat', 'Vegetables', 'Fastfood']

    return (
        <section className='py-[4rem]'>
            <div className="max-w-[1150px] mx-auto xl:px-0 px-5">
                <div className="flex flex-col items-center gap-[30px]">
                    <h1 className='mb-[1rem] font-[800] text-[2.2rem] relative after:absolute after:w-[80px] after:h-[4px] after:left-[50%] after:translate-x-[-50%] after:top-[55px] after:bg-[#7FAD39]'>Featured Product</h1>
                    <ul className="flex flex-row flex-wrap items-center justify-center gap-[20px] cursor-pointer text-[1.1rem]">
                        {
                            featuredProducts.map((product, index) =>
                                <li className={(tab == index) ? 'border-b-[2px] border-[#7FAD39]' : 'border-b-[2px] border-transparent'} onClick={(e) => {
                                    e.preventDefault()
                                    setTab(index)
                                }}>{product}</li>
                            )
                        }
                    </ul>
                    {
                        featuredProducts.map((product, index) =>
                            <div className={(tab == index) ? "mt-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] w-full" : "hidden"}>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-1.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-2.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-3.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-4.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-5.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-6.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-7.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="relative overflow-hidden">
                                        <img src="../src/assets/img/featured/feature-8.jpg" alt="" className='w-full bg-cover' />
                                        <ul class="flex flex-row items-center gap-[10px] absolute bottom-[-50px] left-[50%] translate-x-[-50%] group-hover:bottom-[20px] transition-all duration-500">
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li className='h-[40px] w-[40px] bg-white rounded-[50%] border flex items-center justify-center'><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center py-[12px]">
                                        <h3>Crab Pool Security</h3>
                                        <p className='font-bold text-[1.2rem] mt-[5px]'>$30.00</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
