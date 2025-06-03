import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaThumbsUp } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Work from "../myasset/work.png"
import Image from 'next/image';
const Infopart = () => {
    return (

     <div>

     
        <div className='flex flex-col items-center justify-center bg-green-500 '>
            <div className='flex flex-row justify-between gap-6 h-[600px] mt-20'>

                <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-amber-800'>
                    <FaPeopleGroup size={80} className='bg-yellow-300 rounded-full p-1' />
                </div>
                <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-amber-800'>
                    <IoIosPeople size={80} className='bg-yellow-300 rounded-full p-1' />
                </div>
                <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-amber-800'>
                    <RiVerifiedBadgeLine size={80} className='bg-yellow-300 rounded-full p-1' />
                </div>
                <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-amber-800'>
                    <FaThumbsUp size={80} className='bg-yellow-300 rounded-full p-1' />
                </div>

            </div>


           

        </div>
         <div className='flex flex-row items-center justify-center'>
                <div className='flex flex-row -mt-36'>
                    <div className='border-2 border-black'>
                        <Image src={Work}  alt='Working Image left' width={0} height={0} className='w-'/>
                    

                    </div>
                         <section className="flex items-center justify-center bg-green-100 w-[50%]">
      <div className="max-w-xl bg-white rounded-2xl shadow-md p-8">
        <p className="text-sm text-gray-500 font-semibold uppercase mb-2">
          What Sets Us Apart
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Impactful Campaigns,<br /> Tailored for Success
        </h2>
        <p className="text-gray-700 mb-6">
          Our approach blends strategy with detail-driven design and insightful imagination.
          We’ve partnered with diverse brands across industries, crafting campaigns that
          leave a lasting impression.
        </p>
        <ul className="list-none text-green-700 space-y-2 mb-6">
          <li className="before:content-['✔'] before:mr-2">Passion</li>
          <li className="before:content-['✔'] before:mr-2">Creativity</li>
          <li className="before:content-['✔'] before:mr-2">Commitment</li>
          <li className="before:content-['✔'] before:mr-2">Expertise</li>
        </ul>
        <div className="w-full h-40 bg-green-200 flex items-center justify-center rounded-lg text-green-800 font-semibold">
          [ Image Placeholder ]
        </div>
      </div>
    </section>
                    
                </div>

            </div>
        </div>
    )
}

export default Infopart
