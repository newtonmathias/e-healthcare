import { getSession } from 'next-auth/react'
import React from 'react'
import BookingDetails from '../../components/BookingDetails'
import Layout from '../../components/Layout'
import { getBookingDetails } from '../../redux/actions/bookingActions'
import { wrapper } from '../../redux/store'

function BookingDetailsPage() {
  return (
    <Layout title='My Bookings'>
        <BookingDetails />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) =>
async ({ req, params }) => {
        const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    await store.dispatch(getBookingDetails(req.headers.cookie, req, params.id))

})

export default BookingDetailsPage