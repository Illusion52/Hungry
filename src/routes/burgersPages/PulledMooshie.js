import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'

const PulledMooshie = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src='https://media.plateaway.com/wp-content/uploads/2021/02/10230532/TheJerk_smaller.jpg' description='Spicy vegan burger with jackfruit'
      price='$20' name='Pulled Mooshie' ingredients={["jackfruit","coleslaw","gluten free bun"]} key={1}/>
      <Footer/>
    </>
  )
}

export default PulledMooshie
