import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
     
     
    </div>
  )
}
