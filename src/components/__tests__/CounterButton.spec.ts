import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import CounterButton from '../CounterButton.vue'

describe('CounterButton', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', async () => {
    const wrapper = mount(CounterButton)
    expect(wrapper.find('#counter-button').text()).toEqual(
      'Clicks: 0 (doubled: 0)',
    )
    await wrapper.trigger('click')
    await wrapper.trigger('click')
    expect(wrapper.find('#counter-button').text()).toEqual(
      'Clicks: 2 (doubled: 4)',
    )
  })
})
