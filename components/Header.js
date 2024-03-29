import { 
    Bars3Icon,
    MagnifyingGlassIcon,
    MapPinIcon,
    UserIcon,
    XMarkIcon
 } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from "../redux/actions/userActions";
import { signOut } from "next-auth/react";


function Header() {
    const router = useRouter();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const dispatch = useDispatch()

    const { user, loading } = useSelector(state => state.loadedUser)

    const [location, setLocation] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();

        if (location.trim()) {
            router.push(`/?location=${location}`)
        } else {
            router.push('/')
        }
    }

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const logoutHandler = () => {
        signOut();
    }

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
                    <Link href={user?'#televisit' :'/login'} className="">
                        <a className="py-4 px-2 text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">{user?'Televisit' : 'Patient'}</a>
                    </Link>
                    <Link href={user?'#appointment' :'/doctor/login'} className="">
                        <a className="py-4 px-2 text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">{user?'Appointment' : 'Provider'}</a>
                    </Link>
                    </div>
                    {/*right Nav */}
                </div>
                <div className="hidden md:flex justify-end space-x-6">
                    {/*<div className="flex relative  items-center cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                        <input type="text" placeholder="Doctor, Service, Symptom" className="pl-8  items-center focus:outline-none border-b border-indigo-500"/>
                        <MagnifyingGlassIcon className="h-14 p-4  absolute inset-y-0 left-0 flex items-center pl-0" />
                    </div>*/}
                    <form onSubmit={submitHandler} className="flex relative items-center  cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                        <input 
                            type="text" className="pl-8 items-center focus:outline-none  border-b border-indigo-500" 
                            placeholder="Nairobi"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            />
                        <MapPinIcon className="h-14 p-4 absolute inset-y-0 left-0 flex items-center pl-0"/>
                    </form>
                    
                        <div className="flex items-center cursor-pointer text-indigo-800 font-semibold hover:text-indigo-500 transition duration-300">
                        {user ? (
                            <div className="group inline-block">
                            <button
                              className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                            >
                              <span className="pr-1 font-semibold flex">
                                <img className="avatar avatar-nav" src={user.avatar && user.avatar.url}></img>
                                <p>{user.name.substring(0, user.name.indexOf(' '))}</p>
                              </span>
                              <span>
                                <svg
                                  className="fill-current h-4 w-4 transform group-hover:-rotate-180
                                  transition duration-150 ease-in-out"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                  />
                                </svg>
                              </span>
                            </button>
                            <ul
                              className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                            transition duration-150 ease-in-out origin-top min-w-32"
                            >
                              <li className="rounded-sm px-3 py-1 hover:bg-gray-100" onClick={ () => router.push('/user/update')}>Profile</li>
                              <li className="rounded-sm px-3 py-1 hover:bg-gray-100" onClick={ () => router.push('/bookings/mybookings')}>My Bookings</li>
                              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                <button
                                  className="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                  <span className="pr-1 flex-1" onClick={logoutHandler}>Log Out</span>
                                </button>
                                
                              </li>
                            </ul>
                          </div>
                             
                             ) : !loading &&
                             <Link href='/login' className="">
                                <div className="flex"><p><UserIcon className="h-7 p-1 "/></p><p className="mr-2">Login</p></div>
                             </Link>
                             }
                        </div>
                </div>
                {/*mobile Icon bars */}
                <div className="md:hidden flex items-center">
						<Bars3Icon className={isNavExpanded ? "hidden" : "h-6 w-6"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
				</div>
                <div className={isNavExpanded ? "absolute p-5 m-auto bg-white" : "hidden"}>
                    <div className="">
                        <XMarkIcon className="h-6 w-6" onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
                        <Link href="/login">
                            <p>Login</p>
                        </Link>
                        <Link href="/register">
                            <p>SignUp</p>
                        </Link>
                        <Link href="#">
                            <p>Televisit</p>
                        </Link>
                        <Link href="#appointment">
                            <p>Book Appointment</p>
                        </Link>
                        <Link href="/doctor/login">
                            <p>Provider Login</p>
                        </Link>
                    </div>
			    </div>
                
            </div>
        </div>

    </nav>
  )
}

export default Header