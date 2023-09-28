<template>
  <ion-content>
    <div>
      <!-- insert thumbs up clip art -->
    </div>
    <h1>Successfully Added!</h1>
    <h2>What do you want to do now?</h2>
    <ion-button @click="checkout">
      Proceed to checkout
    </ion-button>
    <ion-button @click="addMore">
      Add more
    </ion-button>
  </ion-content>
</template>

<script lang="ts" setup>
import { IonContent, IonButton, modalController } from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function addMore() {
  modalController.dismiss();
  router.push('/menu');
}

function checkout() {
  modalController.dismiss();
  router.push('/checkout');
}
</script>

<style scoped></style>
