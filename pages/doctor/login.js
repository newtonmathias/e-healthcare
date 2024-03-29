import React from 'react'
import DoctorLogin from '../../components/DoctorLogin'
import DoctorNavBar from '../../components/DoctorNavBar'
import { getSession } from 'next-auth/react'


function login() {
  return (
    <div title='Doctor Login'>
        <DoctorLogin />
    </div>
  )
}



export default login

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req })

  if (session) {
      return {
          redirect: {
              destination: '/doctor/dashboard',
              permanent: false
          }
      }
  }

  return {
      props: {}
  }

}