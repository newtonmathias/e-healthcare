import React from 'react'
import Layout from '../components/Layout'
import Telehealth from '../components/Telehealth'
import { getDoctors } from '../redux/actions/allDoctorsActions'
import { wrapper } from '../redux/store'

const telehealth = () => {
  return (
    <div>
        <Layout>
            <Telehealth />
        </Layout>
    </div>
  )
}

export default telehealth

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ req, query }) => {
        await store.dispatch(getDoctors(req, query.location));
      });