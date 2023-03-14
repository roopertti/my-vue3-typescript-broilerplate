<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue'
import ExternalLink from '../components/ExternalLink.vue'
</script>

<template>
  <PageLayout title="About">
    <template #content>
      <p class="mb-4">
        This boilerplate will help you get started with Vue 3 development
        quickly!
      </p>
      <p>
        Check out
        <ExternalLink
          id="github-link"
          href="https://github.com/roopertti/my-vue3-typescript-broilerplate"
          text="Github repository"
        />
        for more details.
      </p>
    </template>
  </PageLayout>
</template>
