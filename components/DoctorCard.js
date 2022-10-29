import Image from 'next/image'
import { format } from 'date-fns'
import { StarIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';


function DoctorCard({ doctor }) {
    const starArray = [...Array(5).keys()].map(i => i + 1);
    const Rating = () =>
    starArray.map(i => ( // use many times
        <StarIcon className='h-4 text-orange-400' key={Math.random()}/>
    ));

    const router = useRouter();

  return (
        <div className='flex space-x-2'>
            <div className='m-2 bg-white p-4' >
                <h3 className='text-3xl text-indigo-800 font-bold'>{doctor.name}</h3>
                <div className='flex mt-3'>
                    <div>
                        <Image src="/microscope-doctor.jpg" width={75} height={75} className='rounded-full'/>
                    </div>
                    <div className='px-2'>
                        <p className='flex'>{Rating(doctor.rating)}</p> 
                        <p className='font-serif font-extralight text-sm p-1'>{doctor.specilities[0]}</p>
                        <p className='bg-green-200 px-1'>{doctor.availability ? "Available Today" : "Available Tomorrow"}</p>
                        <div className='bg-color1 inline-flex my-1'>
                            <StarIcon className='h-3 my-auto text-orange-400 pl-1'/>
                            <p className='font-serif p-1 text-xs font-semibold text-orange-400'>HIGHLY RATED</p>
                        </div>
                    </div>
                </div>
                <p className='border-b pb-4 font-serif font-extralight'>{doctor.desc.substring(0, 65)}...</p>
                <p>{ format(new Date(), "PPP") }</p>
            
                <div>
                    {doctor.times.slice(0, 5).map((time) =>(
                        <button className='small-button m-1'key={Math.random()}>{ time }</button>
                    ))}
                    <button className='m-1 w-20 h-9 text-indigo-500 font-bold bg-indigo-100 text-sm' onClick={ () => router.push('/doctor')}>More times</button>
                </div>
            </div>
            
        </div>
  )
}

export default DoctorCard