<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <header class="my-8">
    <h1 class="text-center">{{ msg }}</h1>
  </header>
</template>
