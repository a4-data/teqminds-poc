import type { AppProps } from 'next/app'
import "../component/Dashboard/shared/dashboard.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
