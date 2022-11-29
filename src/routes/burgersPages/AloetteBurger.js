import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const AloetteBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[15].img} name={Burger[15].name} description={Burger[15].description}
      ingredients={Burger[15].ingredients} price={Burger[15].price} key={15}/>
      <Footer/>
    </>
  )
}

export default AloetteBurger
