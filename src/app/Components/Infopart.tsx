"use client";
import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Work from "../myasset/work.png"
import Image from 'next/image';
import Hardworking from "../myasset/hardworking.png"
const Infopart = () => {
  const [yearsOfExperience, setYearsOfExperience] = React.useState(0);
  const [clientRetentionRate, setClientRetentionRate] = React.useState(0);
  const [projectsCompleted, setProjectsCompleted] = React.useState(0);
  const [happyClients, setHappyClients] = React.useState(0);






  React.useEffect(() => {


    for (let i = 0; i <= 10; i++) {
      setTimeout(() => setYearsOfExperience(i), i * 100);
    }

    for (let i = 0; i <= 92; i++) {
      setTimeout(() => setClientRetentionRate(i), i * 10);
    }

    for (let i = 0; i <= 500; i++) {
      setTimeout(() => setProjectsCompleted(i), i * 1);
    }

    for (let i = 0; i <= 300; i++) {
      setTimeout(() => setHappyClients(i), i * 2);
    }
  }, []);



  return (

    <div>


      <div className='flex flex-col items-center justify-center bg-green-600'>
        <div className='grid grid-cols-2  lg:flex lg:flex-row justify-between gap-6 h-[600px] mt-20'>

          {/* First Block */}
         {/* First Block */}
<div className='flex flex-col items-center'>
  <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-green-700'>
    <FaPeopleGroup size={70} color='white' className='rounded-full p-1' />
  </div>
  <div className='text-center space-y-2 ml-2 mt-4'>
    <p className='font-extrabold text-white text-4xl'>{yearsOfExperience}+</p>
    <p className='font-extrabold text-white text-xxl'>Years of Experience</p>
  </div>
</div>

{/* Second Block */}
<div className='flex flex-col items-center'>
  <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-green-700'>
    <IoIosPeople size={70} color='white' className='rounded-full p-1' />
  </div>
  <div className='text-center space-y-2 ml-2 mt-4'>
    <p className='font-extrabold text-white text-4xl'>{clientRetentionRate}%</p>
    <p className='font-extrabold text-white text-xxl'>Client Retention Rate</p>
  </div>
</div>

{/* Third Block */}
<div className='flex flex-col items-center'>
  <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-green-700'>
    <RiVerifiedBadgeLine size={70} color='white' className='rounded-full p-1' />
  </div>
  <div className='text-center space-y-2 ml-2 mt-4'>
    <p className='font-extrabold text-white text-4xl'>{projectsCompleted}+</p>
    <p className='font-extrabold text-white text-xxl'>Projects Completed</p>
  </div>
</div>

{/* Fourth Block */}
<div className='flex flex-col items-center'>
  <div className='flex flex-col p-4 h-fit w-fit shadow-md rounded-full bg-green-700'>
    <FaThumbsUp size={70} color='white' className='rounded-full p-1' />
  </div>
  <div className='text-center space-y-2 ml-2 mt-4'>
    <p className='font-extrabold text-white text-4xl'>{happyClients}+</p>
    <p className='font-extrabold text-white text-xxl'>Happy Clients</p>
  </div>
</div>


        </div>
      </div>


      <div className='flex flex-row items-center justify-center mb-10'>
        <div className='flex flex-row -mt-36'>
          <div className=''>
            <Image src={Work} alt='Working Image left' width={0} height={0} className='w-' />


          </div>
          <section className="flex items-center justify-center bg-white w-[50%] shadow-2xl ">
            <div className="max-w-xl bg-white rounded-2xl  p-8">
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
              <div className='flex flex-row gap-5'>

                <div className='w-[]'>
                  <Image src={Hardworking} alt='images' className='object-cover' />

                </div>


                <div>

                  <ul className="list-none text-green-700 space-y-2 mb-6 mt-4">
                    <li className="before:content-['✔'] before:mr-2">Passion</li>
                    <li className="before:content-['✔'] before:mr-2">Creativity</li>
                    <li className="before:content-['✔'] before:mr-2">Commitment</li>
                    <li className="before:content-['✔'] before:mr-2">Expertise</li>
                  </ul>

                </div>

              </div>


            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default Infopart
