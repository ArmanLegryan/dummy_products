<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
    <Slide v-for="item in items" :key="item.id">
      <slot v-bind="item" name="item" />
    </Slide>

    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 1" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
import { type IProduct } from '../models/products.model'

type ItemPropTypes = IProduct

defineProps<{
  items: Array<ItemPropTypes>
}>()

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  autoplay: 2000,
  pauseAutoplayOnHover: true
})

const breakpoints = ref({
  769: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  1025: {
    itemsToShow: 3,
    snapAlign: 'center'
  }
})
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  color: white;

  &:hover {
    color: white;
  }
}

.carousel__next {
  right: -15px;
}

.carousel__prev {
  left: -15px;
}
</style>
