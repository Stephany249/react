import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import Image from 'next/image'

import { useCartContext } from '@/contexts/cartContext'
import {
  CartClose,
  CartFinalization,
  CartFinalizationDetails,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  Content,
  Overlay,
} from '@/styles/components/cartModal'

export default function CartModal() {
  const { cartItems } = useCartContext()

  const totalCart = cartItems.reduce((acc, item) => {
    const price = Number(
      item.price
        .replace(/\s/g, '')
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.'),
    )
    return (acc += price)
  }, 0)

  const totalCartFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalCart)

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Sacola de compras</h2>
          <section>
            {cartItems.length <= 0 && <p>Sua sacola está vazia.</p>}

            {cartItems.map((item) => (
              <CartProduct key={item.id}>
                <CartProductImage>
                  <Image src={item.imageUrl} alt="" width={100} height={93} />
                </CartProductImage>

                <CartProductDetails>
                  <span>{item.name}</span>

                  <strong>{item.price}</strong>

                  <button>Remover</button>
                </CartProductDetails>
              </CartProduct>
            ))}

            <CartFinalization>
              <CartFinalizationDetails>
                <span>Quantidade</span>
                <span className="quantity">
                  {cartItems.length}{' '}
                  {cartItems.length <= 1 ? <p>item</p> : <p>itens</p>}
                </span>
              </CartFinalizationDetails>
              <CartFinalizationDetails>
                <strong>Valor total</strong>
                <strong className="total">{totalCartFormatted}</strong>
              </CartFinalizationDetails>

              <button>Finalizar Compra</button>
            </CartFinalization>
          </section>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
