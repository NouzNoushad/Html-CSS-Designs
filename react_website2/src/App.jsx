import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSection from './components/Nav'
import HomeSection from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-cairo'>
      <NavSection/>
      <HomeSection/>
    </div>
  )
}

export default App
