import React from 'react'
const Onlinecourse = () => {
  const OnlinecoursseData = [
    {
      icon: '.hello.png',
      title: 'jfaksbkj',
      course: 'ksajbbakvb'
    },
    {
      icon: '.hello.png',
      title: 'jfaksbkj',
      course: 'ksajbbakvb'
    },
    {
      icon: '.hello.png',
      title: 'jfaksbkj',
      course: 'ksajbbakvb'
    },
    {
      icon: '.hello.png',
      title: 'jfaksbkj',
      course: 'ksajbbakvb'
    },
    {
      icon: '.hello.png',
      title: 'jfaksbkj',
      course: 'ksajbbakvb'
    },
    {
      icon: '.hello.png',
      title: 'jfaksbkj',
      course: 'ksajbbakvb'
    }
  
  
  

  ]


  return (
    <div className='bg-primary '>
        <div>
<h3>COURSES</h3>
<h1>Browse Our Online Courses</h1>

        </div>
        {
          OnlinecoursseData.map((val, i)=>{
            return(
              <div>
                <div>
                  <img src={val.icon} alt="" ></img>
                </div>
                <div>
                 { val.title}
                </div>
                <div>
                  {val.course}
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Onlinecourse
