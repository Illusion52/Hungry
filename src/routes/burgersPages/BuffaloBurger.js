import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const BuffaloBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[12].img} name={Burger[12].name} price={Burger[12].price}
      ingredients={Burger[12].ingredients} description={Burger[12].description} key={12}/>
      <Footer/>
    </>
  )
}

export default BuffaloBurger
