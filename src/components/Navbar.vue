<template>
  <nav class="bg-slate-500 mb-6">
    <div class="container mx-auto p-4 max-w-[1440px]">
      <div class="flex items-center justify-between">
        <RouterLink :to="{ path: '/', name: 'home' }" class="font-semibold text-xl">
          All from Dummy
        </RouterLink>

        <RouterLink :to="{ path: '/products', name: 'products' }" class="font-medium">
          Products
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
