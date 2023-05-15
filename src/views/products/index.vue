<template>
  <AppLoader v-if="isLoading" />

  <div
    v-else
    class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-4 justify-center"
  >
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductsStore } from '../../stores/products'
import { onMounted } from 'vue'
import ProductCard from '../../components/products/ProductCard.vue'
import AppLoader from '../../components/AppLoader.vue'

const store = useProductsStore()
const { fetchProducts } = useProductsStore()
const { isLoading, products } = storeToRefs(store)

onMounted(() => fetchProducts())
</script>

<style lang="scss" scoped></style>
