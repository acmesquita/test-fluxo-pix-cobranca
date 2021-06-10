import Head from 'next/head'
import styles from '../styles/PixCobranca.module.css'
import { useForm } from "react-hook-form";
import Router from 'next/router';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function PixCobranca() {
  const { setAmount } = useContext(AppContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    setAmount(data.amount)
    Router.push(`/show`)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pix Cobrança</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gere aqui o seu Pix Cobrança
        </h1>

        <p className={styles.description}>
          Insira o valor de cobrança e clique para gerar o QRCode.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input type="number" placeholder="Valor da cobrança 30,00" {...register("amount", { required: true })} />
          {errors.amount && <span>Informe o valor para a geração</span>}
          <button>Gerar o QRCode</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <p>Catharina Mesquita - 2021</p>
      </footer>
    </div>
  )
}