import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/common/Navbar'
import Listings from './pages/Listings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listings/>
    </>
  )
}

export default App
