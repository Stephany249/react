import { HttpResponse, http } from 'msw'

import { GetProfileResponse } from '../getProfile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '81237127123',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
