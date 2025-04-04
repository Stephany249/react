import { AppProps } from 'next/app'

import { globalStyles } from '@/styles/globals'
import { Container } from '@/styles/pages/app'
import { CartContextProvider, useCartContext } from '@/contexts/cartContext'
import Header from '@/components/header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { cartQuantity } = useCartContext()

  console.log('cartQuantity', cartQuantity)

  return (
    <CartContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
