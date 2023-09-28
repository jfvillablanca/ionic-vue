<template>
  <ion-button
    fill="clear"
    :router-link="`/loyalty`"
  >
    <span>👑</span>
    <strong>{{ `${profile?.points ?? 0} Points` }}</strong>
    <ion-icon :icon="chevronForwardOutline" />
  </ion-button>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { ProfileKey } from '@/symbols';
import { inject } from 'vue';
import { chevronForwardOutline } from 'ionicons/icons';

const profile = inject(ProfileKey);
</script>

<style scoped>
strong {
  color: var(--ion-color-light-contrast);
}

span {
  font-size: 2rem;
  margin-right: 0.7rem;
}

strong {
  text-transform: capitalize;
  margin-inline: 1rem;
}
</style>
