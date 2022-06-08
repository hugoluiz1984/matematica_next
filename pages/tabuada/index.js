import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'

export default function TabuadaMenu() {
    //const [nivel, setNivel] = useState(0)
    const ListaNivel =[
        1,2,3,4,5,6,7,8,9,10
    ]
    const caminho = 'tabuada/'
  return (
    <div className={styles.container}>
      <Head>
        <title>Matemática</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.App}>
        <div className={styles.grid}>
            {
                ListaNivel.map(nivel => <Link key={nivel} href={caminho+nivel} target="_self"><a ><div key={nivel} className={styles.card}><p>{nivel}</p></div></a></Link>)
            }
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Hugo Gama
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}