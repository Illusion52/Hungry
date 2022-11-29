import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const HatchBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[26].img} name={Burger[26].name} description={Burger[26].description}
      ingredients={Burger[26].ingredients} price={Burger[26].price} key={26}/>
      <Footer/>
    </>
  )
}

export default HatchBurger
