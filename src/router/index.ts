import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import Products from '../views/products/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/products/[id].vue')
    }
  ]
})

export default router
