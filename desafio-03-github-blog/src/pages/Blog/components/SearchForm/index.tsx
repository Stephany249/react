import { SearchFormContainer, SearchFormHeader } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchFormHeader>
      <input type="text" placeholder="Busque por conteúdo" />
    </SearchFormContainer>
  )
}
