import { ReactNode, createContext, useContext, useState } from 'react'
import { produce } from 'immer'

export interface IProduct {
  id: number
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cartItems: IProduct[]
  cartQuantity: number
  totalCart: number
  AddProductToCart: (product: IProduct) => void
  RemoveProductToCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CarContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CarContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartQuantity = cartItems.length

  const totalCart = cartItems.reduce((acc, sum) => {
    const price = Number(
      sum.price
        .replace(/\s/g, '')
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.'),
    )
    return (acc += price)
  }, 0)

  const AddProductToCart = (product: IProduct) => {
    const productAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id,
    )

    const newProduct = produce(cartItems, (draft) => {
      if (productAlreadyExists < 0) {
        draft.push(product)
      }
    })

    setCartItems(newProduct)
  }

  const RemoveProductToCart = (productId: number) => {
    const productAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === productId,
    )

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExists >= 0) {
        draft.splice(productAlreadyExists, 1)
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        totalCart,
        AddProductToCart,
        RemoveProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
