import React, { useEffect, useState } from 'react'

export default function NavSection() {
    const [stickyClass, setStickyClass] = useState('relative');
    const [scrollBtn, setScrollBtn] = useState("hidden");
    const [toggleMenu, setToggleMenu] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            if (windowHeight > 500) {
                setStickyClass('fixed bg-white top-0 left-0 z-50 w-full transition-all duration-500');
                setScrollBtn("fixed bottom-[10px] right-[20px] h-[45px] w-[45px] rounded-[50%] bg-[#65B530] text-white z-50")
            }
            else {
                setStickyClass('relative');
                setScrollBtn("hidden");
            }
        }
    };

    const handleToggle = () => {
        setToggleMenu("active");
    }

    return (
        <>
            <a href="#home" className="transition-all duration-500">
                <div className={scrollBtn}>
                    <i className="fas fa-arrow-up absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></i>
                </div>
            </a>
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
                <div className={stickyClass + "bg-white h-[12vh]"}>
                    <div className="max-w-[1250px] mx-auto px-5 xl:px-0 py-[1.2rem]">
                        <div className="flex flex-row items-center justify-between">
                            <h1 className='text-[1.6rem] text-[#65B530] font-roboto font-[600]'>Securex</h1>
                            <div className="hidden lg:flex flex-row gap-[30px] links font-open gap-[30px] tracking-[0.5px] nav-links fixed top-0 right-[-100%] h-full w-full bg-white flex lg:flex-row flex-col items-center justify-center lg:relative lg:top-0 lg:right-0 lg:bg-transparent z-50 transition-all duration-500">
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
                                <div className="cancel-btn inline-block lg:hidden absolute top-[15px] right-[20px]">
                                    <div className="relative bg-white rounded-[5px] h-[45px] w-[45px]">
                                        <i
                                            className="fas fa-times absolute top-[50%] left-[50%] text-black text-[1.3rem] translate-x-[-50%] translate-y-[-50%]"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-btn inline-block lg:hidden absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={handleToggle}>
                                <div className="relative bg-white rounded-[5px] h-[45px] w-[45px]">
                                    <i
                                        className="fas fa-bars absolute top-[50%] left-[50%] text-black text-[1.3rem] translate-x-[-50%] translate-y-[-50%]"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
