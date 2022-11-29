import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const BarbieBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[5].img} name={Burger[5].name} description={Burger[5].description}
      ingredients={Burger[5].ingredients} price={Burger[5].price} key={5}/>
      <Footer/>
    </>
  )
}

export default BarbieBurger
