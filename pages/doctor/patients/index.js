import { getSession } from 'next-auth/react'
import React from 'react'
import DoctorNavBar from '../../../components/DoctorNavBar'
import DoctorsBookings from '../../../components/DoctorsBookings'
import { docBookings } from '../../../redux/actions/bookingActions'
import { wrapper } from '../../../redux/store'

function doctorBookingsPage() {
  return (
    <div>
        <DoctorNavBar />
        <DoctorsBookings />
    </div>
  )
}
export const getServerSideProps = wrapper.getServerSideProps((store) =>
async ({ req, res }) => {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/doctor/login',
                permanent: false
            }
        }
    }

    await store.dispatch(docBookings(req.headers.cookie, req))

})

export default doctorBookingsPage

