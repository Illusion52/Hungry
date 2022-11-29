import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const DoubleBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[19].img} name={Burger[19].name} description={Burger[19].description}
      ingredients={Burger[19].ingredients} price={Burger[19].price} key={19}/>
      <Footer/>
    </>
  )
}

export default DoubleBurger
