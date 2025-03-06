import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 90rem;
  padding: 2rem 1.25rem;
  margin: 0 auto;

  a > img {
    width: 5.309rem;
    height: 2.5rem;
  }
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;

    background: ${props => props.theme['purple-light']};

    svg {
      color: ${props => props.theme.purple};
    }

    span {
      color: ${props => props.theme['purple-dark']};
      font: ${mixins.fonts.textS};
    }
  }

  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;
    position: relative;

    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      font: ${mixins.fonts.textS};
      font-weight: bold;
      color: ${props => props.theme.white};
      background: ${props => props.theme['yellow-dark']};

      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`

