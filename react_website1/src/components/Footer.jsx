import React from 'react'

export default function FooterSection() {
  return (
      <footer className="bg-[#161616]">
          <div className="max-w-[1150px] mx-auto px-8 xl:px-0">
              <div className="py-[4rem] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
                  <div className="font-open text-[#9B9B9B]">
                      <h3 className="font-roboto text-white text-[1.4rem] mb-[1rem] font-bold">Address</h3>
                      <div className="mb-[1rem]">
                          <div className="mb-[0.6rem]">
                              <i className="fa-solid fa-location-dot mr-[1rem] text-[#9B9B9B]"></i>
                              <span>
                                  123 Street, New York, USA</span>
                          </div>
                          <div className="mb-[0.6rem]">
                              <i className="fa-solid fa-phone mr-[1rem] text-[#9B9B9B]"></i>
                              <span>
                                  Call : +01 1234567890</span>
                          </div>
                          <div className="mb-[0.6rem]">
                              <i className="fa-solid fa-envelope mr-[1rem] text-[#9B9B9B]"></i>
                              <span>
                                  info@gmail.com</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                          <div className="h-[40px] w-[40px] border border-[#9B9B9B] rounded-[50%] flex items-center justify-center text-[1rem] text-[#9B9B9B] transition-all duration-500 hover:bg-[#9B9B9B] hover:text-black cursor-pointer">
                              <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          </div>
                          <div className="h-[40px] w-[40px] border border-[#9B9B9B] rounded-[50%] flex items-center justify-center text-[1rem] text-[#9B9B9B] transition-all duration-500 hover:bg-[#9B9B9B] hover:text-black cursor-pointer">
                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                          </div>
                          <div className="h-[40px] w-[40px] border border-[#9B9B9B] rounded-[50%] flex items-center justify-center text-[1rem] text-[#9B9B9B] transition-all duration-500 hover:bg-[#9B9B9B] hover:text-black cursor-pointer">
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          </div>
                          <div className="h-[40px] w-[40px] border border-[#9B9B9B] rounded-[50%] flex items-center justify-center text-[1rem] text-[#9B9B9B] transition-all duration-500 hover:bg-[#9B9B9B] hover:text-black cursor-pointer">
                              <a href="#"><i className="fa-brands fa-linkedin "></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="font-open text-[#9B9B9B]">
                      <h3 className="font-roboto text-white text-[1.4rem] mb-[1rem] font-bold">Services</h3>
                      <div className="footer-links">
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Business Security
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Fire Detection
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Alarm Systems
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              CCTV & Video
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Smart Home
                          </div>
                      </div>
                  </div>
                  <div className="font-open text-[#9B9B9B]">
                      <h3 className="font-roboto text-white text-[1.4rem] mb-[1rem] font-bold">Quick Links</h3>
                      <div className="footer-links">
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              About Us
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Contact Us
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Our Services
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Terms & Condition
                          </div>
                          <div className="mb-[0.5rem] cursor-pointer transition-all duration-500 hover:tracking-[0.08rem] hover:text-[#65B530] group">
                              <i className="fa-solid fa-angle-right mr-[0.4rem] text-[#9B9B9B] transition-all duration-500 group-hover:text-[#65B530]"></i>
                              Support
                          </div>
                      </div>
                  </div>
                  <div className="font-open text-[#9B9B9B]">
                      <h3 className="font-roboto text-white text-[1.4rem] mb-[1rem] font-bold">Newsletter</h3>
                      <p className="mb-[20px]">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                      <div className="border-[1px] border-[#9B9B9B] rounded-[5px] flex">
                          <input type="email" className="w-full px-[20px] py-[15px] bg-transparent placeholder:text-[1rem]" placeholder="Your email"/>
                          <button className="px-[15px] py-[5px] rounded-[5px] text-white bg-[#65B530] mx-[6px] my-[6px] text-[1rem] font-open">SignUp</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-black text-[#9B9B9B] font-open">
              <div className="max-w-[1150px] mx-auto px-8 xl:px-0 flex flex-col md:flex-row items-center justify-between gap-[10px] py-[1.5rem]">
                  <div>
                      © <a href="#" className="font-[800] text-[#65B530]">Your Site Name</a>, All Rights Reserved
                  </div>
                  <div className="credits">Distributed by <a href="#" className="font-[800] text-[#65B530]">Somebody</a>
                  </div>
              </div>
          </div>
      </footer>
  )
}
