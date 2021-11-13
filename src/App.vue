<script setup lang="ts">
import { useQueryProvider } from 'vue-query'
import { VueQueryDevTools } from 'vue-query/devtools'

import SiteHeader from './components/SiteHeader.vue'
import PostList from './components/PostList.vue'
useQueryProvider()
</script>

<template>
  <SiteHeader msg="Vue 3 broilerplate" />
  <PostList :user-id="1" />
  <VueQueryDevTools />
</template>
