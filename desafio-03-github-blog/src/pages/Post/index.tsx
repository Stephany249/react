import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IPost } from '../Blog'
import { api } from '../../lib/axios'

import { PostContainer } from './styles'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'

const username = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_REPO_NAME

export function Post() {
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState<IPost>({} as IPost)
  const { id } = useParams()

  const fetchIssues = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `repos/${username}/${repoName}/issues/${id}`,
      )
      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <PostContainer>
      <PostInfo post={post} isLoading={isLoading} />
      {!isLoading && <PostContent post={post} />}
    </PostContainer>
  )
}
