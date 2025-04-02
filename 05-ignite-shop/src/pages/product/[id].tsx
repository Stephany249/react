import { useRouter } from 'next/router'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79.90</span>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          consequatur, deleniti voluptatum voluptatem unde corrupti, distinctio
          aliquam impedit laudantium eos incidunt ad vero quam, veniam officiis
          dicta eveniet doloribus aliquid.
        </p>

        <button type="button">Comprar agora </button>
      </ProductDetails>
    </ProductContainer>
  )
}
