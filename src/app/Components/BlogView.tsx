import React from 'react'
import { Blogs } from '../testimonial/testimonial'
import Image from 'next/image'

import { i } from 'framer-motion/client'
import { FaFolderOpen } from "react-icons/fa";
export const BlogView = () => {
  return (
    <div className='border-2 '>
        <div className='flex flex-col lg:flex-row gap-4 mt-10 items-center justify-center '>
          {Blogs.map((item, index) => (
            <div key={index} className='w-[370px] h-[480px] rounded-2xl shadow-2xl'>
              <div className='h-[50%] overflow-hidden'>
                 <Image src={item.imageUrl}  alt='myblogs' width={400} height={400} className='object-cover transition-transform duration-500 group-hover:scale-110'   />
              </div>
              <div className='h-[50%] flex flex-col p-4 mt-4'>
                <p className='font-extrabold hover:text-green-600'>{item.title}</p>
                <div className='flex flex-row mt-2 gap-2'>
                  <FaFolderOpen size={20} fill='green'/>
                  <p>{item.category}</p>

                </div>
                <p className='mt-2 text-lg opacity-70'>{item.description}</p>



              </div>


            </div>
            
          ))}
          
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-4 justify-between max-w-[1200px] h-[250px] mt-10 p-10 bg-green-500 mx-auto rounded-xl'>


          <div className='flex flex-col text-amber-50'>
            <p className='text-4xl font-bold'>Let's Make Your Brand</p>
            <p className='text-4xl font-bold'>Unstoppable, Together!</p>

          </div>

          <div className='rounded-2xl'>
            <p className='p-6 text-lg text-white bg-black rounded-xl uppercase cursor-pointer'> Start Your story with us</p>
          </div>

        
       
        </div>
    </div>
  )
}
