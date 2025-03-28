/* eslint-disable max-len */
import { setupWorker } from 'msw/browser'

import { signInMock } from './signInMock'
import { registerRestaurantMock } from './registerRestaurantMock'
import { getDayOrdersAmountMock } from './getDayOrdersAmountMock'
import { getMonthOrdersAmountMock } from './getMonthOrdersAmountMock'
import { getMonthCanceledOrdersAmountMock } from './getMonthCanceledOrdersAmountMock'
import { getMonthRevenueMock } from './getMonthRevenueMock'
import { getDailyRevenueInPeriodMock } from './getDailyRevenueInPeriodMock'
import { getPopularProductsMock } from './getPopularProductsMock'

import { env } from '@/env'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
