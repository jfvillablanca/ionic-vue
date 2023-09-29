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

    <ion-content :fullscreen="true">
      <div id="container">
        <!-- searchbar -->
        <custom-searchbar enable-filter />

        <!-- categories -->
        <ion-button
          v-for="category in menuCategories"
          :key="category"
        >
          {{ category }}
        </ion-button>

        <div class="menu-cards">
          <menu-card-item
            v-for="item in menuItems"
            :key="item.name"
            :menu-item="item"
          />
        </div>
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
import { CustomSearchbar, MenuCardItem } from '@/components';
import { MenuItemArrayKey } from '@/symbols';
import { menuCategories } from '@/types';
import { inject } from 'vue';

const menuItems = inject(MenuItemArrayKey) ?? [];
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

.menu-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
