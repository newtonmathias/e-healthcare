import { getSession } from 'next-auth/react'
import React from 'react'
import Layout from '../../components/Layout'
import MyBookings from '../../components/MyBookings'
import { myBookings } from '../../redux/actions/bookingActions'
import { wrapper } from '../../redux/store'

function myBookingsPage() {
  return (
    <Layout title='My Bookings'>
        <MyBookings />
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps((store) =>
async ({ req, res }) => {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    await store.dispatch(myBookings(req.headers.cookie, req))

})

export default myBookingsPage

