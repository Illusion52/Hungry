import React from 'react'
import BurgerTemp from '../../components/BurgerSection/BurgerTemp'
import Footer from '../../components/FooterSection/Footer'
import Navbar from '../../components/NavbarSection/Navbar'

const TributeBurger = () => {
  return (
    <>
      <Navbar/>
      <BurgerTemp src="https://scontent.fias1-1.fna.fbcdn.net/v/t31.18172-8/11705406_1165422120140765_4701910527418329290_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=yZ5YLxJCBvcAX-H8T6e&_nc_ht=scontent.fias1-1.fna&oh=00_AfDWQflUrDsfwTkexyoBYn4JoT5pTl_jW7DSIGQCHdwQpw&oe=63A7FFA1" 
       name='Tribute Burger' ingredients={["beef","american cheese","burger sauce","french mustard","pickes","onion","lettuce"]} description='A mouth-watering honest beef burger' price='$35' key={0}
      />
      <Footer />
    </>
  )
}

export default TributeBurger
