import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'
import Burger from '../../utils/burgers.json'



const MonsterBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src={Burger[11].img} name={Burger[11].name} price={Burger[11].price}
      ingredients={Burger[11].ingredients} description={Burger[11].description} key={11}/>
      <Footer/>
    </>
  )
}

export default MonsterBurger
