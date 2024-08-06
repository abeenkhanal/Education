
import React from 'react'
const Learning = () => {
  const onlineLearnData = [
    {

      icon: 'computer.png',
      title: 'Online Courses',
      paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },

    {

      icon: 'certi.png',
      title: 'Earn A Certificates',
      paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {

      icon: 'experts.png',
      title: 'Learn with Expert',
      paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ]

  return (
    <div className=' lg:grid flex flex-col-reverse h-full justify-between  mx-auto gap-10  lg:grid-cols-2 '>
      <div className='w-full h-full md:h-[80vh] lg:h-[100vh]'>
        <img className='h-full w-full' src="./second.webp" alt="" />
      </div>
      <div className='justify-center gap-6 bg-white p-10 mt-4 '>
        <div className=''>
          <h3 className='font-semibold md:text-lg text-customgreen'>LEARN ANYTHING</h3>
          <h1 className='md:text-5xl text-2xl font-semibold mt-5'>Benefits About Online Learning Expertise</h1>
        </div>
        


        <div className='flex flex-col gap-1 md:gap-6 mt-10 '>

          {
            onlineLearnData.map((val, i) => {
              return (
                <div className=' flex flex-col md:flex-row items-center gap-9 h-fit rounded-3xl group bg-slate-100 hover:bg-customgreen hover:text-white text-customgreen duration-200 '>
                  <div className='md:h-40 md:w-40  flex items-center ml-5 justify-center'>
                    <img className='h-28 w-28 md:h-20 md:w-20'src={val.icon} alt=""/>

                  </div>
                  <div className='flex m-1 flex-col h-fit gap-4 mt-2'>
                    <div className='md:text-2xl text-l font-semibold group-hover:text-white  text-black'>
                      {val.title}
                    </div>
                    <div className='md:text-2xl text-sm'>
                      {val.paragraph}
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>



      </div>
    </div>
  )
}

export default Learning
