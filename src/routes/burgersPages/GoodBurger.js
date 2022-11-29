import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const GoodBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[3].img} name={Burger[3].name} description={Burger[3].description} ingredients={Burger[3].ingredients}
      price={Burger[3].price} key={3}/>
      <Footer/>
    </>
  )
}

export default GoodBurger
