<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul class="flex gap-3 justify-center">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>
