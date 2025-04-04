import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'

import CartButton from './cartButton'
import CartModal from './cartModal'

import { HeaderContainer } from '@/styles/components/header'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg.src} alt="" width={130} height={52} />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <CartButton showQuantity color="gray" />
        </Dialog.Trigger>

        <CartModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
