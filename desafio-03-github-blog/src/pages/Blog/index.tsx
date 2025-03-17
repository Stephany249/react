import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, Grid } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />

      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </BlogContainer>
  )
}
