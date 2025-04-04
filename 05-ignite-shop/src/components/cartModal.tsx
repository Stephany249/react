import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import Image from 'next/image'

import { IProduct, useCartContext } from '@/contexts/cartContext'
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
  const { cartItems, totalCart, RemoveProductToCart } = useCartContext()

  const totalCartFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalCart)

  const handleRemoveProductToCart = (cartItem: IProduct) => {
    RemoveProductToCart(cartItem.id)
  }

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

                  <button onClick={() => handleRemoveProductToCart(item)}>
                    Remover
                  </button>
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
