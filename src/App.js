import data from './data.json'
import Home from './components/Home';
import MobileNav from './components/MobileNav';
import { useState } from 'react';
import { SpaceContext } from './components/SpaceContext';
import Nav from './components/Nav';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [destination, setDestination] = useState(false)
  const [crew, setCrew] = useState(false)
  const [technology, setTechnology] = useState(false)
  const [home, setHome] = useState(false)

  const menuVisible = ()=>{
    setOpenMenu(!openMenu);
  }

  const contextValues = {openMenu, setOpenMenu, menuVisible, destination, setDestination, home, setHome, crew, setCrew, technology, setTechnology};
  return (
    <SpaceContext.Provider value={contextValues}>
      <Router>
          <div className='relative z-10'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/crew' element={<Crew />} />
              <Route path='/technology' element={<Technology />} />
            </Routes>

            {/* <Technology /> */}
            {openMenu && <MobileNav />}
          </div>
      </Router>
    </SpaceContext.Provider>
    
  );
}

export default App;
