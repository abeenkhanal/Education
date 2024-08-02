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
import Blog from './component/blog/blog'
// import Pricing from './component/pricing/pricing'
import Footer from './component/common/footer/footer';
import News from './component/news/news';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,

  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }

};






function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className='  relative '>
        <div className='mx-auto w-10/12'>
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
        </Routes>
        {/* <Blog /> */}

        <News />
        <Footer />

      </div>
      <div className='p-10 bg-red-400 '>
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}  // Set autoPlaySpeed to 3000 milliseconds (3 seconds)
        transitionDuration={500}
        
        >

          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </>
  )
}

export default App
