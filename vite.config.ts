import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { UserConfig as VitestUserConfig } from 'vitest'
import path from 'path'

const testConfig: VitestUserConfig = {
  environment: 'jsdom',
  globals: true,
}

export default defineConfig({
  plugins: [vue()],
  test: testConfig,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
