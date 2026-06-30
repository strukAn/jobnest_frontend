import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/common/Navbar'
import Listings from './pages/Listings'
import ListingsList from './components/ListingsList'
import ListingDetails from './pages/ListingDetails'
import { useUser } from './api/User'
import Application from './pages/Application'


function App() {
  const [count, setCount] = useState(0);
  const func = async () => {await useUser().userLogin({
                    email: "david@gmail.com",
                    password: "12345678"
                });
              }
  func();
  return (
    <>
      <NavBar/>
      <Application listingId={"7ac9adc6-16a4-407b-8519-fc483eeb7256"}/>
    </>
  )
}

export default App
