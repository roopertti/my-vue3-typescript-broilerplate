<script setup lang="ts">
import CounterButton from '../components/CounterButton.vue'
import PageLayout from '../components/PageLayout.vue'
import PostList from '../components/PostList.vue'
import StackUtil from '../components/StackUtil.vue'
</script>
<template>
  <PageLayout title="Posts">
    <template #content>
      <StackUtil gap="md">
        <template #content>
          <PostList :user-id="1" />
          <CounterButton />
        </template>
      </StackUtil>
    </template>
  </PageLayout>
</template>
