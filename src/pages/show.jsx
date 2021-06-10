import Head from 'next/head'
import { useRouter} from 'next/router'
import QRious from 'qrious'
import { useEffect, useState } from 'react'
import styles from '../styles/Show.module.css'

export default function Show() {
  const router = useRouter()
  const amount = router.query.amount

  const [imgQRcode, setImgQRcode] = useState()

  useEffect(()=> {
    const qr = document.querySelector('#qr')
    new QRious({
      element: qr,
      value: `http://192.168.15.6:3000/show?amount=${amount}`,
      size: '250',
      backgroundAlpha: 0.8,
      foreground: 'green',
      foregroundAlpha: 0.8,
      level: 'H',
      padding: 25,
    })
    setImgQRcode(qr.src)
  }, [])

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

        <img id="qr" />

        <a href={`whatsapp://send?text=http://192.168.15.6:3000/show?amount=${amount}`} data-action="share/whatsapp/share">Whatsapp</a>
      </main>

      <footer className={styles.footer}>
        <p>Catharina Mesquita - 2021</p>
      </footer>
    </div>
  )
}
