import { Link } from 'react-router-dom'

import logoImg from '../../assets/Logo.svg'

import { HeaderContainer } from './styes'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} />
      </Link>
    </HeaderContainer>
  )
}
