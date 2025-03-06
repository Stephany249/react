import { ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useState } from 'react'

import { QuantityInput } from '../Form/QuantityInput'

import { 
  CoffeeImg, 
  Container, 
  Control, 
  Description, 
  Order, 
  Price, 
  Tag, 
  Title 
} from './styles'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const theme = useTheme()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  
  return(
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tag>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>

      <Title>{coffee.title}</Title>

      <Description>
        {coffee.description}
      </Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
        <QuantityInput
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
          <button >

            <ShoppingCart size={22} color={theme['base-card']} />

          </button>

        </Order>
      </Control>
    </Container>
  )
}