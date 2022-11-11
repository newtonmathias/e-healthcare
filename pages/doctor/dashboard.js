import React from 'react'
import { getSession } from 'next-auth/react'
import Dashboard from '../../components/Dashboard'

function dashboard() {
  return (
    <div>
        <Dashboard />
    </div>
  )
}

export default dashboard

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