import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Doctor from '../components/Doctor'
import Doctorvisit from '../components/Doctorvisit'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

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
      <Doctor />
      <Doctorvisit />
      <Footer />
    </div>
  )
}
