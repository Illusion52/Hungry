import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const BBQBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[16].img} name={Burger[16].name} description={Burger[16].description}
      ingredients={Burger[16].ingredients} price={Burger[16].price} key={Burger[16].id}/>
      <Footer/>
    </>
  )
}

export default BBQBurger
