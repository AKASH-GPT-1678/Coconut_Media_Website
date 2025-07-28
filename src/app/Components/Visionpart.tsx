import React from 'react'
import Mystudio from '../testimonial/mystudio.webp'
import Image from 'next/image';

const images = [
    "https://res.cloudinary.com/dffepahvl/image/upload/v1753692201/fbp1mriss5bshnjbddxm.jpg",
    "https://res.cloudinary.com/dffepahvl/image/upload/v1753692201/bgug3m7runy2wh3cpuoh.jpg",
    "https://res.cloudinary.com/dffepahvl/image/upload/v1753692201/bl0l2nbqq3m4ydwjcrxu.jpg"
];
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
            <div className='h-[40%] flex items-center justify-center w-full' style={{ backgroundImage: `url(${'https://storage.googleapis.com/management_324/wooden.jpg'})` }}>

                <div className='flex flex-row gap-20  max-w-[1400px] items-center justify-center h-[300px] overflow-x-scroll -mt-40'>
                    <div className="overflow-hidden  h-fit object-cover mx-auto rounded-xl shadow-lg">
                        <div className="flex w-full gap-10 h-full transition-transform duration-500 ease-in-out">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Slide ${index}`}
                                    className={`w-1/3 object-cover h-full ${index % 2 == 0 ? 'skew-3' : 'skew-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Visionpart