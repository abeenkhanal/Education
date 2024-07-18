
import React from 'react'
const Learning = () => {
  const onlineLearnData = [
    {

      icon: 'online-learning.png',
      title: 'Online Courses',
      paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },

    {

      icon: 'online-learning.png',
      title: 'Earn A Certificates',
      paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {

      icon: 'online-learning.png',
      title: 'Learn with Expert',
      paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ]

  return (
    <div className='h-full w-10/12 mx-auto grid  grid-cols-2 gap-5'>
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
      </div>

      <div>

        {
          onlineLearnData.map((val, i) => {
            return (
              <div className='flex flex-col gap-1 mt-10 '>
                <div>
                  {val.icon}
                </div>
                <div>
                  <div>
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
  )
}

export default Learning
