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
import { getProfileMock } from './getProfileMock'
import { getManagedRestaurantMock } from './getManagedRestaurantMock'
import { updateProfileMock } from './updateProfileMock'
import { getOrdersMock } from './getOrdersMock'
import { getOrderDetailsMock } from './getOrderDetailsMock'

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
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
