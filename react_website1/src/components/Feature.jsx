export default function FeatureSection() {
  return (
      <section className='h-auto lg:h-[calc(100vh-12vh)] bg-[#F5F5F5]'>
          <div className="flex flex-col lg:flex-row items-center h-full px-5 md:px-0">
              <div className="w-full md:w-[70%] lg:w-[50%] px-0 lg:px-[3rem] py-[2rem] space-y-[1.2rem]">
                  <h1 className='pt-[0.6rem] font-roboto font-[800] text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] relative before:absolute before:top-0 before:left-0 before:h-[2px] before:w-[60px] before:bg-[#65B530]'>Why Choose Us</h1>
                  <p className='font-open text-[#9B9B9B]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-[50px]">
                      <div className="flex flex-row items-center gap-[20px]">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-white before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-7.png" alt="" className='relative' />
                          </div>
                          <div className="">
                              <h3 className='font-open text-[#65B530] text-[1rem]'>Trusted</h3>
                              <h4 className='font-roboto font-[700] text-[1.3rem] mt-[0.2rem]'>Security</h4>
                          </div>
                      </div>
                      <div className="flex flex-row items-center gap-[20px]">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-white before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-10.png" alt="" className='relative' />
                          </div>
                          <div className="">
                              <h3 className='font-open text-[#65B530] text-[1rem]'>Quality</h3>
                              <h4 className='font-roboto font-[700] text-[1.3rem] mt-[0.2rem]'>Services</h4>
                          </div>
                      </div>
                      <div className="flex flex-row items-center gap-[20px]">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-white before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-3.png" alt="" className='relative' />
                          </div>
                          <div className="">
                              <h3 className='font-open text-[#65B530] text-[1rem]'>Smart</h3>
                              <h4 className='font-roboto font-[700] text-[1.3rem] mt-[0.2rem]'>Systems</h4>
                          </div>
                      </div>
                      <div className="flex flex-row items-center gap-[20px]">
                          <div className="relative before:absolute before:top-0 before:left-0 before:w-[65px] before:h-[65px] before:bg-white before:rounded-[50%]">
                              <img src="../src/assets/img/icon/icon-2.png" alt="" className='relative' />
                          </div>
                          <div className="">
                              <h3 className='font-open text-[#65B530] text-[1rem]'>24/7 Hours</h3>
                              <h4 className='font-roboto font-[700] text-[1.3rem] mt-[0.2rem]'>Support</h4>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="h-full w-full md:w-[70%] lg:w-[50%]">
                  <img src="../src/assets/img/feature.jpg" alt="" className='h-full w-full bg-cover' />
              </div>
          </div>
      </section>
  )
}
