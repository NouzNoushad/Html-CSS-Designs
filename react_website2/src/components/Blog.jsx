export default function BlogSection() {
    return (
        <section className='pb-[4rem]'>
            <div className="max-w-[1150px] mx-auto xl:px-0 px-5">
                <h1 className='mb-[1rem] text-center font-[800] text-[2.2rem] relative after:absolute after:w-[80px] after:h-[4px] after:left-[50%] after:translate-x-[-50%] after:top-[55px] after:bg-[#7FAD39]'>From the Blog</h1>
                <div className="mt-[4rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="space-y-[1rem]">
                        <img src="../src/assets/img/blog/blog-1.jpg" alt="" className='w-full bg-cover'/>
                        <ul className='text-[#B2B2B2] flex flex-row gap-[20px]'>
                            <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                            <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5 className='font-[800] text-[1.2rem]'><a href="#">Cooking tips make cooking simple</a></h5>
                        <p className='text-[#6F6F6F]'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                    <div className="space-y-[1rem]">
                        <img src="../src/assets/img/blog/blog-2.jpg" alt="" className='w-full bg-cover' />
                        <ul className='text-[#B2B2B2] flex flex-row gap-[20px]'>
                            <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                            <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5 className='font-[800] text-[1.2rem]'><a href="#">6 ways to prepare breakfast for 30</a></h5>
                        <p className='text-[#6F6F6F]'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                    <div className="space-y-[1rem]">
                        <img src="../src/assets/img/blog/blog-3.jpg" alt="" className='w-full bg-cover' />
                        <ul className='text-[#B2B2B2] flex flex-row gap-[20px]'>
                            <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                            <li><i className="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5 className='font-[800] text-[1.2rem]'><a href="#">Visit the clean farm in the US</a></h5>
                        <p className='text-[#6F6F6F]'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
