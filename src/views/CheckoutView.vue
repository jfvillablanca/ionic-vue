<template>
  <ion-page>
    <ion-header
      :translucent="true"
      class="ion-no-border"
    >
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" />
        </ion-buttons>
        <ion-text>
          <h1>Order Summary</h1>
        </ion-text>
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
    <ion-footer class="ion-no-border ion-padding">
      <div>
        <h2>Grand Total</h2>
        <h1>P 244</h1>
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
  IonText,
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

<style lang="scss" scoped>
ion-footer {
  background-color: var(--ion-color-light);

  display: flex;
  justify-content: space-between;

  * {
    font-size: 1.6rem;
    font-weight: bold;
  }

  h1,
  h2 {
    margin-top: 0;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: var(--ion-color-medium-shade);
  }

  ion-button {
    width: 60%;
  }
}
</style>
