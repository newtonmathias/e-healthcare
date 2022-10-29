import Image from 'next/image';
import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import axios from 'axios';

import { 
    StarIcon,
    TrophyIcon,
    HandThumbUpIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/solid'

function Doctor({doctor}) {
    console.log(doctor);

const starArray = [...Array(5).keys()].map(i => i + 1);
const Rating = () =>
  starArray.map(i => ( // use many times
    <StarIcon className='h-4 text-orange-400' key={Math.random()}/>
  ));
  return (
    <div className='bg-gray-100'>
        <Header />
        <div className='max-w-screen-md mx-auto bg-white mt-10 shadow'>
            <div className="flex justify-between">
            <div className='p-7'>
                <h3 className='font-bold text-3xl'>{doctor.name}</h3>
                <div className='flex'>
                    <div className='flex py-1'>
                        {Rating(doctor.rating)}
                    </div>
                    <p className='pl-2 font-serif'>
                        {doctor.specilities.length ? doctor.specilities.map((specility) =>(<span key={Math.random()}> {specility} </span>)) : ','}
                    </p>
                </div>
                <div className='bg-color1 inline-flex my-3'>
                    <TrophyIcon className='h-3 my-auto text-orange-400 px-1'/>
                    <p className='font-serif pr-1'>Popular</p>
                </div>
                <h3 className='font-bold text-lg pt-3'>{doctor.service === "Telemedicine" ? "Telehealth visit" : "In-Person Visit"}</h3>
            </div>
            <div className='p-7'>
                <Image src="/microscope-doctor.jpg" width={80} height={80} className='rounded-full'/>
            </div>
            </div>
            <div>
                <div className='p-2 bg-indigo-500 text-2xl text-white'>
                    <h3 className=' text-center'>Availability</h3>
                </div>
                <div className='grid grid-cols-3 text-center'>
                    <div>
                        <p>TUE NOV 8</p>
                    </div>
                    <div>
                        <p>TUE NOV 8</p>
                    </div>
                    <div>
                        <p>TUE NOV 8</p>
                    </div>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        {doctor.times.map((time) =>(
                            <div className='time-button'key={Math.random()}>{time} KSH.{ doctor.price}</div>
                        ))}
                    </div>
                    <div>
                        {doctor.times.map((time) =>(
                            <div className='time-button'key={Math.random()}>{time} KSH.{ doctor.price}</div>
                        ))}
                    </div>
                    <div>
                        {doctor.times.map((time) =>(
                            <div className='time-button'key={Math.random()}>{time} KSH.{ doctor.price}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className='px-7'>
                    <h3 className='font-semibold text-2xl py-2'>About the provider</h3>
                    <h4 className='font-serif'>{doctor.name}</h4>
                    <p className='pt-2 pb-8 border-b font-serif'>Dr. John Main has more than 20 years of nursing experience in a variety of settings including MED/Surg, LTAC, Behavioral health and home health care. He obtained his Doctor of Nursing Practice at University of Massachusetts global and is dual certified as psychiatric mental health practitioner and family nurse practitioner.</p>
                </div>
                <div className='p-7 '>
                    <h3 className='font-bold text-xl pb-2 '>Service provider credentials</h3>
                    <div className='grid grid-cols-3 gap-4 border-b pb-8'>
                        <div>
                            <h4 className='font-semibold text-lg'>Specialities</h4>
                            <p className='font-serif font-thin'>
                                {doctor.specilities.length ? doctor.specilities.map((specility) =>(<span key={Math.random()}> {specility} </span>)) : ','}
                            </p>
                        </div>
                        <div>
                            <h4 className='font-semibold text-lg'>Practice name</h4>
                            <p className='font-serif font-thin'>{doctor.service}</p>
                        </div>
                        <div>
                            <h4 className='font-semibold text-lg'>Gender</h4>
                            <p className='font-serif font-thin'>{doctor.gender}</p>
                        </div>
                        <div>
                            <h4 className='font-semibold text-lg'>Languages spoken</h4>
                            <p className='font-serif font-thin'>
                                {doctor.languanges.length ? doctor.languanges.map((language) =>(<span key={Math.random()}> {language} </span>)) : ','}
                            </p>
                        </div>
                        <div>
                            <h4 className='font-semibold text-lg'>Languages spoken</h4>
                            <p className='font-serif font-thin'>English</p>
                        </div>
                    </div>
                </div>
                <div className='px-7'>
                    <h3 className='font-semibold text-2xl py-2'>Patient reviews</h3>
                    <div className="flex justify-between">
                        <div>
                            <p>Overall satisfaction</p>
                            <div className="flex ">
                                {Rating(doctor.rating)}
                            </div>
                        </div>
                        <div>
                            <p>Waiting time</p>
                            <p>Would recommend</p>
                            <p>Bedside manner</p>
                            <p>Would visit again</p>
                        </div>
                    </div>
                    {doctor.reviews.map((review) =>(
                        <div className='my-5 border-b' key={Math.random()}>
                        <div className="flex justify-between">
                            <div className='text-green-800 font-bold inline-flex my-3'>
                                <HandThumbUpIcon className='h-3 my-auto px-1'/>
                                <p className='font-serif pr-1'>Satisfied</p>
                            </div>
                            <div className='text-green-800 inline-flex my-3'>
                                <CheckBadgeIcon className='h-3 my-auto px-1'/>
                                <p className='font-serif pr-1'>Verified patient</p>
                            </div>
                        </div>
                        <p className='pb-8'>
                            {review}
                        </p>
                    </div>                        
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        <div className='bg-white shadow-md sticky bottom-0'>
            <div className='flex justify-between max-w-screen-md mx-auto py-4'>
                <div>
                    <p className='font-extrabold text-indigo-500'>KSH.300</p>
                    <p className='font-bold text-sm'>Fri, Oct 28 - 4:00 AM GMT+3</p>
                    <p className='text-sm font-extralight'>Free cancellation*</p>
                </div>
                <div>
                    <button className='py-4 px-8 bg-indigo-500 text-color1 font-extrabold'>BOOK</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    const res = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/doctors/${params.id}`);
    return {
      props: {
        doctor: res.data,
      },
    };
  };

export default Doctor