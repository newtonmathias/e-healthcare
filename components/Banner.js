import Image from 'next/image'

function Banner() {
  return (
    <div className='bg-color1 flex h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[500px]'>
      {/*right side */}
      <div className='basis-1/2 m-auto'>
        <div className='space-y-6 bg-white p-10 w-[600px] m-auto -mr-10'>
          <p className='text-3xl font-bold'>Doctor appointments</p>
          <p className='text-indigo-500 text-3xl font-bold'>as low as $19</p>
          <p>
            Find the best price for the highest quality physicians. Book an appointment in minutes.
          </p>
          <button className='button'>
            Get started
          </button>
          <p>Named Best Overall Telehealth byHealthline</p>
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