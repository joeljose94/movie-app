<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Form</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Form</ion-title>
        </ion-toolbar>
      </ion-header>

      <form class="ion-padding" @submit.prevent="submitForm">
        <ion-item>
          <ion-label position="floating">Enter your name: </ion-label>
          <ion-input v-model="enteredName" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">Enter your fav movie: </ion-label>
          <ion-input v-model="favMovie" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">DD/MM/YYYY</ion-label>
          <ion-datetime
            displayFormat="DD/MM/YYYY"
            min="1900"
            max="2003"
            placeholder="Select Date"
            v-model="dob"
          ></ion-datetime>
        </ion-item>

        <ion-list>
          <ion-item>
            <ion-label>Crazy Movie Head?</ion-label>
            <ion-toggle @ionChange="toggleFunc($event)">
            </ion-toggle>
          </ion-item>
        </ion-list>
        <ion-button type="submit" expand="full">Submit</ion-button>
        <ion-button expand="full" @click="resetData">Reset</ion-button>
      </form>
      <!-- <div v-show="showResults">      
          <ion-list v-for="(detail, index) in details" :key="index">
              <b> User Details </b>
              <br>
              Name: {{ detail.enteredName }}
              <br>
              DOB: {{ detail.dob }}
              <br>
              Favourite Movie: {{ detail.favMovie }}
              <br>
              Movie Head: {{ detail.mfan }}
              <br>
          </ion-list>
      </div> -->
      <FormDetails :details="details"></FormDetails>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonDatetime,
  IonToggle,
} from "@ionic/vue";
import FormDetails from '../pages/FormDetails.vue';

export default {
  name: "Form",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonDatetime,
    IonToggle,
    FormDetails
  },
  data() {
    return {
      enteredName: "",
      favMovie: "",
      dob: "",
      mfan: false,
      details: {},
      showResults: false,
    }
  },
  methods: {
    toggleFunc(event){
      if(event.detail.checked){
        this.mfan = true
      }
    },
    resetData() {
      this.details = []
      this.showResults = false
    },
    submitForm() {
       if  ( this.enteredName == '' || this.favMovie == null || this.dob == '' ) {
           alert('Please fill details to submit')
           return
       }

      var n_dob = this.dob.split("T")[0]
      // this.details = []
      this.details = {
        enteredName: this.enteredName,
        favMovie: this.favMovie,
        dob: n_dob,
        mfan: this.mfan
      }
      //this.details.push(result)
      this.showResults = true
      console.log(this.details)
      
      // this.enteredName = "",
      // this.favMovie = "",
      // this.dob = "",
      // this.mfan = false,
    }
  },
};
</script>