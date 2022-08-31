//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import Home from "./index";
//import Home from "./index";

function MyApp({ Component, pageProps }: AppProps) {
  return <Home {...pageProps} />
}
export default MyApp
