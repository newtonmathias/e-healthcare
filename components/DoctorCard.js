import Image from 'next/image'
import { format } from 'date-fns'


function DoctorCard({ doctor }) {
  return (
        <div className='flex space-x-2'>
            <div className='m-2 bg-white p-4' >
                <h3 className='text-xl text-indigo-500 font-bold'>{doctor.name}</h3>
                <div className='flex mt-3'>
                    <div>
                        <Image src="/microscope-doctor.jpg" width={75} height={75} className='rounded-full'/>
                    </div>
                    <div className='px-2'>
                        <p>{doctor.rating}</p>
                        <p>{doctor.type}</p>
                        <p className='bg-green-200 px-1 my-1'>{doctor.availabilty}</p>
                        <p className='bg-color1'>HIGHLY RATED </p>
                    </div>
                </div>
                <p className='border-b pb-4'>&quot;{doctor.desc}&quot;</p>
                <p>{ format(new Date(), "PPP") }</p>
            
                <div>
                    {doctor.times.map((time) =>(
                        <button className='small-button m-1'key={Math.random()}>{ time }</button>
                    ))}
                    <button>More times</button>
                </div>
            </div>
            
        </div>
  )
}

export default DoctorCard