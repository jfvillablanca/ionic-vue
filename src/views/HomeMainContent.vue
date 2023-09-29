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
      <home-greeting />

      <!-- searchbar -->
      <custom-searchbar />

      <!-- special offers -->
      <section-header button-text="View All">
        Special Offers!
      </section-header>
      <home-special-offers />

      <!-- category -->
      <section-header>Category</section-header>
      <!-- add category card carousel -->

      <!-- what's new -->
      <section-header>What's New?</section-header>
      <!-- add promotional banner -->

      <!-- most popular -->
      <section-header>Most Popular</section-header>
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
import {
  CustomSearchbar,
  HomeGreeting,
  HomeSpecialOffers,
  PointsButton,
  SectionHeader,
} from '@/components';
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
