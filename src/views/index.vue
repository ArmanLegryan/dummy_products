<template>
  <div class="products">
    <p class="text-3xl mb-4">Products</p>

    <AppCarousel :items="slicedProducts" class="mb-8">
      <template #item="item">
        <ProductCard :product="item" class="h-full" />
      </template>
    </AppCarousel>

    <div class="text-right">
      <RouterLink :to="{ path: '/products', name: 'products' }">
        <span class="bg-slate-100 text-slate-700 px-4 py-2 rounded-full">Show more</span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useProducts } from '../composables/useProducts'
import AppCarousel from '../components/AppCarousel.vue'
import ProductCard from '../components/products/ProductCard.vue'

const { slicedProducts } = useProducts()
</script>
