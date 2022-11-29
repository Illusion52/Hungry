import React from 'react'
import Footer from '../components/FooterSection/Footer'
import Menu from '../components/MenuSection/Menu'
import Navbar from '../components/NavbarSection/Navbar'
import BurgerList from '../utils/burgers'



const MenuPage = () => {

    


  return (
    <>
      <Navbar />
        <Menu endpoint={BurgerList}/>
      <Footer/>
    </>
  )
}

export default MenuPage
