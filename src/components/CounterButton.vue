<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/counterStore'

const counter = useCounterStore()
const { state, double } = storeToRefs(counter)
const { increment } = counter
</script>

<template>
  <button
    id="counter-button"
    class="py-2 px-4 bg-teal-600 text-white rounded-md"
    @click="increment"
  >
    Clicks: {{ state }} (doubled: {{ double }})
  </button>
</template>
