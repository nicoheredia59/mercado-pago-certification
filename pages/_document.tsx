import { Head, Html, Main, NextScript } from 'next/document'

function Document () {
  return (
     <Html lang='es'>
      <Head />
      <script src="https://sdk.mercadopago.com/js/v2"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
