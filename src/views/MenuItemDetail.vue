<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>{{ menuItem.category }}</ion-title>
        <!-- add cart button -->
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <!-- image here -->

        <h1>{{ menuItem.name }}</h1>
        <!-- insert star render {menuItem.rating} -->

        <p>{{ menuItem.description }}</p>

        <h2>{{ menuItem.price }}</h2>
        <!-- insert qty  (+/-) buttons-->

        <ion-button>Add to Bag</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { MenuItemArrayKey } from '@/symbols';
import { MenuItem } from '@/types';
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { id } = route.params;

let menuItem: MenuItem;
const menuItems = inject(MenuItemArrayKey) ?? [];
const menuItemData = menuItems.find(
  (item) => item.id === (typeof id === 'string' ? id : null),
);

if (menuItemData) {
  menuItem = menuItemData;
} else {
  router.back();
}
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
