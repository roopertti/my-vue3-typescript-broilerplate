<script setup lang="ts">
import { useQueryProvider } from 'vue-query'
import { VueQueryDevTools } from 'vue-query/devtools'
import { RouterView } from 'vue-router'

import PageHeader from './components/PageHeader.vue'
useQueryProvider()
</script>

<template>
  <PageHeader title="Vue 3 broilerplate" />
  <RouterView />
  <VueQueryDevTools />
</template>
