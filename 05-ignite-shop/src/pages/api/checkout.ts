import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '@/lib/stripe'
import { IProduct } from '@/contexts/cartContext'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as { products: IProduct[] }

  if (!products) {
    res.status(400).json({ error: 'Products id not found' })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const successUrl =
    `${process.env.NEXT_URL}/success?` + 'session_id={CHECKOUT_SESSION_ID}'

  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
