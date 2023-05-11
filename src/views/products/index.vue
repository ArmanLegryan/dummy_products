<template>
  <div class="products">
    <div v-if="isLoading" class="text-center">
      <div
        class="inline-flex h-[50px] w-[50px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
      ></div>
    </div>

    <div
      v-else
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-4 justify-center"
    >
      <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductsStore } from '../../stores/products'
import { onMounted } from 'vue'
import Product from '../../components/Product.vue'

const store = useProductsStore()
const { fetchProducts } = useProductsStore()
const { isLoading, products } = storeToRefs(store)

onMounted(() => fetchProducts())
</script>

<style lang="scss" scoped></style>
