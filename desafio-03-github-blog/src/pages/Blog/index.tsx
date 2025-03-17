import { useCallback, useEffect, useState } from 'react'

import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, Grid } from './styles'

const username = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_REPO_NAME

export interface Post {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const postsLength = posts.length

  const fetchIssues = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <BlogContainer>
      <Profile />
      <SearchForm postsLength={postsLength} getPosts={fetchIssues} />

      {isLoading ? (
        <Spinner marginTop={'default'} />
      ) : (
        <Grid>
          {posts.map((post) => (
            <Card key={post.number} post={post} />
          ))}
        </Grid>
      )}
    </BlogContainer>
  )
}
