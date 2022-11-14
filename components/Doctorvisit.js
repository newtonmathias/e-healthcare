import React from 'react'
import { useSelector } from 'react-redux';
import DoctorCard from './DoctorCard'

function Doctorvisit() {
  const { doctors } = useSelector(state => state.allDoctors);

  return (
    <div className='bg-color1 py-10' id='appointment'>
        <div className='max-w-screen-xl mx-auto'>
            <h3 className='text-3xl font-extrabold py-4'>In-person doctor visit</h3>
            <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md: mx-auto'>
                {doctors.filter((doctor) => doctor.service === "Televisit").map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Doctorvisit