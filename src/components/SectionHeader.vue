<template>
  <div :style="{ display: 'flex', justifyContent: 'space-between' }">
    <strong>{{ header }}</strong>

    <button v-if="redirectText">
      <p>{{ redirectText }}</p>
      <!-- add right arrow icon -->
    </button>
  </div>
</template>

<script setup lang="ts">
const { header, redirectText } = defineProps<{
  header: string;
  redirectText?: string;
}>();
</script>
