import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '../counterStore'

describe('Counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.state).toBe(0)
    counter.increment()
    expect(counter.state).toBe(1)
  })

  it('increments and checks doubled value', () => {
    const counter = useCounterStore()
    counter.increment()
    counter.increment()
    expect(counter.double).toBe(4)
  })
})
