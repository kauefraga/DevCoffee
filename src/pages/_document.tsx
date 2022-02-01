import React from 'react'
import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import CustomTheme from '../styles/theme'


class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' type='image/png' href='/SiteLogo.svg' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={CustomTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument