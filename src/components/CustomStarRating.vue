<template>
  <star-rating
    v-model="ratingModel"
    :star-size="11"
    :star-color="'#FFC02E'"
    :inactive-color="'#676767'"
    :disable-click="true"
  />
</template>

<script setup lang="ts">
import StarRating from 'vue3-star-ratings';
const { rating } = defineProps<{ rating: number }>();
const ratingModel = rating;
</script>
