import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

import styles from './style'
import Footer from './components/footer'

import { useState, useEffect } from 'react';

const App = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    
    if (offset > 10) { 
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className='bg-primary w-full overflow-hidden'>

    <div className={`sm:px-40 px-6 ${styles.flexCenter} ${isSticky ? 'stickyNav' : ''}`}>
      <div className={`${styles.boxWidth}`}><Navbar /></div>
    </div>

    {/* <div className={`bg-black`}> */}
    <div className={`bg-primary w-full flex justify-center flex-col`}>

      
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      

    </div>

    <div className={`sm:px-40 px-6 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}><Footer /></div>
    </div>

  </div>
  )

  }


export default App