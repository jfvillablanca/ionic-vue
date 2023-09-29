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
        <points-button />
        <ion-buttons slot="end">
          <ion-avatar>
            <img
              :alt="profile?.firstName"
              :src="profile?.image"
            >
          </ion-avatar>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content
      class="ion-padding"
      :fullscreen="true"
    >
      <!-- greeting -->
      <div>
        <!-- add logo -->
        <h2>Anneoyong, {{ profile?.firstName }}!</h2>
        <h1>What do you want to eat?</h1>
      </div>

      <!-- searchbar -->
      <custom-searchbar />

      <!-- special offers -->
      <section-header
        header="Special Offers!"
        redirect-text="View All"
      />
      <!-- add special offers card carousel -->

      <!-- category -->
      <section-header header="Category" />
      <!-- add category card carousel -->

      <!-- what's new -->
      <section-header header="What's New?" />
      <!-- add promotional banner -->

      <!-- most popular -->
      <section-header header="Most Popular" />
      <!-- add most popular card items -->

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from '@ionic/vue';
import { CustomSearchbar, PointsButton, SectionHeader } from '@/components';
import { ProfileKey } from '@/symbols';
import { inject } from 'vue';

const profile = inject(ProfileKey);
const food = ['Steak Fries Veggies'];
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
