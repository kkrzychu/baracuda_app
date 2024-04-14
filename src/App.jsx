import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

import styles from './style'

const App = () => (

    <div className='bg-primary w-full overflow-hidden'>

      <div className={`sm:px-40 px-6 ${styles.flexCenter}`}>
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

    </div>

)


export default App