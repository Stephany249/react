import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import Link from 'next/link'

import logoImg from '../assets/logo.svg'

import CartButton from './cartButton'
import CartModal from './cartModal'

import { HeaderContainer } from '@/styles/components/header'

export default function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg.src} alt="" width={130} height={52} />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          {showCartButton && <CartButton showQuantity color="gray" />}
        </Dialog.Trigger>

        <CartModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
