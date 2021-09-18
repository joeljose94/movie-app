<template>
  <ion-item @click="getDetails">
    <ion-thumbnail slot="start">
      <ion-img :src="movie.LargePosterUrl" :alt="movie.Name"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ movie.Name }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["movie"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
  methods: {
    getDetails() {
      this.$router.push({ name: "MovieDetails", params: {id: this.movie.Id, movieObj: JSON.stringify(this.movie)} })
    }
  }
};
</script>