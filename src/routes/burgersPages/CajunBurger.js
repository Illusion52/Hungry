import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const CajunBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[25].img} name={Burger[25].name} description={Burger[25].description}
      ingredients={Burger[25].ingredients} price={Burger[25].price} key={25}/>
      <Footer/>
    </>
  )
}

export default CajunBurger
