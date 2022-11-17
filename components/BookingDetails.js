import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/bookingActions";
import Image from "next/image";

const BookingDetails = () => {
    const dispatch = useDispatch()

    const { booking, error } = useSelector(state => state.bookingDetails)
    const { user } = useSelector(state => state.loadedUser)

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, booking])

  return (
    <div className="">
                    {booking && booking.doctor && booking.user &&
                        <>
<div class="max-w-sm content-center flex flex-col justify-center mx-auto mt-[10vh] rounded-lg border border-indigo-200 shadow-md dark:bg-indigo-800 dark:border-indigo-700">
    <div class=" h-40 rounded-t-lg bg-contain bg-no-repeat bg-[url(https://www.linkpicture.com/q/Rectangle-6.png)]  flex flex-col justify-end pl-20 pr-20 pt-52  max-w-[24rem]">
    <div className="col-4 col-lg-2">
                                        <Image
                                            src={booking.doctor.avatar.url}
                                            alt={booking.doctor.name}
                                            height={100}
                                            width={100}
                                            className='rounded-full'
                                        />
                                    </div>
    </div>
    <div class="flex flex-col pl-10  pb-10">
        <h1 class="text-3xl text-indigo-900 font-semibold">
            <Link href={`/doctor/${booking.doctor._id}`}>{booking.doctor.name}</Link>
        </h1>     
        <div class="mb-2 mt-2">
            <h1 class="text-lg font-semibold">Specilities</h1>
            <p class="text-base text-indigo-800 font-semibold">{booking.doctor.specilities}</p>
        </div>
        <div class="mb-2 mt-2">
            <h1 class="text-lg font-semibold">Booking Details</h1>
            <div class="mt-2 flex items-center">
                <img class="w-5" src="https://www.linkpicture.com/q/image-13_16.png" />
                <h1 class="text-base text-indigo-900 ml-5 font-semibold"><p><b className=" text-black">Session Start:</b> {booking.sessionStart}</p></h1>
            </div>
            <div class="mt-2 flex items-center">
                <img class="w-5" src="https://www.linkpicture.com/q/image-14_4.png" />
                <h1 class="text-base text-indigo-900 ml-5 font-semibold"><p><b className=" text-black">Session Stop:</b> {booking.sessionStop}</p></h1>
            </div>
            <div class="mt-2 flex items-center">
                <img class="w-5" src="https://www.linkpicture.com/q/image-15_4.png" />
                <h1 class="text-base text-indigo-900 ml-5 font-semibold"><p><b className=" text-black">Amount:</b> ${booking.amountPaid}</p></h1>
            </div>
            <div class="mt-2 flex items-center">
                <img class="w-5" src="https://www.linkpicture.com/q/image-16_5.png" />
                <h1 class="text-base text-indigo-900 ml-5 font-semibold"><p><b className=" text-black">Location:</b> {booking.doctor.location}</p></h1>
            </div>
            <div class="mt-2 flex items-center">
                <img class="w-5" src="https://www.linkpicture.com/q/image-16_5.png" />
                <h1 class="text-base text-indigo-900 ml-5 font-semibold"><p><b className=" text-black">Institution:</b> {booking.doctor.institution}</p></h1>
            </div>
            
           
        </div>
    </div>
</div>

                        </>
                    }
                </div>
        
  )
}

export default BookingDetails