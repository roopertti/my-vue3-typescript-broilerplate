import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '@/router'
import PageHeader from '../PageHeader.vue'

describe('PageHeader tests', () => {
  it('renders page header', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes,
    })
    router.push('/')
    await router.isReady()

    const wrapper = mount(PageHeader, {
      global: {
        plugins: [router],
      },
      props: {
        title: 'Test title',
      },
    })

    expect(wrapper.find('header')).toBeTruthy()
    expect(wrapper.find('h1').text()).toBe('Test title')
  })
})
