import { HttpResponse, http } from 'msw'

import { RegisterRestaurantBody } from '../registerRestaurant'

export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    console.log('restaurantName', restaurantName)

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
