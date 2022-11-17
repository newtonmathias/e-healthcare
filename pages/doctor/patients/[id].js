import { getSession } from 'next-auth/react'
import PatientDetails from '../../../components/PatientDetails'
import { getPatientDetails } from '../../../redux/actions/bookingActions'
import { wrapper } from '../../../redux/store'
import DoctorNavBar from '../../../components/DoctorNavBar'


function PatientDetailsPage() {
    return (
      <div>
        <DoctorNavBar />
        <PatientDetails />
      </div>
    )
  }
  
  export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({ req, params }) => {
          const session = await getSession({ req })
  
      if (!session) {
          return {
              redirect: {
                  destination: '/doctor/login',
                  permanent: false
              }
          }
      }
  
      await store.dispatch(getPatientDetails(req.headers.cookie, req, params.id))
  
  })
  
  export default PatientDetailsPage