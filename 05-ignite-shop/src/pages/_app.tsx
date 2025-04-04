import { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useState } from 'react'

import logoImg from '../assets/logo.svg'

import { globalStyles } from '@/styles/globals'
import { Container, Header } from '@/styles/pages/app'
import { CartContextProvider, useCartContext } from '@/contexts/cartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [test, setTest] = useState(true)

  const { cartQuantity } = useCartContext()

  return (
    <Container>
      <CartContextProvider>
        <Header>
          <Image src={logoImg.src} alt="" width={130} height={52} />

          <button>
            <Handbag size={24} weight="bold" />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </button>
        </Header>
      </CartContextProvider>

      <Component {...pageProps} />
    </Container>
  )
}
