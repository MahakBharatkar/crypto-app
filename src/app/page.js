import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import LandingContent from './components/LandingContent'

export default function Home() {
  return (
    <div className={styles.main_container}>
     <Navbar/>

     <LandingContent/>

    </div>
  )
}
