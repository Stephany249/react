import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'

import CartButton from './cartButton'

import { useCartContext } from '@/contexts/cartContext'
import { HeaderContainer } from '@/styles/components/header'

export default function Header() {
  const { cartQuantity } = useCartContext()

  return (
    <HeaderContainer>
      <Image src={logoImg.src} alt="" width={130} height={52} />

      <Dialog.Root></Dialog.Root>
      <CartButton />
    </HeaderContainer>
  )
}
