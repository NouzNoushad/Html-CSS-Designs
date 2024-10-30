import React from 'react'

export default function BannerSection() {
    return (
        <section>
            <div className="max-w-[1150px] mx-auto xl:px-0 px-5">
                <div className="flex flex-col xl:flex-row items-center gap-[20px]">
                    <img src="../src/assets/img/banner/banner-1.jpg" alt="" />
                    <img src="../src/assets/img/banner/banner-2.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}
