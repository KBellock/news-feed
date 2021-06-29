import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
 return (
   <>
   <Head>
     <title>Kooky News</title>
   </Head>
   <div className="page-container">
     <Toolbar />
     <div className={styles.main}>
        <h1>Kooky News App</h1>
        <h3>All The Latest Wall Street Kooks Need</h3>
     </div>
   </div>
   </>
 )
}
