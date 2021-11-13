<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getPostsByUser } from '../services/posts'
import ResponsiveGrid from './ResponsiveGrid.vue'
import PostItem from './PostItem.vue'

const props = defineProps<{ userId: number }>()

const { isLoading, isError, error, data } = useQuery(
  ['posts', props.userId],
  () => getPostsByUser(props.userId),
)
</script>

<template>
  <div class="p-8 max-w-5xl m-auto">
    <h2 class="text-center mb-4">Posts</h2>

    <p data-testid="postlist-loading-text" v-if="isLoading">Loading posts...</p>

    <p v-if="isError">{{ error }}</p>

    <ResponsiveGrid v-if="!isLoading && !isError">
      <PostItem
        v-for="post in data"
        :key="post.id"
        :title="post.title"
        :body="post.body"
        >{{ post.title }}</PostItem
      >
    </ResponsiveGrid>
  </div>
</template>
