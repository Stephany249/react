import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  width: 16rem;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
`

export const Tag = styled.div`
  margin-top: 1rem;
  display: flex;
  align-self: center;
  align-items: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;
  color: ${props => props.theme['base-subtitle']};
  ${mixins.fonts.titleS}
`


export const Description = styled.span`
  margin-top: 0.5rem;
  width: 100%;
  color: ${props => props.theme['base-label']};
  ${mixins.fonts.textS}
`

export const Control = styled.div`
  display: flex;
  align-items: baseline;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const Price = styled.text`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    ${mixins.fonts.titleM}
    color: ${props => props.theme['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM}
    color: ${props => props.theme['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.yellow : theme.purple};
    }
  }
`

