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
        <ion-text>
          <h1>Our Foods</h1>
        </ion-text>
        <ion-button slot="end">
          <ion-icon
            slot="icon-only"
            :icon="bagHandle"
          />
        </ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content
      class="ion-padding"
      :fullscreen="true"
    >
      <!-- searchbar -->
      <custom-searchbar enable-filter />

      <!-- categories -->
      <category-button-swiper />

      <div class="menu-cards">
        <menu-card-item
          v-for="item in menuItems"
          :key="item.name"
          :menu-item="item"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonText,
  IonToolbar,
} from '@ionic/vue';
import { bagHandle } from 'ionicons/icons';
import {
  CategoryButtonSwiper,
  CustomSearchbar,
  MenuCardItem,
} from '@/components';
import { MenuItemArrayKey } from '@/symbols';
import { inject } from 'vue';

const menuItems = inject(MenuItemArrayKey) ?? [];
</script>

<style scoped>
.menu-cards {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
