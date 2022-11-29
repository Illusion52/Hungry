import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const BigFernand = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[22].img} name={Burger[22].name} description={Burger[22].description}
      ingredients={Burger[22].ingredients} price={Burger[22].price} key={22}/>
      <Footer/>
    </>
  )
}

export default BigFernand
