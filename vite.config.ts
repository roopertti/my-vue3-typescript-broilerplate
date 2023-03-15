import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { UserConfig as VitestUserConfig } from 'vitest'

const testConfig: VitestUserConfig = {
  environment: 'jsdom',
  globals: true,
}

export default defineConfig({
  plugins: [vue()],
  test: testConfig,
})
