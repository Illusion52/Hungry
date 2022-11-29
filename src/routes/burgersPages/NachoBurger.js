import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const NachoBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[4].img} price={Burger[4].price} ingredients={Burger[4].ingredients}
      description={Burger[4].description} name={Burger[4].name} key={4}/>
      <Footer/>
    </>
  )
}

export default NachoBurger
