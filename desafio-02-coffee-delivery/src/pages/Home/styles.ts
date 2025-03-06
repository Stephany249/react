import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Section = styled.section`
  position: relative;

  img#heroBg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 34rem;
    width: 100vw;
    object-fit: cover;
  }
`

export const SectionContent = styled.div`
  max-width: 90rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem
  }

`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['base-title']}
  }

  > span {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`


export const CoffeeList = styled.div`
  max-width: 90rem;
  padding: 2rem 1.25rem 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`

