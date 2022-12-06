
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import MenuPage from './routes/MenuPage';
import BurgerTemp from '../src/components/BurgerSection/BurgerTemp'
import Locations from './routes/Locations';
import Offers from './routes/Offers';
;


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path='/menu/:id' element={<BurgerTemp/>}/>
      <Route path='/locations' element={<Locations/>}/>
      <Route path='/offers' element={<Offers/>}/>

    </Routes>
    </>
  );
}

export default App;
