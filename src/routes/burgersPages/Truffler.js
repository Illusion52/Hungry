import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'


const Truffler = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[14].img} description={Burger[14].description}
      ingredients={Burger[14].ingredients} name={Burger[14].name} price={Burger[14].price} key={14}/>
      <Footer/>
    </>
  )
}

export default Truffler
