import React from 'react'

const Contact = () => {
  return (
    
    <div className='bg-white h-fit  mx-auto'>
      <div className='h-full w-full flex bg-gray-300 justify-center'>
          <img src="/about.png" className='max-h-[80vh] md:max-h-[60vh] p-2 lg:max-h-[80vh]' alt="" />
        </div>
    <div className="flex flex-col md:flex-row border-red-500 md:h-[800px] w-10/12 mx-auto ">
      
      <div className="flex flex-col items-center justify-center lg:h-[90vh] lg:w-[100vh] lg:mt-10 md:w-[500vh] md:h-[60vh] md:flex md:mt-16 bg-gray-200">
        
          <img  className='h-full w-full' src="./contact.jpg" alt="" />
       
      </div>

      
      <div className="flex flex-col justify-center w-full md:p-7 md:mb-16 md:mt-6 lg:mt-0">
        <h2 className="text-2xl font-bold md:mt-10 mb-4 ">Contact us</h2>
        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
        <div className='flex flex-col md:flex-row justify-between'>
        <div className="mb-4 md:mb-0 w-full md:w-1/4">
          <p className="font-bold">ADDRESS:</p>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="mb-4 md:mb-0 w-full md:w-1/2">
          <p className="font-bold">EMAIL:</p>
          <p>info@yoursite.com</p>
        </div>
        <div className="mb-8 md:mb-0 w-full md:w-1/3">
          <p className="font-bold">PHONE:</p>
          <p>+ 1235 2355 98</p>
        </div>
        </div>
        <form>
          <div className="mb-4">
            <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Subject" />
          </div>
          <div className="mb-4">
            <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Create a message here" rows="4"></textarea>
          </div>
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600" type="submit">Send Message</button>
        </form>
        <div className="mt-8">
          <p className="font-bold mb-2">Follow us here</p>
          <div className="flex space-x-4 ">
            <a href="#" className="text-teal-500">Facebook</a>
            <a href="#" className="text-teal-500">Twitter</a>
            <a href="#" className="text-teal-500">Instagram</a>
            <a href="#" className="text-teal-500">Dribbble</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Contact
