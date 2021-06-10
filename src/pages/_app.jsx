import { AppProvider } from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      {console.log('load')}
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
