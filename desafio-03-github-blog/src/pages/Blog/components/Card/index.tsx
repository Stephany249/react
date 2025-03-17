import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Post } from '../..'

import { CardContainer, CardDescription, CardHeader } from './styles'

interface CardProps {
  post: Post
}

export function Card({ post }: CardProps) {
  // eslint-disable-next-line quotes
  const dataFormat = format(post.created_at, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  return (
    <CardContainer to={`/post/${post.number}`}>
      <CardHeader>
        <strong>{post.title}</strong>
        <time title={dataFormat} dateTime={post.created_at}>
          {formatDistanceToNow(new Date(post.created_at), {
            locale: ptBR,
            addSuffix: true,
          })}
        </time>
      </CardHeader>

      <CardDescription>{post.body}</CardDescription>
    </CardContainer>
  )
}
