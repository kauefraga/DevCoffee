import '@fontsource/roboto'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import CustomTheme from '../styles/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
