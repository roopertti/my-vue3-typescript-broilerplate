<script setup lang="ts">
type Props = {
  href: string
  text: string
}
defineProps<Props>()
</script>

<template>
  <a class="underline text-blue-700" :href="href">{{ text }}</a>
</template>
