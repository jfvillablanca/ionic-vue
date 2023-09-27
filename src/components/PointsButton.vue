<template>
  <ion-button :router-link="`/loyalty`">
    <!-- add crown icon -->
    <strong>{{ `${profile?.points ?? 0} Points` }}</strong>
    <!-- add right arrow icon -->
  </ion-button>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import { ProfileKey } from '@/symbols';
import { inject } from 'vue';
const profile = inject(ProfileKey);
</script>
