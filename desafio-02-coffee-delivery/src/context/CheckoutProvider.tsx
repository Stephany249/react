import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/checkout/actions'
import { Item, Order, checkoutReducer } from '../reducers/checkout/reducer'
import { OrderInfo } from '../pages/Checkout'

interface CheckoutContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider(
  { children }: CheckoutContextProviderProps
) {
  const [checkoutState, dispatch] = useReducer(
    checkoutReducer,
    {
      checkout: [],
      orders: [],
    },
    (checkoutState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:checkout-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return checkoutState
    },
  )
  const navigate = useNavigate()

  const { checkout: cart, orders } = checkoutState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (checkoutState) {
      const stateJSON = JSON.stringify(checkoutState)

      localStorage.setItem('@coffee-delivery:checkout-state-1.0.0', stateJSON)
    }
  }, [checkoutState])

  return (
    <CheckoutContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}