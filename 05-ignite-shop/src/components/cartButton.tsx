import { Handbag } from 'phosphor-react'
import { ComponentProps } from 'react'

import { useCartContext } from '@/contexts/cartContext'
import { ButtonContainer } from '@/styles/components/cartButton'

type CartButtonProps = ComponentProps<typeof ButtonContainer> & {
  showQuantity?: boolean
}

export default function CartButton({
  showQuantity = true,
  ...props
}: CartButtonProps) {
  const { cartQuantity } = useCartContext()

  return (
    <ButtonContainer {...props}>
      <Handbag size={24} weight="bold" />

      {showQuantity && cartQuantity >= 1 && <span>{cartQuantity}</span>}
    </ButtonContainer>
  )
}
