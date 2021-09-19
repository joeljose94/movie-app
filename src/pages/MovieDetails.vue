<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home/movie"></ion-back-button>
        </ion-buttons>
        <ion-title>Movie Details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-card>
        <ion-card-header class="ion-no-padding">
        <div style="width:100%; text-align:center">
            <img :src="details.LargePosterUrl" :alt="details.Name">
        </div>
        <h2 class="ion-text-center"><b>{{ details.Name }}</b></h2>
        </ion-card-header>

        <ion-card-content>
            <h2 class="ion-text-center"><b>Director:</b> {{ details.Director }}</h2>
            <h2 class="ion-text-center"><b>Genre:</b> {{ details.Genres }}</h2>
            <h2 class="ion-text-center"><b>RunTime:</b> {{ details.RunningTime }} mins</h2>
            <h2 class="ion-text-center"><b>Release Date:</b> {{ details.ReleasedAt }}</h2>
            <h2 class="ion-text-center"><b>Cast:</b> {{ details.MainCast }}</h2>
            <p class="ion-text-center"><b>Plot:</b>{{ details.Synopsis }} </p>
        </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonToolbar,
} from "@ionic/vue";

export default {
  data() {
    return {
      movie_details: {},
      details: []  
    }
  },
  components: {
    IonPage,
    IonBackButton,
    IonHeader,
    IonTitle,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonToolbar
  },
  created() {
    this.movie_details = this.$route.params
    this.details = JSON.parse(this.movie_details.movieObj)
  }
}
</script>
<style scoped>
img{
    border: 1px solid #ddd;
    border-radius: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
ion-card{
    overflow: scroll;
}
</style>