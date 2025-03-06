import { Link } from 'react-router-dom'
import {MapPin, ShoppingCart} from '@phosphor-icons/react'

import coffeeDelivery from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

import { Aside, HeaderContainer } from './styles'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDelivery}  />
      </Link>
      
      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to="/checkout" /*aria-disabled={cart.length === 0}*/>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>


    </HeaderContainer>
  )
}

