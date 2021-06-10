import { createContext, useEffect, useState } from "react";
import QRious from 'qrious'

export const AppContext = createContext({})

export function AppProvider({ children }) {
  const [amount, setAmount] = useState(0)
  const [imgQRcode, setImgQRcode] = useState()

  useEffect(()=> {
    const qr = document.createElement('img')
    new QRious({
      element: qr,
      value: `https://teste-fluxo-pix-cobranca.vercel.app/show?amount=${amount}`,
      size: '250',
      backgroundAlpha: 0.8,
      foreground: 'green',
      foregroundAlpha: 0.8,
      level: 'H',
      padding: 25,
    })
    setImgQRcode(qr.src)
  }, [amount])

  const data = {
    amount,
    setAmount,
    imgQRcode,
    setImgQRcode
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}