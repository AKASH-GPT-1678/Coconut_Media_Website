import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { Footer1 } from '../Components/Footer1';
import Footer from '../Components/Footer';
import Map from './Map';
const page = () => {
  return (
    <div>

      <div className='flex flex-row gap-10 items-center justify-center'>
        <div className='flex flex-col w-[350px] h-[350px] gap-5 items-center bg-green-50 p-10 justify-center'>
          <div className='p-4 bg-green-500 hover:bg-black rounded-full'>
            <FaBuilding size={70} fill='white' />
          </div>
          <p className='font-bold uppercase'>Corporate Office</p>
          <p className='text-lg text-center opacity-80'>
            5th floor, Kotia Nirman, Off New Link Rd, Industrial Area, Andheri West, Mumbai, Maharashtra 400053
          </p>
        </div>

        <div className='flex flex-col w-[350px] h-[350px] gap-5 items-center bg-green-50 p-10 justify-center'>
          <div className='p-4 bg-green-500 hover:bg-black rounded-full'>
            <BsFillBuildingsFill size={70} fill='white' />
          </div>
          <p className='font-bold uppercase'>Head Office</p>
          <p className='text-lg text-center opacity-80'>
            1st Floor, Shakti 404, Opp Gurudwara, Sarkhej – Gandhinagar Hwy, Bodakdev, Ahmedabad, Gujarat 380054
          </p>
        </div>

        <div className='flex flex-col w-[350px] h-[350px] gap-5 items-center bg-green-50 p-10 justify-center'>
          <div className='p-4 bg-green-500 hover:bg-black rounded-full'>
            <MdOutlineContactPhone size={70} fill='white' />
          </div>
          <p className='font-bold uppercase'>Contact</p>
          <div className='text-lg text-center  opacity-80'>
            <p>info@coconutmediabox.in</p>
            <p>022 6223 1333</p>
            <p>8080 188 188</p>
          </div>
        </div>


      </div>

      <div className='flex items-center justify-center gap-10 flex-col w-full mt-8'>
        <div className=' p-3 flex flex-col items-center justify-center' >
          <h5 className='uppercase'>contact with us</h5>
          <h1 className='uppercase text-4xl font-bold'>have any questions?</h1>
        </div>
       
          <form className='w-full flex items-center justify-center px-5'>
            <div className=' flex flex-col md:grid grid-cols-2    gap-4 max-w-[1000px] w-full'>
              <div className='w-full'>
                <label className='block mb-1 font-bold'>Who’s reaching out?</label>
                <input type="text" placeholder="Tell us your name" className='w-full border px-3 py-2 bg-green-50' />
              </div>

              <div className='w-full'>
                <label className='block mb-1 font-bold'>Contact Number</label>
                <input type="tel" placeholder="Drop your phone number (just in case)" className='w-full border px-3 py-2 bg-green-50' />
              </div>

              <div className='w-full'>
                <label className='block mb-1 font-bold'>Your Best Email</label>
                <input type="email" placeholder="Where can we send a reply?" className='w-full border px-3 py-2 bg-green-50' />
              </div>

              <div className='w-full'>
                <label className='block mb-1 font-bold'>What’s this about?</label>
                <input type="text" placeholder="Give us a quick headline" className='w-full border px-3 py-2 bg-green-50' />
              </div>

              <div className='col-span-2 w-full'>
                <label className='block mb-1 font-bold'>Let’s Talk</label>
                <textarea placeholder="Write your message like you mean it…" className='w-full border px-8 py-5 bg-green-50' />
              </div>
            </div>


        
          </form>
              <div>
              <button className='bg-green-600 p-6 text-white font-stretch-expanded rounded-xl cursor-pointer uppercase'>send us a messsage</button>
            </div>

      
      </div>

      <div>
        <Map/>
      </div>

      <div>

        <Footer1/>
        <Footer/>
      </div>






    </div>
  )
}

export default page
