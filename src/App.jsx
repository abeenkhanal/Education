import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/common/header/head'
import Nav from './component/common/header/nav'
import { Route, Routes } from 'react-router-dom'
import Home from './component/pages/home'
import Allcourse from './component/pages/allcourse'
import About from './component/pages/about'
import Team from './component/pages/team'
import Pricing from './component/pages/pricing'
import Journal from './component/pages/journal'
import Contact from './component/pages/contact'
import Homepage from './component/homebanner/homepage'


// import Pricing from './component/pricing/pricing'
import News from './component/news/news';
import Footer from './component/common/footer/footer';
import State from './component/pages/state'
import Slider from './component/pages/slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className='  relative '>
        <div className=''>
          <Head />
        </div>
        <div className='mx-auto  sticky top-0 bg-green-500 w-11/12'>
          <Nav />
        </div>
        <Homepage />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allcourse' element={<Allcourse />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/state' element={<State/>}/>
          <Route path='/slider' element={<Slider/>}/>
        </Routes>
     
        {/* <Blog /> */}
       
        <News /> 
        <Footer />

      </div>
      
    </>
  )
}

export default App
