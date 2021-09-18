<template>
  <ion-title>Details</ion-title>
    <ion-content>
      <h2> {{ details }} </h2>
      <ion-list>
        <ul>
          
        </ul>
      </ion-list>
    </ion-content>
</template>

<script>
import {
  IonList,
  IonContent,
  IonTitle,
} from "@ionic/vue";

export default {
  name: "FormDetails",
  props: ['details'],
  components: {
    IonList,
    IonContent,
    IonTitle,
  }
}
</script>