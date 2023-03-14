<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue';
import PostList from '../components/PostList.vue'
</script>
<template>
  <PageLayout title="Posts">
    <template #content>
      <PostList :user-id="1" />
    </template>
  </PageLayout>
</template>
