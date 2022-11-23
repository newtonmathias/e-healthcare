import React from 'react'
import Layout from '../components/Layout'
import Therapy from '../components/Therapy'
import { getDoctors } from '../redux/actions/allDoctorsActions'
import { wrapper } from '../redux/store'

const telehealth = () => {
  return (
    <div>
        <Layout>
            <Therapy />
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