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
<div className='h-screen w-full bg-transparent flex items-center'>
<div className='flex w-10/12 mx-auto flex-col gap-6'>
                    <h2 className='font-bold text-gray-00'>WELCOME TO ACADEMIA</h2>
                    <h1 className='font-bold text-4xl w-5/12 text-white '>Best Online Education Expertise </h1>
                    <p className='w-6/12'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    <div className='gap-4 flex'>
                        <button className='bg-customgreen px-7 py-4 text-sm font-semibold text-white rounded'>GET STARTED NOW!</button>
                        <button className='bg-white px-7 py-4 text-sm font-semibold text-customgreen  rounded'>VIEW COURSE!</button>

                    </div>
                </div>
</div>
        <div className=' bg-white '>
        <Learning/>
        </div>
        {/* <Blog/> */}
      </div>
    </>
  )
}

export default App
