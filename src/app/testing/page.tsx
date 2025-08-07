"use client"
import React from 'react';
import Image from 'next/image';
import { Companies } from '../myasset/companies/comapnies';
import { motion } from 'framer-motion';
import { MyImages } from '../myasset/myprofile';
const page = () => {
  return (
    <div>
      <div className='flex flex-row overflow-x-auto gap-8 max-w-[800px] justify-center mt-10'>
        {Companies.map((company, index) => (
          <Image
            key={index}
            src={company}
            alt={"tasiwr"}
            className="object-contain h-[100px] w-[200px] p-4"
          />
        ))}
      </div>

    </div>




  )
}

export default page
