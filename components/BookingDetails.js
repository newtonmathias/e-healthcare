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
    <div className="container">
            <div className="flex flex-row justify-between">
                <div className="col-12 col-lg-8 mt-5 booking-details">
                    {booking && booking.doctor && booking.user &&
                        <>

                            <h2 className="my-5">Booking # {booking._id}</h2>

                            <h4 className="mb-4">User Info</h4>
                            <p><b>Name:</b> {booking.user && booking.user.name}</p>
                            <p><b>Email:</b> {booking.user && booking.user.email}</p>
                            <p><b>Amount:</b> ${booking.amountPaid}</p>

                            <hr />

                            <h4 className="mb-4">Booking Info</h4>
                            <p><b>Session Start:</b> {booking.sessionStart}</p>

                            <p><b>Session Stop:</b> {booking.sessionStop}</p>

                            <p><b>Days of Stay:</b> {booking.daysOfStay}</p>

                            <hr />



                            <h4 className="mt-5 mb-4">Booked doctor:</h4>

                            <hr />
                            <div className="cart-item my-1">
                                <div className="row my-5">
                                    <div className="col-4 col-lg-2">
                                        <Image
                                            src={booking.doctor.avatar.url}
                                            alt={booking.doctor.name}
                                            height={45}
                                            width={65}
                                        />
                                    </div>

                                    <div className="col-5 col-lg-5">
                                        <Link href={`/doctor/${booking.doctor._id}`}>{booking.doctor.name}</Link>
                                    </div>

                                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                        <p>${booking.doctor.price}</p>
                                    </div>

                                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                        <p>daysOfStay Day(s)</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                        </>
                    }
                </div>
            </div>
        </div>
  )
}

export default BookingDetails