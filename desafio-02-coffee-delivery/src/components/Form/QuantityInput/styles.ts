import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 0.25rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${(props) => props.theme['base-title']};
  }
`