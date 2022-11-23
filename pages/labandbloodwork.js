import React from 'react'
import LabWork from '../components/LabWork'
import Layout from '../components/Layout'
import { getDoctors } from '../redux/actions/allDoctorsActions'
import { wrapper } from '../redux/store'

const telehealth = () => {
  return (
    <div>
        <Layout>
            <LabWork />
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