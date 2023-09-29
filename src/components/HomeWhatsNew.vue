<template>
  <div :style="{ marginBlock: '2.4rem' }">
    <img :src="whatsNew">
  </div>
</template>

<script setup lang="ts">
import { promotions } from '@/assets';
const { whatsNew } = promotions;
</script>

<style scoped>
div {
  width: 100%;
  margin-block: 2.4rem;
}

img {
  width: 100%;
}
</style>
