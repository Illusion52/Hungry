import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const MeisterBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[7].img} description={Burger[7].description} ingredients={Burger[7].ingredients}
      name={Burger[7].name} price={Burger[7].price} key={7}/>
      <Footer/>
    </>
  )
}

export default MeisterBurger
