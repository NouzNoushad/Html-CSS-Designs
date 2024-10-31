export default function FooterSection() {
    return (
        <footer className='bg-[#F3F6FA]'>
            <div className="pt-[3rem] max-w-[1150px] mx-auto xl:px-0 px-5">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-[20px]">
                    <div className="grow flex flex-col md:flex-row md:gap-0 gap-[20px]">
                        <div className="space-y-[1.5rem] grow">
                            <a href="#"><img src="../src/assets/img/logo.png" alt="" /></a>
                            <ul className='space-y-[10px]'>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                        <div className="space-y-[1rem] grow">
                            <h4 className='font-[800]'>Useful Links</h4>
                            <div className="flex flex-row gap-[10px] text-[0.9rem]">
                                <ul className='grow space-y-[0.6rem]'>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">About Our Shop</a></li>
                                    <li><a href="#">Secure Shopping</a></li>
                                    <li><a href="#">Delivery infomation</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Our Sitemap</a></li>
                                </ul>
                                <ul className='grow space-y-[0.6rem]'>
                                    <li><a href="#">Who We Are</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Innovation</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[1rem]">
                        <h4 className='font-[800]'>Join Our Newsletter Now</h4>
                        <p className='text-[0.9rem]'>Get E-mail updates about our latest shop and special offers.</p>
                        <form action='' className="flex flex-row py-[1rem]">
                            <input type="email" placeholder='Enter youre Email' className='border border-gray-300 bg-white px-[20px] py-[10px] grow' />
                            <button className='py-[10px] px-[20px] bg-[#7FAD39] text-white uppercase text-[0.9rem] font-[800]'>Subscribe</button>
                        </form>
                        <div className="flex flex-row gap-[10px]">
                            <a href="#" className='h-[40px] w-[40px] border bg-white text-[#404040] rounded-[50%] flex items-center justify-center text-[0.9rem] transition-all duration-300 hover:bg-[#7FAD39] hover:text-white hover:border-[#7FAD39]'><i className="fa fa-facebook"></i></a>
                            <a href="#" className='h-[40px] w-[40px] border bg-white text-[#404040] rounded-[50%] flex items-center justify-center text-[0.9rem] transition-all duration-300 hover:bg-[#7FAD39] hover:text-white hover:border-[#7FAD39]'><i className="fa fa-instagram"></i></a>
                            <a href="#" className='h-[40px] w-[40px] border bg-white text-[#404040] rounded-[50%] flex items-center justify-center text-[0.9rem] transition-all duration-300 hover:bg-[#7FAD39] hover:text-white hover:border-[#7FAD39]'><i className="fa fa-twitter"></i></a>
                            <a href="#" className='h-[40px] w-[40px] border bg-white text-[#404040] rounded-[50%] flex items-center justify-center text-[0.9rem] transition-all duration-300 hover:bg-[#7FAD39] hover:text-white hover:border-[#7FAD39]'><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <hr className='mt-[2rem]' />
                <div className="py-[1.5rem] flex flex-col md:flex-row items-center justify-between gap-[20px]">
                    <p className='text-center text-[#6F6F6F]'>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank" className='text-blue-600'>Colorlib</a>
                    </p>
                    <div className="">
                        <img src="../src/assets/img/payment-item.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
