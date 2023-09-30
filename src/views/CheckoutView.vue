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

    <ion-content
      class="ion-padding"
      :fullscreen="true"
    >
      <!-- Delivery Info -->
      <div class="card">
        <div class="main">
          <h1>{{ fullName }}</h1>
          <p>{{ profile?.phone }}</p>
          <p>{{ profile?.email }}</p>
        </div>
      </div>
      <!-- add ellipsis menu -->

      <div
        class="card"
        v-for="address in addresses"
        :key="address.fullAddress"
      >
        <div class="main">
          <h1>{{ address.header }}</h1>
          <p>{{ address.fullAddress }}</p>
        </div>
        <input
          type="radio"
          :checked="address.isDefault"
        >
      </div>

      <!-- Orders -->
      <section-header class="section-header">
        Orders
      </section-header>
      <checkout-order-card
        v-for="orderedItem in orderList"
        :ordered-item="orderedItem"
        :key="orderedItem.item.name"
      />

      <!-- Payment Options -->
      <section-header class="section-header">
        Payment Option
      </section-header>
      <div
        class="card"
        v-for="option in paymentOptions"
        :key="option.value"
      >
        <div class="main">
          <h1>{{ option.name }}</h1>
          <p>{{ option.description }}</p>
        </div>
        <input
          type="radio"
          :checked="option.value === 'cod'"
        >
      </div>

      <div>
        <h3>Subtotal</h3>
        <h3>P 185</h3>
      </div>
      <div>
        <h3>Delivery Charge</h3>
        <h3>P 59</h3>
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
// placeholder data
import { orderedItems } from '../../placeholders';
import { ProfileKey } from '@/symbols';
import { CheckoutOrderCard, SectionHeader } from '@/components';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonInput,
  IonHeader,
  IonPage,
  IonText,
  IonToolbar,
  modalController,
} from '@ionic/vue';
import { inject } from 'vue';
import { SuccessCheckoutModal } from '@/components';

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
    component: SuccessCheckoutModal,
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

const orderList = orderedItems.map((orderedItem) => {
  const itemSubtotal = orderedItem.item.price * orderedItem.quantity;
  const extrasSubtotal = orderedItem.extras.reduce(
    (cur, acc) => cur + acc.quantity * acc.unitPrice,
    0,
  );
  return { ...orderedItem, subtotal: itemSubtotal + extrasSubtotal };
});
</script>

<style lang="scss" scoped>
.section-header {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.card {
  margin: 0;
  margin-bottom: 0.8rem;
  padding: 1.5rem;
  border-radius: var(--border-radius-button);

  display: flex;

  background: var(--ion-color-medium-tint);

  color: var(--ion-color-light-contrast);
  * {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  input[type='radio'] {
    max-height: fit-content;
    align-self: start;
  }

  p,
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0.2rem;
    font-weight: 400;
    color: var(--ion-color-medium-shade);
  }
}

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
