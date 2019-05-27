// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate';
import store from './store'
import axios from 'axios';
import env from './env'
import 'vuetify/dist/vuetify.min.css'


axios.defaults.baseURL = env.API_URL;
window.axios = axios;

// axios.interceptors.response.use(response => {
//   console.log(response.status)
// }, error => {
//   // console.log('errror XD XD X D DX');
// })

Vue.use(Vuetify, { theme: {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}});

Vue.use(Vuelidate);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
