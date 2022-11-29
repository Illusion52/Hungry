
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import MenuPage from './routes/MenuPage';
import TributeBurger from './routes/burgersPages/TributeBurger';
import PulledMooshie from './routes/burgersPages/PulledMooshie';
import KrabbyPatty from './routes/burgersPages/KrabbyPatty';
import GoodBurger from './routes/burgersPages/GoodBurger';
import NachoBurger from './routes/burgersPages/NachoBurger';
import BarbieBurger from './routes/burgersPages/BarbieBurger';
import CurryBurger from './routes/burgersPages/CurryBurger';
import MeisterBurger from './routes/burgersPages/MeisterBurger';
import VegetarianBurger from './routes/burgersPages/VegetarianBurger';
import FatSanta from './routes/burgersPages/FatSanta';
import BlondieBurger from './routes/burgersPages/BlondieBurger';
import MonsterBurger from './routes/burgersPages/MonsterBurger';
import BuffaloBurger from './routes/burgersPages/BuffaloBurger';
import CheatdayBurger from './routes/burgersPages/CheatdayBurger';
import Truffler from './routes/burgersPages/Truffler';
import AloetteBurger from './routes/burgersPages/AloetteBurger';
import BBQBurger from './routes/burgersPages/BBQBurger';
import CarrollBurger from './routes/burgersPages/CarrollBurger';
import MojittoBurger from './routes/burgersPages/MojittoBurger';
import DoubleBurger from './routes/burgersPages/DoubleBurger';
import BrownBurger from './routes/burgersPages/BrownBurger';
import MeltingBurger from './routes/burgersPages/MeltingBurger';
import BigFernand from './routes/burgersPages/BigFernand';
import PnyBurger from './routes/burgersPages/PnyBurger';
import EastBurger from './routes/burgersPages/EastBurger';
import CajunBurger from './routes/burgersPages/CajunBurger';
import HatchBurger from './routes/burgersPages/HatchBurger';
import StreetBurger from './routes/burgersPages/StreetBurger';
import Locations from './routes/Locations';
;


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path='/menu/0' element={<TributeBurger />}/>
      <Route path='/menu/1' element={<PulledMooshie />}/>
      <Route path='/menu/2' element={<KrabbyPatty />}/>
      <Route path='/menu/3' element={<GoodBurger />}/>
      <Route path='/menu/4' element={<NachoBurger />}/>
      <Route path='/menu/5' element={<BarbieBurger />}/>
      <Route path='/menu/6' element={<CurryBurger />}/>
      <Route path='/menu/7' element={<MeisterBurger />}/>
      <Route path='/menu/8' element={<VegetarianBurger />}/>
      <Route path='/menu/9' element={<FatSanta />}/>
      <Route path='/menu/10' element={<BlondieBurger />}/>
      <Route path='/menu/11' element={<MonsterBurger />}/>
      <Route path='/menu/12' element={<BuffaloBurger />}/>
      <Route path='/menu/13' element={<CheatdayBurger />}/>
      <Route path='/menu/14' element={<Truffler />}/>
      <Route path='/menu/15' element={<AloetteBurger />}/>
      <Route path='/menu/16' element={<BBQBurger />}/>
      <Route path='/menu/17' element={<CarrollBurger />}/>
      <Route path='/menu/18' element={<MojittoBurger />}/>
      <Route path='/menu/19' element={<DoubleBurger />}/>
      <Route path='/menu/20' element={<BrownBurger />}/>
      <Route path='/menu/21' element={<MeltingBurger />}/>
      <Route path='/menu/22' element={<BigFernand />}/>
      <Route path='/menu/23' element={<PnyBurger />}/>
      <Route path='/menu/24' element={<EastBurger />}/>
      <Route path='/menu/25' element={<CajunBurger />}/>
      <Route path='/menu/26' element={<HatchBurger />}/>
      <Route path='/menu/27' element={<StreetBurger />}/>
      <Route path='/locations' element={<Locations/>}/>

    </Routes>
    </>
  );
}

export default App;
