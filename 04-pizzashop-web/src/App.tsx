import './global.css'

import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'

import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/reactQuery'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza.shop:theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
