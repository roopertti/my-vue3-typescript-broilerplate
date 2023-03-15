import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import PageLayout from '../PageLayout.vue'

describe('PageLayout tests', () => {
  it('renders PageLayout with custom content', () => {
    const wrapper = mount(PageLayout, {
      props: {
        title: 'Test title',
      },
      slots: {
        content: 'Test content',
      },
    })

    expect(wrapper.find('h2').text()).toBe('Test title')
    expect(wrapper.find('main').html()).toContain('Test content')
  })
})
