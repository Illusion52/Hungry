import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const CarrollBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[17].img} name={Burger[17].name} description={Burger[17].description}
      ingredients={Burger[17].ingredients} price={Burger[17].price} key={17}/>
      <Footer/>
    </>
  )
}

export default CarrollBurger
