import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const BrownBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[20].img} name={Burger[20].name} description={Burger[20].description}
      ingredients={Burger[20].ingredients} price={Burger[20].price} key={20}/>
      <Footer/>
    </>
  )
}

export default BrownBurger
