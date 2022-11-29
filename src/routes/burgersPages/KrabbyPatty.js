import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'

const KrabbyPatty = () => {
  return (
    <>
        <Navbar/>
        <BurgerTemp src={Burger[2].img} ingredients={Burger[2].ingredients} description={Burger[2].description}
        price={Burger[2].price} name={Burger[2].name} key={2}/>
        <Footer/>
    </>
  )
}

export default KrabbyPatty
