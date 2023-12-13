"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import LandingContent from './components/LandingContent'
import CryptoTable from './components/CryptoTable'

export default function Home() {
  return (
    <div className={styles.main_container}>
     <Navbar/>

     <LandingContent/>

     <CryptoTable/>

    </div>
  )
}
