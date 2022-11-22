import { getSession } from 'next-auth/react'
import React from 'react'
import Layout from '../../../components/Layout'
import AllDoctors from '../../../components/admin/AllDoctors'

const AllDoctorsPage = () => {
  return (
    <Layout title='All Doctors'>
        <AllDoctors/>
    </Layout>
  )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session || session.user.role !== 'admin') {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }

}

export default AllDoctorsPage