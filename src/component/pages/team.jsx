import React from 'react'
const teamData =[
  {
    image : "hello.jpg",
    name : "Ph.D Adrian Molises",
    work: "DEVELOPER AND LEAD INSTRUCTER",
  
},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
{
  image : "hello.jpg",
  name : "Ph.D Adrian Molises",
  work: "DEVELOPER AND LEAD INSTRUCTER",

},
]
const Team = () => {
  return (
    <div className='bg-white '>
    <div className='h-full w-full flex bg-gray-300 justify-center'>
          <img src="/about.png" className='max-h-[80vh]' alt="" />
        </div>
    <div className="  bg-white ">
      
      
      <div className="bg-white mt-20  w-10/12 mx-auto grid grid-cols-4 gap-7 ">
        {teamData.map((val, i) => {
          return (
            <div className='mb-14'>
            <div className="pb-10 hover:bg-customgreen group rounded-xl shadow-2xl">
              <img src={val.image} alt="" ></img>
              <div className="mt-10 px-10  " >
                <h1 className="text-xl  text-black group-hover:text-white" key={i}>{val.name}</h1>

                <h1 className="text-gray-400 group-hover:text-white " key={i}>{val.work}</h1>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Team
