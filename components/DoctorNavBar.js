import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadDoctor } from "../redux/actions/doctorActions";
import { signOut } from "next-auth/react";
import Link from 'next/link';
import { 
    Bars3Icon,
    MagnifyingGlassIcon,
    MapPinIcon,
    UserIcon,
    XMarkIcon
 } from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';


function DoctorNavBar() {
    
    const router = useRouter();
    const dispatch = useDispatch();
    const { doctor, loading } = useSelector(state => state.loadedDoctor);
    
    useEffect(() => {
        dispatch(loadDoctor())
    }, [dispatch]) 

    const logoutHandler = () => {
        signOut();
    }



  return (
    <div>
        <nav className="sticky bg-white shadow top-0 z-50  p-4">
        <div className="mx-auto px-4">
            <div className="flex justify-between relative">
                <div className="flex space-x-7">
                    {/*left Nav*/}
                    <div className="text-indigo-800 hover:text-indigo-500 transition duration-300 text-3xl font-bold cursor-pointer m-auto">
                        <p onClick={ () => router.push('/doctor/dashboard')} className="">MyHealth</p>   
                    </div>
                    
                    {/*right Nav */}
                </div>
                <div className="hidden md:flex justify-end space-x-6">
                    <div className="hidden md:flex items-center space-x-1">
                        <a onClick={ () => router.push('/doctor/patients')} className="py-4 px-2 text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">MyPatients</a>
                        <a onClick={ () => router.push('/doctor/patients')} className="py-4 px-2 text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">Schedule</a>
                    </div>
                    
                    <div className="flex items-center cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                        {doctor ? (
                            <div className="flex">
                                <img className="avatar avatar-nav" src={doctor.avatar && doctor.avatar.url}></img>
                                {/*<p>{user.name.substring(0, user.name.indexOf(' '))}</p>*/}
                                <span onClick={logoutHandler}>Logout</span>
                            </div>
                             
                             ) : !loading &&
                             <Link href='/doctor/login' className="">
                                <div className="flex"><p><UserIcon className="h-7 p-1 "/></p><p className="mr-2">Login</p></div>
                             </Link>
                             }
                        </div>
                </div>                
            </div>
        </div>
    </nav>
    </div>
  )
}


export default DoctorNavBar