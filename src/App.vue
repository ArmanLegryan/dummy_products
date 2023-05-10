<template>
  <Navbar />

  <div class="container max-w-[1440px] mx-auto px-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<style scoped></style>
