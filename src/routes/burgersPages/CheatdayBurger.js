import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'



const CheatdayBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[13].img} name={Burger[13].name} price={Burger[13].price}
      ingredients={Burger[13].ingredients} description={Burger[13].description} key={13}/>
      <Footer/>
    </>
  )
}

export default CheatdayBurger
