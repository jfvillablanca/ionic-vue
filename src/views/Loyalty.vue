<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div>
          <div :style="{ display: 'flex', justifyContent: 'space-between' }">
            <div>
              <!-- add crown icon -->
              <strong>{{ `${tiers[0]} Tier` }}</strong>
            </div>
            <button>
              <p>View All</p>
              <!-- add right arrow icon -->
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit
          </p>
        </div>
        <!-- add progress wheel -->
        <div :style="{ display: 'flex', justifyContent: 'space-between' }">
          <div>
            <strong>Rewards</strong>
          </div>
          <button>
            <p>How it Works</p>
            <!-- add right arrow icon -->
          </button>
        </div>
        <div :style="{ display: 'flex', justifyContent: 'space-around' }">
          <button v-for="tier in ['All'].concat(tiers)">{{ tier }}</button>
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
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
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
