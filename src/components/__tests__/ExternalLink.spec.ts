import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ExternalLink from '../ExternalLink.vue'

describe('ExternalLink tests', () => {
  it('renders link element', () => {
    const wrapper = mount(ExternalLink, {
      props: {
        id: 'test-link-id',
        href: '#',
        text: 'Test link',
      },
    })

    const link = wrapper.find('#test-link-id')
    expect(link.text()).toContain('Test link')
    expect(link.attributes()['href']).toBe('#')
  })
})
