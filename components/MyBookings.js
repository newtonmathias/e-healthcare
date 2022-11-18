import Link from "next/link";
import DataTable from 'react-data-table-component';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import easyinvoice from 'easyinvoice'
import { clearErrors } from "../redux/actions/bookingActions";
import { 
    ArrowDownTrayIcon,
    EyeIcon
} from '@heroicons/react/24/solid'
import { format } from "date-fns";


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
                        <Link href={`/bookings/${booking._id}`}>
                                <EyeIcon />
                        </Link>
                        <button className="btn btn-success mx-2">
                                <ArrowDownTrayIcon className="h-6" onClick={() => downloadInvoice(booking)}/>
                        </button>
                    </div>
            })
        })

        return data;

    }
    const data = setBookings()

    const downloadInvoice = async (booking) => {
        console.log(booking);
        const data = {
            "documentTitle": "Booking INVOICE", //Defaults to INVOICE
            "currency": "KSH",
            "taxNotation": "vat", //or gst
            "marginTop": 25,
            "marginRight": 25,
            "marginLeft": 25,
            "marginBottom": 25,
            "logo": "https://res.cloudinary.com/dnytljy0h/image/upload/v1668746564/ehealthcare/logo_prhkjt.png",
            "sender": {
                "company": "My Health",
                "address": "City Hall Way",
                "zip": "00100",
                "city": "Nairobi",
                "country": "Kenya"
            },
            "client": {
                "company": `${booking.user.name}`,
                "address": `${booking.user.email}`,
                "city": `Session Start: ${booking.sessionStart}`,
                "country": `Session Stop: ${booking.sessionStop}`
            },
            "information": {
                // Invoice number
                "number": `${booking._id}`,
                // Invoice data
                "date": `${ format(new Date(), "PPP") }`,
                // Invoice due date
                "due-date": `${ format(new Date(), "PPP") }`,
            },
            "products": [
                {
                    "quantity": 1,
                    "description": `${booking.doctor.name}`,
                    "tax-rate": 0,
                    "price": booking.doctor.price
                }
            ],
            "bottomNotice": "This is auto generated Invoice of your booking on MyHealth."
        };

        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf)

    }
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

export default MyBookings