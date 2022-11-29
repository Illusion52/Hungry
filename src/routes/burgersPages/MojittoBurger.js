import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const MojittoBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[18].img} name={Burger[18].name} description={Burger[18].description}
      ingredients={Burger[18].ingredients} price={Burger[18].price} key={18}/>
      <Footer/>
    </>
  )
}

export default MojittoBurger
