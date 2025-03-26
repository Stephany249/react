import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import { UserConfig, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { InlineConfig } from 'vitest/node'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setupTests.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
