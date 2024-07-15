import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './component/common/header/head'
import Nav from './component/common/header/nav'
import footer from './component/common/footer/footer'
import Footer from './component/common/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Head />
    <Nav />
    <Footer />
  </>
  )
}

export default App
