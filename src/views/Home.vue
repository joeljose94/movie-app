<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/home/form">
          <ion-icon :icon="square" />
          <ion-label>Form</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="movie" href="/home/movie">
          <ion-icon :icon="square" />
          <ion-label>Movie</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { square } from 'ionicons/icons';

export default {
  name: 'Home',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return { 
      square
    }
  }
}
</script>