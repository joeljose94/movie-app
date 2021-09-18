<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Movie</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Movie</ion-title>
        </ion-toolbar>
      </ion-header>
      <h3>Filter By Genre</h3>
      <!-- https://5balloons.info/filtering-list-using-computed-properties-in-vuejs/ -->
      <label>Genre
      <select name="genre" v-model="selectedCategory">
        <option value="all">Select a Genre</option>
        <option v-for="option,index in options" :key="index" :value="option.code">
          {{ option.name }}
        </option>
      </select> 
    </label>
    <p>Selected: {{ selectedCategory }}</p>
      <ion-list>
        <MovieList
        v-for="movie in filterMoviesByGenre"
        :key="movie.Id"
        :movie="movie"
      ></MovieList>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, } from '@ionic/vue';
import MovieList from '../components/MoviesList.vue';
import axios from 'axios';
export default  {
  name: 'Movie',
  props: ["movie"],
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, MovieList },
  data() {
    return {
      movies: [],
      options: [],
      selectedCategory: 'all'
    }
  },
  created() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.eventcinemas.com.au/Movies/GetNowShowing')
      .then(response => {
        this.movies = response.data.Data.Movies
        this.options = response.data.Data.Genres
    })

  },
  computed: {
    filterMoviesByGenre() {
      if (this.selectedCategory == 'all') {
        return this.movies
      } else {
        return this.movies.filter(movie => movie.Genres == this.selectedCategory)
      }
    }
  }

}
</script>