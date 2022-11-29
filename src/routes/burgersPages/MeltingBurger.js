import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const MeltingBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[21].img} name={Burger[21].name} description={Burger[21].description}
      ingredients={Burger[21].ingredients} price={Burger[21].price} key={21}/>
      <Footer/>
    </>
  )
}

export default MeltingBurger
