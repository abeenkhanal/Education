
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
    <div className=' grid h-full justify-between w-10/12 mx-auto gap-10  grid-cols-2 '>
      <div className='w-full h-full'>
        <img className='h-full w-full' src="./second.webp" alt="" />
      </div>
      <div className='justify-center gap-6 bg-white p-10 mt-14 '>
        <div className=''>
          <h3 className='font-semibold text-customgreen'>LEARN ANYTHING</h3>
          <h1 className='text-5xl font-semibold mt-5'>Benefits About Online Learning Expertise</h1>
        </div>
        <div>

        </div>


        <div className='flex flex-col gap-1 mt-10 '>

          {
            onlineLearnData.map((val, i) => {
              return (
                <div className=' flex items-center gap-6 h-fit rounded-3xl group bg-slate-100 hover:bg-customgreen hover:text-white text-customgreen duration-200 '>
                  <div className='h-40 w-40 flex items-center ml-5 justify-center'>
                    <img src={val.icon} alt=""></img>

                  </div>
                  <div className='flex m-1 flex-col h-fit gap-4'>
                    <div className='text-2xl font-semibold group-hover:text-white  text-black'>
                      {val.title}
                    </div>
                    <div>
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
