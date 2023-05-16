import { storeToRefs } from 'pinia'
import { useProductsStore } from '../stores/products'
import { computed, onMounted } from 'vue'

export const useProducts = () => {
  const store = useProductsStore()
  const { fetchProducts } = useProductsStore()
  const { products, isLoading } = storeToRefs(store)

  const slicedProducts = computed(() => products.value.slice(0, 8))

  onMounted(() => fetchProducts())

  return { slicedProducts, products, isLoading }
}
