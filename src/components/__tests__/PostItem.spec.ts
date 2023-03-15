import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import PostItem from '../PostItem.vue'

describe('PostItem tests', () => {
  it('renders PostItem with given props', () => {
    const wrapper = mount(PostItem, {
      props: {
        title: 'Post item',
        body: 'Post text',
      },
    })

    expect(wrapper.find('h3').text()).toBe('Post item')
    expect(wrapper.find('p').text()).toBe('Post text')
  })
})
