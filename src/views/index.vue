<template>
  <div class="products">
    <p class="text-3xl mb-4">Products</p>

    <AppCarousel :items="slicedProducts" class="mb-8">
      <template #item="item">
        <Product :product="item" class="h-full" />
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
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '../stores/products'
import AppCarousel from '../components/AppCarousel.vue'
import Product from '../components/Product.vue'

const store = useProductsStore()
const { fetchProducts } = useProductsStore()
const { products } = storeToRefs(store)

const slicedProducts = computed(() => products.value.slice(0, 8))

onMounted(() => fetchProducts())
</script>
