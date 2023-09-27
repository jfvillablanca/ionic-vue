<template>
  <div class="card">
    <figure>
      <!-- insert food image here -->
    </figure>
    <h1>{{ menuItem.name }}</h1>
    <h2>{{ menuItem.category }}</h2>
    <div :style="{ display: 'flex' }">
      <p>{{ `P ${menuItem.price}` }}</p>
      <!-- insert star render {menuItem.rating} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '@/types';

const { menuItem } = defineProps<{
  menuItem: MenuItem;
}>();
</script>

<style scoped>
.card {
  display: 'flex';
}
</style>
