import { getSession } from 'next-auth/react'
import React from 'react'
import Header from '../../components/Header'
import UserProfile from '../../components/UserProfile'

function update() {
  return (
    <div>
        <Header />
        <UserProfile />
    </div>
  )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }

}

export default update