import axios from 'axios'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Banner from '../components/Banner'
import Doctorvisit from '../components/Doctorvisit'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import TeleFeed from '../components/TeleFeed'
import { getDoctors } from '../redux/actions/allDoctorsActions'
import { wrapper } from '../redux/store'


export default function Home() {
  return (
    <div>
      <Head>
        <title>MyHealth</title>
        <meta name="description" content="MyHealth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Services />
      <TeleFeed/>
      <Doctorvisit />
      <Footer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(getDoctors(req));
    });