<script setup lang="ts">
type Props = {
  id: string
  href: string
  text: string
}
defineProps<Props>()
</script>

<template>
  <a :id="id" class="underline text-blue-700" :href="href">{{ text }}</a>
</template>
