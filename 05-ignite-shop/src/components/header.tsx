import { Handbag } from 'phosphor-react'
import Image from 'next/image'

import logoImg from '../assets/logo.svg'

import { useCartContext } from '@/contexts/cartContext'
import { HeaderContainer } from '@/styles/components/header'

export default function Header() {
  const { cartQuantity } = useCartContext()

  return (
    <HeaderContainer>
      <Image src={logoImg.src} alt="" width={130} height={52} />

      <button>
        <Handbag size={24} weight="bold" />

        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
      </button>
    </HeaderContainer>
  )
}
