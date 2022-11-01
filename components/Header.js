import { 
    Bars3Icon,
    MagnifyingGlassIcon,
    MapPinIcon,
    UserIcon,
    XMarkIcon
 } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react'

function Header() {
    const router = useRouter();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

 return (
    <nav className="sticky bg-white shadow top-0 z-50  p-4">
        <div className="mx-auto px-4">
            <div className="flex justify-between relative">
                <div className="flex space-x-7">
                    {/*left Nav*/}
                    <div className="text-indigo-800 hover:text-indigo-500 transition duration-300 text-3xl font-bold cursor-pointer m-auto">
                        <p onClick={ () => router.push('/')} className="">MyHealth</p>   
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a className="py-4 px-2 text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">Patients</a>
                        <a className="py-4 px-2 text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">Providers</a>
                    </div>
                    {/*right Nav */}
                </div>
                <div className="hidden md:flex justify-end space-x-6">
                    <div className="flex relative  items-center cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                        <input type="text" placeholder="Doctor, Service, Symptom" className="pl-8  items-center focus:outline-none border-b border-indigo-500"/>
                        <MagnifyingGlassIcon className="h-14 p-4  absolute inset-y-0 left-0 flex items-center pl-0" />
                    </div>
                    <div className="flex relative items-center  cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                        <input type="text" className="pl-8 items-center focus:outline-none  border-b border-indigo-500" placeholder="Westlands,Nairobi"/>
                        <MapPinIcon className="h-14 p-4 absolute inset-y-0 left-0 flex items-center pl-0"/>
                    </div>
                    <Link href='/login'>
                        <div className="flex items-center cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                            <UserIcon className="h-3/4 p-1 "/>
                            <p className="mr-2">Login</p>
                        </div>
                    </Link>
                </div>
                {/*mobile Icon bars */}
                <div className="md:hidden flex items-center">
						<Bars3Icon className={isNavExpanded ? "hidden" : "h-6 w-6"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
				</div>
                <div className={isNavExpanded ? "absolute p-5 m-auto bg-white" : "hidden"}>
                    <div className="">
                        <XMarkIcon className="h-6 w-6" onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
                        <p>Login</p>
                        <p>Sign Up</p>
                        <p>Televisit</p>
                        <p>Book Appointment</p>
                        <p>Provider Login</p>
                    </div>
			    </div>
                
            </div>
        </div>

    </nav>
  )
}

export default Header