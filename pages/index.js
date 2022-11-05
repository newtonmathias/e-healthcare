import axios from 'axios'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Banner from '../components/Banner'
import Doctorvisit from '../components/Doctorvisit'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import TeleFeed from '../components/TeleFeed'

export default function Home({ doctorsList }) {

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
      <TeleFeed doctorsList={doctorsList}/>
      <Doctorvisit doctorsList={doctorsList}/>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await axios.get("https://ehealthcare-murex.vercel.app/api/doctors");
  return {
    props: {
      doctorsList: res.data,
    },
  };
};