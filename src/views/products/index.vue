<template>
  <div class="products">
    <div v-if="isLoading">Loading...</div>

    <div
      v-else
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-4 justify-center"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col justify-between border border-cyan-700 max-w-sm rounded overflow-hidden shadow-cyan-700 shadow-md hover:shadow-cyan-700 hover:shadow-lg hover:transition-all"
      >
        <div>
          <img
            class="w-full max-h-[170px] object-contain"
            :src="product.images[0]"
            :alt="product.title"
          />

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ product.title }}</div>
            <p class="text-gray-700 text-base">
              {{ product.description }}
            </p>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #photography
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductsStore } from '../../stores/products'
import { onMounted } from 'vue'

const store = useProductsStore()
const { fetchProducts } = useProductsStore()
const { isLoading, products } = storeToRefs(store)

onMounted(() => fetchProducts())
</script>

<style lang="scss" scoped></style>
