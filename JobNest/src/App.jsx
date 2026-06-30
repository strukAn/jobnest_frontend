import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/common/Navbar'
import Listings from './pages/Listings'
import CompanyListingDetails from './components/company-listing-details/CompanyListingDetails.jsx'
import { getListing } from './api/listing.js'
import { useUser } from './api/User.js'

function App() {
  // (async () => {await useUser().userLogin({email: "company@technova.com", password: "company"});})()  

  return (
    <>
    </>
  )
}

export default App
