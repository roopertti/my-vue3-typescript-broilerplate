<script setup lang="ts">
type Props = {
  title: string
  body: string
}

defineProps<Props>()
</script>

<template>
  <div data-testid="postitem" class="bg-gray-200 rounded-lg p-4">
    <h3 class="mb-4">{{ title }}</h3>
    <p>{{ body }}</p>
  </div>
</template>
