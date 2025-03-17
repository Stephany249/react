import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 26rem;
  padding: 3.2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-post']};
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    transform: translateY(-0.4rem);
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const CardHeader = styled.header`
  display: flex;
  gap: 1.6rem;

  strong {
    flex: 1;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    width: max-content;
  }
`

export const CardDescription = styled.p`
  margin-top: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: ${(props) => props.theme['base-text']};
`
