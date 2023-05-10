<template>
  <div class="flex justify-center items-center flex-col h-full">
    <p class="mb-2">There is nothing to show you at the moment.</p>
    <p>
      Please go to the
      <RouterLink :to="{ path: '/products', name: 'products' }" class="text-cyan-500">
        Products
      </RouterLink>
      page.
    </p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
