import { Link } from 'react-router-dom'
import {MapPin, ShoppingCart} from '@phosphor-icons/react'

import coffeeDelivery from '../../assets/logo.svg'

import { Aside, HeaderContainer } from './styles'

export function Header() {
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

        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Link>
      </Aside>


    </HeaderContainer>
  )
}

