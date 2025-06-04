import React from 'react'
import Image from 'next/image'
import Logo from "./mylogo.png"
import { MdAddCall } from "react-icons/md";
import { Jobs } from '../testimonial/testimonial';
import { FaClock } from "react-icons/fa";
import { Footer1 } from '../Components/Footer1';
import Footer from '../Components/Footer';
const page = () => {
  return (
    <div>
      <div className='flex flex-row gap-5 border-2 border-black h-fit 0 p-8 items-center justify-between bg-gray-200'>




        <div className='flex flex-row'>
          <Image src={Logo} alt="logo" width={120} height={120} />

          <ul className='flex flex-row gap-14 text-white ml-12'>
            <li>Home</li>
            <li>About</li>
            <li>Verticles</li>
            <li>Blog</li>
            <li>Contact</li>

          </ul>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <MdAddCall className='text-white text-3xl' />
          <div className='flex flex-col'>
            <p className='text-white text-md'>LET&apos;S CONNECT</p>
            <p className='text-white'>+91 1234567890</p>
          </div>

        </div>
      </div>
      <hr />

      <div className='flex flex-col items-center justify-center p-8'>
        <div>
          <h6>Explore Exciting Opportunities</h6>
          <h1 className='text-4xl font-bold uppercase'>Grow With Us</h1>
        </div>
        <div className='flex flex-col gap-4'>
          {Jobs.map((item, index) => (
            <div key={index} className='max-w-[1000px] lg:w-[700px]'>
              <div>
                <div className='flex flex-col h-[80px] p-2 border-2 border-black'>
                  <p className='text-xl'>{item.title}</p>
                  <div className='flex flex-row gap-2 justify-between'>

                    <div className='flex flex-row gap-2'>
                    <p className="after:content-['_of_experience']">{item.experience}</p>
                    <FaClock size={20} />
                    <p>{item.type}</p>
                    </div>
                    <div>
                      <p className="after:content-['>>'] text-lg cursor-pointer">Apply Now</p>
                    </div>

                  </div>


                </div>



              </div>

            </div>

          ))}

        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-8 gap-5'>
        <button className='bg-green-600 text-white p-4 rounded-sm'>Load More</button>

        <div className='flex flex-row items-center justify-between w-[700px] p-6 h-[200px] bg-green-500 '>
          <p className='uppercase'>Think you&apos;d be a great fit?</p>
          <button className='bg-black text-white p-4 uppercase py-4'>Drop your resume here</button>

        </div>
      </div>

      <div>
        <Footer1/>
        <Footer/>
      </div>
    </div>
  )
}

export default page
