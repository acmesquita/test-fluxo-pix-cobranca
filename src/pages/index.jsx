import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pix Cobrança</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindo ao Pix Cobrança
        </h1>

        <p className={styles.description}>
          Aqui você gera sua cobrança via pix cobrança, aproveite é grátis.
        </p>

        <div className={styles.grid}>
          <Link href="/pix-cobranca">
            <a className={styles.card}>
              <h2>Gerar Cobrança &rarr;</h2>
              <p>Acesse a tela de geração de cobrança e compartilhe o QRCode com o seu cliente</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Catharina Mesquita - 2021</p>
      </footer>
    </div>
  )
}
