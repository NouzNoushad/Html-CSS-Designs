import React, { useState } from 'react'

export default function ProjectsSection() {

    const [tab, setTab] = useState(1);

    return (
        <section className='py-[5rem]'>
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
                <h1 className='text-center pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:w-[60px] before:bg-[#65B530]'>Our Projects</h1>
                <div className="mt-[1rem] mb-[2rem] flex flex-col items-center justify-center">
                    <div className="tabs flex flex-row items-center gap-[20px] font-open font-[500]">
                        <label for="tab-1" className={"t1 inline-block text-center mt-[10px] py-[1px] transition-all duration-500 border-b-2 border-transparent" + (tab == 1 ? "border-b-2 border-[#65B530] text-[#65B530]" : "border-b-2 border-transparent")} onClick={
                            (e) => {
                                e.preventDefault();
                                setTab(1);
                            }
                        }>
                            All
                        </label>
                        <label for="tab-2" className={"t2 inline-block text-center mt-[10px] py-[1px] transition-all duration-500 border-b-2 border-transparent" + (tab == 2 ? "border-b-2 border-[#65B530] text-[#65B530]" : "border-b-2 border-transparent")} onClick={
                            (e) => {
                                e.preventDefault();
                                setTab(2);
                            }
                        }>
                            Complete Projects
                        </label>
                        <label for="tab-3" className={"t3 inline-block text-center mt-[10px] py-[1px] transition-all duration-500 border-b-2 border-transparent" + (tab == 3 ? "border-b-2 border-[#65B530] text-[#65B530]" : "border-b-2 border-transparent")} onClick={
                            (e) => {
                                e.preventDefault();
                                setTab(3);
                            }
                        }>
                            Ongoing Projects
                        </label>
                    </div>
                </div>
                {/* Tab 1 */}
                <div className={(tab == 1 ? "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]" : "hidden")}>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-1.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Business Security</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Business Security</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-2.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Fire Detection</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Fire Detection</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-3.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Access Control</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Access Control</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-4.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Alarm Systems</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Alarm Systems</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-5.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>CCTV & Video</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>CCTV & Video</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-6.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Smart Home</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Smart Home</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 2 */}
                <div className={(tab == 2 ? "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]" : "hidden")}>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-1.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Business Security</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Business Security</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-2.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Fire Detection</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Fire Detection</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-3.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Access Control</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Access Control</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-4.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Alarm Systems</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Alarm Systems</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-5.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>CCTV & Video</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>CCTV & Video</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-6.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Smart Home</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Smart Home</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 3 */}
                <div className={(tab == 3 ? "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]" : "hidden")}>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-1.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Business Security</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Business Security</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-2.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Fire Detection</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Fire Detection</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-3.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Access Control</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Access Control</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-4.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Alarm Systems</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Alarm Systems</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-5.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>CCTV & Video</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>CCTV & Video</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-[0_0_45px_rgba(0,0,0,.07)] group overflow-hidden w-full">
                        <img src="../src/assets/img/portfolio-6.jpg" alt="" className='group-hover:transform scale-1 group-hover:scale-110 transition-all duration-500 w-full' />
                        <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px]">
                            <h4 className='font-open text-[#65B530]'>Smart Home</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                        </div>
                        <div className="absolute bottom-[-180px] flex flex-col items-center justify-center gap-[10px] px-[30px] py-[30px] bg-white w-full opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
                            <h4 className='font-open text-[#65B530]'>Smart Home</h4>
                            <h2 className='font-roboto text-[1.2rem] font-[600] text-center'>Smart CCTV Security Systems That Fits Your Business</h2>
                            <div className="flex flex-row items-center gap-[10px]">
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-eye"></i></a>
                                <a href="#" className="h-[35px] w-[35px] bg-[#65B530] rounded-[50%] flex items-center justify-center text-white"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
