import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'

import { IPost } from '../../../Blog'
import { Link } from '../../../../components/Link'
import { Spinner } from '../../../../components/Spinner'

import { Icon, IconContainer, PostInfoContainer } from './styles'

interface PostInfoProps {
  post: IPost
  isLoading: boolean
}

export const PostInfo = ({ post, isLoading }: PostInfoProps) => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const createdAt = post?.created_at ? new Date(post.created_at) : null
  const dataFormat = createdAt
    ? // eslint-disable-next-line quotes
      format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      })
    : ''

  return (
    <PostInfoContainer>
      {isLoading ? (
        <Spinner marginTop={'default'} />
      ) : (
        <>
          <header>
            <Link
              text="voltar"
              variant="iconLeft"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              onClick={goBack}
            />

            <Link text="ver no gihub" href={post.html_url} target="_blank" />
          </header>

          <strong>{post.title}</strong>

          <IconContainer>
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
              <span>{post.user?.login}</span>
            </Icon>

            <Icon>
              <FontAwesomeIcon icon={faCalendar} />
              <time title={dataFormat} dateTime={post?.created_at}>
                {formatDistanceToNow(new Date(post?.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </time>
            </Icon>

            <Icon>
              <FontAwesomeIcon icon={faComment} />
              <span>{post.comments}</span>
            </Icon>
          </IconContainer>
        </>
      )}
    </PostInfoContainer>
  )
}
