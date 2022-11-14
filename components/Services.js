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

function Services() {
  return (
    <div className=' hidden md:flex flex-col max-w-screen-xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-3xl'>Top-rated online doctors & specialists available now.</h1>
            <h2 className='text-lg'>Choose from thousands of providers at every day affordable prices. Book online today.</h2>
        </div>
        <div className='grid grid-flow-row-dense grid-cols-7'>
            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <BoltIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Emergency</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>
            
            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <VideoCameraIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Telehealth</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <CalendarDaysIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Doctor Appointment</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <BuildingOffice2Icon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>In-person doctor visit</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <FaceFrownIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Therapy Session</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <EyeDropperIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Lab & Bloodwork</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>

            <div className='relative flex flex-col m-5 z-10 p-4 bg-color1 h-44'>
                <ClipboardDocumentListIcon className=' absolute top-2 left-2 h-5' />
                <h2 className='m-auto font-extrabold'>Video prescription</h2>
                <ArrowRightIcon className='absolute bottom-2 left-2 h-5' />
            </div>
        </div>
    </div>
  )
}

export default Services