import axios from 'axios'
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
      <Doctorvisit />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  const res = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/doctors`);
  return {
    props: {
      doctorsList: res.data,
    },
  };
};