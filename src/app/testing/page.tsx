import React from 'react';
import Image from 'next/image';
import Groupd from "../../../public/groupd.png"
const page = () => {
  return (

    <div>
      <div className='h-[700px] w-screen flex flex-col md:flex-row mb-20 justify-between relative '>
        <div className=' flex flex-col md:flex-row relative min-w-[50%]  max-w-[800px]'>
          <div className='absolute bg-green-100 w-[70%] h-[600px] md:h-screen '>

          </div>

          <div className='mt-20 ml-16'>
            <Image src={Groupd} alt="logo" width={800} height={800} className='absolute  h-[500px] w-[500px]  md:w-[800px]  rounded-2xl ' />

          </div>
        </div>



        <div className='w-[50%] bg-white h-screen  '>
          <section className="px-6 py-12 md:py-16 bg-white ">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-6">
                DREAMERS, MAKERS,<br />
                STORYTELLERS AND<br />
                CREATORS
              </h2>
              <p className="text-green-500 text-base font-medium leading-relaxed mb-4">
                We specialise in creating campaigns<br />
                that elevate your brand and deliver<br />
                quantifiable results.
              </p>
              <p className="text-gray-700 text-sm max-w-xl leading-relaxed">
                We serve diverse media and entertainment needs, expanding across Creative Brand Solutions,
                Digital Marketing, Motion Pictures, Events, and more, with an exponentially growing client base.
              </p>

            </div>

          </section>




        </div>
        <div>
          <h1 className=' rotate-90 origin-top-left text-8xl ml-10'>COCONUT</h1>
        </div>





      </div>


    </div>


  )
}

export default page
