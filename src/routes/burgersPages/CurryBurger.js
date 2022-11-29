import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const CurryBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[6].img} name={Burger[6].name} description={Burger[6].description === 'N/A' ? 'No description' : Burger[6].description}
      ingredients={Burger[6].ingredients} price={Burger[6].price} key={6}/>
      <Footer/>
    </>
  )
}

export default CurryBurger
