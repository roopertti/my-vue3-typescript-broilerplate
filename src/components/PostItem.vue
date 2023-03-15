<script setup lang="ts">
import Stack from './StackUtil.vue'

type Props = {
  title: string
  body: string
}

defineProps<Props>()
</script>

<template>
  <div data-testid="postitem" class="bg-gray-200 rounded-lg p-4">
    <Stack gap="md">
      <template #content>
        <h3>{{ title }}</h3>
        <p>{{ body }}</p>
      </template>
    </Stack>
  </div>
</template>
