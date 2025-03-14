import { Link } from "react-router-dom";
import { HeaderContainer } from "./styes";

import logoImg from "../../assets/Logo.svg";

export function Header() {
  return(
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} />
      </Link>
    </HeaderContainer>
  )
}