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

      <ion-button
        @click="router.push('/menu')"
        class="cta"
      >
        Order Now!
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonAvatar,
  IonButton,
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
import { useRouter } from 'vue-router';

const profile = inject(ProfileKey);
const router = useRouter();
</script>

<style scoped>
ion-button.cta {
  position: fixed;
  right: 5%;
  bottom: 10%;
  font-size: 1.4rem;
  font-weight: bolder;

  --padding-top: 2rem;
  --padding-bottom: 2rem;
  --padding-start: 4rem;
  --padding-end: 4rem;
  --box-shadow: var(--ion-color-medium-tint) 2px 2px;
}
</style>
