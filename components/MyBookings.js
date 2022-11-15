import Link from "next/link";
import { MDBDataTable } from 'mdbreact';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/bookingActions";
import { 
    ArrowDownTrayIcon,
    EyeIcon
} from '@heroicons/react/24/solid'


function MyBookings() {

    const dispatch = useDispatch();
    const { bookings, error } = useSelector(state => state.bookings);

    useEffect (() => {
        if(error) {
            toast.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch])

    const setBookings = () => {
        const data = {
            columns: [
                {
                    label: 'Booking ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Session Start',
                    field: 'sessionStart',
                    sort: 'asc'
                },
                {
                    label: 'Session Stop',
                    field: 'sessionStop',
                    sort: 'asc'
                },
                {
                    label: 'Amount Paid',
                    field: 'amount',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }

        bookings && bookings.forEach(booking => {
            data.rows.push({
                id: booking._id,
                sessionStart: booking.sessionStart,
                sessionStop: booking.sessionStop,
                amount: booking.amountPaid,
                actions:
                    <div className='flex'>
                        <Link href={`/bookings/${booking._id}`}>
                                <EyeIcon />
                        </Link>
                        <button className="btn btn-success mx-2">
                                <ArrowDownTrayIcon className="h-6"/>
                        </button>
                    </div>
            })
        })

        return data;

    }
  return (
    <div className='flex flex-col space-x-8'>
            <h1 className='my-5'>My Bookings</h1>

            <MDBDataTable
                data={setBookings()}
                className='px-6'
                bordered
                striped
                hover
            />

        </div>
  )
}

export default MyBookings