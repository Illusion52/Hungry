import React from 'react'

import Footer from '../components/FooterSection/Footer'
import Hero from '../components/HeroSection/Hero'
import Navbar from '../components/NavbarSection/Navbar'


const Home = () => {
  return (
    <>
        <Navbar />
        
        <Hero />
        <Footer/>
    </>
  )
}

export default Home