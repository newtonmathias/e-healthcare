import React from 'react'
import { useSelector } from 'react-redux';
import MediumDocCard from './MediumDocCard';

function Inperson({  }) {
  const { doctors } = useSelector(state => state.allDoctors);
  
  return (
    <div className='bg-color1 py-10' id='televisit'>
        <div className='max-w-screen-xl mx-auto'>
            <h3 className='text-3xl font-extrabold py-4'>Best telehealth appointments available now</h3>
            <div className='mx-auto'>
                {doctors.filter((doctor) => doctor.service === "Appointment").map((doctor) => (
                    <MediumDocCard key={doctor._id} doctor={doctor}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Inperson