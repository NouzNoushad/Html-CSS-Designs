import React from 'react'

export default function TeamSection() {
    return (
        <section className='py-[5rem]'>
            <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
                <h1 className='text-center pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:w-[60px] before:bg-[#65B530]'>Team Members</h1>
                <div className="mt-[3rem] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[15px]">
                    <div className="overflow-hidden shadow-[0_0_45px_rgba(0,0,0,.07)] group">
                        <div className="relative before:transition-all before:duration-500 before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:h-full before:w-full before:bg-black before:opacity-[0.4] cursor-pointer before:scale-0 before:tranform before:group-hover:scale-100 before:z-10 z-20">
                            <div className="overflow-hidden">
                                <img src="../src/assets/img/team-1.jpg" alt="" className='scale-1 transform group-hover:scale-110 transition-all duration-500  w-full h-full bg-cover' />
                            </div>
                            
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0 translate-y-[-50%] flex flex-row items-center gap-[10px] transition-all duration-500 group-hover:opacity-100 z-40">
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-twitter"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-[1.5rem]">
                            <h2 className='font-open font-bold text-[1.2rem]'>Full Name</h2>
                            <h4 className='font-open text-[#65B530]'>Designation</h4>
                        </div>
                    </div>
                    <div className="overflow-hidden shadow-[0_0_45px_rgba(0,0,0,.07)] group">
                        <div className="relative before:transition-all before:duration-500 before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:h-full before:w-full before:bg-black before:opacity-[0.4] cursor-pointer before:scale-0 before:tranform before:group-hover:scale-100 before:z-10 z-20">
                            <div className="overflow-hidden">
                                <img src="../src/assets/img/team-2.jpg" alt="" className='scale-1 transform group-hover:scale-110 transition-all duration-500  w-full h-full bg-cover' />
                            </div>

                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0 translate-y-[-50%] flex flex-row items-center gap-[10px] transition-all duration-500 group-hover:opacity-100 z-40">
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-twitter"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-[1.5rem]">
                            <h2 className='font-open font-bold text-[1.2rem]'>Full Name</h2>
                            <h4 className='font-open text-[#65B530]'>Designation</h4>
                        </div>
                    </div>
                    <div className="overflow-hidden shadow-[0_0_45px_rgba(0,0,0,.07)] group">
                        <div className="relative before:transition-all before:duration-500 before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:h-full before:w-full before:bg-black before:opacity-[0.4] cursor-pointer before:scale-0 before:tranform before:group-hover:scale-100 before:z-10 z-20">
                            <div className="overflow-hidden">
                                <img src="../src/assets/img/team-3.jpg" alt="" className='scale-1 transform group-hover:scale-110 transition-all duration-500  w-full h-full bg-cover' />
                            </div>

                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0 translate-y-[-50%] flex flex-row items-center gap-[10px] transition-all duration-500 group-hover:opacity-100 z-40">
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-twitter"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-[1.5rem]">
                            <h2 className='font-open font-bold text-[1.2rem]'>Full Name</h2>
                            <h4 className='font-open text-[#65B530]'>Designation</h4>
                        </div>
                    </div>
                    <div className="overflow-hidden shadow-[0_0_45px_rgba(0,0,0,.07)] group">
                        <div className="relative before:transition-all before:duration-500 before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[50%] before:translate-x-[-50%] before:h-full before:w-full before:bg-black before:opacity-[0.4] cursor-pointer before:scale-0 before:tranform before:group-hover:scale-100 before:z-10 z-20">
                            <div className="overflow-hidden">
                                <img src="../src/assets/img/team-4.jpg" alt="" className='scale-1 transform group-hover:scale-110 transition-all duration-500  w-full h-full bg-cover' />
                            </div>

                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] opacity-0 translate-y-[-50%] flex flex-row items-center gap-[10px] transition-all duration-500 group-hover:opacity-100 z-40">
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-twitter"></i></a>
                                <a className="h-[35px] w-[35px] bg-black text-white rounded-[50%] flex items-center justify-center" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-[1.5rem]">
                            <h2 className='font-open font-bold text-[1.2rem]'>Full Name</h2>
                            <h4 className='font-open text-[#65B530]'>Designation</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
