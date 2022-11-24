import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/bookingActions";
import Image from "next/image";
import Script from 'next/script'
import { useState } from "react";


const PatientDetails = () => {
    const dispatch = useDispatch()

    const { booking, error } = useSelector(state => state.patient)
    const { doctor, loading } = useSelector(state => state.loadedDoctor);
    const [message, setMessage] = useState('');
    console.log(booking);

    
    function handleClick () {
      let modal = document.getElementById("my-modal");

        modal.classList.remove('hidden')
        modal.classList.add('flex')

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.add('hidden')
            }
          }
    }

    const handleSubmit = async (e) => {
      let modal = document.getElementById("my-modal");
      e.preventDefault();
    
       
        const res = await fetch("/api/bookings/doctor/sendmail", {
          body: JSON.stringify({
            email: booking.user && booking.user.email,
            fullname: booking.doctor && booking.doctor.name,
            subject: 'Ehealthcare',
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
  
        const { error } = await res.json();
        if (error) {
          console.log(error);
          return;
        }
        modal.classList.add('hidden')
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, booking])

  return (
           
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-[url('/doctorhero.jpg')]">
<Script src="https://smtpjs.com/v3/smtp.js" />
{booking && booking.user &&
<>
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="relative px-4 py-10 bg-color1 shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-filter: blur(20px);">
      <div className="max-w-md mx-auto">
        <div>
        <h1 className="text-lg font-bold text-indigo-900">Booking ID: {booking._id}</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <h1 className="text-lg font-bold text-indigo-900">Patient Details</h1>
            <ul className="list-disc space-y-2">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2">
                 <b className="text-black">Name:</b> {booking.user && booking.user.name}
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2 text-green-500">
                    <b className="text-black">Payment Status:</b> {booking.paymentInfo.status}
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2"><b className="text-black">Amount:</b> KSH.{booking.amountPaid}</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2"><b className="text-black">Session Start:</b> {booking.sessionStart}</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2"><b className="text-black">Date:</b> {booking.dateOfBooking}</p>
              </li>
            </ul>
          </div>
          <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <button className="small-button" onClick={handleClick}>Message </button>
          </div>
          <div
            className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full  w-full"
            id="my-modal"
        >
        <div
            className="relative top-20 m-auto p-5 border w-96 bg-opacity-60 shadow-lg rounded-md bg-white h-1/2"
        >
            <div className="mt-3 text-center">
            <textarea
                    name="" id="" cols="40" rows="8" className='border border-solid border-gray-300 shadow-lg rounded-md outline-none'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button 
                    className='small-button font-extrabold'
                    onClick={handleSubmit}
                > 
                Send
                </button>
            </div>
        </div>
    </div>
        </div>
      </div>
    </div>
  </div>
  </>
}
</div>
  )
}

export default PatientDetails