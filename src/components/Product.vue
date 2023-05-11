<template>
  <div
    class="flex flex-col justify-between border border-cyan-700 max-w-sm rounded overflow-hidden shadow-cyan-700 shadow-md hover:shadow-cyan-700 hover:shadow-lg hover:transition-all"
  >
    <div>
      <img
        class="w-full max-h-[170px] object-contain"
        :src="product.thumbnail"
        :alt="product.title"
      />

      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-base text-slate-500">
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="flex justify-between items-center px-6 pt-4 pb-2 mb-2">
      <span>$ {{ product.price }}</span>
      <button class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        {{ product.category }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from '../models/products.model'

defineProps<{
  product: IProduct
}>()
</script>
