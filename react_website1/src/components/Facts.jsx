export default function FactsSection() {
  return (
    <section className='py-[5rem]'>
        <div className="max-w-[1150px] mx-auto px-5 xl:px-0">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
                  <div className="bg-[#161616] px-[25px] py-[25px] text-white space-y-[10px]">
                      <div className="flex flex-row items-center justify-between">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-black before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-3.png" alt="" className='relative' />
                        </div>
                          <h1 className='font-roboto text-black font-[800] text-[3.5rem]'>01</h1>
                      </div>
                      <h2 className='font-roboto font-bold text-[1.3rem]'>Home Security</h2>
                      <div className="w-[100px] h-[1px] bg-[#373737]"></div>
                      <p className='font-open text-[#9B9B9B]'>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</p>
                  </div>
                  <div className="bg-[#161616] px-[25px] py-[25px] text-white space-y-[10px]">
                      <div className="flex flex-row items-center justify-between">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-black before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-4.png" alt="" className='relative' />
                          </div>
                          <h1 className='font-roboto text-black font-[800] text-[3.5rem]'>02</h1>
                      </div>
                      <h2 className='font-roboto font-bold text-[1.3rem]'>Access Control</h2>
                      <div className="w-[100px] h-[1px] bg-[#373737]"></div>
                      <p className='font-open text-[#9B9B9B]'>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</p>
                  </div>
                  <div className="bg-[#161616] px-[25px] py-[25px] text-white space-y-[10px]">
                      <div className="flex flex-row items-center justify-between">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-black before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-2.png" alt="" className='relative' />
                          </div>
                          <h1 className='font-roboto text-black font-[800] text-[3.5rem]'>03</h1>
                      </div>
                      <h2 className='font-roboto font-bold text-[1.3rem]'>24/7 Support</h2>
                      <div className="w-[100px] h-[1px] bg-[#373737]"></div>
                      <p className='font-open text-[#9B9B9B]'>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</p>
                  </div>
              </div>
        </div>
    </section>
  )
}
