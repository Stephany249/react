import { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useState } from 'react'

import logoImg from '../assets/logo.svg'

import { globalStyles } from '@/styles/globals'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [test, setTest] = useState(true)

  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={130} height={52} />

        <button>
          <Handbag size={24} weight="bold" />
          {test && <span>1</span>}
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
