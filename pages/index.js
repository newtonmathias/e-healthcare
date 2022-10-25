import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import DoctorCard from '../components/DoctorCard'
import Doctorvisit from '../components/Doctorvisit'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import TeleFeed from '../components/TeleFeed'
import styles from '../styles/Home.module.css'

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
      <Doctorvisit />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/doctors");
  return {
    props: {
      doctorsList: res.data,
    },
  };
};