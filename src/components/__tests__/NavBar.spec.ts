import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

import { routes } from '../../router'
import { createRouter, createWebHistory, Router } from 'vue-router'

describe('Navbar tests', () => {
  let router: Router

  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    })
    router.push('/')
    await router.isReady()
  })

  it('renders Navbar', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('nav')).toBeTruthy()
  })

  it('checks navbar links', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
      },
    })

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    expect(links[0].attributes()['href']).toBe('/')
    expect(links[0].text()).toBe('Home')
    expect(links[1].attributes()['href']).toBe('/about')
    expect(links[1].text()).toBe('About')
  })
})
