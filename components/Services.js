import { 
    ArrowRightIcon,
    VideoCameraIcon,
    ClipboardDocumentListIcon,
    CalendarDaysIcon,
    BuildingOffice2Icon,
    FaceFrownIcon,
    BoltIcon,
    EyeDropperIcon
 } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

function Services() {
    const router = useRouter();
    
  return (
    <div className=' hidden md:flex flex-col max-w-screen-xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-3xl'>Top-rated online doctors & specialists available now.</h1>
            <h2 className='text-lg'>Choose from thousands of providers at every day affordable prices. Book online today.</h2>
        </div>
        <div className='grid grid-flow-row-dense grid-cols-7'>
            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44 cursor-pointer'   onClick={ () => router.push('/emergency')}>
                <BoltIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Emergency</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>
            
            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44 cursor-pointer' onClick={ () => router.push('/telehealth')}>
                <VideoCameraIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Telehealth</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>


            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44 cursor-pointer' onClick={ () => router.push('/inperson')}>
                <BuildingOffice2Icon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>In-person doctor visit</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44 cursor-pointer' onClick={ () => router.push('/therapy')}>
                <FaceFrownIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Therapy Session</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44 cursor-pointer' onClick={ () => router.push('/labandbloodwork')}>
                <EyeDropperIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Lab & Bloodwork</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>
        </div>
    </div>
  )
}

export default Services