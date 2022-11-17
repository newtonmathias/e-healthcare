import DoctorProfile from "../../components/DoctorProfile"
import { getSession } from 'next-auth/react'
import DoctorNavBar from "../../components/DoctorNavBar"


function profile() {
  return (
    <div>
      <DoctorNavBar />
        <DoctorProfile />
    </div>
  )
}

export default profile

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req })

  if (!session) {
      return {
          redirect: {
              destination: '/doctor/login',
              permanent: false
          }
      }
  }

  return {
      props: { session }
  }

}