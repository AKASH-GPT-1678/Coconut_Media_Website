import React from 'react'
import Mystudio from '../testimonial/mystudio.webp'
import Image from 'next/image'
const Visionpart = () => {
    return (
        <div className='h-[600px] w-full border-2 border-black'>
            <div className="h-[60%]  flex flex-row items-center justify-center p-3  bg-green-50 
      " style={{ backgroundImage: `url(${'https://storage.googleapis.com/management_324/mystudio.webp'})` }}>
                <div className='flex flex-row  items-center justify-center'>
                    <div className='flex flex-col items-center justify-center '>

                        <div className=' bg-green-600 h-26 w-26 flex items-center justify-center rounded-2xl'>

                            <div className='border-4 border-white h-8 w-8 '>

                            </div>

                        </div>
                        <div>
                            <p className='uppercase text-white'>Frames shaped by intention and imagination</p>
                            <p className='text-5xl text-white'>Vision in Motion</p>
                        </div>


                    </div>
                </div>

            </div>
            <div className='h-[40%]' style={{ backgroundImage: `url(${'https://storage.googleapis.com/management_324/wooden.jpg' })` }}>


                <div className='flex flex-row items-center justify-center gap-5 '>



                    <Image src={Mystudio} alt="Image 1" width={300} height={300} className='-mt-20' />
                    <Image src={Mystudio} alt="Image 1" width={300} height={300} className='-mt-20' />
                    <Image src={Mystudio} alt="Image 1" width={300} height={300} className='-mt-20' />

                </div>



            </div>
        </div>
    )
}

export default Visionpart