import { FormEvent, useState } from 'react'

import { SearchFormContainer, SearchFormHeader } from './styles'

interface SearchFormProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchForm({ postsLength, getPosts }: SearchFormProps) {
  const [search, setSearch] = useState('')

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault()
    await getPosts(search)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmitForm}>
      <SearchFormHeader>
        <strong>Publicações</strong>
        <span>{postsLength} publicações</span>
      </SearchFormHeader>
      <input
        type="text"
        placeholder="Busque por conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchFormContainer>
  )
}
