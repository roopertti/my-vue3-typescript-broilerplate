import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const state = ref(0)

  const double = computed(() => state.value * 2)

  function increment(): void {
    state.value++
  }

  return { state, double, increment }
})
