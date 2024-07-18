
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
    <div className=' grid h-full justify-between w-11/12 mx-auto gap-10  grid-cols-2 '>
      <div className='w-full h-full'>
        <img className='h-full w-full' src="./second.webp" alt="" />
      </div>
      <div className='justify-center gap-6 bg-white p-10 '>
        <div className=''>
          <h3 className='font-semibold text-customgreen'>LEARN ANYTHING</h3>
          <h1 className='text-5xl font-semibold mt-5'>Benefits About Online Learning Expertise</h1>
        </div>
        <div>

        </div>
      

      <div className='flex flex-col gap-14 mt-10 bg-red-600 group'>

        {
          onlineLearnData.map((val, i) => {
            return (
              <div className=' flex items-center gap-6 h-fit rounded-md bg-customgreen text-white duration-200 '>
                <div className='h-20 w-40 flex items-center justify-center'>
                <img src={val.icon} alt=""></img>
                  
                </div>
                <div className='flex flex-col h-fit gap-4'>
                  <div className='text-2xl font-semibold text-black'>
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
