import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSection from './components/Nav'
import HomeSection from './components/Home'
import CategoriesSection from './components/Categories'
import FeaturedSection from './components/Featured'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-cairo'>
      <NavSection/>
      <HomeSection/>
      <CategoriesSection/>
      <FeaturedSection/>
    </div>
  )
}

export default App
