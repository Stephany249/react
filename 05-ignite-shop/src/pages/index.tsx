/* eslint-disable react-refresh/only-export-components */

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'
import Head from 'next/head'
import { MouseEvent } from 'react'

import { HomeContainer, Product } from '@/styles/pages/home'
import { stripe } from '@/lib/stripe'
import { IProduct, useCartContext } from '@/contexts/cartContext'
import CartButton from '@/components/cartButton'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  const { AddProductToCart, CheckIfItemAlreadyExistsInCart } = useCartContext()

  const handleAddProductToCart = (
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) => {
    e.preventDefault()

    AddProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product key={product.id} className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt={product.name}
                />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <CartButton
                    showQuantity={false}
                    color="green"
                    onClick={(e: any) => handleAddProductToCart(e, product)}
                    size="large"
                    disabled={CheckIfItemAlreadyExistsInCart(product.id)}
                  />
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    console.log('price: ' + price.id)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount ?? 0) / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
