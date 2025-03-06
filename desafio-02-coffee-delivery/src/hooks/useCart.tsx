import { useContext } from 'react'

import { CheckoutContext } from '../context/CheckoutProvider'

export function useCart() {
  return useContext(CheckoutContext)
}