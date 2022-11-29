import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'
import { forcartadd } from '../../components/BurgerSection/BurgerTemp'


const FatSanta = () => {
  
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[9].img} name={Burger[9].name} price={Burger[9].price}
      ingredients={Burger[9].ingredients} description={Burger[9].description} key={9}/>
      <Footer/>
    </>
  )
  
}

export default FatSanta
