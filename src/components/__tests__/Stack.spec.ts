import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import Stack from '../Stack.vue'

describe('Stack tests', () => {
  const testContent = '<p>Test content</p><p>Test content 2</p>'

  it('matches snapshot without gap', () => {
    const wrapper = mount(Stack, {
      slots: {
        content: testContent,
      },
    })

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"flex flex-col gap-2\\">
        <p>Test content</p>
        <p>Test content 2</p>
      </div>"
    `)
  })

  it('matches snapshot with md gap', () => {
    const wrapper = mount(Stack, {
      slots: {
        content: testContent,
      },
      props: {
        gap: 'md',
      },
    })

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"flex flex-col gap-4\\">
        <p>Test content</p>
        <p>Test content 2</p>
      </div>"
    `)
  })

  it('matches snapshot with lg gap', () => {
    const wrapper = mount(Stack, {
      slots: {
        content: testContent,
      },
      props: {
        gap: 'lg',
      },
    })

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"flex flex-col gap-8\\">
        <p>Test content</p>
        <p>Test content 2</p>
      </div>"
    `)
  })
})
