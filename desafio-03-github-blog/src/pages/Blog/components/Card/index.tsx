import { CardContainer, CardDescription, CardHeader } from './styles'

export function Card() {
  return (
    <CardContainer to={`/post/${1}`}>
      <CardHeader>
        <strong>JavaScript data types and data structures</strong>
        <span>Março 2023</span>
      </CardHeader>

      <CardDescription>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </CardDescription>
    </CardContainer>
  )
}
