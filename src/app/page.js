"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import LandingContent from './components/LandingContent'
import CryptoTable from './components/CryptoTable'
import CryptoConverter from './components/CryptoConverter';
import { useState } from 'react';
import Footer from './components/Footer';

export default function Home() {
  const [currencies, setCurrencies] = useState([]);
  return (
    <div className={styles.main_container}>
     <Navbar/>

     <LandingContent/>

     <CryptoTable setCurrencies={setCurrencies}/>

     <CryptoConverter currencies={currencies}/>

    <Footer />

    </div>
  )
}
