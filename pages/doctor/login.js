import React from 'react'
import DoctorLogin from '../../components/DoctorLogin'
import Layout from '../../components/Layout'
import { getSession } from 'next-auth/react'


function login() {
  return (
    <Layout title='Doctor Registration'>
        <DoctorLogin />
    </Layout>
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