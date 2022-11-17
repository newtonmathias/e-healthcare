import Link from "next/link";
import DataTable from 'react-data-table-component';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/bookingActions";
import { 
    ArrowDownTrayIcon,
    EyeIcon
} from '@heroicons/react/24/solid'


function DoctorsBookings() {

    const dispatch = useDispatch();
    const { bookings, error } = useSelector(state => state.doctorBookings);

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
                    name: 'Booking ID',
                    selector: row => row.id,
                    sortable: true,
                },
                {
                    name: 'Session Start',
                    selector: row => row.sessionStart,
                    sortable: true,
                },
                {
                    name: 'Session Stop',
                    selector: row => row.sessionStop,
                    sortable: true,
                },
                {
                    name: 'Amount Paid',
                    selector: row => row.amount,
                    sortable: true,
                },
                {
                    name: 'Actions',
                    selector: row => row.actions,
                    sortable: true,
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
                    <div className=''>
                        <Link href={`/doctor/patients/${booking._id}`}>
                                <EyeIcon className="h-4"/>
                        </Link>
                    </div>
            })
        })

        return data;
 
    }

    const data = setBookings()

  return (
    <div>
            <h1 className='my-5'>My Bookings</h1>

            <DataTable
            columns={data.columns}
            data={data.rows}
            />

        </div>
  )
}

export default DoctorsBookings