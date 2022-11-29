import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'



const VegetarianBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[8].img} description={Burger[8].description}
      ingredients={Burger[8].ingredients} name={Burger[8].name} price={Burger[8].price} key={8}/>
      <Footer/>
    </>
  )
}

export default VegetarianBurger
