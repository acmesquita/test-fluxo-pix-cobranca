import Head from 'next/head'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styles from '../styles/Show.module.css'

export default function Show() {
  const {amount, imgQRcode} = useContext(AppContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Pix Cobrança</title>
        <meta property="og:site_name" content="Pix Cobrança" />
        <meta property="og:title" content={`Cobrança de R$ ${amount}`} />
        <meta property="og:image:secure_url" itemprop="image" content={imgQRcode} />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pix Cobrança
        </h1>

        <img src={imgQRcode}/>

        <a href={`whatsapp://send?text=https://teste-fluxo-pix-cobranca.vercel.app/show?amount=${amount}`} data-action="share/whatsapp/share">Whatsapp</a>
      </main>

      <footer className={styles.footer}>
        <p>Catharina Mesquita - 2021</p>
      </footer>
    </div>
  )
}
