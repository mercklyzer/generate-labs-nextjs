import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from "@material-tailwind/react";


function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider>
      <Component {...pageProps} />
  </ThemeProvider> 
}

export default MyApp
