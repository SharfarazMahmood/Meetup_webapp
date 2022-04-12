import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DateFilter from "./stringFormaters/date";

// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false;

Vue.filter("dateFormater", DateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    // firebase.initializeApp({
    initializeApp({
      apiKey: "AIzaSyDKY8XXpXXLktYAqkCRNrTFEv3ME8I9o-8",
      authDomain: "devmeetup-vuejs-bc222.firebaseapp.com",
      projectId: "devmeetup-vuejs-bc222",
      storageBucket: "devmeetup-vuejs-bc222.appspot.com",
      messagingSenderId: "701109909916",
      appId: "1:701109909916:web:21d56e55bae3575c463059",
      measurementId: "G-G9JQNFKXW2",
    });
  },
}).$mount("#app");
