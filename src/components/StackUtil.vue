<script lang="ts" setup>
type Gap = 'sm' | 'md' | 'lg'

withDefaults(defineProps<{ gap?: Gap }>(), {
  gap: 'sm',
})
</script>

<template>
  <div v-if="gap === 'lg'" class="flex flex-col gap-8">
    <slot name="content"></slot>
  </div>
  <div v-else-if="gap === 'md'" class="flex flex-col gap-4">
    <slot name="content"></slot>
  </div>
  <div v-else class="flex flex-col gap-2">
    <slot name="content"></slot>
  </div>
</template>
