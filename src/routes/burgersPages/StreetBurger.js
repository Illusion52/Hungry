import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const StreetBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[27].img} name={Burger[27].name} description={Burger[27].description}
      ingredients={Burger[27].ingredients} price={Burger[27].price} key={27}/>
      <Footer/>
    </>
  )
}

export default StreetBurger
