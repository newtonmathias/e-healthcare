import Image from 'next/image'
import Link from "next/link";


function Banner() {
  return (
    <div className='flex h-[700px] bg-color1'>
      <div className=' flex items-center justify-center md:basis-1/2 md:ml-auto relative w-full mb-60 md:mb-1'>
          <Image
          alt='banner'
          src="/kowalievska.jpg"
          layout='fill'
          objectFit='cover'
          />
      </div>
      <div className='absolute left-0 right-0 m-auto bottom-1 w-3/4  md:basis-1/2 md:w-[600px] md:top-1/4 md:right-1/3'>
            <div className='p-6  bg-white opacity-80 text-center md:p-10'>
              <p className=' font-serif font-extrabold text-2xl md:text-5xl '>Not just a doctor</p>
              <p className='text-indigo-800 text-2xl font-serif font-extrabold md:text-5xl'>your doctor</p>
              <p className='py-4 font-serif'>
                Find the best price for the highest quality physicians. Get connected to a doctor in minutes.
              </p>
              <Link href='/register'>
                <button className=' time-button bg-indigo-500 md:button'>
                  Get started
                </button>
              </Link>
              <p className='py-4'>Welcome to the future of healthcare</p>
            </div>
          </div>
    </div>
  )
}


export default Banner
