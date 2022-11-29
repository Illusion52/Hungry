import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'



const BlondieBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[10].img} name={Burger[10].name} price={Burger[10].price}
      ingredients={Burger[10].ingredients} description={Burger[10].description} key={10}/>
      <Footer/>
    </>
  )
}

export default BlondieBurger
