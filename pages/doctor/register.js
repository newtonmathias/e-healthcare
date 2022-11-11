import DoctorRegister from '../../components/DoctorRegister'
import Layout from '../../components/Layout'
import { getSession } from 'next-auth/react'

DoctorRegister
function register() {
  return (
    <Layout title='Doctor Registration'>
        <DoctorRegister />
    </Layout>
  )
}

export default register

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