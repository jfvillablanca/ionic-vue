<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Order Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <!-- Delivery Info -->
        <ion-card>
          <h1>{{ fullName }}</h1>
          <p>{{ profile?.phone }}</p>
          <p>{{ profile?.email }}</p>
          <!-- add ellipsis menu -->
        </ion-card>
        <ion-radio-group :value="true">
          <ion-card
            v-for="address in addresses"
            :key="address.fullAddress"
          >
            <ion-radio :value="address.isDefault">
              <div>
                <h1>{{ address.header }}</h1>
                <p>{{ address.fullAddress }}</p>
              </div>
            </ion-radio>
            <!-- add ellipsis menu -->
          </ion-card>
        </ion-radio-group>

        <!-- Orders -->
        <section-header header="Orders" />
        <!-- insert order cards -->

        <!-- Payment Options -->
        <section-header header="Payment Option" />
        <ion-radio-group value="cod">
          <ion-card
            v-for="option in paymentOptions"
            :key="option.value"
          >
            <ion-radio :value="option.value">
              <h1>{{ option.name }}</h1>
              <p>{{ option.description }}</p>
            </ion-radio>
          </ion-card>
        </ion-radio-group>

        <div>
          <h3>Subtotal</h3>
          <h3>P 185</h3>
        </div>
        <div>
          <h3>Delivery Charge</h3>
          <h3>P 59</h3>
        </div>
      </div>

      <!-- supposed to be conditionally rendered iff 'cod' -->
      <ion-input
        label="Change for"
        label-placement="stacked"
        placeholder="1000"
      />
    </ion-content>
    <ion-footer>
      <div>
        <p>Grand Total</p>
        <p>P 244</p>
      </div>
      <ion-button @click="openModal">
        Place Order
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ProfileKey } from '@/symbols';
import { SectionHeader } from '@/components';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonContent,
  IonFooter,
  IonInput,
  IonHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  modalController,
} from '@ionic/vue';
import { inject } from 'vue';
import SuccessCheckoutModalVue from '@/components/SuccessCheckoutModal.vue';

const profile = inject(ProfileKey);
const fullName = `${profile?.firstName} ${profile?.lastName}`;
const addresses = profile?.addresses.map((address) => ({
  ...address,
  header: address.type === 'home' ? 'My Home Address' : 'Work/Office',
  fullAddress: `${address.streetName} ${address.barangay ?? ''} ${
    address.city
  } ${address.zipCode} ${address.country}`,
}));

async function openModal() {
  const modal = await modalController.create({
    component: SuccessCheckoutModalVue,
  });
  modal.present();
}

const paymentOptions = [
  {
    value: 'cod',
    name: 'Cash on Delivery',
    description: 'Pay when you received the order',
  },
  {
    value: 'loyalty',
    name: 'Loyalty Points',
    description: 'Pay using your earned loyalty points',
  },
  {
    value: 'paypal',
    name: 'Paypal',
    description: 'A new tab will open to access your account',
  },
  {
    value: 'paynamics',
    name: 'Paynamics',
    description: 'Chose paynamics services available from you',
  },
];
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
