/* eslint-disable react-refresh/only-export-components */
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import Head from 'next/head'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { stripe } from '@/lib/stripe'
import { IProduct, useCartContext } from '@/contexts/cartContext'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { AddProductToCart, CheckIfItemAlreadyExistsInCart } = useCartContext()

  const handleAddProductToCart = () => {
    const productToAdd = {
      ...product,
      quantity: 1,
    }

    AddProductToCart(productToAdd)
  }

  const itemAlreadyAddedToCart = CheckIfItemAlreadyExistsInCart(product.id)

  return (
    <>
      <Head>
        <title>{product.name} - Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt={''} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button
            onClick={handleAddProductToCart}
            disabled={itemAlreadyAddedToCart}
          >
            {itemAlreadyAddedToCart
              ? 'Produto adicionado no carrinho'
              : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_S3GpN8918V7WLb' },
      },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
