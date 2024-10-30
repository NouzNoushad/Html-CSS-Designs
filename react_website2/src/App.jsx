import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSection from './components/Nav'
import HomeSection from './components/Home'
import CategoriesSection from './components/Categories'
import FeaturedSection from './components/Featured'
import BannerSection from './components/Banner'
import LatestProducts from './components/Latest'
import BlogSection from './components/Blog'
import FooterSection from './components/Footer'

function App() {
    return (
        <div className='font-cairo'>
            <NavSection />
            <HomeSection />
            <CategoriesSection />
            <FeaturedSection />
            <BannerSection />
            <LatestProducts />
            <BlogSection />
            <FooterSection />
        </div>
    )
}

export default App
