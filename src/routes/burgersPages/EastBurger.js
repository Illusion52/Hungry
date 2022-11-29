import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const EastBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[24].img} name={Burger[24].name} description={Burger[24].description}
      ingredients={Burger[24].ingredients} price={Burger[24].price} key={24}/>
      <Footer/>
    </>
  )
}

export default EastBurger
