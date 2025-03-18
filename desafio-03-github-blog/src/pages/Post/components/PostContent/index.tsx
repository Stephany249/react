import ReactMarkDown from 'react-markdown'

import { IPost } from '../../../Blog'

import { TextContent } from './styles'

interface PostContentProps {
  post: IPost
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <TextContent>
      <ReactMarkDown children={post.body}></ReactMarkDown>
    </TextContent>
  )
}
