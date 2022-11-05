import React from 'react'
import Register from '../components/Register'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'


function register() {
  return (
    <div>
        <Header />
        <Register />
    </div>
  )
}

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req })

  if (session) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
      props: {}
  }

}

export default register