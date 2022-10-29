import React from 'react'
import DoctorCard from './DoctorCard'

function TeleFeed({ doctorsList }) {
  return (
    <div className='bg-color1 py-10'>
        <div className='max-w-screen-xl mx-auto'>
            <h3 className='text-3xl font-extrabold py-4'>Telehealth visit</h3>
            <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md: mx-auto'>
                {doctorsList.filter((doctor) => doctor.service === "Telemedicine").map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TeleFeed