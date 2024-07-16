import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/common/header/head'
import Nav from './component/common/header/nav'
import footer from './component/common/footer/footer'
import Footer from './component/common/footer/footer'
import Homepage from './component/homebanner/homepage'
import Learning from './component/learn/learning'
import Blog from './component/blog/blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className='  relative '>
        <div className='mx-auto w-10/12'>
          <Head />
        </div>
        <div className='mx-auto w-10/12'>
          <Nav />
        </div>

        <Homepage />
        <Learning/>
        <Blog/>
      </div>
    </>
  )
}

export default App
