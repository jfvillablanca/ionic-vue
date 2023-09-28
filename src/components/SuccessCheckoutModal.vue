<template>
  <ion-content>
    <div>
      <!-- insert thumbs up clip art -->
    </div>
    <h1>Order Received</h1>
    <h2>
      Your order No. {{ placeholderOrderNumber }} is successful and is now being
      processed. Kindly wait for our notification regarding your order.
    </h2>
    <ion-button> Track Order </ion-button>
    <ion-button @click="goHome">
      Back to Home
    </ion-button>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent, IonButton, modalController } from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const placeholderOrderNumber = '12343456';

function goHome() {
  modalController.dismiss();
  router.push('/home');
}
</script>

<style scoped></style>
