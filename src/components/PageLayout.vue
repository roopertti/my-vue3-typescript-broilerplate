<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<template>
  <div class="text-center">
    <h2 class="mb-8">{{ title }}</h2>
    <main>
      <slot name="content"></slot>
    </main>
  </div>
</template>