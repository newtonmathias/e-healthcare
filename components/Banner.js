import Image from 'next/image'

function Banner() {
  return (
    <div className='bg-color1 flex h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[500px]'>
      {/*right side */}
      <div className='basis-1/2 m-auto'>
        <div className='bg-white p-10 w-[600px] m-auto -mr-10'>
          <p className='text-5xl font-bold'>Not just a doctor</p>
          <p className='text-indigo-500 text-5xl font-bold'>your doctor</p>
          <p className='py-4'>
            Find the best price for the highest quality physicians. Get connected to a doctor in minutes.
          </p>
          <button className='button'>
            Get started
          </button>
          <p className='py-4'>Named Best Overall Telehealth by MOH</p>
        </div>
        
      </div>

      {/*left side */}
      <div className='basis-1/2 relative '>
          <Image
          alt='banner'
          src="/kowalievska.jpg"
          layout='fill'
          objectFit='cover'
  />
      </div>
    </div>
  )
}

export default Banner