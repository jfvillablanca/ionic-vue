<template>
  <ion-page>
    <ion-header
      :translucent="true"
      class="ion-no-border"
    >
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary" />
        </ion-buttons>
        <h1>Loyalty Points</h1>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div>
          <!-- add crown icon -->
          <section-header button-text="View All">
            {{
              `${tiers[0]} Tier`
            }}
          </section-header>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit
          </p>
        </div>

        <!-- add progress wheel -->

        <section-header button-text="How it Works">
          Rewards
        </section-header>

        <div :style="{ display: 'flex', justifyContent: 'space-around' }">
          <button
            v-for="tier in ['All'].concat(tiers)"
            :key="tier"
          >
            {{ tier }}
          </button>
        </div>
        <!-- add reward items (cards) -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from '@ionic/vue';
import { SectionHeader } from '@/components';
const tiers = ['Beginner', 'Intermediate', 'Loyal'];
</script>

<style scoped>
#container {
  position: relative;
  margin: 1rem;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
