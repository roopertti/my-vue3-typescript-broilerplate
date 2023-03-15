import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, afterEach } from 'vitest'

import PostList from '../PostList.vue'

vi.mock('@tanstack/vue-query')

describe('PostList tests', () => {
  afterEach(() => {
    vi.resetAllMocks()
    vi.clearAllMocks()
  })

  it('renders PostList', async () => {
    const vueQuery = await import('@tanstack/vue-query')
    vueQuery.useQuery = vi.fn().mockReturnValueOnce({
      isLoading: false,
      isError: false,
      error: null,
      data: [
        {
          userId: 1,
          id: 1,
          title: 'Test post 1',
          body: 'Content 1',
        },
        {
          userId: 1,
          id: 2,
          title: 'Test post 2',
          body: 'Content 2',
        },
      ],
    })

    const wrapper = mount(PostList, {
      props: {
        userId: 1,
      },
    })

    expect(wrapper.findAll('[data-testid="postitem"]')).toHaveLength(2)
  })

  it('shows error text on error', async () => {
    const vueQuery = await import('@tanstack/vue-query')
    vueQuery.useQuery = vi.fn().mockReturnValueOnce({
      isLoading: false,
      isError: true,
      error: 'Test error',
      data: null,
    })

    const wrapper = mount(PostList, {
      props: {
        userId: 1,
      },
    })

    expect(wrapper.find('#postlist-error-text').text()).toBe('Test error')
  })

  it('shows loading text when posts are loading', async () => {
    const vueQuery = await import('@tanstack/vue-query')
    vueQuery.useQuery = vi.fn().mockReturnValueOnce({
      isLoading: true,
      isError: false,
      error: null,
      data: null,
    })

    const wrapper = mount(PostList, {
      props: {
        userId: 1,
      },
    })

    expect(wrapper.find('#postlist-loading-text').text()).toBe(
      'Loading posts...',
    )
  })
})
