<script lang="ts" setup>
import NavBar from './NavBar.vue'

defineProps<{ title: string }>()
</script>

<template>
  <header class="my-8">
    <h1 class="text-center">{{ title }}</h1>
    <NavBar />
  </header>
</template>
