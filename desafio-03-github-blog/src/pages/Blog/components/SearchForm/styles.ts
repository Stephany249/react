import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 7.2rem;

  input {
    margin-top: 1.2rem;
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;

  strong {
    font-size: 2.4rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
  }
`
