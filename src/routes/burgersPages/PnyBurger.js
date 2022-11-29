import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const PnyBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[23].img} name={Burger[23].name} description={Burger[23].description}
      ingredients={Burger[23].ingredients} price={Burger[23].price} key={23}/>
      <Footer/>
    </>
  )
}

export default PnyBurger
