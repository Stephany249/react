import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="income">R$ 17.400,00</PriceHighlight>
              </td>
              <td>Desenvolvimento</td>
              <td>10/02/2021</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.259,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>17/02/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
