import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type IProduct, type IServerResponse } from './../models/products.model'

export const useProductsStore = defineStore('products', () => {
  const isLoading = ref<boolean>(false)
  const isError = ref<boolean>(false)

  const products = ref<Array<IProduct>>([])

  const fetchProducts = async (limit = 12, skip = 0) => {
    isLoading.value = true

    try {
      const response = await axios.get<IServerResponse>(`products?limit=${limit}&skip=${skip}`)
      products.value = response.data.products
    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, isError, products, fetchProducts }
})
