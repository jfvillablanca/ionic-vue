<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu
        content-id="main-content"
        type="overlay"
      >
        <ion-content>
          <ion-list id="inbox-list">
            <!-- Profile Header -->
            <div>
              <div class="header-buttons">
                <ion-avatar>
                  <img
                    :alt="profile?.firstName"
                    :src="profile?.image"
                  >
                </ion-avatar>
                <ion-menu-toggle>
                  <points-button :profile="profile" />
                </ion-menu-toggle>
              </div>
              <ion-header>{{ fullName }}</ion-header>
              <ion-note>{{ profile.phone }}</ion-note>
            </div>

            <ion-menu-toggle
              :auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                />
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content" />
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
// Hardcoded placeholder data
import { profile, menuItems } from '../placeholders';

import { PointsButton } from '@/components';
import { ProfileKey, MenuItemArrayKey } from '@/symbols';
import {
  IonApp,
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonHeader,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { provide, ref } from 'vue';
import {
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Order Now!',
    url: '/menu',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: 'Notifications',
    url: '/home',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Store Locator',
    url: '/home',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "FAQ's",
    url: '/home',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
];

const fullName = `${profile.firstName} ${profile.lastName}`;

provide(ProfileKey, profile);
provide(MenuItemArrayKey, menuItems);

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase(),
  );
}
</script>

<style scoped>
.header-buttons {
  display: flex;
  align-items: end;
}

.header-buttons ion-avatar {
  margin: 1rem;
}

.header-buttons ion-menu-toggle {
  flex: 1;
}
</style>
